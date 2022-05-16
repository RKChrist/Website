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
            ViewBag.Objectives = "Show";
            return View();
        }
        public IActionResult Version1()
        {
            ViewBag.Objectives = "Show";
            return View();
        }
        public IActionResult Version2()
        {
            ViewBag.Objectives = "Show";
            return View();
        }
    }
}
