using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading;
using System.Threading.Tasks;
using WebsiteRKChrist.Models;

namespace WebsiteRKChrist.Infrastructure
{
    public class EmailSender
    {
        public bool Sending(EmailViewModel model)
        {

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("lolrooney12@gmail.com", "951Re951"),
                EnableSsl = true,

            };


            string body = $"<h4> From {model.Name} </h4> \n" +
                          $"Message: \n {model.Message}" +
                          $"\n Kontakt though this email: {model.Email}\n";


            var mailMessage = new MailMessage
            {
                From = new MailAddress("lolrooney12@gmail.com"),
                Subject = model.Subject,
                Body = body,
                IsBodyHtml = true
            };
            mailMessage.To.Add("rkchristdev@gmail.com");

            smtpClient.Send(mailMessage);
            Thread.Sleep(100);
            return true;
        }
    }
}
