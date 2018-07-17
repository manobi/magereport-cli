const puppeteer = require('puppeteer');
const csv = require('csv');
const fs = require('fs');
const run = require('./run');
const report = require('./lib/report');

//https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

function getStores(){
    return new Promise((resolve, reject) => {
        fs.readFile(`${__dirname}/teste.csv`, (err, data) => {
            if(err){
                return reject('Erro ao abrir o arquivo csv');
            }
        
            csv.parse(data.toString(), (err, data) => {
                // Define strutucture
                const header = data[0];
                data.shift();
                
                // Transform to readable format
                const stores = data.map((row) => {
                    const response = {};
                    header.forEach((key, index) => {
                        response[key] = row[index]
                    });
                    return response;
                });
                return resolve(stores);
            });
        });
    });
}

async function main(){
    // Open Chrome and read CSV simultaneously
    Promise.all([
        getStores(), 
        puppeteer.launch()
    ]).then((res) => {
        const stores = res[0];
        const browser = res[1];

        //Runner
        const reports = stores.map((store) => {
            return new Promise((resolve, reject) => {
                return run(store.URL, browser)
                    .then(report)
                    .then(resolve)
                    .catch((err) => {
                        console.log('Erro ao rodar para loja', store.URL);
                        reject(err);
                    });
            });
        });
        Promise.all(reports).then((reports) => {
            const failedStores = reports.filter(report => report.failures);
            console.log(failedStores);
            browser.close();
        });
    });

}
main();