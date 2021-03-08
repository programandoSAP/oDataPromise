function initModel() {
	var sUrl = "/HanaDataBase/my/tools/users.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}