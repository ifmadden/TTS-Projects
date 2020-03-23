let formUserSignUp = $("#userSignUp");
let divUserSignUp = $(".userSignUp");
let loginSubmit = $("#loginSubmit");
let loginEmailAddress = $("#loginEmailAddress");
let loginPassword = $("#loginPassword");
let signUpSubmit = $("#signUpSubmit");
let firstName = $("#firstName");
let lastName = $("#lastName");
let signUpEmailAddress = $("#signUpEmailAddress");
let phoneNumber = $("#phoneNumber");
let signUpPassword = $("#signUpPassword");
let realEmailAddress;
let realPassword;

//Checks whether the user successfully entered login credentials. Returns an error if invalid
function loginFormCheck(){
    loginSubmit.click(function(){
        if ((loginEmailAddress.val() === realEmailAddress) && (loginPassword.val() === realPassword)){
            $("div").remove(".signUpSuccess");
            $("div").remove(".loginFailure");
            divUserSignUp.before("<div class = \"loginSuccess\">You've successfully logged into your account.</div>");
        }
        else{
            $("div").remove(".signUpSuccess");
            $("div").remove(".loginFailure");
            divUserSignUp.before("<div class = \"loginFailure\">You've entered invalid credentials to login.</div>");
        }
    })
}

//Checks whether all the form elements pass
function signUpFormCheck(){
    signUpSubmit.click(function(){
        $("div").remove(".error");
        $("div").remove(".loginFailure");
        let formArray = [checkFirstName(), checkLastName(), checkEmail(), checkPhoneNumber(), checkPassword()];

        if (formArray.every(checkFormArray) == true){
            realEmailAddress = signUpEmailAddress.val();
            realPassword = signUpPassword.val();
            formUserSignUp.replaceWith("<div class = \"signUpSuccess\">You've successfully created an account! Please login with your credentials at the top right of the screen.</div>");
        }
    });
}

//Checks if all the form inputs are valid
function checkFormArray(form){
    return form == true;
}

//This function validates data in 'First Name' field
//Can't figure out how to use arrow functions with jquery
function checkFirstName(){    
        if(firstName.val().length > 10){
            firstName.after("<div class = \"error\">Your 'First Name' cannot be greater than 10 characters.</div>");
        }        
        else if(!firstName.val().trim()){
            firstName.after("<div class = \"error\">The 'First Name' field cannot be blank.</div>");
        }
        else{
            return true;
        }
}

//This function validations the 'Last Name' field
function checkLastName(){
        if(lastName.val().length > 20){
            lastName.after("<div class = \"error\">Your 'Last Name' cannot be greater than 20 characters.</div>");
        }        
        else if(!lastName.val().trim()){
            lastName.after("<div class = \"error\">The 'Last Name' field cannot be blank.</div>");
        }
        else{
            return true;
        }
}

//This function validates the email and leverages a regex query I found online for email validations
function checkEmail(){
        if(isEmail(signUpEmailAddress.val()) == false){
            signUpEmailAddress.after("<div class = \"error\">Your E-Mail address is invalid.</div>");
        }
        else if(!signUpEmailAddress.val().trim()){
            signUpEmailAddress.after("<div class = \"error\">You must enter an E-Mail address to sign-up.</div>");
        }
        else{            
            return true;
        }
}

//The below function validates an email address. I obtained from stack overflow
function isEmail(email){
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

//Calls the 'isPhoneNumber' function to validate phone number
function checkPhoneNumber(){
        if(isPhoneNumber(phoneNumber.val()) == false){
            phoneNumber.after("<div class = \"error\">Your phone number must be one of the following formats:<br>Ten consecutive digits<br>ddd-ddd-dddd<br>ddd.ddd.dddd</div>");
        }
        else{
            return true;
        }
}

//Regex for validating phone number obtained from stack overflow
function isPhoneNumber(number){
    let regex = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
    return regex.test(number);
}

//calls the 'isPassword' function to validate password
function checkPassword(){
        if(isPassword(signUpPassword.val()) == false){
            signUpPassword.after("<div class = \"error\">Your password must be a minimum of 8 characters and contain at least one uppercase letter.</div>");
        }
        else{
            return true;
        }
}

//Regex partially modified to fit spec conditions for validating password
function isPassword(pwd){
    let regex = /^(?=.*[A-Z]).{8,}$/;
    return regex.test(pwd);
}

signUpFormCheck();
loginFormCheck();