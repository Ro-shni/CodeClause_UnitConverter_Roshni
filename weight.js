var input = document.getElementById("input");
var result = document.getElementById('result');
var inputtype = document.getElementById('inputtype');
var resulttype = document.getElementById('resulttype');
var inputtypevalue, resulttypevalue;

input.addEventListener('keyup', myresult)
inputtype.addEventListener("change", myresult);
resulttype.addEventListener("change", myresult);

inputtypevalue = inputtype.value;
resulttypevalue = resulttype.value;

function myresult() {

    inputtypevalue = inputtype.value;
    resulttypevalue = resulttype.value;

    if (inputtypevalue === "kilogram" && resulttypevalue === "gram") {
        result.value = Number(input.value) * 1000;
    } else if (inputtypevalue === "kilogram" && resulttypevalue === "pound") {
        result.value = Number(input.value) * 2.20462;
    } else if (inputtypevalue === "kilogram" && resulttypevalue === "ounce") {
        result.value = Number(input.value) * 35.274;
    } else if (inputtypevalue === "gram" && resulttypevalue === "kilogram") {
        result.value = Number(input.value) / 1000;
    } else if (inputtypevalue === "gram" && resulttypevalue === "pound") {
        result.value = Number(input.value) * 0.00220462;
    } else if (inputtypevalue === "gram" && resulttypevalue === "ounce") {
        result.value = Number(input.value) * 0.035274;
    } else if (inputtypevalue === "pound" && resulttypevalue === "kilogram") {
        result.value = Number(input.value) / 2.20462;
    } else if (inputtypevalue === "pound" && resulttypevalue === "gram") {
        result.value = Number(input.value) / 0.00220462;
    } else if (inputtypevalue === "pound" && resulttypevalue === "ounce") {
        result.value = Number(input.value) * 16;
    } else if (inputtypevalue === "ounce" && resulttypevalue === "kilogram") {
        result.value = Number(input.value) / 35.274;
    } else if (inputtypevalue === "ounce" && resulttypevalue === "gram") {
        result.value = Number(input.value) / 0.035274;
    } else if (inputtypevalue === "ounce" && resulttypevalue === "pound") {
        result.value = Number(input.value) / 16;
    } else if (inputtypevalue === "kilogram" && resulttypevalue === "kilogram") {
        result.value = input.value;
    } else if (inputtypevalue === "gram" && resulttypevalue === "gram") {
        result.value = input.value;
    } else if (inputtypevalue === "pound" && resulttypevalue === "pound") {
        result.value = input.value;
    } else if (inputtypevalue === "ounce" && resulttypevalue === "ounce") {
        result.value = input.value;
    }
}


