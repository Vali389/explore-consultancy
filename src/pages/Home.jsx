import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiClock, FiUsers, FiAward, FiBookOpen, FiMonitor, 
  FiArrowRight, FiStar, FiBriefcase, FiTrendingUp, 
  FiHeadphones, FiPlay, FiPhone,   FiChevronLeft, FiChevronRight
} from 'react-icons/fi';
import { 
  FaDocker, FaPython, FaJava, FaJenkins, FaGitAlt, FaAws, FaQuoteLeft
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiSelenium } from 'react-icons/si';
import { courses, testimonials } from '../data/courses';

function Home() {
  const totalSlides = Math.ceil(testimonials.length / 3);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const tools = [
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'Jenkins', icon: <FaJenkins /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'Ansible', icon: <SiAnsible /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Selenium', icon: <SiSelenium /> }
  ];

  const features = [
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'Cherry Picked Trainers',
      description: 'Our trainers have over 14+ years of real-time DevOps and development experience in top MNCs.'
    },
    {
      icon: <FiBookOpen className="text-3xl" />,
      title: 'Curated Content',
      description: 'Industry-focused curriculum designed to address current market demands with hands-on practical training.'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: '360° Feedback System',
      description: 'Regular feedback collection from participants to continuously improve our training delivery and content.'
    },
    {
      icon: <FiMonitor className="text-3xl" />,
      title: 'Live Project Experience',
      description: 'Work on 5+ real-time projects during the course to gain practical experience that employers value.'
    },
    {
      icon: <FiBriefcase className="text-3xl" />,
      title: '100% Placement Support',
      description: 'Dedicated placement cell with 500+ hiring partners. Resume building, mock interviews, and job referrals.'
    },
    {
      icon: <FiHeadphones className="text-3xl" />,
      title: 'Lifetime Support',
      description: 'Get lifetime access to course materials, recorded sessions, and doubt clearing support even after completion.'
    }
  ];

  const learningPath = [
    {
      step: '01',
      icon: <FiBookOpen className="text-3xl" />,
      title: 'Enroll & Get Started',
      description: 'Choose your course and enroll. Get access to course materials and join the learning community.'
    },
    {
      step: '02',
      icon: <FiMonitor className="text-3xl" />,
      title: 'Learn with Experts',
      description: 'Attend live sessions with industry experts. Learn through hands-on labs and real-world projects.'
    },
    {
      step: '03',
      icon: <FiAward className="text-3xl" />,
      title: 'Build Portfolio',
      description: 'Complete 5+ real-time projects and build a strong portfolio that showcases your skills to employers.'
    },
    {
      step: '04',
      icon: <FiBriefcase className="text-3xl" />,
      title: 'Get Placed',
      description: 'Get 100% placement support with resume building, mock interviews, and connections to 500+ hiring partners.'
    }
  ];

  const popularCourses = courses.filter(c => c.popular).slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500 px-4 py-2 rounded-full text-primary-400 text-sm font-semibold mb-6">
                <FiStar /> India's #1 IT Training Institute
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Career with{' '}
                <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                  Come and Learn
                </span>
              </h1>
              
              <p className="text-lg text-secondary-300 mb-8 max-w-xl">
                Master DevOps, Cloud, Full Stack Development & Software Testing with 
                industry expert trainers. Get hands-on experience with real-time projects 
                and 100% placement assistance.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-8">
                {[
                  { number: '15000+', label: 'Students Trained' },
                  { number: '500+', label: 'Hiring Partners' },
                  { number: '14+', label: 'Years Experience' },
                  { number: '95%', label: 'Placement Rate' },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-amber-400">{stat.number}</div>
                    <div className="text-sm text-secondary-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all">
                  <FiPlay /> Explore Courses
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                  <FiPhone /> Book Free Demo
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80"
                  alt="IT Training and Education"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white">
                    <FiAward className="text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary-800">14+ Years</div>
                    <div className="text-sm text-secondary-500">Experience</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                    <FiBriefcase className="text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary-800">500+</div>
                    <div className="text-sm text-secondary-500">Hiring Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Banner */}
        <div className="mt-16 bg-black/30 py-4 overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {[...tools, ...tools].map((tool, index) => (
              <div key={index} className="flex items-center gap-2 text-white/70 whitespace-nowrap">
                <span className="text-2xl text-amber-400">{tool.icon}</span>
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">Explore Our Courses</h2>
            <p className="text-secondary-500 max-w-2xl mx-auto">
              Transform your career with hands-on training from industry experts. Master in-demand skills with real-world projects and get 100% placement support to land your dream job.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <div key={course.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-gray-200">
                {/* Gradient Background Overlay */}
                <div className="absolute inset-0 bg-gray-50/0 group-hover:bg-gray-50/50 transition-all duration-500 pointer-events-none"></div>
                
                {/* Course Image */}
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 right-4 z-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    ⭐ Popular
                  </span>
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <FiStar className="text-amber-500 fill-amber-500" />
                    <span className="text-sm font-bold text-gray-800">{course.rating}</span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 relative z-10">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-all duration-300">
                    {course.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{course.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.slice(0, 2).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold border border-gray-200">
                        +{course.skills.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-gray-600 text-sm">
                        <FiClock className="text-gray-600" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-600 text-sm">
                        <FiUsers className="text-pink-500" />
                        {course.students}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    to={`/course/${course.id}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-black text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform"
                  >
                    <FiArrowRight /> Learn More
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-black/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all"
            >
              View All Courses <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mt-4 mb-6">
              The Come and Learn Advantage
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We are committed to providing quality training that transforms careers with our unique approach to IT education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-2xl flex items-center justify-center text-sky-600 group-hover:from-sky-500 group-hover:to-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <div className="text-3xl">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - Auto Sliding */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="text-4xl font-bold text-white mt-2">What Our Students Say</h2>
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-6 px-2">
                      {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                        <div 
                          key={index}
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:border-primary-400/50 transition-all"
                        >
                          <FaQuoteLeft className="text-3xl text-primary-400 mb-4" />
                          <p className="text-white text-base md:text-lg leading-relaxed mb-6 line-clamp-4">
                            "{testimonial.text}"
                          </p>
                          <div className="flex items-center gap-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-primary-400"
                            />
                            <div className="flex-1">
                              <div className="font-bold text-white">{testimonial.name}</div>
                              <div className="text-secondary-300 text-sm">{testimonial.role}</div>
                              <div className="flex gap-1 mt-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <FiStar key={i} className="text-amber-400 fill-current text-xs" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-primary-500 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all hidden md:flex"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all hidden md:flex"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { icon: <FiUsers />, number: '15000+', label: 'Students Trained' },
              { icon: <FiBriefcase />, number: '500+', label: 'Hiring Partners' },
              { icon: <FiAward />, number: '14+', label: 'Years Experience' },
              { icon: <FiTrendingUp />, number: '95%', label: 'Placement Rate' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-3 h-12">
                  <div className="text-4xl opacity-90">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gray-600 font-semibold text-sm uppercase tracking-wider">Learning Path</span>
            <h2 className="text-4xl font-bold text-secondary-800 mt-2 mb-4">How It Works</h2>
            <p className="text-secondary-500 max-w-2xl mx-auto">
              Your journey from enrollment to placement in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPath.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < learningPath.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gray-300 z-0" style={{ width: 'calc(100% - 2rem)', transform: 'translateX(1rem)' }}></div>
                )}
                
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group-hover:border-gray-400">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-700 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-secondary-800 mb-3 text-center">{step.title}</h3>
                  <p className="text-secondary-600 text-sm text-center leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link 
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              Start Your Journey <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your IT Career Journey?
          </h2>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who transformed their careers with Come and Learn. Book a free demo class today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Free Demo <FiArrowRight />
            </Link>
            <Link 
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/20 transition-all hover:scale-105"
            >
              Explore Courses <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

