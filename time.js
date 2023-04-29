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

    if(inputtypevalue==="seconds"&&resulttypevalue==="minutes"){
        result.value = Number(input.value) / 60;
    }
    else if(inputtypevalue==="seconds"&&resulttypevalue==="hours"){
        result.value = Number(input.value) / 3600;
    }

    else if(inputtypevalue==="minutes"&&resulttypevalue==="seconds"){
        result.value = Number(input.value) * 60;
    }
    else if(inputtypevalue==="minutes"&&resulttypevalue==="hours"){
        result.value = Number(input.value) / 60;
    }
    else if(inputtypevalue==="minutes"&&resulttypevalue==="days"){
        result.value = Number(input.value) / 1440;
    }
    else if(inputtypevalue==="hours"&&resulttypevalue==="seconds"){
        result.value = Number(input.value) * 3600;
    }
    else if(inputtypevalue==="hours"&&resulttypevalue==="minutes"){
        result.value = Number(input.value) * 60;
    }
    else if(inputtypevalue==="hours"&&resulttypevalue==="days"){
        result.value = Number(input.value) / 24;
    }
    else if(inputtypevalue==="days"&&resulttypevalue==="seconds"){
        result.value = Number(input.value) * 86400;
    }
    else if(inputtypevalue==="days"&&resulttypevalue==="minutes"){
        result.value = Number(input.value) * 1440;
    }
    else if(inputtypevalue==="days"&&resulttypevalue==="hours"){
        result.value = Number(input.value) * 24;
    }
    else if(inputtypevalue==="seconds"&&resulttypevalue==="seconds"){
        result.value = input.value;
    }
    else if(inputtypevalue==="minutes"&&resulttypevalue==="minutes"){
        result.value = input.value;
    }
    else if(inputtypevalue==="hours"&&resulttypevalue==="hours"){
        result.value = input.value;
    }
    else if(inputtypevalue==="days"&&resulttypevalue==="days"){
        result.value = input.value;
    }
}
