<?php
//database settings
include 'connectie.php';

$result2 = mysqli_query($connect, "select id,title,title_url from charities");

$charities = array();

while ($row2 = mysqli_fetch_array($result2)) {
  $charities[] = $row2;
}
    print json_encode($charities);
?>
