(function(){

  'use strict';

  var ws = new WeakSet();

  var obj1 = {},
      obj2 = {};

  console.info('add obj1');
  ws.add(obj1);
  console.log(ws);

  console.info('add obj2');
  ws.add(obj2);
  console.log(ws);

  console.info('has obj1 => true');
  console.log(ws.has(obj1));

  console.info('has obj2 => true');
  console.log(ws.has(obj2));

  console.info('delete obj1');
  ws.delete(obj1);
  console.log(ws);

}());
