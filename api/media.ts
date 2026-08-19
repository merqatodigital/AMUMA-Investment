import { put } from '@vercel/blob';

export default async function handler(req:any,res:any){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  if(req.headers['x-amuma-passkey']!=='5309') return res.status(401).json({error:'Unauthorized'});
  try{
    const contentType=String(req.headers['content-type']||'');
    if(!contentType.startsWith('image/')) return res.status(400).json({error:'Image required'});
    const chunks:any[]=[]; for await(const chunk of req) chunks.push(chunk);
    const body=Buffer.concat(chunks);
    if(body.length>12*1024*1024) return res.status(413).json({error:'Image exceeds 12MB'});
    const ext=contentType.split('/')[1]?.replace('jpeg','jpg')||'jpg';
    const blob=await put(`amuma-media/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`,body,{access:'public',contentType});
    return res.status(200).json({url:blob.url});
  }catch(e:any){return res.status(500).json({error:e?.message||'Upload failed'});}
}