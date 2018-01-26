sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/ui/model/json/JSONModel"
], function(MockServer, JSONModel) {
	"use strict";

	return {
		/**
		 * Initializes the mock server.
		 * You can configure the delay with the URL parameter "serverDelay".
		 * The local mock data in this folder is returned instead of the real data for testing.
		 * @public
		 */
		init: function() {
			// create
			var oMockServer = new MockServer({
				rootUri: "https://www.mocky.io/",
				requests: [{
					method: "GET",
					path: "v2/5a66230a2e0000d123323dc4",
					response: function(xhr) {
						// debugger;
						var oMockModel = new JSONModel();
						oMockModel.loadData("/webapp/localService/mockData/Mock_A.json", {}, false);
						// oMockModel.attachRequestCompleted(function() {
						xhr.respondJSON(200, {}, oMockModel.getJSON());
						// });
					}
				}]

			});

			// start
			oMockServer.start();

			sap.m.MessageToast.show("Running the app with mock data", {
				closeOnBrowserNavigation: false
			});
		}

	};

});