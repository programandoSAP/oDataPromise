sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("tools.oDataPromise.controller.Main", {
		onInit: function () {
			this.setModel(new JSONModel([]), "Users");
		}
	});
});