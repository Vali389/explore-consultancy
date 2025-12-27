import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { 
  FiClock, FiUsers, FiStar, FiArrowRight, FiCheck, 
  FiCalendar, FiAward, FiPlay, FiDownload, FiPhone 
} from 'react-icons/fi';
import { courses } from '../data/courses';

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id));

  // Scroll to top when course ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-800 mb-4">Course Not Found</h1>
          <p className="text-secondary-500 mb-8">The course you're looking for doesn't exist.</p>
          <Link 
            to="/courses"
            className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
          >
            View All Courses
          </Link>
        </div>
      </div>
    );
  }

  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-indigo-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-secondary-400 text-sm mb-6">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
                <span>/</span>
                <span className="text-white">{course.title}</span>
              </div>

              {course.popular && (
                <span className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  🔥 Popular Course
                </span>
              )}

              <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-lg text-secondary-300 mb-8">{course.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <FiClock className="text-primary-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUsers className="text-primary-400" />
                  <span>{course.students} Students</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400">
                  <FiStar className="fill-current" />
                  <span>{course.rating} Rating</span>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {course.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <span className="text-4xl font-bold text-amber-400">{course.price}</span>
                  <span className="text-secondary-400 ml-2">/ course</span>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all"
                >
                  <FiPhone /> Enroll Now
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                  <FiDownload /> Download Brochure
                </button>
              </div>
            </div>

            {/* Course Image */}
            <div className="relative hidden lg:block">
              <img 
                src={course.image}
                alt={course.title}
                className="rounded-2xl shadow-2xl w-full"
              />
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <FiPlay className="text-primary-500 text-3xl ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About Course */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-100 mb-8">
                <h2 className="text-2xl font-bold text-secondary-800 mb-6">About This Course</h2>
                <div className="prose prose-secondary max-w-none">
                  {course.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-secondary-600 mb-4 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Tool Stack (if available) */}
              {course.toolStack && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-100 mb-8">
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">Automation Tool Stack</h2>
                  <p className="text-secondary-500 mb-6">Learn top automation testing tools used by QA engineers worldwide</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.toolStack.map((tool, idx) => (
                      <div 
                        key={idx}
                        className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100"
                      >
                        <h3 className="font-bold text-secondary-800 mb-1">{tool.name}</h3>
                        <p className="text-sm text-secondary-500">{tool.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Curriculum */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-100 mb-8">
                <h2 className="text-2xl font-bold text-secondary-800 mb-2">Course Curriculum</h2>
                <p className="text-secondary-500 mb-6">{course.duration} of in-depth training</p>
                <div className="space-y-4">
                  {course.curriculum.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 bg-slate-50 rounded-xl border border-secondary-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="font-semibold text-secondary-800">{item.topic}</div>
                            <span className="text-sm text-primary-500 font-medium bg-primary-50 px-3 py-1 rounded-full">
                              Week {item.week}
                            </span>
                          </div>
                          {item.subtopics && (
                            <ul className="mt-3 grid md:grid-cols-2 gap-2">
                              {item.subtopics.map((subtopic, subIdx) => (
                                <li key={subIdx} className="flex items-center gap-2 text-sm text-secondary-600">
                                  <FiCheck className="text-green-500 flex-shrink-0" />
                                  {subtopic}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-100">
                <h2 className="text-2xl font-bold text-secondary-800 mb-6">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <FiCheck className="text-green-600 text-sm" />
                      </div>
                      <span className="text-secondary-700">{skill}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <FiCheck className="text-green-600 text-sm" />
                    </div>
                    <span className="text-secondary-700">Real-world Projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <FiCheck className="text-green-600 text-sm" />
                    </div>
                    <span className="text-secondary-700">Industry Best Practices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <FiCheck className="text-green-600 text-sm" />
                    </div>
                    <span className="text-secondary-700">Interview Preparation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <FiCheck className="text-green-600 text-sm" />
                    </div>
                    <span className="text-secondary-700">Resume Building</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Sticky Card */}
              <div className="sticky top-24">
                {/* Enrollment Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-100 mb-6">
                  <h3 className="text-xl font-bold text-secondary-800 mb-4">Course Includes</h3>
                  <div className="space-y-4">
                    {[
                      { icon: <FiPlay />, text: 'Live Interactive Sessions' },
                      { icon: <FiCalendar />, text: `${course.duration} Duration` },
                      { icon: <FiDownload />, text: 'Downloadable Resources' },
                      { icon: <FiAward />, text: 'Certificate of Completion' },
                      { icon: <FiUsers />, text: 'Small Batch Size (15-20)' },
                      { icon: <FiPhone />, text: 'Lifetime Doubt Support' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-secondary-600">
                        <span className="text-primary-500">{item.icon}</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-secondary-100">
                    <div className="text-3xl font-bold text-primary-500 mb-4">{course.price}</div>
                    <Link 
                      to="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all mb-3"
                    >
                      Enroll Now
                    </Link>
                    <button className="flex items-center justify-center gap-2 w-full py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-50 transition-colors">
                      Book Free Demo
                    </button>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Speak with our counselor to find the right course for your career goals.
                  </p>
                  <a 
                    href="tel:+919627662769"
                    className="inline-flex items-center gap-2 text-white font-semibold"
                  >
                    <FiPhone /> +91 96276 62769
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary-800 mb-8">Related Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCourses.map((relCourse) => (
                <div key={relCourse.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-secondary-100">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={relCourse.image} 
                      alt={relCourse.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-800 mb-2">{relCourse.title}</h3>
                    <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <FiClock className="text-secondary-400" />
                        {relCourse.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-amber-500">
                        <FiStar className="fill-current" />
                        {relCourse.rating}
                      </span>
                    </div>
                    <button 
                      onClick={() => {
                        navigate(`/course/${relCourse.id}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all cursor-pointer"
                    >
                      <FiArrowRight /> View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default CourseDetail;

