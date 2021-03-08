sap.ui.define([
], function () {
	"use strict";

	return class ODataPromise {
		constructor(model) {
			this.model = model;
		}

		read(path, parameters) {
			return new Promise((resolve, reject) => {
				this.model.read(path, this._addReturns(parameters, resolve, reject));
			});
		}

		_addReturns(receivedParameters, resolve, reject) {
			let parameters = Object.assign({}, receivedParameters);

			parameters.success = data => resolve(data);
			parameters.error = error => reject(error);
			return parameters;
		}
	};
});