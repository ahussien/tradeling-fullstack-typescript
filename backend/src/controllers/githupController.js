const githubApi = require('../services/github-api');
const logger = require('../services/logger');
const cache = require('../services/cache');
const config = require('../config/index');

/**
 * Search Githup
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @return void
 */
exports.search = async (req, res, next) => {
  const { type, query } = req.body;
  const cachingKey = `${type}:${query}`;

  if (!query || query.length === 0)
    res.status(400).json({ message: 'Fill out search text' })
  else if (!['users', 'repositories'].includes(type)) {
    res.status(400).json({ message: `Invalid type: ${type}` })
  } else {
    try {
      logger.info(`Try fetching the result from Redis:${cachingKey}`);

      // Try fetching the result from Redis first in case we have it cached
      // If that key exist in Redis store
      if (await cache.has(cachingKey)) {
        const cachedResults = await cache.get(cachingKey);

        logger.info(`${cachingKey}:Result featched succesfull from Redis`);

        res.json(cachedResults);
      } else {
        // Key does not exist in Redis store and Fetch directly from Githup API
        logger.info(`${cachingKey}:Key does not exist in Redis store and Fetch directly from Githup API`);

        let results = await githubApi.search(type, query);
                
        // Save the API response in the cache (key, time in sec, data); 7200 -> 120mins
        cache.set(cachingKey, results.data.items, config.cacheExpirationInSeconds);

        res.json(results.data.items);
      }
    } catch (error) {
      logger.error(error);
      res.status(500).json(error)
    }
  }
}

/**
* Clear cached searches
* 
* @param {Object} req
* @param {Object} res
* @param {Function} next
* @return void
*/
exports.clearCache = async (req, res, next) => {
  try {
    logger.info(`Clear backend caching`);

    await cache.clear();

    res.status(200).json(`redis cache cleared`);
  }
  catch (error) {
    logger.error(error);
    res.status(500).json(error)
  }
}