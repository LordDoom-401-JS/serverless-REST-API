'use strict';

const mug = require('./Models/mug.schema.js');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  const {color, capacity, penholder} = JSON.parse(event.body);
  try{
    if(id) {
      const someMug = new mug({id, color, capacity, penholder});
      const vessel = await someMug.save();
      return {
        statusCode: 200,
        body: JSON.stringify(vessel)
      }
    }
  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
};