

document.addEventListener("DOMContentLoaded", () => {

const input = document.querySelector(".search-section");
const searchBar = document.querySelector(".search-bar");
const closebtn = document.querySelector(".close");
const jobFinders = document.querySelector(".job-info");
const dropdown = document.querySelector(".drop");
const trendclose = document.querySelector(".trendclose");
const trendingbox= document.querySelector(".trending-box");
const findingjobbuttons=document.querySelector(".button1");
const locationplace =document.querySelector(".city-name");
const cityfinder =document.querySelector(".location");
const citycloser =document.querySelector(".closercity");


const applydisplaycity=()=>{
    locationplace.style.opacity="1";
    locationplace.style.transform="scale(1)";
}
const closedisplaycity=()=>{
    locationplace.style.opacity="0";
}
cityfinder.addEventListener("click",()=>{

    applydisplaycity();
})
citycloser.addEventListener("click",()=>{
    closedisplaycity();
})


findingjobbuttons.addEventListener("click",()=>{
    alert("first choose job and city");
})


// Function to apply styles when input is clicked
const applyStyles = () => {
    input.style.borderBottom = "5px solid blue";
    input.style.background = "lightgrey";
};

// Function to remove styles when clicking outside input
const removeStyles = () => {
    
    input.style.borderBottom = "none";
    // input.style.background = "none";
};

// Function to display job finders
const displayJobFinders = () => {
    jobFinders.style.display="block";
};

// Function to hide job finders
const hideJobFinders = () => {
   
    jobFinders.style.display = "none";
  
};


input.addEventListener("click", () => {
    applyStyles();
    displayJobFinders();
});


closebtn.style.cursor="pointer";
trendclose.style.cursor="pointer";
// const closingbox =()=>{
//     hideJobFinders();
//     removeStyles();
// }
 closebtn.addEventListener("click",()=>{
   
    hideJobFinders();
   
    removeStyles();
 });
 

 const trendingopenbox=()=>{
    trendingbox.style.opacity="1";
}
const trendingclosebox=()=>{
    trendingbox.style.opacity="0";
}

dropdown.style.cursor="pointer";

dropdown.addEventListener("click",(e)=>{
    if(e){
    e.preventDefault();}
   
    console.log("dropdown");
    trendingopenbox();
});
trendclose.addEventListener("click",()=>{
    trendingclosebox();
});


/// zoom effect


    setTimeout(function() {
        document.getElementById('hidden1').style.opacity = "1";
        document.getElementById('my').classList.add('hidden');
    }, 2000); // Show #hidden1 and hide #my after 4 seconds

    setTimeout(function() {
        document.getElementById('my').style.display = "none";
    }, 2000); // Hide #my completely after 5 seconds


let icon =document.querySelector(".menu-icon");
let ul=document.querySelector(".allLinks");
let homepageItems =document.querySelectorAll(".home-page");
const crossiconbar=document.querySelector(".cross-iconbar");

icon.addEventListener("click",()=>{
    icon.style.transform="scale(0)";
    crossiconbar.style.transform="scale(1)";
    ul.classList.add("showMenu");
});
crossiconbar.addEventListener("click",()=>{
    icon.style.transform="scale(1)";
    crossiconbar.style.transform="scale(0)";
    ul.classList.remove("showMenu");

});

  
});






