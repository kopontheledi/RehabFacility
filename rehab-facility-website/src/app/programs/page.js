// app/programs/page.js
export default function ProgramsPage() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">Our Programs</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            We offer a variety of programs tailored to meet individual needs. Our programs focus on physical, mental, and emotional recovery, providing a comprehensive approach to rehabilitation.
          </p>
          <ul className="space-y-4">
            <li className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-2xl font-semibold text-blue-800">Detox Program</h2>
              <p className="text-gray-600">Our medically supervised detox program ensures a safe and comfortable withdrawal process for our clients.</p>
            </li>
            <li className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-2xl font-semibold text-blue-800">Inpatient Rehabilitation</h2>
              <p className="text-gray-600">Our comprehensive inpatient program includes therapy, support groups, and holistic treatments tailored to individual needs.</p>
            </li>
            <li className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-2xl font-semibold text-blue-800">Outpatient Care</h2>
              <p className="text-gray-600">Our outpatient care program provides ongoing support for clients who have completed the inpatient program or require flexible options.</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  