<?php

if ($_SERVER["REQUEST_METHOD"] == "post") {
    $email = $_POST['email'];
    echo "<p>Привет, $email!</p>";
}