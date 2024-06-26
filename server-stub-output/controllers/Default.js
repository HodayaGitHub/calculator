'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.calculateOperation = function calculateOperation (req, res, next, body, operation) {
  Default.calculateOperation(body, operation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
