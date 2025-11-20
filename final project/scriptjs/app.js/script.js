 
// const get = document.getElementById("d");
// get.addEventListener("click", myFunc);

// function myFunc() {
//     alert("clicking",);
// };

// Select all bucket items
// const buckets = document.querySelectorAll(".bucket1");

const get = document.getElementsByClassName("dog");
for (let i = 0; i < get.length; i++) {
    get[i].addEventListener("click", myFunc);
}

function myFunc() {
    alert("clicking",);
};

