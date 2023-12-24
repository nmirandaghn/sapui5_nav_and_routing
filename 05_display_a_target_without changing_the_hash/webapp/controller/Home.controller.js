sap.ui.define([
   "nmiranda/ui5/nav/controller/BaseController"
], function (BaseController) {
   "use strict";

   return BaseController.extend("nmiranda.ui5.nav.controller.Home", {
      onDisplayNotFound: function () {
         //display the "notFound" target without changing the hash
         this.getRouter().getTargets().display("notFound", {
            fromTarget: "home"
         });
      }
   });
});