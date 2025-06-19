export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 text-gray-800 py-16 px-6 sm:px-12">
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
      <section id="about" className="bg-white py-16 px-6 sm:px-12">
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-16 px-6 sm:px-12">
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
              <div key={tool.name} className="flex flex-col items-center">
                <img src={tool.src} alt={tool.name} className="w-12 h-12" />
                <p className="mt-2 text-gray-800 font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Placeholder */}
      <section id="projects" className="bg-white py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Projects</h2>
          <p className="text-gray-600 text-lg mb-10">My recent data projects will appear here. Stay tuned!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="h-40 bg-gray-200 rounded mb-4 animate-pulse" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Title</h3>
                <p className="text-gray-600 text-sm mb-4">Short description of the project or tool used.</p>
                <span className="inline-block bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-gray-100 py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">View My Resume</h2>
          <p className="text-gray-600 text-lg mb-8">Download my professional resume highlighting my experience and tools.</p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 px-6 sm:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-10">I&apos;m open to new roles, collaborations, and networking opportunities.</p>
          <div className="space-y-6 text-left">
            {/* Email */}
            <ContactItem icon="📧" label="Email" value="jerrycobbinah775@gmail.com" href="mailto:jerrycobbinah775@gmail.com" />
            {/* Phone */}
            <ContactItem icon="📱" label="Phone" value="+233-200-136-829" href="tel:+233200136829" />
            {/* LinkedIn */}
            <ContactItem icon="💼" label="LinkedIn" value="linkedin.com/in/jerry-nelson-cobbinah" href="https://www.linkedin.com/in/jerry-nelson-cobbinah-60ab911a5/" />
          </div>
        </div>
      </section>

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

// Reusable contact info component
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
