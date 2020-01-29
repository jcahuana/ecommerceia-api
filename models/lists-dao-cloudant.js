var utils = require('../utils/utils.js');

let db;

// Initialize the DB when this module is loaded
(function getDbConnection() {
    //console.info('Initializing Cloudant connection...', 'items-dao-cloudant.getDbConnection()');
    utils.dbCloudantConnect().then((database) => {
        //console.log('Juan');

        console.info('Cloudant connection initialized.');
        db = database;

        // List all databases
        db.list().then((body) => {

            body.rows.forEach((doc) => {
                console.log(doc);
            });

        }).catch((err) => { console.log(err); });

    }).catch((err) => {
        console.error('Error while initializing DB: ' + err.message, 'items-dao-cloudant.getDbConnection()');
        throw err;
    });
})();