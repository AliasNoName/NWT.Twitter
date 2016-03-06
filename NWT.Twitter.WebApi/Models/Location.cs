using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NWT.Twitter.WebApi.Models
{
    public class Location
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public float GeoWidth { get; set; }
        public float GeoHeight { get; set; }
    }
}