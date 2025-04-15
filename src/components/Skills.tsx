import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skillCategories = [
  {
    title: "Front-end",
    icon: Layout,
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 60 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 80 }
    ]
  },
  {
    title: "Back-end",
    icon: Server,
    skills: [
      { name: "Python", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "PHP", level: 85 },
      { name: "WinDev", level: 90 }
    ]
  },
  {
    title: "Base de données",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Prisma", level: 80 },
      { name: "MySQL", level: 85 }
    ]
  },
  {
    title: "Outils & Autres",
    icon: Code2,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 }
    ]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Compétences Techniques
          </h2>
          {/* <p className="mt-4 text-xl text-gray-600">
            Mes compétences en développement web et technologies connexes
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                        className="bg-indigo-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;