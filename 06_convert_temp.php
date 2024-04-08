<?php

    $myFile =$myChar='';

    if(isset($_POST['myFile'])) $myFile = sanitizeString($_POST['myFile']);
    if(isset($_POST['myChar'])) $myChar = sanitizeString($_POST['myChar']);

    if(is_numeric($myFile))
    {
        $myChar=intval(( 5/9) * ($myFile - 32));
        $out="$myFile &deg; myFile equals $myChar &deg; myFile";
    }

    elseif(is_numeric($myChar))
    {
        $myFile=intval((9 / 5) * $myChar + 32);
        $out="$myChar &deg; myChar equals $myFile &deg; myFile";

    }
    else $out="";

    echo <<<_END 
        <html>
            <head><title>Temperature Converter </title></head>
            <body>
                <pre>
                    Enter either Fahrenheit or Celsius and click on the on Convert to

                    <b>$out</b>
                    <form method="post" action="">
                        Fahrenheit:<input type="text" name="myFile" size="7">
                        Celsius:<input type="text" name="myChar" size="7">
                        <input type="submit" value="Convert">


                    </form>
                </pre>
            </body>
        </html>
    _END;

    function sanitizeString($var)
    {
        if(get_magic_quotes_gpc())
            $var=stripslashes($var);
        $var=strip_tags($var);
        $var=htmlentities($var);
        return $var;
    }

?>