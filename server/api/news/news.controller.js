const Axios = require('axios');

const getNews = async (req, res) => {
    let url = `https://newscafapi.p.rapidapi.com/apirapid/news/${req.params.categories}/`;

    var options = {
        headers: {
            'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
            'x-rapidapi-host': 'newscafapi.p.rapidapi.com',
        },
        params: {q: 'news'},
    };

    try {
        console.log('getNews controller was called');
        const news = await Axios.get(url, options);

        return res.send(news.data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {getNews};
