// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require("nodemailer");

export default (req, res) => {
  let message = {
    from: req.body.email,
    to: "cert@traficom.fi",
    subject: "Valitus evästekäytnnöistä",
    text: `Täten vaadin että Traficom selvittää onko verkkosivusto ${req.body.address} tallentanut päätelaitteelleni tietoja ilman lupaa ja tekee asiasta virallisen hallintopäätöksen. Terveisin, ${req.body.name}`,
  };
  
  main(message).then( response => {
      res.statusCode = 200
      res.json(req.body)
    }
  )
}

// async..await is not allowed in global scope, must use a wrapper
async function main(message) {
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

  // send mail with defined transport object
  let info = await transporter.sendMail(message);
  
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
