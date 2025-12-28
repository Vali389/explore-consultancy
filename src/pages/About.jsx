import { Link } from 'react-router-dom';
import { 
  FiUsers, FiAward, FiBriefcase, FiTrendingUp, FiTarget, 
  FiHeart, FiZap, FiCheckCircle, FiArrowRight, FiMonitor,
  FiBook, FiPlay, FiGlobe, FiClock, FiHeadphones, FiLayers,
  FiCode, FiDatabase, FiCloud, FiShield
} from 'react-icons/fi';
import { testimonials, companies } from '../data/courses';
import { FaQuoteLeft, FaAws, FaDocker, FaJenkins, FaGithub, FaPython, FaJava } from 'react-icons/fa';

function About() {
  const stats = [
    { icon: <FiUsers />, number: '15000+', label: 'Students Trained' },
    { icon: <FiBriefcase />, number: '500+', label: 'Hiring Partners' },
    { icon: <FiAward />, number: '14+', label: 'Years Experience' },
    { icon: <FiTrendingUp />, number: '95%', label: 'Placement Rate' },
  ];

  const values = [
    {
      icon: <FiTarget className="text-3xl" />,
      title: 'Our Mission',
      description: 'To empower aspiring IT professionals with industry-relevant skills through quality education, hands-on training, and 100% placement support.'
    },
    {
      icon: <FiHeart className="text-3xl" />,
      title: 'Our Vision',
      description: 'To become India\'s most trusted IT training institute, transforming lives through technology education and creating job-ready professionals.'
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: 'Our Values',
      description: 'Excellence in training, student-first approach, practical learning, continuous innovation, and unwavering commitment to career success.'
    },
  ];

  const whyChooseUs = [
    { icon: <FiMonitor />, title: 'Live Interactive Classes', desc: 'Real-time sessions with industry experts, not pre-recorded videos' },
    { icon: <FiCode />, title: 'Hands-On Projects', desc: 'Build real-world projects to add to your portfolio' },
    { icon: <FiUsers />, title: 'Small Batch Size', desc: '15-20 students per batch for personalized attention' },
    { icon: <FiHeadphones />, title: 'Lifetime Support', desc: 'Doubt clearing and career support even after course completion' },
    { icon: <FiClock />, title: 'Flexible Timings', desc: 'Weekday and weekend batches to suit your schedule' },
    { icon: <FiBriefcase />, title: '100% Placement', desc: 'Guaranteed placement assistance with top companies' },
    { icon: <FiBook />, title: 'Updated Curriculum', desc: 'Course content aligned with latest industry requirements' },
    { icon: <FiGlobe />, title: 'Global Recognition', desc: 'Alumni working in 50+ countries worldwide' },
  ];

  const learningApproach = [
    { step: '01', title: 'Foundation Building', desc: 'Master core concepts with structured learning modules', icon: <FiLayers /> },
    { step: '02', title: 'Practical Labs', desc: 'Apply knowledge through hands-on exercises and projects', icon: <FiCode /> },
    { step: '03', title: 'Real-World Scenarios', desc: 'Work on industry-level projects and case studies', icon: <FiDatabase /> },
    { step: '04', title: 'Interview Prep', desc: 'Resume building, mock interviews, and placement support', icon: <FiBriefcase /> },
  ];

  const technologies = [
    { name: 'AWS', icon: <FaAws />, color: 'text-orange-500' },
    { name: 'Docker', icon: <FaDocker />, color: 'text-indigo-500' },
    { name: 'Jenkins', icon: <FaJenkins />, color: 'text-red-500' },
    { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-800' },
    { name: 'Python', icon: <FaPython />, color: 'text-yellow-500' },
    { name: 'Java', icon: <FaJava />, color: 'text-red-600' },
    { name: 'Cloud', icon: <FiCloud />, color: 'text-sky-500' },
    { name: 'Security', icon: <FiShield />, color: 'text-green-500' },
  ];

  const milestones = [
    { year: '2010', title: 'Founded', description: 'Come and Learn started with a vision to provide quality IT training' },
    { year: '2013', title: '1000+ Students', description: 'Crossed the milestone of training 1000 students' },
    { year: '2016', title: 'Online Launch', description: 'Launched online training programs for global reach' },
    { year: '2018', title: '100+ Partners', description: 'Built network of 100+ hiring partners' },
    { year: '2020', title: '10000+ Alumni', description: 'Celebrated 10000+ successful placements' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as India\'s #1 DevOps training institute' },
  ];

  const team = [
    { name: 'Nagaraju', role: 'Founder & Chief Trainer', expertise: 'DevOps & Cloud', experience: '18+ Years' },
    { name: 'Pradeep Kumar', role: 'Technical Director', expertise: 'Full Stack Development', experience: '15+ Years' },
    { name: 'Sravani', role: 'Lead Trainer', expertise: 'Data Science & AI', experience: '12+ Years' },
    { name: 'Venkat', role: 'Placement Head', expertise: 'Industry Relations', experience: '10+ Years' },
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'NASSCOM Member',
    'AWS Training Partner',
    'Google Cloud Partner',
    'Microsoft Certified',
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-indigo-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500 px-4 py-2 rounded-full text-amber-400 text-sm font-semibold mb-6">
              <FiAward /> Since 2010 - 14+ Years of Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-white">Come and Learn</span>
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              India's premier IT training institute, empowering professionals since 2010 with 
              industry-focused training and unparalleled placement support.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary-500 to-primary-600 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-3 h-12">
                  <div className="text-4xl opacity-90">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl font-bold text-secondary-800 mt-2 mb-6">
                14+ Years of Transforming Careers
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  Come and Learn was founded in 2010 with a simple mission: to bridge the gap between 
                  academic education and industry requirements. What started as a small training center 
                  in Bangalore has grown into one of India's most trusted IT training institutes.
                </p>
                <p>
                  Our founder, with over 18 years of industry experience, recognized that traditional 
                  education wasn't preparing students for real-world challenges. This inspired the 
                  creation of a curriculum focused on practical, hands-on learning with industry-standard tools.
                </p>
                <p>
                  Today, we've trained over 15,000 professionals who are now working at top companies 
                  like Amazon, Google, Microsoft, TCS, Infosys, and many more. Our success lies in our 
                  commitment to quality education and our students' career success.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  to="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/30"
                >
                  Explore Courses <FiArrowRight />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
                    alt="Team collaboration"
                    className="rounded-2xl shadow-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=200&fit=crop" 
                    alt="Training session"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=200&fit=crop" 
                    alt="Students learning"
                    className="rounded-2xl shadow-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" 
                    alt="Placement success"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-secondary-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <FiAward className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary-800">Rated #1</div>
                    <div className="text-sm text-secondary-500">DevOps Training</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Why Come and Learn</span>
            <h2 className="text-4xl font-bold text-secondary-800 mt-2">Why Students Choose Us</h2>
            <p className="text-secondary-500 max-w-2xl mx-auto mt-4">
              What sets us apart from other training institutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-secondary-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 text-2xl group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary-800 mb-2">{item.title}</h3>
                <p className="text-secondary-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Methodology</span>
              <h2 className="text-4xl font-bold text-secondary-800 mt-2 mb-6">
                Industry-Proven Learning Approach
              </h2>
              <p className="text-secondary-600 mb-8">
                Our training methodology is designed to take you from basics to job-ready in the shortest time possible, 
                with a focus on practical skills that employers actually need.
              </p>

              <div className="space-y-6">
                {learningApproach.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-800 mb-1 flex items-center gap-2">
                        {item.icon} {item.title}
                      </h3>
                      <p className="text-secondary-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary-900 to-indigo-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Technologies We Cover</h3>
              <div className="grid grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
                  >
                    <div className={`text-3xl mb-2 ${tech.color}`}>{tech.icon}</div>
                    <div className="text-xs font-medium">{tech.name}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <FiPlay className="text-primary-400" />
                  <span className="font-semibold">Free Demo Available</span>
                </div>
                <p className="text-sm text-white/70 mb-4">
                  Experience our training quality before enrolling
                </p>
                <Link 
                  to="/contact"
                  className="block w-full py-3 bg-primary-500 text-center rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  Book Free Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-4xl font-bold text-secondary-800 mt-2">Our Purpose & Principles</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-secondary-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary-800 mb-4">{value.title}</h3>
                <p className="text-secondary-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary-800">Certifications & Recognitions</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-secondary-100"
              >
                <FiCheckCircle className="text-green-500" />
                <span className="text-secondary-700 font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-4xl font-bold text-secondary-800 mt-2">Milestones & Achievements</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl border border-secondary-100 shadow-sm hover:shadow-lg transition-all">
                      <div className="text-primary-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-secondary-800 mb-2">{milestone.title}</h3>
                      <p className="text-secondary-500">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold z-10 flex-shrink-0">
                    <FiCheckCircle />
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Meet The Team</span>
            <h2 className="text-4xl font-bold text-secondary-800 mt-2">Our Expert Trainers</h2>
            <p className="text-secondary-500 max-w-2xl mx-auto mt-4">
              Learn from industry veterans with decades of combined experience at top tech companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-2xl p-6 text-center border border-secondary-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-secondary-800 mb-1">{member.name}</h3>
                <p className="text-primary-500 font-medium text-sm mb-3">{member.role}</p>
                <div className="space-y-1 text-sm text-secondary-500">
                  <p>{member.expertise}</p>
                  <p className="font-semibold">{member.experience} Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Our Hiring Partners</h2>
            <p className="text-secondary-500">Our alumni are placed at leading companies worldwide</p>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll-slow gap-8">
              {[...companies, ...companies].map((company, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-32 h-24 bg-white rounded-xl flex flex-col items-center justify-center gap-2 border border-secondary-100"
                >
                  <div className={`w-10 h-10 ${company.color || 'bg-indigo-500'} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                    {company.abbr}
                  </div>
                  <span className="text-secondary-600 font-medium text-xs">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaQuoteLeft className="text-5xl text-primary-400 mx-auto mb-8" />
            <p className="text-2xl text-white leading-relaxed mb-8">
              "{testimonials[0]?.text || 'The DevOps training at Come and Learn was exceptional! The hands-on labs with Docker and Kubernetes helped me crack my interview at Amazon.'}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {testimonials[0]?.name?.charAt(0) || 'R'}
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-lg">{testimonials[0]?.name || 'Rajesh Kumar'}</div>
                <div className="text-secondary-300">{testimonials[0]?.role || 'DevOps Engineer at Amazon'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Come and Learn?
          </h2>
          <p className="text-white/80 mb-8">
            Start your journey to a successful IT career today. Book a free demo class!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-secondary-100 transition-all"
            >
              Book Free Demo <FiArrowRight />
            </Link>
            <Link 
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
