// Profile sourced from the supplied resume and portfolio repository.
export const profile = { name: 'Fahad Ahammed', title: 'Full Stack Developer & ML Enthusiast', email: 'fzfahad1@gmail.com', phone: '+8801516548824', location: 'Mirpur, Dhaka, Bangladesh', education: 'B.Sc. in CSE — United International University, May 2023–present', github: 'https://github.com/FahadAhammed19', repository: 'https://github.com/FahadAhammed19/fahad-portfolio', linkedin: 'https://www.linkedin.com/in/fahad-shahriar-7b94592ab/', facebook: 'https://www.facebook.com/fahadshahriar.shahriar/' };
export const projects = [
 {id:'task', title:'Focus Board', category:'JavaScript', label:'PRODUCTIVITY', description:'A small task manager that helps turn a busy day into a clear, actionable list.', technologies:['JavaScript','CSS'], color:'#dce9dc'},
 {id:'expense', title:'Pocket Ledger', category:'JavaScript', label:'PERSONAL FINANCE', description:'Track everyday expenses and keep a running total with a lightweight expense log.', technologies:['JavaScript','CSS'], color:'#e6dff1'},
 {id:'palette', title:'Color Studio', category:'CSS', label:'DESIGN TOOL', description:'Explore color combinations and copy a custom palette for your next interface.', technologies:['CSS','JavaScript'], color:'#f1dfce'},
 {id:'quiz', title:'React Recall', category:'React', label:'INTERACTIVE LEARNING', description:'Test your frontend knowledge with a short quiz and instant answer feedback.', technologies:['React','CSS'], color:'#dce5f0'}
].map(p=>({...p,image:`./${p.id}.svg`,demo:`./demos.html?project=${p.id}`}));
export const skills = [
 ['01','HTML & CSS','Web structure & responsive styling'],
 ['02','JavaScript & React','Interactive, component-based interfaces'],
 ['03','Node.js & Express','Backend application development'],
 ['04','C, C++ & Java','Programming & problem-solving'],
 ['05','Python & Machine Learning','Scikit-learn, Pandas & NumPy'],
 ['06','Git & GitHub','Version control & collaboration'],
 ['07','Tailwind CSS','Utility-first interface styling'],
 ['08','Microsoft Office','Word, Excel & PowerPoint'],
 ['09','Communication','English, Bangla & creative thinking']
];
