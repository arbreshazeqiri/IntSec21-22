# XSS Skenues

Dy hapat kryesor:
1. Gjetja e objektivit:Vegla mundohet të identifikojë të gjitha parametrat e injektueshëm në forma, URLs, headers, etj.
2. Testimi për XSS: Për secilin parametër, skenuesi përpiqet të detektojë nëse është i rrezikuar nga Cross-Site Scripting. Vegla injekton kod të shkruar në JavaScript, duke përfshirë disa karaktere të veçanta HTML (>, <, ", ') dhe do të mundohet të shohë nëse përgjigja kthehet e pasanitizuar.
Nëse vegla vërenë të paktën një dobësi, do të lajmërojë që faqja e skenuar është jo e sigurtë (ndaj XSS).

## Teknologjitë
 * Puppeteer
 * Javascript
 * NodeJS
 * Express
 

 
### Instalimi

Klono repon:
```
git clone https://github.com/arbreshazeqiri/IntSec21-22.git
```
Hyni në follderin e shkarkuar:
```
cd IntSec21-22
```
Instalo varshmëritë:
```
npm install
```
Ekzekuto aplikacionin:
```
npm start
```
Open the browser at http://localhost:4000/


###### Project forked and modified for education purposes from: https://github.com/MariaGarber/XSS-Scanner.git
