'use strict';

module.exports.soma = (event, context) => {

  let valor1 = event.a;
  let valor2 = event.b;
  let result = valor1 + valor2;
  return {
        resultado: result
  };
  // return { resultado: valor1 + valor2 };
};
