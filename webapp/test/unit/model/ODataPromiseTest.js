sap.ui.define([
	"tools/oDataPromise/model/ODataPromise"
], function (ODataPromise) {
	"use strict";

	const { module, test } = QUnit;

	class ModelMock {
		read (path, parameters) {
			this.path = path;
			this.parameters = parameters;
		}
	}

	function throwUnexpectedPointReachedError(assert) {
		assert.ok(false, "The operation was successful & should not have happend");
    }

	function assertParametersIncludeReturnFunctions(parameters, assert) {
		let expectedParameters = {
				success: data => { },
				error: error => { }
			};

		assert.propEqual(parameters, expectedParameters, "Parameters have return functions");
    }

	module("Read oData promise should", hooks => {
		test("return a promise with success & error functions as parameters", assert => {
			let model = new ModelMock(),
				oData = new ODataPromise(model),
				path = "/path";

			let read = oData.read(path);

			assert.ok(read instanceof Promise, "Read method is a Promise");
			assert.equal(model.path, path, `Path is ${model.path}`);
			assertParametersIncludeReturnFunctions(model.parameters, assert);
		});

		test("change status to fulfilled when success function is executed", assert => {
			let done = assert.async(),
				model = new ModelMock(),
				oData = new ODataPromise(model),
				readedData = "some readed data";

			let read = oData.read("/path");
			model.parameters.success(readedData);

			read.then(data => {
					assert.equal(data, readedData, "Read method returns expected data");
					done();
				})
				.catch(error => {
					assert.ok(false, "");
					done();
				});
		});

		test("change status to rejected when error function is executed", assert => {
			let done = assert.async(),
				model = new ModelMock(),
				oData = new ODataPromise(model),
				errorInfo = "some error info";

			let read = oData.read("/path");
			model.parameters.error(errorInfo);

			read.then(data => {
					throwUnexpectedPointReachedError(assert);
					done();
				})
				.catch(error => {
					assert.equal(error, errorInfo, "Read method throw expected error");
					done();
				});
		});
	});
});