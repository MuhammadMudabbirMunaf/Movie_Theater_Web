function viewProfile() {
    var mainMovieDiv = document.getElementById("container").style.display = "none";
    var userProfile = document.getElementById("container2").style.display = "block";
}

// var names = document.getElementsByClassName("username").value;
// var pass = document.getElementsByClassName("password").value;
// var conPass = document.getElementsByClassName("confirmPassword").value;
// var address1 = document.getElementsByClassName("address").value;
// var dob = document.getElementsByClassName("dob").value;
// var gender1 = document.getElementsByClassName("gender").value;
// var profPic = document.getElementsByClassName("profilePic").value;
// var num = document.getElementsByClassName("number").value;
// var postCode = document.getElementsByClassName("postalCode").value;

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var address = document.getElementById("address").value;
  var dob = document.getElementById("dob").value;
  var arrayGender = document.getElementsByName("gender");
  var selectedGender;
  var profilePic = document.getElementById("picChoose").value;
  var number = document.getElementById("number").value;
  var postalCode = document.getElementById("postalCode").value;

function movieSelect() {
    var mainMovieDiv = document.getElementById("container").style.display = "block";
    var userProfile = document.getElementById("container2").style.display = "none";
}
function againSignIn() {
    var mainMovieDiv = document.getElementById("container").style.display = "none";
    var userProfile = document.getElementById("container2").style.display = "none";
    // var signin = document.getElementById("signinMain").style.display = "block"; 
}

