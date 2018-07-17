
const green = "\x1b[32m";
const red = "\x1b[31m";
const cyan = "\x1b[36m";
const reset = "\x1b[0m";

const positive = [
    'ok', 'safe', 'patched', 'protected', 'installed' 
];
const negative = [
    'unprotected', 'unsafe'
]

function report (res) {
    const store = res.store;
    const results = res.results;
    console.log(reset, '===== RELATÓRIO:', store, '======');
    console.log('\n');
    
    let failures = 0 ;
    let success = 0;
    let unknown = 0;

    results.forEach((result) => {
        if(positive.indexOf(result.status) !== -1){
            success++;
            return console.log(green, `✔`, result.test, `[status: ${result.status}]`);
        }
        if(negative.indexOf(result.status) !== -1){
            failures++;
            return console.error(red, `✖`, result.test, `[status: ${result.status}]`);
        }
        unknown++;
        return console.log(cyan, `�`, result.test, `[status: ${result.status}]`);
    });
    console.log(reset, '\n');
    console.log('RESULTADO:');
    console.log(green, 'Sucessos:', success);
    console.log(red, 'Falhas:', failures);
    console.log(cyan, 'Desconhecidos:', unknown);
    console.log(reset, '\n');
    console.log('===========================');
    console.log('\n');

    return {
        store,
        failures,
        success,
        unknown
    }
}
module.exports = report;