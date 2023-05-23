const DESARROLLO = "DESARROLLO";
const PRODUCCION = "PRODUCCION";
//-------------------------------
//---- CAMBIAR SEGUN EL USO -----
//-------------------------------
const PERFIL_USO = DESARROLLO;
let _api_user = "",
    _api_user_station = "",
    _api_station = "",
    _api_service = "",
    _api_schedule = "",
    _api_register = "",
    _api_out_time = "",
    _api_location = "",
    _api_in_time = "";

if (PERFIL_USO === DESARROLLO) {
    const _servidor = "http://200.122.220.171:3001";
    _api_user = _servidor + "/user";
    _api_user_station = _servidor + "/user_station";
    _api_station = _servidor + "/station";
    _api_service = _servidor + "/service";
    _api_schedule = _servidor + "/schedule";
    _api_register = _servidor + "/register";
    _api_out_time = _servidor + "/out_time";
    _api_location = _servidor + "/location";
    _api_in_time = _servidor + "/in_time";
}

if (PERFIL_USO === PRODUCCION) {
    const _servidor = "??????????????????????.com:8443";
    _api_user = _servidor + "/user";
    _api_user_station = _servidor + "/user_station";
    _api_station = _servidor + "/station";
    _api_service = _servidor + "/service";
    _api_schedule = _servidor + "/schedule";
    _api_register = _servidor + "/register";
    _api_out_time = _servidor + "/out_time";
    _api_location = _servidor + "/location";
    _api_in_time = _servidor + "/in_time";
}
const API_USER_URL = _api_user;
const API_USER_STATION_URL = _api_user_station;
const API_STATION_URL = _api_station;
const API_SERVICE_URL = _api_service;
const API_SCHEDULE_URL = _api_schedule;
const API_REGISTER_URL = _api_register;
const API_OUT_TIME_URL = _api_out_time;
const API_IN_TIME_URL = _api_in_time;
const API_LOCATION_URL = _api_location;

export {
    API_USER_URL,
    API_USER_STATION_URL,
    API_STATION_URL,
    API_SERVICE_URL,
    API_SCHEDULE_URL,
    API_REGISTER_URL,
    API_OUT_TIME_URL,
    API_IN_TIME_URL,
    API_LOCATION_URL

}