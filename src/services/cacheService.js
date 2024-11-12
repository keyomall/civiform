const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient(process.env.REDIS_URL);

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const cacheService = {
  async get(key) {
    return getAsync(key);
  },

  async set(key, value, expiryInSeconds = 3600) {
    await setAsync(key, JSON.stringify(value), 'EX', expiryInSeconds);
  },

  async invalidate(key) {
    await client.del(key);
  },
};

module.exports = cacheService;