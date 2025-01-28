// 1.get the perallal calculate btn:
const perallal_calculat_btn = document.querySelector('#Parallel_calcuate_btn').addEventListener('click' , function () {
    console.log('pera clicked'); 

const pera_base_input11 = document.getElementById('pera_base_input');
const pera_base_input11_text = pera_base_input11.value;

const pera_base =parseFloat(pera_base_input11_text);
// console.log(typeof pera_base);

//2.get perallal height input:
const pera_hight_input = document.getElementById('pera_hight_input');
const pera_hight_input11 =pera_hight_input.value;
const pera_hight = parseFloat(pera_hight_input11);
// console.log( typeof pera_hight);

// 3.multiply the pera_hight & pera_width
const area = pera_base * pera_hight;

// 4.multiply result set the  pera_result id's innerhtml:
// const result = document.querySelector('#pera_result');
// result.innerHTML = area;

// shorthand
const result = document.querySelector('#pera_result').innerHTML = area;


})