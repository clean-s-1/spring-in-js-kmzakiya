module.exports=function getStatistics(numbers){
  if (!numbers || !numbers.length) {
    return {
      min: NaN,
      max: NaN,
      average: NaN,
    };
  }
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return { min, max, average };
    //implement the computation of statistics here
}

