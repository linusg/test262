// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v7.0.0 ID_Start characters are accepted as
  identifier start characters.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var Ϳ;
var Ԩ;
var ԩ;
var Ԫ;
var ԫ;
var Ԭ;
var ԭ;
var Ԯ;
var ԯ;
var ࢡ;
var ࢭ;
var ࢮ;
var ࢯ;
var ࢰ;
var ࢱ;
var ࢲ;
var ॸ;
var ঀ;
var ఴ;
var ᛱ;
var ᛲ;
var ᛳ;
var ᛴ;
var ᛵ;
var ᛶ;
var ᛷ;
var ᛸ;
var ᤝ;
var ᤞ;
var Ꚙ;
var ꚙ;
var Ꚛ;
var ꚛ;
var ꚜ;
var ꚝ;
var ꞔ;
var ꞕ;
var Ꞗ;
var ꞗ;
var Ꞙ;
var ꞙ;
var Ꞛ;
var ꞛ;
var Ꞝ;
var ꞝ;
var Ꞟ;
var ꞟ;
var Ɜ;
var Ɡ;
var Ɬ;
var Ʞ;
var Ʇ;
var ꟷ;
var ꧠ;
var ꧡ;
var ꧢ;
var ꧣ;
var ꧤ;
var ꧦ;
var ꧧ;
var ꧨ;
var ꧩ;
var ꧪ;
var ꧫ;
var ꧬ;
var ꧭ;
var ꧮ;
var ꧯ;
var ꧺ;
var ꧻ;
var ꧼ;
var ꧽ;
var ꧾ;
var ꩾ;
var ꩿ;
var ꬰ;
var ꬱ;
var ꬲ;
var ꬳ;
var ꬴ;
var ꬵ;
var ꬶ;
var ꬷ;
var ꬸ;
var ꬹ;
var ꬺ;
var ꬻ;
var ꬼ;
var ꬽ;
var ꬾ;
var ꬿ;
var ꭀ;
var ꭁ;
var ꭂ;
var ꭃ;
var ꭄ;
var ꭅ;
var ꭆ;
var ꭇ;
var ꭈ;
var ꭉ;
var ꭊ;
var ꭋ;
var ꭌ;
var ꭍ;
var ꭎ;
var ꭏ;
var ꭐ;
var ꭑ;
var ꭒ;
var ꭓ;
var ꭔ;
var ꭕ;
var ꭖ;
var ꭗ;
var ꭘ;
var ꭙ;
var ꭚ;
var ꭜ;
var ꭝ;
var ꭞ;
var ꭟ;
var ꭤ;
var ꭥ;
var 𐌟;
var 𐍐;
var 𐍑;
var 𐍒;
var 𐍓;
var 𐍔;
var 𐍕;
var 𐍖;
var 𐍗;
var 𐍘;
var 𐍙;
var 𐍚;
var 𐍛;
var 𐍜;
var 𐍝;
var 𐍞;
var 𐍟;
var 𐍠;
var 𐍡;
var 𐍢;
var 𐍣;
var 𐍤;
var 𐍥;
var 𐍦;
var 𐍧;
var 𐍨;
var 𐍩;
var 𐍪;
var 𐍫;
var 𐍬;
var 𐍭;
var 𐍮;
var 𐍯;
var 𐍰;
var 𐍱;
var 𐍲;
var 𐍳;
var 𐍴;
var 𐍵;
var 𐔀;
var 𐔁;
var 𐔂;
var 𐔃;
var 𐔄;
var 𐔅;
var 𐔆;
var 𐔇;
var 𐔈;
var 𐔉;
var 𐔊;
var 𐔋;
var 𐔌;
var 𐔍;
var 𐔎;
var 𐔏;
var 𐔐;
var 𐔑;
var 𐔒;
var 𐔓;
var 𐔔;
var 𐔕;
var 𐔖;
var 𐔗;
var 𐔘;
var 𐔙;
var 𐔚;
var 𐔛;
var 𐔜;
var 𐔝;
var 𐔞;
var 𐔟;
var 𐔠;
var 𐔡;
var 𐔢;
var 𐔣;
var 𐔤;
var 𐔥;
var 𐔦;
var 𐔧;
var 𐔰;
var 𐔱;
var 𐔲;
var 𐔳;
var 𐔴;
var 𐔵;
var 𐔶;
var 𐔷;
var 𐔸;
var 𐔹;
var 𐔺;
var 𐔻;
var 𐔼;
var 𐔽;
var 𐔾;
var 𐔿;
var 𐕀;
var 𐕁;
var 𐕂;
var 𐕃;
var 𐕄;
var 𐕅;
var 𐕆;
var 𐕇;
var 𐕈;
var 𐕉;
var 𐕊;
var 𐕋;
var 𐕌;
var 𐕍;
var 𐕎;
var 𐕏;
var 𐕐;
var 𐕑;
var 𐕒;
var 𐕓;
var 𐕔;
var 𐕕;
var 𐕖;
var 𐕗;
var 𐕘;
var 𐕙;
var 𐕚;
var 𐕛;
var 𐕜;
var 𐕝;
var 𐕞;
var 𐕟;
var 𐕠;
var 𐕡;
var 𐕢;
var 𐕣;
var 𐘀;
var 𐘁;
var 𐘂;
var 𐘃;
var 𐘄;
var 𐘅;
var 𐘆;
var 𐘇;
var 𐘈;
var 𐘉;
var 𐘊;
var 𐘋;
var 𐘌;
var 𐘍;
var 𐘎;
var 𐘏;
var 𐘐;
var 𐘑;
var 𐘒;
var 𐘓;
var 𐘔;
var 𐘕;
var 𐘖;
var 𐘗;
var 𐘘;
var 𐘙;
var 𐘚;
var 𐘛;
var 𐘜;
var 𐘝;
var 𐘞;
var 𐘟;
var 𐘠;
var 𐘡;
var 𐘢;
var 𐘣;
var 𐘤;
var 𐘥;
var 𐘦;
var 𐘧;
var 𐘨;
var 𐘩;
var 𐘪;
var 𐘫;
var 𐘬;
var 𐘭;
var 𐘮;
var 𐘯;
var 𐘰;
var 𐘱;
var 𐘲;
var 𐘳;
var 𐘴;
var 𐘵;
var 𐘶;
var 𐘷;
var 𐘸;
var 𐘹;
var 𐘺;
var 𐘻;
var 𐘼;
var 𐘽;
var 𐘾;
var 𐘿;
var 𐙀;
var 𐙁;
var 𐙂;
var 𐙃;
var 𐙄;
var 𐙅;
var 𐙆;
var 𐙇;
var 𐙈;
var 𐙉;
var 𐙊;
var 𐙋;
var 𐙌;
var 𐙍;
var 𐙎;
var 𐙏;
var 𐙐;
var 𐙑;
var 𐙒;
var 𐙓;
var 𐙔;
var 𐙕;
var 𐙖;
var 𐙗;
var 𐙘;
var 𐙙;
var 𐙚;
var 𐙛;
var 𐙜;
var 𐙝;
var 𐙞;
var 𐙟;
var 𐙠;
var 𐙡;
var 𐙢;
var 𐙣;
var 𐙤;
var 𐙥;
var 𐙦;
var 𐙧;
var 𐙨;
var 𐙩;
var 𐙪;
var 𐙫;
var 𐙬;
var 𐙭;
var 𐙮;
var 𐙯;
var 𐙰;
var 𐙱;
var 𐙲;
var 𐙳;
var 𐙴;
var 𐙵;
var 𐙶;
var 𐙷;
var 𐙸;
var 𐙹;
var 𐙺;
var 𐙻;
var 𐙼;
var 𐙽;
var 𐙾;
var 𐙿;
var 𐚀;
var 𐚁;
var 𐚂;
var 𐚃;
var 𐚄;
var 𐚅;
var 𐚆;
var 𐚇;
var 𐚈;
var 𐚉;
var 𐚊;
var 𐚋;
var 𐚌;
var 𐚍;
var 𐚎;
var 𐚏;
var 𐚐;
var 𐚑;
var 𐚒;
var 𐚓;
var 𐚔;
var 𐚕;
var 𐚖;
var 𐚗;
var 𐚘;
var 𐚙;
var 𐚚;
var 𐚛;
var 𐚜;
var 𐚝;
var 𐚞;
var 𐚟;
var 𐚠;
var 𐚡;
var 𐚢;
var 𐚣;
var 𐚤;
var 𐚥;
var 𐚦;
var 𐚧;
var 𐚨;
var 𐚩;
var 𐚪;
var 𐚫;
var 𐚬;
var 𐚭;
var 𐚮;
var 𐚯;
var 𐚰;
var 𐚱;
var 𐚲;
var 𐚳;
var 𐚴;
var 𐚵;
var 𐚶;
var 𐚷;
var 𐚸;
var 𐚹;
var 𐚺;
var 𐚻;
var 𐚼;
var 𐚽;
var 𐚾;
var 𐚿;
var 𐛀;
var 𐛁;
var 𐛂;
var 𐛃;
var 𐛄;
var 𐛅;
var 𐛆;
var 𐛇;
var 𐛈;
var 𐛉;
var 𐛊;
var 𐛋;
var 𐛌;
var 𐛍;
var 𐛎;
var 𐛏;
var 𐛐;
var 𐛑;
var 𐛒;
var 𐛓;
var 𐛔;
var 𐛕;
var 𐛖;
var 𐛗;
var 𐛘;
var 𐛙;
var 𐛚;
var 𐛛;
var 𐛜;
var 𐛝;
var 𐛞;
var 𐛟;
var 𐛠;
var 𐛡;
var 𐛢;
var 𐛣;
var 𐛤;
var 𐛥;
var 𐛦;
var 𐛧;
var 𐛨;
var 𐛩;
var 𐛪;
var 𐛫;
var 𐛬;
var 𐛭;
var 𐛮;
var 𐛯;
var 𐛰;
var 𐛱;
var 𐛲;
var 𐛳;
var 𐛴;
var 𐛵;
var 𐛶;
var 𐛷;
var 𐛸;
var 𐛹;
var 𐛺;
var 𐛻;
var 𐛼;
var 𐛽;
var 𐛾;
var 𐛿;
var 𐜀;
var 𐜁;
var 𐜂;
var 𐜃;
var 𐜄;
var 𐜅;
var 𐜆;
var 𐜇;
var 𐜈;
var 𐜉;
var 𐜊;
var 𐜋;
var 𐜌;
var 𐜍;
var 𐜎;
var 𐜏;
var 𐜐;
var 𐜑;
var 𐜒;
var 𐜓;
var 𐜔;
var 𐜕;
var 𐜖;
var 𐜗;
var 𐜘;
var 𐜙;
var 𐜚;
var 𐜛;
var 𐜜;
var 𐜝;
var 𐜞;
var 𐜟;
var 𐜠;
var 𐜡;
var 𐜢;
var 𐜣;
var 𐜤;
var 𐜥;
var 𐜦;
var 𐜧;
var 𐜨;
var 𐜩;
var 𐜪;
var 𐜫;
var 𐜬;
var 𐜭;
var 𐜮;
var 𐜯;
var 𐜰;
var 𐜱;
var 𐜲;
var 𐜳;
var 𐜴;
var 𐜵;
var 𐜶;
var 𐝀;
var 𐝁;
var 𐝂;
var 𐝃;
var 𐝄;
var 𐝅;
var 𐝆;
var 𐝇;
var 𐝈;
var 𐝉;
var 𐝊;
var 𐝋;
var 𐝌;
var 𐝍;
var 𐝎;
var 𐝏;
var 𐝐;
var 𐝑;
var 𐝒;
var 𐝓;
var 𐝔;
var 𐝕;
var 𐝠;
var 𐝡;
var 𐝢;
var 𐝣;
var 𐝤;
var 𐝥;
var 𐝦;
var 𐝧;
var 𐡠;
var 𐡡;
var 𐡢;
var 𐡣;
var 𐡤;
var 𐡥;
var 𐡦;
var 𐡧;
var 𐡨;
var 𐡩;
var 𐡪;
var 𐡫;
var 𐡬;
var 𐡭;
var 𐡮;
var 𐡯;
var 𐡰;
var 𐡱;
var 𐡲;
var 𐡳;
var 𐡴;
var 𐡵;
var 𐡶;
var 𐢀;
var 𐢁;
var 𐢂;
var 𐢃;
var 𐢄;
var 𐢅;
var 𐢆;
var 𐢇;
var 𐢈;
var 𐢉;
var 𐢊;
var 𐢋;
var 𐢌;
var 𐢍;
var 𐢎;
var 𐢏;
var 𐢐;
var 𐢑;
var 𐢒;
var 𐢓;
var 𐢔;
var 𐢕;
var 𐢖;
var 𐢗;
var 𐢘;
var 𐢙;
var 𐢚;
var 𐢛;
var 𐢜;
var 𐢝;
var 𐢞;
var 𐪀;
var 𐪁;
var 𐪂;
var 𐪃;
var 𐪄;
var 𐪅;
var 𐪆;
var 𐪇;
var 𐪈;
var 𐪉;
var 𐪊;
var 𐪋;
var 𐪌;
var 𐪍;
var 𐪎;
var 𐪏;
var 𐪐;
var 𐪑;
var 𐪒;
var 𐪓;
var 𐪔;
var 𐪕;
var 𐪖;
var 𐪗;
var 𐪘;
var 𐪙;
var 𐪚;
var 𐪛;
var 𐪜;
var 𐫀;
var 𐫁;
var 𐫂;
var 𐫃;
var 𐫄;
var 𐫅;
var 𐫆;
var 𐫇;
var 𐫉;
var 𐫊;
var 𐫋;
var 𐫌;
var 𐫍;
var 𐫎;
var 𐫏;
var 𐫐;
var 𐫑;
var 𐫒;
var 𐫓;
var 𐫔;
var 𐫕;
var 𐫖;
var 𐫗;
var 𐫘;
var 𐫙;
var 𐫚;
var 𐫛;
var 𐫜;
var 𐫝;
var 𐫞;
var 𐫟;
var 𐫠;
var 𐫡;
var 𐫢;
var 𐫣;
var 𐫤;
var 𐮀;
var 𐮁;
var 𐮂;
var 𐮃;
var 𐮄;
var 𐮅;
var 𐮆;
var 𐮇;
var 𐮈;
var 𐮉;
var 𐮊;
var 𐮋;
var 𐮌;
var 𐮍;
var 𐮎;
var 𐮏;
var 𐮐;
var 𐮑;
var 𑅐;
var 𑅑;
var 𑅒;
var 𑅓;
var 𑅔;
var 𑅕;
var 𑅖;
var 𑅗;
var 𑅘;
var 𑅙;
var 𑅚;
var 𑅛;
var 𑅜;
var 𑅝;
var 𑅞;
var 𑅟;
var 𑅠;
var 𑅡;
var 𑅢;
var 𑅣;
var 𑅤;
var 𑅥;
var 𑅦;
var 𑅧;
var 𑅨;
var 𑅩;
var 𑅪;
var 𑅫;
var 𑅬;
var 𑅭;
var 𑅮;
var 𑅯;
var 𑅰;
var 𑅱;
var 𑅲;
var 𑅶;
var 𑇚;
var 𑈀;
var 𑈁;
var 𑈂;
var 𑈃;
var 𑈄;
var 𑈅;
var 𑈆;
var 𑈇;
var 𑈈;
var 𑈉;
var 𑈊;
var 𑈋;
var 𑈌;
var 𑈍;
var 𑈎;
var 𑈏;
var 𑈐;
var 𑈑;
var 𑈓;
var 𑈔;
var 𑈕;
var 𑈖;
var 𑈗;
var 𑈘;
var 𑈙;
var 𑈚;
var 𑈛;
var 𑈜;
var 𑈝;
var 𑈞;
var 𑈟;
var 𑈠;
var 𑈡;
var 𑈢;
var 𑈣;
var 𑈤;
var 𑈥;
var 𑈦;
var 𑈧;
var 𑈨;
var 𑈩;
var 𑈪;
var 𑈫;
var 𑊰;
var 𑊱;
var 𑊲;
var 𑊳;
var 𑊴;
var 𑊵;
var 𑊶;
var 𑊷;
var 𑊸;
var 𑊹;
var 𑊺;
var 𑊻;
var 𑊼;
var 𑊽;
var 𑊾;
var 𑊿;
var 𑋀;
var 𑋁;
var 𑋂;
var 𑋃;
var 𑋄;
var 𑋅;
var 𑋆;
var 𑋇;
var 𑋈;
var 𑋉;
var 𑋊;
var 𑋋;
var 𑋌;
var 𑋍;
var 𑋎;
var 𑋏;
var 𑋐;
var 𑋑;
var 𑋒;
var 𑋓;
var 𑋔;
var 𑋕;
var 𑋖;
var 𑋗;
var 𑋘;
var 𑋙;
var 𑋚;
var 𑋛;
var 𑋜;
var 𑋝;
var 𑋞;
var 𑌅;
var 𑌆;
var 𑌇;
var 𑌈;
var 𑌉;
var 𑌊;
var 𑌋;
var 𑌌;
var 𑌏;
var 𑌐;
var 𑌓;
var 𑌔;
var 𑌕;
var 𑌖;
var 𑌗;
var 𑌘;
var 𑌙;
var 𑌚;
var 𑌛;
var 𑌜;
var 𑌝;
var 𑌞;
var 𑌟;
var 𑌠;
var 𑌡;
var 𑌢;
var 𑌣;
var 𑌤;
var 𑌥;
var 𑌦;
var 𑌧;
var 𑌨;
var 𑌪;
var 𑌫;
var 𑌬;
var 𑌭;
var 𑌮;
var 𑌯;
var 𑌰;
var 𑌲;
var 𑌳;
var 𑌵;
var 𑌶;
var 𑌷;
var 𑌸;
var 𑌹;
var 𑌽;
var 𑍝;
var 𑍞;
var 𑍟;
var 𑍠;
var 𑍡;
var 𑒀;
var 𑒁;
var 𑒂;
var 𑒃;
var 𑒄;
var 𑒅;
var 𑒆;
var 𑒇;
var 𑒈;
var 𑒉;
var 𑒊;
var 𑒋;
var 𑒌;
var 𑒍;
var 𑒎;
var 𑒏;
var 𑒐;
var 𑒑;
var 𑒒;
var 𑒓;
var 𑒔;
var 𑒕;
var 𑒖;
var 𑒗;
var 𑒘;
var 𑒙;
var 𑒚;
var 𑒛;
var 𑒜;
var 𑒝;
var 𑒞;
var 𑒟;
var 𑒠;
var 𑒡;
var 𑒢;
var 𑒣;
var 𑒤;
var 𑒥;
var 𑒦;
var 𑒧;
var 𑒨;
var 𑒩;
var 𑒪;
var 𑒫;
var 𑒬;
var 𑒭;
var 𑒮;
var 𑒯;
var 𑓄;
var 𑓅;
var 𑓇;
var 𑖀;
var 𑖁;
var 𑖂;
var 𑖃;
var 𑖄;
var 𑖅;
var 𑖆;
var 𑖇;
var 𑖈;
var 𑖉;
var 𑖊;
var 𑖋;
var 𑖌;
var 𑖍;
var 𑖎;
var 𑖏;
var 𑖐;
var 𑖑;
var 𑖒;
var 𑖓;
var 𑖔;
var 𑖕;
var 𑖖;
var 𑖗;
var 𑖘;
var 𑖙;
var 𑖚;
var 𑖛;
var 𑖜;
var 𑖝;
var 𑖞;
var 𑖟;
var 𑖠;
var 𑖡;
var 𑖢;
var 𑖣;
var 𑖤;
var 𑖥;
var 𑖦;
var 𑖧;
var 𑖨;
var 𑖩;
var 𑖪;
var 𑖫;
var 𑖬;
var 𑖭;
var 𑖮;
var 𑘀;
var 𑘁;
var 𑘂;
var 𑘃;
var 𑘄;
var 𑘅;
var 𑘆;
var 𑘇;
var 𑘈;
var 𑘉;
var 𑘊;
var 𑘋;
var 𑘌;
var 𑘍;
var 𑘎;
var 𑘏;
var 𑘐;
var 𑘑;
var 𑘒;
var 𑘓;
var 𑘔;
var 𑘕;
var 𑘖;
var 𑘗;
var 𑘘;
var 𑘙;
var 𑘚;
var 𑘛;
var 𑘜;
var 𑘝;
var 𑘞;
var 𑘟;
var 𑘠;
var 𑘡;
var 𑘢;
var 𑘣;
var 𑘤;
var 𑘥;
var 𑘦;
var 𑘧;
var 𑘨;
var 𑘩;
var 𑘪;
var 𑘫;
var 𑘬;
var 𑘭;
var 𑘮;
var 𑘯;
var 𑙄;
var 𑢠;
var 𑢡;
var 𑢢;
var 𑢣;
var 𑢤;
var 𑢥;
var 𑢦;
var 𑢧;
var 𑢨;
var 𑢩;
var 𑢪;
var 𑢫;
var 𑢬;
var 𑢭;
var 𑢮;
var 𑢯;
var 𑢰;
var 𑢱;
var 𑢲;
var 𑢳;
var 𑢴;
var 𑢵;
var 𑢶;
var 𑢷;
var 𑢸;
var 𑢹;
var 𑢺;
var 𑢻;
var 𑢼;
var 𑢽;
var 𑢾;
var 𑢿;
var 𑣀;
var 𑣁;
var 𑣂;
var 𑣃;
var 𑣄;
var 𑣅;
var 𑣆;
var 𑣇;
var 𑣈;
var 𑣉;
var 𑣊;
var 𑣋;
var 𑣌;
var 𑣍;
var 𑣎;
var 𑣏;
var 𑣐;
var 𑣑;
var 𑣒;
var 𑣓;
var 𑣔;
var 𑣕;
var 𑣖;
var 𑣗;
var 𑣘;
var 𑣙;
var 𑣚;
var 𑣛;
var 𑣜;
var 𑣝;
var 𑣞;
var 𑣟;
var 𑣿;
var 𑫀;
var 𑫁;
var 𑫂;
var 𑫃;
var 𑫄;
var 𑫅;
var 𑫆;
var 𑫇;
var 𑫈;
var 𑫉;
var 𑫊;
var 𑫋;
var 𑫌;
var 𑫍;
var 𑫎;
var 𑫏;
var 𑫐;
var 𑫑;
var 𑫒;
var 𑫓;
var 𑫔;
var 𑫕;
var 𑫖;
var 𑫗;
var 𑫘;
var 𑫙;
var 𑫚;
var 𑫛;
var 𑫜;
var 𑫝;
var 𑫞;
var 𑫟;
var 𑫠;
var 𑫡;
var 𑫢;
var 𑫣;
var 𑫤;
var 𑫥;
var 𑫦;
var 𑫧;
var 𑫨;
var 𑫩;
var 𑫪;
var 𑫫;
var 𑫬;
var 𑫭;
var 𑫮;
var 𑫯;
var 𑫰;
var 𑫱;
var 𑫲;
var 𑫳;
var 𑫴;
var 𑫵;
var 𑫶;
var 𑫷;
var 𑫸;
var 𒍯;
var 𒍰;
var 𒍱;
var 𒍲;
var 𒍳;
var 𒍴;
var 𒍵;
var 𒍶;
var 𒍷;
var 𒍸;
var 𒍹;
var 𒍺;
var 𒍻;
var 𒍼;
var 𒍽;
var 𒍾;
var 𒍿;
var 𒎀;
var 𒎁;
var 𒎂;
var 𒎃;
var 𒎄;
var 𒎅;
var 𒎆;
var 𒎇;
var 𒎈;
var 𒎉;
var 𒎊;
var 𒎋;
var 𒎌;
var 𒎍;
var 𒎎;
var 𒎏;
var 𒎐;
var 𒎑;
var 𒎒;
var 𒎓;
var 𒎔;
var 𒎕;
var 𒎖;
var 𒎗;
var 𒎘;
var 𒑣;
var 𒑤;
var 𒑥;
var 𒑦;
var 𒑧;
var 𒑨;
var 𒑩;
var 𒑪;
var 𒑫;
var 𒑬;
var 𒑭;
var 𒑮;
var 𖩀;
var 𖩁;
var 𖩂;
var 𖩃;
var 𖩄;
var 𖩅;
var 𖩆;
var 𖩇;
var 𖩈;
var 𖩉;
var 𖩊;
var 𖩋;
var 𖩌;
var 𖩍;
var 𖩎;
var 𖩏;
var 𖩐;
var 𖩑;
var 𖩒;
var 𖩓;
var 𖩔;
var 𖩕;
var 𖩖;
var 𖩗;
var 𖩘;
var 𖩙;
var 𖩚;
var 𖩛;
var 𖩜;
var 𖩝;
var 𖩞;
var 𖫐;
var 𖫑;
var 𖫒;
var 𖫓;
var 𖫔;
var 𖫕;
var 𖫖;
var 𖫗;
var 𖫘;
var 𖫙;
var 𖫚;
var 𖫛;
var 𖫜;
var 𖫝;
var 𖫞;
var 𖫟;
var 𖫠;
var 𖫡;
var 𖫢;
var 𖫣;
var 𖫤;
var 𖫥;
var 𖫦;
var 𖫧;
var 𖫨;
var 𖫩;
var 𖫪;
var 𖫫;
var 𖫬;
var 𖫭;
var 𖬀;
var 𖬁;
var 𖬂;
var 𖬃;
var 𖬄;
var 𖬅;
var 𖬆;
var 𖬇;
var 𖬈;
var 𖬉;
var 𖬊;
var 𖬋;
var 𖬌;
var 𖬍;
var 𖬎;
var 𖬏;
var 𖬐;
var 𖬑;
var 𖬒;
var 𖬓;
var 𖬔;
var 𖬕;
var 𖬖;
var 𖬗;
var 𖬘;
var 𖬙;
var 𖬚;
var 𖬛;
var 𖬜;
var 𖬝;
var 𖬞;
var 𖬟;
var 𖬠;
var 𖬡;
var 𖬢;
var 𖬣;
var 𖬤;
var 𖬥;
var 𖬦;
var 𖬧;
var 𖬨;
var 𖬩;
var 𖬪;
var 𖬫;
var 𖬬;
var 𖬭;
var 𖬮;
var 𖬯;
var 𖭀;
var 𖭁;
var 𖭂;
var 𖭃;
var 𖭣;
var 𖭤;
var 𖭥;
var 𖭦;
var 𖭧;
var 𖭨;
var 𖭩;
var 𖭪;
var 𖭫;
var 𖭬;
var 𖭭;
var 𖭮;
var 𖭯;
var 𖭰;
var 𖭱;
var 𖭲;
var 𖭳;
var 𖭴;
var 𖭵;
var 𖭶;
var 𖭷;
var 𖭽;
var 𖭾;
var 𖭿;
var 𖮀;
var 𖮁;
var 𖮂;
var 𖮃;
var 𖮄;
var 𖮅;
var 𖮆;
var 𖮇;
var 𖮈;
var 𖮉;
var 𖮊;
var 𖮋;
var 𖮌;
var 𖮍;
var 𖮎;
var 𖮏;
var 𛰀;
var 𛰁;
var 𛰂;
var 𛰃;
var 𛰄;
var 𛰅;
var 𛰆;
var 𛰇;
var 𛰈;
var 𛰉;
var 𛰊;
var 𛰋;
var 𛰌;
var 𛰍;
var 𛰎;
var 𛰏;
var 𛰐;
var 𛰑;
var 𛰒;
var 𛰓;
var 𛰔;
var 𛰕;
var 𛰖;
var 𛰗;
var 𛰘;
var 𛰙;
var 𛰚;
var 𛰛;
var 𛰜;
var 𛰝;
var 𛰞;
var 𛰟;
var 𛰠;
var 𛰡;
var 𛰢;
var 𛰣;
var 𛰤;
var 𛰥;
var 𛰦;
var 𛰧;
var 𛰨;
var 𛰩;
var 𛰪;
var 𛰫;
var 𛰬;
var 𛰭;
var 𛰮;
var 𛰯;
var 𛰰;
var 𛰱;
var 𛰲;
var 𛰳;
var 𛰴;
var 𛰵;
var 𛰶;
var 𛰷;
var 𛰸;
var 𛰹;
var 𛰺;
var 𛰻;
var 𛰼;
var 𛰽;
var 𛰾;
var 𛰿;
var 𛱀;
var 𛱁;
var 𛱂;
var 𛱃;
var 𛱄;
var 𛱅;
var 𛱆;
var 𛱇;
var 𛱈;
var 𛱉;
var 𛱊;
var 𛱋;
var 𛱌;
var 𛱍;
var 𛱎;
var 𛱏;
var 𛱐;
var 𛱑;
var 𛱒;
var 𛱓;
var 𛱔;
var 𛱕;
var 𛱖;
var 𛱗;
var 𛱘;
var 𛱙;
var 𛱚;
var 𛱛;
var 𛱜;
var 𛱝;
var 𛱞;
var 𛱟;
var 𛱠;
var 𛱡;
var 𛱢;
var 𛱣;
var 𛱤;
var 𛱥;
var 𛱦;
var 𛱧;
var 𛱨;
var 𛱩;
var 𛱪;
var 𛱰;
var 𛱱;
var 𛱲;
var 𛱳;
var 𛱴;
var 𛱵;
var 𛱶;
var 𛱷;
var 𛱸;
var 𛱹;
var 𛱺;
var 𛱻;
var 𛱼;
var 𛲀;
var 𛲁;
var 𛲂;
var 𛲃;
var 𛲄;
var 𛲅;
var 𛲆;
var 𛲇;
var 𛲈;
var 𛲐;
var 𛲑;
var 𛲒;
var 𛲓;
var 𛲔;
var 𛲕;
var 𛲖;
var 𛲗;
var 𛲘;
var 𛲙;
var 𞠀;
var 𞠁;
var 𞠂;
var 𞠃;
var 𞠄;
var 𞠅;
var 𞠆;
var 𞠇;
var 𞠈;
var 𞠉;
var 𞠊;
var 𞠋;
var 𞠌;
var 𞠍;
var 𞠎;
var 𞠏;
var 𞠐;
var 𞠑;
var 𞠒;
var 𞠓;
var 𞠔;
var 𞠕;
var 𞠖;
var 𞠗;
var 𞠘;
var 𞠙;
var 𞠚;
var 𞠛;
var 𞠜;
var 𞠝;
var 𞠞;
var 𞠟;
var 𞠠;
var 𞠡;
var 𞠢;
var 𞠣;
var 𞠤;
var 𞠥;
var 𞠦;
var 𞠧;
var 𞠨;
var 𞠩;
var 𞠪;
var 𞠫;
var 𞠬;
var 𞠭;
var 𞠮;
var 𞠯;
var 𞠰;
var 𞠱;
var 𞠲;
var 𞠳;
var 𞠴;
var 𞠵;
var 𞠶;
var 𞠷;
var 𞠸;
var 𞠹;
var 𞠺;
var 𞠻;
var 𞠼;
var 𞠽;
var 𞠾;
var 𞠿;
var 𞡀;
var 𞡁;
var 𞡂;
var 𞡃;
var 𞡄;
var 𞡅;
var 𞡆;
var 𞡇;
var 𞡈;
var 𞡉;
var 𞡊;
var 𞡋;
var 𞡌;
var 𞡍;
var 𞡎;
var 𞡏;
var 𞡐;
var 𞡑;
var 𞡒;
var 𞡓;
var 𞡔;
var 𞡕;
var 𞡖;
var 𞡗;
var 𞡘;
var 𞡙;
var 𞡚;
var 𞡛;
var 𞡜;
var 𞡝;
var 𞡞;
var 𞡟;
var 𞡠;
var 𞡡;
var 𞡢;
var 𞡣;
var 𞡤;
var 𞡥;
var 𞡦;
var 𞡧;
var 𞡨;
var 𞡩;
var 𞡪;
var 𞡫;
var 𞡬;
var 𞡭;
var 𞡮;
var 𞡯;
var 𞡰;
var 𞡱;
var 𞡲;
var 𞡳;
var 𞡴;
var 𞡵;
var 𞡶;
var 𞡷;
var 𞡸;
var 𞡹;
var 𞡺;
var 𞡻;
var 𞡼;
var 𞡽;
var 𞡾;
var 𞡿;
var 𞢀;
var 𞢁;
var 𞢂;
var 𞢃;
var 𞢄;
var 𞢅;
var 𞢆;
var 𞢇;
var 𞢈;
var 𞢉;
var 𞢊;
var 𞢋;
var 𞢌;
var 𞢍;
var 𞢎;
var 𞢏;
var 𞢐;
var 𞢑;
var 𞢒;
var 𞢓;
var 𞢔;
var 𞢕;
var 𞢖;
var 𞢗;
var 𞢘;
var 𞢙;
var 𞢚;
var 𞢛;
var 𞢜;
var 𞢝;
var 𞢞;
var 𞢟;
var 𞢠;
var 𞢡;
var 𞢢;
var 𞢣;
var 𞢤;
var 𞢥;
var 𞢦;
var 𞢧;
var 𞢨;
var 𞢩;
var 𞢪;
var 𞢫;
var 𞢬;
var 𞢭;
var 𞢮;
var 𞢯;
var 𞢰;
var 𞢱;
var 𞢲;
var 𞢳;
var 𞢴;
var 𞢵;
var 𞢶;
var 𞢷;
var 𞢸;
var 𞢹;
var 𞢺;
var 𞢻;
var 𞢼;
var 𞢽;
var 𞢾;
var 𞢿;
var 𞣀;
var 𞣁;
var 𞣂;
var 𞣃;
var 𞣄;
