export const suma = (a, b) => {
  return a + b;
};

export const avarageArray = (mas) => {
  return mas.reduce((suma, skaicius) => suma + skaicius, 0) / mas.length;
};
