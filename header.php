<?php
/**
 * Шаблон шапки (header.php)
 * @package WordPress
 * @subpackage your-clean-template-3
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); // вывод атрибутов языка ?>>
<head>
    <title>Mangoo Kicksharing</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <? wp_head(); ?>
    <!--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">-->
    <!--    <link rel="stylesheet" href="css/style.css">-->
    <!--    <link rel="stylesheet" href="css/animate.css">-->

    <link rel="shortcut icon" href="<?= get_template_directory_uri() ?>/assets/img/favicon.ico" type="image/x-icon">
</head>
<body <?php body_class();?>>