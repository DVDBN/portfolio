import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Rotten Like",
    description: "Rotten Like est une app de Critique de Film, développée avec Next.js et MongoDB",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "NodeJS", "NextJS", "MongoDB","JWT"],
    github: "https://github.com/DVDBN/RottenLike",
    demo: "https://github.com/DVDBN/RottenLike"
  },
  {
    title: "AlsaNum",
    description: "Gestion Scolaire est une application web développée en PHP (vanilla) et MySQL",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["PHP", "BootStrap", "MySQL"],
    github: "https://github.com/DVDBN/Alsa_Num",
    demo: "https://github.com/DVDBN/Alsa_Num"
  },
  {
    title: "SnakeGame",
    description: "Un jeu classique de Snake développé en utilisant React et le Canvas HTML5",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Canvas", "CI/CD"],
    github: "https://github.com/DVDBN/SnakeGame",
    demo: "https://dvdbn.github.io/SnakeGame/"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mes Projets
          </h2>
          {/* <p className="mt-4 text-xl text-gray-600">
            Découvrez mes dernières réalisations en développement web
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github className="h-6 w-6 text-gray-900" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="h-6 w-6 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;