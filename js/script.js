var hamb = document.querySelector("#hamburgerbtn");
var links = document.querySelector(".hide");
var closeb = document.querySelector("#closeBtn");
var caseLink = document.querySelector(".hide-me");
var hoverMe = document.querySelectorAll(".hoverme")
var changeBody= document.querySelector("body")
var sectionOne = document.querySelector(".section-one")

function OverFlow() {
    changeBody.style.overflow= "hidden"
    changeBody.style.maxWidth= "100%"
    
};


function show() {
    links.style.display = "block"
    hamb.style.display = "none"
    links.style.marginTop = "100px"
    closeb.style.display = "inline-block"
    closeb.style.marginLeft = "0"
    changeBody.style.background= "black"
    changeBody.style.over= "black"
    OverFlow()
    sectionOne.style.display="none"
};

function closeup() {
    links.style.display = "none"
    hamb.style.display = "block"
    closeb.style.display = "none"
    caseLink.style.display="none"
    changeBody.style.background= "none"
    sectionOne.style.display="block"
    changeBody.style.overflowY= "scroll"




};


hamb.addEventListener("click", show);
closeb.addEventListener("click", closeup);
