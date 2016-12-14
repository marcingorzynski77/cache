var ApiClient;
(function (ApiClient) {
    var Vehicles = (function () {
        function Vehicles() { }
        Vehicles.localUrl = 'http://localhost/Sixeyed.CarValet.Api/api/vehicle';
        Vehicles.crossDomainUrl = 'http://valetmymotor.api/Sixeyed.CarValet.Api/api/vehicle';
        Vehicles.prototype.searchVehicles = function (makeName, modelName, successCallback) {
            var data = {
                "makeName": makeName,
                "modelName": modelName
            };
            $.getJSON(Vehicles.localUrl, data, successCallback);
        };
        Vehicles.prototype.getVehicle = function (vehicleId, successCallback) {
            $.getJSON(Vehicles.crossDomainUrl + "/" + vehicleId, null, successCallback);
        };
        return Vehicles;
    })();
    ApiClient.Vehicles = Vehicles;    
})(ApiClient || (ApiClient = {}));
