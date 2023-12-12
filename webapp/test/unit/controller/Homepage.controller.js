/*global QUnit*/

sap.ui.define([
	"comndbs/reuse-consumer-ui/controller/Homepage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Homepage Controller");

	QUnit.test("I should test the Homepage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
