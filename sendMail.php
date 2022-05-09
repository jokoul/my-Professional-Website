<?php
//error_reporting(0);
//Get user input
$postData = $_POST;
$lastname = $firstname = $subject = $email = $message = $fileName = $fileType = $fileSize = $tmp_name = $uploadedFile = $uploadedStatus = "";
if(isset($_POST['lastname'])){
    $lastname = $_POST['lastname'];
}
if(isset($_POST['firstname'])){
    $firstname = $_POST['firstname'];
}
if(isset($_POST['subject'])){
    $subject= $_POST['subject'];
}
if(isset($_POST['email'])){
    $email = $_POST['email'];
}
if(isset($_POST['message'])){
    $message = $_POST['message'];
}
//file details
if(isset($_FILES['file']['name'])){
    $fileName = $_FILES['file']['name'];
}
$parent = dirname(__DIR__);
//$permanentDestination = "/home/u360302984/domains/joan-kouloumba.in/public_html/professional-site/uploads/" . $fileName; 
$permanentDestination = "C:\Users\joank\devprojet\projet perso\myProfessionalWebsite\uploads\\" . $fileName; 
if(isset($_FILES['file']['type'])){
    $fileType = pathinfo($permanentDestination,PATHINFO_EXTENSION);
}
if(isset($_FILES['file']['size'])){
    $fileSize = $_FILES['file']['size'];
}
if(isset($_FILES['file']['tmp_name'])){
    $tmp_name = $_FILES['file']['tmp_name'];
}

//Error message cases
$missingLastName = '<p>Please enter at least your last name!</p>';
$missingEmail = '<p>Please enter your Email address!</p>';
$invalidEmail = '<p>Please enter a valid Email address!</p>';
$missingMessage = '<p>Please enter your message !</p>';
$missingSubject = '<p>Please enter a subject!</p>';
//error message for file
$wrongFormat = "<p><strong>Sorry this file format is not accepted!</strong></p>";
$fileTooLarge = "<p><strong>Sorry you can only upload file smaller than 1Mo!</strong></p>";
$resultMessage = $errors = "";

//check if user submit form
if(isset($_POST['submit'])){
    //check for errors
    if(!$lastname){
        $errors .= $missingLastName;
    }else{
        $lastname = filter_var($lastname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $firstname = filter_var($firstname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    }
    if(!$subject){
        $errors .= $missingSubject;
    }else{
        $subject = filter_var($subject, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    }
    if(!($email)){
        $errors .= $missingEmail;
    }else{
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        if(!filter_var($email,FILTER_SANITIZE_EMAIL)){
            //if email is not valid
            $errors .= $invalidEmail;
        }
    }
    if(!$message){
        $errors .= $missingMessage;
    }else{
        $message = filter_var($message, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    }
    //check for file errors
    if($_FILES['file']['error'] == 0){
        //var_dump($_FILES['file']);
        $allowedFormats = array("pdf","doc","docx","odt","jpg","png","jpeg");
        if(!in_array($fileType,$allowedFormats)){
            $errors .=$wrongFormat;
            $uploadedStatus = 0;
            
        }
        if($fileSize > 1*1024*1024){
            //convert Mb to bytes
            $errors .=$fileTooLarge;
        }
    }
    //display errors or proceed
    if($errors){
        $resultMessage = "<div class='alert alert-danger'>" . $errors . "</div>";
        // echo $resultMessage;
    }else{
         
        //if no error
        $uploadedStatus = 1;
            if($_FILES['file']['error'] == 0){
                if(move_uploaded_file($tmp_name,$permanentDestination)){
                $resultmessage = "<p class='alert alert-success'>File uploaded successfully</p>";
                // echo $resultMessage;
                $uploadedFile = $permanentDestination;
                //var_dump($uploadedFile);
                }else{
                    $resultmessage = "<p class='alert alert-warning'>Unable to upload file. Please try again later!</p>";
                    // echo $resultMessage;
                    $uploadedStatus = 0;
                    //var_dump('PASS HERE 106');
                }
            }
    }
    // var_dump($uploadedStatus);
    //Before sending Mail
    if($uploadedStatus == 1){
        $mail = "";
        //Recipient
        $toEmail = 'joankouloumba@yahoo.fr';
        //Sender
        $from = 'joankouloumba90@gmail.com';
        //$from = 'joan-kouloumba@joan-kouloumba.in';
        $reply_to_email = 'joan-kouloumba@joan-kouloumba.in';
        $fromName = $lastname . " " . $firstname;
        //Message content
        $htmlContent = '<h2>Contact from Professional Site</h2>
        <p><b>Last Name:</b> ' . $lastname . '</p>
        <p><b>First Name:</b> ' . $firstname . '</p>
        <p><b>Email:</b> ' . $email . '</p>
        <p><b>Subject:</b> ' . $subject . '</p>
        <p><b>Message:</b> ' . $message . '</p>';
        //Header for sender info
        $headers = "From: $fromName" . " <" . $from . ">";
        if(!empty($uploadedFile) && file_exists($uploadedFile)){
            //var_dump('PASS HERE 130');
            //read from the uploaded file & base64_encode content
            $handle = fopen($uploadedFile, "rb");  // set the file handle only for reading the file
            $content = fread($handle, $fileSize); // reading the file
            fclose($handle);                  // close upon completion
        
            $encoded_content = chunk_split(base64_encode($content));
        
            $boundary = md5("random"); // define boundary with a md5 hashed value
        
            //header
            $headers = "MIME-Version: 1.0\r\n"; // Defining the MIME version
            $headers .= "From:".$from."\r\n"; // Sender Email
            $headers .= "Reply-To: ".$reply_to_email."\r\n"; // Email address to reach back
            $headers .= "Content-Type: multipart/mixed;"; // Defining Content-Type
            $headers .= "boundary = $boundary\r\n"; //Defining the Boundary
                
            //plain text
            $body = "--$boundary\r\n";
            $body .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $body .= chunk_split(base64_encode($htmlContent));
                
            //attachment
            $body .= "--$boundary\r\n";
            $body .="Content-Type: $fileType; name=".$fileName."\r\n";
            $body .="Content-Disposition: attachment; filename=".$fileName."\r\n";
            $body .="Content-Transfer-Encoding: base64\r\n";
            $body .="X-Attachment-Id: ".rand(1000, 99999)."\r\n\r\n";
            $body .= $encoded_content; // Attaching the encoded file with email
            //Send email
            $mail = mail($toEmail,$subject,$body,$headers);
            
            //Delete attachment file from the server
            unlink($uploadedFile);
        }else{
            //Set content-type header for sending HTML email
            $headers .= "\r\n" . "MIME-Version: 1.0";
            $headers .= "\r\n" . "Content-type: text/html; charset=UTF-8";
            //Send mail
            $mail = mail($toEmail,$subject,$htmlContent,$headers);
        }
        //Check if Mail is sent
        //var_dump($mail);
        if($mail){
            $timestamp = time();
            $sendDate = date("F-d-Y h:i:s A",$timestamp);
            $resultMessage = "<div class='alert alert-success'>Thanks for your message sent on $sendDate. We will get back to you as soon as possible.</div>";
        }else{
            $resultMessage = "<div class='alert alert-warning'>Unable to send Email. Please try again later.</div>";
        }
    }
    echo $resultMessage;
}