'use strict';

const redisClient = require('../services/redis');
const logger = require('../services/logger');

/**
 * Clear the cache
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @return void
 */
exports.clear = () => {
  logger.debug(`cache:clear`)
  redisClient.flushallAsync()
};

/**
 * Check if the cahce has an item
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @return void
 */
exports.has = async (key) => {
  logger.debug(`cache:has ${key}`);
  const reply = await redisClient.existsAsync(key)
  
  if (reply === 1) {
    return true;

  }
  return false;
}

/**
 * set item in the cache
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @return void
 */
exports.set = (key, value, expirationInSeconds, { serialize = JSON.stringify } = {}) => {
  logger.debug(`cache:set ${key}`)
  if (value !== undefined) {
    return redisClient.setexAsync(key, expirationInSeconds, serialize(value));
  }
}

/**
 * get item from the cache by key
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @return void
 */
exports.get = async (key, { unserialize = JSON.parse } = {}) => {
  logger.debug(`cache:get ${key}`)
  const value = await redisClient.getAsync(key);
  if (value) {
    return unserialize(value);
  } else {
    return undefined;
  }
}