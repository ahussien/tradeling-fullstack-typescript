'use strict';
require('dotenv').config()

module.exports = {
    env: process.env.NODE_ENV || 'production',
    redisURL: process.env.REDIS_URL || 'redis://127.0.0.1:6379/1'
};