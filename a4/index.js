function ValidateForm() {
  var validFirstName = false;
  var validLastName = false;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var validPassword = false;
  var validAddress = false;
  var validCity = false;
  var validZipcode = false;
  
  var errorMessages = ""; 
  //All the error messages are going to stay in this variable
  /********** VALIDATES USERNAME **********/
  //Required. Maximum characters.
  
  
  /********** VALIDATES FIRSTNAME **********/
  
  if (myContact.firstname.value==null ||
      myContact.firstname.value=== "" ||
      myContact.firstname.value.length >20)
    errorMessages += "<p> The first name is required and must be less than 21 characters</p>"
      else
        validFirstName = true;
  
    /********** VALIDATES LASTNAME **********/
   if (myContact.lastname.value==null ||
      myContact.lastname.value=== "" ||
      myContact.lastname.value.length >50)
    errorMessages += "<p> The last name is required and must be less than 51 characters</p>"
      else
        validLastName = true;
  
  /********** VALIDATES EMAIL **********/

  
  
  /********** VALIDATES PHONE **********/
   if (myContact.phone.value==null ||
      myContact.phone.value=== "" ||
      myContact.phone.value.length >15)
    errorMessages += "<p> The phone is required and must be less than 16 characters</p>"
      else
        validPhone = true;
  
    /********** VALIDATES USERNAME **********/
   if (myContact.username.value==null ||
      myContact.username.value=== "" ||
      myContact.username.value.length >12)
    errorMessages += "<p> The username is required and must be less than 13 characters</p>"
      else
        validUsername = true;
  
      /********** VALIDATES USERNAME **********/
   if (myContact.password.value==null ||
      myContact.password.value=== "" ||
      myContact.password.value.length >7)
    errorMessages += "<p> The password is required and must be less than 8 characters</p>"
      else
        validUsername = true;

      /********** VALIDATES ADDRESS **********/
   if (myContact.address.value==null ||
      myContact.address.value=== "")
    errorMessages += "<p> Invalid address </p>"
      else
        validAddress = true;
  
      /********** VALIDATES CITY **********/
   if (myContact.city.value==null ||
      myContact.city.value=== "")
    errorMessages += "<p> Invalid city </p>"
      else
        validCity = true;
 

  
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  // Make sure you return all the boolean variables that are checking each field
  return (validFirstName && validLastName && validEmail && validPhone && validUsername && validPassword && validAddress && validCity);
    }
