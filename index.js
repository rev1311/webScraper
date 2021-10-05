const PORT = 8000;
const cheerio = require('cheerio');
const express = require('express');
const axios = require('axios');

app = express();
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

const url = 'https://m.theepochtimes.com/';

axios(url)
    .then(response => {
        const html = response.data;
        console.log(html)
        const $ = cheerio.load(html);
        const articles = [];

        $('.focusheadlines', html).each(()=> {
            const title = $(this).text();
            const image = $(this).attr('.image');
            const url = $(this).find('a').attr('href');
            articles.push({
                title,
                image,
                url
            });
            console.log(articles)
        }).catch(err => console.log(err));
    });