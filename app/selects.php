<?php
//database settings
$connect = mysqli_connect("127.0.0.1", "root", "", "company");

$result = mysqli_query($connect, "select * from shops");

$winkels = array();

while ($row = mysqli_fetch_array($result)) {
  $winkels[] = $row;
}
    print json_encode($winkels);
?>
