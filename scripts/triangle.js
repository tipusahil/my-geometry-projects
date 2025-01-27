function trianlgeCalculate(){
    console.log('traingle btn clicked');
const triangle_baseInput = document.querySelector('#triangle_baseInput');

const triangle_baseInput_text = triangle_baseInput.value;
const triangle_base = parseFloat(triangle_baseInput_text);
// console.log('base value is = ', triangle_base);
// console.log('type of base value =', typeof triangle_base);


const triangle_hightInput = document.querySelector('#triangle_hightInput');

const triangle_hightInput_text = triangle_hightInput.value;
const triangle_hight_value = parseFloat(triangle_hightInput_text);
// // console.log(triangle_hight_value); 
// console.log('hight value is = ', triangle_hight_value);
// console.log('type of hight value =', typeof triangle_hight_value);


// calulate triangle value:
let result = 0.5 *  triangle_base * triangle_hight_value;

// const final_resultIs= `The result of Area (a) = ${result}`;


// triangle output push to result_box tag
const final_resultIs = result;
const result_box = document.querySelector('#result_box');
result_box.innerText = final_resultIs;
}