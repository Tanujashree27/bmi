// const form = document.querySelector('form')

// form.addEventListener('submit',function(e){
//   e.preventDefault()

//   const height = parseInt(document.querySelector('#height').value)
//   const weight = parseInt(document.querySelector('#weight').value)
//   const results = document.querySelector('#results')

//   if(height === ''|| height < 0 || isNaN(height)){
//       results.innerHTML = "pls give a valid height"
//   } else if (weight === ''|| weight < 0 || isNaN(weight)){
//     results.innerHTML = "pls give a valid weight"
// }else{
//  const bmi = (weight / ((height*height)/10000)).toFixed(2)

//  results.innerHTML = `<span>${bmi}</span>`;
// }

// if (bmi < 18.6) {
//       results.innerHTML = `<p>Your BMI is <span>${bmi}</span> - Under Weight</p>`;
//     } else if (bmi >= 18.6 && bmi <= 24.9) {
//       results.innerHTML = `<p>Your BMI is <span>${bmi}</span> - Normal Range</p>`;
//     } else {
//       results.innerHTML = `<p>Your BMI is <span>${bmi}</span> - Overweight</p>`;
//     }
// })


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please enter a valid height.";
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please enter a valid weight.";
  } else {
    const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2));

    if (bmi < 18.6) {
      results.innerHTML = `<p>Your BMI is <span>${bmi}</span> - Under Weight</p>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<p>Your BMI is <span>${bmi}</span> - Normal Range</p>`;
    } else {
      results.innerHTML = `<p>Your BMI is <span>${bmi}</span> - Overweight</p>`;
    }
  }
});
