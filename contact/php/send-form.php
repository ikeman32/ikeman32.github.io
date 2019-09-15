<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if(isset($_POST['email'])) {
  //echo "yes";
 
  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "david.isakson.ii@gmail.com";
  $email_subject = "Your email subject line";
 
  function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
  }
 
 
  // validation expected data exists
  if(!isset($_POST['fname']) || !isset($_POST['lname']) || !isset($_POST['email']) || !isset($_POST['message'])) {
    
    died('We are sorry, but there appears to be a problem with the form you submitted.');       
  }
 
     
 
  $fname = $_POST['fname']; // required
  $lname = $_POST['lname']; // required
  $email_from = $_POST['email']; // required
  $comments = $_POST['message']; // required
 
  $error_message = "";
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
  $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$fname)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$lname)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
  $email_message = "Form details below.\n\n";
 
     
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
 
     
 
  $email_message .= "First Name: ".clean_string($fname)."\n";
  $email_message .= "Last Name: ".clean_string($lname)."\n";
  $email_message .= "Email: ".clean_string($email_from)."\n";
  $email_message .= "Message: ".clean_string($comments)."\n";
 
  // create email headers
  $headers = 'MIME-Version: 1.0' . "\r\n";
  $headers .= "From: ".$email_from."\r\n";
  $headers .= $email_to."\r\n";
  $headers .= "Reply-To: ".$email_from."\r\n";
  $headers .= "X-Mailer: PHP/".phpversion()."\r\n";

  if (mail($email_to, $email_subject, $email_message, $headers)){
    echo "Message accepted";
  }
  else {
    echo "Error: Message not accepted";
  }
  //echo $headers;
}