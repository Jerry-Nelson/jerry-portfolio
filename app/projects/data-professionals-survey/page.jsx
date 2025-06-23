export default function DataProfessionalsSurvey() {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Data Professionals Survey – 2025</h1>

        <p className="text-lg mb-4">
          This project analyzes survey data from over 600 data professionals across various industries. It explores salary trends, job satisfaction, tool preferences, and career paths within the data space.
        </p>

        <div className="mb-10 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">📊 Excel Dashboard</h2>
            <a
              href="/projects/data-professionals-report.xlsx"
              download
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Download Excel File
            </a>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📝 PDF Report</h2>
            <a
              href="/projects/data-professionals-report.pdf"
              download
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download PDF Report
            </a>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📽️ PowerPoint Summary</h2>
            <a
              href="/projects/data-professionals-report.pptx"
              download
              className="inline-block bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
            >
              Download PowerPoint
            </a>
          </div>
        </div>

        <div className="text-sm text-gray-600 space-y-2">
          <p>
            <strong>Tools Used:</strong> Excel, Word (PDF), PowerPoint
          </p>
          <p>
            <strong>Key Insights:</strong> Salary gaps, career switch trends, tool preferences, and overall job satisfaction among data professionals.
          </p>
        </div>
      </div>
    </div>
  );
}
