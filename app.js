let serialNumber = document.getElementById("serialNumber");
let employeeName = document.getElementById("employeeName");
let fatherName = document.getElementById("fatherName");
let currentDesignation = document.getElementById("currentDesignation");
let currentWorkplace = document.getElementById("currentWorkplace");
let birthdate = document.getElementById("birthdate");
let ownDistrict = document.getElementById("ownDistrict");
let firstJoiningDesignation = document.getElementById("firstJoiningDesignation");
let firstJoiningDate = document.getElementById("firstJoiningDate");
let dateOfJoiningPresentPost = document.getElementById("dateOfJoiningPresentPost");
let dateOfJoiningPresentWorkplace = document.getElementById("dateOfJoiningPresentWorkplace");
let educationalQualification = document.getElementById("educationalQualification");
let dateOfRetirement = document.getElementById("dateOfRetirement");
let comments = document.getElementById("comments");

// button submit
let btn = document.getElementById("btn");

// table body select
let tbody = document.getElementById('tbody');
// **********************************************************************************************

// add event listener Button
btn.addEventListener('click', addEmployee);

function addEmployee(){
   
// create element tr 
let tr = document.createElement('tr');

// create element td
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
let td4 = document.createElement('td');
let td5 = document.createElement('td');
let td6 = document.createElement('td');
let td7 = document.createElement('td');
let td8 = document.createElement('td');
let td9 = document.createElement('td');
let td10 = document.createElement('td');
let td11 = document.createElement('td');
let td12 = document.createElement('td');
let td13 = document.createElement('td');
let td14 = document.createElement('td');

// *********************************************************************


// append td into tr
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);
tr.appendChild(td6);
tr.appendChild(td7);
tr.appendChild(td8);
tr.appendChild(td9);
tr.appendChild(td10);
tr.appendChild(td11);
tr.appendChild(td12);
tr.appendChild(td13);
tr.appendChild(td14);
// ******************************
// append tr into tbody
tbody.appendChild(tr);

// ***********

let cell1 = serialNumber.value;
let cell2 = employeeName.value;
let cell3 = fatherName.value;
let cell4 = currentDesignation.value;
let cell5 = currentWorkplace.value;
let cell6 = birthdate.value;
let cell7 = ownDistrict.value;
let cell8 = firstJoiningDesignation.value;
let cell9 = firstJoiningDate.value;
let cell10 = dateOfJoiningPresentPost.value;
let cell12 = educationalQualification.value;
let cell11 = dateOfJoiningPresentWorkplace.value;
let cell13 = dateOfRetirement.value;
let cell14 = comments.value;








// ********* value insert into cell ***************************
td1.innerText = cell1;
td2.innerText = cell2;
td3.innerText = cell3;
td4.innerText = cell4;
td5.innerText = cell5;
td6.innerText = cell6;
td7.innerText = cell7;
td8.innerText = cell8;
td9.innerText = cell9;
td10.innerText = cell10;
td11.innerText = cell11;
td12.innerText = cell12;
td13.innerText = cell13;
td14.innerText = cell14;


// save item in local Storage
let employee = {
    Serial_No : cell1,
    Employee_Name : cell2,
    Father_name : cell3,
    Current_Designation : cell4,
    Current_workplacce : cell5,
    Birthdate : cell6,
    Own_District : cell7,
    First_joining_Designation : cell8,
    first_joining_Organaijation : cell9,
    Date_Of_joining_present_post : cell10,
    Date_Of_joining_present_workplace : cell11,
    Educational_Qualification : cell12,
    PRL_Or_Date_Of_Retirement : cell13,
    Comments : cell14

}

localStorage.setItem("employees list", JSON.stringify(employee));




// input field blank
serialNumber.value = "";
employeeName.value = "";
fatherName.value = "";
currentDesignation.value = "";
currentWorkplace.value = "";
birthdate.value = "";
ownDistrict.value = "";
firstJoiningDesignation.value = "";
firstJoiningDate.value = "";
dateOfJoiningPresentPost.value = "";
dateOfJoiningPresentWorkplace.value = "";
educationalQualification.value = "";
dateOfRetirement.value = "";
comments.value = "";

}





