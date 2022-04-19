
function validateLogin(){
let email= document.getElementById("exampleInputEmail1");
let pwd=document.getElementById("exampleInputPassword1");
   // alert("hi");
    if(email.value==''||pwd.value==''){
        alert("fields cannot be empty");
        return false;
    }
    else{
        return true;
    }
}
function validateEmail(){
    var error=document.getElementById("error");
    var email=document.getElementById("exampleInputEmail1");
    var regexp=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexp.test(email.value)){
        alert("valid email");
        error.innerHTML="VALID";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="INVALID";
        error.style.color="red";
        return false;
    }
}
function phonenumber()
{
  var phoneno = /^\d{10}$/;
  var inputphn=document.getElementById("phoneno");
  if(phoneno.test(inputphn.value))
        {
      return true;
         }
      else
       {
       alert("phone number is not valid");
       return false;
       }
}

function validateRegistration(){
    let fname=document.getElementById("fname");
    let lname=document.getElementById("lname");
    let remail= document.getElementById("inputEmail4");
    let rpwd= document.getElementById("inputPassword4");
    let address1= document.getElementById("inputAddress");
    let address2= document.getElementById("inputAddress2");
    let inputcity= document.getElementById("inputCity");
    let inputState= document.getElementById("inputState");
    let inputZip= document.getElementById("inputZip");
    if(fname.value==''||lname.value==''||remail.value==''||rpwd.value==''||address1.value==''||address2.value==''
    ||inputcity.value==''||inputState.value==''||inputZip.value==''){
        alert("fields cannot be empty");
        return false;
    }
    else{
        return true;
    }
  
    
}
