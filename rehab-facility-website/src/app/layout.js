// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Rehab Facility',
  description: 'A place for recovery and support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex space-x-4">
              <a href="/" className="text-white hover:underline">Home</a>
              <a href="/about" classNName="text-white hover:underline">About</a>
              <a href="/programs" className="text-white hover:underline">Programs</a>
              <a href="/testimonials" className="text-white hover:underline">Testimonials</a>
              <a href="/contact" className="text-white hover:underline">Contact</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="text-center py-6">
          <p>© 2024 Rehab Facility. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
