sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("tools.oDataPromise.controller.BaseController", {
		setModel: function (model, name) {
			return this.getView().setModel(model, name);
		}
	});
});