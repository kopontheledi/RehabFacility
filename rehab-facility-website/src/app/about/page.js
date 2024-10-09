// app/about/page.js
export default function AboutPage() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-8">Our Programs</h1>
          <p className="text-lg text-gray-700 mb-6">
            We offer a variety of programs tailored to meet individual needs. Our programs focus on physical, mental, and emotional recovery, providing a comprehensive approach to rehabilitation.
          </p>
  
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Detox Program</h2>
          <p className="text-gray-700 mb-6">
            Our medically supervised detox program ensures a safe and comfortable withdrawal process for our clients.
          </p>
  
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Inpatient Rehabilitation</h2>
          <p className="text-gray-700 mb-6">
            Our comprehensive inpatient program includes therapy, support groups, and holistic treatments tailored to individual needs.
          </p>
  
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Outpatient Care</h2>
          <p className="text-gray-700 mb-6">
            Our outpatient care program provides ongoing support for clients who have completed the inpatient program or require flexible options.
          </p>
        </div>
        <footer className="text-center py-6">
          <p>© 2024 Rehab Facility. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  