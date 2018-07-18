# Magereport CLI

Automate your magereports api requests.
* Colourfull reports
* Prints the right signal to stderr and stdout to help with CI workflows
* Node.js solution handles very well a lot of async IO.

-----------------------------------------

## Install
If you already have the last version of node.js installed:

```bash
npm install magereport-cli
```
-----------------------------------------

## Usage
```bash
npx magereport stores.csv
```

**Response example**

```
# 1
 ===== RELATÓRIO: https://www.yourstore.com ======


 � Security patch 10752 [status: unknown]
 � Security patch 10570 [status: unknown]
 ✔ Security patch 10415 [status: patched]
 ✔ Cryptojacking code detected? [status: safe]
 � Security patch 10266 [status: backend url required]
 � Security patch 9767 [status: unknown]
 � Security patch 9652 [status: unknown]
 ✔ EM_Ajaxproducts RCE vulnerability [status: safe]
 ✔ Cart2Quote RCE vulnerability [status: safe]
 ✔ Visbot malware? [status: safe]
 ✔ Security patch 8788 [status: patched]
 ✔ Amasty Product Feed vulnerability [status: safe]
 ✔ Exposed Magento 2 API? [status: safe]
 ✔ Security patch 7405 [status: installed]
 ✔ Credit Card Hijack detected? [status: safe]
 ✔ Ransomware detected? [status: safe]
 ✔ Security patch 6788 (secrets leak) [status: installed]
 ✔ GuruInc Javascript Hack? [status: safe]
 ✔ Cacheleak vulnerability? [status: safe]
 ✔ Webforms vulnerability? [status: safe]
 � Outdated Magento version? [status: CE/EE 1.x]
 � Security patch 5344 (Shoplift) [status: backend url required]
 ✔ Security patch 5994 (admin disclosure) [status: installed]
 ✔ Security patch 6285 (XSS, RSS) [status: installed]
 ✔ Security patch 6482 (XSS) [status: installed]
 ✔ Unprotected Magmi? [status: safe]
 ✔ Unprotected development files? [status: safe]
 ✖ Brute force attacks? [status: unprotected]
 � Unmaintained server? [status: unknown]
 ✔ Unprotected version control? [status: safe]
 ✔ SSL protection? [status: ok]
 

RESULTADO:
 Sucessos: 22
 Falhas: 1
 Desconhecidos: 8
 

===========================


Lojas processadas: 1
Tempo gasto: 0:18
Timeouts: 0
Lojas com falhas:
https://www.yourstore.com
```
-----------------------------------------

## Performance
I've run around **300** urls from a CSV file and it took only **16:50min** to complete. 
The process never reached more than **6%** of my **CPU** (MacBook Air (11-inch, Mid 2012).
Average **memory** peak was like **30mb**.

Make your own tests and send improvements through pull requests.

## How it all works
Since magereport.com does not provide any http API, the current solution is the automation of something you would do with a browser.

Every single url read from the csv file is pushed to a in-process queue, then it's processed concurrently (max set to 10), opening each store as Chromium headless page (tab), using dev tools (Puppeteer).

It scans the page using basic DOM apis to extract the result of each test suite, and output it to the console using some fancy colours.

## Known issues
* Sometimes you might see a unhendled promise reject error.
* It's half english half portuguese.
* We must accept the concurrency as a command line argument.
* This doc  sucks cuz I'm falling a sleep.
* npm install with -g fail because of Google Puppeteer

Any contribution would be welcome.
