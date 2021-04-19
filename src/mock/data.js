import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'Hi, I am Zoe! I recently graduated with a Master of Information Technology from Monash University. I love continuous learning and sorting out problems. I love particpating in end-to-end projects and collaborating with talented individuals.',
  paragraphTwo:
    'I believe that taking time to understand the problems and engineering the best cost-performance solutions is critical. I believe in writing comprehensive, scalable and maintainable codes for fast data transmissions. I also believe in delightful and intuitive user experience based on user research, good designs and performance optimisation.',
  paragraphThree:
    'Other than coding, I love to stay active, laugh with friends, view the nature and play with dogs.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Demo-1.png',
    title: 'Dance School',
    info:
      '(ASP.NET Core Web API | EF Core | SQL | Redis | React.js | Redux | Firebase Auth | SASS)',
    info2:
      'An internal portal for admin and students in a small dance school, featuring CRUD operations and analytical reports, with Firebase role-based authorization and Redis caching.',
    url: 'https://danceschoool.herokuapp.com/',
    repo: 'https://github.com/Zoe-0925/DanceSchool',
  },
  {
    id: nanoid(),
    img: 'Demo-2.png',
    title: 'Jira Clone',
    info:
      '(AWS Amplify | React.js | AWS Lambda | AWS Cognito | Serverless AWS API | DynamoDB | SASS)',
    info2: 'A Jira clone with the dragging board feature to manage project tasks',
    url: 'https://jira-serverless-demo.herokuapp.com/',
    repo: 'https://github.com/Zoe-0925/Jira-AWS-serverless',
  },
  {
    id: nanoid(),
    img: 'Demo-3.png',
    title: 'E-Commerce Client',
    info: '(React.js | Redux | Paypal | SASS)',
    info2:
      'A sports legging E-commerce Client inspired by Gymshark, built to practice implementing pixel-perfect designs.',
    url:
      'https://github.com/Zoe-0925/E-Commerce-React-Redux-Saga-Node.js-MySQL-Frontend/blob/master/public/Demo-3.png',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Demo-4.png',
    title: 'Spotify Client',
    info: '(React.js | Redux | SASS)',
    info2: 'A Spotify clone built to master RESTful APIs.',
    url: 'https://spotify-react-redux-saga.netlify.app/',
    repo: 'https://github.com/Zoe-0925/React-Redux-Spotify', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zoe-shenqiu-zhang-b4b5abaa/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Zoe-0925',
    },
  ],
};

// EDUCATION DATA
export const educationData = [
  {
    id: nanoid(),
    degree: 'Master of Information Technology',
    uni: 'Monash University',
  },
  {
    id: nanoid(),
    degree: 'Bachelor of Arts in English and American Literature',
    uni: 'Keio University',
  },
];
