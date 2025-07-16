'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 text-gray-800 py-16 px-6 sm:px-12 mt-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              Hi, I&apos;m Jerry Nelson Cobbinah
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              A passionate Data Analyst skilled in Excel, SQL, Power BI, and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                Contact Me
              </a>
              <a href="/resume.pdf" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-300 transition">
                View Resume
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-end">
           <img src="/profile.jpg" alt="Jerry Nelson" className="w-40 h-40 sm:w-60 sm:h-60 rounded-2xl object-cover shadow-lg border border-gray-200"/>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white py-16 px-6 sm:px-12"
      >
        <div className="max-w-4xl mx-auto text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            I&apos;m Jerry Nelson, a data analyst with a strong background in Actuarial Science and hands-on experience in transforming raw data into business insights.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            I specialize in using tools like Excel, MySQL, and Power BI to explore data, build dashboards, and support business decisions.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            My goal is to help companies unlock the value in their data and use it to drive strategy, growth, and efficiency.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-16 px-6 sm:px-12"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Skills</h2>
          <p className="text-gray-600 text-lg mb-10">Tools and technologies I use in my work:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
            {[
              { name: 'Excel', src: '/icons/excel.png' },
              { name: 'Power BI', src: '/icons/power-bi.svg' },
              { name: 'MySQL', src: 'https://cdn.simpleicons.org/mysql/4479A1' },
              { name: 'PostgreSQL', src: 'https://cdn.simpleicons.org/postgresql/336791' },
              { name: 'Python', src: 'https://cdn.simpleicons.org/python/3776AB' },
              { name: 'Git', src: 'https://cdn.simpleicons.org/git/F05032' },
              { name: 'GitHub', src: 'https://cdn.simpleicons.org/github/181717' },
              { name: 'SQL', src: 'https://cdn.simpleicons.org/sqlite/003B57' },
            ].map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="flex flex-col items-center"
              >
                <img src={tool.src} alt={tool.name} className="w-12 h-12" />
                <p className="mt-2 text-gray-800 font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Projects</h2>
          <p className="text-gray-600 text-lg mb-10">
            Here are some data projects I’ve worked on and ones I’m currently building.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Data Professionals Survey */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              href="/projects/data-professionals-survey"
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all block"
            >
              <img
                src="/projects/data.jpg"
                alt="Data Professionals Survey"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Professionals Survey</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Insights from 600+ data professionals — includes dashboard, report, and presentation.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  Excel • PDF • PowerPoint
                </span>
              </div>
            </motion.a>

            {/* E-Commerce Dashboard */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              href="https://github.com/Jerry-Nelson/FUTURE_DS_01"
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/projects/commerce.jpg"
                alt="E-Commerce"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">E-Commerce Data Analysis</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Sales performance insights and KPIs with Power BI using a mock e-commerce dataset.
                </p>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                  Power BI
                </span>
              </div>
            </motion.a>

            {/* Facebook Ads Dashboard */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="https://github.com/Jerry-Nelson/FUTURE_DS_02"
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/projects/facebook.jpg"
                alt="Facebook"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Facebook Ad Performance</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Dashboard analysis of ad impressions, reach, and engagement using Power BI.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  Power BI
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <motion.section
        id="resume"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-16 px-6 sm:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">View My Resume</h2>
          <p className="text-gray-600 text-lg mb-8">
            Download my professional resume highlighting my experience and tools.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-16 px-6 sm:px-12"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-10">
            I&apos;m open to new roles, collaborations, and networking opportunities.
          </p>
          <div className="space-y-6 text-left">
            <ContactItem
              icon="📧"
              label="Email"
              value="jerrycobbinah775@gmail.com"
              href="mailto:jerrycobbinah775@gmail.com"
            />
            <ContactItem
              icon="📱"
              label="Phone"
              value="+233-200-136-829"
              href="tel:+233200136829"
            />
            <ContactItem
              icon="💼"
              label="LinkedIn"
              value="linkedin.com/in/jerry-nelson-cobbinah"
              href="https://www.linkedin.com/in/jerry-nelson-cobbinah-60ab911a5/"
            />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center sm:text-left">© {new Date().getFullYear()} Jerry Nelson Cobbinah. All rights reserved.</p>
          <a href="https://www.linkedin.com/in/jerry-nelson-cobbinah-60ab911a5/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-sm">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}

function ContactItem({ icon, label, value, href }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-blue-600 text-xl mt-1">{icon}</div>
      <div>
        <h4 className="text-sm font-semibold text-gray-700">{label}</h4>
        <a href={href} className="text-blue-600 hover:underline text-sm">
          {value}
        </a>
      </div>
    </div>
  );
}
