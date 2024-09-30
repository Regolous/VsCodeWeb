<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
  <div class="wrapper">
    <section>
      <div class="image-container"></div>
      <div class="form-box">
        <div class="form-value">
          <form action="">
            <h2>Login</h2>
            <div class="inputbox">
              <input type="email" required name = "Login">
              <label for="">Email</label>

            </div>
            <div class="inputbox">
              <input type="password" required name = "Password">
              <label for="">Password</label>
            </div>
            <button>Log in</button>
          </form>
        </div>
      </div>
    </section>
  </div>
  <?php

  $db_server = "localhost:3306";
  $db_user = "root";
  $db_pass = "";
  $db_name = "projectdb";
  
  $conn = "";
  
  $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);
  
  if ($conn) {
      echo"you're connected";
  }
  
      $login = htmlspecialchars($_POST['Login']);
      $Password = htmlspecialchars($_POST['Password']);

  $sql = "INSERT INTO userdata(Login,Password) VALUES ('$login', '$Password')";
  if(mysqli_query($conn, $sql)) echo "everything works correctly";
  ?>
</body>
</html>