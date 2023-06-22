using Microsoft.VisualStudio.TestTools.UnitTesting;
using Practical_09_MVC.Controllers;
using System;
using System.Web.Mvc;

namespace Practical_09_unit_test
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void Index_ReturnsCorrectString()
        {           
            HomeController controller = new HomeController();
         

            
            ViewResult result = controller.Index() as ViewResult;

        
            Assert.IsNotNull(result);
            Assert.AreEqual("Hello World", result.ViewData.Model);
        }
    }
}
