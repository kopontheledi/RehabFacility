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
          <nav>
            <a href="/">Home</a>
            <a href="/about/about.js">About</a>
            <a href="/programs">Programs</a>
            <a href="/testimonials">Testimonials</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Rehab Facility. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
