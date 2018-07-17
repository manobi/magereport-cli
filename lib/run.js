async function run(url, browser){
    
    const page = await browser.newPage();
    await page.goto(`https://www.magereport.com/scan/?s=${url}`);

    try {
        await page.waitForSelector('.status .risk-level .low, .status .risk-level .medium, .status .risk-level .high', {
            timeout: 100000 //1min
        });
    } catch (error) {
        page.close();
        return Promise.reject('Timeout esperando resultado na página');
    }

    //await page.screenshot({path: 'example.png'});
    const results = await page.evaluate(() => {
        return [...document.querySelectorAll('.scan-results div article')].map((test) => {
            const header = test.querySelector('dt');
            const content = test.querySelector('dd');
            return {
                test: header.textContent,
                status: content.textContent
            }
        });
    });

    return page.close().then(() => {
        return {
            store: url,
            results
        };
    });
}
module.exports = run;
