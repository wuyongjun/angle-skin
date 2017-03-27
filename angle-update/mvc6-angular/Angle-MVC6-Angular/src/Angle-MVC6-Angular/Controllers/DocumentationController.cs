﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class DocumentationController : Controller
    {
        // GET: Documentation
        public IActionResult Documentation()
        {
            return View();
        }

        // Return the document content
        public IActionResult Readme()
        {
            return File("~/documentation/readme.md", "text/plain");
        }

    }
}