<?php

    if(isset($_POST['name'])) $name=$_POST['name'];

    else $name="(Sorry you have not entered anything)";
    echo <<<_END

        <html>
            <head>
            <title>Form test </title>

            </head>

            <body>
            <form action="formtest.php" method="post">
            <p>What is your name?</p>   
            <input type="text" name="name">
            <input type="submit">

            </form>

            </body>


        </html>
    _END;

?>