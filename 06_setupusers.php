<?php 
    require_once='login.php';
    $connection=new mysqli($hn, $un, $pw, $db);

    if($connection ->connect_error) die('Fatal error!')
    $query="CREATE TABLE Users (
        forename VARCHAR(32) NOT NULL,
        surname VARCHAR(32) NOT NULL,
        username VARCHAR(32) NOT NULL UNIQUE,
        password VARCHAR(32) NOT NULL

    )";

    $result=$connection->query($query);
    if(!$result) die('Fatal Error');    
    $forename='Bill';
    $surname='smith';
    $username='Bill';
    $password='mypassword';

    $hash=password_hash($password, PASSWORD_DEFAULT);

    add_user($connection, $forename, $surname, $hash);
    $forename='Pauline';
    $surname='John';
    $username='pjohn';
    $password='acrobat';

    $hash=password_hash($password, PASSWORD_DEFAULT);


    add_user($connection, $forename, $surname, $username, $hash);
    function add_user($connection, $fn, $sn, $un)
    {
        $stmt=$connection->prepare("INSERT INTO Users VALUES(?, ?, ?, ?)");

        $stmt->bind_param('ssss', $fn, $sn, $un, $pw);
        $stmt->execute();
        $stmt->close();

    }

    
    ?>