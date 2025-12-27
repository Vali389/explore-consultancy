import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
                Come and Learn
              </span>
              <p className="mt-4 text-secondary-400 text-sm">
                India's premier IT training institute offering industry-focused courses with 100% placement support.
              </p>
              <div className="flex gap-4 mt-6">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, index) => (
                  <a key={index} href="#" className="w-10 h-10 bg-purple-800/50 rounded-full flex items-center justify-center text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 hover:text-white transition-all">
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
                    <Link 
                      to={link.path} 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-purple-200 hover:text-pink-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
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
                    <Link 
                      to={`/course/${course.id}`} 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-purple-200 hover:text-pink-400 transition-colors text-sm"
                    >
                      {course.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-secondary-400">
                <li className="flex gap-2">
                  <FiMapPin className="text-pink-400 flex-shrink-0 mt-1" />
                  <span>Kundalahalligate, Bangalore - 560066</span>
                </li>
                <li className="flex gap-2">
                  <FiPhone className="text-pink-400" />
                  <span>+91 96276 62769</span>
                </li>
                <li className="flex gap-2">
                  <FiMail className="text-pink-400" />
                  <span>info@comeandlearn.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-purple-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-500 text-sm">© 2024 Come and Learn. All Rights Reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((link) => (
                <a key={link} href="#" className="text-purple-300 hover:text-pink-400 transition-colors text-sm">{link}</a>
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
    </>
  );
}

export default Footer;

