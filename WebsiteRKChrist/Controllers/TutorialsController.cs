using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebsiteRKChrist.Controllers
{
    public class TutorialsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
