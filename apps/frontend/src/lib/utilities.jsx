function isObject(object) {
  return object != null && typeof object === 'object';
}

// Function to return length of answers for each key mode
export const getTriesFromAnswers = (key) => {
  var storage = JSON.parse(localStorage.getItem(key));
  if (storage !== null) {
    return storage.length;
  }
  return 0;
};

// Function to subtract a number by step till zero
export const subtractTillZero = (num, step = 1) => {
  if (num >= step) {
    return num - step;
  }
  return 0;
};

// Function to compare if two character objects are equal
export const objectComparison = (obj1, obj2) => {
  var props1 = Object.getOwnPropertyNames(obj1);
  console.log(obj1, obj2);
  for (var i = 0; i < props1.length; i++) {
    let val1 = obj1[props1[i]];
    let val2 = obj2[props1[i]];
    console.log(val1, val2, val1 === val2);

    // FIX LAUGH IMAGE COMPARISON
    if (props1[i] === 'laugh') {
      continue;
    }
    // FIX WANTED IMAGE COMPARISON
    if (props1[i] === 'wanted_image') {
      continue;
    }
    // FIX HAKI COMPARISON
    if (props1[i] === 'haki') {
      continue;
    }
    let isObjects = isObject(val1) && isObject(val2);
    if ((isObjects && !(val1 === val2)) || (!isObjects && val1 !== val2)) {
      return false;
    }
  }
  return true;
};

// Function to check for haki match / partial match / no match
export const hakiComparison = (obj1, obj2) => {
  var props = Object.getOwnPropertyNames(obj1);
  // console.log(obj1, obj2, props);

  var match = -1; // no match

  var todaysCharHaki = [];
  var attemptedCharHaki = [];
  for (var i = 0; i < props.length; i++) {
    attemptedCharHaki.push(obj1[props[i]]);
    todaysCharHaki.push(obj2[props[i]]);
  }

  if (JSON.stringify(todaysCharHaki) == JSON.stringify(attemptedCharHaki)) {
    match = 1;
  } else {
    for (var i = 0; i < props.length; i++) {
      if (
        attemptedCharHaki[i] === todaysCharHaki[i] &&
        attemptedCharHaki[i] === true
      ) {
        match = 0;
        break;
      }
    }
  }

  return match;
};

// Function to compare two specific attributes of two different character objects
export const attributeComparison = (obj1, obj2, att) => {
  if (obj1[att] === obj2[att]) {
    return true;
  }
  return false;
};

// Function to convert numbers to billions, millions etc.
export const convertToBellyCurrencySystem = (labelValue) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + 'B'
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(0) + 'M'
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + 'K'
    : Math.abs(Number(labelValue));
};

// Function to compare two attributes and check for superior / inferior / match.
export const superiorAttribute = (object, target, attribute) => {
  // console.log(object[attribute], target[attribute]);
  if (object[attribute] < target[attribute]) {
    return 1; // Superior attribute (need to apply character with higher attribute value)
  } else if (object[attribute] > target[attribute]) {
    return -1; // Inferior attribute (need to apply character with lower attribute value)
  }
  return 0; // Exact match attribute value
};

// Function to compare object and target "first_arc" attribute and check for superior / inferior / match.
export const arcComparison = (object, target, arcs) => {
  // Exact match attribute value
  if (object['first_arc'] === target['first_arc']) {
    return 0;
  }
  var objectArc = arcs.find(
    (arcObj) => arcObj.arc_name === object['first_arc']
  )['arc_order'];
  var targetArc = arcs.find(
    (arcObj) => arcObj.arc_name === target['first_arc']
  )['arc_order'];

  if (objectArc < targetArc) {
    return 1; // Superior arc (need to apply character with higher arc appearance)
  }
  return -1; // Inferior arc (need to apply character with lower arc appearance)
};

// Function to check if todays character is within local storage characters
export const getFoundCharFromStorage = (todaysChar, type) => {
  const storage = JSON.parse(localStorage.getItem(type));
  if (storage !== null) {
    return storage.includes(todaysChar);
  }
  return false;
};
