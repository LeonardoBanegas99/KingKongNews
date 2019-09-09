const request = require('request');
const cheerio = require('cheerio');


request('https://news.google.com/?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        $('.DY5T1d').each((i,el) => {
            const title = $(el).text();
            //const href = ($(el).find('.href'));
            const final = (el.attribs.href).substring(1);
            const link = 'https://news.google.com'.concat(final);
            console.log(title);
            console.log(link);
            console.log("\n");
        });
        //console.log($.html());
    }
});
