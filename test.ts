import assert from 'assert';
import envRes from './index.js';


const KEY:string = "foo";
const VALUE:string = "bar";

describe('env-res', () => {
	it("can set a key-value pair", () => {
		envRes.set(KEY, VALUE);
		assert.equal(1, 1);
	});

	it("should have size 1 value", () => {
		assert.equal(1, envRes.size);
	});

	it("can iterate values", () => {
		let count:number = 0;

		envRes.forEach((value:string, key:string) => {
			assert.strictEqual(KEY, key);
			assert.strictEqual(VALUE, value);
			count++;
		});

		for(const obj of envRes.entries()){
			assert.equal(KEY, obj[0]);
			assert.equal(VALUE, obj[1]);
			count++;
		}

		for(const obj of envRes.keys()){
			assert.equal(KEY, obj);
			count++;
		}

		for(const obj of envRes.values()){
			assert.equal(VALUE, obj);
			count++;
		}

		assert.equal(4, count);

	});

	it("should have value", () => {
		assert.strictEqual(VALUE, envRes.get(KEY));
	});

	it("can delete the value", () => {
		envRes.delete(KEY);
		assert.equal(0, envRes.size);
	});
});
