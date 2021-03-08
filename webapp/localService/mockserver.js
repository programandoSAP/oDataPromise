sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
	"use strict";

	return {
		init: function () {
			let mockServer = new MockServer({
					rootUri: "/HanaDataBase/my/tools/users.xsodata/"
				}),
				uriParameters = new UriParameters(window.location.href),
				path = "../localService";

			MockServer.config({
				autoRespond: true,
				autoRespondAfter: uriParameters.get("serverDelay") || 100
			});
			mockServer.simulate(path + "/metadata.xml", path + "/mockdata");
			mockServer.start();
		}
	};

});