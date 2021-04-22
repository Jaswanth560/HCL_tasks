function create(){
    var employeeName=document.getElementById("employeeName").value;
    var employeeId=document.getElementById("employeeId").value;
    var employeeDesignation=document.getElementById("employeeDesignation").value;
    var employeeLocation=document.getElementById("employeeLocation").value;

    var tabledata=document.getElementsByTagName('table')[0];

    var newRow=tabledata.insertRow(1);

    var coloumn1Data=newRow.insertCell(0);
    var coloumn2Data=newRow.insertCell(1);
    var coloumn3Data=newRow.insertCell(2);
    var coloumn4data=newRow.insertCell(3);

    coloumn1Data.innerHTML=employeeName;
    coloumn2Data.innerHTML=employeeId;
    coloumn3Data.innerHTML=employeeDesignation;
    coloumn4data.innerHTML=employeeLocation;
}