const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
    el: "#app",
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: "",
        cart: [],
    },
    methods: {
        makeGetRequest(url) {
            return new Promise((resolve, reject) => {
                let xhr;
                if (window.XMLHttpRequest) {
                    xhr = new window.XMLHttpRequest(); // readyState = 1
                } else {
                    xhr = new window.ActiveXObject("Microsoft.XMLHTTP")
                }

                xhr.onreadystatechange = function() { // xhr changed
                    if (xhr.readyState === 4) {
                        if (xhr.status !== 200) {
                            reject(xhr.responseText);
                            return
                        }
                        const body = JSON.parse(xhr.responseText);
                        resolve(body)
                    }
                };

                xhr.onerror = function(err) {
                    reject(err)
                };

                xhr.open('GET', url);
                xhr.send(); // readyState 2
            });
        },
        async fetchGoods() {
            try {
                this.goods = await this.makeGetRequest(`${API_URL}/catalogData.json`);
                this.filteredGoods = [...this.goods];
            } catch (e) {
                console.error(e);
            }
        },
        filterGoods(value) {
            const regexp = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter((good) => {
                return regexp.test(good.product_name);
            });
        },
        addToCart(good) {
        this.cart.push(good);
        },
        hideShow() {
            const cart = document.querySelector(".cart-container");
            cart.classList.toggle("hidden")
        }
    },
    mounted() {
        this.fetchGoods();
    },
    computed: {
        hasGoods() {
            return this.filteredGoods.length > 0;
        },
    }
});
















































