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

// Search functionality

// function search() {
//     const searchInput = document.getElementById("search-input");
//     const tableRows = document.querySelectorAll("table tbody tr");

//     searchInput.addEventListener("input", function() {
//         const searchQuery = this.value.toLowerCase();
//         tableRows.forEach(function(row) {
//         const animalType = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
//         const animalBreed = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
//         const animalID = row.querySelector("td:nth-child(0)").textContent.toLowerCase();
//         if (animalType.includes(searchQuery) || animalBreed.includes(searchQuery) || animalID.includes(searchQuery)) {
//             row.style.display = "block";
//             } else {
//             row.style.display = "none";
//     }
// });
// });
// }
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
  
  