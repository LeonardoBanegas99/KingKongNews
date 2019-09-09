const request = require('request');
const cheerio = require('cheerio');

/*https://www.google.com/search?q=samsung&tbm=isch&ved=2ahUKEwjC192a7cLkAhXHIFMKHRe3Cl0Q2-cCegQIABAA&oq=samsung&gs_l=img.3..0i67l10.36238.37102..37240...0.0..0.137.927.0j7......0....1..gws-wiz-img.......35i39j0.vTA4R7dkBpk&ei=UM51XcLvDMfBzAKX7qroBQ&bih=1008&biw=1082
https://www.google.com/search?q=Apple+tipped+to+reopen+its+flagship+NYC+store+when+the+iPhone+11+goes+on+sale&tbm=isch&sxsrf=ACYBGNSOE3sk9TfCiDu8NC1VdXVNVmtwUA:1568001609585&source=lnms&sa=X&ved=0ahUKEwic9ciX7cLkAhXRs1kKHQmXBqoQ_AUICygC&biw=1082&bih=1008&dpr=1

request('https://www.google.com/search?q=Apple tipped to reopen its flagship NYC store when the iPhone 11 goes on sale',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('.rg_i Q4LuWd tx8vtf').each((i,el) => {
            console.log("hola");
            if(cont <= 10){
                cont+=1;
                const title = $(el);
                //const href = ($(el).find('.href'));
                //const final = (el.attribs.href).substring(1);
                //const link = 'https://news.google.com'.concat(final);
                //console.log((el.children.pop()).children.length();
                //console.log(link);
                console.log("img\n");
            }
        });
        //console.log($.html());
    }
});
request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('img').each((i,el) => {
            if(cont <= 10){
                cont+=1;
                console.log(el.attribs.src);
            }
        });
        //console.log($.html());
    }
});*/


//Tecnologia

request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('.DY5T1d').each((i,el) => {
            if(cont <= 10){
                cont+=1;
                const title = $(el).text();
                //const href = ($(el).find('.href'));
                const final = (el.attribs.href).substring(1);
                const link = 'https://news.google.com'.concat(final);
                console.log(title);
                console.log(link);
                console.log("Tecnologia\n");
            }
        });
        cont = 1;
        $('img').each((i,el) => {
            if(cont <= 11 && cont > 1){
                if(el.attribs.src != 'https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w48'){
                    cont+=1;
                    console.log(el.attribs.src);
                }
            }
            if(cont == 1){
                cont = 2;
            }
        });
    }
});

//Movies
/*
request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVAB/sections/CAQiWkNCQVNQUW9JTDIwdk1ESnFhblFTQW1WdUdnSlZVeUlPQ0FRYUNnb0lMMjB2TURKMmVHNHFHUW9YQ2hOTlQxWkpSVk5mVTBWRFZFbFBUbDlPUVUxRklBRW9BQSoqCAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVABUAE?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('.DY5T1d').each((i,el) => {
            if(cont <= 10){
                cont+=1;
                const title = $(el).text();
                //const href = ($(el).find('.href'));
                const final = (el.attribs.href).substring(1);
                const link = 'https://news.google.com'.concat(final);
                console.log(title);
                console.log(link);
                console.log("Movies\n");
            }
        });
        //console.log($.html());
    }
});

//Music

request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVAB/sections/CAQiRkNCQVNMZ29JTDIwdk1ESnFhblFTQW1WdUdnSlZVeUlPQ0FRYUNnb0lMMjB2TURSeWJHWXFDaElJTDIwdk1EUnliR1lvQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURKcWFuUVNBbVZ1R2dKVlV5Z0FQAVAB?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('.DY5T1d').each((i,el) => {
            if(cont <= 10){
                cont+=1;
                const title = $(el).text();
                //const href = ($(el).find('.href'));
                const final = (el.attribs.href).substring(1);
                const link = 'https://news.google.com'.concat(final);
                console.log(title);
                console.log(link);
                console.log("Music\n");
            }
        });
        //console.log($.html());
    }
});


//NBA

request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiQkNCQVNLd29JTDIwdk1EWnVkR29TQW1WdUdnSlZVeUlPQ0FRYUNnb0lMMjB2TURWcWRuZ3FCd29GRWdOT1FrRW9BQSoqCAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVABUAE?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('.DY5T1d').each((i,el) => {
            if(cont <= 10){
                cont+=1;
                const title = $(el).text();
                //const href = ($(el).find('.href'));
                const final = (el.attribs.href).substring(1);
                const link = 'https://news.google.com'.concat(final);
                console.log(title);
                console.log(link);
                console.log("NBA\n");
            }
        });
        //console.log($.html());
    }
});

//Futbol

request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiRkNCQVNMZ29JTDIwdk1EWnVkR29TQW1WdUdnSlZVeUlPQ0FRYUNnb0lMMjB2TURKMmVEUXFDZ29JRWdaVGIyTmpaWElvQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURadWRHb1NBbVZ1R2dKVlV5Z0FQAVAB?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('.DY5T1d').each((i,el) => {
            if(cont <= 10){
                cont+=1;
                const title = $(el).text();
                //const href = ($(el).find('.href'));
                const final = (el.attribs.href).substring(1);
                const link = 'https://news.google.com'.concat(final);
                console.log(title);
                console.log(link);
                console.log("Futbol\n");
            }
        });
        //console.log($.html());
    }
});

//Mundo
request('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('.DY5T1d').each((i,el) => {
            if(cont <= 10){
                cont+=1;
                const title = $(el).text();
                //const href = ($(el).find('.href'));
                const final = (el.attribs.href).substring(1);
                const link = 'https://news.google.com'.concat(final);
                console.log(title);
                console.log(link);
                console.log("Mundo\n");
            }
        });
        //console.log($.html());
    }
});

//Nutricion

request('https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ/sections/CAQiQENCQVNLZ29JTDIwdk1HdDBOVEVTQW1WdUlnNElCQm9LQ2dndmJTOHdOV1JxWXlvS0VnZ3ZiUzh3TldScVl5Z0EqJQgAKiEICiIbQ0JBU0Rnb0lMMjB2TUd0ME5URVNBbVZ1S0FBUAFQAQ?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('.DY5T1d').each((i,el) => {
            if(cont <= 10){
                cont+=1;
                const title = $(el).text();
                //const href = ($(el).find('.href'));
                const final = (el.attribs.href).substring(1);
                const link = 'https://news.google.com'.concat(final);
                console.log(title);
                console.log(link);
                console.log("Nutricion\n");
            }
        });
        //console.log($.html());
    }
});


//Medicina

request('https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ/sections/CAQiQENCQVNLZ29JTDIwdk1HdDBOVEVTQW1WdUlnNElCQm9LQ2dndmJTOHdOSE5vTXlvS0VnZ3ZiUzh3TkhOb015Z0EqJQgAKiEICiIbQ0JBU0Rnb0lMMjB2TUd0ME5URVNBbVZ1S0FBUAFQAQ?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('.DY5T1d').each((i,el) => {
            if(cont <= 10){
                cont+=1;
                const title = $(el).text();
                //const href = ($(el).find('.href'));
                const final = (el.attribs.href).substring(1);
                const link = 'https://news.google.com'.concat(final);
                console.log(title);
                console.log(link);
                console.log("medicina\n");
            }
        });
        //console.log($.html());
    }
});


request('https://news.google.com/articles/CAIiEPrVEyYphf2JvlfjYffeEkQqGQgEKhAIACoHCAowsLSICzD8hIcDMMfPmwY?hl=en-US&gl=US&ceid=US%3Aen',
(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        var cont = 1;
        $('.DY5T1d').each((i,el) => {
            if(cont <= 10){
                cont+=1;
                const title = $(el).text();
                //const href = ($(el).find('.href'));
                const final = (el.attribs.href).substring(1);
                const link = 'https://news.google.com'.concat(final);
                console.log(title);
                console.log(link);
                console.log("\n");
            }
        });
        //console.log($.html());
    }
});

*/
