'use strict';


/**
 * Perform an arithmetic operation on two numbers
 *
 * body Calculate_body 
 * operation String 
 * returns inline_response_200
 **/
exports.calculateOperation = function(body,operation) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 15
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

