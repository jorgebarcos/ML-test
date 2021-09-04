const axios = require('axios');

exports.getCategoriesById = async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.mercadolibre.com/categories/${req.params.id}`
        );
        const { path_from_root } = response.data;
        const categories = path_from_root.map(category => category.name);
        res.json(categories);

    } catch (error) {
        if (error.response) {
            res
                .status(error.response.status)
                .json({ error: error.response.data.message });
        }
    }
}
