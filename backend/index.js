const express = require('express');
const cors = require('cors');

const app = express();
const port = 1234
app.use(express.json());
app.use(cors());

// ------------------------Hosting A
const path = require('path')
const clientpath = path.join(__dirname,'../frontend/dist')
app.use('/',express.static(clientpath))


// MAIN ENVIRONMENT VARIABLES
const MONGO_URL =  'mongodb+srv://mahnooryameen22:tW9ytGH9o1xw75hu@cluster0.8l0q6xb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const JWT_SECRET =  'hellohello';
const NODEMAILER_EMAIL =  'mahnooryameen22@gmail.com';
const NODEMAILER_PASSWORD =  'tdxw kbqq svqm sref';
module.exports={MONGO_URL, JWT_SECRET, NODEMAILER_EMAIL, NODEMAILER_PASSWORD}


app.use('/api',require('./API/StitchType/Router'))
app.use('/api',require('./API/category/Router'))
app.use('/api',require('./API/product/Router'))
app.use('/api',require('./API/user/Router'))
app.use('/api',require('./API/order/Router'))

// ------------------------Hosting B

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../frontend/dist/index.html'))
})
// mcjfenjc


app.listen(port, () => {
  console.log(`Example app listening on port happy dappy  ${port} `)
})


// Export the app as a Vercel serverless function
module.exports = app;
