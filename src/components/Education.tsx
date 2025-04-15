import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Book } from 'lucide-react';

const education = [
  {
    title: "RNCP NIVEAU 6 CONCEPTEUR INFORMATIQUES (admissible)",
    school: "GNAM Grand-Est",
    period: "2025 - 2026",
    description: "Maîtrise des concepts avancés de programmation et de gestion de projet",
    icon: GraduationCap
  },
  {
    title: "Licence Générale Informatique",
    school: "GNAM Grand-Est",
    period: "2023 - 2024",
    description: "Développement, Programmation, Réseaux, Multimédia, Systèmes, Architecture, Génie Logiciel",
    icon: GraduationCap
  },
  {
    title: "BTS services informatiques aux organisations option B solutions logicielles et applications métiers",
    school: "Lycée René Cassin",
    period: "2020 - 2022",
    description: "Support et mise à disposition de services informatiques, Cybersécurité, Conception et développement d'applications",
    icon: GraduationCap
  }
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="formation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Formation
          </h2>
          {/* <p className="mt-4 text-xl text-gray-600">
            Mon parcours académique et mes certifications
          </p> */}
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start space-x-6 bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-500">{item.period}</span>
                </div>
                <p className="mt-1 text-lg text-indigo-600">{item.school}</p>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;