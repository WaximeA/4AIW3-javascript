var users = {
  family: {
    father: {
      firstName: 'John',
      lastName: 'Doe',
      age: 60,
    },
    sister: {
      firstName: 'Marie',
      lastName: 'Doe',
      age: 20,
    }
  },
  coworkers: {
    esgi: {
      1: {
        firstName: 'Toto',
        lastName: 'Martin',
        age: 20,
      },
      2: {
        firstName: 'Titi',
        lastName: 'Simpson',
        age: 21,
      }
    }
  }
};

String.prototype.ucFirst = function(){
  let string = this;

  if (string.length > 0) {
    let upperFirstLetter = string[0].toUpperCase();
    let endWord = string.substring(1);

    return upperFirstLetter + endWord;
  } else {
    return string;
  }
};

String.prototype.capitalize = function(){
  let string = this;

  if (string.length > 0) {
    let sentance = [];
    let allWords = string.split(' ');

    for (let i = 0; i < allWords.length; i++) {
      sentance[i] = allWords[i].ucFirst();
    }

    return sentance.join(' ');
  } else {
    return string;
  }
};

String.prototype.camelCase = function(){
  let string = this;

  if (string.length > 0) {
    let upperString = string.capitalize();

    return upperString.replace(/\s/g, '');
  } else {
    return string;
  }
};

String.prototype.snakeCase = function(){
  let string = this;

  if (string.length > 0) {
    let lowerString = string.toLowerCase();

    return lowerString.replace(' ', '_');
  } else {
    return string;
  }
};

String.prototype.leet = function(){
  let string = this;

  let vowels = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    'u': '(_)',
    'y': '7',
  };

  if (string.length > 0) {
    let lowerString = string.toLowerCase();

    for (let property in vowels) {
      let search = new RegExp(property, 'g');

      lowerString = lowerString.replace(search, vowels[property]);
    }

    return lowerString;
  } else {
    return string;
  }
};


Object.prototype.prop_access = function(path){
  let object = this;

  let allKeys = path.split('.');
  let subject = object;

  for (let i = 0; i < allKeys.length; i++) {
    if (subject[allKeys[i]] === null) {

      return null;
    }
    else {
      subject = subject[allKeys[i]];
    }
  }

  return subject;

};

String.prototype.verlan = function(){
  let string = this;

  if (string.length > 0) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();

    return reverseArray.join("");
  } else {
    return string;
  }
};

String.prototype.yoda = function(){
  let string = this;

  if (string.length > 0) {
    let splitString = string.split(" ");
    let reverseArray = splitString.reverse();

    return reverseArray.join(" ");
  } else {
    return string;
  }
};

// console.log('#1 ucfirst');
// console.log('waxime'.ucFirst());
//
// console.log('#2 capatalize');
// console.log('waxime aveline'.capitalize());
//
// console.log('#3 camelCase');
// console.log('waxime aveline'.camelCase());
//
// console.log('#4 snakeCase');
// console.log('waxime aveline'.snakeCase());
//
// console.log('#5 leet');
// console.log('ANACONDA'.leet());
//
// console.log('#6 prop_access');
// console.log(users.prop_access('family.father.firstName'));
//
// console.log('#7 verlan');
// console.log('Waxime aveline'.verlan());
//
// console.log('#8 yoda');
// console.log('Waxime aveline'.yoda());