"use strict";

const opts = {
  schema: {
    body: {
      type: "object",
      properties: {
        url: { type: "string" },
      },
    },
    response: {
      type: "object",
      properties: {
        id: { type: "string" },
      },
    },
  },
};

module.exports = async function (fastify, opts) {
  const short = require("short-uuid");
  const { redis } = fastify;
  fastify.get("/:id", async function (request, reply) {
    try {
      const result = await redis.get(request.params.id);
      if (!result) {
        return reply.code(404).send({ error: "id not found" });
      }
      reply.redirect(result);
    } catch (err) {
      reply.code(400).send({ error: err });
    }
  });

  fastify.post("/", opts, async function (request, reply) {
    try {
      const val = request.body.url;
      const id = short.generate();
      await redis.set(id, val);
      return { id };
    } catch (err) {
      reply.code(400).send({ error: err });
    }
  });
};
