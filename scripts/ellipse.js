function ellipse_calculateBTN(){
    const a = getinputTagByID('ellipse_a_input');
    const b = getinputTagByID('ellipse_b_input');

    const area = Math.PI * a * b ;

    setInputValueInTAG('ellipse_output_set_tag' , area);
}

// niser shorthand template gulo pentagon name js file e lika hoise just oi file er function er name call kore   ellipse er idname pass korar maddome ellipse ar sob kaj hoye gelo, notun kore input er jonno kinba output tag e set korar jonno notun kore kuno function likte hoini.




/*
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



*/