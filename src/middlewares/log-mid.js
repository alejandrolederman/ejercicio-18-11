const fs = require ("fs");

function userMid (req, res, next){

    fs.writeFileSync("./logs/userLogs.txt", "El usuario ingresó a la ruta:" + req.url);
    next();
};

module.exports = userMid;