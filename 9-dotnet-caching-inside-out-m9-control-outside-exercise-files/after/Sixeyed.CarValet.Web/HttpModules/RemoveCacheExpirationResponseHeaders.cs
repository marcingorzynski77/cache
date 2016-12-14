﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Sixeyed.CarValet.Web.HttpModules
{
    public class RemoveCacheExpirationResponseHeaders : RemoveResponseHeaders
    {
         private static readonly List<string> _HeadersToRemove = new List<string> { "Expires", "Cache-Control" };

        protected override List<string> GetHeadersToRemove()
        {
            return _HeadersToRemove;
        }
    }
}