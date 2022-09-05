import assert from "assert";
import envRes from "./index.js";

const KEY: string = "foo";
const VALUE: string = "bar";
const contains: { [id: string]: any } = {
  foo: "bar",
  "env-res": "environment-reserve",
  "just-a-number": 100821,
};
const k_v: any[] = Object.entries(contains);

describe("env-res", () => {
  it("can set a key-value pairs and size of envRes will change", () => {
    assert.equal(0, envRes.size);
    for (const [key, value] of k_v) envRes.set(key, value);
    assert.equal(k_v.length, envRes.size);
  });

  it("can iterate values", () => {
    let count: number = 0;
    const count_values: number = k_v.length;
    const count_iterator: number = 4;

    envRes.forEach((value: string, key: string) => {
      assert.notEqual(-1, Object.keys(contains).indexOf(key));
      assert.notEqual(-1, Object.values(contains).indexOf(value));
      count++;
    });

    for (const [key, value] of envRes.entries()) {
      assert.notEqual(-1, Object.keys(contains).indexOf(key));
      assert.notEqual(-1, Object.values(contains).indexOf(value));
      count++;
    }

    for (const key of envRes.keys()) {
      assert.notEqual(-1, Object.keys(contains).indexOf(key));
      count++;
    }

    for (const value of envRes.values()) {
      assert.notEqual(-1, Object.values(contains).indexOf(value));
      count++;
    }

    assert.equal(count_iterator * count_values, count);
  });

  it("should have value", () => {
    assert.strictEqual(VALUE, envRes.get(KEY));
  });

  it("can delete the value", () => {
    let count: number = k_v.length;
    for (const [key, value] of k_v) {
      assert.equal(count, envRes.size);
      envRes.delete(key);
      count--;
    }
    assert.equal(0, envRes.size);
  });
});
