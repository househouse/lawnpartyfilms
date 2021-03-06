<?php function sanitize_output($buffer) {$search = array('/\>[^\S ]+/s','/[^\S ]+\</s','/(\s)+/s');$replace = array('>','<','\\1'); $buffer = preg_replace($search, $replace, $buffer); return $buffer; } ob_start("sanitize_output"); ?>
<!DOCTYPE html>
<!--[if IE 7]> <html lang="en-ca" class="lt-ie9 lt-ie8"/><![endif]-->
<!--[if IE 8]> <html lang="en-ca" class="lt-ie9"/><![endif]-->
<!--[if gt IE 8]><!--><html lang="en-ca" class="no-js"/><!--<![endif]-->

<head>
    <!-- General -->
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="MobileOptimized" content="320"/>
    <meta name="HandheldFriendly" content="True"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <!-- SEO -->
    <title><?php if($page->metatitle()->isNotEmpty()): ?><?php echo $page->metatitle()->html() ?> | Devon Mussett ▸ Director & Cinematographer<?php else: ?><?php echo $page->title()->html() ?> | Devon Mussett ▸ Director & Cinematographer<?php endif ?></title>
    <meta name="description" content="<?php echo $page->metadesc()->html() ?>"/>
    <meta name="keywords" content="<?php echo $site->keywords()->html() ?>"/>
    <meta name="author" content="<?php echo $site->title()->html() ?>"/>

    <!-- Schema.org for Google -->
    <meta itemprop="name" content="<?php echo $page->metatitle()->html() ?>"/>
    <meta itemprop="description" content="<?php echo $page->metadesc()->html() ?>"/>

    <!-- Twitter -->
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="<?php echo $page->metatitle()->html() ?>"/>
    <meta name="twitter:description" content="<?php echo $page->metadesc()->html() ?>"/>
    <meta name="twitter:site" content="devonmussett"/>
    <meta name="twitter:creator" content="devonmussett"/>

    <!-- Open Graph (Facebook, Pinterest, LinkedIn, Google+ etc) -->
    <meta name="og:title" content="<?php echo $page->metatitle()->html() ?>"/>
    <meta name="og:description" content="<?php echo $page->metadesc()->html() ?>"/>
    <meta name="og:url" content="<?php echo $page->url() ?>"/>
    <meta name="og:locale" content="en_CA"/>
    <meta name="og:type" content="website"/>

    <!--[if IEMobile]><meta http-equiv="cleartype" content="on"/><![endif]-->

    <!-- Icons & Mobile Optimizations -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="Devon Mussett" />
    <link rel="apple-touch-icon" href="<?php echo url('assets/icons/touch-icon.png') ?>" />
    <link rel="icon" href="<?php echo url('assets/icons/touch-icon.png') ?>" />
    <link rel="icon" href="<?php echo url('assets/icons/favicon-16.png') ?>" sizes="16x16" />
    <meta name="msapplication-TileColor" content="#000" />
    <meta name="msapplication-TileImage" content="<?php echo url('assets/icons/touch-icon.png') ?>" />

    <!-- Styles & Interaction -->
    <script><?php readfile('assets/js/jquery.js'); ?></script>
    <script><?php readfile('assets/js/jquery.lazy.js'); ?></script>

    <?php snippet('scss') ?>
</head>

<body class="t-<?php echo $page->template() ?>"/>

<!-- OPEN MAIN :: closed in footer.php -->
<main>

    <div class="js-replace-content u-clip"/>

        <?php snippet('GlobalNav') ?>
