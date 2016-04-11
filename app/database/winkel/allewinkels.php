<?php
//database settings
include 'connectie.php';
$result = mysqli_query($connect, "select id,title,title_url from shops");

$winkels = array();

while ($row = mysqli_fetch_array($result)) {
  $winkels[] = $row;
}
    print json_encode($winkels);
?>
