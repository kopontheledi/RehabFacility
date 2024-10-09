// app/page.js
export default function HomePage() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-8">Welcome to Our Rehab Facility</h1>
        <p className="text-lg text-gray-700 mb-6">
          We offer a variety of rehabilitation programs to support your journey to recovery.
        </p>
        <a href="/programs" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
          Learn more about our programs
        </a>
      </div>
    </div>
  );
}
