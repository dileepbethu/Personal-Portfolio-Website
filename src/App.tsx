import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

function useTypewriter(text: string, speed: number = 150) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
}

function App() {
  const roles = [
    "Web Developer",
    "Python Developer",
    "Data Analyst",
    "Frontend Developer",
    "Backend Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const typedName = useTypewriter("Dilip Chandu Bethu", 150);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="inline-block border-r-2 border-white animate-pulse">
                {typedName}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              A passionate{' '}
              <span 
                className={`inline-block transition-opacity duration-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {roles[currentRoleIndex]}
              </span>
              {' '}ready to make an impact
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get in Touch
              </a>
              <a 
  href="https://drive.google.com/file/d/12Yng_M63zitAKXcrk4hnD1V4BV2rsS2W/view?usp=sharing"
  download="Dilip_Chandu_Bethu_Resume.pdf"
  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
>
  <Download size={20} /> Resume
</a>

            </div>
          </div>
        </div>
      </header>

      <section className="py-20" id="experience">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-600">Full Stack Developer Intern</h3>
                <p className="text-gray-500">oct 2024 - Present</p>
              </div>
              <p className="text-gray-600 mb-4">Designed & developed a Laboratory Information Management System (LIMS) from scratch using the 
MERN stack with TypeScript, automating the entire material testing processs</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Implemented responsive user interfaces using React.js and Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Built RESTful APIs using Node.js and Express.js
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Worked with SQL databases and implemented data models
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Frontend', skills: ['React.js', 'JavaScript', 'HTML/CSS', 'TypeScript', 'Tailwind CSS'] },
              { title: 'Backend', skills: ['Python','Machine Learing','NPL','Node.js', 'Express.js', 'SQL', 'RESTful APIs'] },
              { title: 'Tools & Methods', skills: ['Data Structures and Algorithms','Tableau','Power BI','MS Excel','Git', 'VS Code', 'Agile'] }

            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Company Website',
                description: 'Plyomed Website is a modern and responsive web application designed to provide users with a seamless experience. This project includes a user-friendly interface, interactive components, and optimized performance for both desktop and mobile devices.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/dileepbethu/company-website'
              },
              {
                title: 'Credit-Card-Default-Prediction',
                description: 'his is a classification model for a most common dataset, Credit Card defaulter prediction. Prediction of the next month credit card defaulter based on demographic and last six months behavioral data of customers.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/dileepbethu/Ineurone-internship-project'
              },
              {
                title: ' Ayurvedic medicinal plant identification system using Embedded image processing techniques',
                description: 'Developed Machine learning based model and a standalone device, to identify medicinal plants using leaf features.',
                image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/dileepbethu/-Ayurvedic-medicinal-plant-identification-system-using-Embedded-image-processing-techniques'
              },
              {
                title: 'Performing-Text-Analysis-on-the-web-Data',
                description: 'This project extracts and analyzes text data from web articles to identify sentiment trends and generate insights. It leverages web scraping, natural language processing (NLP), and data visualization techniques to streamline text analysis.',
                image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/dileepbethu/-Performing-Text-Analysis-on-the-web-Data'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} className="text-blue-600 inline-flex items-center gap-2 hover:text-blue-700">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100" id="education">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
                <p className="text-gray-600">Jawaharlal Nehru Technological University</p>
                <p className="text-gray-500">2024 - Present</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Advanced Software Development and System Design</li>
                  <li>• Cloud Computing and Distributed Systems</li>
                  <li>• Database Management and Big Data Analytics</li>
                  <li>• Research Project: AI-based Healthcare System</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                <p className="text-gray-600">Adikavi Nannaya University</p>
                <p className="text-gray-500">2018 - 2021</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Major in Computer Science</li>
                  <li>• Relevant Coursework: Data Structures, Algorithms, Web Development</li>
                  <li>• Technical Projects and Research</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/dileepbethu" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/dileep-bethu-7b11a2220" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:dilipchandu83@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Dilip Chandu Bethu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;