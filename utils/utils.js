const Cloudant = require('@cloudant/cloudant');

const vcap = require('../config/vcap-local.json');
const vcapUrl = vcap.cloudantNoSQLDB[0].credentials.url;
const appSettings = {
    cloudant_db_name: 'ecommerceia-tiendasel'
};

function dbCloudantConnect() {

    return new Promise((resolve, reject) => {
        Cloudant({  // eslint-disable-line
            url: vcapUrl
        }, ((err, cloudant) => {
            if (err) {
                console.error('Connect failure: ' + err.message + ' for Cloudant DB: ' +
                    appSettings.cloudant_db_name);
                reject(err);
            } else {
                let db = cloudant.use(appSettings.cloudant_db_name);
                console.info('Connect success! Connected to DB: ' + appSettings.cloudant_db_name);
                resolve(db);
            }
        }));
    });

}
module.exports = { dbCloudantConnect };