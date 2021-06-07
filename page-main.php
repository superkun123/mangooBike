<?
/**
* Главная страница (page-main.php)
* @package WordPress
* @subpackage your-clean-template-3
* Template Name: Главная
*/
?>
<? $dir = get_template_directory_uri(); ?>

<? get_header(); ?>

<? $data = get_fields(); ?>

<script>
    const images = [
        <? foreach ($data['i_anim'] as $item): ?>
            "<?=$item['item']?>",
        <? endforeach; ?>
    ];
</script>


<script src="<?=$dir?>/js/script — 02work(test2).js"></script>

<header class="main-header">
    <div class="main-header-mask"></div>
    <div class="row main-header__menu-row justify-content-between static-menu">
        <div class="col main-header__logo-container">
            <a href="/" class="logo white-logo">
                <img class="logo-img" src="<?=$dir?>/assets/img/logo.svg">
            </a>
            <a href="#" class="logo-mobile">
                <img src="<?=$dir?>/assets/img/logo-mobile.svg" alt="логотип">
            </a>
        </div>
        <div class="col main-nav">
            <a href="<?=$data['m_href_android'] ?>" class="download-btn">
                Скачать на Android
            </a>
            <a href="<?=$data['m_href_ios'] ?>" class="download-btn download-IOS">Скачать на IOS</a>
            <div class="language-switcher">
                <a href="#" class="language-switcher-btn">RU/</a><a href="/en/" class="language-switcher-btn-active">EN</a>
            </div>
            <a href="#" class="menu-hamburger">
                <div class="hamburger-round">
                    <div class="hamburger hamburger--squeeze">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class="container-fluid">




        <div class="row main-header__title-row justify-content-center">
            <div class="col-md-12 wow slideInRightBig">
                <h1 class="main-header__title"><?=$data['m_title'] ?></h1>
            </div>
        </div>
        <div class="row moblie-download">
            <p>Скачать приложение:</p>
            <a href="<?=$data['m_href_android'] ?>"><svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1V5.82812L7.12147 4.70665C7.512 4.31613 8.14516 4.31613 8.53568 4.70665C8.92621 5.09718 8.92621 5.73034 8.53568 6.12087L5.70726 8.94929C5.31673 9.33982 4.68357 9.33982 4.29304 8.94929L4.29289 8.94914L1.46447 6.12072C1.07394 5.73019 1.07394 5.09703 1.46447 4.7065C1.85499 4.31598 2.48816 4.31598 2.87868 4.7065L4 5.82782V1ZM10 12C10 11.4477 9.55228 11 9 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H9C9.55228 13 10 12.5523 10 12Z" fill="#00DA02"/>
                </svg>
                Android</a>
            <a href="<?=$data['m_href_ios'] ?>"><svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1V5.82812L7.12147 4.70665C7.512 4.31613 8.14516 4.31613 8.53568 4.70665C8.92621 5.09718 8.92621 5.73034 8.53568 6.12087L5.70726 8.94929C5.31673 9.33982 4.68357 9.33982 4.29304 8.94929L4.29289 8.94914L1.46447 6.12072C1.07394 5.73019 1.07394 5.09703 1.46447 4.7065C1.85499 4.31598 2.48816 4.31598 2.87868 4.7065L4 5.82782V1ZM10 12C10 11.4477 9.55228 11 9 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H9C9.55228 13 10 12.5523 10 12Z" fill="#00DA02"/>
                </svg>
                IOS</a>
        </div>
        <div class="go">
            <p>Погнали</p>
        </div>
    </div>
    <div class="main-menu">
        <div class="container-fluid">
            <div class="row menu-on-green-row">
                <div class="col main-nav">
                    <div class="col moblie-download">
                        <p>Скачать приложение:</p>
                        <a href="<?=$data['m_href_android'] ?>"><svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1V5.82812L7.12147 4.70665C7.512 4.31613 8.14516 4.31613 8.53568 4.70665C8.92621 5.09718 8.92621 5.73034 8.53568 6.12087L5.70726 8.94929C5.31673 9.33982 4.68357 9.33982 4.29304 8.94929L4.29289 8.94914L1.46447 6.12072C1.07394 5.73019 1.07394 5.09703 1.46447 4.7065C1.85499 4.31598 2.48816 4.31598 2.87868 4.7065L4 5.82782V1ZM10 12C10 11.4477 9.55228 11 9 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H9C9.55228 13 10 12.5523 10 12Z" fill="#00DA02"></path>
                            </svg>
                            Android</a>
                        <a href="<?=$data['m_href_android'] ?>"><svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1V5.82812L7.12147 4.70665C7.512 4.31613 8.14516 4.31613 8.53568 4.70665C8.92621 5.09718 8.92621 5.73034 8.53568 6.12087L5.70726 8.94929C5.31673 9.33982 4.68357 9.33982 4.29304 8.94929L4.29289 8.94914L1.46447 6.12072C1.07394 5.73019 1.07394 5.09703 1.46447 4.7065C1.85499 4.31598 2.48816 4.31598 2.87868 4.7065L4 5.82782V1ZM10 12C10 11.4477 9.55228 11 9 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H9C9.55228 13 10 12.5523 10 12Z" fill="#00DA02"></path>
                            </svg>
                            IOS</a>
                    </div>
                    <a href="<?=$data['m_href_android'] ?>" class="download-btn">
                        Скачать на Android
                    </a>
                    <a href="<?=$data['m_href_android'] ?>" class="download-btn">Скачать на IOS</a>
                    <div class="language-switcher">
                        <a href="#" class="language-switcher-btn">RU/</a><a href="/en/" class="language-switcher-btn-active">EN</a>
                    </div>
                    <a href="#" class="menu-hamburger menu-hamburger-close">
                        <div class="hamburger-round">
                            <span class="hamburger-line"></span>
                            <!-- <span class="hamburger-line"></span> -->
                            <span class="hamburger-line"></span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="container main-menu__content">
                <div class="row justify-content-between">
                    <div class="col">
                        <ul class="main-menu__ul">
                            <li><a class="main-menu__li" href="#how-it-works">Как это работает</a></li>
                            <li class="rules-li"><a class="rules-link " href="#rules">Правила</a></li>
                            <li><a class="main-menu__li" href="#price">Тарифы </a></li>
                            <li><a class="main-menu__li" href="#features">Преимущества</a></li>
                            <li><a class="main-menu__li" href="#FAQ">Помощь </a></li>
                        </ul>
                    </div>
                    <div class="col-md main-header__contacts">
                        <a href="#" class="mail"><?=$data['m_email'] ?></a>
                        <a href="#" class="phone"><?=$data['m_phone'] ?></a>
                        <p class="adress"><?=$data['m_address'] ?></p>
                        <div class="author">
                            <p>Создание сайта <a href="https://lepinskih.com/">Lepinskih </a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<main>

    <section class="how-it-works" id="how-it-works">
        <!-- <div class="arrow-left arrow-left-mobile">
          <a href="">
          <img src="<?=$dir;?>/assets/img/chevron.svg" alt="">
        </a>
      </div> -->
        <div class="container-fluid how-it-works-container">
            <!-- <div class="arrow-left">
              <a href="">
              <img src="<?=$dir;?>/assets/img/chevron.svg" alt="">
            </a>
          </div> -->
            <div class="scooter-scale" id="scooter-scale">
                <img class="scooter-scale-img" src="<?=$dir;?>/assets/img/scooter-scale.png"  alt="электросамокат">
                <div class="img-array"> <!--        предзагрузка изображений            -->
                    <? foreach ($data['i_anim'] as $item): ?>
                        <img src="<?=$item['item']?>" alt="">
                    <? endforeach;?>
                </div>
            </div>
            <div class="how-it-works__slider container">
                <div class="arrow-left">
                    <a href="">
                        <img src="<?=$dir;?>/assets/img/chevron.svg" alt="">
                    </a>
                </div>
                <div class="col how-it-works__text">
                    <ol>
                        <? if (count($data['phone_list']) > 0): $count = 0; foreach ($data['phone_list'] as $item) :?>
                        <li class="how-it-works__text__item-<?=$count+1;?> text-item" data-wow-delay="1<?=$count;?>s"><span class="green <?=$count==0?'green-text':'';?>"><?=$item['item'] ?></span></li>
                        <? $count++; endforeach; endif; ?>
<!--                        <li class="how-it-works__text__item-2 text-item" data-wow-delay="1.1s"><span class="green">Сканируй QR-код, чтобы разблокировать электросамокат</span></li>-->
<!--                        <li class="how-it-works__text__item-3 text-item" data-wow-delay="1.2s"><span class="green">Припаркуй самокат и заверши поездку на одной из сотен парковок</span></li>-->
                    </ol>
                </div>
                <div class="col how-it-works__phone">
                    <div class="how-it-works__phone-container">
                        <img class="how-it-works__phone-img" src="<?=$dir;?>/assets/img/iphoneX.png" alt="">
                        <video autoplay="autoplay" muted="muted" loop="loop" playsinline  class="video-back" width="510" height="540">
                            <source src="<?=$dir;?>/assets/video-phone-1.mp4">
                        </video>
                        <img class="bg-tel" src="<?=$data['i_sky']?>" alt="">
                        <video  muted="muted" loop="loop" playsinline  class="video-back video-back-2" width="510" height="540">
                            <source src="<?=$dir;?>/assets/video-phone-2.mp4">
                        </video>
                        <video  muted="muted" loop="loop" playsinline  class="video-back video-back-3" width="510" height="540">
                            <source src="<?=$dir;?>/assets/video-phone-3.mp4">
                        </video>
                    </div>
                </div>
                <div class="col how-it-works__text text-mobile">
                    <ul>
                        <? if (count($data['phone_list']) > 0): $count = 0; foreach ($data['phone_list'] as $item) :?>
                        <li class="how-it-works__text__item-<?=$count+1?> text-item-mobile text-item-mobile-<?=$count+1?>" data-wow-delay="1.<?=$count?>s"><?=$count!=0?'<span class="green">':''?><?=$count+1;?>. <?=$item['item'];?><?=$count!=0?'</span>':''?></li>
                        <? $count++; endforeach; endif; ?>
<!--                        <li class="how-it-works__text__item-2 text-item-mobile text-item-mobile-2" data-wow-delay="1.1s"><span class="green">2. Сканируй QR-код, чтобы разблокировать электросамокат</span></li>-->
<!--                        <li class="how-it-works__text__item-3 text-item-mobile text-item-mobile-3" data-wow-delay="1.2s"><span class="green">3. Припаркуй самокат и заверши поездку на одной из сотен парковок</span></li>-->
                    </ul>
                </div>
                <div class="arrow-right">
                    <a href="">
                        <img src="<?=$dir;?>/assets/img/chevron.svg" alt="">
                    </a>
                </div>
            </div>
        </div>





        <!-- <div class="arrow-right arrow-right-mobile">
          <a href="">
          <img src="<?=$dir;?>/assets/img/chevron.svg" alt="">
        </a>
      </div> -->

    </section>


    <section class="rules" id="rules" style="background-image: url(<?=$data['i_sky_bg']?>)">
        <div class="rules-mask"></div>
        <div class="container">
            <div class="row rules__title-row">
                <div class="col">
                    <h2 class="rules__main-title wow slideInRight" data-wow-duration="2s" data-wow-offset="0"><?=$data['p_title'];?></h2>
                </div>
            </div>
            <div class="row rules__description">

                <? if (count($data['p_rules_list']) > 0): $count = 1; foreach ($data['p_rules_list'] as $item) :?>
                <div class="col-md rules__text wow slideInRight" data-wow-delay="1.5s" data-wow-duration="2s" data-wow-offset="<?=$count<=3==0?'370':'120' ?>">
                    <h3 class="rules__subtitle"><?=$item['rule']['rule_title'] ?></h3>
                    <p class="rules__paragraph"><?=$item['rule']['rule_text'] ?></p>
                </div>
                <? if ($count % 3 == 0): ?>
                    </div>
                    <div class="row rules__description">
                <? endif; ?>
                <? $count++; endforeach; endif; ?>
<!--                <div class="col-md  rules__text wow slideInRight" data-wow-delay="1.5s" data-wow-duration="2s" data-wow-offset="370">-->
<!--                    <h3 class="rules__subtitle">Только для 1 человека</h3>-->
<!--                    <p class="rules__paragraph">Запрещено кататься более 1 человеку на 1 самокате или передавать самокат другому без начала новой аренды </p>-->
<!--                </div>-->
<!--                <div class="col-md  rules__text wow slideInRight" data-wow-delay="1.5s" data-wow-duration="2s" data-wow-offset="370">-->
<!--                    <h3 class="rules__subtitle">Не парковать у водостоков</h3>-->
<!--                    <p class="rules__paragraph">Категорически нельзя парковаться самокат у водосточных труб или внутри дворов, а также на проезжей части</p>-->
<!--                </div>-->
            </div>
<!--            <div class="row rules__description">-->
<!--                <div class="col-md  rules__text wow slideInRight" data-wow-delay="1.5s" data-wow-duration="2s" data-wow-offset="120">-->
<!--                    <h3 class="rules__subtitle">Пристегивать замок</h3>-->
<!--                    <p class="rules__paragraph">Обязательно оберни трос самоката вокруг замкнутой металлической конструкции и вставь замок в шток до упора</p>-->
<!--                </div>-->
<!--                <div class="col-md  rules__text wow slideInRight" data-wow-delay="1.5s" data-wow-duration="2s" data-wow-offset="120">-->
<!--                    <h3 class="rules__subtitle">Заряженный телефон </h3>-->
<!--                    <p class="rules__paragraph">Убедись, что заряда твоего телефона хватит на всю поездку, а иначе завершить аренду самоката не удастся</p>-->
<!--                </div>-->
<!--                <div class="col-md  rules__text wow slideInRight" data-wow-delay="1.5s" data-wow-duration="2s" data-wow-offset="120">-->
<!--                    <h3 class="rules__subtitle">Ставить на подножку</h3>-->
<!--                    <p class="rules__paragraph">Завершая аренду, разверни самокат левой стороной к металлической конструкции, поставь подножку и закрепи замок </p>-->
<!--                </div>-->
<!--            </div>-->
            <div class="row  rules__description__tablet">
                <div class="col rules__description__tablet__left-col">
                    <? if (count($data['p_rules_list']) > 0): $count = 1; foreach ($data['p_rules_list'] as $item) :?>
                    <div class="rules__text wow slideInRight" data-wow-duration="2s">
                        <h3 class="rules__subtitle"><?=$item['rule']['rule_title'] ?></h3>
                        <p class="rules__paragraph"><?=$item['rule']['rule_text'] ?></p>
                    </div>
                    <? if ($count % 3 == 0): ?>
                        </div>
                        <div class="col rules__description__tablet__right-col">
                    <? endif; ?>
                    <? $count++; endforeach; endif; ?>
<!--                    <div class="rules__text wow slideInRight" data-wow-duration="2s">-->
<!--                        <h3 class="rules__subtitle">Не парковать у водостоков</h3>-->
<!--                        <p class="rules__paragraph">Категорически нельзя парковаться самокат у водосточных труб или внутри дворов, а также на проезжей части</p>-->
<!--                    </div>-->
<!--                    <div class="rules__text wow slideInRight" data-wow-duration="2s">-->
<!--                        <h3 class="rules__subtitle">Заряженный телефон </h3>-->
<!--                        <p class="rules__paragraph">Убедись, что заряда твоего телефона хватит на всю поездку, а иначе завершить аренду самоката не удастся</p>-->
<!--                    </div>-->

                </div>

<!--                <div class="col rules__description__tablet__right-col">-->
<!--                    <div class="col-md  rules__text wow slideInRight" data-wow-duration="2s">-->
<!--                        <h3 class="rules__subtitle">Только для 1 человека</h3>-->
<!--                        <p class="rules__paragraph">Запрещено кататься более 1 человеку на 1 самокате или передавать самокат другому без начала новой аренды </p>-->
<!--                    </div>-->
<!--                    <div class="col-md  rules__text wow slideInRight" data-wow-duration="2s">-->
<!--                        <h3 class="rules__subtitle">Пристегивать замок</h3>-->
<!--                        <p class="rules__paragraph">Обязательно оберни трос самоката вокруг замкнутой металлической конструкции и вставь замок в шток до упора</p>-->
<!--                    </div>-->
<!--                    <div class="col-md  rules__text wow slideInRight" data-wow-duration="2s">-->
<!--                        <h3 class="rules__subtitle">Ставить на подножку</h3>-->
<!--                        <p class="rules__paragraph">Завершая аренду, разверни самокат левой стороной к металлической конструкции, поставь подножку и закрепи замок </p>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
            <div class="row rules__description rules__mobile">
                <div class="row">
                    <div class="col accord__container">
                        <div id="accordion" class="accord__list">
                            <? $rulesIds = ['collapseOneRules', 'collapseTwoRules','collapseThreeRules','collapseFourRules','collapseFifeRules','collapseSixRules'] ?>

                            <? if (count($data['p_rules_list']) > 0): $count = 1; foreach ($data['p_rules_list'] as $item) :?>
                            <div class="card accord__list" data-toggle="collapse" data-target="#collapse_<?=$count;?>" aria-expanded="true" aria-controls="collapse_<?=$count;?>_Rules">
                                <span class="accord__list-separator"></span>
                                <div class="card-header" id="heading_<?=$count;?>">
                                    <p class="mb-0 card-title">
                                        <?=$item['rule']['rule_title']; ?>
                                    </p>
                                    <button class="btn btn-link accord-btn" data-toggle="collapse" data-target="#collapse_<?=$count;?>" aria-expanded="true" aria-controls="collapse_<?=$count;?>"><svg class="" width="10" height="16" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>
                                            <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>
                                        </svg></button>
                                    </h5>
                                </div>


                                <div id="collapse_<?=$count;?>" class="collapse" aria-labelledby="heading_<?=$count;?>" data-parent="#accordion">
                                    <div class="card-body">
                                        <?=$item['rule']['rule_text'] ?>
                                    </div>
                                </div>
                                <span class="accord__list-separator accord__list-separator-bottom"></span>
                            </div>
                            <? $count++; endforeach; endif; ?>
<!---->
<!--                            <div class="card accord__list" data-toggle="collapse" data-target="#collapseTwoRules" aria-expanded="false" aria-controls="collapseTwoRules">-->
<!--                                <div class="card-header" id="headingTwo">-->
<!--                                    <p class="mb-0 card-title">2. Как арендовать самокат и открыть замок?</p>-->
<!--                                    <button class="btn btn-link collapsed accord-btn" data-toggle="collapse" data-target="#collapseTwoRules" aria-expanded="false" aria-controls="collapseTwoRules">-->
<!--                                        <svg class="" width="10" height="16" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                            <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>-->
<!--                                            <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>-->
<!--                                        </svg>-->
<!--                                    </button>-->
<!--                                </div>-->
<!--                                <div id="collapseTwoRules" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">-->
<!--                                    <div class="card-body">-->
<!--                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <span class="accord__list-separator accord__list-separator-bottom"></span>-->
<!--                            </div>-->
<!---->
<!--                            <div class="card accord__list"  data-toggle="collapse" data-target="#collapseThreeRules" aria-expanded="false" aria-controls="collapseThreeRules">-->
<!--                                <div class="card-header" id="headingThree">-->
<!--                                    <p class="mb-0 card-title">3. Что можно и что нельзя делать на самокате?</p>-->
<!--                                    <button class="btn btn-link collapsed accord-btn" data-toggle="collapse" data-target="#collapseThreeRules" aria-expanded="false" aria-controls="collapseThreeRules">-->
<!--                                        <svg class="" width="10" height="16" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                            <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>-->
<!--                                            <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>-->
<!--                                        </svg>-->
<!--                                    </button>-->
<!--                                </div>-->
<!--                                <div id="collapseThreeRules" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">-->
<!--                                    <div class="card-body">-->
<!--                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <span class="accord__list-separator accord__list-separator-bottom"></span>-->
<!--                            </div>-->
<!---->
<!--                            <div class="card accord__list" data-toggle="collapse" data-target="#collapseFourRules" aria-expanded="false" aria-controls="collapseFourRules">-->
<!--                                <div class="card-header" id="headingFour">-->
<!--                                    <p class="mb-0 card-title">4. Как завершить аренду и закрыть замок?</p>-->
<!--                                    <button class="btn btn-link collapsed accord-btn" data-toggle="collapse" data-target="#collapseFourRules" aria-expanded="false" aria-controls="collapseFourRules">-->
<!--                                        <svg class="" width="10" height="16" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                            <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>-->
<!--                                            <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>-->
<!--                                        </svg>-->
<!--                                    </button>-->
<!--                                </div>-->
<!--                                <div id="collapseFourRules" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">-->
<!--                                    <div class="card-body">-->
<!--                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <span class="accord__list-separator accord__list-separator-bottom"></span>-->
<!--                            </div>-->
<!---->
<!--                            <div class="card accord__list" data-toggle="collapse" data-target="#collapseFiveRules" aria-expanded="false" aria-controls="collapseFiveRules">-->
<!--                                <div class="card-header" id="headingFive">-->
<!--                                    <p class="mb-0 card-title">5. Как правильно парковаться?</p>-->
<!--                                    <button class="btn btn-link collapsed accord-btn" data-toggle="collapse" data-target="#collapseFiveRules" aria-expanded="false" aria-controls="collapseFiveRules">-->
<!--                                        <svg class="" width="10" height="16" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                            <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>-->
<!--                                            <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>-->
<!--                                        </svg>-->
<!--                                    </button>-->
<!--                                </div>-->
<!--                                <div id="collapseFiveRules" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">-->
<!--                                    <div class="card-body">-->
<!--                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <span class="accord__list-separator accord__list-separator-bottom"></span>-->
<!--                            </div>-->
<!---->
<!--                            <div class="card accord__list" data-toggle="collapse" data-target="#collapseSixRules" aria-expanded="false" aria-controls="collapseSixRules">-->
<!--                                <div class="card-header" id="headingFive">-->
<!--                                    <p class="mb-0 card-title">5. Как правильно парковаться?</p>-->
<!--                                    <button class="btn btn-link collapsed accord-btn" data-toggle="collapse" data-target="#collapseSixRules" aria-expanded="false" aria-controls="collapseSixRules">-->
<!--                                        <svg class="" width="10" height="16" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                            <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>-->
<!--                                            <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>-->
<!--                                        </svg>-->
<!--                                    </button>-->
<!--                                </div>-->
<!--                                <div id="collapseSixRules" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">-->
<!--                                    <div class="card-body">-->
<!--                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <span class="accord__list-separator accord__list-separator-bottom"></span>-->
<!--                            </div>-->

                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="row rules__bg-mobile">
              <img src="<?=$dir;?>/assets/img/rules-bg.jpg" alt="Питер фон">
            </div> -->
            <div class="row woman-move">
                <div class="woman-container">
                    <img class="woman-img" src="<?=$data['i_girl']?>" alt="Девушка на самокате">
                </div>
            </div>
        </div>
    </section>




    <section class="price" id="price">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-6 price__description  wow slideInRight price__description-desctop" data-wow-offset="500">
                    <h2 class="price__title"><?=$data['start']['s_title'] ?></h2>
                    <div class="price__img price__img-mobile">
                        <div class="price__img-moblie-container">
                            <img src="<?=$dir;?>/assets/img/red-round.svg" class="price__round wow zoomIn" alt="красный круг">
                            <img src="<?=$data['i_start']?>" class="price__scooter wow fadeIn" data-wow-delay="0.5s" alt="Электросамокаты">
                        </div>
                    </div>
                    <p class="price__description-text">
                        <?=$data['start']['s_text'] ?>
                    </p>
                    <div class="price__btn-container">
                        <a class="price__btn" href="#">Скачать на Android <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>
                                <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>
                            </svg>
                        </a>
                        <a class="price__btn" href="#">Скачать на Iphone <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>
                                <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6 price__description price__description-mobile" data-wow-offset="500">
                    <h2 class="price__title"><?=$data['start']['s_title'] ?></h2>
                    <div class="price__img price__img-mobile">
                        <div class="price__img-moblie-container">
                            <img src="<?=$dir;?>/assets/img/red-round.svg" class="price__round wow zoomIn" alt="красный круг">
                            <img src="<?=$data['i_start']?>" class="price__scooter wow fadeIn" data-wow-delay="0.5s" alt="Электросамокаты">
                        </div>
                    </div>
                    <p class="price__description-text">
                        <?=$data['start']['s_text'] ?>
                    </p>
                    <div class="price__btn-container">
                        <a class="price__btn" href="#">Скачать на Android <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>
                                <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>
                            </svg>
                        </a>
                        <a class="price__btn" href="#">Скачать на Iphone <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>
                                <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="price__img price__img-desctop">
                    <img src="<?=$dir;?>/assets/img/red-round.svg" class="price__round wow zoomIn" alt="красный круг">
                    <img src="<?=$data['i_start']?>" class="scooter wow fadeIn" data-wow-delay="0.5s" alt="Электросамокаты">
                </div>
            </div>
        </div>
    </section>


    <section class="features" id="features">
        <div class="container">
            <div class="row features__desc__row">
                <div class="col-md-12 svg-logo-mobile">
                    <div class="col-md-6 svg-logo__container">
                        <div class="svg-bg-cont">
                            <div class="orbit">
                                <svg class="sputnik" width="351" height="104" viewBox="0 0 351 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M326.571 0.302582C319.022 -0.790184 311.506 1.09863 305.397 5.61806C298.384 10.8188 291.704 15.2303 284.976 19.1157C252.542 37.841 215.717 47.3384 175.529 47.3384C135.429 47.3384 98.591 37.8882 66.0544 19.2573C59.3065 15.3854 52.5993 10.9807 45.532 5.77995C39.4025 1.25376 31.8732 -0.614769 24.3506 0.504974C16.8077 1.61122 10.1549 5.57081 5.60874 11.6552C-3.76898 24.2017 -1.11183 41.9826 11.5209 51.2913C20.3754 57.8006 28.8765 63.3724 37.5067 68.3235C78.823 91.9932 125.263 103.993 175.529 104C225.944 104 272.425 91.919 313.674 68.0874C322.256 63.1362 330.717 57.5577 339.537 51.0281C345.639 46.5087 349.601 39.8915 350.695 32.3906C351.796 24.8964 349.893 17.4361 345.34 11.3787C340.787 5.32803 334.128 1.3886 326.571 0.302582Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col features__desc">
                    <h2 class="features__title wow slideInRight"><?=$data['t_title']?></h2>
                    <p class="features__text wow slideInRight">
                        <?=$data['t_subtitle']?>
                    </p>
                    <div class="features__border"></div>
                    <?
                    if (count($data['t_list']) > 0) {
                        $t_list_p1 = [];
                        $t_list_p2 = [];

                        $c = 0;
                        foreach ($data['t_list'] as $item) {
                            if ($c < count($data['t_list'])/2) {
                                $t_list_p1[] = $item;
                            } else {
                                $t_list_p2[] = $item;
                            }

                            $c++;
                        }
                    }
                    ?>

                    <div class="row">
                        <div class="col">
                            <ul class="features__ul features__ul-desctop">
                                <? if (count($t_list_p1) > 0): $delay = 0; foreach ($t_list_p1 as $item): ?>
                                <div class="features__li-container wow slideInRight" data-wow-delay="<?=$delay;?>s">
                                    <img src="<?=$item['image']?>" alt="галочка">
                                    <li><?=$item['text']?></li>
                                </div>
                                <? $delay+=0.2; endforeach; endif; ?>
                            </ul>

                            <ul class="features__ul features__ul-mobile">
                                <? if (count($t_list_p1) > 0): $delay = 0; foreach ($t_list_p1 as $item): ?>
                                <div class="features__li-container wow slideInRight">
                                    <img src="<?=$item['image']?>" alt="галочка">
                                    <li><?=$item['text']?></li>
                                </div>
                                <? $delay+=0.2; endforeach; endif; ?>
                            </ul>

                        </div>
                        <div class="col">

                            <ul class="features__ul features__ul-desctop">
                                <? if (count($t_list_p2) > 0): $delay = 0; foreach ($t_list_p2 as $item): ?>
                                    <div class="features__li-container wow slideInRight" data-wow-delay="<?=$delay;?>s">
                                        <img src="<?=$item['image']?>" alt="галочка">
                                        <li><?=$item['text']?></li>
                                    </div>
                                    <? $delay+=0.2; endforeach; endif; ?>
                            </ul>

                            <ul class="features__ul features__ul-mobile">
                                <? if (count($t_list_p2) > 0): $delay = 0; foreach ($t_list_p2 as $item): ?>
                                    <div class="features__li-container wow slideInRight">
                                        <img src="<?=$item['image']?>" alt="галочка">
                                        <li><?=$item['text']?></li>
                                    </div>
                                    <? $delay+=0.2; endforeach; endif; ?>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 svg-logo__container svg-logo__desctop">
                    <div class="svg-bg-cont">
                        <div class="orbit">
                            <svg class="sputnik" width="351" height="104" viewBox="0 0 351 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M326.571 0.302582C319.022 -0.790184 311.506 1.09863 305.397 5.61806C298.384 10.8188 291.704 15.2303 284.976 19.1157C252.542 37.841 215.717 47.3384 175.529 47.3384C135.429 47.3384 98.591 37.8882 66.0544 19.2573C59.3065 15.3854 52.5993 10.9807 45.532 5.77995C39.4025 1.25376 31.8732 -0.614769 24.3506 0.504974C16.8077 1.61122 10.1549 5.57081 5.60874 11.6552C-3.76898 24.2017 -1.11183 41.9826 11.5209 51.2913C20.3754 57.8006 28.8765 63.3724 37.5067 68.3235C78.823 91.9932 125.263 103.993 175.529 104C225.944 104 272.425 91.919 313.674 68.0874C322.256 63.1362 330.717 57.5577 339.537 51.0281C345.639 46.5087 349.601 39.8915 350.695 32.3906C351.796 24.8964 349.893 17.4361 345.34 11.3787C340.787 5.32803 334.128 1.3886 326.571 0.302582Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="our-instagram">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <h2 class="our-instagram__title wow slideInRight">Посетите наш инстаграм:</h2>
<!--                    --><?// $inst = loadInstPhotos($data['inst']); ?>
                </div>
            </div>
            <div class="row instDesktop justify-content-center our-instagram__img-row wow fadeInUp our-instagram__img-desctop" data-wow-delay="0.1s">
<!--                <div href="#" class="our-instagram__img">-->
<!--                    <img src="--><?//=$dir;?><!--/assets/img/inst1.jpg" alt="Картинка из инстаграма 1">-->
<!--                    <div class="our-instagram__mask">-->
<!--                        <p>Любим тебя, Петербург, любым: с проливными дождями и огненными закатами. Любим шумный Невский и тихую Ваську. Любим твои зелёные парки, необычные кофейни и самые лучшие концерты. Наверное, этот список можно продолжать бесконечно.</p>-->
<!--                        <p>#маршруты #кикшеринг #электросамокаты #петербург</p>-->
<!--                        <a href="#">Перейти</a>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div href="#" class="our-instagram__img wow fadeInUp" data-wow-delay="0.3s">-->
<!--                    <img src="--><?//=$dir;?><!--/assets/img/inst2.jpg" alt="Картинка из инстаграма 2">-->
<!--                    <div class="our-instagram__mask">-->
<!--                        <p>Любим тебя, Петербург, любым: с проливными дождями и огненными закатами. Любим шумный Невский и тихую Ваську. Любим твои зелёные парки, необычные кофейни и самые лучшие концерты. Наверное, этот список можно продолжать бесконечно.</p>-->
<!--                        <p>#маршруты #кикшеринг #электросамокаты #петербург</p>-->
<!--                        <a href="#">Перейти</a>-->
<!--                    </div>-->
<!--                </div>-->

            </div>

            <div class="row instMobile justify-content-center our-instagram__img-row wow fadeInUp our-instagram__img-mobile">
<!--                <div href="#" class="our-instagram__img">-->
<!--                    <img src="--><?//=$dir;?><!--/assets/img/inst1.jpg" alt="Картинка из инстаграма 1">-->
<!--                    <div class="our-instagram__mask">-->
<!--                        <p>Любим тебя, Петербург, любым: с проливными дождями и огненными закатами. Любим шумный Невский и тихую Ваську. Любим твои зелёные парки, необычные кофейни и самые лучшие концерты. Наверное, этот список можно продолжать бесконечно.</p>-->
<!--                        <p>#маршруты #кикшеринг #электросамокаты #петербург</p>-->
<!--                        <a href="#">Перейти</a>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div href="#" class="our-instagram__img wow fadeInUp">-->
<!--                    <img src="--><?//=$dir;?><!--/assets/img/inst2.jpg" alt="Картинка из инстаграма 2">-->
<!--                    <div class="our-instagram__mask">-->
<!--                        <p>Любим тебя, Петербург, любым: с проливными дождями и огненными закатами. Любим шумный Невский и тихую Ваську. Любим твои зелёные парки, необычные кофейни и самые лучшие концерты. Наверное, этот список можно продолжать бесконечно.</p>-->
<!--                        <p>#маршруты #кикшеринг #электросамокаты #петербург</p>-->
<!--                        <a href="#">Перейти</a>-->
<!--                    </div>-->
<!--                </div>-->

            </div>


            <div class="row justify-content-center">
                <a class="our-instagram__btn" href="https://instagram.com/<?=$data['inst']?>" target="_blank"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0H5ZM15.8845 3.27298C15.8845 3.9112 15.3672 4.42858 14.7289 4.42858C14.0907 4.42858 13.5733 3.9112 13.5733 3.27298C13.5733 2.63476 14.0907 2.11738 14.7289 2.11738C15.3672 2.11738 15.8845 2.63476 15.8845 3.27298ZM8.99822 11.7936C10.5414 11.7936 11.7923 10.5426 11.7923 8.99946C11.7923 7.45632 10.5414 6.20535 8.99822 6.20535C7.45507 6.20535 6.2041 7.45632 6.2041 8.99946C6.2041 10.5426 7.45507 11.7936 8.99822 11.7936ZM8.99822 14.2936C11.9221 14.2936 14.2923 11.9233 14.2923 8.99946C14.2923 6.0756 11.9221 3.70535 8.99822 3.70535C6.07436 3.70535 3.7041 6.0756 3.7041 8.99946C3.7041 11.9233 6.07436 14.2936 8.99822 14.2936Z" fill="white"/>
                    </svg>@<?=$data['inst']?></a>
            </div>
        </div>
    </section>


    <section class="FAQ" id="FAQ">
        <div class="container">
            <div class="row">
                <div class="col wow slideInRight">
                    <h2 class="FAQ__title"><?=$data['faq']['f_title']?></h2>
                </div>
            </div>
            <div class="row">
                <div class="col accord__container">
                    <div id="accordion" class="accord__list">
                        <? if (count($data['faq']['f_list']) > 0): $counter = 0; foreach ($data['faq']['f_list'] as $item): ?>
                        <div class="card accord__list" data-toggle="collapse" data-target="#collapse_faq_<?=$counter?>" aria-expanded="true" aria-controls="collapse_faq_<?=$counter?>">
                            <?=$counter == 0?'<span class="accord__list-separator"></span>':'';?>
                            <div class="card-header" id="heading_faq_<?=$counter?>">
                                <p class="mb-0 card-title">
                                    <?=$counter+1?>. <?=$item['title']?>
                                </p>
                                <button class="btn btn-link accord-btn" data-toggle="collapse" data-target="#collapse_faq_<?=$counter?>" aria-expanded="true" aria-controls="collapse_faq_<?=$counter?>"><svg class="" width="10" height="16" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>
                                        <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>
                                    </svg></button>
                                </h5>
                            </div>

                            <div id="collapse_faq_<?=$counter?>" class="collapse" aria-labelledby="heading_faq_<?=$counter?>" data-parent="#accordion">
                                <div class="card-body">
                                    <?=$item['text']?>
                                </div>
                            </div>
                            <span class="accord__list-separator accord__list-separator-bottom"></span>
                        </div>
                        <? $counter++; endforeach; endif; ?>


                        <div class="card accord__list collapsed with-border-bottom" data-toggle="collapse" data-target="#collapse_faq_2" aria-expanded="false" aria-controls="collapse_faq_2">
                                                        <div class="card-header" id="heading_faq_2">
                                <p class="mb-0 card-title">
                                    3. Как это работает?                                </p>
                                <button class="btn btn-link accord-btn collapsed" data-toggle="collapse" data-target="#collapse_faq_2" aria-expanded="false" aria-controls="collapse_faq_2"><svg class="" width="10" height="16" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"></rect>
                                        <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"></rect>
                                    </svg></button>
                                
                            </div>

                            <div id="collapse_faq_2" class="collapse" aria-labelledby="heading_faq_2" data-parent="#accordion" style="">
                                <div class="card-body">
                                <div class="row justify-content-between">
                                   <div class="col-sm-12 col-md-6 col-lg-3 work-img">
                                       <img src="<?=$dir?>/assets/img/work1.png" alt="">
                                   </div>
                                   <div class="col-sm-12 col-md-6 col-lg-3  work-img">
                                       <img src="<?=$dir?>/assets/img/work2.png" alt="">
                                   </div>
                                   <div class="col-sm-12 col-md-6 col-lg-3 work-img">
                                       <img src="<?=$dir?>/assets/img/work3.png" alt="">
                                   </div>
                                   <div class="col-sm-12 col-md-6 col-lg-3 work-img">
                                       <img src="<?=$dir?>/assets/img/work4.png" alt="">
                                   </div>
                                   </div>
                            </div>
  
                        </div>


                  

                    </div>
                </div>
            </div>
        </div>
    </section>


    <footer class="main-footer">
        <div class="main-footer-mask">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 download__container wow slideInRight" data-wow-offset="400">
                    <h2 class="main-footer__title"><?=$data['f_title']?></h2>
                    <p class="main-footer__desc">
                        <?=$data['подзаголовок']?>
                    </p>
                    <div class="price__btn-container">
                        <a class="price__btn" href="<?=$data['m_href_android']?>">Скачать на Android <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>
                                <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>
                            </svg>
                        </a>
                        <a class="price__btn" href="<?=$data['m_href_ios']?>">Скачать на Iphone <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5.65625" y="7.07031" width="8" height="2" rx="1" transform="rotate(-135 5.65625 7.07031)" fill="white"/>
                                <rect x="7.07031" y="5.65625" width="8" height="2" rx="1" transform="rotate(135 7.07031 5.65625)" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row footer-contact">
                <div class="col">
                    <div class="footer-contact__logo">
                        <svg class="copyright" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.744 15.744C14.048 17.44 12 18.288 9.6 18.288C7.2 18.288 5.152 17.44 3.456 15.744C1.76 14.048 0.912 12 0.912 9.6C0.912 7.2 1.76 5.152 3.456 3.456C5.152 1.76 7.2 0.912 9.6 0.912C12 0.912 14.048 1.76 15.744 3.456C17.44 5.152 18.288 7.2 18.288 9.6C18.288 12 17.44 14.048 15.744 15.744ZM9.6 17.568C11.776 17.568 13.632 16.792 15.168 15.24C16.72 13.688 17.496 11.808 17.496 9.6C17.496 7.392 16.72 5.512 15.168 3.96C13.632 2.408 11.776 1.632 9.6 1.632C7.408 1.632 5.536 2.408 3.984 3.96C2.448 5.512 1.68 7.392 1.68 9.6C1.68 11.808 2.448 13.688 3.984 15.24C5.536 16.792 7.408 17.568 9.6 17.568ZM9.672 14.232C8.36 14.232 7.248 13.784 6.336 12.888C5.424 11.976 4.968 10.88 4.968 9.6C4.968 8.32 5.424 7.232 6.336 6.336C7.248 5.424 8.36 4.968 9.672 4.968C10.76 4.968 11.72 5.296 12.552 5.952C13.384 6.608 13.904 7.448 14.112 8.472H12.096C11.952 7.96 11.648 7.56 11.184 7.272C10.736 6.984 10.224 6.84 9.648 6.84C8.832 6.84 8.168 7.112 7.656 7.656C7.16 8.2 6.912 8.848 6.912 9.6C6.912 10.352 7.16 11 7.656 11.544C8.168 12.088 8.832 12.36 9.648 12.36C10.224 12.36 10.736 12.216 11.184 11.928C11.648 11.64 11.952 11.232 12.096 10.704H14.112C13.904 11.744 13.384 12.592 12.552 13.248C11.736 13.904 10.776 14.232 9.672 14.232Z" fill="white"/>
                        </svg>
                        <a class="logo" href="#">
                            <img src="<?=$dir;?>/assets/img/logo.svg" alt="логотип">
                        </a>
                    </div>
                    <div class="deal__container">
                        <a  href="<?=$data['lint_connect']?>" class="deal__container__deal">
                            Договор присоединения
                        </a>
                        <a  href="<?=$data['link_privacy']?>" class="deal__container__policy">
                            Политика конфиденциальности
                        </a>
                    </div>
                    <div class="footer-contact__mail-phone">
                        <a href="mailto:<?=$data['m_email']?>" class="mail"><?=$data['m_email']?></a>
                        <a href="tel:<?=$data['m_phone']?>" class="phone"><?=$data['m_phone']?></a>
                    </div>
                    <div class="adress-container" style="max-width: 210px;">
                        <p class="adress"><?=$data['m_address']?></p>
                    </div>
                    <div class="footer__social-medias">
                        <p>Создание сайта <a href="https://lepinskih.com/">Lepinskih digital</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row footer-contact footer-contact-tablet">
                    <div class="row">
                        <div class="col social-col">
                            <div class="footer-contact__logo">
                                <svg class="copyright" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.744 15.744C14.048 17.44 12 18.288 9.6 18.288C7.2 18.288 5.152 17.44 3.456 15.744C1.76 14.048 0.912 12 0.912 9.6C0.912 7.2 1.76 5.152 3.456 3.456C5.152 1.76 7.2 0.912 9.6 0.912C12 0.912 14.048 1.76 15.744 3.456C17.44 5.152 18.288 7.2 18.288 9.6C18.288 12 17.44 14.048 15.744 15.744ZM9.6 17.568C11.776 17.568 13.632 16.792 15.168 15.24C16.72 13.688 17.496 11.808 17.496 9.6C17.496 7.392 16.72 5.512 15.168 3.96C13.632 2.408 11.776 1.632 9.6 1.632C7.408 1.632 5.536 2.408 3.984 3.96C2.448 5.512 1.68 7.392 1.68 9.6C1.68 11.808 2.448 13.688 3.984 15.24C5.536 16.792 7.408 17.568 9.6 17.568ZM9.672 14.232C8.36 14.232 7.248 13.784 6.336 12.888C5.424 11.976 4.968 10.88 4.968 9.6C4.968 8.32 5.424 7.232 6.336 6.336C7.248 5.424 8.36 4.968 9.672 4.968C10.76 4.968 11.72 5.296 12.552 5.952C13.384 6.608 13.904 7.448 14.112 8.472H12.096C11.952 7.96 11.648 7.56 11.184 7.272C10.736 6.984 10.224 6.84 9.648 6.84C8.832 6.84 8.168 7.112 7.656 7.656C7.16 8.2 6.912 8.848 6.912 9.6C6.912 10.352 7.16 11 7.656 11.544C8.168 12.088 8.832 12.36 9.648 12.36C10.224 12.36 10.736 12.216 11.184 11.928C11.648 11.64 11.952 11.232 12.096 10.704H14.112C13.904 11.744 13.384 12.592 12.552 13.248C11.736 13.904 10.776 14.232 9.672 14.232Z" fill="white"></path>
                                </svg>
                                <a class="logo" href="#">
                                    <img src="<?=$dir;?>/assets/img/logo.svg" alt="логотип">
                                </a>
                            </div>
                            <div class="footer__social-medias">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col deal-col">
                            <div class="deal__container">
                                <a  href="<?=$data['lint_connect']?>" class="deal__container__deal">
                                    Договор присоединения
                                </a>
                                <a  href="<?=$data['link_privacy']?>" class="deal__container__policy">
                                    Политика конфиденциальности
                                </a>
                            </div>
                            <div class="footer-contact__mail-phone">
                                <a href="mailto:<?=$data['m_email']?>" class="mail"><?=$data['m_email']?></a>
                                <a href="tel:<?=$data['m_phone']?>" class="phone"><?=$data['m_phone']?></a>
                            </div>
                            <div class="adress-container" style="max-width: 210px;">
                                <p class="adress"><?=$data['m_address']?></p>
                            </div>
                            <div class="author">
                                <p>Создание сайта <a href="https://lepinskih.com/">Lepinskih digital</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>


</main>

<div id="inst_user" style="display: none;"><?=$data['inst']; ?></div>
<? get_footer(); ?>

<?//
//function loadInstPhotos($user) {
//    echo 141;
//    $data = (file_get_contents("https://www.instagram.com/".$user."/?__a=1"));
//
//
////    var_dump($data); die();
//    $sorted = [];
//
////    foreach ($data['graphql']['user']['edge_owner_to_timeline_media']['edges'] as $item) {
////        $d = [];
////        $d['image'] = $item['node']['thumbnail_src'];
////        $d['description'] = $item['node']['edge_media_to_caption']['edges']['0']['node']['text'];
////
////        $sorted[] = $d;
////    }
//
//    var_dump($data); die();
//
//    return $sorted;
//}
//?>

<!--<script-->
<!--    src="https://code.jquery.com/jquery-3.5.1.min.js"-->
<!--    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="-->
<!--    crossorigin="anonymous"></script>-->
<!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>-->
<!--<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>-->
<!--<script src="js/wow.min.js"></script>-->

<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TimelineMax.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.min.js"></script>-->
<!-- <script
src="https://code.jquery.com/jquery-3.5.1.min.js"
integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
crossorigin="anonymous"></script> -->





