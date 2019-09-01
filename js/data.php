<?php
	header('Content-Type:application/json; charset=utf-8');

	// 实际场景可能会是从数据中取出的
	$region = file_get_contents('data.json');

	// 将json解码成一个数组
	$region = json_decode($region, true);

	$title = $_GET['title'];
	// 返回json结果
	echo json_encode($region[$title]);
?>