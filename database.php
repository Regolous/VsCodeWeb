<?php

$db_server = "localhost:3306";
$db_user = "root";
$db_pass = "";
$db_name = "projectDB";

$conn = "";

$conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

if ($conn) {
    echo"you're connected";
}