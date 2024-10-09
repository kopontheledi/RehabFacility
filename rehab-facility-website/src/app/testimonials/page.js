// app/testimonials/page.js
export default function TestimonialsPage() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">Testimonials</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Hear from those who have successfully recovered with our help. Our clients’ stories are a testament to the effectiveness of our programs and the support we provide.
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 shadow-md rounded-md">
              <p className="text-gray-600 italic">"I was struggling for years, but the compassionate staff at this facility helped me turn my life around. I am forever grateful."</p>
              <p className="mt-4 text-right text-blue-800 font-semibold">- Sarah J.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <p className="text-gray-600 italic">"The program was intense but exactly what I needed. I couldn’t have done it without the support from everyone here."</p>
              <p className="mt-4 text-right text-blue-800 font-semibold">- Mark W.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <p className="text-gray-600 italic">"Their holistic approach made all the difference for me. I now have the tools to live a healthier, sober life."</p>
              <p className="mt-4 text-right text-blue-800 font-semibold">- Jessica R.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  