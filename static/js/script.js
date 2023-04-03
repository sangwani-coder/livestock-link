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