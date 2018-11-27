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

function ucFirst(string) {
  if (string.length > 0) {
    let upperFirstLetter = string[0].toUpperCase();
    let endWord = string.substring(1);

    return upperFirstLetter + endWord;
  } else {
    return string;
  }
}

function capatalize(string) {
  if (string.length > 0) {
    let sentance = [];
    let allWords = string.split(' ');

    for (let i = 0; i < allWords.length; i++) {
      sentance[i] = ucFirst(allWords[i]);
    }

    return sentance.join(' ');
  } else {
    return string;
  }
}

function camelCase(string) {
  if (string.length > 0) {
    let upperString = capatalize(string);

    return upperString.replace(/\s/g, '');
  } else {
    return string;
  }
}

function snakeCase(string) {
  if (string.length > 0) {
    let lowerString = string.toLowerCase();

    return lowerString.replace(' ', '_');
  } else {
    return string;
  }
}

function leet(string) {
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
}

function prop_access(object, path) {
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
}

function verlan(string){
  if (string.length > 0) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();

    return reverseArray.join("");
  } else {
    return string;
  }
}

function yoda(string){
  if (string.length > 0) {
    let splitString = string.split(" ");
    let reverseArray = splitString.reverse();

    return reverseArray.join(" ");
  } else {
    return string;
  }
}

// console.log('#1 ucfirst');
// console.log(ucFirst('waxime'));
//
// console.log('#2 capatalize');
// console.log(capatalize('waxime aveline'));

// console.log('#3 camelCase');
// console.log(camelCase('waxime aveline'));

// console.log('#4 snakeCase');
// console.log(snakeCase('waxime aveline'));

// console.log('#5 leet');
// console.log(leet('ANACONDA'));

// console.log('#6 prop_access');
// console.log(prop_access(users, 'family.father.firstName'));

// console.log('#7 verlan');
// console.log(verlan('Waxime aveline'));

// console.log('#8 yoda');
// console.log(yoda('Waxime aveline'));

// vig missing