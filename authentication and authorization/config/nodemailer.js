const nodemailer = require("nodemailer")
require("dotenv").config()

console.log({user:process.env.nodemailer_user,
        pass:process.env.nodemailer_pass})
function mailConfig() {
    const transporter  = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.nodemailer_user,
        pass:process.env.nodemailer_pass
    }
    })
    return transporter
}

function sendEmail(userEmail,subject, textMsg) {
    mailConfig().sendMail(
        {
            from:process.env.nodemailer_user,
            to:userEmail,
            subject:subject,
            text:textMsg
        }, (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("mail sent")
            }
        }
    )
}
module.exports = {mailConfig, sendEmail}
