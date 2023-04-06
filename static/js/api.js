// functions to query the REST API
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