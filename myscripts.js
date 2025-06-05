//Javascript for Toggle Menu       

    
    var navLinks = document.getElementById("navLinks");
    
    function showMenu(){
        navLinks.style.right = "0";
    }
    
     function hideMenu(){
        navLinks.style.right = "-200px";
    }
        
//Expand with button         
        
function toggleAbout() {
var paragraphs = document.getElementsByClassName("expandable");
var button = document.getElementsByClassName("expand-btn")[0];
for (var i = 0; i < paragraphs.length; i++) {
if (paragraphs[i].style.display === "none") {
  paragraphs[i].style.display = "block";
  button.innerHTML = "COLLAPSE";
} else {
  paragraphs[i].style.display = "none";
  button.innerHTML = "EXPLORE NOW";
}
}
}

//terms

function displayModal() {
  var modal = document.getElementById("termsModal");
  modal.style.display = "block";
}

function acceptTerms() {
  var modal = document.getElementById("termsModal");
  modal.style.display = "none";
  alert("You have accepted the terms and conditions.");
}

window.onload = function() {
  displayModal();
};



  