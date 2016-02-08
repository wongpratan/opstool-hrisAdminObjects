module.exports={
    "map": {
        "jquery/jquery" : "jquery",
        "GenericList": "GenericList.js",
    },
    "paths": {
        "jquery" : "js/jquery.min.js",                  // 'http://code.jquery.com/jquery-1.11.1.min.js'
        "GenericList.js": "js/GenericList.js",
    },
    "ext": {
        "ejs": "can/view/ejs/system"
    },
    "buildConfig": {
        "map": {
            "can/util/util": "can/util/domless/domless"
        }
    }
};