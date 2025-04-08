import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Globe,
  GitBranch,
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const skills = {
    programming: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 85 },
      { name: "C++", level: 80 },
      { name: "C", level: 80 },
      { name: "Java", level: 60 },
      { name: "TypeScript", level: 60 },
    ],
    frameworks: [
      { name: "Express.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Node.js", level: 70 },
    ],
    databases: [
      { name: "Mongo DB", level: 80 },
      { name: "SQL", level: 70 },
    ],
    tools: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "AI Tools", level: 80 },
    ],
    areas: [
      { name: "Web Development", level: 85 },
      { name: "API Development", level: 80 },
      { name: "IoT", level: 66 },
    ],
  };

  const education = [
    {
      institution: "Aditya University, Surampalem",
      degree: "Bachelor of Technology (B.Tech)",
      field:
        "Computer Science & Engineering (Specialization in Internet of Things)",
      duration: "2022 - Present",
      location: "Surampalem, Andhra Pradesh",
      gpa: "till now-8.52",
    },
    {
      institution: "BSR Junior College",
      degree: "Intermediate (10+2)",
      field: "MPC (Mathematics, Physics, Chemistry)",
      duration: "2020 - 2022",
      location: "Peddhapuram, Andhra Pradesh",
      gpa: "9.66",
    },
    {
      institution: "Likitha Hight School",
      degree: "Secondary School Certificate (SSC)",
      field: "General Studies",
      duration: "completed in 2020",
      location: "Peddhapuram, Andhra Pradesh",
      gpa: "10.0",
    },
  ];

  const experience = [
    {
      position: "Web Developer Intern",
      company: "Skill Craft Technology",
      duration: "October 2024 - November 2023",
      description:
        "Worked on frontend development for web applications, collaborating with team members to enhance UI/UX and performance.",
      responsibilities: [
        "Designed and developed responsive user interfaces using HTML, CSS, and JavaScript",
        "Collaborated on component-based development with React.js",
        "Contributed to code reviews and team discussions",
        "Assisted in integrating APIs and improving performance",
      ],
    },
    {
      position: "Intern",
      company: "Technical Hub",
      duration: "May 2023 - June 2023",
      description:
        "Gained practical exposure to web development technologies and tools while working on assigned modules and guided tasks.",
      responsibilities: [
        "Learned core web development concepts including frontend basics and backend integration",
        "Worked on guided assignments using Git and version control",
        "Practiced problem-solving with real-time coding tasks",
        "Collaborated in a team environment and participated in workshops",
      ],
    },
  ];

  const projects = [
    {
      title: "Real Time Water Monitoring System",
      description:
        "A MERN stack-based IoT web application that monitors water quality parameters in real-time with dynamic visualizations and alerts.",
      technologies: ["MERN", "IoT", "WebSocket", "Chart.js", "Firebase"],
      duration: "08/2024 - 11/2024",
      type: "SIH Project",
      accomplishments: [
        "Integrated real-time data streaming using WebSocket for continuous sensor monitoring",
        "Implemented user authentication and access control using Firebase",
        "Developed a responsive dashboard with Chart.js to visualize trends and detect anomalies in water data",
      ],
    },
    {
      title: "VibeNest - Social Media Platform",
      description:
        "A full-stack social media application with user authentication, real-time features, and content sharing built using Next.js and MongoDB.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
      ],
      duration: "01/2025 - 03/2025",
      type: "Personal Project",
      accomplishments: [
        "Implemented full authentication flow including email verification and password reset",
        "Built features like follow system, post/story creation, likes, and comments",
        "Enabled seamless routing, animations, and performance optimizations with Next.js",
      ],
    },
    {
      title: "Blog Website",
      description:
        "A CRUD-based blog application allowing users to create, read, update, and delete blog posts, with secure authentication and dynamic routing.",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
      duration: "08/2024",
      type: "Personal Project",
      accomplishments: [
        "Developed complete backend with Express.js and MongoDB to manage blog content",
        "Implemented secure user authentication and session management",
        "Designed dynamic templates with EJS for seamless content rendering",
      ],
    },
    {
      title: "URL Shortener",
      description:
        "A simple URL shortener built with Node.js and Express, allowing users to shorten and manage URLs.",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
      duration: "07/2024 - 08/2024",
      type: "Personal Project",
      accomplishments: [
        "Developed complete backend with Express.js and MongoDB to manage blog content",
        "Implemented secure user authentication and session management",
        "Designed dynamic templates with EJS for seamless content rendering",
      ],
    },
  ];

  const certifications = [
    {
      name: "Python Programming",
      issuer: "IBM",
      date: "2024",
      skills: "Python, Data Analysis",
    },
    {
      name: "Web Development with HTML,CSS and JavaScript",
      issuer: "IBM",
      date: "2024",
      skills: "HTML, CSS, JavaScript",
    },
    {
      name: "Java Fundamentals",
      issuer: "IT Specialist",
      date: "2023",
      skills: "Java, OOPs Concepts",
    },
    {
      name: "Prompt Engineering",
      issuer: "IBM",
      date: "2024",
      skills: "Prompt Engineering, AI",
    },
  ];

  const softSkills = [
    {
      skill: "Problem Solving",
      description: "Analytical approach to complex technical challenges",
    },
    {
      skill: "Communication",
      description: "Clear technical and non-technical communication",
    },
    {
      skill: "Team Collaboration",
      description: "Effective work in cross-functional teams",
    },
    {
      skill: "Adaptability",
      description: "Quick learning of new technologies and methodologies",
    },
    {
      skill: "Time Management",
      description: "Efficient project delivery within deadlines",
    },
    {
      skill: "Critical Thinking",
      description: "Analytical evaluation of solutions and approaches",
    },
  ];

  const resumeHighlights = [
    {
      title: "Full-Stack Developer",
      description:
        "Proficient in both front-end and back-end technologies, creating complete web solutions",
      icon: <Code className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "Web Developer",
      description:
        "Experienced in building web applications using react framework and plain HTML and CSS",
      icon: <Database className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "IoT Enthusiast",
      description:
        "Passionate about integrating IoT devices with web applications for smart solutions",
      icon: <Cpu className="h-8 w-8 text-brand-purple" />,
    },
  ];

  const tabContent = {
    skills: (
      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative glass-panel p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-purple-400/20 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none border border-purple-500/30 opacity-0 hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_#a855f788]" />

              <div className="flex items-start">
                <div className="mr-4 bg-purple-500/10 p-3 rounded-full shadow-inner hover:rotate-6 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="glass-panel p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Code className="w-5 h-5 mr-2 text-brand-purple" />
            Programming Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.programming.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="glass-panel p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-brand-purple" />
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.frameworks.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="glass-panel p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-brand-purple" />
            Data Bases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.databases.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="glass-panel p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <GitBranch className="w-5 h-5 mr-2 text-brand-purple" />
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.tools.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="glass-panel p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-brand-purple" />
            Specialization Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.areas.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="glass-panel p-6 rounded-2xl shadow-md bg-white/5 backdrop-blur border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 15px rgba(34,211,238,0.4)",
                }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-xl bg-secondary/40 border border-cyan-400/10 text-white backdrop-blur-md hover:border-cyan-400/30 hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <h4 className="font-medium text-lg mb-1 text-cyan-300">
                  {item.skill}
                </h4>
                <p className="text-sm text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              scale: 1.015,
              boxShadow: "0 0 20px rgba(168,85,247,0.2)",
            }}
            className="glass-panel p-6 rounded-2xl transition-all duration-300 border border-brand-purple/20 hover:border-brand-purple/40 hover:shadow-brand-purple/20"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-lg mt-1 text-white/90">
                      {edu.institution}
                    </div>
                    <div className="text-muted-foreground mt-1">
                      {edu.field}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end text-right">
                <div className="px-3 py-1 rounded-full text-sm bg-brand-purple/10 text-brand-purple font-medium shadow-inner shadow-brand-purple/30">
                  {edu.gpa}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {edu.duration}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {edu.location}
                </div>
              </div>
            </div>

            <div className="mt-4 pl-4 border-l-2 border-brand-purple/30">
              <h4 className="font-medium mb-2 text-white">Key Courses:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {edu.institution.includes("Aditya") ? (
                  <>
                    <li className="text-sm flex items-center text-white/80">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Internet of Things
                    </li>
                    <li className="text-sm flex items-center text-white/80">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Data Structures & Algorithms
                    </li>
                    <li className="text-sm flex items-center text-white/80">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Web Development
                    </li>
                    <li className="text-sm flex items-center text-white/80">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Database Management Systems
                    </li>
                  </>
                ) : (
                  <>
                    <li className="text-sm flex items-center text-white/80">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Physics
                    </li>
                    <li className="text-sm flex items-center text-white/80">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Chemistry
                    </li>
                    <li className="text-sm flex items-center text-white/80">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Mathematics
                    </li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              scale: 1.015,
              boxShadow: "0 0 20px rgba(168,85,247,0.2)",
            }}
            className="glass-panel p-6 rounded-2xl transition-all duration-300 border border-brand-purple/20 hover:border-brand-purple/40 hover:shadow-brand-purple/20"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <Briefcase className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.position}
                    </h3>
                    <div className="text-lg mt-1 text-white/90">
                      {exp.company}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right mt-2 md:mt-0">
                {exp.duration}
              </div>
            </div>

            <p className="text-muted-foreground mb-4 pl-0 md:pl-12">
              {exp.description}
            </p>

            <div className="pl-0 md:pl-12">
              <h4 className="font-medium mb-2 text-white">
                Key Responsibilities:
              </h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),

    projects: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              scale: 1.015,
              boxShadow: "0 0 20px rgba(168,85,247,0.2)",
            }}
            className="glass-panel p-6 rounded-2xl transition-all duration-300 border border-brand-purple/20 hover:border-brand-purple/40 hover:shadow-brand-purple/20"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs py-1 px-3 bg-brand-purple/10 text-brand-purple rounded-full">
                  {project.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.duration}
                </span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="mb-4">
              <h4 className="font-medium mb-2 text-white">
                Key Accomplishments:
              </h4>
              <ul className="space-y-2">
                {project.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs py-1 px-3 bg-brand-purple/10 text-brand-purple rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    certifications: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              scale: 1.015,
              boxShadow: "0 0 20px rgba(168,85,247,0.2)",
            }}
            className="glass-panel p-6 rounded-2xl transition-all duration-300 border border-brand-purple/20 hover:border-brand-purple/40 hover:shadow-brand-purple/20"
          >
            <div className="flex items-start">
              <div className="bg-brand-purple/10 p-2 rounded-full mr-4 flex-shrink-0">
                <Award className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{cert.name}</h3>
                <div className="text-sm text-muted-foreground mb-2">
                  {cert.issuer} • {cert.date}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {cert.skills.split(", ").map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-brand-purple/10 text-brand-purple rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

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
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Professional Experience" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm an aspiring developer specializing in web development, AI,
                and machine learning. My goal is to leverage these technologies
                to create innovative solutions for real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <PrintableResume />
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  id: "skills",
                  icon: <Code className="h-5 w-5" />,
                  label: "Skills",
                },
                {
                  id: "education",
                  icon: <GraduationCap className="h-5 w-5" />,
                  label: "Education",
                },
                {
                  id: "experience",
                  icon: <Briefcase className="h-5 w-5" />,
                  label: "Experience",
                },
                {
                  id: "projects",
                  icon: <Code className="h-5 w-5" />,
                  label: "Projects",
                },
                {
                  id: "certifications",
                  icon: <Award className="h-5 w-5" />,
                  label: "Certifications",
                },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
