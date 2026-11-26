// Fortune in a Pot — make.fun entry (program/v1).
// Writes one kind, funny fortune for the houseplant on the windowsill
// to /output/entry.txt: a single line, 1-120 characters, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "Soon the sun will kiss your newest leaf, and your keeper will tell every guest how happy you are in this window.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
