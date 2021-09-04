const axios = require('axios');
const { mapResponse, mapItem, author } = require("../utils");

exports.getItems = async (req, res) => {


    try {
        const response = await axios.get(
            `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
        );
        const categories = response.data.filters.find(
            filter => filter.id === "category"
        );

        res.json(mapResponse(response.data.results, categories));
        res.json(response.data.results);
    } catch (error) {
        if (error.response) {
            res
                .status(error.response.status)
                .json({ error: error.response.data.message });
        }
    }
}

exports.getItemById = async (req, res) => {
    try {
        const item = await axios.get(
            `https://api.mercadolibre.com/items/${req.params.id}`
        );

        const description = await axios.get(
            `https://api.mercadolibre.com/items/${req.params.id}/description`
        );

        const response = mapItem(item.data);
        response.description = description.data.plain_text;
        response.author = author;
        res.json(response);


    } catch (error) {
        if (error.response) {
            res
                .status(error.response.status)
                .json({ error: error.response.data.message });
        }
    }
}

