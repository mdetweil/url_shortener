"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const { redis } = fastify;
    redis.set("hello", "world", (err) => {
      console.log("error", err);
    });

    redis.get("hello", (err, val) => {
      reply.send(err || val);
    });
  });
};
