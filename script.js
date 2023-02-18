// =================================
// id and value set functions starts
// =================================
function setValue(element, value) {
  const setBaseValue = document.getElementById(element);
  setBaseValue.innerText = value;

}
function setValue2(element, value) {
  const setBaseValue = document.getElementById(element);
  setBaseValue.innerText = value;

}
// =================================
// id and value set functions ends
// =================================


// ==================================
// hover card background color starts
// ==================================
const card = document.getElementById('card');
card.addEventListener('mouseenter', () => {
  const colors = ["red", "blue", "orange", "green", "yellow", "purple",];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  card.style.backgroundColor = randomColor;
});

card.addEventListener('mouseleave', () => {
  card.style.backgroundColor = '#eee';
});


const card2 = document.getElementById('card2');
card2.addEventListener('mouseenter', () => {
  const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  card2.style.backgroundColor = randomColor;
});

card2.addEventListener('mouseleave', () => {
  card2.style.backgroundColor = '#eee';
});
// ==================================
// hover card background color ends
// ==================================

// ==================================
// default to reload functions starts
// ==================================
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
  });
});
// ==================================
// default to reload functions ends
// ==================================
 

// ==================================
// triangle buttons starts
// ==================================
document.getElementById('triangle-btn').addEventListener('click', function () {

  const baseElements = document.getElementById('base-field');
  const baseElementsString = baseElements.value;
  const base = parseInt(baseElementsString);

  // function is use here 
  setValue('base-set-btn', base)

  const heightElements = document.getElementById('height-field');
  const heightElementsString = heightElements.value;
  const height = parseInt(heightElementsString);

  
 
  // avoid negative value 
  if (base < 0 || height < 0) {
    alert('Please Enter positive Number')
    return false;
  }

  // avoid blank value 
  if (baseElements.value === '' || heightElements.value === '') {
    alert('please Fill The Blank')
    return false;
  }


  // function is use here 
  setValue2('height-set-btn', height)

  const totalTriangle = 0.5 * base * height;
  const resultSetTriangle = document.getElementById('triangle-result');
  resultSetTriangle.innerText = totalTriangle;

  baseElements.value = '';
  heightElements.value = '';


});
// ==================================
// triangle buttons ends here
// ==================================


// ==================================
// Rectangle buttons starts here
// ==================================
document.getElementById('rectangle-btn').addEventListener('click', function () {
  const rectangleElements = document.getElementById('rect-width-field');
  const rectangleElementsString = rectangleElements.value;
  const rectangleWidth = parseInt(rectangleElementsString);

  // function is use here
  setValue("width-set-value", rectangleWidth)

  const rectangleHeightElements = document.getElementById('rect-height-field');
  const rectangleHeightString = rectangleHeightElements.value;
  const rectangleHight = parseInt(rectangleHeightString);

  // function is use here 
  setValue2('rect-height-set', rectangleHight);

  if (rectangleElements.value === '' || rectangleHeightElements.value === '') {
    alert('please Fill the input');
    return false;
  }


  if (rectangleWidth < 0 || rectangleHight < 0) {
    alert('Please Enter positive Number')
    return false;
  }

  const rectangleResult = (rectangleWidth * rectangleHight).toFixed(2);
  const rectangleResultString = parseFloat(rectangleResult);

  const setRectValue = document.getElementById('rectangle-result');
  setRectValue.innerText = rectangleResult;

  rectangleElements.value = '';
  rectangleHeightElements.value = '';

});
// ==================================
// Rectangle buttons ends here
// ==================================

// ==================================
// questions page 
// ==================================
document.getElementById('blog-btn').addEventListener('click', function () {
  window.location.href = 'http://127.0.0.1:5500/question.html'

});



