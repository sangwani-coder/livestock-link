// // Get the features container element
// const featuresContainer = document.querySelector('.features-container');

// // Get all the features
// const features = document.querySelectorAll('.feature');

// // Loop through each feature and set its height to match the container height
// features.forEach((feature) => {
//   feature.style.height = `${featuresContainer.offsetHeight}px`;
// });

// toggle dark mode
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var elements = document.getElementsByClassName('card');
    
    for (var i=0, len=elements.length; i < len; i++){
        elements[i].classList.toggle("dark-card");
    }

    var elements = document.getElementsByClassName('card-header');
    for (var i=0, len=elements.length; i < len; i++){
        elements[i].classList.toggle("dark-card-header");
    }

}

// Appointment function
const appointmentForm = document.querySelector('#signup-form');

appointmentForm.addEventListener('submit', (e) => {
	e.preventDefault();
	// Get the values from the form
	const vetName = appointmentForm['vet-name'].value;
	const date = appointmentForm['date'].value;
	const time = appointmentForm['time'].value;
	const reason = appointmentForm['reason'].value;

	// Do something with the values (e.g. send them to the server)
	console.log(vetName, date, time, reason);

	// Clear the form
	appointmentForm.reset();
});

function search() {
    var input, filter, table, tr, animalType, animalID, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("animal-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      animalType = tr[i].getElementsByTagName("td")[2];
      animalID = tr[i].getElementsByTagName("td")[0];
      if (animalType || animalID) {
        txtValue = animalType.textContent || animalID.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  

// function to load the data in the table
  function loadTable() {
    // Define sample data
 const data = [
    { id: 1, type: "cattle", breed: "Angus", DoB: "4-04-2023", weight: 500, sex: "female" },
    { id: 2, type: "sheep", breed: "Merino", DoB: "4-04-2023", weight: 80, sex: "male" },
    { id: 3, type: "goat", breed: "Boer", DoB: "4-04-2023", weight: 50, sex: "male" },
    { id: 4, type: "cattle", breed: "Holstein", DoB: "4-04-2022", weight: 800, sex: "male" },
    { id: 5, type: "sheep", breed: "Dorper", DoB: "4-04-2023", weight: 70, sex: "female" },
    { id: 6, type: "cattle", breed: "Angus", DoB: "4-04-2023", weight: 500, sex: "female" },
    { id: 7, type: "sheep", breed: "Merino", DoB: "4-04-2023", weight: 80, sex: "male" },
    { id: 8, type: "goat", breed: "Boer", DoB: "4-04-2023", weight: 50, sex: "male" },
    { id: 9, type: "cattle", breed: "Holstein", DoB: "4-04-2022", weight: 800, sex: "male" },
    { id: 10, type: "sheep", breed: "Dorper", DoB: "4-04-2023", weight: 70, sex: "female" },
    { id: 11, type: "cattle", breed: "Angus", DoB: "4-04-2023", weight: 500, sex: "female" },
    { id: 12, type: "sheep", breed: "Merino", DoB: "4-04-2023", weight: 80, sex: "male" },
    { id: 13, type: "goat", breed: "Boer", DoB: "4-04-2023", weight: 50, sex: "male" },
    { id: 14, type: "cattle", breed: "Holstein", DoB: "4-04-2022", weight: 800, sex: "male" },
    { id: 15, type: "sheep", breed: "Dorper", DoB: "4-04-2023", weight: 70, sex: "female" },
  ];

    // Get the table body element
  const tableBody = document.querySelector('#animal-table tbody');
  
  // Loop through the data and create table rows
  for (let i = 0; i < data.length; i++) {
    // Create a new row
    const newRow = document.createElement('tr');
  
    // Create a cell for the ID
    const idCell = document.createElement('td');
    idCell.textContent = data[i].id;
    newRow.appendChild(idCell);

    // Create a cell for the type
    const typeCell = document.createElement('td');
    typeCell.textContent = data[i].type;
    newRow.appendChild(typeCell);
  
    // Create a cell for the breed
    const breedCell = document.createElement('td');
    breedCell.textContent = data[i].breed;
    newRow.appendChild(breedCell);

    // Create a cell for the DoB
    const DoBCell = document.createElement('td');
    DoBCell.textContent = data[i].DoB;
    newRow.appendChild(DoBCell);

    // Create a cell for the weight
    const weightCell = document.createElement('td');
    weightCell.textContent = data[i].weight;
    newRow.appendChild(weightCell);

    // Create a cell for the sex
    const sexCell = document.createElement('td');
    sexCell.textContent = data[i].sex;
    newRow.appendChild(sexCell);

    const actionCell = document.createElement('td');
    actionCell.innerHTML = '<a href="#">View</a> | <a href="#">Edit</a> | <a href="#">Delete</a>';
    newRow.appendChild(actionCell);
  
    // Add the row to the table body
    tableBody.appendChild(newRow);
  }
}

// clinical examination page functions
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

// Skip function
// function Skip(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   document.getElementsByClassName("step")[currentTab].className += " finish"
//   // if you have reached the end of the form... :
//   if (currentTab >= x.length) {
//     //...the form gets submitted:
//     document.getElementById("regForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = true;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}


// Add input fields dynamicallly

function addField(id) {

  var name = id + '[]'
  // creating the input element
  var field = document.createElement("input");
  field.setAttribute("type", "text");
  field.setAttribute("name", name);
  field.setAttribute("class", "form-control")
  field.setAttribute("placeholder", id + ' problems') 

  var div = document.getElementById(id)
  div.appendChild(field);

}

//  Remove an Input field
function removeField(id){
  var herd = document.getElementById(id)
  var input_tags = herd.getElementsByTagName("input");
  if (input_tags.length > 1) {
    herd.removeChild(input_tags[(input_tags.length) - 1]);
  }
}