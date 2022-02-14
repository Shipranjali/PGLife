<?php
 


   $host = "localhost";
   $username  = "sweety";
   $passwd = "Sweety24";
   $dbname = "pg_life";


   //Creating a connection
   $con = mysqli_connect($host, $username, $passwd, $dbname);


   if($con){
 


      print("Connection Established Successfully");
   }else{
      print("Connection Failed ");
   }
?>