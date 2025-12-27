import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiUsers, FiStar, FiArrowRight, FiSearch } from 'react-icons/fi';
import { courses } from '../data/courses';

function Courses() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeTab === 'all' || course.category === activeTab;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { key: 'all', label: 'All Courses', count: courses.length },
    { key: 'devops', label: 'DevOps', count: courses.filter(c => c.category === 'devops').length },
    { key: 'ai', label: 'AI & Data', count: courses.filter(c => c.category === 'ai').length },
    { key: 'fullstack', label: 'Full Stack', count: courses.filter(c => c.category === 'fullstack').length },
    { key: 'testing', label: 'Testing', count: courses.filter(c => c.category === 'testing').length },
    { key: 'other', label: 'Other', count: courses.filter(c => c.category === 'other').length },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-indigo-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Courses</span>
            </h1>
            <p className="text-secondary-300 text-lg max-w-2xl mx-auto mb-8">
              Industry-leading training programs designed to transform your career. 
              Learn from experts with 14+ years of experience.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400 text-xl" />
              <input
                type="text"
                placeholder="Search courses, skills, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-secondary-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Filters & Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveTab(filter.key)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeTab === filter.key
                    ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white text-secondary-600 border border-secondary-200 hover:border-purple-500 hover:text-purple-600'
                }`}
              >
                {filter.label}
                <span className={`ml-2 text-sm ${activeTab === filter.key ? 'text-white/80' : 'text-secondary-400'}`}>
                  ({filter.count})
                </span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-secondary-500">
              Showing <span className="font-semibold text-secondary-800">{filteredCourses.length}</span> courses
              {searchQuery && <span> for "<span className="text-purple-600 font-semibold">{searchQuery}</span>"</span>}
            </p>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-purple-200">
                  {/* Gradient Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-pink-50/0 to-indigo-50/0 group-hover:from-purple-50/50 group-hover:via-pink-50/30 group-hover:to-indigo-50/50 transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Course Image */}
                  <div className="h-56 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {course.popular && (
                      <span className="absolute top-4 right-4 z-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        ⭐ Popular
                      </span>
                    )}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold capitalize shadow-lg backdrop-blur-sm">
                        {course.category === 'ai' ? 'AI & Data' : course.category === 'fullstack' ? 'Full Stack' : course.category}
                      </span>
                    </div>
                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <FiStar className="text-amber-500 fill-amber-500" />
                      <span className="text-sm font-bold text-gray-800">{course.rating}</span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6 relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      {course.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{course.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.skills.slice(0, 2).map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg text-xs font-semibold border border-purple-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 2 && (
                        <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-xs font-semibold border border-indigo-200">
                          +{course.skills.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-gray-600 text-sm">
                          <FiClock className="text-purple-500" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-600 text-sm">
                          <FiUsers className="text-pink-500" />
                          {course.students}
                        </span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{course.price}</span>
                        <span className="text-gray-400 text-xs ml-1">/ course</span>
                      </div>
                      <Link 
                        to={`/course/${course.id}`}
                        className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-purple-700 hover:via-pink-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105 transform"
                      >
                        <span className="text-sm">View</span>
                        <FiArrowRight className="text-sm" />
                      </Link>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiSearch className="text-4xl text-secondary-400" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-2">No courses found</h3>
              <p className="text-secondary-500 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't decide which course is right for you?
          </h2>
          <p className="text-white/80 mb-8">
            Book a free counseling session with our experts to help you choose the perfect career path.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-secondary-100 transition-all"
          >
            Get Free Career Guidance <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Courses;

