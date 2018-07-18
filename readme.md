# Magereport CLI

Automate your magereports api requests.
* Colourfull reports
* Prints the right signal to sterr and stdout to help with CI workflows
========================================

## Install
If you already have the last version of node.js installed:

```bash
npm install magereport-cli
```

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

## Performance
I've run around 300 urls from a CSV file and it took only **16:50**. 
The process never reached more than 6% of my CPU (MacBook Air (11-inch, Mid 2012)) and the average memory peak was 30mb.

Make your tests and send improvements through pull requests.