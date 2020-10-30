<html>
<head>
<title>Confirmation Page of Web Form</title>
</head>
<h1>Confirmation Page of Customer Info</h1>

<p>Thank you for submitting this form. 

<p>We have not received it, as the form isn't working right now.

<p>Below is a summary of the information you provided.<br><br>  
<?php
echo 'First Name: ' . $_POST ["name"] . '<br>';
echo 'Email: ' . $_POST ["email"] . '<br>';
?>
