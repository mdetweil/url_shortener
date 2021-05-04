"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const { redis } = fastify;
    try {
      await redis.set("hello", "world");
    } catch (err) {
      console.log("error", err);
    }

    try {
      const result = await redis.get("hello");
      return result;
    } catch (err) {
      return err;
    }
  });
};
