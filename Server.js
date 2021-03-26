const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
 const path = require('path');
 var cors = require('cors');
const nodemailer = require('nodemailer')

 app.use(cors());


//middleware

app.use(express.static('public'));
app.use(express.json())

app.get('/', (req,res)=>{
// res.sendFile(path.join(__dirname, 'Contact.js'));
res.send('hyy')
})

app.post('/',(req, res)=>{
    console.log(req.body);


    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"tusharnagarop@gmail.com",
            pass:"tusharnagar11"
        }
    })
    const mailOption = {
        from : req.body.email,
        to : "tusharnagarop@gmail.com",
        subject:`Message From ${req.body.email} name: ${req.body.named}` ,
        text:req.body.message
    }


    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log('mail send');
            res.send('success')
        }
    })
})


app.listen(PORT, ()=>{
console.log(`app is running on ${PORT} port`);
});