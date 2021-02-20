'use strict';
require('dotenv').config()

module.exports = {
    env: process.env.NODE_ENV || 'development',
    redisURL: process.env.REDIS_URL || 'redis://127.0.0.1:6379/1',
    cacheExpirationInSeconds:process.env.CACHE_EXPIRATION_IN_SECONDS || 7200,
    githubSearchUrl:process.env.GITHUB_SEARCH_URL || 'https://api.github.com/search'
};