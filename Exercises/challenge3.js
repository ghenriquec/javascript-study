const convertTemperatures = (degrees) => { 
  const celsiusExists = degrees.toUpperCase().includes('C');
  const fahrenheitExists = degrees.toUpperCase().includes('F');
  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Please enter a valid temperature');
  }
  if(celsiusExists) {
    const celsius = degrees.split('C')[0];
    const fahrenheit = (celsius * 9/5) + 32;
    return `${celsius}C is ${fahrenheit}F`;
  }else if(fahrenheitExists) {
    const fahrenheit = degrees.split('F')[0];
    const celsius = (fahrenheit - 32) * 5/9;
    return `${fahrenheit}F is ${celsius}C`;
  }
}

try {
 console.log(convertTemperatures('50F'));
 console.log(convertTemperatures('50C'));
} catch (error){
  console.log(error);
}