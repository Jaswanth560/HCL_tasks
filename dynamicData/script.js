function create(){
    var input=document.getElementById("input").value;
    var para2=document.getElementById("para2").value;
    var output=document.getElementById("output").value;
    var para3=document.getElementById("para3").value;

    var table=document.getElementsByTagName('table')[0];

    var newRow=table.insertRow(1);

    var cel1=newRow.insertCell(0);
    var cel2=newRow.insertCell(1);
    var cel3=newRow.insertCell(2);
    var cel4=newRow.insertCell(3);

    cel1.innerHTML=input;
    cel2.innerHTML=para2;
    cel3.innerHTML=output;
    cel4.innerHTML=para3;
}