sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        deleteContact: function(id) {
            var data = this.getView().getModel().getData();

            for (let i = 0; i < data.contacts.length; i++) {
                if (data.contacts[i].id == id) {
                    data.contacts.splice(i, 1);
                }
            }
            this.getView().getModel().setData(data);
        }
    });
});