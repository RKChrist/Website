using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebsiteRKChrist.Controllers
{
    public class KafkaController : Controller
    {
        // GET: KafkaController
        public ActionResult Index()
        {
            return View();
        }

        // GET: KafkaController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: KafkaController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: KafkaController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: KafkaController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: KafkaController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: KafkaController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: KafkaController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
