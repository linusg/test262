// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Kayah_Li`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00A92F
  ],
  ranges: [
    [0x00A900, 0x00A92D]
  ]
});
testPropertyEscapes(
  /^\p{Script=Kayah_Li}+$/u,
  matchSymbols,
  "\\p{Script=Kayah_Li}"
);
testPropertyEscapes(
  /^\p{Script=Kali}+$/u,
  matchSymbols,
  "\\p{Script=Kali}"
);
testPropertyEscapes(
  /^\p{sc=Kayah_Li}+$/u,
  matchSymbols,
  "\\p{sc=Kayah_Li}"
);
testPropertyEscapes(
  /^\p{sc=Kali}+$/u,
  matchSymbols,
  "\\p{sc=Kali}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00A92E
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A8FF],
    [0x00A930, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Kayah_Li}+$/u,
  nonMatchSymbols,
  "\\P{Script=Kayah_Li}"
);
testPropertyEscapes(
  /^\P{Script=Kali}+$/u,
  nonMatchSymbols,
  "\\P{Script=Kali}"
);
testPropertyEscapes(
  /^\P{sc=Kayah_Li}+$/u,
  nonMatchSymbols,
  "\\P{sc=Kayah_Li}"
);
testPropertyEscapes(
  /^\P{sc=Kali}+$/u,
  nonMatchSymbols,
  "\\P{sc=Kali}"
);
