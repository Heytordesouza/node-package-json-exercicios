"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const types_1 = require("./types");
console.log((0, database_1.createUser)("2023", "nadanão@email.com", "chegadebananinha"));
console.log((0, database_1.getAllUsers)());
console.log((0, database_1.createProduct)("200", "Blusa retrô", 200, types_1.Categorys.CLOTHES_AND_SHOES));
console.log((0, database_1.getAllProducts)());
console.log((0, database_1.getProductById)("01"));
console.log((0, database_1.queryProductsByName)("Blusa Flamengo 2023"));
console.log((0, database_1.createPurchase)("2019", "01", 2, 700));
console.log((0, database_1.getAllPurchasesFromUserId)("2019"));
//# sourceMappingURL=index.js.map