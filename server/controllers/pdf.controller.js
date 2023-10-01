const puppeteer = require('puppeteer');
const fs = require('fs');

exports.convertToPdf = async (req, res) => {
    try {



        const browser = await puppeteer.launch({headless: "new"});
        const page = await browser.newPage();

        const html = fs.readFileSync('./public/clientForm.html', 'utf-8');


        await page.setContent(html, { waitUntil: 'domcontentloaded' });

        await page.emulateMediaType('screen');

        // Downlaod the PDF
        const pdf = await page.pdf({
            path: 'converted.pdf',
            margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
            printBackground: true,
            format: 'A4',
        });
        await browser.close();

       
        
      
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}