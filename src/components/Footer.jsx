import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiClock, FiAward, FiUsers, FiTrendingUp, FiSend } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <>
      {/* Stats Bar */}
      <div className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">15,000+</div>
              <div className="text-sm text-white/90">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
              <div className="text-sm text-white/90">Hiring Partners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">14+</div>
              <div className="text-sm text-white/90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">95%</div>
              <div className="text-sm text-white/90">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <span className="text-3xl font-bold text-white tracking-tight">
                Come and Learn
              </span>
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                India's premier IT training institute offering industry-focused courses with 100% placement support. Transform your career with hands-on training from industry experts.
              </p>
              <div className="flex gap-3 mt-6">
                {[
                  { Icon: FaFacebookF, url: 'https://facebook.com/comeandlearn' },
                  { Icon: FaTwitter, url: 'https://twitter.com/comeandlearn' },
                  { Icon: FaLinkedinIn, url: 'https://linkedin.com/company/comeandlearn' },
                  { Icon: FaInstagram, url: 'https://instagram.com/comeandlearn' },
                  { Icon: FaYoutube, url: 'https://youtube.com/@comeandlearn' },
                ].map(({ Icon, url }, index) => (
                  <a 
                    key={index} 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-300 hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 hover:text-white transition-all hover:scale-110 shadow-lg"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-5 text-lg">Quick Links</h4>
              <ul className="space-y-3">
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
                      className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-white font-bold mb-5 text-lg">Popular Courses</h4>
              <ul className="space-y-3">
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
                      className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {course.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-5 text-lg">Get In Touch</h4>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex gap-3 items-start">
                  <FiMapPin className="text-white flex-shrink-0 mt-1" />
                  <span>Hyderabad, Telangana</span>
                </li>
                <li className="flex gap-3 items-center">
                  <FiPhone className="text-white" />
                  <span>+91 98667 63227</span>
                </li>
                <li className="flex gap-3 items-center">
                  <FiMail className="text-white" />
                  <span>info@comeandlearn.com</span>
                </li>
                <li className="flex gap-3 items-center">
                  <FiClock className="text-white" />
                  <span>Mon - Sat: 9 AM - 8 PM</span>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="mt-6 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
                <h5 className="text-white font-semibold mb-2 text-sm">Newsletter</h5>
                <p className="text-slate-300 text-xs mb-3">Get updates on new courses</p>
                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-slate-900"
                  />
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2">
                    <span>Subscribe</span>
                    <FiSend />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="mb-12 pt-8 border-t border-slate-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FiAward className="text-white text-xl" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">ISO Certified</div>
                  <div className="text-slate-400 text-xs">Quality Training</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FiUsers className="text-white text-xl" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Industry Experts</div>
                  <div className="text-slate-400 text-xs">Expert Trainers</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FiTrendingUp className="text-white text-xl" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">100% Placement</div>
                  <div className="text-slate-400 text-xs">Job Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2024 Come and Learn. All Rights Reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((link) => (
                <a key={link} href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/9198667632270"
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

