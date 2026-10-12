// Run with: node scripts/hours.check.mjs  (Node 22.18+ strips the TS types)
import assert from "node:assert/strict";
import { openStatus, formatTime } from "../lib/hours.ts";

const week = [420, 600, 600, 600, 600, 600, 420].map((open) => ({ open, close: 1380 }));
// Manila is UTC+8, no DST.
const at = (iso) => new Date(iso + "+08:00");

assert.equal(formatTime(420), "7 AM");
assert.equal(formatTime(1380), "11 PM");
assert.equal(formatTime(750), "12:30 PM");

assert.deepEqual(openStatus(at("2026-10-12T09:00"), week), { open: false, label: "Closed · opens at 10 AM" }); // Mon
assert.deepEqual(openStatus(at("2026-10-12T10:00"), week), { open: true, label: "Open now · until 11 PM" });
assert.deepEqual(openStatus(at("2026-10-12T23:00"), week), { open: false, label: "Closed · opens tomorrow 10 AM" });
assert.deepEqual(openStatus(at("2026-10-16T23:30"), week), { open: false, label: "Closed · opens tomorrow 7 AM" }); // Fri night
assert.deepEqual(openStatus(at("2026-10-17T07:15"), week), { open: true, label: "Open now · until 11 PM" }); // Sat
console.log("hours: ok");
