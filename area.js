var input = document.getElementById("input");
var result = document.getElementById('result');
var inputtype = document.getElementById('inputtype');
var resulttype = document.getElementById('resulttype');
var inputtypevalue,resulttypevalue;

input.addEventListener('keyup',myresult)
inputtype.addEventListener("change",myresult);
resulttype.addEventListener("change",myresult);

inputtypevalue = inputtype.value;
resulttypevalue = resulttype.value;

function myresult(){
    
    inputtypevalue = inputtype.value;
    resulttypevalue = resulttype.value;

    if(inputtypevalue==="squaremeter"&&resulttypevalue==="squarekilometer"){
        result.value = Number(input.value)*0.000001;
    }
    else if(inputtypevalue==="squaremeter"&&resulttypevalue==="squaremile"){
        result.value = Number(input.value)*0.000000386102;
    }

    else if(inputtypevalue==="squaremeter"&&resulttypevalue==="squareyard"){
        result.value = Number(input.value)*1.19599;
    }
    else if(inputtypevalue==="squaremeter"&&resulttypevalue==="squarefoot"){
        result.value = Number(input.value)*10.7639;
    }
    else if(inputtypevalue==="squaremeter"&&resulttypevalue==="squareinch"){
        result.value = Number(input.value)*1550;
    }
    else if(inputtypevalue==="squaremeter"&&resulttypevalue==="hectare"){
        result.value = Number(input.value)*0.0001;
    }
    else if(inputtypevalue==="squaremeter"&&resulttypevalue==="acre"){
        result.value = Number(input.value)*0.000247105;
    }
    else if(inputtypevalue==="squaremeter"&&resulttypevalue==="squaremeter"){
        result.value =input.value;
    }
}
