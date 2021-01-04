'use strict';

const mug = require('./Models/mug.schema.js');

exports.handler = async (event) => {
  const id = event.pathParameter.id;
  const {color, capacity, paperweight} = JSON.parse(event.body);
  try{
    if(id) {
      const someMug = new mug({color, capacity, paperweight});
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