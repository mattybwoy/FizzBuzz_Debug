class FizzBuzz {
  play(number) {
    if (this._isDivisibleBy(number, 15)) {
      return 'FizzBuzz';
    } else if (this._isDivisibleBy(number, 5)) {
      return 'Buzz';
    } else if (this._isDivisibleBy(number, 3)) {
      return 'Fizz';
    } else {
      return number;
    }
  }

  _isDivisibleBy(number, divisor) {
    return number % divisor === 0;
  }
}

var fizzBuzz = new FizzBuzz();

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}

//Below code works however does not allow for user input as there will be no class
/*for (let i=1; i < 101; i++){    
  if (i % 15 == 0) console.log("FizzBuzz");    
  else if (i % 3 == 0) console.log("Fizz");    
  else if (i % 5 == 0) console.log("Buzz");    
  else console.log(i);
}*/