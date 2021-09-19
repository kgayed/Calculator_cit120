var ele=document.body.querySelector(".box");


var question1=Number(prompt("Please enter a number"));

    if (isNaN(question1)){
        ele.innerHTML= "This is not a number!";
    }
    else {
        question2=prompt("Enter an operator");

    };


if (question2==="*" || question2=== "/" || question2==="+" || question2==="-") {

    question3=Number(prompt("Enter another number"))

}
else{
    ele.innerHTML="This is not an operator";

}


if  (isNaN(question3)){
    ele.innerHTML="This is not a number";
}
else if (question2==="*") {

    ele.innerHTML="The answer is "+ (question1*question3);
}

else if (question2==="/"){
    ele.innerHTML="The answer is "+ (question1/question3);
}

else if (question2==="+"){

    ele.innerHTML="The answer is "+(question1+question3);
}

else if (question2==="-"){
    ele.innerHTML="The answer is "+(question1-question3);
}