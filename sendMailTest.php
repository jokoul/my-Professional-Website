<?php
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
$missingSubject = '<p>Please enter a subject</p>';
//error message for file
$wrongFormat = "<p><strong>Sorry this file format is not accepted!</strong></p>";
$fileTooLarge = "<p><strong>Sorry you can only upload file smaller than 3Mo!</strong></p>";
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
   var_dump($_FILES['file']);
        $allowedFormats = array("pdf","doc","docx","jpg","png","jpeg");
        if(!in_array($fileType,$allowedFormats)){
            $errors .=$wrongFormat;
            $uploadedStatus = 0;
            
        }
        if($fileSize > 4*1024*1024){
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
                var_dump($uploadedFile);
                }else{
                    $resultmessage = "<p class='alert alert-warning'>Unable to upload file. Please try again later!</p>";
                    // echo $resultMessage;
                    $uploadedStatus = 0;
                    var_dump('PASS HERE 106');
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
            var_dump('PASS HERE 130');
            //Boundary
            $semi_rand = md5(time());//with md5 function, we hash a timestamp returned by time() function.
            $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
            //Headers for attachement
            $headers .= "\nMime-Version: 1.0\n" .  "Content-Type: multipart/mixed;\n" . "boundary=\"{$mime_boundary}\"";
            //Multipart boundary
            $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n";
            //Preparing attachment
            if(is_file($uploadedFile)){
                var_dump('PASS HERE 140');
                $message .= "--{$mime_boundary}\n";
                $fp = fopen($uploadedFile,"rb");//open the file
                $data = fread($fp,filesize($uploadedFile));//read the file
                fclose($fp);//close the file
                $data = chunk_split(base64_encode($data));
                $message .= "Content-Type: application/octet-stream; name=\"" . basename($uploadedFile) . "\"\n" .
                 "Content-Description: " . basename($uploadedFile) . "\n" . 
                 "Content-Disposition: attachment;\n" . "filename=\"" . basename($uploadedFile) . "\"; size=" . filesize($uploadedFile) . ";\n" . 
                 "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
            }

            $message .= "--{$mime_boundary}\n";
            $returnpath = "-f" . $email;
            //Send email
            $mail = mail($toEmail,$subject,$message,$headers,$returnpath);
            
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
        var_dump($mail);
        if($mail){
            $resultMessage = "<div class='alert alert-success'>Thanks for your message. We will get back to you as soon as possible.</div>";
        }else{
            $resultMessage = "<div class='alert alert-warning'>Unable to send Email. Please try again later.</div>";
        }
    }
    echo $resultMessage;
}



<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";

//we need to create an instance of PHPMailer
$mail = new PHPMailer();
//set where we are sending email
$mail->addAddress(address:'joankouloumba@yahoo.fr', name:'Senaid Bacinovic');
//set who is sending an email
$mail->setFrom(address:'joankouloumba90@gmail.com', name:'Admin joan localhost wamp');
//set subject
$mail->Subject = "Test email!";
//type of email
$mail->isHTML(isHtml:true);
//write email
//$mail->Body = "this is our email body";
$mail->Body = "<p>this is our email body</p><br><br><a href='https://joan-kouloumba.in'>go to professional</a>";
//include attachment
$mail->addAttachment(path:'img/moi.jpg',name:'ma photo');
//send an email
if(!$mail->send()){
    echo "something wrong Happen";
}else{
    echo "mail sent successfully!";
}
?>