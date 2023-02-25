let tableData = [];
const addRowBtn = document.getElementById("addnewRow");
const tableBody = document.getElementById("tableBody");

let index = 0;


// saveButton.addEventListener

function saveTableData(studenName, rollNo, subject, marks, markedBy) {
    addRowBtn.disabled = false;

    if(studentName=="" || rollNo =="" ||subject=="" ||marks=="" || markedBy==""){
        alert("Fill all the details");
    }
    // else if (markedBy.includes("@") == false) {
    //     alert("Please Enter valid Email");
    // }
    else{
        createdData = {
            student_name: studenName, 
            Student_roll: rollNo,
            subject: subject,
            marks :marks,
            markedBy: markedBy
        }
    }

    console.log(createdData);
}        

addRowBtn.addEventListener("click", addRow);

function addRow(){
    // console.log("hi");
    index++;
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td> ${index}</td>
        <td> <input id="studentName" type="text" name="student_name" requiredd> </td>
        <td> <input id="rollNo" type="text" name="student_roll" required> </td>
        <td> <input id="subject" type="text" name="subject" required> </td>
        <td> <input id="marks" type="text" name="marks" required> </td>
        <td> <input id="markedBy" type="text" name="markedBy" required> </td>
        <td> <button id="saveButton" onclick="saveTableData()">Save</button> </td>
    `;
    tableBody.appendChild(newRow);
    addRowBtn.disabled = true;

    let studentName = document.getElementById("studentName").value;
    let rollNo = document.getElementById("rollNo").value;
    let subject = document.getElementById("subject").value;
    let marks = document.getElementById("marks").value;
    let markedBy = document.getElementById("markedBy").value;

}










