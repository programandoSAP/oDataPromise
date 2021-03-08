sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("tools.oDataPromise.controller.BaseController", {
		getModel: function (name) {
			return this.getView().getModel(name);
		},

		setModel: function (model, name) {
			return this.getView().setModel(model, name);
		}
	});
});