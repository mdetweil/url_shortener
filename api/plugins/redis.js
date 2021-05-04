"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
  fastify.register(require("fastify-redis"), {
    host: "redis",
    port: "6379",
  });
});
