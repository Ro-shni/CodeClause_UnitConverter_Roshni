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

    if(inputtypevalue==="meter"&&resulttypevalue==="kilometer"){
        result.value = Number(input.value)*0.001;
    }
    else if(inputtypevalue==="meter"&&resulttypevalue==="centimeter"){
        result.value = Number(input.value)*100;
    }

    else if(inputtypevalue==="meter"&&resulttypevalue==="millimeter"){
        result.value = Number(input.value)*1000;
    }
    else if(inputtypevalue==="meter"&&resulttypevalue==="micrometer"){
        result.value = Number(input.value)*1000000;
    }
    else if(inputtypevalue==="meter"&&resulttypevalue==="nanometer"){
        result.value = Number(input.value)*1000000000;
    }
    else if(inputtypevalue==="meter"&&resulttypevalue==="mile"){
        result.value = Number(input.value)*0.0006213689;
    }
    else if(inputtypevalue==="meter"&&resulttypevalue==="yard"){
        result.value = Number(input.value)*1.0936132983;
    }
    else if(inputtypevalue==="meter"&&resulttypevalue==="foot"){
        result.value = Number(input.value)*3.280839895;
    }
    else if(inputtypevalue==="meter"&&resulttypevalue==="inch"){
        result.value = Number(input.value)*39.37007874;
    }
    else if(inputtypevalue==="meter"&&resulttypevalue==="lightyear"){
        result.value = Number(input.value)*1.057008707E-16;
    }
    else if(inputtypevalue==="meter"&&resulttypevalue==="meter"){
        result.value =input.value;
    }





    if(inputtypevalue==="kilometer"&&resulttypevalue==="meter"){
        result.value = Number(input.value)*1000;
    }
    else if(inputtypevalue==="kilometer"&&resulttypevalue==="centimeter"){
        result.value = Number(input.value)*100000;
    }

    else if(inputtypevalue==="kilometer"&&resulttypevalue==="millimeter"){
        result.value = Number(input.value)*1000000;
    }
    else if(inputtypevalue==="kilometer"&&resulttypevalue==="micrometer"){
        result.value = Number(input.value)*1000000000;
    }
    else if(inputtypevalue==="kilometer"&&resulttypevalue==="nanometer"){
        result.value = Number(input.value)*1000000000000;
    }
    else if(inputtypevalue==="kilometer"&&resulttypevalue==="mile"){
        result.value = Number(input.value)*0.6213688756;
    }
    else if(inputtypevalue==="kilometer"&&resulttypevalue==="yard"){
        result.value = Number(input.value)*1093.6132983;
    }
    else if(inputtypevalue==="kilometer"&&resulttypevalue==="foot"){
        result.value = Number(input.value)*3280.839895;
    }
    else if(inputtypevalue==="kilometer"&&resulttypevalue==="inch"){
        result.value = Number(input.value)*39370.07874;
    }
    else if(inputtypevalue==="kilometer"&&resulttypevalue==="lightyear"){
        result.value = Number(input.value)*1.057008707E-13;
    }
    else if(inputtypevalue==="kilometer"&&resulttypevalue=="kilometer"){
        result.value = input.value;
    }




    if(inputtypevalue==="centimeter"&&resulttypevalue==="kilometer"){
        result.value = Number(input.value)*0.00001;
    }
    else if(inputtypevalue ==="centimeter" && resulttypevalue==="meter"){
        result.value = Number(input.value)*0.01;
    }
    else if(inputtypevalue==="centimeter"&&resulttypevalue==="millimeter"){
        result.value = Number(input.value)*10;
    }
    else if(inputtypevalue==="centimeter"&&resulttypevalue==="micrometer"){
        result.value = Number(input.value)*10000;
    }
    else if(inputtypevalue==="centimeter"&&resulttypevalue==="nanometer"){
        result.value = Number(input.value)*10000000;
    }
    else if(inputtypevalue==="centimeter"&&resulttypevalue==="mile"){
        result.value = Number(input.value)*0.0000062137;
    }
    else if(inputtypevalue==="centimeter"&&resulttypevalue==="yard"){
        result.value = Number(input.value)*0.010936133;
    }
    else if(inputtypevalue==="centimeter"&&resulttypevalue==="foot"){
        result.value = Number(input.value)*0.032808399;
    }
    else if(inputtypevalue==="centimeter"&&resulttypevalue==="inch"){
        result.value = Number(input.value)*0.3937007874;
    }
    else if(inputtypevalue==="centimeter"&&resulttypevalue==="lightyear"){
        result.value = Number(input.value)*1.057008707E-18;
    }
    else if(inputtypevalue==="centimeter" && resulttypevalue==="centimeter"){
        result.value = input.value
    }



    if(inputtypevalue==="millimeter"&&resulttypevalue==="kilometer"){
        result.value = Number(input.value)*0.000001;
    }
    else if(inputtypevalue==="millimeter"&&resulttypevalue==="meter"){
        result.value = Number(input.value)*0.001;
    }
    else if(inputtypevalue==="millimeter"&&resulttypevalue==="centimeter"){
        result.value = Number(input.value)*0.1;
    }
    else if(inputtypevalue==="millimeter"&&resulttypevalue==="micrometer"){
        result.value = Number(input.value)*1000;
    }
    else if(inputtypevalue==="millimeter"&&resulttypevalue==="nanometer"){
        result.value = Number(input.value)*1000000;
    }
    else if(inputtypevalue==="millimeter"&&resulttypevalue==="mile"){
        result.value = Number(input.value)*6.213688756E-7;
    }
    else if(inputtypevalue==="millimeter"&&resulttypevalue==="yard"){
        result.value = Number(input.value)*0.0010936133;
    }
    else if(inputtypevalue==="millimeter"&&resulttypevalue==="foot"){
        result.value = Number(input.value)*0.0032808399;
    }
    else if(inputtypevalue==="millimeter"&&resulttypevalue==="inch"){
        result.value = Number(input.value)*0.0393700787;
    }
    else if(inputtypevalue==="millimeter"&&resulttypevalue==="lightyear"){
        result.value = Number(input.value)*1.057008707E-19;
    }
    else if(inputtypevalue==="millimeter"&&resulttypevalue==="millimeter"){
        result.value =input.value;
    }




    if(inputtypevalue==="micrometer"&&resulttypevalue==="kilometer"){
        result.value = Number(input.value)*9.999999999E-10;
    }
    else if(inputtypevalue==="micrometer"&&resulttypevalue==="meter"){
        result.value = Number(input.value)*0.000001;
    }
    else if(inputtypevalue==="micrometer"&&resulttypevalue==="centimeter"){
        result.value = Number(input.value)*0.0001;
    }
    else if(inputtypevalue==="micrometer"&&resulttypevalue==="millimeter"){
        result.value = Number(input.value)*0.001;
    }
    else if(inputtypevalue==="micrometer"&&resulttypevalue==="nanometer"){
        result.value = Number(input.value)*1000;
    }
    else if(inputtypevalue==="micrometer"&&resulttypevalue==="mile"){
        result.value = Number(input.value)*6.213688756E-10;
    }
    else if(inputtypevalue==="micrometer"&&resulttypevalue==="yard"){
        result.value = Number(input.value)*0.0000010936;
    }
    else if(inputtypevalue==="micrometer"&&resulttypevalue==="foot"){
        result.value = Number(input.value)*0.0000032808;
    }
    else if(inputtypevalue==="micrometer"&&resulttypevalue==="inch"){
        result.value = Number(input.value)*0.0000393701;
    }
    else if(inputtypevalue==="micrometer"&&resulttypevalue==="lightyear"){
        result.value = Number(input.value)*1.057008707E-22;
    }
    else if(inputtypevalue==="micrometer"&&resulttypevalue==="micrometer"){
        result.value =input.value;
    }



    if(inputtypevalue==="nanometer"&&resulttypevalue==="kilometer"){
        result.value = Number(input.value)*1.E-12;
    }
    else if(inputtypevalue==="nanometer"&&resulttypevalue==="meter"){
        result.value = Number(input.value)*1.E-9;
    }
    else if(inputtypevalue==="nanometer"&&resulttypevalue==="centimeter"){
        result.value = Number(input.value)*1.E-7;
    }
    else if(inputtypevalue==="nanometer"&&resulttypevalue==="millimeter"){
        result.value = Number(input.value)*0.000001;
    }
    else if(inputtypevalue==="nanometer"&&resulttypevalue==="micrometer"){
        result.value = Number(input.value)*0.001;
    }
    else if(inputtypevalue==="nanometer"&&resulttypevalue==="mile"){
        result.value = Number(input.value)*6.213688756E-13;
    }
    else if(inputtypevalue==="nanometer"&&resulttypevalue==="yard"){
        result.value = Number(input.value)*1.093613298E-9;
    }
    else if(inputtypevalue==="nanometer"&&resulttypevalue==="foot"){
        result.value = Number(input.value)*3.280839895E-9;
    }
    else if(inputtypevalue==="nanometer"&&resulttypevalue==="inch"){
        result.value = Number(input.value)*3.937007874E-8;
    }
    else if(inputtypevalue==="nanometer"&&resulttypevalue==="lightyear"){
        result.value = Number(input.value)*1.057008707E-25;
    }
    else if(inputtypevalue==="nanometer"&&resulttypevalue==="nanometer"){
        result.value =input.value;
    }





    if(inputtypevalue==="mile"&&resulttypevalue==="kilometer"){
        result.value = Number(input.value)*1.60935;
    }
    else if(inputtypevalue==="mile"&&resulttypevalue==="meter"){
        result.value = Number(input.value)*1609.35;
    }
    else if(inputtypevalue==="mile"&&resulttypevalue==="centimeter"){
        result.value = Number(input.value)*160935;
    }
    else if(inputtypevalue==="mile"&&resulttypevalue==="millimeter"){
        result.value = Number(input.value)*1609350;
    }
    else if(inputtypevalue==="mile"&&resulttypevalue==="micrometer"){
        result.value = Number(input.value)*1609350000;
    }
    else if(inputtypevalue==="mile"&&resulttypevalue==="nanometer"){
        result.value = Number(input.value)*1609350000000;
    }
    else if(inputtypevalue==="mile"&&resulttypevalue==="yard"){
        result.value = Number(input.value)*1760.0065617;
    }
    else if(inputtypevalue==="mile"&&resulttypevalue==="foot"){
        result.value = Number(input.value)*5280.019685;
    }
    else if(inputtypevalue==="mile"&&resulttypevalue==="inch"){
        result.value = Number(input.value)*63360.23622;
    }
    else if(inputtypevalue==="mile"&&resulttypevalue==="lightyear"){
        result.value = Number(input.value)*1.701096963E-13;
    }
    else if(inputtypevalue==="mile"&&resulttypevalue==="mile"){
        result.value =input.value;
    }



    if(inputtypevalue==="yard"&&resulttypevalue==="kilometer"){
        result.value = Number(input.value)*0.0009144;
    }
    else if(inputtypevalue==="yard"&&resulttypevalue==="meter"){
        result.value = Number(input.value)*0.9144;
    }
    else if(inputtypevalue==="yard"&&resulttypevalue==="centimeter"){
        result.value = Number(input.value)*91.44;
    }
    else if(inputtypevalue==="yard"&&resulttypevalue==="millimeter"){
        result.value = Number(input.value)*914.4;
    }
    else if(inputtypevalue==="yard"&&resulttypevalue==="micrometer"){
        result.value = Number(input.value)*914400;
    }
    else if(inputtypevalue==="yard"&&resulttypevalue==="nanometer"){
        result.value = Number(input.value)*914400000;
    }
    else if(inputtypevalue==="yard"&&resulttypevalue==="mile"){
        result.value = Number(input.value)*0.0005681797;
    }
    else if(inputtypevalue==="yard"&&resulttypevalue==="foot"){
        result.value = Number(input.value)*3;
    }
    else if(inputtypevalue==="yard"&&resulttypevalue==="inch"){
        result.value = Number(input.value)*36;
    }
    else if(inputtypevalue==="yard"&&resulttypevalue==="lightyear"){
        result.value = Number(input.value)*9.665287622E-17;
    }
    else if(inputtypevalue==="yard"&&resulttypevalue==="yard"){
        result.value =input.value;
    }


    if(inputtypevalue==="foot"&&resulttypevalue==="kilometer"){
        result.value = Number(input.value)*0.0003048;
    }
    else if(inputtypevalue==="foot"&&resulttypevalue==="meter"){
        result.value = Number(input.value)*0.3048;
    }
    else if(inputtypevalue==="foot"&&resulttypevalue==="centimeter"){
        result.value = Number(input.value)*30.48;
    }
    else if(inputtypevalue==="foot"&&resulttypevalue==="millimeter"){
        result.value = Number(input.value)*304.8;
    }
    else if(inputtypevalue==="foot"&&resulttypevalue==="micrometer"){
        result.value = Number(input.value)*304800;
    }
    else if(inputtypevalue==="foot"&&resulttypevalue==="nanometer"){
        result.value = Number(input.value)*304800000;
    }
    else if(inputtypevalue==="foot"&&resulttypevalue==="mile"){
        result.value = Number(input.value)*0.0001893932;
    }
    else if(inputtypevalue==="foot"&&resulttypevalue==="yard"){
        result.value = Number(input.value)*0.3333333333;
    }
    else if(inputtypevalue==="foot"&&resulttypevalue==="inch"){
        result.value = Number(input.value)*12;
    }
    else if(inputtypevalue==="foot"&&resulttypevalue==="lightyear"){
        result.value = Number(input.value)*3.22176254E-17;
    }
    else if(inputtypevalue==="foot"&&resulttypevalue==="foot"){
        result.value =input.value;
    }



    if(inputtypevalue==="inch"&&resulttypevalue==="kilometer"){
        result.value = Number(input.value)*0.0000254;
    }
    else if(inputtypevalue==="inch"&&resulttypevalue==="meter"){
        result.value = Number(input.value)*0.0254;
    }
    else if(inputtypevalue==="inch"&&resulttypevalue==="centimeter"){
        result.value = Number(input.value)*2.54;
    }
    else if(inputtypevalue==="inch"&&resulttypevalue==="millimeter"){
        result.value = Number(input.value)*25.4;
    }
    else if(inputtypevalue==="inch"&&resulttypevalue==="micrometer"){
        result.value = Number(input.value)*25400;
    }
    else if(inputtypevalue==="inch"&&resulttypevalue==="nanometer"){
        result.value = Number(input.value)*25400000;
    }
    else if(inputtypevalue==="inch"&&resulttypevalue==="mile"){
        result.value = Number(input.value)*0.0000157828;
    }
    else if(inputtypevalue==="inch"&&resulttypevalue==="yard"){
        result.value = Number(input.value)*0.0277777778;
    }
    else if(inputtypevalue==="inch"&&resulttypevalue==="foot"){
        result.value = Number(input.value)*0.0833333333;
    }
    else if(inputtypevalue==="inch"&&resulttypevalue==="lightyear"){
        result.value = Number(input.value)*2.684802117E-18;
    }
    else if(inputtypevalue==="inch"&&resulttypevalue==="inch"){
        result.value =input.value;
    }



    if(inputtypevalue==="lightyear"&&resulttypevalue==="kilometer"){
        result.value = Number(input.value)*9460660000000;
    }
    else if(inputtypevalue==="lightyear"&&resulttypevalue==="meter"){
        result.value = Number(input.value)*9460660000000000;
    }
    else if(inputtypevalue==="lightyear"&&resulttypevalue==="centimeter"){
        result.value = Number(input.value)*946066000000000000;
    }
    else if(inputtypevalue==="lightyear"&&resulttypevalue==="millimeter"){
        result.value = Number(input.value)*9460660000000000000;
    }
    else if(inputtypevalue==="lightyear"&&resulttypevalue==="micrometer"){
        result.value = Number(input.value)*9.46066E+21;
    }
    else if(inputtypevalue==="lightyear"&&resulttypevalue==="nanometer"){
        result.value = Number(input.value)*9.460659999E+24;
    }
    else if(inputtypevalue==="lightyear"&&resulttypevalue==="mile"){
        result.value = Number(input.value)*5878559666946;
    }
    else if(inputtypevalue==="lightyear"&&resulttypevalue==="yard"){
        result.value = Number(input.value)*10346303587051618;
    }
    else if(inputtypevalue==="lightyear"&&resulttypevalue==="foot"){
        result.value = Number(input.value)*31038910761154856;
    }
    else if(inputtypevalue==="lightyear"&&resulttypevalue==="inch"){
        result.value = Number(input.value)*372466929133858300;
    }
    else if(inputtypevalue==="lightyear"&&resulttypevalue==="lightyear"){
        result.value =input.value;
    }









    
    


}
