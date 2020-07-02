'use strict';

module.exports.soma = (event, context) => {

  let title = event.pathParameters.title;
  let body = JSON.parse(event.body);
  let valor1 = body.a;
  let valor2 = body.b;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: valor1 + valor2,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
