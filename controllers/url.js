const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortUrl(req,res){
    const redirectUrl=req.body;
    console.log("redirectUrl",redirectUrl);
    console.log("req.body",req.body.url);
//     const shortID=shortid();
// console.log("shortID",shortID);
    if(!redirectUrl){
        return res.status(400).json({error:"Redirect URL is required"});
    }
     const shortID=shortid();
    await URL.create(
        {
            shortId:shortID,
            redirectURL:redirectUrl.url,
            visitHistory:[],
        },
    );
        
    return res.status(201).json({id:shortID});
}
    

async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId;
    const entry=await URL.findOne({shortId});
    if(!entry){
        return res.status(404).json({error:"No URL found"});
    }
    return res.status(200).json({ totalClicks: entry.visitHistory.length,
        analytics:entry.visitHistory});
}
module.exports={handleGenerateNewShortUrl, handleGetAnalytics};