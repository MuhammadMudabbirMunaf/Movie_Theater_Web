// building constructor
function SignUp(
  username, email, password, confirmPassword, address, dateOfBirth, gender, profilePic, number, postalCode
) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.confirmPassword = confirmPassword;
  this.address = address;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;
  this.profilePic = profilePic;
  this.number = number;
  this.postalCode = postalCode;
}

// function onclick on signup btn
function signupRemoval() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var address = document.getElementById("address").value;
  var arrayGender = document.getElementsByName("gender");
  var selectedGender;
  var dob = document.getElementById("dob").value;
  var profilePic = document.getElementById("picChoose").value;
  var number = document.getElementById("number").value;
  var postalCode = document.getElementById("postalCode").value;

  if(arrayGender[0].checked){
    selectedGender = arrayGender[0].value;
  }
  else if(arrayGender[1].checked){
    selectedGender = arrayGender[1].value;
  }
  else if(arrayGender[2].checked){
    selectedGender = arrayGender[2].value;
  }
  else{
    alert("select gender")
  };

  if (password !== confirmPassword) {
    alert("enter same password twice");
  }
  if (username === "" || username === " ") {
    var username = document.getElementById("username").style.border = "1px solid red";
  }
  if (email === "" || email === " ") {
    var email = document.getElementById("email").style.border = "1px solid red";
  }
  if (password === "" || password === " ") {
    var password = document.getElementById("password").style.border = "1px solid red";
  }
  if (confirmPassword === "" || confirmPassword === " ") {
    var confirmPassword = document.getElementById("confirmPassword").style.border = "1px solid red";
  }
  if (address === "" || address === " ") {
    var address = document.getElementById("address").style.border = "1px solid red";
  }
  if (dob === "" || dob === " ") {
    var dob = document.getElementById("dob").style.border = "1px solid red";
  }
  if (profilePic === "" || profilePic === " ") {
    var profilePic = document.getElementById("picChoose").style.border = "1px solid red";
  }
  if (number === "" || num === " ") {
    var number = document.getElementById("number").style.border = "1px solid red";
  }
  if (postalCode === "" || postalCode === " ") {
    var postalCode = document.getElementById("postalCode").style.border = "1px solid red";
  }

  else {
    var signup1 = new SignUp(username, email, password, confirmPassword, address, dob, selectedGender, profilePic, number, postalCode);
    window.localStorage.setItem("signupMain", JSON.stringify(signup1));

    var signin0 = document.getElementById("signinMain").style.display = "block";
    var signup0 = document.getElementById("signupMain").style.display = "none";
  }
}

function forgotPass() {
  alert("Try to focus and remember your password or else you will lose your progress");
}

function directSignin() {
  document.getElementById("signinMain").style.display = "block";
  document.getElementById("signupMain").style.display = "none";
}

// function onclick on signin / login btn

function signinRemoval() {
  // var xBtns = document.getElementById("xBtn").style.display = "block";
  var data = JSON.parse(window.localStorage.getItem("signupMain"));

  var siEmail = document.getElementById("email").value;
  var siPassword = document.getElementById("password").value;

  if (siEmail !== data.email) {
    alert(" email does not matches from the email in signup form");
    if (siPassword !== data.password) {
    alert(" password does not matches from the password in signup form");
    }
  }
  else {
    var signin0 = document.getElementById("signinMain").style.display = "none";
    var dashboard0 = document.getElementById("main").style.display = "block";
    } 
}
// function onclick on logout btn in dashhboard form

function againSignIn() {
  var signin0 = document.getElementById("signinMain").style.display = "block";
  var dashboard0 = document.getElementById("main").style.display = "none";
}

var names = document.getElementsByClassName("username").value;
var pass = document.getElementsByClassName("password").value;
var conPass = document.getElementsByClassName("confirmPassword").value;
var address1 = document.getElementsByClassName("address").value;
var dob = document.getElementsByClassName("dob").value;
var gender1 = document.getElementsByClassName("gender").value;
var profPic = document.getElementsByClassName("profilePic").value;
var num = document.getElementsByClassName("number").value;
var postCode = document.getElementsByClassName("postalCode").value;

// function onclick on profile btn
function userProfile() {
  var postLinks = document.getElementById("post1").style.display = "block";

  var username1 = document.getElementById("username").value;
  var email1 = document.getElementById("email").value;
  var password1 = document.getElementById("password").value;
  var confirmPassword1 = document.getElementById("confirmPassword").value;
  var address1 = document.getElementById("address").value;
  var arrayGender = document.getElementsByName("gender");
  var selectedGender;
  var dob1 = document.getElementById("dob").value;
  var profilePic = document.getElementById("picChoose").value;
  var number1 = document.getElementById("number").value;
  var postalCode1 = document.getElementById("postalCode").value;

  // var uName = window.localStorage.getItem(username1);
  // var uEmail = window.localStorage.getItem(email1);
  // var uPassword = window.localStorage.getItem(password1);
  // var uAddress = window.localStorage.getItem(address1);
  // var uGender = window.localStorage.getItem(selectedGender);
  // var uDob = window.localStorage.getItem(dob1);
  // var uNumber = window.localStorage.getItem(number1);
  // var uPostCode = window.localStorage.getItem(postalCode1);

  // var uNames1 = document.getElementById("info1").innerHTML = uNames;
  // var uEmails1 = document.getElementById("info2").innerHTML = uEmails;
  // var uPasswords1 = document.getElementById("info3").innerHTML = uPasswords;
  // var uAddresses1 = document.getElementById("info4").innerHTML = uAddresses;
  // var uGenders1 = document.getElementById("info5").innerHTML = uGenders;
  // var uDobs1 = document.getElementById("info6").innerHTML = uDobs;
  // var uNumbers1 = document.getElementById("info7").innerHTML = uNumbers;
  // var uPostCodes1 = document.getElementById("info8").innerHTML = uPostCodes;

  // var uNames1 = document.getElementById("post1").innerHTML = uNames;
  // var uEmails1 = document.getElementById("post1").innerHTML = uEmails;
  // var uPasswords1 = document.getElementById("post1").innerHTML = uPasswords;
  // var uAddresses1 = document.getElementById("post1").innerHTML = uAddresses;
  // var uGenders1 = document.getElementById("post1").innerHTML = uGenders;
  // var uDobs1 = document.getElementById("post1").innerHTML = uDobs;
  // var uNumbers1 = document.getElementById("post1").innerHTML = uNumbers;
  // var uPostCodes1 = document.getElementById("post1").innerHTML = uPostCodes;

  // console.log("uNames1");
  // console.log("uEmails1");
  // console.log("uPasswords1");
  // console.log("uAddresses1");
  // console.log("uGenders1");
  // console.log("uDobs1");
  // console.log("uNumbers1");
  // console.log("uPostCodes1");
}

  var storage = window.localStorage.getItem("signupMain");

  var uNames = JSON.parse(storage);
  // var uEmails = JSON.parse(storage);
  // var uPasswords = JSON.parse(storage);
  // var uAddresses = JSON.parse(storage);
  // var uGenders = JSON.parse(storage);
  // var uDobs = JSON.parse(storage);
  // var uNumbers = JSON.parse(storage);
  // var uPostCodes = JSON.parse(storage);

  var div = uNames.username;
  var div1 = uNames.email;
  var div2 = uNames.password;
  var div3 = uNames.address;
  var div4 = uNames.gender;
  var div5 = uNames.dob;
  var div6 = uNames.number;
  var div7 = uNames.postCode;

  var post = document.getElementById("post1");

  var p = document.createElement("p");
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  var p5 = document.createElement("p");
  var p6 = document.createElement("p");
  var p7 = document.createElement("p");

  var text = document.createTextNode(div);
  var text1 = document.createTextNode(div1);
  var text2 = document.createTextNode(div2);
  var text3 = document.createTextNode(div3);
  var text4 = document.createTextNode(div4);
  var text5 = document.createTextNode(div5);
  var text6 = document.createTextNode(div6);
  var text7 = document.createTextNode(div7);

  p.appendChild(text);
  p1.appendChild(text1);
  p2.appendChild(text2);
  p3.appendChild(text3);
  p4.appendChild(text4);
  p5.appendChild(text5);
  p6.appendChild(text6);
  p7.appendChild(text7);

  post.appendChild(p);
  post.appendChild(p1);
  post.appendChild(p2);
  post.appendChild(p3);
  post.appendChild(p4);
  post.appendChild(p5);
  post.appendChild(p6);
  post.appendChild(p7);
  
  