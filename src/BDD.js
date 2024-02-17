const actualityDatas = [
    {
      image: `/src/assets/image/actualites/a-1.jpg`,
      imageAlt: "Actualités - CCHE 2023",
      categories: "Actualités",
      date: "14.12.2023",
      title: "CCHE 2023: Revivez en images nos meilleurs moments de l'année",
      content: "En 2023, nous sommes fiers d'avoir pu proposer des réponses de qualité, sur mesure et concertées aux problématiques très variées qui nous ont été proposées",
      link: "javascript:void(0)"
    },
    {
      image: `/src/assets/image/actualites/a-2.jpg`,
      imageAlt: "Actualités - Suivre la transformation du centre de congrès 2m2c à Montreux",
      categories: "Actualités",
      date: "13.12.2023",
      title: "Suivre la transformation du centre de congrès 2m2c à Montreux",
      content: "épisode 3 - décembre 2023",
      link: "javascript:void(0)"
    },
    {
      image: `/src/assets/image/actualites/a-3.jpg`,
      imageAlt: "Actualités - Permis en force pour le projet 'Polyprime' à Villars-Sainte-Croix",
      categories: "Actualités",
      date: "12.12.2023",
      title: "Permis en force pour le projet 'Polyprime' à Villars-Sainte-Croix",
      content: "Polyprime, un nouvel ensemble idéalement situé à Villars-Sainte-Croix, proposera dès le printemps 2027 près de 12'000 m2 de surfaces artisanales et industrielles",
      link: "javascript:void(0)"
      
    },
    {
      image: `/src/assets/image/actualites/a-4.jpg`,
      imageAlt: "Revue de presse - Une tour d'habitation comme projet durable",
      categories: "Revue de presse",
      date: "05.12.2023",
      title: "Une tour d'habitation comme projet durable",
      content: "Point de vue sur le projet Malley Phare dans le journal économique de référence Finanz und Wirtschaft",
      link: "javascript:void(0)"

    },
    {
      image: `/src/assets/image/actualites/a-5.jpg`,
      imageAlt: "Revue de presse - Hôtel des Innovations : la première pierre a été posée !",
      categories: "Revue de presse",
      date: "01.12.2023",
      title: "Hôtel des Innovations : la première pierre a été posée !",
      content: "Dans un bel environnement arboré, cette nouvelle zone d’activités créera environ 230 emplois selon l’organisation suivante : l’Hôtel de l’Innovation (30), immeuble accueillant le Centre suisse de compétences en matière d’exécution des sanctions pénales CSCSP (90) et un pôle médical (110).",
      link: "javascript:void(0)"

    },
    {
      image: `/src/assets/image/actualites/a-6.jpg`,
      imageAlt: "Articles - Agir pour améliorer l’efficacité énergétique du bâti existant",
      categories: "Articles",
      date: "24.11.2023",
      title: "Agir pour améliorer l’efficacité énergétique du bâti existant",
      content: "La rénovation de bâtiment représente un des défis majeurs de la transition énergétique. Dans le contexte actuel, les rénovations énergétiques représentent un important levier d’action pour améliorer l’efficacité énergétique du bâti en Suisse et revaloriser l’existant, tout en respectant le patrimoine bâti.",
      link: "javascript:void(0)"

    },
    {
      image: `/src/assets/image/actualites/a-7.jpg`,
      imageAlt: "Revue de presse - Apprentissages en altitude : Carrières diversifiées à la Vallée de Joux",
      categories: "Revue de presse",
      date: "24.11.2023",
      title: "Apprentissages en altitude : Carrières diversifiées à la Vallée de Joux",
      content: "\"Pour CCHE, la transmission du savoir est importante, ainsi, nous mettons un point d’honneur à offrir une formation de qualité.\" Roland Cabut",
      link: "javascript:void(0)"

    },
    {
      image: `/src/assets/image/actualites/a-8.jpg`,
      imageAlt: "Revue de presse - Hôtel Lavaux : le patrimoine architectural régional en valeur dans la NZZ",
      categories: "Revue de presse",
      date: "21.11.2023",
      title: "Hôtel Lavaux : le patrimoine architectural régional en valeur dans la NZZ",
      content: "Découverte de Lavaux et son patrimoine architectural dans la NZZ, qui s’intéresse notamment à l’Hôtel Lavaux, réalisé par Alberto Sartoris en 1965 et entièrement rénové par CCHE en 2012.",
      link: "javascript:void(0)"

    },
    {
      image: `/src/assets/image/actualites/a-9.jpg`,
      imageAlt: "Actualités - La Begnaule: conserver la valeur durable d’une parcelle",
      categories: "Actualités",
      date: "20.11.2023",
      title: "La Begnaule: conserver la valeur durable d’une parcelle",
      content: "Le projet de la Begnaule se caractérise par la construction d’un petit bâtiment de logement niché au coeur d’un jardin ICOMOS.",
      link: "javascript:void(0)"

    },
    {
      image: `/src/assets/image/actualites/a-10.jpg`,
      imageAlt: "Actualités - Méthodologies en urbanisme: une stratégie gagnante pour le développement",
      categories: "Actualités",
      date: "14.11.2023",
      title: "Méthodologies en urbanisme: une stratégie gagnante pour le développement",
      content: "CCHE Urbanisme, c’est une équipe passionnée par les enjeux actuels et futurs des aménagements urbains. L’immersion au sein d’un bureau réunissant plus de 25 métiers complémentaires et les synergies qui en découlent permettent de développer des approches pragmatiques, concrétisées notamment au travers de méthodologies.",
      link: "javascript:void(0)"
    },
    {
      image: `/src/assets/image/actualites/a-11.jpg`,
      imageAlt: "Articles - Urbanisme - La Stratégie socio-spatiale",
      categories: "Articles",
      date: "14.11.2023",
      title: "Urbanisme - La Stratégie socio-spatiale",
      content: "Les stratégies socio-spatiales développées par nos urbanistes accompagnent nos projet de logements pour les adapter au plus près des besoins du marché",
      link: "javascript:void(0)"
    },
    {
      image: `/src/assets/image/actualites/a-12.jpg`,
      imageAlt: "Articles - Urbanisme - Les Megatrends",
      categories: "Articles",
      date: "14.11.2023",
      title: "Urbanisme - Les Megatrends",
      content: "La méthodologie des megatrends développée par le bureau CCHE traite des grandes mutations actuelles et futures de la société les megatrends ou mégatendances sont des changements économiques sociétaux, technologiques et politiques de grande ampleur qui influencent notre société.",
      link: "javascript:void(0)"
    },
    {
      image: `/src/assets/image/actualites/a-13.jpg`,
      imageAlt: "Articles - Urbanisme - La démarche participative",
      categories: "Articles",
      date: "14.11.2023",
      title: "Urbanisme - La démarche participative",
      content: "La co-construction de projet est une méthodologie qui prône la collaboration en impliquant activement les parties prenantes dans le processus de décision, de conception et d’action dans le but d’obtenir un résultat efficient et reconnu par toutes et tous.",
      link: "javascript:void(0)"
    },
    {
      image: `/src/assets/image/actualites/a-14.jpg`,
      imageAlt: "Articles - Urbanisme - La Ville productive",
      categories: "Articles",
      date: "14.11.2023",
      title: "Urbanisme - La Ville productive",
      content: "Le bureau CCHE a mis au point la méthodologie de \"l’analyse de la Ville productive\".",
      link: "javascript:void(0)"
    },
    {
      image: `/src/assets/image/actualites/a-15.jpg`,
      imageAlt: "Articles - Urbanisme - Développement des styles de vie",
      categories: "Articles",
      date: "14.11.2023",
      title: "Urbanisme - Développement des styles de vie",
      content: "L’identification de profils types d’usagers permet d'établir des scénarios pour illustrer les valeurs d’usage d’un bâtiment ou d’un quartier (lieux de vie et d’échanges, aménagements extérieurs, typologies…).",
      link: "javascript:void(0)"
    },
    {
      image: `/src/assets/image/actualites/a-16.jpg`,
      imageAlt: "Actualités - JOM 2023: susciter les futures vocations",
      categories: "Actualités",
      date: "13.11.2023",
      title: "JOM 2023: susciter les futures vocations",
      content: "La JOM 2023 était l’occasion de mêler les rires des enfants aux esquisses créatives. Les différentes filiales CCHE, réunissant plus de 25 métiers complémentaires, ont accueilli une trentaine d'enfants pour découvrir l'univers fascinant de l’architecture et les outils dédiés à la création d'espaces innovants et inspirants.",
      link: "javascript:void(0)"
    },
    {
      image: `/src/assets/image/actualites/a-17.jpg`,
      imageAlt: "Actualités - Transformation de la nouvelle concession DIMAB à Rossens",
      categories: "Actualités",
      date: "09.11.2023",
      title: "Transformation de la nouvelle concession DIMAB à Rossens en un espace harmonieux et fonctionnel.",
      content: "Notre mission était claire : créer une signalétique interne et externe qui conserve l'identité visuelle du groupe BMW-MINI Switzerland tout en s'intègrant harmonieusement dans ce bâtiment aux multiples affectations.",
      link: "javascript:void(0)"
    },
    {
      image: `/src/assets/image/actualites/a-18.jpg`,
      imageAlt: "Revue de presse - Le centre de congrès 2m2c à Montreux dans Couleurs Locales",
      categories: "Revue de presse",
      date: "07.11.2023",
      title: "Le centre de congrès 2m2c à Montreux dans Couleurs Locales",
      content: "«La magie du projet de l'architecte est d'utiliser les issues de secours comme voie d'accès pour permettre une simultanéité des événements dans le centre de congrès.Tous ces espaces qui étaient sous-occupés vont pouvoir vivre des événements de manière complète et entière tout en bénéficiant de cette magnifique vue avec le lac et les montagnes» Pierryves Pons, Membre de la direction du projet rénovation 2m2c",
      link: "javascript:void(0)"
    },
    {
        image: `/src/assets/image/actualites/a-19.jpg`,
        imageAlt: "Actualités - Quartier de la Suettaz à Nyon : Suivi du chantier",
        categories: "Actualités",
        date: "06.11.2023",
        title: "Quartier de la Suettaz à Nyon : Suivi du chantier",
        content: "Le chantier prévoit 4 phases successives afin de permettre la relocation progressive des locataires des anciens immeubles. Un grand soin a été mis par les propriétaires sur l'accompagnement et la communication avec les locataires afin de minimiser au maximum l'impact du chantier.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-20.jpg`,
        imageAlt: "Actualités - Le chantier du projet de rénovation de la cité Carl-Vogt à Genève est terminé",
        categories: "Actualités",
        date: "31.10.2023",
        title: "Le chantier du projet de rénovation de la cité Carl-Vogt à Genève est terminé",
        content: "La rénovation complète par CCHE Et MSV architectes des 5 immeubles formant la cité Carl-Vogt s'est achevée avec succès. Ces bâtiments Honegger datant des années 60 abritent 445 appartements répartis dans cinq bâtiments de huit étages et nécessitaient une rénovation en profondeur, notamment sur le plan énergétique.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-21.jpg`,
        imageAlt: "Actualités - Quartier Ley Outre à Crissier: suivi de chantier",
        categories: "Actualités",
        date: "19.10.2023",
        title: "Quartier Ley Outre à Crissier: suivi de chantier",
        content: "Suivez l'avancement du chantier du futur quartier résidentiel sur notre actualité.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-22.jpg`,
        imageAlt: "Actualités - Première labélisation SNBS-Quartier de Suisse pour le Quartier de l'Etang à Vernier",
        categories: "Actualités",
        date: "18.10.2023",
        title: "Première labélisation SNBS-Quartier de Suisse pour le Quartier de l'Etang à Vernier",
        content: "La certification SNBS-Quartier vient récompenser les qualités architecturales et urbanistiques du projet ainsi que sa contribution à l’économie régionale ou encore les mesures mises en œuvre pour préserver faune et flore.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-23.jpg`,
        imageAlt: "Actualités - Malley Phare prend son envol",
        categories: "Actualités",
        date: "12.10.2023",
        title: "Malley Phare prend son envol",
        content: "Suivez l’évolution du chantier de la première tour en structure bois de Romandie.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-24.jpg`,
        imageAlt: "Actualités - CCHE Genève inaugure ses nouveaux locaux au coeur de Plainpalais",
        categories: "Actualités",
        date: "11.10.2023",
        title: "CCHE Genève inaugure ses nouveaux locaux au coeur de Plainpalais",
        content: "« Notre nouvel espace de travail symbolise la volonté de réunir au coeur de Plainpalais nos collaborateur.trice.s au sein d’un environnement propice à l'innovation et à la collaboration », selon Frédéric Ducrest et Cornélia Volkringer, architectes associés de CCHE Genève SA.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-25.jpg`,
        imageAlt: "Actualités - Bouquet de chantier du bâtiment B2: nouvelle étape clé pour la Suettaz à Nyon",
        categories: "Actualités",
        date: "03.10.2023",
        title: "Bouquet de chantier du bâtiment B2: nouvelle étape clé pour la Suettaz à Nyon",
        content: "Le bouquet de chantier marquant la fin du gros-œuvre du bâtiment B2 vient concrétiser le développement du nouveau quartier exemplaire de la Suettaz.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-26.jpg`,
        imageAlt: "Actualités - 2 projets CCHE primés au Prix de l'immobilier romand 2023",
        categories: "Actualités",
        date: "27.09.2023",
        title: "2 projets CCHE primés au Prix de l'immobilier romand 2023",
        content: "Ce mardi 26 septembre s'est tenu la cérémonie du prix de l'immobilier romand 2023 lancé par le magazine Bilan, en collaboration avec le SVIT Romandie et vise à récompenser les projets immobiliers les plus remarquables réalisés en Suisse romande.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-27.jpg`,
        imageAlt: "Revue de presse - Malley Phare: Chantier du mois dans Batimag",
        categories: "Revue de presse",
        date: "29.09.2023",
        title: "Malley Phare: Chantier du mois dans Batimag",
        content: "Défi d’ingénierie, Malley Phare se joue de la gravité. Voir la revue de presse.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-28.jpg`,
        imageAlt: "Actualités - Le centre de congrès 2m2c à Montreux entame sa métamorphose",
        categories: "Actualités",
        date: "07.09.2023",
        title: "Le centre de congrès 2m2c à Montreux entame sa métamorphose",
        content: "Le début des travaux de rénovation du Centre de congrès et d’expositions de Montreux a été célébré en présence des autorités, mandataires et entreprises au cours d'un bouquet de chantier.",
        link: "javascript:void(0)"
      } ,
      {
        image: `/src/assets/image/actualites/a-29.jpg`,
        imageAlt: "Revue de presse - Permis de construire en force pour l'hôtel et le centre de formation du MIC",
        categories: "Revue de presse",
        date: "25.09.2023",
        title: "Permis de construire en force pour l'hôtel et le centre de formation du MIC",
        content: "Un nouveau centre de formation, comprenant trois bâtiments dont un hôtel, viendra enrichir l'offre du Marly Innovation Center dès 2026.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-30.jpg`,
        imageAlt: "Revue de presse - Malley Phare : 14 étages et l'exploit d'un squelette en bois",
        categories: "Revue de presse",
        date: "30.08.2023",
        title: "Malley Phare : 14 étages et l'exploit d'un squelette en bois",
        content: "Unique en Suisse romande avec sa structure en épicéa, l’immeuble «Malley Phare» se composera de 14 étages posés sur un bâtiment existant. Le chantier est une gageure.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-31.jpg`,
        imageAlt: "Actualités - Inauguration de l'Ecole de Pont-Rouge à Lancy",
        categories: "Actualités",
        date: "06.09.2023",
        title: "Inauguration de l'Ecole de Pont-Rouge à Lancy",
        content: "La ville de Lancy a inauguré hier officiellement le tout nouveau groupe scolaire de Pont-Rouge, une réalisation architecturale d'envergure qui ouvre de nouvelles perspectives éducatives.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-32.jpg`,
        imageAlt: "Communauté - Les Grillades de l'été 2023 : unir nos talents et construire l'avenir ensemble",
        categories: "Communauté",
        date: "24.08.2023",
        title: "Les Grillades de l'été 2023 : unir nos talents et construire l'avenir ensemble",
        content: "L'édition 2023 de la rencontre 'Les Grillades de l'été' réunissait la communauté CCHE pour la visite de la nouvelle école de Pont-Rouge à Lancy, projet développé et réalisé par le bureau, suivie d'une soirée grillades conviviale.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-33.jpg`,
        imageAlt: "Actualités - Quartier de l'étang : Les Atmosphères se dévoilent",
        categories: "Actualités",
        date: "28.08.2023",
        title: "Quartier de l'étang : Les Atmosphères se dévoilent",
        content: "Véritable porte d’entrée du quartier, l'îlot Les Atmosphères entre dans sa phase finale et se profile déjà comme LE lieu de rencontres, de découvertes et d’expériences pour les habitant.e.s, les travailleur.euse.s et les visiteur.euse.s.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-34.jpg`,
        imageAlt: "Revue de presse - On parle de Malley Phare au 12:45 de la RTS",
        categories: "Revue de presse",
        date: "25.07.2023",
        title: "On parle de Malley Phare au 12:45 de la RTS",
        content: "Focus sur la première tour résidentielle en structure bois de Suisse romande.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-35.jpg`,
        imageAlt: "Actualités - La nouvelle école de Pont-Rouge bientôt prête à accueillir ses premiers élèves",
        categories: "Actualités",
        date: "28.07.2023",
        title: "La nouvelle école de Pont-Rouge bientôt prête à accueillir ses premiers élèves",
        content: "La réalisation de la nouvelle Ecole de Pont-Rouge est à bout touchant et le bâtiment pourra accueillir ses premiers élèves dès la rentrée scolaire 2023.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-36.jpg`,
        imageAlt: "Actualités - Signalétique signée CCHE pour le nouveau siège MSF",
        categories: "Actualités",
        date: "19.07.2023",
        title: "Signalétique signée CCHE pour le nouveau siège MSF",
        content: "Le nouveau siège international de Médecins sans Frontières intègre une signalétique signée CCHE Design. Minimaliste, intuitif et flexible, le nouveau système d'orientation a été pensé pour différencier les informations d’orientation « invariables » de celles qui pourraient être « modifiables ».",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-37.jpg`,
        imageAlt: "Communauté - CCHE Sailing team : La voile comme vecteur de cohésion et de partage",
        categories: "Communauté",
        date: "20.07.2023",
        title: "CCHE Sailing team : La voile comme vecteur de cohésion et de partage",
        content: "Née d’une initiative interne au début d’année 2023, l’équipe de voile CCHE Sailing Team est composée d’une quinzaine de collègues de tous niveaux, confirmés comme débutants, qui naviguent sur un voilier « Grand Surprise », le Silène.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-38.jpg`,
        imageAlt: "Actualités - Bâches pour l’Écoquartier de l’Ancienne Papeterie",
        categories: "Actualités",
        date: "11.07.2023",
        title: "Bâches pour l’Écoquartier de l’Ancienne Papeterie",
        content: "L’écoquartier de Marly a amorcé sa seconde phase de construction, en lien direct avec la phase initiale achevée en 2022 qui regroupe des logements, activités, loisirs et commerces.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-39.jpg`,
        imageAlt: "Revue de presse - Deux réalisations CCHE en vue dans le New York Times",
        categories: "Revue de presse",
        date: "18.07.2023",
        title: "Deux réalisations CCHE en vue dans le New York Times",
        content: "Le New York Times fait découvrir quelques coups de coeur architecturaux vaudois, dont le Musée Atelier Audemars Piguet et l’Hôtel des Horlogers au Brassus. Nichés dans le paysage féerique et vallonné du Brassus, les deux ouvrages d’une extrême complexité technique sont le fruit d’une coopération fructueuse entre le bureau danois BIG Bjarke Ingels Group et CCHE.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-40.jpg`,
        imageAlt: "Actualités - Les Roseaux Grandson: vivre l'exceptionnel",
        categories: "Actualités",
        date: "27.06.2023",
        title: "Les Roseaux Grandson: vivre l'exceptionnel",
        content: "Découvrez 'Les Roseaux' à Grandson, deux bâtiments Minergie sobres et élégants, proposant 19 appartements spacieux de haut standing pieds dans l'eau, au bord du lac de Neuchâtel dans un environnement naturel unique et privilégié.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-41.jpg`,
        imageAlt: "Revue de presse - Les grattes-ciel en bois visent de plus en plus haut",
        categories: "Revue de presse",
        date: "10.07.2023",
        title: "Les grattes-ciel en bois visent de plus en plus haut",
        content: "Malley Phare: Lire l'article paru dans le Matin Dimanche",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-42.jpg`,
        imageAlt: "Revue de presse - Les grattes-ciel en bois visent de plus en plus haut",
        categories: "Revue de presse",
        date: "10.07.2023",
        title: "Les grattes-ciel en bois visent de plus en plus haut",
        content: "Malley Phare: Lire l'article paru dans le Matin Dimanche",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-43.jpg`,
        imageAlt: "Revue de presse - Domaine Barton: Une rénovation hors normes",
        categories: "Revue de presse",
        date: "26.06.2023",
        title: "Domaine Barton: Une rénovation hors normes",
        content: "Une rénovation tout en prouesses techniques. À Genève, le domaine Barton fait l’objet d’une rénovation complète sur deux ans, en vue de réhabiliter les bâtiments. Boiseries classées, séquoias imposants font partie des importantes contraintes du projet.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-44.jpg`,
        imageAlt: "Actualités - Isabelle de Montolieu : clos couvert",
        categories: "Actualités",
        date: "12.06.2023",
        title: "Isabelle de Montolieu : clos couvert",
        content: "Alors que le bouquet de chantier vient de célébrer la fin du clos couvert pour la réalisation de ce nouvel immeuble locatif préfabriqué en bois, place maintenant aux aménagements et équipements intérieurs et extérieurs.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-45.jpg`,
        imageAlt: "Actualités - Timoté Mopty, nommé architecte associé, rejoint la Direction de CCHE Nyon",
        categories: "Actualités",
        date: "14.06.2023",
        title: "Timoté Mopty, nommé architecte associé, rejoint la Direction de CCHE Nyon",
        content: "CCHE Nyon SA a le plaisir d’annoncer la nomination de Timoté Mopty, issu de ses propres rangs, comme nouvel architecte associé. Il rejoint Stéphanie Suard Dancet et Max Nack à la direction du bureau et affirme la volonté du groupe de se structurer afin de poursuivre son développement par la promotion de ses talents.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-46.jpg`,
        imageAlt: "Revue de presse - Le bois prend de la hauteur",
        categories: "Revue de presse",
        date: "01.05.2023",
        title: "Le bois prend de la hauteur",
        content: "En marge de la mise en place des premiers éléments en bois de la tour Malley Phare à Prilly, Migros Magazine consacre un dossier architecture à l'utilisation de ce matériau écologique dans le cadre des constructions hautes.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-47.jpg`,
        imageAlt: "Actualités - CCHE Genève s'installe au coeur du quartier de Plainpalais",
        categories: "Actualités",
        date: "12.06.2023",
        title: "CCHE Genève s'installe au coeur du quartier de Plainpalais",
        content: "Depuis son lancement en 2017, notre filiale genevoise n'a cessé d'évoluer pour mener à bien ses projets d’envergure. C’est donc dans des nouveaux locaux, situés au cœur du quartier des Bains à Plainpalais, que nos collègues poursuivront leur activité dès mi juin.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-48.jpg`,
        imageAlt: "Actualités - CCHE Porto se renforce et accueille un nouvel associé",
        categories: "Actualités",
        date: "04.04.2023",
        title: "CCHE Porto se renforce et accueille un nouvel associé",
        content: "CCHE Porto Lda a le plaisir d’annoncer la nomination de Michael Pereira, issu de ses propres rangs, comme nouvel architecte associé. Il rejoint Carolina Azevedo à la direction du bureau et vient renforcer la présence internationale du groupe.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-49.jpg`,
        imageAlt: "Communauté - Rencontre annuelle Tout un cinéma 2023",
        categories: "Communauté",
        date: "06.04.2023",
        title: "Rencontre annuelle Tout un cinéma 2023",
        content: "La dixième édition de Tout un cinéma était l'occasion de réunir l'ensemble des collaborateurs.trices CCHE pour découvrir le travail et les projets de chaque équipe au travers de clips diffusés sur grand écran au cinéma.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-50.jpg`,
        imageAlt: "Revue de presse - Un nouveau parc et un hôtel à Marly",
        categories: "Revue de presse",
        date: "23.03.2023",
        title: "Un nouveau parc et un hôtel à Marly",
        content: "Les trois nouveaux bâtiments qui formeront le secteur F du Marly Innovation Center ainsi que le Parc du Coteau ont été présentés à la population dans le cadre d'une séance d'information publique. La Liberté",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-52.jpg`,
        imageAlt: "Actualités - La pose des premiers éléments en bois dans le quartier Isabelle de Montolieu",
        categories: "Actualités",
        date: "14.03.2023",
        title: "La pose des premiers éléments en bois dans le quartier Isabelle de Montolieu a débuté",
        content: "La pose des premiers éléments en bois dans le quartier Isabelle de Montolieu a débuté",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-53.jpg`,
        imageAlt: "Actualités - Inauguration des nouveaux aménagements du centre de biométrie à Lausanne",
        categories: "Actualités",
        date: "21.03.2023",
        title: "Inauguration des nouveaux aménagements du centre de biométrie à Lausanne",
        content: "Les nouveaux locaux du centre de biométrie de Lausanne ont été inaugurés en présence de la Conseillère d’Etat Isabelle Moret",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-54.jpg`,
        imageAlt: "Actualités - Certification professionnelle BIM buildingSMART",
        categories: "Actualités",
        date: "23.01.2023",
        title: "Certification professionnelle BIM buildingSMART",
        content: "CCHE renforce son expertise en obtenant la certification professionnelle BIM délivrée par buildingSMART.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-55.jpg`,
        imageAlt: "Revue de presse - Quartier de la Suettaz à Nyon",
        categories: "Revue de presse",
        date: "21.02.2023",
        title: "Quartier de la Suettaz à Nyon : présentation du chantier par les équipes de Couleurs Locales (RTS - Radio Télévision Suisse Un)",
        content: "Interview d'Ilhan Yakut Büchler, Directeur Société coopérative d'habitation Lausanne et LSR SA, et de Stéphanie Suard, Architecte associée CCHE Nyon SA.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-56.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "15.12.2022",
        title: "CCHE 2022: innover, surprendre, évoluer",
        content: "Découvrez notre sélection des meilleurs moments de l'année",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-57.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "17.01.2023",
        title: "La découverte du campus The Hive",
        content: "Découvrez The Hive, un campus développé autour de l’humain et dédié à l’innovation et la technologie à Meyrin/Satigny.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-58.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "14.12.2022",
        title: "Quartier de l'Etang : livraison des aménagements intérieurs de l'îlot F1 | Les Fabriques Ouest",
        content: "Livraison des 4 premiers étages pour Les Fabriques Ouest",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-59.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "14.12.2022",
        title: "Avancement du chantier du Quartier de l'étang - Ilot A",
        content: "Découvrez le développement en cours de l'îlot « Les Atmosphères », emblème du quartier de l’Etang à Vernier.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-60.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "22.11.2022",
        title: "CCHE La Vallée s'étend et inaugure ses nouveaux locaux",
        content: "CCHE s’est implanté au Sentier en 2016, dans l’objectif de participer activement au développement économique et urbanistique de la Vallée de Joux en amenant dans la région les compétences d’un grand bureau au travers d’une structure à taille locale.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-61.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "29.11.2022",
        title: "Transformation du centre commercial Migros 'Chablais Centre'",
        content: "Découvrez en détails la transformation et mise aux normes du centre commercial Chablais Centre en cours.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-62.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "14.11.2022",
        title: "JOM 2022",
        content: "A la découverte des métiers CCHE.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-63.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "16.11.2022",
        title: "Bouquet de chantier de l'école de Pont-Rouge à Lancy",
        content: "La nouvelle école Adélaïde Sara Pictet-de-Rochemont propose d'implanter l'école au sein d'un parc d’apprentissage regroupant nature et culture dans un environnement proche et innovant.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-64.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "07.11.2022",
        title: "Concours Freistatt Thun: imaginer la cité-jardin du futur",
        content: "Le concours de projets en procédure sélective Freistatt Thun porte sur la planification et la réalisation d'un ensemble résidentiel sur le site de Freistatt 1.",
        link: "javascript:void(0)"
      },    
      {
        image: `/src/assets/image/actualites/a-65.jpg`,
        imageAlt: "Revue de presse",
        categories: "Revue de presse",
        date: "11.11.2022",
        title: "Quartier de l'étang : Créer un jardin suspendu pour booster les lieux de vie",
        content: "Découvrez l'interview de Daniel Grosso, Architecte associé dans le cahier des entreprises de la revue INSA",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-66.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "01.11.2022",
        title: "Aménagements paysagers du Grand’Rive Parc à Lausanne",
        content: "Dans le cadre d’un changement d’occupants, les nouveaux aménagements extérieurs réalisés par nos architectes paysagistes développent trois entités paysagères distinctes: L'Entrée, Les Jardins, Le Patio",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-67.jpg`,
        imageAlt: "Communauté",
        categories: "Communauté",
        date: "02.11.2022",
        title: "CCHE Communauté : Focus sur nos apprenti.e.s",
        content: "Présentation en mode micro-trottoir des équipes d'apprenti.e.s en cours de formation dans l'une des filiales CCHE.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-68.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "11.10.2022",
        title: "CCHE La Vallée se renforce et accueille une nouvelle associée",
        content: "Depuis 6 ans, CCHE la Vallée SA n’a cessé d’évoluer pour répondre aux nombreux défis d’un marché dynamique et toujours plus exigeant. Pour accompagner ce développement et pérenniser la filiale combière du groupe, la Direction a été renforcée et Marie Ståhl a été rejointe en septembre 2022 par Funda Kozanoglu, nouvelle architecte associée.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-69.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "20.10.2022",
        title: "Marly Innovation Center : habillage de façade en chantier",
        content: "Des bâches imprimées pour couvrir un bâtiment en construction",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-70.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "04.10.2022",
        title: "3ème participation à la Runmate avec la Team CCHE-Perspectives",
        content: "Après deux super éditions en 2020 et 2021, nos 8 mates ont relevé l'objectif qu'ils s'étaient donné de faire le tour en moins de 19h cette année.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-71.jpg`,
        imageAlt: "Revue de presse",
        categories: "Actualités",
        date: "10.10.2022",
        title: "À la Vallée, l’Hôtel des Horlogers essaie de suspendre le temps",
        content: "Déposée sur les flancs des combes combières, cette nouvelle prouesse architecturale a ouvert récemment ses portes. Un édifice unique. 24 Heures",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-72.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "28.09.2022",
        title: "2 projets CCHE primés au Prix de l'immobilier romand 2022",
        content: "Ce mardi 27 septembre s'est tenu la 11ème cérémonie du prix de l'immobilier romand 2022 présenté par le magazine Bilan et le SVIT Romandie qui récompense des projets immobiliers remarquables réalisés en Suisse romande. Deux projets CCHE se sont hissés sur la première marche du podium de leur catégorie.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-73.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "29.09.2022",
        title: "2e prix du Concours 'Hôpital des Enfants' à Genève",
        content: "CCHE Genève était associé aux architectes français Carta - Reichen et Robert pour développer une proposition dans le cadre du concours visant à projeter le futur Hôpital des Enfants à Genève.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-74.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "08.09.2022",
        title: "CCHE Imagine: Peanut Medieval Lodge St-Ursanne",
        content: "Le groupe Definitely Different a inauguré son nouvel hôtel Peanut Medieval Lodge à St-Ursanne. Niché au sein de la « Perle du Jura », l'hôtel du Bœuf a été intégralement rénové par CCHE avec un projet revisitant les codes de l’univers médiéval.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-75.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "21.09.2022",
        title: "CCHE acteur du développement de l'ouest lausannois",
        content: "La commune de Bussigny poursuit depuis quelques années une croissance régulière et divers quartiers sont en cours de développement avec l’objectif de proposer des lieux de vie de qualité en adéquation avec les besoins de la population.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-76.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "18.08.2022",
        title: "Inauguration de la piscine de Marly",
        content: "Située au cœur du développement de l'eco quartier 'Ancienne papeterie' sur le Marly Innovation Center, la nouvelle piscine couverte de Marly, première de Suisse labellisée Minergie-P, a été inaugurée ce jeudi matin.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-77.jpg`,
        imageAlt: "Communauté",
        categories: "Communauté",
        date: "31.08.2022",
        title: "Les Grillades de l’été : échange et convivialité",
        content: "La communauté CCHE était réunie jeudi dernier dans le cadre de la rencontre annuelle d’été du bureau. « Les Grillades de l’été », c’est l’occasion pour les collaborateurs.trices de l’ensemble des filiales de découvrir un chantier en cours de réalisation présenté par l’équipe du projet.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-78.jpg`,
        imageAlt: "Revue de presse",
        categories: "Actualités",
        date: "21.06.2022",
        title: "Construire et habiter autrement",
        content: "Le reportage du MIC dans le magazine Construction et Bâtiment, une édition Espaces Contemporains.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-79.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "03.08.2022",
        title: "Rénovation énergétique d’un bâtiment style lausannois",
        content: "La rénovation de bâtiment représente un des défis majeurs de la transition énergétique.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-80.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "09.06.2022",
        title: "Avancement du chantier du quartier Ancienne Papeterie à Marly",
        content: "Découvrez l'avancement du chantier à Marly chaque mois en vidéo.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-81.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "14.06.2022",
        title: "La mobilité durable",
        content: "L’engagement envers le développement durable est inscrit dans l'ADN du bureau, aussi bien en matière de gestion quotidienne des sites d'activité que dans le développement des projets d'architecture. Favoriser une mobilité durable et intelligente fait donc partie des priorités de nos différentes filiales.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-82.jpg`,
        imageAlt: "Revue de presse",
        categories: "Actualités",
        date: "07.06.2022",
        title: "Audemars Piguet inaugure l’hôtel des horlogers",
        content: "\"Le tout nouvel Hôtel des Horlogers ouvre officiellement ses portes le 2 juin au Brassus. Conçu par Bjarke Ingels Group et réalisé par le bureau suisse CCHE, il s’intègre parfaitement à cette Vallée de Joux, si bien préservée.\" Prestige Immobilier",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-83.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "08.06.2022",
        title: "Le jardin de Monsieur Budry",
        content: "Montre-moi ton jardin et je te dirai qui tu es.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-84.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "25.05.2022",
        title: "Nouvelle boutique Romain Gauthier dans le centre commercial Takashimaya Nihonbashi à Tokyo",
        content: "Conceptualisation d’un aménagement sur mesure pour le nouveau point de vente Romain Gauthier dans le centre commercial Takashimaya Nihonbashi à Tokyo.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-85.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "02.06.2022",
        title: "Retour en images sur le chantier de l’Hôtel des Horlogers",
        content: "On the occasion of the public opening of the ‘’Hôtel des Horlogers’’ in Brassus, we take a look back at this extraordinary project’s construction site with a presentation by our production teams.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-86.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "17.05.2022",
        title: "Nouvelle filiale CCHE à Zürich",
        content: "Le groupe CCHE s’implante de manière durable en Suisse allemande avec une nouvelle filiale CCHE Zürich AG. Active depuis avril 2022, notre nouvelle entité propose la même palette de prestations avec le niveau d’exigence CCHE, pour le développement de projets à toutes échelles avec une vision à la fois économique, écologique et sociale.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-87.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "19.05.2022",
        title: "La culture de la collaboration constitue un point d’ancrage fondamental pour CCHE",
        content: "La culture de la collaboration constitue un point d’ancrage fondamental pour CCHE.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-88.jpg`,
        imageAlt: "Communauté",
        categories: "Communauté",
        date: "06.04.2022",
        title: "Tout un cinéma",
        content: "Chaque année, le bureau réunit l’ensemble des collaboratrices.teurs pour découvrir le travail et les projets de leurs collègues au travers de clips diffusés sur grand écran au cinéma.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-89.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "12.04.2022",
        title: "Chablais Centre - Le projet de transformation a démarré !",
        content: "Le projet de transformation de Chablais Centre a démarré !",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-90.jpg`,
        imageAlt: "Revue de presse",
        categories: "Actualités",
        date: "04.04.2022",
        title: "LEM, nouveau locataire-clé du Campus The Hive",
        content: "Le groupe suisse de composants électriques transfère son siège genevois, ses activités de recherche et développement et une unité de production sur le campus technologique 'The Hive' à Meyrin-Satigny.",
        link: "javascript:void(0)",
        
      },
      {
        image: `/src/assets/image/actualites/a-91.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "22.03.2022",
        title: "MIPIM 2022",
        content: "CCHE était présent au MIPIM 2022, le plus grand salon à destination des professionnels de l'immobilier.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-92.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "17.02.2022",
        title: "CCHE termine trois nouvelles transformations et rénovations pour le Crédit Agricole next bank",
        content: "Dans la continuité du CANB – Crédit Agricole next bank (Suisse) SA en 2019, CCHE a terminé la rénovation et transformation intérieure de trois agences supplémentaires du Crédit Agricole.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-93.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "16.02.2022",
        title: "Résidence étudiante du Grand Morillon",
        content: "Un travail main dans la main avec le bureau Kengo Kuma pour le développement de la Résidence Etudiante du Grand Morillon, un lieu de vie d’une grande rigueur architecturale et technique.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-94.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "07.02.2022",
        title: "Campus The Hive Meyrin",
        content: "Dès le départ, le développement du campus The Hive a été appuyé sur une réflexion sociale et environnementale: l'idée principale étant d'aboutir à la mutation d'une zone péri-urbaine en campus technologique à dimension humaine, ancré au coeur d'une forêt.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-95.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "27.01.2022",
        title: "Retour en images sur le chantier du Peanut Mountain Lodge",
        content: "Ce projet a pu être mené en un temps record grâce à la collaboration pluridisciplinaire et la réactivité des équipes CCHE.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-96.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "19.01.2022",
        title: "CCHE Digital : apporter un autre regard aux développements architecturaux",
        content: "Active au sein du bureau depuis plus d'une année, l'équipe CCHE Digital accompagne les développements du bureau avec des outils innovants à même d'apporter un autre éclairage aux projets et de les porter plus loin.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-97.jpg`,
        imageAlt: "Revue de presse",
        categories: "Actualités",
        date: "24.01.2022",
        title: "Le bois est de plus en plus utilisé dans les constructions de grande envergure: interview de Matylda Benoist",
        content: "L'interview de Matylda Benoist met en lumière l'utilisation croissante du bois dans les constructions de grande envergure, soulignant ses avantages et son impact sur l'architecture contemporaine.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-98.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "17.01.2022",
        title: "Bétonnage du grand plongeoir de la piscine de Marly en images",
        content: "Découvrez l'avancement des différentes étapes du projet de la piscine de Marly à travers des images illustrant le bétonnage du grand plongeoir.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-99.png`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "16.12.2021",
        title: "Meilleurs vœux pour 2022 - Visionnez la rétrospective de l'année CCHE",
        content: "Le bureau CCHE souhaite à tous une excellente année 2022. Visionnez la rétrospective de l'année écoulée, mettant en lumière les moments marquants et les réalisations du bureau.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-100.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "15.12.2021",
        title: "Découvrez le Peanut Mountain Lodge Val D'Illiez",
        content: "Explorez le Peanut Mountain Lodge, un hôtel décalé conçu pour les montagnards décontractés. Imaginé par Definitely Different Hôtel Group, il a été entièrement transformé par CCHE pour accueillir un aménagement au design unique et surprenant.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-101.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "09.12.2021",
        title: "CCHE remporte le MEP pour la rénovation du MAMCO avec le bureau berlinois Kuehn Malvezzi",
        content: "Le projet lauréat déploie des solutions techniques pour opérer la réorganisation des espaces intérieurs et espaces d’exposition ainsi que l'ajout de grandes ouvertures en façade au niveau de l'entrée en touchant le moins possible ce bâtiment emblématique.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-103.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "17.11.2021",
        title: "Fin des travaux pour le collège des Dents du Midi",
        content: "Les travaux pour le collège des Dents du Midi sont officiellement terminés. Cette réalisation marque une étape importante, offrant un nouvel environnement d'apprentissage aux étudiants.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-104.jpg`,
        imageAlt: "Actualités",
        categories: "Communauté",
        date: "08.11.2021",
        title: "Inauguration des nouveaux locaux de l'ORP à Gland",
        content: "Les nouveaux locaux de l'Office régional de placement (ORP) à Gland, aménagés par l'équipe de CCHE Nyon au sein du bâtiment SEIC, ont été inaugurés. La cérémonie a été présidée par le président de la Confédération Guy Parmelin, en présence de la conseillère d’État Rebecca Ruiz et du conseiller d’État Philippe Leuba.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-105.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "08.11.2021",
        title: "Perspectives Construction obtient la certification EcoEntreprise",
        content: "Perspectives Construction a obtenu la certification EcoEntreprise, marquant une évolution importante et posant les bases d'un modèle d'entreprise et d'une gouvernance en accord avec la philosophie et les valeurs du bureau.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-106.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "28.10.2021",
        title: "Le projet 'Génération ß' - 2ème rang / 1er achat du concours d’idée Gaswerkareal Berne",
        content: "Le bureau CCHE a obtenu le deuxième rang / premier achat avec son projet 'Génération ß' lors du concours d’idée Gaswerkareal Berne, parmi un total de 35 participants. L'idée urbanistique prévoit un quartier dynamique, flexible et écologique, bien intégré à l'espace vert existant et très bien relié à la zone environnante. Elle offre également des typologies innovantes pour répondre aux besoins des générations futures.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-107.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "20.10.2021",
        title: "Certification BIM buildingSMART pour l'équipe de pilotage BIM",
        content: "L'équipe de pilotage BIM a obtenu la Certification professionnelle buildingSMART International. Cette certification valide les connaissances liées au BIM d’une manière standardisée et reconnue à l’échelle internationale.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-108.jpg`,
        imageAlt: "Revue de presse",
        categories: "Revue de presse",
        date: "18.10.2021",
        title: "Le reportage du magazine Nouvo sur le projet Malley Phare",
        content: "Le magazine Nouvo de la RTS s'intéresse aux constructions en bois, mettant en lumière la tour de 14 étages du projet Malley Phare.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-109.jpg`,
        imageAlt: "Communauté",
        categories: "Communauté",
        date: "08.10.2021",
        title: "Runmate : Une 2e édition avec la Team CCHE",
        content: "La Team CCHE a pris le départ pour sa 2e participation à la Runmate, une course de 215 km en relais sur un itinéraire autour du lac Léman.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-110.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "29.09.2021",
        title: "3 projets CCHE sur le podium du Prix Bilan de l’Immobilier 2021",
        content: "Parmi les nombreuses candidatures soumises au Prix Bilan de l’Immobilier 2021, trois projets CCHE ont été salués par le jury et occupent une place sur le podium de leurs catégories respectives.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-111.jpg`,
        imageAlt: "Communauté",
        categories: "Communauté",
        date: "08.09.2021",
        title: "My Visit CCHE : 2e édition de nos visites de chantier en live streaming",
        content: "Ce jeudi 2 septembre, c'est un projet hors norme qui a été présenté aux collaborateurs CCHE dans le cadre des visites d'architecture diffusées en live streaming \"My Visit\". Ce sont les acteurs principaux du projet qui ont fait découvrir le quartier du Marly Innovation Center et ses spécificités à leurs collègues.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-112.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "15.09.2021",
        title: "Visite SIA automne 2021 - Incyte (Pasta Gala)",
        content: "La SIA met la transformation du bâtiment Incyte à l'honneur, il sera présenté par l'équipe du projet, Marc Fischer, Sara Centeno lors des Visites SIA.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-113.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "04.08.2021",
        title: "En immersion sur le chantier The Hive 8",
        content: "Découvrez une immersion complète sur le chantier The Hive 8, où chaque étape du processus de construction est mise en avant pour une expérience captivante.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-114.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "19.08.2021",
        title: "Série estivale en collaboration avec l'illustrateur Marchettiblink",
        content: "Certains de nos projets phares sont mis en lumière grâce à la collaboration avec l'illustrateur Marchettiblink dans le cadre d'une série estivale captivante.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-115.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "21.07.2021",
        title: "La construction de la tour Malley Phare pourra débuter en janvier 2022",
        content: "Tous les feux sont au vert pour la surélévation du centre Malley Lumières avec une tour en structure bois de 60 mètres. Le chantier, confié au consortium Perspectives Construction – JPF Ducrest pourra débuter dès janvier 2022.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-116.jpg`,
        imageAlt: "Revue de presse",
        categories: "Revue de presse",
        date: "27.07.2021",
        title: "L’emblème triangulaire de la «corporate architecture»",
        content: "Nous avons le plaisir d’accompagner Debiopharm depuis 2004 dans la transformation de ce bâtiment classé avec des interventions visant non seulement à révéler l’architecture et les matériaux de la réalisation initiale, tout en améliorant l’orientation au sein de ce bâtiment triangulaire et en apportant de la lumière au coeur de l’édifice.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-117.jpg`,
        imageAlt: "Revue de presse",
        categories: "Revue de presse",
        date: "19.07.2021",
        title: "On ne conçoit pas un banc de la même manière pour une maison de maître ou un métro",
        content: "Promenade avec le Mudac et le 24heures au travers de la ville de Lausanne et de ses bancs publics.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-118.jpg`,
        imageAlt: "Articles",
        categories: "Articles",
        date: "19.07.2021",
        title: "Outils de design paramétrique",
        content: "CCHE a réuni en 2020 des infographes, designer, spécialistes BIM ou designer paramétriques au sein d’un groupe spécialisé CCHE Digital, qui œuvre sur le développement d’outils numériques pour le travail de conception des projets.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-119.JPG`,
        imageAlt: "Revue de presse",
        categories: "Revue de presse",
        date: "01.07.2021",
        title: "Interview de Carolina Azevedo dans la revue portugaise Valor Magazine",
        content: "Valor Magazine, la revue économique portugaise, s’intéresse au bureau CCHE Porto et donne la parole à son associée Carolina Azevedo pour un éclairage sur les qualités de cette filiale pluridisciplinaire influencée par différentes cultures et sur son évolution.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-120.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "15.07.2021",
        title: "Portrait d’apprentis",
        content: "La formation se situe au cœur des préoccupations de CCHE et fait partie intégrante des valeurs du bureau.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-121.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "30.06.2021",
        title: "Perspectives Construction : allier qualité architecturale et garanties contractuelles",
        content: "Développée en 2018, l’entité Perspectives Construction SA complète idéalement la palette de prestations CCHE, en proposant sous la forme de contrats en entreprise générale ou totale, la réalisation de biens immobiliers clé en mains, à des prix et des délais garantis.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-122.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "07.06.2021",
        title: "La Luigia Academy ouvre ses portes à Meyrin",
        content: "Le pavillon implanté au coeur du campus The Hive à Meyrin réunit sous le même toit un restaurant de 200 places avec terrasse, une école de cuisine ouverte à tous et un centre de formation interne.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-123.jpg`,
        imageAlt: "Revue de presse",
        categories: "Revue de presse",
        date: "07.06.2021",
        title: "Bella Vista, une vue imprenable sur le lac de Neuchâtel",
        content: "Bella Vista, complexe Minergie de 288 logements qui redéfinira entièrement l'âme de tout un quartier, est présenté dans la revue Immobilier.ch.",
        link: "javascript:void(0)"
      },
      {
        image: `/src/assets/image/actualites/a-124.jpg`,
        imageAlt: "Actualités",
        categories: "Actualités",
        date: "27.05.2021",
        title: "Halles CFF Sébeillon",
        content: "Les halles CFF de Sébeillon, espace industriel atypique, accueillent désormais un espace d’activités sportives et culturelles.",
        link: "javascript:void(0)"
      },
      {
            image: `/src/assets/image/actualites/a-125.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "03.06.2021",
            title: "L'utilisation du bois pour la construction d'immeubles de grande taille",
            content: "Les évolutions technologiques et l'assouplissement des normes permettent de construire des immeubles de grande taille en bois. Focus sur le projet Malley Phare dans le quotidien Le Temps.",
            link: "javascript:void(0)"
        },
        {
            image: `/src/assets/image/actualites/a-126.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "30.04.2021",
            title: "Présentation d'une villa d'exception dans La Côte",
            content: "Rencontre avec Anne Devaux, journaliste du quotidien La Côte, pour la visite d'une villa d'exception située sur les rives du lac Léman.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-127.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "05.05.2021",
            title: "CCHE est mandataire à l'honneur sur le site d'Urban Project",
            content: "CCHE est mis à l'honneur par la société de développement et de pilotage de projet Urban Project dans le cadre de la belle collaboration pour le développement du Quartier de l'Etang - îlot A à Vernier.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-128.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "28.04.2021",
            title: "CCHE reçoit le prix Bilan des « Meilleurs Employeurs 2021 »",
            content: "CCHE remporte le premier prix du classement du prix Bilan des meilleurs employeurs, catégorie « Immobilier ». Ce résultat salue les mesures et nouveautés RH déployées durant l’année 2020 par le bureau.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-129.jpg`,
            imageAlt: "Communauté",
            categories: "Communauté",
            date: "21.04.2021",
            title: "My Visit CCHE : une autre façon de se réunir autour de l’architecture",
            content: "Nouveau format d’événement destiné aux collaborateurs du groupe CCHE, My Visit propose de suivre des visites guidées de réalisation en cours en diffusion live streaming.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-131.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "29.04.2021",
            title: "Bella Vista, un écoquartier d'ici à 2023",
            content: "290 appartements vont sortir de terre d’ici à 2023 à l'avenue du Vignoble à Neuchâtel et formeront le nouveau quartier Bella Vista.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-132.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "15.04.2021",
            title: "Le SEIC dans IDEA",
            content: "Description de la présence et du rôle du SEIC dans le magazine IDEA.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-133.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "26.04.2021",
            title: "Mobilier métro m2 Lausanne: des assises tout terrain",
            content: "Développé lors d’un concours international en 2008, ce mobilier urbain a dû s’adapter pour répondre à des contraintes d’utilisation et de sécurité élevée.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-134.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "01.04.2021",
            title: "La Résidence étudiante du Grand Morillon dans Batimag",
            content: "Présentation de la Résidence étudiante du Grand Morillon dans la revue Batimag.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-135.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "15.04.2021",
            title: "Avancement du chantier du quartier Petite Prairie 2 à Nyon",
            content: "Découvrez les dernières avancées sur le chantier du quartier Petite Prairie 2 à Nyon, un projet passionnant en développement.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-136.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "24.03.2021",
            title: "Le Grand Chemin Nord dans le 24 heures",
            content: "Découvrez les détails sur le projet du Grand Chemin Nord à Epalinges, où deux bâtiments s'approprient leur espace, dans l'édition du 24 heures.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-137.jpg`,
            imageAlt: "Articles",
            categories: "Articles",
            date: "02.04.2021",
            title: "L'exploration des formes dans l'architecture",
            content: "Découvrez comment les outils de dessin paramétrique permettent d’explorer avec une extrême réactivité les formes idéales dans notre architecture. Présentation d’un escalier hélicoïdal, de la première esquisse à la pose.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-138.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "16.02.2021",
            title: "Piscine de Marly",
            content: "Construction d’une piscine scolaire et publique à l’interface entre le Marly Innovation Center et l’éco-quartier de l’Ancienne papeterie.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-139.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "31.03.2021",
            title: "CCHE Nyon obtient la certification EcoEntreprise",
            content: "CCHE Nyon a intégré depuis de nombreuses années les enjeux liés au développement durable dans ses réflexions et réalisations. Un engagement interne et externe qui vient d’être concrétisé par l’obtention de la certification EcoEntreprise.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-140.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "25.01.2021",
            title: "Le MAAP dans Architecture & Construction",
            content: "\"CCHE, un bureau qui a su garder un esprit de start-up\"",
            link: "javascript:void(0)"
          },
        {
            image: `/src/assets/image/actualites/a-141.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "07.01.2021",
            title: "Le MAAP se fait remarquer!",
            content: "Le MAAP est distingué par un premier prix « Best of Year Awards 2020 » du magazine Interior Design et une nomination au « Dezeen's top 10 museums and galleries of 2020 »",
            link: "javascript:void(0)"
        },
        {
            image: `/src/assets/image/actualites/a-142.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "25.02.2021",
            title: "Mise à l’enquête du quartier de la Suettaz",
            content: "Le quartier de la Suettaz est actuellement en phase de mise à l'enquête. Découvrez les détails et participez au processus.",
            link: "javascript:void(0)"
        },
        {
            image: `/src/assets/image/actualites/a-143.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "05.01.2021",
            title: "Développement de l'îlot « Les Atmosphères », emblème du quartier de l’Etang à Vernier",
            content: "CCHE est au cœur de la mutation du Quartier de l’Etang à Vernier avec le développement de l’îlot « Les Atmosphères », pièce urbaine principale et porte d’entrée du site.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-144.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "03.02.2021",
            title: "Cornélia Volkringer nommée associée de CCHE Genève SA",
            content: "La nomination de Cornélia Volkringer en tant qu'associée de CCHE Genève SA renforce davantage l'équipe dirigeante de CCHE, reflétant son engagement et sa contribution significative au sein du bureau.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-145.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "21.01.2021",
            title: "Musée atelier Audemars Piguet",
            content: "La restauration du bâtiment historique 'La Maison des fondateurs', connecté à la spirale de verre, constitue un projet emblématique dans le cadre du musée-atelier Audemars Piguet.",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-146.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "20.11.2020",
            title: "Le rooftop de la tour Bel-Air star d’un jour",
            content: "",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-147.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "06.01.2021",
            title: "Feu vert pour le projet Gare Nord-Schenk à Rolle",
            content: " Le plan de quartier Gare Nord-Schenk, entré définitivement en vigueur courant 2020, autorise désormais le lancement du projet de reconversion d’un site industriel en quartier mixte. ",
            link: "javascript:void(0)"
          },
          {
            image: `/src/assets/image/actualites/a-148.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "18.11.2020",
            title: "Malley Phare",
            content:"Mise à l’enquête de la première tour en structure bois de Suisse romande" ,
            link: "javascript:void(0)"         
        },
        {
            image: `/src/assets/image/actualites/a-149.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 15.12.2020",
            title: "Meilleurs voeux pour 2021",
            content:"Visionnez la rétrospective de l'année CCHE",
            link: "javascript:void(0)"          
        },
        {
            image: `/src/assets/image/actualites/a-150.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 08.10.2020",
            title: "La nouvelle école de Lancy sera signée CCHE",
            content:"Le projet lauréat <<Au fil des Saisons>> propose d'implanter l'école au sein d'un parc d’apprentissage regroupant nature et culture dans un environnement proche et innovant",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-151.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 18.11.2020",
            title: "Présentation du projet Malley Phare",
            content:"Découvrez Malley Phare, la première tour en structure bois de Suisse romande !" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-152.jpg`,
            imageAlt: "Communauté",
            categories: "Communauté",
            date: " 28.09.2020",
            title: "La CCHE running team a couru la Runmate ce week-end",
            content:"Le but de cette course, faire le tour du Lac Léman sur un magnifique itinéraire de près de 210km en équipe, entre “mates” et partager des moments inoubliables.",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-153.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 14.10.2020",
            title: "CCHE lauréat du concours \"Aux Acacias\" à Genève",
            content:"Que l’on traverse le pont des Acacias ou que l’on vienne depuis le quartier de l’Etoile, on aboutira sur l’une des pièces majeures de la future métropole genevoise.",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-154.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 24.09.2020",
            title: " Changement au sein du Conseil d’administration de CCHE Nyon SA",
            content:"CCHE Nyon, première filiale du groupe et exemple de réussite d'un modèle privilégiant la proximité territoriale, poursuit sa croissance et occupe désormais près de 30 collaborateurs.",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-155.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 29.09.2020",
            title: " CCHE Lauréat du concours pour le futur quartier Ley Outre à Crissier",
            content:"Le jury a décerné le 1er prix au projet Ley Outre de CCHE pour le développement d’un site stratégique à l’est de la commune de Crissier",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-156.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: " 04.09.2020",
            title: " 2e place du prix Bilan des meilleurs employeurs",
            content:" CCHE se positionne une nouvelle fois sur le podium du prix Bilan des meilleurs employeurs",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-157.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 04.09.2020",
            title: " Metro M3",
            content:"  4 stations de la nouvelle ligne de métro m3 conçues et réalisées par CCHE" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-158.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 13.08.2020",
            title: " Nos chantiers vus du ciel",
            content:"  4 stations de la nouvelle ligne de métro m3 conçues et réalisées par CCHE" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-160.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "17.09.2020",
            title: " Le Musée Atelier Audemars Piguet lauréat du prix Bilan de l’immobilier",
            content:"Le Musée Atelier Audemars Piguet remporte le 1er prix de la catégorie « Bâtiment public » lors du Prix Bilan de l’Immobilier 2020"   ,
            link: "javascript:void(0)"    
        },
        {
            image: `/src/assets/image/actualites/a-161.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 07.07.2020",
            title: "Fin des travaux pour le nouveau siège d'Incyte à Morges",
            content:"        Découvrez les aménagements intérieurs et l'atrium de l'ancienne usine Pasta Gala, transformés pour accueillir le nouveau siège d'Incyte"  ,
            link: "javascript:void(0)"     
        },
        {
            image: `/src/assets/image/actualites/a-162.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 24.08.2020",
            title: "Tous unis derrière le 2m2c",
            content:"  Le nouveau projet pour la rénovation du 2m2c sera soumis au vote populaire le 27 septembre prochain",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-163.png`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: " 10.06.2020",
            title: " L'infographie chez CCHE",
            content:" Etat des lieux sur le déploiement de l’infographie chez CCHE aujourd’hui" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-164.jpg`,
            imageAlt: "  Communauté",
            categories: "  Communauté",
            date: "13.07.2020",
            title: " CCHE @ Work",
            content:" Certaines de nos habitudes quotidiennes ont été chamboulées, mais le plaisir de collaborer, de célébrer et de se dépasser est toujours aussi présent" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-165.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "    23.04.2020",
            title: " Dedale de CCHE remporte le Red Dot Design Award 2020",
            content:"Dedale, la nouvelle gamme de dalles en béton pressé produite par Godelmann et conçue par CCHE design, a remporté le Red Dot Design Award 2020 dans la catégorie \"urban design\"",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-167.jpg`,
            imageAlt: " Revue de presse",
            categories: " Revue de presse",
            date: " 22.06.2020",
            title: " « Ce projet d’exception révèle la créativité et la précision de chaque intervenant »",
            content:"Présentation du Musée Atelier Audemars Piguet dans le 24Heures" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-168.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "20.04.2020",
            title: " La dis­tan­cia­tion so­ciale res­pon­sa­bi­lise l’ap­port de tous au tra­vail col­lec­tif",
            content:"Pour la direction du bureau CCHE, la crise liée au Covid-19 ouvre une nouvelle aire de travail collaboratif qui influencera indéniablement le quotidien privé et professionnel" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-169.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "03.06.2020",
            title: " CCHE dans PME Magazine",
            content:"Le graal pour un bureau d’architecture lausannois" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-170.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "10.02.2020            ",
            title: " Le plan de quartier de la Suettaz à Nyon plébiscité par 68,6% des votants",
            content:"Les Nyonnais ont plébiscité le plan de quartier par 68,61% d’avis favorables : les 4 îlots d’immeubles de la Suettaz seront construits" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-171.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "22.04.2020",
            title: " Fin de la construction du Musée Atelier Audemars Piguet",
            content:" Le Musée Atelier Audemars Piguet, qui réunit la Maison des Fondateurs à une spirale de verre ultra-contemporaine, est prêt à accueillir ses premiers visiteurs dès l’été prochain",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-173.jpg`,
            imageAlt: "Communauté",
            categories: "Communautés ",
            date: "07.04.2020",
            title: " CCHE @ Home",
            content:"  Suite à la situation sanitaire actuelle, la grande majorité de nos collaborateurs sont déployés en télétravail afin d’assurer la continuité de notre activité" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-174.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "06.11.2019",
            title: " LEM devient un nouveau locataire du campus technologique « The Hive »",
            content:"LEM transfère son siège genevois, ses activités de recherche et développement et une unité de production sur le site HIAG « The Hive » à Meyrin (GE)" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-175.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "07.01.2020",
            title: " Démarrage du chantier du quartier Ancienne Papeterie à Marly",
            content:"Le chantier a commencé pour le premier quartier durable du canton qui prévoit pour sa première phase quelques 400 logements" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-176.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "09.07.2019",
            title: " More than Architecture…",
            content:"Les équipes pluridisciplinaires investies dans tous les développements CCHE envisagent chaque projet sous un angle transversal pour lui insuffler vision, cohérence et précision"  ,
            link: "javascript:void(0)"     
        },
        {
            image: `/src/assets/image/actualites/a-177.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "30.10.2019",
            title: " Prix Bilan de l’Immobilier 2019 – 2e prix",
            content:"Nous remportons le 2e prix dans la catégorie \"Aménagement intérieur\"",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-178.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "25.06.2019",
            title: " CCHE vers de nouveaux horizons",
            content:"Nouveau développement en Suisse alémanique"  ,
            link: "javascript:void(0)"     
        },
        {
            image: `/src/assets/image/actualites/a-179.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "04.07.2019",
            title: "2e prix pour le concours de l’extension du Tribunal Cantonal à l’Hermitage",
            content:"L’objectif de ce concours est la construction de l’extension du Tribunal cantonal (TC) à l’Hermitage, afin de réunir les cours sur un seul site" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-180.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse ",
            date: "11.04.2019",
            title: " Podium du Prix Bilan des meilleurs employeurs",
            content:"CCHE est élu 3e meilleur employeur de la catégorie \"Immobilier et Construction\" par le magazine Bilan" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-181.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "16.05.2019",
            title: "More than just a hotel…",
            content:"Réflexion sur un projet d’hébergement sur-mesure pour un campus high-tech",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-182.jpg`,
            imageAlt: "Actualité",
            categories: "Actualité ",
            date: "18.02.2019",
            title: " Valorisation de l’une des premières bâtisses en béton armé de Suisse.",
            content:"Mandat exclusif pour la mise en valeur du Manoir de Haute Roche et la recherche d’acquéreur",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-183.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse ",
            date: "11.03.2019",
            title: "BIM @ CCHE dans Batimag",
            content:"Maîtriser le BIM par l’anticipation et la communication" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-184.jpg`,
            imageAlt: "Communauté",
            categories: "Communauté ",
            date: "20.12.2018",
            title: "Revivez 2018 avec CCHE !",
            content:"Toute l’équipe CCHE vous souhaite de belles fêtes de fin d’année !",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-185.png`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse ",
            date: "22.01.2019",
            title: "CCHE et la réalité virtuelle dans Le Temps",
            content:"Quand la réalité virtuelle épouse la pierre"  ,
            link: "javascript:void(0)"     
        },
        {
            image: `/src/assets/image/actualites/a-186.jpg`,
            imageAlt: "Communauté",
            categories: "Communauté ",
            date: "29.10.2018",
            title: "CCHE Lauréat du concours «Les Communaux d’Ambilly», pièce A4",
            content:"CCHE lauréat de la pièce A4 au concours qui portait sur les deux dernières pièces urbaines des communaux d’Ambilly à Thônex (GE)" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-187.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "12.12.2018",
            title: "Transformation de l’usine Pastagala à Morges",
            content:"L’ancienne usine Pastagala à Morges a initié sa mue visant à accueillir le siège européen de la société Incyte Biosciences International" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-188.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "25.09.2018",
            title: "Les Logis de Prilly : un lieu de vie mêlant mixité sociale et mobilité douce",
            content:"Découvrez le projet des Logis de Prilly en vidéo !" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-189.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités ",
            date: "16.10.2018",
            title: "Implantation de l’enseigne de restauration italienne Luigia dans le campus «The Hive»",
            content:"Une deuxième réalisation pour CCHE sur le site « The Hive » en collaboration avec HIAG",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-190.jpg`,
            imageAlt: "Actualités",
            categories: "Actualités",
            date: "05.06.2018",
            title: "Première pierre de l’Hôtel des Horlogers posée",
            content:"La première pierre du nouvel hôtel des Horlogers d'Audemars Piguet a été posée lundi au Brassus, dans la Vallée de Joux "  ,
            link: "javascript:void(0)"     
        },
        {
            image: `/src/assets/image/actualites/a-191.jpg`,
            imageAlt: "Communauté",
            categories: "Communauté ",
            date: "28.09.2017",
            title: "CCHE s’associe avec CLM-ARCHITECTES pour la création de CCHE Genève SA",
            content:""  ,
            link: "javascript:void(0)"     
        },
        {
            image: `/src/assets/image/actualites/a-192.jpg`,
            imageAlt: "Revue de presse",
            categories: "Revue de presse",
            date: "05.06.2018",
            title: "CCHE dans IDEA",
            content:"CCHE c'est penser ensemble" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-193.jpg`,
            imageAlt: "Actualité",
            categories: "Actulité ",
            date: "05.02.2018",
            title: "Concours Maison de l’Environnement",
            content:" Appel d'offre en entreprise totale en collaboration avec Steiner SA",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-194.jpg`,
            imageAlt: "Actualité",
            categories: "Actualité",
            date: "15.11.2017",
            title: "Nouvelle collaboration entre Kengo Kuma et CCHE",
            content:"Suite à l’excellente collaboration avec le bureau Kengo Kuma sur le projet ArtLab, nous sommes fiers d’annoncer le démarrage d'une nouvelle aventure commune",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-195.jpg`,
            imageAlt: "Actualité",
            categories: "Actulité ",
            date: "16.11.2017",
            title: "CCHE lauréat du MEP pour un projet de transformations d’un bâtiment scolaire à Aigle",
            content:"CCHE a remporté le 1er prix du MEP pour un projet de transformation d'un bâtiment scolaire et d'une salle de gymnastique",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-196.jpg`,
            imageAlt: "Communauté",
            categories: "Communauté",
            date: "28.09.2017",
            title: "CCHE s’associe avec CLM-ARCHITECTES pour la création de CCHE Genève SA",
            content:"" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-197.jpg`,
            imageAlt: "Actualité",
            categories: "Actulité ",
            date: "10.10.2017",
            title: "Inauguration du nouveau siège HP Enterprise/HP Inc",
            content:"Aujourd'hui a eu lieu l'inauguration du nouveau siège HP Enterprise/HP Inc à Meyrin réalisé par CCHE" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-198.jpg`,
            imageAlt: "Actualité",
            categories: "Actualité",
            date: " 14.03.2017",
            title: "CCHE est désigné lauréat du MEP pour le futur visage d’Avry Centre à Fribourg",
            content:"Nous sommes fiers de vous annoncer que ce projet d'envergure, développé en partenariat avec le bureau Magizan, a été désigné lauréat à l’unanimité du jury",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-199.jpg`,
            imageAlt: "Actualité",
            categories: "Actulité ",
            date: "27.06.2017",
            title: "CCHE Lauréat du concours pour la réalisation d’un quartier durable à Neuchâtel",
            content:"CCHE remporte le concours \"Bella Vista\" à l’unanimité du jury",
            link: "javascript:void(0)"       
        },
        {
            image: `/src/assets/image/actualites/a-200.jpg`,
            imageAlt: "Actualité",
            categories: "Actulité ",
            date: "11.11.2016",
            title: "Inauguration du ArtLab de Kengo Kuma et CCHE comme partenaire local",
            content:"Le bâtiment ArtLab, autrefois connu sous le nom de « Under One Roof », de l'architecte japonais Kengo Kuma, a été inauguré jeudi 3 novembre à l'EPFL"  ,
            link: "javascript:void(0)"     
        },
        {
            image: `/src/assets/image/actualites/a-201.jpg`,
            imageAlt: "Actualité",
            categories: "Actualité",
            date: " 20.09.2015",
            title: "Nouveaux Associés pour un avenir pérenne",
            content:"" ,
            link: "javascript:void(0)"      
        },
        {
            image: `/src/assets/image/actualites/a-202.jpg`,
            imageAlt: "Actualité",
            categories: "Actulité ",
            date: "22.09.2015",
            title: "Fin du chantier du centre commercial Delta à Conthey",
            content:"Dans cette zone commerciale très active, nous avions la mission de développer sur une parcelle triangulaire un bâtiment représentatif qui se démarque du reste de la zone commerciale, tout en intégrant un maximum de places de parc." ,
            link: "javascript:void(0)"      
        }, 
  ];
  export default actualityDatas ;
  

  