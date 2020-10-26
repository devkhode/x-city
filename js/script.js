var hamb = document.querySelector("#hamburgerbtn");
var links = document.querySelector(".hide");
var closeb = document.querySelector("#closeBtn");
var caseLink = document.querySelector(".hide-me");
var hoverMe = document.querySelectorAll(".hoverme");
var changeBody= document.querySelector("body");
var sectionOne = document.querySelector(".section-one");
var sendBrief = document.querySelector(".brief");
var joinUS = document.querySelector(".join")
var contactForm = document.querySelector("#contact")
var allLink = document.querySelector(".link")
var terms = document.querySelector(".terms")
var workPage = document.querySelector(".next")


function OverFlow() {
    changeBody.style.overflow= "hidden"
    changeBody.style.maxWidth= "100%"
    
};


function joinUsLink() {
    caseLink.style.display="none"
    links.style.display="block"
    joinUS.style.display="block"
    contactForm.style.display="grid"
    sendBrief.style.display="none"
    changeBody.style.background= "black"
    allLink.style.display="none"
    terms.style.display="none"
    OverFlow()  
}

function show() {
    links.style.display = "block"
    links.style.zIndex = "1"
    hamb.style.display = "none"
    links.style.marginTop = "100px"
    closeb.style.display = "inline-block"
    closeb.style.marginLeft = "0"
    changeBody.style.background= "black"
    OverFlow()
    sectionOne.style.display="none"
    contactForm.style.display="none"
    workPage.style.display = "none"


};

function closeup() {
    links.style.display = "none"
    hamb.style.display = "block"
    closeb.style.display = "none"
    caseLink.style.display="none"
    changeBody.style.background= "none"
    sectionOne.style.display="block"
    changeBody.style.overflowY= "scroll"
    workPage.style.display = "block"
};


hamb.addEventListener("click", show);
closeb.addEventListener("click", closeup);


