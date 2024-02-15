const express=require('express');
const {handleGenerateNewShortUrl,handleGetAnalytics,handleRedirect}=require('../controllers/url');
const router=express.Router();

router.post('/',handleGenerateNewShortUrl);
router.get('/analytics/:shortId',handleGetAnalytics);
router.get('/:shortId',handleRedirect);

module.exports=router;