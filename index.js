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
        const $ = cheerio.load(html);
        const articles = [];

        $('.left_part', html).each(function() {
            const title = $(this).text().slice(0, -16);
            const url = $(this).find('a').attr('href');
            articles.push({
                title,
                url
            });
            console.log(articles)
        });
    });