"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bn = void 0;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var bn = function (value) {
    return new bignumber_js_1.default(value);
};
exports.bn = bn;
