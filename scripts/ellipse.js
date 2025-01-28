function ellipse_calculateBTN(){
    const a = getinputTagByID('ellipse_a_input');
    const b = getinputTagByID('ellipse_b_input');

    const area = Math.PI * a * b ;

    setInputValueInTAG('ellipse_output_set_tag' , area);
}