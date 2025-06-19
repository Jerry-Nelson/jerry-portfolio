export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 text-gray-800 py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              Hi, I'm Jerry Nelson Cobbinah
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              A passionate Data Analyst skilled in Excel, SQL, Power BI, and insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-300 transition"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/profile.jpg"
              alt="Jerry Nelson"
              className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover shadow-lg border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6 sm:px-12" id = "about">
        <div className="max-w-4xl mx-auto text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            I’m Jerry Nelson, a data analyst with a strong background in Actuarial Science and hands-on experience in transforming raw data into business insights.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            I specialize in using tools like Excel, MySQL, and Power BI to explore data, build dashboards, and support business decisions. I'm passionate about finding patterns, solving problems, and telling compelling stories through data.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            My goal is to help companies unlock the value in their data and use it to drive strategy, growth, and efficiency.
          </p>
        </div>
      </section>
      {/* Skills Section */}
      {/* Skills Section */}
      <section className="bg-gray-50 py-16 px-6 sm:px-12" id = "skills">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Skills
          </h2>
          <p className="text-gray-600 text-lg mb-10 animate-fadeInUp delay-100">
            Tools and technologies I use in my day-to-day data analysis work.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
            {/* Excel */}
            <div className="flex flex-col items-center animate-fadeInUp delay-200">
              <img src="/icons/excel.png" alt="Excel" className="w-12 h-12" />
              <p className="mt-2 text-gray-800 font-medium">Excel</p>
            </div>

            {/* Power BI */}
            <div className="flex flex-col items-center animate-fadeInUp delay-300">
              <img src="/icons/power-bi.svg" alt="Power BI" className="w-12 h-12" />
              <p className="mt-2 text-gray-800 font-medium">Power BI</p>
            </div>

            {/* MySQL */}
            <div className="flex flex-col items-center animate-fadeInUp delay-400">
              <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" className="w-12 h-12" />
              <p className="mt-2 text-gray-800 font-medium">MySQL</p>
            </div>

            {/* PostgreSQL */}
            <div className="flex flex-col items-center animate-fadeInUp delay-500">
              <img src="https://cdn.simpleicons.org/postgresql/336791" alt="PostgreSQL" className="w-12 h-12" />
              <p className="mt-2 text-gray-800 font-medium">PostgreSQL</p>
            </div>

            {/* Python */}
            <div className="flex flex-col items-center animate-fadeInUp delay-600">
              <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-12 h-12" />
              <p className="mt-2 text-gray-800 font-medium">Python</p>
            </div>

            {/* Git */}
            <div className="flex flex-col items-center animate-fadeInUp delay-700">
              <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" className="w-12 h-12" />
              <p className="mt-2 text-gray-800 font-medium">Git</p>
            </div>

            {/* GitHub */}
            <div className="flex flex-col items-center animate-fadeInUp delay-800">
              <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="w-12 h-12" />
              <p className="mt-2 text-gray-800 font-medium">GitHub</p>
            </div>

            {/* SQL */}
            <div className="flex flex-col items-center animate-fadeInUp delay-900">
              <img src="https://cdn.simpleicons.org/sqlite/003B57" alt="SQL" className="w-12 h-12" />
              <p className="mt-2 text-gray-800 font-medium">SQL</p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="bg-white py-16 px-6 sm:px-12" id = "projects">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Projects</h2>
          <p className="text-gray-600 text-lg mb-10">
            My recent data projects will appear here. Stay tuned!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Project Card Placeholder */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
              <div className="h-40 bg-gray-200 rounded mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Title</h3>
              <p className="text-gray-600 text-sm mb-4">Short description of the project or tool used.</p>
              <span className="inline-block bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
              <div className="h-40 bg-gray-200 rounded mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Title</h3>
              <p className="text-gray-600 text-sm mb-4">Short description of the project or tool used.</p>
              <span className="inline-block bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
              <div className="h-40 bg-gray-200 rounded mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Title</h3>
              <p className="text-gray-600 text-sm mb-4">Short description of the project or tool used.</p>
              <span className="inline-block bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Resume Section */}
      <section className="bg-gray-100 py-16 px-6 sm:px-12" id = "resume">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            View My Resume
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Download my professional resume highlighting my background in data analysis, tools used, and experience.
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
      </section>
      {/* Contact Section */}
        <section id="contact" className="bg-gray-100 py-16 px-6 sm:px-12">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Contact Me
      </h2>
      <p className="text-gray-600 text-base sm:text-lg mb-10">
        I’m open to new roles, collaborations, and networking opportunities.
      </p>

      <div className="space-y-6 text-left">
        {/* Email */}
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-blue-600 mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z" fill="#fff" />
            <path d="M4 6l8 6 8-6" />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-gray-700">Email</h4>
            <a href="mailto:jerrynelsoncobbinah@gmail.com" className="text-blue-600 hover:underline text-sm">
              jerrynelsoncobbinah@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-blue-600 mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 5h18v14H3z" />
            <path d="M3 5l9 7 9-7" />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-gray-700">Phone</h4>
            <a href="tel:+233200136829" className="text-blue-600 hover:underline text-sm">
              +233-200-136-829
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-blue-600 mt-1 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 6.1 6 7.48 6s2.5-1.12 2.5-2.5S8.86 1 7.48 1 4.98 2.12 4.98 3.5zM2 8h4v12H2zM9 8h3.6v1.8h.05c.5-.9 1.75-1.85 3.6-1.85 3.85 0 4.56 2.55 4.56 5.85V20h-4v-5.6c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 3V20H9z" />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-gray-700">LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/jerry-nelson-cobbinah-60ab911a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              linkedin.com/in/jerry-nelson-cobbinah
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Jerry Nelson Cobbinah. All rights reserved.
          </p>

          <div className="flex gap-4">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/jerry-nelson-cobbinah-60ab911a5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 6.1 6 7.48 6s2.5-1.12 2.5-2.5S8.86 1 7.48 1 4.98 2.12 4.98 3.5zM2 8h4v12H2zM9 8h3.6v1.8h.05c.5-.9 1.75-1.85 3.6-1.85 3.85 0 4.56 2.55 4.56 5.85V20h-4v-5.6c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 3V20H9z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>





    </>
  );
}
