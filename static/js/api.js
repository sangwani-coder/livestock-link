// functions to query the REST AP

// POST method implementation to register a user:
async function registerUser() {
    const form = document.getElementById("form");
    const submitter = document.querySelector("button[value=submit]");
    const formData = new FormData(form, submitter);
    const url = "http://localhost:8000/api/register/";
    const user = formData.get('user_type');
    let is_farmer = false;
    let is_vet = false;

    if (user === "farmer"){
        is_farmer = true
    }
    else {
        is_vet = true
    }
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");

    const formdata = {
        username: username,
        password: password,
        email: email
    };
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(formdata), // body data type must match "Content-Type" header
    });
    
    if (response.status == 201){
        window.location.href = "login.html";
    }
    return response.json(); // parses JSON response into native JavaScript objects
  }  

// Login function
// async function loginUser() {
//     const form = document.getElementById("form");
//     const submitter = document.querySelector("button[value=submit]");
//     const formData = new FormData(form, submitter);
//     const url = "http://localhost:8000/api/login-user/";

//     const username = formData.get("username");
//     const password = formData.get("password");

//     const formdata = {
//         email: username,
//         password: password,
//     }
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(formdata), // body data type must match "Content-Type" header
//     });
    
//     const result = await response.json();
//     console.log("Success:", result);
//   }

async function loginUser() {
  try {
    const form = document.getElementById("login-form");
    const submitter = document.querySelector("button[value=submit]");
    const formData = new FormData(form, submitter);

    const username = formData.get("username");
    const password = formData.get("password");

    const formdata = {
        email: username,
        password: password,
    };

    const response = await fetch("http://localhost:8000/api/login-user/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    console.log(formdata);
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
  

// get request
const getLivestock = async (user) => {
    const response = await fetch('http://localhost:8000/api/livestock/');
    const myData = await response.json();
    console.log(myData);
}

// post

const postLivestock = async (user) => {
    const response = await fetch('http://localhost:8000/api/livestock/', {
        method:  'POST',
        body: myBody, // objects
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json();
    console.log(myJson)
}