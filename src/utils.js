'use strict';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const getRandomDate = (min, max = Date.now()) => {
  const minTimestamp = new Date(min).getTime();
  const maxTimestamp = new Date(max).getTime();

  return new Date(getRandomInt(minTimestamp, maxTimestamp));
};

module.exports = {
  getRandomInt,
  shuffle,
  getRandomDate,
};
