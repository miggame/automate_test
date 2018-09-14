const puppeteer = require('puppeteer');
async function openGame() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 360,
            height: 640,
            isMobile: true,
            hasTouch: true
        },
        devtools: true,
        executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
    });
    const page = await browser.newPage();
    await page.goto('https://miggame.github.io/game/bbt/index.html');
    // setTimeout(() => {
    //     browser.close();
    // }, 100000);
    const selector = 'body > div:nth-child(7) > div';
    await page.waitForSelector(selector, {
        visible: true,
        timeout: 300000
    }).then(() => {
        page.click(selector).then(() => {
            console.log('then click done');
        })
    }).catch((err) => {
        console.log('catch click');
        page.click(selector).then(() => {
            console.log('catch click done');
        })
    });
    // await page.click();
}

// setInterval(openGame, 20000);
openGame();