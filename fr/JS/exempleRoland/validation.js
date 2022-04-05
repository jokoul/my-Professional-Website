function validateForm(){
  // Variable declaration
  var error = false;
  var name = $('#name').val().trim();
  var email = $('#email').val().trim();
  var subject = $('#subject').val().trim();
  var message = $('#message').val().trim();
  
  // Form field validation
  if(name.length == 0){
      error = true;
      $('#name').addClass('error');
  }else{
      $('#name').removeClass('error');
  }
  if(email.length == 0 || email.indexOf('@') == '-1' || email.indexOf('.') == '-1'){
      error = true;
      $('#email').addClass('error');
  }else{
      $('#email').removeClass('error');
  }
  if(subject.length == 0){
      error = true;
      $('#subject').addClass('error');
  }else{
      $('#subject').removeClass('error');
  }
  if(message.length == 0){
      error = true;
      $('#message').addClass('error');
  }else{
      $('#message').removeClass('error');
  }   
  
  return error;
}

function submitContactForm() {
  if(validateForm() === false)
  {
    /* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
    $.post("email.php", $("#contact_form").serialize(),function(result){
        //Check the result set from email.php file.
        if(result == 'sent'){
            //If the email is sent successfully, hides form and display success message.
            $('#contact form').slideUp();
            $('#contact .message-sent').css('display', 'block'); 
            $('#contact .message-error').css('display', 'none');
        }else{
            $('#contact .message-error').css('display', 'block');
        }
    });
  }
  else
  {
    grecaptcha.reset();
  }
}