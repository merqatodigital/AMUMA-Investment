export type SiteContent = {
  header:{nav:string[];cta:string};
  hero:{eyebrow:string;title:string;body:string;primaryCta:string;secondaryCta:string;image:string};
  proof:{heading:string;subheading:string;quote:string;properties:{name:string;type:string;body:string;image:string;cta:string}[]};
  system:{heading:string;items:{title:string;body:string}[];image:string};
  architecture:{heading:string;body:string;model:string;features:string[]};
  participate:{heading:string;items:{title:string;body:string;image:string}[]};
  investment:{heading:string;points:string[];disclaimer:string;image:string};
  about:{heading:string;body:string};
  footer:{heading:string;body:string;copyright:string};
};
export const defaultContent:SiteContent={
 header:{nav:['EXPLORE','STAY','INVEST','OWN','ABOUT','JOURNAL'],cta:'TALK TO AMUMA'},
 hero:{eyebrow:'PALAWAN, PHILIPPINES',title:"WE BUILT THE FIRST ONES.\nNOW WE’RE BUILDING WHAT’S NEXT.",body:'Barefoot places to stay, work and belong in Palawan.',primaryCta:'EXPLORE THE NEXT AMUMA',secondaryCta:'TALK TO AMUMA',image:''},
 proof:{heading:'ALREADY CREATING PLACES IN PALAWAN',subheading:'Real places. Real guests. Real operations.',quote:"We don’t just build places. We build experiences that leave a positive impact.",properties:[
  {name:'BAIA',type:'BOUTIQUE BEACHFRONT LODGE',body:'A barefoot beachfront escape where nature, comfort and hospitality meet.',image:'',cta:'EXPLORE BAIA'},
  {name:'MARINA TERRACE',type:'LONG STAYS & REMOTE WORK',body:'Ocean view living with a rooftop workspace for digital nomads and extended stays.',image:'',cta:'EXPLORE MARINA'},
  {name:'AMUMA',type:'THE NEXT GENERATION',body:"Building on what we’ve learned to create the next barefoot destinations.",image:'',cta:"EXPLORE WHAT’S NEXT"}]},
 system:{heading:'ONE AMUMA SYSTEM.\nDIFFERENT WAYS TO LIVE.',items:[{title:'STAY',body:'Boutique resort suites'},{title:'LIVE',body:'Private owner retreats'},{title:'WORK',body:'Long-stay residences'},{title:'RESTORE',body:'Wellness environments'},{title:'GATHER',body:'Café, coworking and social spaces'}],image:''},
 architecture:{heading:'ARCHITECTURE THAT BELONGS.',body:'Modular. Sustainable. Timeless. Designed to blend with nature and built to last.',model:'1 BEDROOM AMUMA',features:['Sleep','Living','Kitchen','Bath','Terrace']},
 participate:{heading:'HOW YOU CAN BE PART OF AMUMA',items:[{title:'INVEST',body:'Participate in the next AMUMA property.',image:''},{title:'OWN',body:'Own your private retreat in Palawan.',image:''},{title:'STAY',body:'Live and work in inspiring places.',image:''},{title:'BRING LAND',body:'Partner with us to develop.',image:''},{title:'JOIN THE COMMUNITY',body:'Be part of a growing network of like-minded people.',image:''}]},
 investment:{heading:'WHY INVEST IN AMUMA',points:['PROVEN OPERATORS','PALAWAN FOCUS','SUSTAINABLE DESIGN','MULTIPLE PARTICIPATION PATHS','LONG TERM VISION'],disclaimer:'Investment opportunities are subject to project-specific due diligence, legal documentation and risk. No returns are guaranteed.',image:''},
 about:{heading:'ROOTED IN PALAWAN',body:'AMUMA is a hospitality ecosystem built from operating experience, thoughtful design, meaningful stays and a long-term commitment to place.'},
 footer:{heading:'THE NEXT CHAPTER STARTS HERE.',body:"Let’s build something meaningful.",copyright:'© 2027 AMUMA Barefoot Boutique Resorts. All rights reserved.'}
};
export function loadContent():SiteContent{try{return {...defaultContent,...JSON.parse(localStorage.getItem('amuma-site-content')||'{}')}}catch{return defaultContent}}
export function saveContent(c:SiteContent){localStorage.setItem('amuma-site-content',JSON.stringify(c));window.dispatchEvent(new Event('amuma-content-updated'))}
export function resetContent(){localStorage.removeItem('amuma-site-content');window.dispatchEvent(new Event('amuma-content-updated'))}
