import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  GraduationCap,
  Briefcase,
  Star,
  ExternalLink,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      title: "Real Time Water Monitoring System",
      description:
        "A web application to monitor water quality parameters in real-time using IoT and MERN Stack.",
      image: "/water.jpg",
      tags: ["MERN", "IoT"],
      link: "/projects",
      code: "https://github.com/tarunsilam07/Blue_Pulse",
    },
    {
      title: "Vibe Nest",
      description:
        "VibeNest is a full-featured social media platform using Next.js and MongoDB",
      image: "social.png",
      tags: ["NextJs", "MongoDB"],
      link: "/projects",
      code: "https://github.com/MoyillaLaliteswari/VibesNest",
    },
    {
      title: "Blog Website",
      description: "A simple blog website built with EJS and Express.js.",
      image: "blog.png",
      tags: ["ExpressJS", "EJS", "MongoDB"],
      link: "/projects",
      code: "https://github.com/MoyillaLaliteswari/blog",
    },
  ];

  const techStack = [
    { name: "JavaScript", proficiency: 90 },
    { name: "Python", proficiency: 90 },
    { name: "Node.js", proficiency: 80 },
    { name: "Next.js", proficiency: 75 },
    { name: "React.js", proficiency: 70 },
    { name: "C++", proficiency: 70 },
  ];

  return (
    <Layout>
      <HeroSection />

      {/* About Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              About Me
            </span>
            <h2 className="text-4xl font-bold mb-6 text-white">Who I Am</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              I'm a Computer Science student specializing in Internet of Things.
              Passionate about programming and building innovative web
              applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-brand-purple" />,
                title: "Web Development",
                desc: "Experienced in building modern, responsive web applications using React.js, Next.js, and Node.js.",
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-brand-purple" />,
                title: "Computer Science",
                desc: "Strong foundation in algorithms, data structures, and programming principles.",
              },
              {
                icon: <Briefcase className="w-8 h-8 text-brand-purple" />,
                title: "Internet of Things",
                desc: "Specializing in IoT applications, integrating hardware and software to create smart solutions.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.025,
                  boxShadow: "0 0 20px rgba(168,85,247,0.15)",
                }}
                className="glass-panel p-8 rounded-2xl border border-brand-purple/10 hover:border-brand-purple/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-brand-purple/10 rounded-lg mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-white">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-brand-purple text-white rounded-lg font-medium hover:bg-brand-purple/90 transition-all"
            >
              More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Skills
            </span>
            <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              A collection of technologies I work with to build web applications
              and solve complex problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{tech.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {tech.proficiency}%
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-teal-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary/50" id="projects">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              A selection of my recent web development and programming projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group rounded-lg overflow-hidden transition-all duration-500 border border-transparent hover:border-teal-400/50 hover:shadow-xl hover:shadow-teal-200/40 hover:scale-[1.03] transform glass-panel"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs py-1 px-3 bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      to={project.link}
                      className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                      href={project.code}
                      className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1.5 h-4 w-4" />
                      Source Code
                    </a>
                  </div>
                </div>
                <span className="absolute inset-0 rounded-lg pointer-events-none border border-transparent group-hover:border-teal-400/30 group-hover:shadow-[0_0_20px_2px_rgba(45,212,191,0.2)] transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-12 rounded-lg max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-full mb-6 mx-auto">
              <Star className="w-8 h-8 text-teal-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm currently available for freelance work and open to new
              opportunities. If you have a project in mind or want to
              collaborate, let's connect!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
