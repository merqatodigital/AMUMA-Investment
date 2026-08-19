import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {Leaf,Sun,Users,HeartHandshake,Laptop,House,Palmtree,Landmark,MessageCircle,X,ArrowRight,Menu} from "lucide-react";
import "./styles.css";

const img=(q:string)=>`https://images.unsplash.com/${q}?auto=format&fit=crop&w=1600&q=85`;
const hero="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90";
const coast="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=85";
const room="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85";
const terrace="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85";
const beach="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85";

function Logo(){return <div className="logo"><div className="wave">⌁∿•∿•∿⌁</div><b>AMUMA</b><small>BAREFOOT BOUTIQUE RESORTS</small></div>}
const Btn=({children,outline=false,onClick}:{children:React.ReactNode,outline?:boolean,onClick?:()=>void})=><button onClick={onClick} className={outline?"btn outline":"btn"}>{children}</button>;

function Agent(){
 const [open,setOpen]=useState(true); const [path,setPath]=useState("");
 const choices=["I'm interested in investing","I want to own a retreat","I want to stay for 1–3 months","I have land / partnership","Just exploring for now"];
 return <>{!open&&<button className="agent-fab" onClick={()=>setOpen(true)}><MessageCircle/></button>}
 {open&&<aside className="agent"><div className="agent-head"><div><strong>AMUMA AGENT</strong><span>● Online</span></div><button onClick={()=>setOpen(false)}><X/></button></div>
 <div className="bubble">Hello. I'm AMUMA.<br/>How can I help you today?</div>
 {!path?choices.map(x=><button className="choice" key={x} onClick={()=>setPath(x)}>{x}</button>):<div className="agent-flow"><p>You selected:</p><strong>{path}</strong><p>Good. I’ll guide you through the right AMUMA path.</p><input placeholder="Your name"/><input placeholder="Email or WhatsApp"/><button className="choice">CONTINUE →</button><button className="back" onClick={()=>setPath("")}>← Back</button></div>}
 <p className="guide">We'll guide you to the right path.</p></aside>}</>
}

function App(){
 const [menu,setMenu]=useState(false);
 const values=[[Leaf,"NATURE","CONNECTED"],[Landmark,"DESIGN","MEANINGFUL"],[Users,"PEOPLE","BELONGING"],[HeartHandshake,"EXPERIENCES","MEMORABLE"],[Sun,"IMPACT","LASTING"]];
 return <main>
 <header><Logo/><nav className={menu?"show":""}>{["EXPLORE","STAY","INVEST","OWN","ABOUT","JOURNAL"].map(x=><a href={"#"+x.toLowerCase()} key={x}>{x}</a>)}</nav><Btn onClick={()=>document.getElementById("agent")?.scrollIntoView()}>TALK TO AMUMA</Btn><button className="menu" onClick={()=>setMenu(!menu)}><Menu/></button></header>

 <section className="hero" id="explore" style={{backgroundImage:`linear-gradient(90deg,rgba(12,18,15,.78),rgba(12,18,15,.12)),url(${hero})`}}>
 <div className="hero-copy"><h1>WE BUILT<br/>THE FIRST ONES.<br/>NOW WE'RE BUILDING<br/>WHAT'S NEXT.</h1><p>Barefoot places to stay, work<br/>and belong in Palawan.</p><div><Btn>EXPLORE THE NEXT AMUMA</Btn><Btn outline>TALK TO AMUMA</Btn></div></div></section>

 <section className="values">{values.map(([I,a,b]:any)=><div><I/><small>{a}</small><small>{b}</small></div>)}</section>

 <section className="proof" id="stay"><div className="section-title"><h2>ALREADY CREATING PLACES IN PALAWAN</h2><p>Real places. Real guests. Real operations.</p></div>
 <div className="proof-grid">
 {[["BAIA","BOUTIQUE BEACHFRONT LODGE",beach,"A barefoot beachfront escape where nature, comfort and hospitality meet."],["MARINA TERRACE","LONG STAYS & REMOTE WORK",terrace,"Ocean view living with a rooftop workspace for digital nomads and extended stays."],["AMUMA","THE NEXT GENERATION",coast,"Building on what we've learned to create the next barefoot destinations."]].map((c:any)=><article><img src={c[2]}/><h3>{c[0]}</h3><small>{c[1]}</small><p>{c[3]}</p><a>EXPLORE {c[0]} <ArrowRight/></a></article>)}
 <blockquote>“<br/>We don't just build places. We build experiences that leave a positive impact.<i>⌁</i></blockquote></div></section>

 <section className="system"><div className="system-copy"><h2>ONE AMUMA SYSTEM.<br/>DIFFERENT WAYS TO LIVE.</h2><div className="system-icons">
 {[[Palmtree,"STAY","Boutique resort suites"],[House,"LIVE","Private owner retreats"],[Laptop,"WORK","Long-stay residences"],[Leaf,"RESTORE","Wellness environments"],[Users,"GATHER","Café, coworking and social spaces"]].map(([I,a,b]:any)=><div><I/><b>{a}</b><small>{b}</small></div>)}</div></div><img src={room}/></section>

 <section className="architecture"><div><h3>ARCHITECTURE<br/>THAT BELONGS.</h3><p>Modular. Sustainable. Timeless.<br/>Designed to blend with nature<br/>and built to last.</p><a>SEE THE SPACES →</a></div>
 <div className="floorplan"><div className="bath">BATH</div><div className="bed">BEDROOM</div><div className="living">LIVING</div><div className="kitchen">KITCHEN</div><div className="deck">TERRACE</div></div>
 <div><b>1 BEDROOM AMUMA</b><p>Sleep<br/>Living<br/>Kitchen<br/>Bath<br/>Terrace</p><a>VIEW ALL CONFIGURATIONS →</a></div></section>

 <section className="participate" id="own"><h2>HOW YOU CAN BE PART OF AMUMA</h2><div className="part-grid">
 {[["INVEST","Participate in the next AMUMA property.",coast],["OWN","Own your private retreat in Palawan.",room],["STAY","Live and work in inspiring places.",terrace],["BRING LAND","Partner with us to develop.",hero],["JOIN THE COMMUNITY","Be part of a growing network of like-minded people.",beach]].map((x:any)=><article><img src={x[2]}/><b>{x[0]}</b><p>{x[1]}</p></article>)}
 <aside><span>◎</span><h3>Not sure where<br/>to start?</h3><p>Ask AMUMA and<br/>we'll guide you.</p><a>TALK TO THE AGENT →</a></aside></div></section>

 <section className="invest" id="invest" style={{backgroundImage:`linear-gradient(rgba(15,42,33,.91),rgba(15,42,33,.82)),url(${coast})`}}><h2>WHY INVEST IN AMUMA</h2>
 <div className="invest-grid">{["PROVEN OPERATORS","HIGH DEMAND LOCATION","SUSTAINABLE DESIGN","STRONG RETURNS POTENTIAL","LONG TERM VISION"].map((x,i)=><div>{[<Users/>,<Palmtree/>,<Sun/>,<Landmark/>,<HeartHandshake/>][i]}<small>{x}</small></div>)}</div></section>

 <section className="closing"><div><h2>THE NEXT CHAPTER<br/>STARTS HERE.</h2><p>Let's build something meaningful.</p><Btn>EXPLORE THE NEXT AMUMA</Btn> <Btn outline>TALK TO AMUMA</Btn></div>
 <div className="footcols"><div><b>EXPLORE</b><span>Stay</span><span>Invest</span><span>Own</span><span>About Us</span></div><div><b>RESOURCES</b><span>Journal</span><span>Sustainability</span><span>FAQs</span><span>Contact</span></div><div><b>FOLLOW</b><span>Instagram</span><span>Facebook</span><span>LinkedIn</span><span>YouTube</span></div><div><b>NEWSLETTER</b><span>Stay updated on new properties, opportunities and stories.</span><input placeholder="Your email address →"/></div></div>
 <div className="footer"><Logo/><small>© 2027 AMUMA Barefoot Boutique Resorts. All rights reserved.</small><small>Rooted in Palawan. Made for connection. Built to last.</small></div></section>
 <div id="agent"><Agent/></div>
 </main>
}
createRoot(document.getElementById("root")!).render(<App/>);