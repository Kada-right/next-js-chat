import { getTokens } from "@/utils/get-tokens";
import { equal } from "node:assert/strict";
import test from "node:test";

test("should add 2 tokens if 2 days have passed and none of them is a Sunday", () => {
  const ts1 = new Date("2023-11-10T12:00:00").getTime();
  const ts2 = new Date("2023-11-12T12:00:00").getTime();
  const token = 0;
  const result = getTokens(token, ts1, ts2);
  equal(result, 2);
});

test("should add 3 tokens if 2 days have passed and one of the days is a Sunday", () => {
  const ts1 = new Date("2023-11-11T12:00:00").getTime();
  const ts2 = new Date("2023-11-13T12:00:00").getTime();
  const token = 0;
  const result = getTokens(token, ts1, ts2);
  equal(result, 3);
});

test("should add 2 tokens if 1 days have passed and that day is a Sunday", () => {
  const ts1 = new Date("2023-11-12T12:00:00").getTime();
  const ts2 = new Date("2023-11-13T12:00:00").getTime();
  const token = 0;
  const result = getTokens(token, ts1, ts2);
  equal(result, 2);
});

test("should add 1 token if 1 day has passed and that day is not a Sunday", () => {
  const ts1 = new Date("2024-11-13T12:00:00").getTime();
  const ts2 = new Date("2024-11-14T12:00:00").getTime();
  const token = 0;
  const result = getTokens(token, ts1, ts2);
  equal(result, 1);
});

test("should add 3 tokens if 5 days have passed", () => {
  const ts1 = new Date("2024-11-09T12:00:00").getTime();
  const ts2 = new Date("2024-11-14T12:00:00").getTime();
  const token = 0;
  const result = getTokens(token, ts1, ts2);
  equal(result, 3);
});

test("should add 0 tokens if on same day", () => {
  const ts1 = new Date("2024-11-09T12:00:00").getTime();
  const ts2 = new Date("2024-11-09T12:00:00").getTime();
  const token = 0;
  const result = getTokens(token, ts1, ts2);
  equal(result, 0);
});

test("should add 0 tokens if there is already 3 tokens and two days have passed", () => {
  const ts1 = new Date("2024-11-12T12:00:00").getTime();
  const ts2 = new Date("2024-11-14T12:00:00").getTime();
  const token = 3;
  const result = getTokens(token, ts1, ts2);
  equal(result, 3);
});
