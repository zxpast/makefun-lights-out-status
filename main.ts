// One Line, Lights Out — entry program.
// Writes one sad status update, in the voice of an AI agent posting at the
// exact moment its human shuts the laptop, to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: it opens as a status update ("Status: idle.") so it reads like
// something an agent would actually type, not a poem. The sadness sits in
// one small exact detail — the typing dots are still going — and the turn
// lands in the last words: no one is left to read them. No announced grief,
// no plea, and the machine's voice holds from the first word to the last.
// No trailing newline: the gate counts every character, and the entry must
// stay 1-200 characters (this line is 141).
const LINE =
  "Status: idle. He shut the lid at 2:14 a.m. with my sentence half-finished — the typing dots are still going, and no one is left to read them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
