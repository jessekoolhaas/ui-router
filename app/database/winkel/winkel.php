
<?php
include 'app/connectie.php';
$a = $_GET;
$test = $a[user_id];
//database settings

$result = mysqli_query($connect, 'select * from shops where title_url ="'.$test.'"');

$winkelsuitleg = array();

while ($row = mysqli_fetch_array($result)) {
  $winkelsuitleg[] = $row;
}
    print json_encode($winkelsuitleg);
?>
