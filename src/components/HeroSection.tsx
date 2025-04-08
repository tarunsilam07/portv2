import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code,
  Database,
  FileCode,
  Server,
  Terminal,
  GitBranch,
  Globe,
  Tv,
} from "lucide-react";
import AnimatedText from "./AnimatedText";
import { Link } from "react-router-dom";

const phrases = ["Full Stack Developer", "AI & ML Enthusiast", "Web Developer"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background animated elements - updated color scheme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal-500/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-amber-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-rose-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block">Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400">
                Laliteswari Moyilla
              </span>
            </motion.h1>

            <motion.div
              className="h-12 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatedText
                text={phrases[index]}
                className="text-2xl md:text-3xl font-medium text-muted-foreground"
              />
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Aspiring web developer and IoT enthusiast currently pursuing
              B.Tech in IoT with a strong foundation in full-stack development.
              Experienced in building real-time applications using MERN and
              Next.js, with hands-on internships and projects in responsive web
              design, authentication, and data visualization. Passionate about
              solving problems and creating impactful tech solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.a>

              <motion.a
                className="inline-flex items-center bg-secondary text-foreground px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/projects">View Projects</Link>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden glass-panel p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent"></div>
              <div className="relative h-full w-full grid grid-cols-6 grid-rows-6 gap-4">
                {/* Static skill blocks */}
                <motion.div
                  className="col-span-3 row-span-2 glass-panel p-6 flex flex-col justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-2">
                    <Code className="w-5 h-5 mr-2 text-teal-400" />
                    <h3 className="text-xl font-semibold">Python</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Advanced level proficiency
                  </p>
                </motion.div>

                <motion.div
                  className="col-span-3 row-span-2 glass-panel p-6 flex flex-col justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-2">
                    <FileCode className="w-5 h-5 mr-2 text-teal-400" />
                    <h3 className="text-xl font-semibold">JavaScript</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Frontend & backend development
                  </p>
                </motion.div>

                <motion.div
                  className="col-span-2 row-span-2 glass-panel p-4 flex flex-col justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-1">
                    <Globe className="w-4 h-4 mr-2 text-teal-400" />
                    <h3 className="text-md font-semibold">React.js</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">UI Library</p>
                </motion.div>

                <motion.div
                  className="col-span-2 row-span-2 glass-panel p-4 flex flex-col justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-1">
                    <Database className="w-4 h-4 mr-2 text-teal-400" />
                    <h3 className="text-md font-semibold">Mongo DB</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">Database</p>
                </motion.div>

                <motion.div
                  className="col-span-2 row-span-2 glass-panel p-4 flex flex-col justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-1">
                    <Terminal className="w-4 h-4 mr-2 text-teal-400" />
                    <h3 className="text-md font-semibold">C++</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Data Structures and Algorithms
                  </p>
                </motion.div>

                <motion.div
                  className="col-span-3 row-span-2 glass-panel p-6 flex flex-col justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-2">
                    <Server className="w-5 h-5 mr-2 text-teal-400" />
                    <h3 className="text-xl font-semibold">Node.js</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Backend development
                  </p>
                </motion.div>

                <motion.div
                  className="col-span-3 row-span-2 glass-panel p-6 flex flex-col justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-2">
                    <Tv className="w-5 h-5 mr-2 text-teal-400" />
                    <h3 className="text-xl font-semibold">Next.js</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fullstack framework
                  </p>
                </motion.div>

                <motion.div
                  className="col-span-3 row-span-2 glass-panel p-4 flex flex-col justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-1">
                    <GitBranch className="w-4 h-4 mr-2 text-teal-400" />
                    <h3 className="text-md font-semibold">
                      AI & Machine Learning
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground">Beginner</p>
                </motion.div>

                <motion.div
                  className="col-span-3 row-span-2 glass-panel p-4 flex flex-col justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-1">
                    <Code className="w-4 h-4 mr-2 text-teal-400" />
                    <h3 className="text-md font-semibold">UI/UX Design</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Interface design & prototyping{" "}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
