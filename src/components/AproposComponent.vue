<script setup>
 import HeaderComponent from "./layout/HeaderComponent.vue";
    // import BarnerComponent from "./layout/BarnerComponent.vue" 
import FooterComponent from "./layout/FooterComponent.vue";
   
</script>
<template>
    <HeaderComponent />
    <section>
        <div class="section">
            <div class="banner herobanner-embed herobanner-embed--full">
                <div class="banner-content">
                    <div class="banner-image"></div>
                    <a href="#content-section" class="navbar-wrapper__cta">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#ffffff"
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="propos">
        <div class="container">
            <div class="container container--tight block">
                <h1>À propos</h1>
            </div>
            <div class="block container container--tight">
                <div class="grid grid--multiline">
                    <div class="grid__item">
                        <div class="block__description">
                            <p data-block-key="ucgm2"><a href="#echelles">Échelles</a> - <a href="#metiers">Métiers</a>
                                - <a href="#innovation">Innovation</a> - <a href="#expertise">Expertise</a> - <a
                                    href="#reseau">Réseau</a></p>
                        </div>
                        <div class="block__description">
                            <p data-block-key="84iht">Le bureau suisse d’architecture CCHE gère des projets d’urbanisme,
                                d’architecture, d’aménagement intérieur et de design de la conception à la réalisation.
                                Une équipe pluridisciplinaire, représentant 25 corps métiers, 350 collaborateurs.trices
                                et 17 associé.e.s, rayonne à travers les 7 bureaux de Lausanne, Genève, Nyon, la Vallée
                                de Joux, Zürich, Porto au Portugal, ainsi que la filiale Perspectives Construction.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-8">
                    <div class="block__description">
                        <p><i>Activer le volume en bas à droite de la vidéo</i></p>
                    </div>
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <iframe
                                src="https://player.vimeo.com/video/740672284?title=0&amp;byline=0&amp;portrait=0&amp;controls=1"
                                frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""
                                class="embed-responsive__item"></iframe>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <!-- Contenu pour la deuxième colonne -->
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche-formation-lunchandlearn.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE-a-propos-metiers.jpg" alt="cche-formation-lunchandlearn"
                                class="embed-responsive__item">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <a name="echelles" class="anchor" tabindex="-1"></a>
                    <h2 class="block__title">ÉCHELLES</h2>
                    <div class="block__description">
                        <p data-block-key="pm50s">
                            <RouterLink to="/apropos/urbanisme">Urbanisme</RouterLink> - <RouterLink
                                to="/apropos/architecture/">Architecture</RouterLink> - <RouterLink
                                to="/apropos/architecture-d-interieur/">Intérieur</RouterLink> - <RouterLink
                                to="/apropos/design/">Design</RouterLink> - <RouterLink to="/apropos/realisation">
                                Réalisation</RouterLink><br><br>Nous réunissons sous le même
                            toit toutes les compétences de l'architecture avec des équipes passionnées, dynamiques et
                            créatives afin de proposer un savoir-faire de grande qualité et une réflexion globale,
                            quelle que soit l’échelle du projet.
                        </p>
                        <p data-block-key="fgz3l">Qu’il s’agisse de la rénovation d’un ouvrage protégé à l’inventaire
                            historique, du développement d’un grand quartier de logements ou de la réalisation d’un
                            musée de haute horlogerie, les projets signés CCHE se distinguent par une vision à la fois
                            économique, écologique et sociale.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-8">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE-TOUR-HIAG-vue-generale.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label" style="padding-top: 1rem;">
                            <p data-block-key="cx9gs">Les images 3D, vidéos, vues avec un drone ou scènes de réalité
                                virtuelle et augmentée sont autant d’outils qui permettent d’incarner les projets CCHE
                                et d’en révéler toute la subtilité.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">

                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche-echelles-a-propos-01.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label" style="padding-top: 1rem;">
                            <p data-block-key="j827z">La collaboration entre architectes d'intérieur et designers permet
                                le développement d'aménagements et ambiances en accord avec l'activité d'une entreprise
                                et son fonctionnement.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche-echelles-a-propos-02.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label" style="padding-top: 1rem;">
                            <p data-block-key="nxeli">De l’objet au graphisme, de la pièce sur-mesure à la production
                                industrielle, chaque détail est travaillé au service d’un ensemble.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche-architecture-pallin-panchaude-05.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label" style="padding-top: 1rem;">
                            <p data-block-key="yogid">Les éléments métalliques de cette façade sur-mesure sont biseautés
                                afin d’apporter un côté aérien au bâtiment et de lui donner une identité propre.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE-musee_audemars_piguet-24heures_v3.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label" style="padding-top: 1rem;">
                            <p data-block-key="s739w">La réalisation de cette <a href="javascript::void(0)">spirale</a>
                                en verre à la Vallée
                                de Joux représente une prouesse technique rendue possible par l'intervention
                                transversale de différents spécialistes du bureau, appuyés par les meilleures
                                technologies.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-8">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche-architecture-parallele-I-et-II-01.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label" style="padding-top: 1rem;">
                            <p data-block-key="n4jp9">L'implantation de ces bâtiments mêlant logements et ateliers a
                                permis la création d'une cour intime offrant un lieu de rencontre, un monde
                                particulier et protégé des nuisances extérieures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <a name="echelles" class="anchor" tabindex="-1"></a>
                    <h2 class="block__title">MÉTIERS</h2>
                    <div class="block__description">
                        <p data-block-key="0zxq1">Nos équipes pluridisciplinaires constituées d’architectes, urbanistes,
                            designers et designers paramétriques, chefs de projet, directeurs de travaux, paysagistes ou
                            spécialistes en environnement et construction proposent bien plus que des projets. Chaque
                            développement est envisagé sous un angle transversal pour lui insuffler vision, cohérence et
                            précision.</p>
                        <p data-block-key="q2zts">La mise en commun des métiers et expériences permet, au travers d’une
                            analyse plus large de chaque situation, de soigner chaque détail tout en préservant la
                            vision globale du projet. Cette attitude réunit l’ensemble des collaborateurs autour d’un
                            objectif commun : surprendre chaque client et le pousser à aller plus loin.</p>
                        <p data-block-key="57qcs">Cette envie de se dépasser se concrétise également par un engagement
                            dans différentes collaborations internationales, notamment avec les bureaux BIG (DK) et
                            Kengo Kuma (JA), pour la réalisation de projets ambitieux.</p>
                    </div>
                    <div class="block__description">
                        <p data-block-key="0xvx9">Notre bureau est en constante évolution et nous sommes en permanence à
                            la recherche de nouveaux talents: consultez notre <RouterLink to="/emploi">page emploi
                            </RouterLink> pour découvrir nos postes vacants.</p>
                        <p data-block-key="3talp"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-8">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE-seance-interieur.jpg" alt="cche-formation-lunchandlearn"
                                class="embed-responsive__item">
                        </div>
                        <div class="block__label" style="padding-top: 1rem;">
                            <p data-block-key="4tiwv">Du développement d'une idée à la réalisation d'un bâtiment, chaque
                                étape est appuyée par l'utilisation d'outils et technologies spécifiques nous permettant
                                d'affûter notre intervention de manière ciblée.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE-a-propos-metiers-construction.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                    </div>
                    <div class="block__item" style="padding-top: 1rem;">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE-drone.jpg" alt="cche-formation-lunchandlearn"
                                class="embed-responsive__item">
                        </div>
                    </div>
                    <div class="block__item" style="padding-top: 1rem;">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche_metiers-infographiste_ofQrExM.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <a name="echelles" class="anchor" tabindex="-1"></a>
                    <h2 class="block__title">INNOVATION</h2>
                    <div class="block__description">
                        <p data-block-key="dta97">La vision à long terme et la pérennisation de notre activité sont
                            ancrées dans l'ADN de CCHE et nous incitent à nous intéresser au développement d’outils et
                            de techniques pour exercer notre cœur de métier en l’inscrivant dans les attentes de demain.
                        </p>
                        <p data-block-key="r6ebw">Structure en évolution permanente, CCHE est constamment à l’affut des
                            dernières innovations technologiques pour accompagner des interventions efficaces,
                            coordonnées, précises et sécuritaires.</p>
                        <p data-block-key="y9pbt">Nos cellules dédiées à la recherche et développement (R&amp;D)
                            travaillent sur les nouveaux outils, liés par exemple au monde du BIM, à la gestion
                            paramétrique, à l’étude sur les algorithmes, à la réalité virtuelle et augmentée et toutes
                            autres thématiques liées aux nouveaux processus de développement des projets.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-8">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <iframe
                                src="https://player.vimeo.com/video/428437329?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;controls=0"
                                frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""
                                class="embed-responsive__item" data-vimeo-tracked="true" data-ready="true"></iframe>
                        </div>
                        <div class="block__label">
                            <p data-block-key="vfm56">Réalité virtuelle ou augmentée et impression 3D permettent
                                notamment de matérialiser des intentions, idées ou principes et de vérifier leur
                                viabilité dans la globalité du projet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <!-- Contenu pour la deuxième colonne -->
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <a name="echelles" class="anchor" tabindex="-1"></a>
                    <h2 class="block__title">Architecture 3.0</h2>
                    <div class="block__description">
                        <p data-block-key="ffogq">Nos lunettes de réalité virtuelle Oculus Rift et le logiciel Unreal
                            Engine sont utilisés pour la création d’environnements virtuels qui peuvent être visités en
                            temps réel. Les rendus sphériques, images 3D et présentations en réalité augmentée sont
                            développés par une équipe interne d’infographes. Les clients peuvent ainsi s’immerger dans
                            leurs futurs espaces et participer activement à leur développement sans avoir recours à des
                            documents techniques.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-8">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <iframe
                                src="https://theviewer.co/share/bec3a427-878c-4fee-bb5a-87c5ed4c70d2/c4352c64-28a7-484e-b811-8bfe07ed2e99?linkType=ShareLink"
                                frameborder="0" allow="accelerometer; encrypted-media; gyroscope;" allowfullscreen=""
                                class="embed-responsive__item"></iframe>
                            <div class="embed-responsive__thumbnail">
                                <picture></picture>
                            </div>
                        </div>
                        <div class="block__label">
                            <p data-block-key="n2yk0">Découvrez le projet the Hive en mode <a
                                    href="https://theviewer.co/share/bec3a427-878c-4fee-bb5a-87c5ed4c70d2/c4352c64-28a7-484e-b811-8bfe07ed2e99?linkType=ShareLink"
                                    target="_blank" rel="noopener">réalité virtuelle</a>.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche_innovation_VR.jpg" alt="cche-formation-lunchandlearn"
                                class="embed-responsive__item">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <div class="block__description">
                        <h4 data-block-key="sbi0y">Building Information Modeling - BIM&nbsp;@&nbsp;CCHE</h4>
                        <p data-block-key="gnjqa">Grâce à un encadrement conséquent mis en place dès les années 2000,
                            CCHE peut aujourd’hui élaborer des maquettes numériques BIM en ArchiCAD et Revit, avec
                            l’appui d’une équipe dédiée.</p>
                        <p data-block-key="ik84d">Aucune prestation de modélisation BIM n’est traitée à l’extérieur. La
                            moitié des effectifs du bureau travaillent quotidiennement avec des logiciels BIM.</p>
                        <p data-block-key="da4hd">Pour plus d’informations, n’hésitez pas à nous contacter par mail à
                            l’adresse bim(at)cche.ch.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/1515_APM_BIM_LV_180201.jpg" alt="cche-formation-lunchandlearn"
                                class="embed-responsive__item">
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <iframe
                                src="https://player.vimeo.com/video/428432279?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;controls=0"
                                frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""
                                class="embed-responsive__item" data-vimeo-tracked="true" data-ready="true"></iframe>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE-a-propos-bim-musee-atelier-le-brassus_sfDpDaw.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <a name="expertise" class="anchor" tabindex="-1"></a>
                    <h2 class="block__title">EXPERTISE</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <div class="block__description">
                        <h4 data-block-key="43fcm">Un bureau centenaire</h4>
                        <p data-block-key="jfwek">CCHE a été fondé il y a plus de 100 ans par les architectes Charles et
                            Frédéric Brugger. Grâce à un esprit résolument tourné vers l’avenir, ce dernier signe en
                            Suisse romande quelques bâtiments représentatifs de la vie lausannoise : le groupe scolaire
                            de l’Elysée (1957-1965), le bâtiment administratif Kodak SA (1959-1962) ou encore les
                            logements sociaux des Tours de la Borde (1962-1968). Son esprit d’ouverture et sa vision
                            d’entrepreneur lui ouvriront d’ailleurs les portes de l’Exposition nationale de 1964 dont il
                            sera l’Architecte responsable du secteur industrie et artisanat.</p>
                        <p data-block-key="e5eg3">Ce sont ensuite Edouard Catella et Erich Hauenstein qui prennent les
                            rênes du bureau en prolongeant l’esprit d’origine : faire de CCHE un atelier où l’on créé de
                            la valeur ensemble, où l’on met en avant le groupe plutôt que l’individu. Soucieux de
                            proposer des solutions toujours plus adaptées, ils s’entourent progressivement d’architectes
                            novateurs et complémentaires à même de perpétuer la vision pérenne et pluridisciplinaire
                            insufflée dès le début.</p>
                        <p data-block-key="6otde">Depuis ses origines, CCHE a considérablement évolué, tant au niveau de
                            sa taille que de la diversification de ses domaines de compétence et services. Les
                            générations se sont succédé et le groupe est aujourd’hui dirigé par 16 associés, à la tête
                            de 7 filiales complémentaires, qui challengent chaque projet avec sens et conviction pour
                            lui créer une histoire.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE-College-de-l-Elysee_CGSrMdK.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label">
                            <p data-block-key="5d476"><i>Les aménagements intérieurs du</i> <a
                                    href="javascript::void(0)"><i>Collège de l’Elysée</i></a><i> à Lausanne en 1965
                                    ...</i></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche-architecture-interieur-incyte-biosciences.international-003.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label">
                            <p data-block-key="i3oe7">... et ceux d'une entreprise internationale <a
                                    href="javascript::void(0)">Incyte</a> active dans la pharma en 2020 font appel au
                                même savoir-faire pour déterminer avec justesse une échelle en relation avec l'ergonomie
                                du lieu et sa future utilisation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-8">
                    <div class="block__description">
                        <h4 data-block-key="ffyge">La formation à tous les niveaux</h4>
                        <p data-block-key="6l7tl">La création d’une communauté soudée passe notamment par la formation
                            interne, qui se situe au cœur des préoccupations de CCHE et fait partie inté­grante des
                            valeurs du bureau.<br><br>Au-delà d’un modèle incitant les collaborateurs à accompagner et
                            former leurs collègues dans leur domaine d’expertise, CCHE accueille plusieurs apprentis
                            (dessinateur et employé de commerce) et stagiaires (courte et longue durée) chaque année.
                        </p>
                        <p data-block-key="3vzd8">De plus, chaque mois durant l’année, des programmes appelés « Lunch
                            &amp; Learn » sont proposés aux collaborateurs durant le déjeuner sur l’un des différentes
                            sites mais également en diffusion visio-conférence. Ces formations sont dispensées par des
                            internes pour permettre à leurs collègues de découvrir ou approfondir des thématiques liées
                            à leurs métiers.<br><br>Dans la volonté d’une amélioration constante du bureau, CCHE offre
                            des opportunités d’évolution ouvertes sur l’avenir et selon les ambitions de chacun.</p>
                        <p data-block-key="9nurg"></p>
                        <p data-block-key="l8bwf">Voir l'actualité "<a
                                href="/fr/actualites/portrait-d-apprentis/">Portrait d'apprentis</a>" et la "<a
                                href="/fr/actualites/cche-communaute-focus-sur-nos-apprenti-e-s/">Présentation en mode
                                micro-trottoir des équipes d'apprenti.e.s en cours de formation dans l'une des filiales
                                CCHE</a>"</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE_Entreprise-formatrice-CFC.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label">
                            <p data-block-key="ckgav">L'engagement de CCHE pour la formation interne se concrétise
                                notamment par le soutien du modèle de formation dual et l'accueil de plusieurs
                                apprenti.e.s et stagiaires chaque année.</p>
                        </div>
                    </div>
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche-a-propos-expertise-la-formation-a-tous-les-niveaux-002.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label">
                            <p data-block-key="akilz">Chaque année, la Direction de CCHE Lausanne SA décerne la Bourse
                                d’Etude CCHE à l’apprenti.e vaudois.e ayant obtenu la meilleure moyenne sur l’ensemble
                                des branches professionnelles et de l’examen final pratique - ou ayant démontré, à
                                travers son travail, la plus forte progression durant sa formation. Ce soutien
                                récompense les résultats obtenus au cours de son apprentissage et permet d'encourager la
                                suite de la formation professionnelle après l’obtention du CFC.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <div class="block__description">
                        <h4 data-block-key="rvvfy">Un engagement durable</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE-a-propos-developpement-durable-certifications.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label">
                            <p data-block-key="l6i39">Un engagement durable, à même d’accompagner les projets du bureau
                                pour les pousser vers le meilleur équilibre économique, écologique et social.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/CCHE-a-propos-developpement-durable-certifications-002_6Muf6Rg.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <div class="block__description">
                        <p data-block-key="ufk9y">Premier bureau d'architecture certifié EcoEntreprise en 2009, CCHE est
                            une entreprise soucieuse de pousser toujours plus en avant les qualités écologiques de ses
                            projets et réflexions: suppression du PUR dans les bâtiments, labels <a
                                href="https://www.minergie.ch/" target="_blank" rel="noopener">Minergie</a> et <a
                                href="https://www.minergie.ch/fr/certifier/eco/" target="_blank" rel="noopener">Minergie
                                ECO</a> utilisés comme fils rouge de conception et de réalisation, écobilan des
                            matériaux, etc.<br><br>CCHE compte dans ses équipes plusieurs experts des questions de
                            développement durable dans la construction ainsi qu’une intégratrice <a
                                href="https://oneplanetliving.ch/" target="_blank" rel="noopener">One Planet Living</a>,
                            à même d’accompagner les projets du bureau pour les pousser vers le meilleur équilibre
                            économique, écologique et social.<br><br>Egalement membre de l'association Espace Suisse,
                            qui encourage un développement territorial durable, le bureau s'engage pour une utilisation
                            du sol efficace, optimale et économe.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/2400005F-0AF8-40A0-B0B8-EEAF2FB93884.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label">
                            <p data-block-key="0vxlz">Le quartier <a href="javascript::void(0)">"Ancienne Papeterie"</a>
                                imaginé par le groupement d’architectes Magizan-CCHE prendra place sur un ancien site
                                industriel pour accueillir dans une première phase 800 habitants et des surfaces dédiées
                                aux activités.&nbsp;Il s’agit du premier quartier écologique du canton de Fribourg
                                certifié OPL®.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <a name="reseau" class="anchor" tabindex="-1"></a>
                    <h2 class="block__title">RÉSEAU</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <div class="block__description">
                        <h4 data-block-key="pd1tq">7 sites en synergie permanente</h4>
                        <p data-block-key="vamzm">Installé dans le quartier en plein essor de Malley, CCHE Lausanne est
                            piloté par 7 associés complémentaires apportant leur propre sensibilité, leur expérience et
                            leurs compétences au service des projets. <a href="javascript::void(0)">Hannes
                                Ehrensperger</a>, <a href="javascript::void(0)">Marco Cennini</a>, <a
                                href="javascript::void(0)">Marc Fischer</a>, <a href="javascript::void(0)">Daniel
                                Grosso</a>, <a href="javascript::void(0)">Franziska Lakomski</a>, <a
                                href="javascript::void(0)">Victoria Stoddart</a> et <a href="javascript::void(0)">Eric
                                Mathez</a> ont une volonté unanime de répondre de
                            façon toujours plus adaptée et personnalisée aux demandes de leurs clients, et donnent jour
                            à des réalisations toutes échelles confondues, se déclinant du quartier à l’objet, avec
                            comme pensée commune, l’Architecture.<br><br>Dans le but de se rapprocher géographiquement
                            de ses clients et partenaires locaux, CCHE Lausanne a initié dès 2011 le déploiement de la
                            marque au travers de différentes filiales en Suisse et à l'étranger. CCHE Nyon SA est ainsi
                            issue de l'association fin 2011 avec le bureau nyonnais de Jacques Suard « Suard Architectes
                            SA » et est aujourd'hui dirigée par <a href="javascript::void(0)">Stéphanie
                                Suard Dancet</a> et <a href="javascript::void(0)">Max Nack</a>, rejoints par <a
                                href="javascript::void(0)">Timoté Mopty</a> en 2023. Les effets de synergie et de
                            complémentarité des deux structures ont permis au bureau de consolider son rôle d’acteur
                            important de la Côte.<br><br> Poursuivant son histoire, CCHE renforce son activité à la
                            Vallée de Joux avec l’ouverture en 2016 d’un troisième bureau au Sentier, CCHE La Vallée SA,
                            avec pour associées <a href="javascript::void(0)">Marie Ståhl</a> et <a
                                href="javascript::void(0)">Funda Kozanoglu</a>.</p>
                    </div>
                    <div class="block__description">
                        <p data-block-key="5s8pm">En 2017, CCHE s’associe avec CLM-ARCHITECTES pour participer
                            activement au développement urbanistique de Genève et sa région. CCHE Genève SA, aujourd’hui
                            dirigée conjointement par <a href="javascript::void(0)">Frédéric Ducrest</a> et <a
                                href="javascript::void(0)">Cornélia Volkringer</a>, a le vent en poupe et a
                            presque doublé ses effectifs en deux ans pour faire face aux nombreux mandats en cours.<br>
                        </p>
                        <p data-block-key="x1mwi">En 2018, c'est le bureau CCHE Porto Lda, dirigé par <a
                                href="javascript::void(0)">Carolina Azevedo</a> et <a href="javascript::void(0)">Michael
                                Pereira</a>, qui marque le déploiement à
                            l'international de CCHE et permet d'allier rigueur helvétique et créativité
                            portugaise.<br><br>Plus récemment CCHE étend son déploiement avec l'ouverture de la filiale
                            CCHE Zürich AG, Dietlikon en 2022.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-8">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche-architecte-associee-marie-stahl-004.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label">
                            <p data-block-key="4yin2">Le modèle d'implantation des différentes filiales qui constituent
                                le réseau CCHE permettent de s'imprégner de la culture du lieu et de tisser des liens
                                étroits avec les acteurs locaux.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/seance-associes-zoom.jpg" alt="cche-formation-lunchandlearn"
                                class="embed-responsive__item">
                        </div>
                        <div class="block__label">
                            <p data-block-key="kl3vg">L'utilisation de la visioconférence pour les échanges et
                                collaborations intergroupe est une des composantes mise en place pour accompagner
                                l'expansion internationale du groupe.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="grid grid--multiline">
                <div class="grid__item">
                    <div class="block__description">
                        <h4 data-block-key="595tx">Perspectives Construction SA</h4>
                        <p data-block-key="08n6a">Dernière née de la famille CCHE, partageant ses locaux avec CCHE Nyon
                            SA, l’entité <a href="javascript::void(0)" target="_blank" rel="noopener">Perspectives
                                Construction SA</a>, s’inscrit dans cette évolution et
                            propose pour ses projets, de la conception à la livraison une réalisation clé en mains, à
                            des prix et des délais garantis sous la forme de contrats en entreprise générale et/ou
                            totale.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="block__item">
                        <div class="responsive-object  embed-responsive-16by9">
                            <img src="../assets/image/img/cche-architecture-malley-phare-00_yRYbtEl.jpg"
                                alt="cche-formation-lunchandlearn" class="embed-responsive__item">
                        </div>
                        <div class="block__label">
                            <p data-block-key="alh6d"><a href="javascript::void(0)">Malley Phare</a>, projet qui sera
                                réalisé par Perspectives Construction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterComponent />
</template>
<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 80vh;
}

.banner-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('../assets/image/barner/apropos.jpg') ;
}

.navbar-wrapper__cta {
  display: flex;
  width: 28px;
  height: 80px;
  align-items: center;
  border-bottom-width: 0;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  color: #fff;
  animation-name: bounce;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

@media (max-width: 60.5625em) {
  .banner {
    height: 50vh;
  }
}
a {
border-bottom: 1px solid #8d8d8d;
    transition: border-bottom-color .3s ease-in;
    text-decoration: none;
    color: #1d1d1d;
}
a {
    background-color: rgba(0, 0, 0, 0);
    -webkit-text-decoration-skip: objects;
}
h1 {
    font-weight: 800;
    max-width: 800px;
    margin-top: 0;
    margin: 1.414em 0 0.5em;
    font-weight: 700;
    line-height: 1.2;
    font-size: 2.1em;

}
p {
    max-width: 800px;
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
}
.container {
    padding-right: 30px;
    padding-left: 30px;
    margin-bottom: 50px;
    width: 100%;
    max-width: 100%;
}
.block {
    padding-bottom: 72px;
}
@media (max-width: 60.5625em){
    .block {
    padding-bottom: 30px;
}
}
.container--tight {
    padding-left: 0;
    padding-right: 0;
}
.block__description, .block__label {
    margin: 0;
}
.responsive-object {
    position: relative;
}
.embed-responsive-16by9 {
    padding-bottom: 56.25%;
}
.embed-responsive {
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
}
.responsive-object iframe, .responsive-object object, .responsive-object embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.embed-responsive__item, .embed-responsive .embed-responsive__thumbnail, .embed-responsive>iframe, .embed-responsive>object, .embed-responsive>embed {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border: 0;
}
img, iframe, embed, object {
    display: block;
}
.block__title {
    margin-bottom: 14px;
    
}
h2, .h2 {
    font-size: 1.6666666667rem;
}
.block__label{
    margin-top: 1rem;
    font-style: italic;
}
h4, .h4 {
    font-size: 1.2222222222rem;
}
h4 {
    font-weight: 500 !important;
    max-width: 800px;
    font-size: 1.25em;
    margin: 1.414em 0 0.5em;
    font-weight: inherit;
    line-height: 1.2;
}

@media (max-width: 767px) {
    .container {
        padding-right: 15px;
        padding-left: 15px;
    }

    .block {
        padding-bottom: 30px;
    }
    .row{
        gap: 10px ;
    }
    .block__label{
    margin-top: .2rem;
    
}
}

</style>

