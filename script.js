
var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);            

function displayDetails() {                                                // function to get values of name and age from the input field
    var name = document.getElementById("name").value;                      // getting value of name from the input field

          if(name == ""){
            alert("please enter your name");
            return false;
          }
          if(!isNaN(name)){
            alert("Please Enter Only Characters values in name field");
            return false;
          }
          if ((name.length < 2) || (name.length > 15)){
            alert("Your name must be have atleast 2 Character");
            return false;
          }
      
    var age = document.getElementById("age").value;                          // getting value of age from the input field
          if(age == ""){
            alert("please enter your age");
            return false;
          }
          if(isNaN(age)){
            alert("Please Enter Only number values in name field");
            return false;
          }
          if(age.length> 2){
            alert("Your age must be less than 100");
            return false;
          }
    
    var display = document.getElementById("display");
    var newRow = display.insertRow(row);                                     // inserting new row into the table
    
    var cell1 = newRow.insertCell(0);                                        // inserting cells into the table
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);


          if (age >= 1 && age <= 18){                                        // conditons for age categorization
            cell3.innerHTML = 'Minor';
            cell3.style.background="yellow";
          }
          if(age >= 18 && age < 45){
            cell3.innerHTML = 'Adults';
            cell3.style.background="green";
          }
          if(age >= 45 && age < 65){
            cell3.innerHTML = 'Middle Aged';
            cell3.style.background="violet";
          }
          if(age >= 65 && age < 100){
            cell3.innerHTML = 'Senior Citizen';                              // insertion of category value into the table cell
            cell3.style.background="pink";
          }

    cell1.innerHTML = name;                                                  // insertion of name value into the table cell
    cell2.innerHTML = age;                                                   // insertion of age value into the table cell
    row++;
    
};

function calcAverage() {                                                     // function for getting average of the age column
    var inputfield =document.getElementById('entry').disabled = true;        // disabled input button after submission of the form
    var tbl = document.getElementById('display');
  var count = 0;
  var total = 0;
    for(var i= 1; i<tbl.rows.length; i++){
        var num = Number(tbl.rows[i].cells[1].innerHTML);
        total += num;
    count++;
    }
    avg=total/count
    var n = avg.toFixed(2);
  console.log(n);
  document.getElementById("average").innerHTML = n;
}



