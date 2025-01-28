
// rombos er d1 & d2 er value jate ekta function er er maddome khuje pai sei function:
function getinputValueById(inputId){
const input_tag = document.getElementById(inputId);
   const  input_tag_text = input_tag.value;
    const input_value =parseFloat(input_tag_text);

    return input_value;
}


// output dekanur template peramitar.
function setResultById(outut_id,result_value){
    const output_tag = document.getElementById(outut_id);

 const result_rombos1 = output_tag.innerText = result_value;

//  console.log(`rombos result from templete ${result_rombos1}`);
return result_rombos1;
}


function rombos_calculate_btn(){
    const rombos_d1 = getinputValueById('rombos_d1_input');
console.log(`rombos er return pawa rombos_d1_input value ${rombos_d1}`);

const rombos_d2 = getinputValueById('rombos_d2_input');
console.log(`rombos er return pawa rombos_d2_input value ${rombos_d2}`);


const rombos_result = 0.5 *  rombos_d1 * rombos_d2 ;

console.log(`robmos result is = ${rombos_result}`)
// const output_box_parent = document.querySelector('#result_box');


// new element create kore oi new element k results dekate caile:
// const output_box = document.querySelector('#result_box');
// const p = document.createElement('p');
// p.innerHTML = rombos_result;
// output_box.appendChild(p);


const result11= setResultById('output', rombos_result)
console.log(result11);
}




// node reuse_function.js