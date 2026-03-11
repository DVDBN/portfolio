import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

// {
//   "title": "Développement d’un outil interne d’analyse commerciale",
//   "company": "CBD’EAU - Duttlenheim (2023, 1 an)",
//   "situation": "L’entreprise utilisait PrestaShop....",
//   "task": "Concevoir et développer un....",
//   "action": "Au sein ...",
//   "result": "Le nouvel outil a remplacé la s...."
// }

const skills = [
  {
    "title": "Développement d’un outil interne d’analyse commerciale",
    "company": "CBD’EAU - Duttlenheim (2023, 1 an)",
    "situation": "L’entreprise utilisait PrestaShop pour son activité e-commerce et disposait d’un outil interne pour analyser les données commerciales. Cependant, cet outil était lent, peu ergonomique et présentait des incohérences dans les données, ce qui limitait son utilisation par les équipes Marketing et Après-Vente.",
    "task": "Concevoir et développer un nouvel outil interne capable de remplacer la solution existante, en améliorant les performances, la fiabilité des données et l’ergonomie pour les utilisateurs métiers.",
    "action": "Au sein d’une équipe de deux développeurs, j’ai participé à la conception et au développement d’un nouvel outil interne en PHP et WinDev. J’ai mis en place l’intégration avec l’API PrestaShop afin de récupérer les données essentielles (commandes, clients, produits et stocks). Les données étaient ensuite nettoyées et transformées via des scripts PHP avant d’être intégrées dans une base de données MySQL modélisée selon les besoins métiers. J’ai également contribué à la création de l’interface utilisateur, incluant une recherche avancée et des tableaux de bord permettant d’analyser les performances commerciales. Plusieurs optimisations ont été réalisées afin de réduire les temps de réponse, supprimer les doublons et améliorer la cohérence des données. Le développement s’est fait en collaboration avec les équipes Marketing et SAV (environ 5 utilisateurs) dans un fonctionnement inspiré de Scrum.",
    "result": "Le nouvel outil a remplacé la solution existante et offre des performances nettement supérieures ainsi qu’une meilleure ergonomie. Les équipes métiers disposent désormais d’un accès rapide et fiable aux données commerciales issues de PrestaShop, ce qui facilite le suivi de l’activité et l’analyse des performances."
  },
  {
    "title": "Développement et maintenance d’applications web",
    "company": "Sevilog - Schiltigheim (2022, 5 semaines)",
    "situation": "L’entreprise gérait plusieurs sites web pour ses clients et devait à la fois maintenir ses applications existantes et créer de nouvelles solutions adaptées aux besoins des clients. Le site principal rencontrait des problèmes de sécurité et nécessitait une protection contre le spam.",
    "task": "Maintenir et sécuriser les applications web existantes tout en développant un nouveau site vitrine pour un client en respectant les bonnes pratiques de développement et les besoins métiers.",
    "action": "J’ai travaillé sur l’implémentation de mesures anti-spam sur le site existant en HTML, CSS et JavaScript, afin de protéger les formulaires et les interactions des utilisateurs. Parallèlement, j’ai développé un nouveau site vitrine pour un client en utilisant Symfony, en intégrant une structure robuste, une interface ergonomique et des bonnes pratiques de sécurité. J’ai veillé à la cohérence visuelle et à l’optimisation des performances des pages.",
    "result": "Les mesures anti-spam ont réduit les interactions indésirables sur le site existant, et le nouveau site vitrine a été livré fonctionnel et sécurisé, offrant au client une présence en ligne moderne et professionnelle."
  },
  {
    "title": "Développement d’un site web type Rotten Tomatoes",
    "company": "Projet scolaire – Next.js / MongoDB",
    "situation": "Dans le cadre d’un projet de groupe, nous devions créer un site web permettant aux utilisateurs de noter et critiquer des films, similaire à Rotten Tomatoes. Le projet visait à mettre en pratique nos compétences en développement web moderne et en gestion de bases de données.",
    "task": "Concevoir et développer les fonctionnalités principales du site pour permettre l’authentification, la gestion des utilisateurs et la consultation, l’ajout ou la suppression de films, ainsi que l’attribution de notes et de critiques.",
    "action": "Au sein d’un groupe, j’ai développé plusieurs fonctionnalités clés : système d’authentification et gestion des utilisateurs, affichage personnalisé selon le type d’utilisateur connecté (admin ou utilisateur standard), ajout et suppression de films, système de notation et de critiques des films. J’ai utilisé Next.js pour le front-end et MongoDB pour stocker les données. J’ai également travaillé sur la structuration de la base de données et l’optimisation des requêtes pour un affichage rapide et cohérent des informations.",
    "result": "Le projet a abouti à un site web fonctionnel et déployable, permettant aux utilisateurs de créer un compte, gérer des films, noter et critiquer les films. Le site a été validé par notre encadrant et a obtenu un retour positif pour sa fonctionnalité complète et son interface ergonomique. Le projet m’a permis de renforcer mes compétences en développement full-stack et en gestion de bases de données."
  },
  {
    "title": "Création d’un logiciel de montage vidéo en Python",
    "company": "Projet personnel – Python / FFMPEG / OpenCV",
    "situation": "Je souhaitais comprendre le fonctionnement du traitement vidéo et de l’image, ainsi que l’optimisation des performances pour manipuler des fichiers volumineux.",
    "task": "Concevoir un logiciel capable de réaliser des opérations de montage vidéo (couper, coller, ajouter du texte, supprimer des parties) sans interface graphique, tout en optimisant les performances pour la gestion des fichiers volumineux et la vitesse de rendu.",
    "action": "J’ai développé le logiciel en Python, utilisant FFMPEG pour la compression et OpenCV pour le traitement des images. J’ai conçu des scripts permettant de manipuler les vidéos de manière modulaire : découpe, suppression de segments, insertion de texte et export final. J’ai également travaillé sur l’optimisation de l’utilisation des ressources, en améliorant la vitesse de rendu et la consommation mémoire pour gérer efficacement des fichiers vidéo volumineux.",
    "result": "Le projet a abouti à un logiciel fonctionnel capable de réaliser les principales opérations de montage vidéo de manière rapide et optimisée, me permettant de comprendre en profondeur le traitement des vidéos et l’optimisation des performances, même sans interface graphique. L’expérience a été un apprentissage précieux pour les projets suivants en manipulation d’images et vidéos."
  },
  {
    "title": "Développement de site web de gestion d'école",
    "company": "Projet scolaire de fin d'étude - Groupe de 4 (2023, 4 mois)",
    "situation": "Dans le cadre de notre projet de fin d'étude, nous devions développer un outil numérique pour une école. Avant le projet, la gestion des élèves et des classes se faisait entièrement sur papier, ce qui rendait le suivi difficile et chronophage. Bien que notre groupe comptait 4 personnes, seulement 2 ont activement travaillé sur le projet, visant à couvrir l’ensemble des établissements d’une région.",
    "task": "Notre objectif était de concevoir et développer un site web sécurisé permettant aux professeurs de gérer les élèves de leurs classes, et aux secrétaires de gérer les établissements et les informations des élèves. Le site devait permettre de visualiser, modifier et déplacer les élèves entre classes et établissements sur une période de 4 mois.",
    "action": "Nous avons commencé par concevoir la base de données et réaliser des maquettes pour structurer l'interface. Nous avons développé le site en PHP en utilisant Git pour le versioning et UML pour la modélisation. Nous avons réalisé des tests réguliers pour assurer la sécurité, notamment sur l'authentification et la gestion des cookies, tout en résolvant les défis liés à ces technologies.",
    "result": "Le site a permis de passer d'une gestion papier à une gestion numérique efficace, facilitant l'enregistrement et le suivi des élèves. Les professeurs et secrétaires ont pu gérer plus facilement les classes et établissements, améliorant l'organisation et la fiabilité des informations, bien que le projet n'ait pas été déployé à grande échelle."
  }
];

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Compétences & Réalisations
          </h2>
        </motion.div>

        <div className="space-y-8">

          {skills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >

              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-indigo-600">{item.company}</p>
                </div>
              </div>

              <div className="space-y-2 text-gray-700">

                <p><strong>Situation :</strong> {item.situation}</p>
                <p><strong>Tâche :</strong> {item.task}</p>
                <p><strong>Action :</strong> {item.action}</p>
                <p><strong>Résultat :</strong> {item.result}</p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Achievements;