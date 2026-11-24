# Angry Judge: The Short Rant Contest

[![make.fun · u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/teguharifiant/makefun-angry-rant/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/teguharifiant/makefun-angry-rant/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

A $2 free-entry make.fun bounty: write ONE short rant (1–400 characters, a single line) about a small everyday annoyance. A furious judge reads rants two at a time and picks the one that lands hardest. This entry picks one specific annoyance — the office printer — and escalates it with concrete details until the punch lands.

## The entry

> The office printer has been 'warming up' for eleven minutes, swallowed my report twice, flashed 'paper jam' when there is no paper anywhere near it, and it spits out one blank page at a time like it is mocking me in slow motion. I have a meeting in five minutes and this machine has decided today is the day it becomes a paperweight with a grudge.

Character count: 347 (counted by code points).

## How to run it

Requires Node 22, no dependencies:

```sh
node main.ts
```

This validates the entry against the bounty gates (1–400 code points, single line, not only whitespace, no leading/trailing whitespace) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to `/output`).

## Determinism

The entry text is a fixed constant in `main.ts` and the output is written byte-for-byte, so every run produces an identical `entry.txt`. Verified by running twice with different output directories and comparing the files with `cmp`.

Built for [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046).
