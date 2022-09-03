"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const index_js_1 = __importDefault(require("../index.js"));
const KEY = "foo";
const VALUE = "bar";
describe('env-res', () => {
    it("can set a key-value pair", () => {
        index_js_1.default.set(KEY, VALUE);
        assert_1.default.equal(1, 1);
    });
    it("should have size 1 value", () => {
        assert_1.default.equal(1, index_js_1.default.size);
    });
    it("can iterate values", () => {
        let count = 0;
        index_js_1.default.forEach((value, key) => {
            assert_1.default.strictEqual(KEY, key);
            assert_1.default.strictEqual(VALUE, value);
            count++;
        });
        for (const obj of index_js_1.default.entries()) {
            assert_1.default.equal(KEY, obj[0]);
            assert_1.default.equal(VALUE, obj[1]);
            count++;
        }
        for (const obj of index_js_1.default.keys()) {
            assert_1.default.equal(KEY, obj);
            count++;
        }
        for (const obj of index_js_1.default.values()) {
            assert_1.default.equal(VALUE, obj);
            count++;
        }
        assert_1.default.equal(4, count);
    });
    it("should have value", () => {
        assert_1.default.strictEqual(VALUE, index_js_1.default.get(KEY));
    });
    it("can delete the value", () => {
        index_js_1.default.delete(KEY);
        assert_1.default.equal(0, index_js_1.default.size);
    });
});
