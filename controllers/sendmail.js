
const nodemailer = require("nodemailer");
const sendmail=async (req,res)=>{

    // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
       
        },
      });


      let info=await transporter.sendMail({
        from: ' "Aashutosh" <aashu@gmail.com> ',
        to:"guptaaashu354@gmail.com",
        subject:"testing nodemailer",
        text:"hello aashutosh gupta",
        html:"<b>Hello Student</b>",
      });

      console.log("message id : %s",info.messageId);
      res.json(info);

    res.send("i am from send mail");

}

module.exports=sendmail;