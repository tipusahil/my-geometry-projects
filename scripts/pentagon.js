function pentagon_calculate_btn() {

    const p = getinputTagByID('pentagon_p_input');
    console.log(`p input er value 4number line theke  = ${p}`);
    const b = getinputTagByID('pentagon_b_input');
    console.log(`b input er value 6number line theke  = ${b}`);


    const calculate = 0.5 * p * b ;
   const result = setInputValueInTAG('pentagon_result' , calculate);

   console.log(`12 number line theke result ${result}`)

}

//1. input er value pawar jonno shorthand e function just idta pass kore dile hobe, jei id dibo oi id er value return kore dibe.
function getinputTagByID(inputTAG){
    const input_tags = document.getElementById(inputTAG);
    const input_tags_TEXT = input_tags.value;
    const inputs_value = parseFloat(input_tags_TEXT);

    console.log('16no line theke console just',inputs_value);

    return inputs_value;
}

// 
function setInputValueInTAG(set_id_tag, calculate){
    const set_value_tag = document.getElementById(set_id_tag);
    set_value_tag.innerText = calculate;

    console.log(`p & b er  output_tag e set kore console 26 no line theke =  ${set_value_tag}`);

    return set_value_tag;
}

