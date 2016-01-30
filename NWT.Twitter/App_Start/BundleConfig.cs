﻿using System.Web;
using System.Web.Optimization;

namespace NWT.Twitter
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/vendor/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/vendor/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/vendor/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/vendor/bootstrap.js",
                      "~/Scripts/vendor/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular2").Include(
                        "~/Scripts/node_modules/es6-shim/es6-shim.js",
                        "~/Scripts/node_modules/angular2/bundles/angular2-polyfills.js",
                        "~/Scripts/node_modules/systemjs/system.src.js",
                        "~/Scripts/node_modules/rxjs/bundles/Rx.js",
                        "~/Scripts/node_modules/angular2/bundles/angular2.dev.js"));
        }
    }
}