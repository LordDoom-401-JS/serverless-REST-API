'use strict';

const mug = require('./Models/mug.schema.js');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('_id_', id);

  try {

    let datamuggin; 

    if(id){
      const list = await mug.query('id').eq(id).limit(1).exec();
      datamuggin = list;
    } else {
      datamuggin = await mug.scan().exec();
    }

    return {
      statusCode: 200,
      body: JSON.stringify(datamuggin)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }

};