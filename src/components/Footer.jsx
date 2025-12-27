import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="bg-secondary-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <span className="font-logo text-2xl gradient-text">GamutGurus</span>
              <p className="mt-4 text-secondary-400 text-sm">
                India's premier IT training institute offering industry-focused courses with 100% placement support.
              </p>
              <div className="flex gap-4 mt-6">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, index) => (
                  <a key={index} href="#" className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center text-secondary-400 hover:bg-primary-500 hover:text-white transition-all">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Courses', path: '/courses' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-secondary-400 hover:text-primary-500 transition-colors text-sm">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-white font-semibold mb-4">Our Courses</h4>
              <ul className="space-y-2">
                {[
                  { name: 'DevOps Training', id: 1 },
                  { name: 'AWS DevOps', id: 2 },
                  { name: 'Python Full Stack', id: 10 },
                  { name: 'Java Full Stack', id: 9 },
                  { name: 'Software Testing', id: 12 },
                  { name: 'AI & ML', id: 5 },
                ].map((course) => (
                  <li key={course.name}>
                    <Link to={`/course/${course.id}`} className="text-secondary-400 hover:text-primary-500 transition-colors text-sm">{course.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-secondary-400">
                <li className="flex gap-2">
                  <FiMapPin className="text-primary-500 flex-shrink-0 mt-1" />
                  <span>Kundalahalligate, Bangalore - 560066</span>
                </li>
                <li className="flex gap-2">
                  <FiPhone className="text-primary-500" />
                  <span>+91 96276 62769</span>
                </li>
                <li className="flex gap-2">
                  <FiMail className="text-primary-500" />
                  <span>info@gamutgurus.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-500 text-sm">© 2024 Gamut Gurus. All Rights Reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((link) => (
                <a key={link} href="#" className="text-secondary-500 hover:text-primary-500 transition-colors text-sm">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/919627662769"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform z-50 animate-pulse-ring"
      >
        <FaWhatsapp />
      </a>

      {/* Floating Call Panel */}
      <div className="fixed top-1/2 right-0 -translate-y-1/2 bg-white rounded-l-xl shadow-lg z-50 hidden lg:block">
        <div className="bg-secondary-800 text-white px-4 py-2 rounded-tl-xl font-semibold text-sm">
          Call us for any queries
        </div>
        <div className="py-2">
          {[
            { flag: '🇮🇳', number: '+91 9627662769', color: 'text-green-600' },
            { flag: '🇮🇳', number: '+91 63666 48666', color: 'text-green-600' },
            { flag: '🇮🇳', number: '+91 94489 72000', color: 'text-green-600' },
            { flag: '🇨🇦', number: '+1 (866)693-2179', color: 'text-red-600' },
          ].map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone.number.replace(/\s/g, '')}`}
              className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors"
            >
              <span className="text-xl">{phone.flag}</span>
              <span className={`font-medium ${phone.color}`}>{phone.number}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;

