sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("de.exxcellent.ui5tooling.customservermiddleware.controller.App", {

		onInit: function() {
			this.aSearchFilters = [];
		},

		/**
		 * Trigger search for specific items.
		 * @param {sap.ui.base.Event} oEvent Input changed event
		 */
		onSearch: function(oEvent) {
			// First reset current filters
			this.aSearchFilters = [];

			// add filter for search
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("Name", FilterOperator.Contains, sQuery);
				this.aSearchFilters.push(filter);
			}

			this._applyListFilters();
		},

		_applyListFilters: function() {
			var oList = this.byId("airportList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(this.aSearchFilters, "/Airports");
		}

	});

});
