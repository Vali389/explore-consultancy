export const courses = [
  {
    id: 1,
    category: 'devops',
    title: 'DevOps Engineer',
    description: 'Master CI/CD, Docker, Kubernetes, AWS, and automation tools to become a DevOps expert.',
    fullDescription: `Our comprehensive DevOps Engineering program is designed to transform you into a skilled DevOps professional. You'll learn to automate software development, deployment, and operations using industry-standard tools and practices.

This course covers everything from version control and CI/CD pipelines to container orchestration and cloud infrastructure. You'll work on real-world projects that simulate actual enterprise environments.`,
    duration: '3 months',
    students: '500+',
    rating: '4.8',
    popular: true,
    price: '₹45,000',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/DevOps-xl.webp',
    curriculum: [
      { week: '1-2', topic: 'Linux Fundamentals & Shell Scripting' },
      { week: '3-4', topic: 'Version Control with Git & GitHub' },
      { week: '5-6', topic: 'CI/CD with Jenkins & GitHub Actions' },
      { week: '7-8', topic: 'Containerization with Docker' },
      { week: '9-10', topic: 'Kubernetes Orchestration' },
      { week: '11-12', topic: 'AWS Cloud Services & Infrastructure as Code' },
    ]
  },
  {
    id: 2,
    category: 'devops',
    title: 'AWS DevOps',
    description: 'Specialized AWS DevOps training covering CloudFormation, CodePipeline, CodeBuild, ECS, and AWS automation services.',
    fullDescription: `Become an AWS DevOps specialist with our intensive program focusing on Amazon Web Services ecosystem. Learn to leverage AWS-native tools for building robust CI/CD pipelines and managing cloud infrastructure.

This course prepares you for AWS DevOps certifications while providing hands-on experience with real AWS environments.`,
    duration: '3 months',
    students: '300+',
    rating: '4.7',
    popular: false,
    price: '₹50,000',
    skills: ['AWS', 'CloudFormation', 'CodePipeline', 'CodeBuild', 'ECS', 'Lambda'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/AWSDevOps-xl.webp',
    curriculum: [
      { week: '1-2', topic: 'AWS Fundamentals & IAM' },
      { week: '3-4', topic: 'EC2, VPC & Networking' },
      { week: '5-6', topic: 'AWS CodeCommit, CodeBuild & CodePipeline' },
      { week: '7-8', topic: 'CloudFormation & Infrastructure as Code' },
      { week: '9-10', topic: 'ECS, EKS & Container Services' },
      { week: '11-12', topic: 'Monitoring, Logging & Security' },
    ]
  },
  {
    id: 3,
    category: 'devops',
    title: 'Azure DevOps',
    description: 'Complete Azure DevOps mastery including Azure Pipelines, ARM templates, Azure Container Instances, and Microsoft cloud automation.',
    fullDescription: `Master Microsoft Azure's DevOps ecosystem with our comprehensive training program. Learn to build enterprise-grade CI/CD pipelines using Azure DevOps services.

This course covers Azure Pipelines, Repos, Boards, and integrates with Azure cloud services for complete end-to-end automation.`,
    duration: '3 months',
    students: '250+',
    rating: '4.6',
    popular: false,
    price: '₹50,000',
    skills: ['Azure', 'ARM Templates', 'Pipelines', 'Azure DevOps', 'AKS', 'Azure Functions'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/AzureDevOps-xl.webp',
    curriculum: [
      { week: '1-2', topic: 'Azure Fundamentals & Portal' },
      { week: '3-4', topic: 'Azure DevOps Organization Setup' },
      { week: '5-6', topic: 'Azure Pipelines & CI/CD' },
      { week: '7-8', topic: 'ARM Templates & Bicep' },
      { week: '9-10', topic: 'Azure Kubernetes Service (AKS)' },
      { week: '11-12', topic: 'Monitoring & Security Best Practices' },
    ]
  },
  {
    id: 4,
    category: 'devops',
    title: 'MLOps + DevOps + AI',
    description: 'Advanced program combining machine learning operations, DevOps practices, and AI deployment at scale using MLflow, Kubeflow, and cloud platforms.',
    fullDescription: `This cutting-edge program bridges the gap between machine learning and operations. Learn to deploy, monitor, and maintain ML models in production environments.

You'll master MLOps tools and frameworks while understanding the DevOps practices that enable continuous ML delivery.`,
    duration: '4 months',
    students: '180+',
    rating: '4.9',
    popular: true,
    price: '₹65,000',
    skills: ['MLOps', 'AI', 'Kubernetes', 'MLflow', 'Kubeflow', 'TensorFlow Serving'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/MLOpsDevOpsAI-xl.webp',
    curriculum: [
      { week: '1-3', topic: 'Python & ML Fundamentals' },
      { week: '4-6', topic: 'DevOps for ML: Version Control & CI/CD' },
      { week: '7-9', topic: 'ML Model Deployment & Serving' },
      { week: '10-12', topic: 'Kubeflow & MLflow Pipelines' },
      { week: '13-15', topic: 'Model Monitoring & Drift Detection' },
      { week: '16', topic: 'Capstone Project' },
    ]
  },
  {
    id: 5,
    category: 'ai',
    title: 'AI & Machine Learning',
    description: 'Learn Python, TensorFlow, deep learning, and build AI applications from scratch.',
    fullDescription: `Dive deep into the world of Artificial Intelligence and Machine Learning with our comprehensive program. From fundamental concepts to advanced deep learning architectures, this course covers it all.

You'll work with real datasets, build production-ready models, and understand the mathematics behind ML algorithms.`,
    duration: '6 months',
    students: '400+',
    rating: '4.9',
    popular: true,
    price: '₹75,000',
    skills: ['Python', 'TensorFlow', 'Deep Learning', 'PyTorch', 'Computer Vision', 'NLP'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/AIML-xl.webp',
    curriculum: [
      { week: '1-4', topic: 'Python Programming & NumPy, Pandas' },
      { week: '5-8', topic: 'Machine Learning Fundamentals' },
      { week: '9-12', topic: 'Deep Learning with TensorFlow' },
      { week: '13-16', topic: 'Computer Vision & CNNs' },
      { week: '17-20', topic: 'Natural Language Processing' },
      { week: '21-24', topic: 'Advanced Topics & Projects' },
    ]
  },
  {
    id: 6,
    category: 'ai',
    title: 'Data Science',
    description: 'Master data analysis, visualization, machine learning, and real-world data science projects using Python, Pandas, and Scikit-learn.',
    fullDescription: `Become a data-driven decision maker with our Data Science program. Learn to extract insights from data, build predictive models, and communicate findings effectively.

This course emphasizes practical skills with hands-on projects using real-world datasets from various industries.`,
    duration: '6 months',
    students: '350+',
    rating: '4.8',
    popular: false,
    price: '₹70,000',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'Tableau', 'Statistics'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/DataScience-xl.webp',
    curriculum: [
      { week: '1-4', topic: 'Python & Statistical Foundations' },
      { week: '5-8', topic: 'Data Wrangling with Pandas' },
      { week: '9-12', topic: 'Data Visualization & Storytelling' },
      { week: '13-16', topic: 'Machine Learning with Scikit-learn' },
      { week: '17-20', topic: 'SQL & Database Management' },
      { week: '21-24', topic: 'Capstone Projects' },
    ]
  },
  {
    id: 7,
    category: 'fullstack',
    title: 'Java Programming',
    description: 'Comprehensive Java programming fundamentals covering OOP concepts, data structures, algorithms, and core Java development skills.',
    fullDescription: `Build a strong foundation in Java programming with our comprehensive course. From basic syntax to advanced OOP concepts, you'll master the language that powers enterprise applications.

This course prepares you for Java certifications and sets the foundation for Full Stack Java development.`,
    duration: '3 months',
    students: '480+',
    rating: '4.7',
    popular: false,
    price: '₹35,000',
    skills: ['Java', 'OOP', 'Algorithms', 'Collections', 'Multithreading', 'JDBC'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/JavaProgramming-xl.webp',
    curriculum: [
      { week: '1-2', topic: 'Java Basics & Syntax' },
      { week: '3-4', topic: 'Object-Oriented Programming' },
      { week: '5-6', topic: 'Collections Framework' },
      { week: '7-8', topic: 'Exception Handling & I/O' },
      { week: '9-10', topic: 'Multithreading & Concurrency' },
      { week: '11-12', topic: 'JDBC & Database Connectivity' },
    ]
  },
  {
    id: 8,
    category: 'fullstack',
    title: 'Python Programming',
    description: 'Master Python fundamentals, data structures, algorithms, and object-oriented programming with hands-on projects and real-world applications.',
    fullDescription: `Learn Python, the world's most versatile programming language. This course takes you from beginner to proficient, covering everything from basics to advanced concepts.

Python opens doors to web development, data science, automation, and AI - making it an essential skill for any developer.`,
    duration: '2 months',
    students: '520+',
    rating: '4.6',
    popular: false,
    price: '₹30,000',
    skills: ['Python', 'OOP', 'Algorithms', 'Data Structures', 'File Handling', 'APIs'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/PythonProgramming-xl.webp',
    curriculum: [
      { week: '1', topic: 'Python Basics & Data Types' },
      { week: '2', topic: 'Control Flow & Functions' },
      { week: '3', topic: 'Data Structures' },
      { week: '4', topic: 'Object-Oriented Programming' },
      { week: '5-6', topic: 'File Handling & Modules' },
      { week: '7-8', topic: 'Projects & Best Practices' },
    ]
  },
  {
    id: 9,
    category: 'fullstack',
    title: 'Java Full Stack',
    description: 'End-to-end Java development with Spring Boot, RESTful APIs, Angular/React frontend, microservices architecture, and database integration.',
    fullDescription: `Become a complete Java Full Stack Developer with our comprehensive program. Learn to build enterprise-grade applications using modern Java frameworks and frontend technologies.

This course covers backend development with Spring Boot, frontend with Angular/React, and deployment with cloud services.`,
    duration: '6 months',
    students: '550+',
    rating: '4.8',
    popular: true,
    price: '₹80,000',
    skills: ['Java', 'Spring Boot', 'Angular', 'React', 'MySQL', 'Microservices'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/JavaFullStack-xl.webp',
    curriculum: [
      { week: '1-4', topic: 'Core Java & Advanced Java' },
      { week: '5-8', topic: 'Spring Framework & Spring Boot' },
      { week: '9-12', topic: 'RESTful APIs & Microservices' },
      { week: '13-16', topic: 'Frontend with Angular/React' },
      { week: '17-20', topic: 'Database & ORM' },
      { week: '21-24', topic: 'Deployment & DevOps Integration' },
    ]
  },
  {
    id: 10,
    category: 'fullstack',
    title: 'Python Full Stack',
    description: 'Complete web development with Python, Django, React, and database management.',
    fullDescription: `Master full-stack web development with Python and modern JavaScript frameworks. Learn to build scalable web applications from scratch.

This course covers Django for backend, React for frontend, and essential DevOps practices for deployment.`,
    duration: '6 months',
    students: '600+',
    rating: '4.7',
    popular: true,
    price: '₹75,000',
    skills: ['Python', 'Django', 'React', 'PostgreSQL', 'REST APIs', 'Docker'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/PythonFullStack-xl.webp',
    curriculum: [
      { week: '1-4', topic: 'Python Programming Mastery' },
      { week: '5-8', topic: 'Django Web Framework' },
      { week: '9-12', topic: 'REST APIs with Django REST Framework' },
      { week: '13-16', topic: 'React Frontend Development' },
      { week: '17-20', topic: 'Database Design & PostgreSQL' },
      { week: '21-24', topic: 'Deployment with Docker & AWS' },
    ]
  },
  {
    id: 11,
    category: 'other',
    title: 'Digital Marketing',
    description: 'Complete digital marketing covering SEO, SEM, social media marketing, content marketing, analytics, email marketing, and conversion optimization.',
    fullDescription: `Transform your marketing skills with our comprehensive Digital Marketing program. Learn to create and execute digital marketing strategies that drive results.

From SEO to paid advertising, social media to email marketing - master all aspects of digital marketing.`,
    duration: '4 months',
    students: '300+',
    rating: '4.6',
    popular: false,
    price: '₹40,000',
    skills: ['SEO', 'SEM', 'Social Media', 'Google Ads', 'Analytics', 'Content Marketing'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/DigitalMarketing-xl.webp',
    curriculum: [
      { week: '1-4', topic: 'Digital Marketing Fundamentals' },
      { week: '5-8', topic: 'SEO & Content Strategy' },
      { week: '9-10', topic: 'Google Ads & PPC' },
      { week: '11-12', topic: 'Social Media Marketing' },
      { week: '13-14', topic: 'Email Marketing & Automation' },
      { week: '15-16', topic: 'Analytics & Optimization' },
    ]
  },
  {
    id: 12,
    category: 'testing',
    title: 'Software Testing',
    description: 'Comprehensive 17-week testing course covering Manual Testing, Selenium Automation, API Testing, Cypress, Playwright, and CI/CD integration.',
    fullDescription: `Master the complete spectrum of software testing with our intensive 17-week program. From manual testing fundamentals to advanced automation frameworks, this course transforms you into a job-ready QA professional.

You'll gain hands-on experience with industry-leading tools like Selenium, Cypress, Playwright, Postman, and RestAssured. Learn to build robust test frameworks, integrate with CI/CD pipelines, and deliver comprehensive test reports. The capstone project ensures you graduate with a portfolio-ready automation framework.`,
    duration: '17 weeks',
    students: '350+',
    rating: '4.8',
    popular: true,
    price: '₹55,000',
    skills: ['Selenium', 'Cypress', 'Playwright', 'Postman', 'RestAssured', 'Cucumber', 'Jenkins', 'JMeter'],
    image: 'https://www.gamutgurus.in/courses/LandingPageCoureses/optimized/SoftwareTesting-xl.webp',
    toolStack: [
      { name: 'Selenium', description: 'Industry-leading automation tool' },
      { name: 'Cypress', description: 'Modern end-to-end testing framework' },
      { name: 'Postman & RestAssured', description: 'API testing and automation' },
      { name: 'Jenkins & CI/CD', description: 'Continuous integration and reporting' },
    ],
    curriculum: [
      { 
        week: '1-2', 
        topic: 'Module 1: Software Testing Basics',
        subtopics: ['Manual Testing fundamentals', 'SDLC & STLC', 'Test case writing', 'Defect life cycle']
      },
      { 
        week: '3-6', 
        topic: 'Module 2: Selenium with Java/Python',
        subtopics: ['Selenium WebDriver', 'Locators & XPath', 'TestNG/JUnit', 'Page Object Model (POM)']
      },
      { 
        week: '7-9', 
        topic: 'Module 3: API Testing & Automation',
        subtopics: ['Postman basics', 'RestAssured scripting', 'JSON schema validation', 'API automation frameworks']
      },
      { 
        week: '10-12', 
        topic: 'Module 4: Cypress & Playwright',
        subtopics: ['Cypress setup', 'End-to-end test writing', 'Playwright for cross-browser testing', 'CI integration']
      },
      { 
        week: '13-14', 
        topic: 'Module 5: BDD with Cucumber',
        subtopics: ['Gherkin syntax', 'Step definitions', 'Hooks', 'Running feature files']
      },
      { 
        week: '15-16', 
        topic: 'Module 6: CI/CD & Test Reporting',
        subtopics: ['Jenkins pipeline setup', 'Allure reports', 'Integrating tests in CI/CD', 'Parallel execution']
      },
      { 
        week: '17', 
        topic: 'Module 7: Performance & Security Basics',
        subtopics: ['Introduction to JMeter', 'Basic performance testing', 'Security test overview', 'OWASP Top 10']
      },
      { 
        week: '18-20', 
        topic: 'Module 8: Capstone Project',
        subtopics: ['End-to-end test framework', 'API + UI automation', 'Continuous integration demo', 'Final presentation']
      },
    ]
  },
];

export const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'DevOps Engineer at Amazon',
    text: 'The DevOps training at Gamut Gurus was exceptional! The hands-on labs with Docker and Kubernetes helped me crack my interview at Amazon. The trainers are truly industry experts with real-world experience.',
    avatar: 'RK',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Priya Sharma',
    role: 'Software Developer at TCS',
    text: 'I joined the Java Full Stack course as a fresher. The comprehensive curriculum and project-based learning helped me land my dream job within 2 months of completion. Highly recommended!',
    avatar: 'PS',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Mohammed Irfan',
    role: 'Cloud Engineer at Infosys',
    text: 'Best AWS training institute in Bangalore! The real-time scenarios and interview preparation were incredibly helpful. Got placed with a 100% salary hike.',
    avatar: 'MI',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
  },
  {
    name: 'Anitha Reddy',
    role: 'QA Lead at Wipro',
    text: 'The Software Testing course covered everything from manual to automation. The Selenium training was particularly excellent. Got promoted to QA Lead after completing the course!',
    avatar: 'AR',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Suresh Babu',
    role: 'Data Scientist at Microsoft',
    text: 'The Data Science and AI course was comprehensive and practical. The projects and real datasets helped me understand the concepts deeply. Now working at my dream company!',
    avatar: 'SB',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    name: 'Kavitha Nair',
    role: 'Python Developer at Google',
    text: 'The Python Full Stack course transformed my career completely. From a fresher to a Google developer in 6 months! The trainers provided excellent mentorship and real-world project experience.',
    avatar: 'KN',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/52.jpg'
  },
  {
    name: 'Arun Prakash',
    role: 'MLOps Engineer at Netflix',
    text: 'The MLOps + DevOps course is incredibly comprehensive. Learning both ML and DevOps together gave me a unique skillset. Landed a role at Netflix with a 150% salary hike!',
    avatar: 'AP',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/55.jpg'
  },
  {
    name: 'Sneha Gupta',
    role: 'Azure Cloud Architect at Accenture',
    text: 'The Azure DevOps training was exactly what I needed. The certification preparation and hands-on labs helped me become an Azure certified professional. Highly recommended for cloud enthusiasts!',
    avatar: 'SG',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    name: 'Vikram Singh',
    role: 'Digital Marketing Lead at Flipkart',
    text: 'The Digital Marketing course covered everything from SEO to social media ads. The practical campaigns we ran during the course gave me real experience. Now leading a team at Flipkart!',
    avatar: 'VS',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/78.jpg'
  },
];

export const companies = [
  { name: 'Apple', abbr: 'AP', color: 'bg-indigo-500' },
  { name: 'IBM', abbr: 'IBM', logo: true },
  { name: 'Oracle', abbr: 'OR', color: 'bg-indigo-500' },
  { name: 'SAP', abbr: 'SA', color: 'bg-indigo-500' },
  { name: 'Adobe', abbr: 'AD', color: 'bg-indigo-500' },
  { name: 'Capgemini', abbr: 'CA', color: 'bg-indigo-500' },
  { name: 'Deloitte', abbr: 'DE', color: 'bg-indigo-500' },
  { name: 'HP', abbr: 'HP', color: 'bg-indigo-500' },
  { name: 'Wipro', abbr: 'WI', color: 'bg-indigo-500' },
  { name: 'TCS', abbr: 'TC', color: 'bg-indigo-500' },
  { name: 'Infosys', abbr: 'IN', color: 'bg-indigo-500' },
  { name: 'Accenture', abbr: 'AC', color: 'bg-indigo-500' },
  { name: 'Google', abbr: 'GO', color: 'bg-indigo-500' },
  { name: 'Amazon', abbr: 'AM', color: 'bg-indigo-500' },
  { name: 'Microsoft', abbr: 'MS', color: 'bg-indigo-500' },
];

export const tools = [
  { name: 'Docker' },
  { name: 'Kubernetes' },
  { name: 'Jenkins' },
  { name: 'AWS' },
  { name: 'Terraform' },
  { name: 'Ansible' },
  { name: 'Git' },
  { name: 'Python' },
  { name: 'Java' },
  { name: 'Selenium' }
];

