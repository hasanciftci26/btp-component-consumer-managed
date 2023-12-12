sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.ndbs.reuseconsumerui.controller.Homepage", {
            onInit: function () {

            },
            onGo: function () {
                let sCompanyName = this.getView().byId("inpCompanyName").getValue();
                this._initComponent(sCompanyName);
            },
            _initComponent: function (sCompanyName) {
                if (!this._customerTableComponent) {
                    let oCustomerTableComponent = this.getOwnerComponent().createComponent({
                        usage: "customerTableComponent",
                        settings: {
                            companyName: sCompanyName
                        }
                    });
                    oCustomerTableComponent.then(
                        function (oCustomerTable) {
                            oCustomerTable.setCompanyName(sCompanyName);
                            this.byId("ccCustomerTable").setComponent(oCustomerTable);
                            this._customerTableComponent = oCustomerTable;
                        }.bind(this)
                    );
                } else {
                    this._customerTableComponent.setCompanyName(sCompanyName);
                }
            }
        });
    });
