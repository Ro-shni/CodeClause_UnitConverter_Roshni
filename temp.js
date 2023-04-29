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

    if(inputtypevalue==="celsius"&&resulttypevalue==="fahrenheit"){
        result.value = (Number(input.value) * 9/5) + 32;
    }
    else if(inputtypevalue==="celsius"&&resulttypevalue==="kelvin"){
        result.value = Number(input.value) + 273.15;
    }

    else if(inputtypevalue==="fahrenheit"&&resulttypevalue==="celsius"){
        result.value = (Number(input.value) - 32) * 5/9;
    }
    else if(inputtypevalue==="fahrenheit"&&resulttypevalue==="kelvin"){
        result.value = (Number(input.value) + 459.67) * 5/9;
    }
    else if(inputtypevalue==="fahrenheit"&&resulttypevalue==="rankine"){
        result.value = Number(input.value) + 459.67;
    }
    else if(inputtypevalue==="kelvin"&&resulttypevalue==="celsius"){
        result.value = Number(input.value) - 273.15;
    }
    else if(inputtypevalue==="kelvin"&&resulttypevalue==="fahrenheit"){
        result.value = (Number(input.value) * 9/5) - 459.67;
    }
    else if(inputtypevalue==="rankine"&&resulttypevalue==="celsius"){
        result.value = (Number(input.value) - 491.67) * 5/9;
    }
    else if(inputtypevalue==="rankine"&&resulttypevalue==="fahrenheit"){
        result.value = Number(input.value) - 459.67;
    }
    else if(inputtypevalue==="kelvin"&&resulttypevalue==="kelvin"){
        result.value = input.value;
    }
    else if(inputtypevalue==="celsius"&&resulttypevalue==="celsius"){
        result.value = input.value;
    }
    else if(inputtypevalue==="fahrenheit"&&resulttypevalue==="fahrenheit"){
        result.value = input.value;
    }
    else if(inputtypevalue==="rankine"&&resulttypevalue==="rankine"){
        result.value = input.value;
    }
}
