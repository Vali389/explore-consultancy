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
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-blue-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Courses</span>
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
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
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
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white text-secondary-600 border border-secondary-200 hover:border-primary-500 hover:text-primary-500'
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
              {searchQuery && <span> for "<span className="text-primary-500">{searchQuery}</span>"</span>}
            </p>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-secondary-100 group">
                  {/* Course Image */}
                  <div className="h-52 relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {course.popular && (
                      <span className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {course.category === 'ai' ? 'AI & Data' : course.category === 'fullstack' ? 'Full Stack' : course.category}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.skills.slice(0, 3).map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-slate-100 text-secondary-600 rounded-md text-sm font-medium border border-secondary-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="px-3 py-1.5 bg-primary-50 text-primary-600 rounded-md text-sm font-medium">
                          +{course.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-secondary-800 mb-2 group-hover:text-primary-500 transition-colors">
                      {course.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-secondary-500 text-sm mb-4 line-clamp-2">{course.description}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-primary-500">{course.price}</span>
                      <span className="text-secondary-400 text-sm ml-1">/ course</span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-secondary-500 mb-4 pt-4 border-t border-secondary-100">
                      <span className="flex items-center gap-1.5">
                        <FiClock className="text-secondary-400" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiUsers className="text-secondary-400" />
                        {course.students}
                      </span>
                      <span className="flex items-center gap-1.5 text-amber-500">
                        <FiStar className="fill-current" />
                        {course.rating}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      to={`/course/${course.id}`}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-primary-600 hover:to-primary-700 hover:shadow-lg"
                    >
                      <FiArrowRight /> View Details
                    </Link>
                  </div>
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

