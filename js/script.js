const goods = [
    { title: "Робот-пылесос xiaomi", price: 20000, img: 'https://via.placeholder.com/150' },
    { title: "Samsung Galaxy", price: 21500, img: 'https://via.placeholder.com/150' },
    { title: "Стиральная машина hotpoint", price: 32000, img: 'https://via.placeholder.com/150' },
    { title: "Умные часы apple watch", price: 26000, img: 'https://via.placeholder.com/150' }
];

const renderGoodsItem = (title = '<h3></h3>', price = '0', img = '') => {
    return `<div class='goods-item'>
    <img src='${img}' alt='alt'>
    <h3>${title}</h3>
    <p>${price}</p>
    </div>`
};
// document.write(renderGoodsItem(goods[1].title, goods[1].price, goods[1].img));

const renderGoodsList = list => {
    const goodList = list.map(good => renderGoodsItem(good.title, good.price, good.img));
    const context = goodList.forEach(item => { document.querySelector('.goods-list').innerHTML += item });
    // document.querySelector('.goods-list').innerHTML = goodList[0] + goodList[1] + goodList[2] + goodList[3];
};

renderGoodsList(goods);