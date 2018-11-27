function type_check_v1(arg, type) {
  if (type === 'null'){
    return arg === null;
  }

  if (type === 'array'){
    return Array.isArray(arg);
  }

  return typeof arg === type
}


// function type_check_v2(arg, conf) {
//
//   console.log('### arg');
//   console.log(arg);
//   console.log('### conf');
//   console.log(conf);
//
//   let valid = false;
//
//   if (typeof conf.type !== "undefined" && !type_check_v1(arg, conf.type)) {
//     valid = true;
//   }
//
//   console.log('### return');
//   return valid;
// }

function type_check_v2(item, obj){
  if (typeof obj.type !== "undefined" && !type_check_v1(item, obj.type)) {
    return false;
  }

  if (typeof obj.value !== "undefined" && obj.value !== item) {
    return false;
  }

  return typeof obj.enum === "object" && obj.enum.includes(item) || typeof obj.enum !== "undefined" && obj.enum === item;
}

// console.log('#1 type_check_v1');
// console.log(type_check_v1(1, 'number')); // true
// console.log(type_check_v1(1, 'string')); // false
// console.log(type_check_v1('toto', 'string')); // true
// console.log(type_check_v1(null, 'null')); // true
// console.log(type_check_v1(null, 'toto')); // false
// console.log(type_check_v1(['test', 'test'], 'toto')); // false
// console.log(type_check_v1(['test', 'test'], 'array')); // true

// console.log('#2 type_check_v2');
// console.log(type_check_v2(1, {type: 'integer', value: 1}));
// console.log(type_check_v2({bar: 'foo'}, {type: 'object', value: {bar: 'foo'}}));
// console.log(type_check_v2({bar: 'foo'}, {type: 'object', enum: ["test1", "test2"]}));