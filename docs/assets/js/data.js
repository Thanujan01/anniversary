/* ============================================================
   DATA — everything the site says lives here.
   Edit this file, save, refresh. No build step.

   The dates and times come from relationship_memories_chronological.txt
   and from the filenames in img/. The wording is mine — change any of it.
   ============================================================ */

var CONFIG = {
  him:     "Thanu",
  her:     "Thamil",
  himFull: "Thanujan",
  himBorn: "2001-07-05",   // my birthday — 5 July, eight days before hers
  herFull: "Thamiliny",
  herBorn: "2005-07-13",   // her birthday — 13 July
  start:   "2022-11-16",   // the day she said yes — day one
  firstChat:"2022-10-23",  // the very first message
  years:   4,
  target:  "2026-11-16",   // the fourth anniversary
  secret:  "16112022",     // passcode for the locked vault on Surprises
  herDear: "My dear",      // the line above her name on the home page
  herPet:  "Pondaddi",     // what the big heading on the home page calls her
  /* The home-page photo is hero.jpg in the project root, cropped to
     assets/photos/hero.jpg by tools/resize-photos.py. Swap that file
     and re-run the script to change it. */
  tagline: "From a message at 10:44 at night to four years. Still our favourite story to tell."
};

/* ============================================================
   PHOTOS — 63, oldest first.
   a = year album · t = extra collections it belongs to
   ============================================================ */
var PHOTOS = [
  { id:"p01", date:"2022-10-26", o:"p", a:"y22", t:[],              cap:"Blue lights",            note:"Three weeks before there was a word for it. We just sat there." },
  { id:"p02", date:"2022-10-26", o:"p", a:"y22", t:[],              cap:"Too many faces",          note:"Nobody framed this properly and nobody cared." },
  { id:"p03", date:"2022-10-26", o:"p", a:"y22", t:[],              cap:"The whole crowd",         note:"Everyone in the picture except the part that mattered." },
  { id:"p04", date:"2022-10-26", o:"p", a:"y22", t:["out"],         cap:"The very first one",      note:"The oldest photo of us. Standing apart, both of us already knowing." },
  { id:"p05", date:"2022-11-04", o:"p", a:"y22", t:["uni"],         cap:"Ten days before",         note:"Ten days before I said it out loud. Look how normal we look." },
  { id:"p06", date:"2022-12-11", o:"p", a:"y22", t:["uni"],         cap:"Meet-up number two",      note:"White uniforms, a step to sit on, and nowhere else to be." },
  { id:"p07", date:"2022-12-11", o:"l", a:"y22", t:["uni"],         cap:"Arm out, both in frame",  note:"The first proper day out, just the two of us." },
  { id:"p08", date:"2022-12-11", o:"p", a:"y22", t:["uni"],         cap:"Standing close",          note:"Twenty-five days in and already standing like this." },
  { id:"p09", date:"2023-03-15", o:"p", a:"y23", t:["uni"],         cap:"Meet-up number three",    note:"Three months of waiting for one afternoon." },
  { id:"p10", date:"2023-06-22", o:"p", a:"y23", t:["ride"],        cap:"Helmet on",               note:"You in the helmet, me behind the mask. Meet-up number five." },
  { id:"p11", date:"2023-06-22", o:"p", a:"y23", t:[],              cap:"Same day, no helmet",     note:"The last meet-up anyone bothered to number." },
  { id:"p12", date:"2023-09-16", o:"p", a:"y23", t:["out"],         cap:"Green everywhere",        note:"Hills, a red roof, and you laughing at something I said." },
  { id:"p13", date:"2023-09-16", o:"p", a:"y23", t:[],              cap:"Under the trees",         note:"Shade, a long braid, and absolutely no hurry." },
  { id:"p14", date:"2023-10-19", o:"p", a:"y23", t:["ring"],        cap:"The rings",               note:"Vayal la meet pannam. We went to the field and came back wearing these." },
  { id:"p15", date:"2023-10-19", o:"p", a:"y23", t:["ring"],        cap:"Holding on",              note:"Your hand in mine and two thin bands between us." },
  { id:"p16", date:"2023-10-19", o:"p", a:"y23", t:["ring"],        cap:"Still holding",           note:"We took this one about four times. Worth it." },
  { id:"p17", date:"2023-10-19", o:"l", a:"y23", t:[],              cap:"Peace sign",              note:"The face you pull when you know the photo is already good." },
  { id:"p18", date:"2023-11-14", o:"l", a:"y23", t:["ring"],        cap:"Your hand",               note:"One year since the day I told you, and the ring still new." },
  { id:"p19", date:"2024-04-06", o:"p", a:"y24", t:["cafe"],        cap:"Two glasses",             note:"Somewhere with cold drinks and a table we didn't want to leave." },
  { id:"p20", date:"2024-04-06", o:"p", a:"y24", t:["cafe"],        cap:"Same table",              note:"You with your chin on your hand. I know that look." },
  { id:"p21", date:"2024-04-06", o:"l", a:"y24", t:["out"],         cap:"Sweet Park",              note:"A sign, an elephant, the water behind us. Day well spent." },
  { id:"p22", date:"2024-05-26", o:"p", a:"y24", t:["cafe"],        cap:"Orange seats",            note:"Your hair was down to the seat. I remember noticing." },
  { id:"p23", date:"2024-05-26", o:"l", a:"y24", t:["out"],         cap:"The archway",             note:"Blue shirt, brick arch, your head on my shoulder." },
  { id:"p24", date:"2024-05-26", o:"l", a:"y24", t:["out"],         cap:"L O V E",                 note:"Giant red letters and the two of us standing in front of them like it was nothing." },
  { id:"p25", date:"2024-05-26", o:"l", a:"y24", t:["out"],         cap:"With company",            note:"Someone else came along and we still only looked at each other." },
  { id:"p26", date:"2024-06-09", o:"p", a:"y24", t:["out"],         cap:"On the way",              note:"A window, a seat, and a long way still to go." },
  { id:"p27", date:"2024-07-05", o:"l", a:"y24", t:["out","cake"],  cap:"Twenty-three",            note:"My birthday, and you took me to all that water and all that sky. Best one I have had." },
  { id:"p28", date:"2024-07-05", o:"l", a:"y24", t:["out","cake"],  cap:"Until the light went",    note:"The fifth of July. Nobody rushed us and we stayed until there was nothing left to see by." },
  { id:"p29", date:"2024-07-15", o:"p", a:"y24", t:[],              cap:"Purple shirt day",        note:"Under the trees again. We always end up under trees." },
  { id:"p30", date:"2025-01-19", o:"p", a:"y25", t:[],              cap:"New year, same two",      note:"First photo of 2025 and nothing about us had changed." },
  { id:"p31", date:"2025-01-19", o:"p", a:"y25", t:[],              cap:"Holding on tight",        note:"Your arms round my neck. This is the one I keep going back to." },
  { id:"p32", date:"2025-03-15", o:"p", a:"y25", t:[],              cap:"Indoors",                 note:"Two years and four months. Still grinning like idiots." },
  { id:"p33", date:"2025-03-17", o:"p", a:"y25", t:[],              cap:"By the house",            note:"Green behind us, you leaning in, me pretending to be serious." },
  { id:"p34", date:"2025-03-31", o:"p", a:"y25", t:["cafe"],        cap:"The red dress",           note:"You wore this and I forgot what I was going to say." },
  { id:"p35", date:"2025-03-31", o:"p", a:"y25", t:["cafe"],        cap:"Same day, closer",        note:"Your hair over my shoulder and the whole afternoon ahead." },
  { id:"p36", date:"2025-06-12", o:"p", a:"y25", t:["dress"],       cap:"The saree",               note:"You in a saree, me in lavender, both standing far too formally." },
  { id:"p37", date:"2025-07-13", o:"p", a:"y25", t:["cake"],        cap:"Twenty",                  note:"The thirteenth of July. Your birthday, and I got the whole day of it." },
  { id:"p38", date:"2025-07-13", o:"p", a:"y25", t:["cake"],        cap:"Again",                   note:"We never take just one — least of all on the thirteenth of July." },
  { id:"p39", date:"2025-08-24", o:"p", a:"y25", t:["cafe"],        cap:"The shelves place",       note:"Cold drinks and that place with everything stacked on the walls." },
  { id:"p40", date:"2025-08-24", o:"p", a:"y25", t:["cafe"],        cap:"Leaning in",              note:"You leaned all the way over for this one." },
  { id:"p41", date:"2025-08-24", o:"p", a:"y25", t:["cafe"],        cap:"Still there",             note:"We did not move for two hours." },
  { id:"p42", date:"2025-08-24", o:"p", a:"y25", t:[],              cap:"Far too close",           note:"Camera about four inches away. My favourite kind." },
  { id:"p43", date:"2025-11-16", o:"p", a:"y25", t:["cafe"],        cap:"Three years, laid table", note:"Three years to the day. Plates, a bottle, and you across from me." },
  { id:"p44", date:"2025-11-16", o:"p", a:"y25", t:[],              cap:"Third anniversary",       note:"Sixteenth of November again. We kept the habit." },
  { id:"p45", date:"2025-11-16", o:"p", a:"y25", t:[],              cap:"After dinner",            note:"Full, happy, three years in." },
  { id:"p46", date:"2026-02-14", o:"p", a:"y26", t:["dress"],       cap:"Fourteenth of February",  note:"Valentine's day, standing in a yard, dressed up for each other." },
  { id:"p47", date:"2026-02-14", o:"p", a:"y26", t:["dress"],       cap:"One more, properly",      note:"We made someone take a second one in case the first was blurry." },
  { id:"p48", date:"2026-06-24", o:"p", a:"y26", t:[],              cap:"June",                    note:"Your chin on my shoulder. The default position." },
  { id:"p49", date:"2026-06-24", o:"p", a:"y26", t:[],              cap:"Looking up",               note:"You looking at the camera, me looking at you." },
  { id:"p50", date:"2026-06-24", o:"p", a:"y26", t:[],              cap:"Arm around",              note:"Nothing special happened this day. That is the point." },
  { id:"p51", date:"2026-06-24", o:"p", a:"y26", t:[],              cap:"Right up close",          note:"Your eyes take up the whole frame here." },
  { id:"p52", date:"2026-07-12", o:"l", a:"y26", t:["ride"],        cap:"Helmets on the road",     note:"Green on both sides and the whole day in front of us." },
  { id:"p53", date:"2026-07-12", o:"l", a:"y26", t:["cake"],        cap:"Cake and balloons",       note:"Orange and white balloons, confetti on the table, you with the knife. A day early, because waiting was never on." },
  { id:"p54", date:"2026-07-12", o:"l", a:"y26", t:["cake"],        cap:"The sash",                note:"Twenty-one. Celebrated on the twelfth, because the thirteenth on its own was never going to be enough." },
  { id:"p55", date:"2026-07-12", o:"p", a:"y26", t:["ride"],        cap:"Back on the bike",        note:"Helmet, backpack, your face over my shoulder." },
  { id:"p56", date:"2026-08-02", o:"p", a:"y26", t:[],              cap:"Under the roof",          note:"Out of the sun, nowhere to be, perfectly happy." },
  { id:"p57", date:"2026-08-02", o:"p", a:"y26", t:[],              cap:"That laugh",              note:"Whatever I said right before this, it worked." },
  { id:"p58", date:"2026-08-02", o:"p", a:"y26", t:[],              cap:"Resting",                 note:"You half asleep on my shoulder and me not moving a muscle." },
  { id:"p59", date:"2026-08-02", o:"p", a:"y26", t:["out"],         cap:"The sea",                 note:"Sand, wind, salt in your hair, and the water right behind us." },
  { id:"p60", date:"2026-10-12", o:"l", a:"y26", t:["cafe"],        cap:"At the counter",          note:"You ordering, me taking a photo instead of helping." },
  { id:"p61", date:"2026-10-12", o:"l", a:"y26", t:[],              cap:"The painted wall",        note:"Cartoons behind us and the two of us grinning like we are nine." },
  { id:"p62", date:"2026-10-26", o:"l", a:"y26", t:["ride"],        cap:"Four years exactly",      note:"Four years to the day since the very first photo. Same two people." },
  { id:"p63", date:"2026-10-26", o:"l", a:"y26", t:["ride"],        cap:"The newest one",          note:"The most recent picture of us. Helmets on, going somewhere." }
];

/* Albums: the five year chapters first, then the little collections.
   A year album matches photo.a; a collection matches an entry in photo.t. */
var ALBUMS = [
  { key:"all",   name:"Everything",   emo:"\u{1F5BC}️",
    desc:"Every photograph of us, oldest first. Four years in one scroll." },
  { key:"y22",   name:"2022",         emo:"\u{1F331}",
    desc:"Where it starts. Blue lights, white uniforms, and the first forty-five days." },
  { key:"y23",   name:"2023",         emo:"\u{1F48D}",
    desc:"Meet-ups three, four and five — and then the field, and the rings." },
  { key:"y24",   name:"2024",         emo:"\u{1F9F3}",
    desc:"The year we started going places. Parks, water, giant red letters." },
  { key:"y25",   name:"2025",         emo:"\u{1F31F}",
    desc:"Saree days, long afternoons at the same table, and three years done." },
  { key:"y26",   name:"2026",         emo:"\u{1F525}",
    desc:"This year. Valentine's, the balloons, the sea, and the road home." },

  { key:"ring",  name:"Rings",        emo:"\u{1F48D}", sec:1,
    desc:"The nineteenth of October 2023, and the hand that has worn it since." },
  { key:"ride",  name:"On the bike",  emo:"\u{1F3CD}️", sec:1,
    desc:"Two helmets and whichever road we felt like." },
  { key:"uni",   name:"Uniform days", emo:"\u{1F392}", sec:1,
    desc:"When we were still in white and every meeting had to be planned." },
  { key:"out",   name:"Days out",     emo:"\u{1F3DD}️", sec:1,
    desc:"Parks, water, archways, the sea — the days we actually went somewhere." },
  { key:"cafe",  name:"Our tables",   emo:"☕", sec:1,
    desc:"Every table we sat at far longer than we needed to." },
  { key:"dress", name:"Dressed up",   emo:"✨", sec:1,
    desc:"The saree, the Valentine's yard — the days we made an effort." },
  { key:"cake",  name:"Birthdays",    emo:"\u{1F382}", sec:1,
    desc:"The fifth of July and the thirteenth of July. Eight days apart, both of us, every single year." }
];

/* ============================================================
   FIRSTS — the ones you wrote the exact time down for.
   ============================================================ */
var FIRSTS = [
  { e:"\u{1F4AC}", d:"2022-10-23", time:"10:44 PM", t:"The first message",
    x:"Before any of it. Just a chat that started at quarter to eleven at night.",
    tam:"First chat" },
  { e:"\u{1F49B}", d:"2022-11-14", time:"11:11 AM", t:"I told you",
    x:"Eleven minutes past eleven. Of all the times it could have been.",
    tam:"En love ah pathi sonnathu" },
  { e:"\u{1F48D}", d:"2022-11-14", time:"10:51 PM", t:"I asked",
    x:"Same day. I waited the whole day and then asked you at night.",
    tam:"Love propose pannathu" },
  { e:"\u{1F496}", d:"2022-11-16", time:"",         t:"You said yes",
    x:"Two days of waiting and then one word from you. Day one.",
    tam:"Pappu love accepted pannathu", star:1 },
  { e:"\u{1F4F1}", d:"2022-11-18", time:"8:37 AM",  t:"First “I love you” — typed",
    x:"Twenty-to-nine in the morning, in a message, and I read it about forty times.",
    tam:"First “Love you” sonnathu msg la" },
  { e:"\u{1F4DE}", d:"2022-11-19", time:"7:15 PM",  t:"First “I love you” — out loud",
    x:"The next evening you said it properly, in your own voice.",
    tam:"First “Love you” call la sonnathu" }
];

/* ============================================================
   TIMELINE — the whole thing, in order.
   p = photo id · tam = your own words from the memories file
   k = "star" (big moment) · meet = meet-up number
   ============================================================ */
var TIMELINE = [
  { d:"2022-10-23", e:"\u{1F4AC}", t:"The first message", p:null, time:"10:44 PM",
    x:"A chat that neither of us thought would still be going four years later.",
    tam:"First chat — Time: 10:44 PM" },

  { d:"2022-10-26", e:"\u{1F303}", t:"The first photograph", p:"p04",
    x:"Blue lights, late evening, both of us standing slightly too far apart. Three weeks before it had a name." },

  { d:"2022-11-04", e:"\u{1F6B6}", t:"Ten days before", p:"p05",
    x:"Nothing had been said yet. We just went places together and pretended that was normal." },

  { d:"2022-11-14", e:"\u{1F49B}", t:"I told you about my love", p:null, time:"11:11 AM",
    x:"Eleven minutes past eleven in the morning. I finally said the thing out loud.",
    tam:"En love ah pathi sonnathu, 11.11 am" },

  { d:"2022-11-14", e:"\u{1F48D}", t:"And then I asked", p:null, time:"10:51 PM",
    x:"The same day, at night. Twelve hours of courage-building for one question.",
    tam:"Love propose pannathu, Time: 10:51 PM" },

  { d:"2022-11-16", e:"\u{1F496}", t:"You said yes", p:null, k:"star",
    x:"Day one. Everything on this whole website counts forward from here.",
    tam:"Pappu love accepted pannathu" },

  { d:"2022-11-18", e:"\u{1F4F1}", t:"First “I love you”", p:null, time:"8:37 AM",
    x:"In a message, at twenty to nine in the morning. I still know the time.",
    tam:"Pappu first “Love you” sonnathu msg la — 8.37am" },

  { d:"2022-11-19", e:"\u{1F4DE}", t:"And then out loud", p:null, time:"7:15 PM",
    x:"The next evening, on a call, in your actual voice. Different thing entirely.",
    tam:"Pappu first “Love you” call la sonnathu — 7:15pm" },

  { d:"2022-11-21", e:"\u{1F6D5}", t:"The first meet", p:null, meet:1,
    x:"Five days in and I came to your place. Meet-up number one.",
    tam:"First meet panna vedda ponathu" },

  { d:"2022-11-23", e:"\u{1F494}", t:"The first big fight", p:null,
    x:"One whole day without talking. Seven days into a four-year run. We survived it.",
    tam:"First biggest fight, one day kathaikkama viddan" },

  { d:"2022-12-11", e:"\u{1F91D}", t:"Meet-up number two", p:"p07", meet:2,
    x:"The first proper day out as a couple — white uniforms, a step to sit on, nowhere to be.",
    tam:"Second meet pannathu" },

  { d:"2023-03-15", e:"\u{1F31E}", t:"Meet-up number three", p:"p09", meet:3,
    x:"Three months of waiting for one afternoon, and worth every day of it.",
    tam:"Third meet" },

  { d:"2023-06-19", e:"\u{1F4C5}", t:"Meet-up number four", p:null, meet:4,
    x:"Nobody took a photograph. It still counted.",
    tam:"Fourth meet" },

  { d:"2023-06-22", e:"\u{1F3CD}️", t:"Meet-up number five", p:"p10", meet:5,
    x:"You in a helmet, me behind a mask. The last one we bothered to number — after this we just stopped counting.",
    tam:"Fith meet" },

  { d:"2023-09-16", e:"\u{1F33F}", t:"Green hills", p:"p12",
    x:"A red roof in the distance and no reason to be anywhere else." },

  { d:"2023-09-26", e:"\u{1F3E0}", t:"I spoke at your house", p:null,
    x:"Not a small thing. The day I actually talked, at your place.",
    tam:"Thamil vedda naan kathaichcha naal" },

  { d:"2023-10-07", e:"\u{1F3D9}️", t:"Kilinochchi town", p:null,
    x:"Met in town, with Sansi along for it.",
    tam:"Kilinochchi town la meet panninam with sansi" },

  { d:"2023-10-19", e:"\u{1F48D}", t:"The field, and the rings", p:"p15", k:"star",
    x:"We met out in the field and came back with a thin band each. Eleven months in.",
    tam:"Vayal la meet pannam" },

  { d:"2023-11-03", e:"\u{1F440}", t:"You came in uniform", p:null,
    x:"I caught sight of you at the koddai, still in uniform, and that was the whole day made.",
    tam:"Koddaila vachchu parthan — uniform ooda vanthu erunthaval \u{1F601}" },

  { d:"2023-11-14", e:"\u{1F381}", t:"One year since I said it", p:"p18",
    x:"A year to the day since 11:11 in the morning. Your hand, and the ring still new on it." },

  { d:"2023-11-16", e:"\u{1F38A}", t:"One year", p:null, k:"star",
    x:"Three hundred and sixty-five days. The first of four." },

  { d:"2024-04-06", e:"☕", t:"Two glasses and a sign", p:"p21",
    x:"Cold drinks at a table, then the park with the sign and the water behind it." },

  { d:"2024-05-26", e:"❤️", t:"The giant LOVE letters", p:"p24",
    x:"Red letters taller than both of us. We stood in front of them like it was completely normal." },

  { d:"2024-06-09", e:"\u{1F686}", t:"On the way somewhere", p:"p26",
    x:"A window seat and a long way still to go, and you doing that smile." },

  { d:"2024-07-05", e:"\u{1F388}", t:"Twenty-three", p:"p27",
    x:"My birthday, and you spent it taking me to water that ran all the way to the horizon. Eight days later it was yours. It is always eight days." },

  { d:"2024-11-16", e:"\u{1F49E}", t:"Two years", p:null, k:"star",
    x:"Seven hundred and thirty days. No longer new at this." },

  { d:"2025-01-19", e:"\u{1F917}", t:"Both arms", p:"p31",
    x:"The first photo of 2025 — your arms right round my neck, and nothing about us changed." },

  { d:"2025-03-31", e:"\u{1F457}", t:"The red dress", p:"p34",
    x:"You wore it and I genuinely forgot what I was about to say." },

  { d:"2025-06-12", e:"✨", t:"The saree", p:"p36",
    x:"Both of us dressed properly for once, standing far too formally for two people who are this soft." },

  { d:"2025-07-13", e:"\u{1F381}", t:"Twenty", p:"p37",
    x:"Your twentieth. The thirteenth of July, the whole day of it, and nowhere either of us had to be." },

  { d:"2025-08-24", e:"\u{1F964}", t:"That place with the shelves", p:"p40",
    x:"Cold drinks, two hours, and neither of us moved." },

  { d:"2025-11-16", e:"\u{1F37D}️", t:"Three years", p:"p43", k:"star",
    x:"A laid table, a bottle between us, and you across from me. We have made this a habit now." },

  { d:"2026-02-14", e:"\u{1F339}", t:"Valentine's", p:"p46",
    x:"Dressed up, standing in a yard, having someone take a second photo in case the first was blurry." },

  { d:"2026-06-24", e:"\u{1F60A}", t:"An ordinary day in June", p:"p49",
    x:"Nothing happened. That is exactly why it is on here." },

  { d:"2026-07-12", e:"\u{1F382}", t:"Twenty-one, a day early", p:"p54", k:"star",
    x:"Balloons, confetti all over the table, the sash, and you holding the knife — on the twelfth, a day before your actual birthday, because waiting for it was never going to happen." },

  { d:"2026-08-02", e:"\u{1F3D6}️", t:"The sea", p:"p59",
    x:"Sand, wind, salt in your hair. Then back under the roof to do nothing for an hour." },

  { d:"2026-10-12", e:"\u{1F3A8}", t:"The painted wall", p:"p61",
    x:"Cartoons behind us and the two of us grinning like we are about nine years old." },

  { d:"2026-10-26", e:"\u{1F3CD}️", t:"Four years since the first photo", p:"p63",
    x:"Exactly four years after that blue-lit evening. Same two people, helmets on, going somewhere." },

  { d:"2026-11-16", e:"\u{1F451}", t:"Four years", p:null, k:"star",
    x:"One thousand four hundred and sixty-one days of you. And we are only getting started." }
];

/* ============================================================
   SIXTEEN REASONS — four for every year.
   These are mine, not yours. Rewrite them in your own words.
   ============================================================ */
var REASONS = [
  { e:"\u{1F553}", t:"You answered a message at 10:44 at night from someone you barely knew." },
  { e:"\u{1F49B}", t:"You said yes in two days. You did not make me wait and wonder." },
  { e:"\u{1F494}", t:"We had our worst fight in week one and you still came back." },
  { e:"\u{1F392}", t:"You turned up in uniform and made an ordinary street the best place in the country." },
  { e:"\u{1F48D}", t:"You wore the ring the day we got them and have not taken it off since." },
  { e:"\u{1F603}", t:"You laugh at your own jokes before you finish them. Every time." },
  { e:"\u{1F3CD}️", t:"You get on the back of the bike without asking where we are going." },
  { e:"\u{1F35B}", t:"You feed me before you eat." },
  { e:"\u{1F4AA}", t:"Three months between meeting and you never once complained about it." },
  { e:"\u{1F4F8}", t:"You let me take the same photo four times until I am happy with it." },
  { e:"\u{1F3E0}", t:"You made your house a place I was allowed to speak in." },
  { e:"\u{1F31E}", t:"You can make a plastic chair under a tree feel like a holiday." },
  { e:"\u{1F440}", t:"You look at the camera and I look at you, in almost every single picture." },
  { e:"\u{1F91D}", t:"Four years and you still hold my hand like it is day eleven." },
  { e:"\u{1F3AF}", t:"You remember the times. 11:11. 8:37. 7:15. Not just the days." },
  { e:"♾️", t:"Every photograph on this site and I would still rather look at you." }
];

/* ============================================================
   OPEN-WHEN LETTERS
   ============================================================ */
var LETTERS = [
  { emo:"\u{1F622}", label:"Open when you miss me",
    text:"Then look at the dates. Twenty-first of November to the eleventh of December was twenty days apart, and the fifteenth of March after that was three whole months. We have been much further apart than we are right now, and we were fine. Scroll the timeline, pick a day, and remember that I am thinking about the exact same one." },
  { emo:"\u{1F621}", label:"Open when you are angry with me",
    text:"Twenty-third of November 2022. One day without talking, seven days into this. It felt like the end of the world and it is now one short line on a timeline four years long. Whatever this one is, it is going on the same line. Come and tell me what I did." },
  { emo:"\u{1F62D}", label:"Open when you have had a bad day",
    text:"You do not have to be fine. Not with me. Send the message, even the badly-typed one at 10:44 at night, and I will do what I have done since the first time: read it, answer it, and then not let you sit with it alone." },
  { emo:"\u{1F31F}", label:"Open when you are proud of yourself",
    text:"Good. Tell me straight away. I want all of it — the whole story, the bit you think is boring, the bit you want to repeat. Nobody gets to be as pleased about you as I am." },
  { emo:"\u{1F4A4}", label:"Open when you cannot sleep",
    text:"Then put it on the list: the field, the rings, the giant red letters, the sea on the second of August, the balloons on the twelfth of July. Go through them slowly. If you get to the end and you are still awake, call me — it is not the first time." },
  { emo:"\u{1F498}", label:"Open when you need to be sure",
    text:"Sixteenth of November 2022. You said yes and I have not once wished you hadn't. Four years, sixty-three photographs, five numbered meet-ups and a hundred we never bothered to count. I am sure. Be sure." }
];

/* ============================================================
   GIFT COUPONS
   ============================================================ */
var GIFTS = [
  { emo:"\u{1F371}", title:"One meal, your pick",
    hint:"You always let me choose",
    reveal:"Anywhere you want. You order first, you eat first, and I am not allowed an opinion." },
  { emo:"\u{1F3CD}️", title:"One long ride",
    hint:"Helmets, no destination",
    reveal:"We get on the bike and go. No plan. We stop wherever you say stop." },
  { emo:"\u{1F3DD}️", title:"One full day out",
    hint:"A whole day, phones down",
    reveal:"The sea, if you like — it worked on the second of August and it will work again." },
  { emo:"\u{1F4F8}", title:"Fifty photographs",
    hint:"Of you, properly taken",
    reveal:"Fifty. And no complaining halfway through that your hair is not right." },
  { emo:"\u{1F381}", title:"The thing you mentioned once",
    hint:"You think I was not listening",
    reveal:"You said it in passing and assumed it went nowhere. It did not. I remember." },
  { emo:"\u{1F49D}", title:"One of absolutely anything",
    hint:"No conditions on this one",
    reveal:"Say it out loud. No conditions, no expiry, no take-backs. Use it whenever you like." }
];

/* ============================================================
   SPIN WHEEL
   ============================================================ */
var WHEEL = [
  { e:"\u{1F917}", t:"A very long hug" },
  { e:"\u{1F36B}", t:"Something sweet, on me" },
  { e:"\u{1F3B5}", t:"I send you a song tonight" },
  { e:"\u{1F4DE}", t:"A call, right now" },
  { e:"\u{1F4AC}", t:"One honest compliment" },
  { e:"\u{1F3CD}️", t:"A ride this weekend" },
  { e:"\u{1F4F7}", t:"A photo of us, today" },
  { e:"\u{1F48B}", t:"Your choice. Anything." }
];

/* ============================================================
   MEMORY JAR
   The first six are the undated ones from your own list.
   ============================================================ */
var JAR = [
  { e:"\u{1F333}", t:"Park la meet pannathu — the day at the park.", real:1 },
  { e:"\u{1F4F1}", t:"Phone vaangi kudutha naal — the day I bought you the phone.", real:1 },
  { e:"\u{1F3C6}", t:"School prize giving — standing there watching you.", real:1 },
  { e:"\u{1F382}", t:"Kirushada's birthday — that whole day.", real:1 },
  { e:"\u{1F3E5}", t:"The hospital, with you. Not a good day, but we did it together.", real:1 },
  { e:"\u{1F440}", t:"Koddaila vachchu parthan — you turned up in uniform and I could not stop smiling.", real:1 },
  { e:"\u{1F553}", t:"10:44 PM, the twenty-third of October. The first message." },
  { e:"\u{1F31F}", t:"11:11 in the morning. Of all the times it could have been." },
  { e:"\u{1F48D}", t:"The field, the nineteenth of October, and two thin rings." },
  { e:"❤️", t:"Standing in front of letters taller than both of us." },
  { e:"\u{1F30A}", t:"The flats, the fifth of July, until the light went." },
  { e:"\u{1F3D6}️", t:"Salt in your hair on the second of August." },
  { e:"\u{1F382}", t:"Orange and white balloons, and you holding the knife a day before your birthday." },
  { e:"\u{1F388}", t:"Every July. Mine on the fifth, yours on the thirteenth, eight days apart, for the rest of it." },
  { e:"✨", t:"You in a saree and me forgetting how to stand normally." },
  { e:"\u{1F37D}️", t:"Three years, a laid table, and you across from me." },
  { e:"\u{1F3CD}️", t:"Two helmets and a road with green on both sides." }
];

/* ============================================================
   QUIZ — every answer is somewhere on this site.
   ============================================================ */
var QUIZ = [
  { q:"What time did we first chat?",
    o:["10:44 PM","11:11 AM","8:37 AM","7:15 PM"], a:0,
    why:"Twenty-third of October 2022, 10:44 at night. Before any of it." },
  { q:"What time did I tell you about my love?",
    o:["9:00 AM","11:11 AM","10:51 PM","12:00 PM"], a:1,
    why:"Eleven minutes past eleven on the fourteenth of November. Of all the times." },
  { q:"How many days between me asking and you saying yes?",
    o:["Same day","One day","Two days","A week"], a:2,
    why:"I asked on the 14th at 10:51 PM. You said yes on the 16th." },
  { q:"Which meet-up number was the eleventh of December 2022?",
    o:["Number one","Number two","Number three","Number five"], a:1,
    why:"Number one was the twenty-first of November. The eleventh of December was our second." },
  { q:"How long did our first big fight last?",
    o:["An hour","One day","Three days","A week"], a:1,
    why:"Twenty-third of November 2022 — one day without talking, and then we got over ourselves." },
  { q:"Where were we when we got the rings?",
    o:["At the beach","In town","In the field","At your house"], a:2,
    why:"Vayal la meet pannam — the nineteenth of October 2023, out in the field." },
  { q:"Which did you say first — typed or out loud?",
    o:["Typed","Out loud","Both the same day","Neither"], a:0,
    why:"Typed, 8:37 AM on the 18th. Out loud came the next evening at 7:15." },
  { q:"How many days apart are our birthdays?",
    o:["Three","Eight","Twelve","The same day"], a:1,
    why:"Mine on the fifth of July, yours on the thirteenth. Eight days, every year, for good." },
  { q:"Which day did we celebrate your twenty-first on?",
    o:["The thirteenth","The twelfth","The fourteenth","Both days"], a:1,
    why:"The twelfth of July 2026 — a day before your actual birthday, because waiting for it was never going to happen." },
  { q:"How many meet-ups did we actually number?",
    o:["Three","Five","Ten","We never stopped"], a:1,
    why:"Five. After the twenty-second of June 2023 we gave up counting and just went." }
];
