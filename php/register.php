<?php

$conn = new PDO('mysql:host=localhost;dbname=client_side;charset=utf8', 'root', 'root', [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

$name = $_POST['name'] ?? null;
$time = $_POST['time'] ?? null;
$score = $_POST['score'] ?? null;

if (empty($name)) {
    echo json_encode(['error' => 'Name field cannot be blank.']);
    return false;
}

if (empty($time) && $time != '0') {
    echo json_encode(['error' => 'Time field cannot be blank.']);
    return false;
}

if (empty($score) && $score != '0') {
    echo json_encode(['error' => 'Score field cannot be blank.']);
    return false;
}

if (!ctype_digit($time)) {
    echo json_encode(['error' => 'Time field must be an integer.']);
    return false;
}


if (!is_numeric($score)) {
    echo json_encode(['error' => 'Score field must be an integer.']);
    return false;
}

$stmtInsert = $conn->prepare('INSERT INTO ranking (name, time, score) VALUES (?, ?, ?)');
$stmtInsert->execute([$name, $time, $score]);

$stmtSelect = $conn->query('SELECT * FROM ranking ORDER BY score DESC,time ASC limit 0,10');
$ranking = $stmtSelect->fetchAll();
$sortranking=[];
$history=[];
$i=0;
foreach($ranking as $rank){
    $temp=[$rank->time,$rank->score];
    if(!in_array($temp,$history)){
        $i++;
        $history[]=$temp;
    }
    $temp['id']=$rank->id;
    $temp['time']=$rank->time;
    $temp['name']=$rank->name;
    $temp['score']=$rank->score;
    $temp['sort']=$i;
    $sortranking[]=$temp;
}
echo json_encode($sortranking);
//echo json_encode($ranking);