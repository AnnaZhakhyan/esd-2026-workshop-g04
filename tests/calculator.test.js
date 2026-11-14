import test from "node:test";
import assert from "node:assert/strict";
import { add, multiply } from "../site/calculator.js";

test("adds two positive numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("adds negative numbers", () => {
  assert.equal(add(-2, -3), -5);
});

test("adding zero preserves the number", () => {
  assert.equal(add(7, 0), 7);
});

test("adds decimal numbers", () => {
  assert.equal(add(1.5, 2.5), 4);
});

test("multiplies two positive numbers", () => {
  assert.equal(multiply(3, 4), 12);
});

test("multiplies a negative and a positive number", () => {
  assert.equal(multiply(-2, 5), -10);
});

test("multiplying by zero returns zero", () => {
  assert.equal(multiply(0, 8), 0);
});
