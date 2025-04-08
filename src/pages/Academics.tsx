
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen, GraduationCap, Award, School, Calendar, MapPin } from "lucide-react";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Aditya University, Surampalem",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering (Specialization in Internet of Things)",
      duration: "2022 - Present",
      location: "Surampalem, Andhra Pradesh",
      cgpa: "till now-8.52",
      details: [
        "Specializing in Internet of Things",
        "Key courses include Data Structures, Algorithms, IoT",
        "Actively participating in research projects related to Web Development and IoT",
        "Involved in various hackathons and coding competitions",
      ]
    },
    {
      id: 2,
      institution: "BSR Junior College",
      degree: "Intermediate (10+2)",
      field: "MPC (Mathematics, Physics, Chemistry)",
      duration: "2020 - 2022",
      location: "Peddhapuram, Andhra Pradesh",
      cgpa: "9.66",
      details: [
        "Major subjects included Physics, Mathematics, Chemistry",
        "Highlights: Advanced Mathematics & Computer Science",
        "Developed strong foundation in scientific principles and programming"
      ]
    },
    {
      id: 3,
      institution: "Likitha Hight School, Divili",
      degree: "Secondary High School",
      field: "SSC (10th Grade)",
      duration: "completed in 2020",
      location: "Divili, Andhra Pradesh",
      cgpa: "10.0",
      details: [
        "Strong foundation in Science",
        "Studied foundations of Mathematics"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Python Programming",
      issuer: "IBM",
      date: "2024",
      description: "Comprehensive course covering advanced Python concepts and applications."
    },
    {
      id: 2,
      name: "Web Development with HTML,CSS and JavaScript",
      issuer: "IBM",
      date: "2024",
      description: "In-depth training on building modern web applications using HTML,CSS and JavaScript."
    },
    {
      id: 3,
      name: "Java Fundamentals",
      issuer: "IT Specialist",
      date: "2023",
      description: "Introduction to Java programming language and its core concepts."
    },
    {
      id: 4,
      name: "Prompt Engineering",
      issuer: "IBM",
      date: "2024",
      description: "Understanding the principles of prompt engineering and its applications in AI."
    }
  ];

  const courseHighlights = [
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies",
    "Software Engineering",
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                My academic journey, courses, and educational achievements that have shaped my technical expertise.
              </p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="glass-panel p-8 rounded-lg h-full"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-teal-500/10 p-3 rounded-lg mr-4">
                        <GraduationCap className="h-6 w-6 text-teal-400" />
                      </div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="font-medium text-lg mb-1">{edu.institution}</div>
                      <p className="text-muted-foreground">{edu.field}</p>
                      
                      <div className="flex flex-wrap gap-y-2 gap-x-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          CGPA: {edu.cgpa}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Key Courses</h2>
            
            <div className="glass-panel p-10 rounded-lg">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-teal-500/10 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-teal-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseHighlights.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    className="flex items-center p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-teal-400 mr-3" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel p-6 rounded-lg"
                >
                  <div className="flex items-start">
                    <div className="bg-teal-500/10 p-3 rounded-lg mr-4 mt-1">
                      <Award className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <School className="h-4 w-4 mr-1" />
                        <span>{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
