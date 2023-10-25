const products = [
    {
        id: 1,
        name: 'ITALIAN MARKET ESPRESSO',
        description: '',
        price: 14.97,
        stock: 10,
        pictureUrl: 'https://images.squarespace-cdn.com/content/v1/5d3320c0bced1900013fff90/1621893614523-63F3JNCPB7EK52AZQ4GF/Italian+Market+Espresso+-+Whole+Bean+%28Website+Sizing%29.jpg?format=500w'
    },
    {
        id: 2,
        name: 'GUATEMALA ANTIGUA',
        description: '',
        price: 15.97,
        stock: 7,
        pictureUrl: 'https://images.squarespace-cdn.com/content/v1/5d3320c0bced1900013fff90/1622171806071-P7POOUIA0U5R4I8S0JRF/Guatemala+Antigua+Lifestyle+3+%28website+sizing%29.jpg?format=500w'
    },
    {
        id: 3,
        name: 'COLOMBIA TOLIMA',
        description: '',
        price: 14.97,
        stock: 3,
        pictureUrl: 'https://images.squarespace-cdn.com/content/v1/5d3320c0bced1900013fff90/1679494318994-XI7LF22DU206K84FX9NF/TOLIMA_NEW_BAGscene.png?format=500w'
    },
    {
        id: 4,
        name: 'GRACIE GROUNDS',
        description: '',
        price: 13.97,
        stock: 15,
        pictureUrl: 'https://images.squarespace-cdn.com/content/v1/5d3320c0bced1900013fff90/1623287543210-8TUCSHA80BC9JXQTF5HF/Gracie+Grounds+2+%28Website+Sizing%29.jpg?format=500w'
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(products);
        }, 1000);
    });
}