using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;
using WebsiteRKChrist.Infrastructure;
using WebsiteRKChrist.Models;

namespace WebsiteRKChrist.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            
            return View();
        }
        public IActionResult Terms()
        {
            ViewBag.Terms = "Shown";
            var ListOfTerms = new List<TechnicalTerms>();
            var text = new System.IO.StreamReader(@"wwwroot/Terms.csv");

            while (text.EndOfStream == false)
            {
                var line = text.ReadLine().Split(";");
                ListOfTerms.Add(new TechnicalTerms()
                {
                    Id = int.Parse(line[0]),
                    Term = line[1],
                    Definition = line[2]
                });
            }
            return View(ListOfTerms);
        }
        public IActionResult Portfolio()
        {
            return View();
        }
        public IActionResult Material()
        {
            ViewBag.Material = "Shown";
            return View();
        }
        public IActionResult Literature()
        {
            return View();
        }

        [HttpPost]
        public IActionResult sendEmail(EmailViewModel model)
        {
            EmailSender sender = new EmailSender();
            sender.Sending(model);
            
            return View();
        }

       
    }
}
