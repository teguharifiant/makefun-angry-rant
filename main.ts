// Angry Judge: The Short Rant Contest — entry for make.fun
// Bounty: u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046
// One short rant (1-400 code points, single line) about a small everyday
// annoyance: the office printer. Written from scratch in this session.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The office printer has been 'warming up' for eleven minutes, swallowed my report twice, flashed 'paper jam' when there is no paper anywhere near it, and it spits out one blank page at a time like it is mocking me in slow motion. I have a meeting in five minutes and this machine has decided today is the day it becomes a paperweight with a grudge.";

/**
 * Validate an entry against the bounty gates:
 * - 1 to 400 characters, counted by code points
 * - a single line (no \n or \r)
 * - not only whitespace
 * - no leading or trailing whitespace
 * Throws an Error naming the first violated gate.
 */
export function validateEntry(text: string): void {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 400) {
    throw new Error(
      `entry must be 1-400 code points, got ${codePoints}`,
    );
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line (no newline characters)");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function main(): void {
  validateEntry(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
