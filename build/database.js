"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
    { id: "1981",
        email: "ammal@gmail.com",
        password: "flamengo123"
    },
    { id: "2019",
        email: "flamengo@gmail.com",
        password: "flamengo12345"
    }
];
exports.products = [
    { id: "01",
        name: "Blusa Flamengo 2023",
        price: 350,
        category: types_1.Categorys.CLOTHES_AND_SHOES
    },
    { id: "02",
        name: "Pulseira Flamengo Branco",
        price: 30,
        category: types_1.Categorys.ACCESSORIES
    },
];
exports.purchases = [
    { userId: "1981",
        productId: "01",
        quantity: 2,
        totalPrice: 700
    },
    { userId: "2019",
        productId: "02",
        quantity: 3,
        totalPrice: 90
    },
];
function createUser(id, email, password) {
    exports.users.push({ id, email, password });
    return ("Cadastro realizado com sucesso");
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    exports.products.push({ id, name, price, category });
    return ("Produto criado com sucesso");
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    return exports.products.filter((product) => {
        return product.id === idToSearch;
    });
}
exports.getProductById = getProductById;
const queryProductsByName = (q) => {
    return exports.products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase());
    });
};
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    exports.purchases.push({ userId, productId, quantity, totalPrice });
    return ("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.purchases.filter((purchase) => {
        return purchase.userId.toLowerCase().includes(userIdToSearch.toLowerCase());
    });
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map