import { list, put } from '@vercel/blob';
const PATH='amuma-cms/site-content.json';
export default async function handler(req:any,res:any){
  try{
    if(req.method==='GET'){
      const found=await list({prefix:PATH,limit:1});
      if(!found.blobs.length) return res.status(200).json(null);
      const r=await fetch(found.blobs[0].url,{cache:'no-store'});
      if(!r.ok) return res.status(200).json(null);
      res.setHeader('Cache-Control','no-store');
      return res.status(200).json(await r.json());
    }
    if(req.method==='POST'){
      if(req.headers['x-amuma-passkey']!=='5309') return res.status(401).json({error:'Unauthorized'});
      const body=typeof req.body==='string'?req.body:JSON.stringify(req.body);
      await put(PATH,body,{access:'public',contentType:'application/json',addRandomSuffix:false,allowOverwrite:true});
      return res.status(200).json({saved:true});
    }
    return res.status(405).json({error:'Method not allowed'});
  }catch(e:any){return res.status(500).json({error:e?.message||'CMS storage failed'});}
}