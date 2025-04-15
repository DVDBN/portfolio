import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Développeur logiciel en alternance",
    company: "CBD'eau",
    period: "2023 - 2024",
    description: "Développement complet du logiciel d’analyse de donnée de l’entreprise from scratch",
    tasks: [
      "Création et utilisation d’API entre Prestashop et la nouvelle solution en PHP",
      " Modélisation de la base de données",
      "Collaboration avec les différents départements pour adapter le logiciel à leur besoin"
    ]
  },
  {
    title: "Stage Développeur Web",
    company: "Sevilog",
    period: "2022",
    description: "Stage de BTS, réalisation de site avec Symfony et php",
    tasks: [
      "Implémentation de nouvelles fonctionnalités sur le site web déjà existant en HTML/CSS",
      "Développement de nouveau site web pour un client avec Symfony",
      "Tests unitaires"
    ]
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Expérience Professionnelle
          </h2>
          {/* <p className="mt-4 text-xl text-gray-600">
            Mon parcours professionnel en développement web
          </p> */}
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-indigo-600">{experience.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{experience.period}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{experience.description}</p>
              <ul className="space-y-2">
                {experience.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start">
                    <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3" />
                    <span className="text-gray-600">{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;