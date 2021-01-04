'use strict';

const uuid = require('uuid').v4;
const mug = require('./Models/mug.schema.js');

exports.handler = async (event) => {
  const {capacity, color, penholder} = JSON.parse(event.body);

  const id = uuid();
// try catch
  try {
    const record = new mug({ id, capacity, color, penholder });
    const data = await record.save();

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