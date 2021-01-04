'use strict';
const mug = require('./Models/mug.schema');
exports.handler = async (event) => {
  const id = event.pathParameters.id;
  try {
    const otherMug = await mug.query('id').eq(id).limit(1).exec();
    console.log(otherMug);
    await mug.delete();
    return {
      statusCode : 204,
      body: JSON.stringify({otherMug}),
    };
  } catch (err){
    return {
      statusCode : 500,
      response: JSON.stringify(err.message),
    };
  }
};