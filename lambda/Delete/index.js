'use strict';

const mug = require('./Models/mug.schema.js');
// pulling id from request...
exports.handler = async (event) => {
  try {
    const record = new mug({ id, capacity, color, paperweight });
    const data = await record.delete();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }

};