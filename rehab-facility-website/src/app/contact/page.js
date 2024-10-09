// app/contact/page.js
export default function ContactPage() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            We’re here to help. If you or a loved one need assistance, feel free to reach out. Our support team is available 24/7.
          </p>
          <form className="bg-white p-8 shadow-md rounded-md max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-left font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-left font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-left font-semibold mb-2">Message</label>
              <textarea
                id="message"
                className="w-full p-3 border rounded-md"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  