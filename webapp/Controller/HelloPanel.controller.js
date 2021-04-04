sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function() {

            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");

            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
            this.new();
        },

        new: function() {
            var data = this.getView().getModel().getData();
            var contact = new JSONModel(data.recipient);

            var newContact = JSON.parse(contact.getJSON());
            newContact.id = data.contacts.length + 1;

            data.contacts.push(newContact);

            ///limpando recipient para não aparecer nos inputs
            data.recipient = {
                name: "",
                sobrenome: "",
                telefone: "",
                email: ""
            };

            this.getView().getModel().setData(data);
        },

    });
});