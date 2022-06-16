using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebsiteRKChrist.Controllers
{
    public class ProductController : Controller
    {
        public ProductController()
        {
            
        }
        // GET: ProjectController
        public ActionResult Index()
        {
            ViewBag.Product = "Shown";
            return View();
        }

        // GET: ProjectController/Details/5
        public ActionResult GettingStarted(int id)
        {
            ViewBag.Product = "Shown";
            return View();
        }

        // GET: ProjectController/Create
        public ActionResult Create()
        {
            ViewBag.Product = "Shown";
            return View();
        }
        // GET: ProjectController/Create
        public ActionResult GDPR()
        {
            ViewBag.Product = "Shown";
            return View();
        }
        public IActionResult DataGovernance()
        {
            ViewBag.Product = "Shown";
            return View();
        }


    }
}
