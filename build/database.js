"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
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
        category: "Blusa"
    },
    { id: "02",
        name: "Blusa Flamengo 2023 Branco",
        price: 300,
        category: "Blusa"
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
        totalPrice: 900
    },
];
//# sourceMappingURL=database.js.map