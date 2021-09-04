const countDecimals = value => {
    if (Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
};


const author = {
    name: "Jorge",
    lastname: "Barcos"
};

const mapItem = ({
    id,
    title,
    currency_id,
    price,
    thumbnail,
    condition,
    shipping,
    address,
    sold_quantity,
    category_id
}) => {
    return {
        id,
        title,
        price: {
            currency: currency_id,
            amount: price,
            decimals: countDecimals(price)
        },
        picture: thumbnail,
        free_shipping: shipping.free_shipping,
        address: address ? address.state_name : null,
        condition,
        sold_quantity,
        category_id
    };
};

const mapResponse = (items, categories) => {




    return {
        author,
        categories: categories
            ? categories.values[0].path_from_root.map(category => category.name)
            : [],
        items: items.slice(0, 4).map(item => mapItem(item))
    };
};

module.exports = { mapItem, mapResponse, author };