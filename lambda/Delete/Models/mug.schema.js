'use strict';

const dynamoose = require('dynamoose');

const mugSchema = new dynamoose.Schema({
  'id': String,
  'capacity': Number,
  'color': String,
  'penholder': { type : Boolean, default: false}
});

module.exports = dynamoose.model('mug', mugSchema);