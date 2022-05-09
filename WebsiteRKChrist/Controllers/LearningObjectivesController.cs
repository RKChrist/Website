using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebsiteRKChrist.Controllers
{
    public class LearningObjectivesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Version1()
        {
            return View();
        }
        public IActionResult Version2()
        {
            return View();
        }
    }
}
