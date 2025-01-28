//1. input er value pawar jonno shorthand e function just idta pass kore dile hobe, jei id dibo oi id er value return kore dibe.
function getinputTagByID(inputTAG){
    const input_tags = document.getElementById(inputTAG);
    const input_tags_TEXT = input_tags.value;
    const inputs_value = parseFloat(input_tags_TEXT);

    console.log('peramitar hisebe jei tag asce tar value = ',inputs_value);

    return inputs_value;
}

// 
function setInputValueInTAG(set_id_tag, area){
    const set_value_tag = document.getElementById(set_id_tag);
    set_value_tag.innerText = area;

    console.log(`a & a er  output_tag e innertext hisebe set  =  ${set_value_tag}`);

    return set_value_tag;
}


function ellipse_calculateBTN(){
    const a = getinputTagByID('ellipse_a_input');
    const b = getinputTagByID('ellipse_b_input');

    const area = Math.PI * a * b ;

    setInputValueInTAG('ellipse_output_set_tag' , area);
}
