"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
  fastify.register(require("fastify-redis"), {
    url: "redis://127.0.0.1",
  });
});
