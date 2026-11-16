import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import {Hero,About,Skills,Footer} from './Sections';
import Projects from './Projects';
import Contact from './Contact';
import {profile} from './data';
export default function App(){const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('portfolio-theme')||'light';}catch{return 'light';}});const [active,setActive]=useState('home');const [showTop,setShowTop]=useState(false);
useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('portfolio-theme',theme);}catch{}},[theme]);
useEffect(()=>{function update(){const sections=[...document.querySelectorAll('main section[id]')];let current='home';for(const section of sections)if(section.getBoundingClientRect().top<=150)current=section.id;if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-10)current='contact';setActive(current);setShowTop(window.scrollY>500);}update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
return <><a className="skip-link" href="#main">Skip to content</a><Navbar name={profile.name} active={active} theme={theme} toggleTheme={()=>setTheme(theme==='light'?'dark':'light')}/><main id="main"><Hero/><About/><Skills/><Projects/><Contact/></main><Footer/>{showTop&&<a className="back-top" href="#home" aria-label="Scroll to top">↑</a>}</>;}
