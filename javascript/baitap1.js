function myFunction1(){
var diemhk1 = document.getElementById("hk1").value;
diemhk1 = parseInt(diemhk1);
var diemhk2 = document.getElementById("hk2").value;
diemhk2 = parseInt(diemhk2);
var c = document.getElementById("select");
var value = c.options[c.selectedIndex].value;
value = parseInt(value)
var avg;
var getting;
switch(value){
    case 1:{
    // avg = (a+(b*2))/3;
    avg = diemhk1+diemhk2
    avg = parseFloat(avg);
    document.getElementById("avg").value = avg;
    }
    case 2:{
    avg = ((diemhk1*2)+(diemhk2*3))/5;
    avg = parseFloat(avg);
    document.getElementById("avg").value = avg;
    }
    case 3:{
    avg = ((diemhk1*3)+(diemhk2*4))/7;
    avg = parseFloat(avg);
    document.getElementById("avg").value = avg;
    }
}
if(avg>=9){
    document.getElementById("xl").innerHTML="Hoc sinh gioi";

}
if(avg<9 && avg>7){
    document.getElementById("xl").innerHTML="Hoc sinh Kha";
}
if(avg<7){
    document.getElementById("xl").innerHTML="Hoc sinh trung binh";
}

}
function myFunction2(){
    document.getElementById("hk1").value ="";
    document.getElementById("hk2").value = "";
}
