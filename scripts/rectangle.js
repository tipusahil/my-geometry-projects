
// 2. rectangle calcute part 


function rectangle_calulate_btn(){
    console.log('rectangle btn clicked');

    const rect_width = document.querySelector('#rectangle_width');
    rect_width_text = rect_width.value;

    const width =parseFloat(rect_width_text);//recangle er width er value k stirng theke number type datai convert kore width varaible e store kora hoise.
 
    
    //rectangle er length input k select:
    const rect_length = document.querySelector("#rectangle_length");

   const rect_length_text = rect_length.value;

   const length = parseFloat(rect_length_text);
   console.log(typeof length);

   const area = width * length;


const rectangle_result = document.querySelector('#rect_result');
// rectangle_result.innerHTML = area;

if(width ===0  || length ==='' ){
    rectangle_result.innerHTML = 'enter value';
}
else{
    rectangle_result.innerHTML = area; 
}
}




