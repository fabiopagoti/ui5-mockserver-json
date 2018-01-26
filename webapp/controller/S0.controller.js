sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
	) {
	"use strict";

	return Controller.extend("mock.controller.S0", {
		
		onInit: function(){
			var oModel = new JSONModel("https://www.mocky.io/v2/5a66230a2e0000d123323dc4");
			this.getView().setModel(oModel);
		}

	});
});