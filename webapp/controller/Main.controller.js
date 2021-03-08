sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	"../model/ODataPromise",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/Sorter"
], function (BaseController, JSONModel, ODataPromise, Filter, FilterOperator, Sorter) {
	"use strict";

	const ADMIN = 1;
	Object.freeze(ADMIN);

	return BaseController.extend("tools.oDataPromise.controller.Main", {
		onInit: function () {
			this.setModel(new JSONModel([]), "Users");
		this._oData = new ODataPromise(this.getModel());
		},

		onRead: function() {
			let onlyAdmin = new Filter({
					path: "userType",
					operator: FilterOperator.EQ,
					value1: ADMIN
				}),
				sortByName = new Sorter({
					path: "name",
					descending: false
				}),
				parameters = {
					filters: [ onlyAdmin ],
					sorters: [ sortByName ]
				};

			this._oData.read("/Users", parameters)
				.then(function(data) {
					this.setModel(new JSONModel(data.results), "Users");
				}.bind(this));
		}
	});
});