let input1 = document.querySelector(".inputbox_1");
let btninput1 = document.querySelector(".btn_1");
let inputresultbox1 = document.querySelector(".input_result_box_1");
let numberreg = '^[0-9]$';
let firstinput = document.querySelector(".first_input");
let second_Number = document.querySelector(".second_Number");
let inputbox_2 = document.querySelector(".inputbox_2");
let btn_2 = document.querySelector(".btn_2");
let input_result_box_2 = document.querySelector(".input_result_box_2");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play_again");

btninput1.addEventListener("click" , function(){

    if (input1.value == ""){

        inputresultbox1.innerHTML = "Please Enter Your Number";
        inputresultbox1.style.marginBottom = "20px";
        inputresultbox1.style.color = "red";
        input1.style.border = "2px solid red";
        second_Number.style.display = "none";
       
    }

    else if ( !(input1.value.match(numberreg)) ) {
  
        inputresultbox1.innerHTML = "Please Enter Your Valid Number";
        inputresultbox1.style.marginBottom = "20px";
        inputresultbox1.style.color = "red";
        input1.style.border = "2px solid red";
        second_Number.style.display = "none";

    }
    
    else if ( input1.value >= 0 && input1.value <= 5 ){
        
        firstinput.style.display = "none";
        second_Number.style.display = "block";
    }

    else{

        inputresultbox1.innerHTML = "Please Enter Your Range Number";
        inputresultbox1.style.marginBottom = "20px";
        inputresultbox1.style.color = "red";
        input1.style.border = "2px solid red";
    }

});


btn_2.addEventListener("click" , function(){


    if ( inputbox_2.value == "" ){

        input_result_box_2.innerHTML = "Please Enter Your Number";
        input_result_box_2.style.marginBottom = "20px";
        input_result_box_2.style.color = "red";
        inputbox_2.style.border = "2px solid red";
    }

    // else if ( input1.value < inputbox_2.value ){

    //     input_result_box_2.innerHTML = "Number is Very High";
    //     input_result_box_2.style.marginBottom = "20px";
    //     input_result_box_2.style.color = "red";
    //     inputbox_2.style.border = "2px solid red";
    // }

    else if ( input1.value > inputbox_2.value ){

        input_result_box_2.innerHTML = "Number is Very low";
        input_result_box_2.style.marginBottom = "20px";
        input_result_box_2.style.color = "red";
        inputbox_2.style.border = "2px solid red";
    }
    
    else if ( input1.value == inputbox_2.value ){

        second_Number.style.display = "none";
        winner.style.display = "block";
    }

    else{

        input_result_box_2.innerHTML = "Number is Very High";
        input_result_box_2.style.marginBottom = "20px";
        input_result_box_2.style.color = "red";
        inputbox_2.style.border = "2px solid red";

    }
});

play.addEventListener("click" , function(){

  input1.value = location.reload();
  inputbox_2.value = location.reload();

});
