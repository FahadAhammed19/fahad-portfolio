import React, {useState} from 'react';
const links=['Home','About','Skills','Projects','Contact'];
export default function Navbar({name,active,theme,toggleTheme}) {
 const [open,setOpen]=useState(false);
 return <header className="header"><nav className="nav container" aria-label="Main navigation"><a className="brand" href="#home" onClick={()=>setOpen(false)}>{name.split(' ')[0]}<span>.</span></a><div className={'nav-links '+(open?'open':'')} id="navigation">{links.map(link=><a key={link} href={'#'+link.toLowerCase()} aria-current={active===link.toLowerCase()?'location':undefined} onClick={()=>setOpen(false)}>{link}</a>)}</div><div className="nav-actions"><button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme==='light'?'dark':'light'} mode`}>{theme==='light'?'☾':'☀'}</button><button className="menu-button" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button></div></nav></header>;
}
