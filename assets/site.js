/* ============================================================
   CUE — site.js
   All i18n strings, theme, and language logic
   ============================================================ */

/* ------------------------------------------------------------
   1. Theme Initialization (runs before DOMContentLoaded)
   ------------------------------------------------------------ */
const root = document.documentElement;
const savedTheme = localStorage.getItem("cue-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");

/* ------------------------------------------------------------
   2. Language Initialization
   ------------------------------------------------------------ */
const savedLang = localStorage.getItem("cue-lang");
let activeLang = savedLang || (navigator.language.toLowerCase().startsWith("th") ? "th" : "en");

/* ------------------------------------------------------------
   3. i18n Strings
   ------------------------------------------------------------ */
const i18n = {
  en: {
    // nav
    navFeatures:    "Features",
    navDevices:     "Devices",
    navPrivacy:     "Privacy",
    navSupport:     "Support",
    navDocsPrivacy: "Privacy Policy",
    themeLabel:     "Toggle theme",
    langLabel:      "ภาษาไทย",

    // hero
    heroTitle:        "Cue",
    heroBody:         "The shopping list that surfaces itself. Walk into a store — Cue shows your list. Walk into another — it switches automatically. No tapping, no searching.",
    heroCta:          "Get Cue — Free",
    heroSecondary:    "See how it works",
    priceLine:        "Free · Works entirely within Apple ecosystem",
    proofOneValue:    "Automatic",
    proofOneLabel:    "list switching",
    proofTwoValue:    "Zero",
    proofTwoLabel:    "third-party servers",
    proofThreeValue:  "Works on",
    proofThreeLabel:  "iPhone, Watch & iPad",

    // features
    featuresTitle:      "Everything you need to shop smarter",
    featuresBody:       "Built around one idea — the right list should be waiting for you, not the other way around.",
    featureOneTitle:    "Automatic List Switching",
    featureOneBody:     "Walk into a store and Cue surfaces the right list instantly using geofencing. No manual switching ever.",
    featureTwoTitle:    "Buy Mode on Apple Watch",
    featureTwoBody:     "Glance at your wrist, tap to complete items. A horizontal switcher lets you jump to any list without pulling out your phone.",
    featureThreeTitle:  "Voice Capture",
    featureThreeBody:   "Dictate new items directly from your Apple Watch using Voice Capture. Hands are full? Just say it.",
    featureFourTitle:   "Home Screen Widgets",
    featureFourBody:    "Your active list lives on your Home Screen. One glance and you know exactly what to grab.",
    featureFiveTitle:   "Private iCloud Sync",
    featureFiveBody:    "Data syncs across iPhone and iPad through your private iCloud account. No accounts to create, no third-party servers.",
    featureSixTitle:    "Running Total",
    featureSixBody:     "Add estimated prices to items and Cue tallies them as you shop — so you know before you reach the checkout.",

    // devices
    devicesTitle: "On every device you use",
    devicesBody:  "Cue lives on iPhone, iPad, Apple Watch, and your Home Screen. The same smart list, always in reach.",

    // workflow
    workflowTitle:    "From store entrance to checkout",
    workflowBody:     "Cue's six-tier algorithm figures out where you are and picks the best list automatically.",
    stepOneTitle:     "Set up your lists",
    stepOneBody:      "Create a Context for each store or errand — Groceries, Costco, Pharmacy. Assign a location trigger and a colour.",
    stepTwoTitle:     "Add items anytime",
    stepTwoBody:      "Tap + to add what you need, wherever you are. Add notes, quantities, or estimated prices.",
    stepThreeTitle:   "Walk into the store",
    stepThreeBody:    "Cue detects your geofence and promotes the right list to the top — on your iPhone and Apple Watch.",
    stepFourTitle:    "Tap to complete",
    stepFourBody:     "Check off items as you shop. Cue keeps a running total. Done — leave the store and the list resets for next time.",

    // privacy
    privacyTitle:       "Your data never leaves Apple's ecosystem",
    privacyBody:        "No accounts. No tracking. No analytics. Cue is built on SwiftData and private CloudKit.",
    privacyOneTitle:    "Zero tracking",
    privacyOneBody:     "No advertising SDK. No analytics SDK. Cue's privacy manifest explicitly records zero collected data types.",
    privacyTwoTitle:    "Private iCloud only",
    privacyTwoBody:     "Sync uses your personal iCloud account via CloudKit. Cue has no servers of its own.",
    privacyThreeTitle:  "Local-first on Watch",
    privacyThreeBody:   "Your Apple Watch stores its own copy of your data locally — nothing leaves the Apple ecosystem.",
    privacyFourTitle:   "Your lists, your device",
    privacyFourBody:    "Items, locations, and preferences stay in SwiftData on your device. Delete any time with a single tap in Settings.",

    // final CTA
    finalTitle:   "Your list, ready when you walk in the door.",
    finalBody:    "Cue is free and works entirely within your Apple ecosystem. Available for iPhone, iPad, and Apple Watch.",
    finalCta:     "Download on the App Store",
    finalSupport: "Read support docs",

    // footer
    footerTagline: "Cue syncs your data privately through iCloud.",

    // support page
    supportTitle:        "Cue Support",
    supportLead:         "Cue is a context-aware shopping list for iPhone, iPad, and Apple Watch. If you have questions or run into an issue, reach out — we're happy to help.",
    supportUpdated:      "Last updated: August 2026",
    supportContactTitle: "Contact",
    supportContactBody:  "Email us or open a request via the App Store review page. We aim to respond within one business day.",
    supportFaqTitle:     "Common Help Topics",
    supportFaqOne:       "How does automatic list switching work? — Cue monitors geofences you set on each Context. When your device enters the region, that Context becomes active and Cue surfaces it on your iPhone and Apple Watch.",
    supportFaqTwo:       "Why does my list not switch automatically? — Make sure you've granted \"Always On\" location permission in Settings → Cue, and that you've set a location trigger on your Context. iOS limits apps to 20 monitored regions at a time; Cue rebalances them as you move.",
    supportFaqThree:     "How do I add items from my Apple Watch? — Open Cue on your Watch, tap the mic icon, and dictate your item using Voice Capture. Microphone and speech recognition permissions are required.",
    supportFaqFour:      "Can I use Cue without an iCloud account? — Yes. Cue works fully offline and on a single device. iCloud sync is optional and activates automatically when you're signed in with an Apple ID that has iCloud Drive enabled.",

    // privacy doc page
    privacyDocTitle:        "Cue Privacy Policy",
    privacyDocLead:         "Cue is built with privacy as a core value. The app collects no personal data, uses no tracking, and has no third-party analytics or advertising SDKs.",
    privacyDocUpdated:      "Last updated: August 2026",
    privacyCollectTitle:    "Information we handle",
    privacyCollectBody:     "Cue stores the lists, items, and location triggers you create. This data lives entirely on your device in SwiftData and, if you choose, in your private iCloud account via CloudKit. Cue does not transmit any of this data to its own servers.",
    privacyStorageTitle:    "Sync and storage",
    privacyStorageBody:     "iCloud sync uses Apple's CloudKit private database, linked to your personal Apple ID. Only you can access this data. Apple Watch sync uses WatchConnectivity — data stays within your device pair.",
    privacyNoAdsTitle:      "No advertising or analytics",
    privacyNoAdsBody:       "Cue contains no advertising SDK, no analytics SDK, and performs no user tracking. The app's PrivacyInfo.xcprivacy manifest records zero collected data types and zero tracking domains.",
    privacyLocationTitle:   "Location data",
    privacyLocationBody:    "Cue requests \"Always On\" location permission solely to monitor geofences you set. Location data is used on-device to determine which Context to surface. It is never uploaded, stored remotely, or shared.",
    privacyControlsTitle:   "Your controls",
    privacyControlsBody:    "You can revoke location or microphone permissions at any time in iOS Settings. You can erase all Cue data from Settings → Data Management → Erase All Data. Deleting the app removes all local data.",
    privacyContactTitle:    "Contact",
    privacyContactBody:     "Questions about privacy? Email us at the address listed on the App Store page.",
  },

  th: {
    // nav
    navFeatures:    "ฟีเจอร์",
    navDevices:     "อุปกรณ์",
    navPrivacy:     "ความเป็นส่วนตัว",
    navSupport:     "ความช่วยเหลือ",
    navDocsPrivacy: "นโยบายความเป็นส่วนตัว",
    themeLabel:     "สลับธีม",
    langLabel:      "English",

    // hero
    heroTitle:        "Cue",
    heroBody:         "รายการช้อปปิ้งที่แสดงตัวเองโดยอัตโนมัติ เดินเข้าร้าน — Cue แสดงรายการของคุณ เดินเข้าร้านอื่น — มันสลับให้อัตโนมัติ ไม่ต้องแตะ ไม่ต้องค้นหา",
    heroCta:          "รับ Cue — ฟรี",
    heroSecondary:    "ดูวิธีการทำงาน",
    priceLine:        "ฟรี · ทำงานภายใน Apple ecosystem ทั้งหมด",
    proofOneValue:    "อัตโนมัติ",
    proofOneLabel:    "การสลับรายการ",
    proofTwoValue:    "ศูนย์",
    proofTwoLabel:    "เซิร์ฟเวอร์บุคคลที่สาม",
    proofThreeValue:  "รองรับบน",
    proofThreeLabel:  "iPhone, Watch และ iPad",

    // features
    featuresTitle:      "ทุกสิ่งที่คุณต้องการเพื่อช้อปปิ้งอย่างชาญฉลาด",
    featuresBody:       "สร้างขึ้นรอบแนวคิดเดียว — รายการที่ถูกต้องควรรอคุณอยู่ ไม่ใช่ในทางกลับกัน",
    featureOneTitle:    "การสลับรายการอัตโนมัติ",
    featureOneBody:     "เดินเข้าร้านและ Cue แสดงรายการที่ถูกต้องทันทีโดยใช้ geofencing ไม่ต้องสลับด้วยตนเองอีกต่อไป",
    featureTwoTitle:    "Buy Mode บน Apple Watch",
    featureTwoBody:     "มองข้อมือของคุณ แตะเพื่อทำรายการให้เสร็จ ตัวสลับแนวนอนช่วยให้คุณข้ามไปยังรายการใดก็ได้โดยไม่ต้องหยิบโทรศัพท์",
    featureThreeTitle:  "Voice Capture",
    featureThreeBody:   "บอกรายการใหม่โดยตรงจาก Apple Watch ของคุณโดยใช้ Voice Capture มือเต็มอยู่? แค่พูดเลย",
    featureFourTitle:   "วิดเจ็ต Home Screen",
    featureFourBody:    "รายการที่ใช้งานอยู่แสดงบน Home Screen ของคุณ มองครั้งเดียวและคุณจะรู้ว่าต้องหยิบอะไร",
    featureFiveTitle:   "iCloud Sync ส่วนตัว",
    featureFiveBody:    "ข้อมูลซิงค์ระหว่าง iPhone และ iPad ผ่านบัญชี iCloud ส่วนตัวของคุณ ไม่ต้องสร้างบัญชี ไม่มีเซิร์ฟเวอร์บุคคลที่สาม",
    featureSixTitle:    "ยอดรวมแบบเรียลไทม์",
    featureSixBody:     "เพิ่มราคาโดยประมาณให้กับรายการและ Cue จะนับรวมขณะที่คุณช้อปปิ้ง — รู้ก่อนถึงแคชเชียร์",

    // devices
    devicesTitle: "บนทุกอุปกรณ์ที่คุณใช้",
    devicesBody:  "Cue อยู่บน iPhone, iPad, Apple Watch และ Home Screen ของคุณ รายการอัจฉริยะเดียวกัน พร้อมใช้งานเสมอ",

    // workflow
    workflowTitle:    "จากประตูร้านถึงแคชเชียร์",
    workflowBody:     "อัลกอริทึม 6 ระดับของ Cue ระบุตำแหน่งของคุณและเลือกรายการที่ดีที่สุดโดยอัตโนมัติ",
    stepOneTitle:     "ตั้งค่ารายการของคุณ",
    stepOneBody:      "สร้าง Context สำหรับแต่ละร้านหรืองาน — ของชำ, Costco, ร้านขายยา กำหนดทริกเกอร์ตำแหน่งและสี",
    stepTwoTitle:     "เพิ่มรายการได้ทุกเมื่อ",
    stepTwoBody:      "แตะ + เพื่อเพิ่มสิ่งที่คุณต้องการ ไม่ว่าจะอยู่ที่ไหน เพิ่มหมายเหตุ จำนวน หรือราคาโดยประมาณ",
    stepThreeTitle:   "เดินเข้าร้าน",
    stepThreeBody:    "Cue ตรวจจับ geofence ของคุณและโปรโมตรายการที่ถูกต้องขึ้นด้านบน — บน iPhone และ Apple Watch ของคุณ",
    stepFourTitle:    "แตะเพื่อทำเสร็จ",
    stepFourBody:     "ติ๊กรายการขณะช้อปปิ้ง Cue คงยอดรวม เสร็จแล้ว — ออกจากร้านและรายการจะรีเซ็ตสำหรับครั้งต่อไป",

    // privacy
    privacyTitle:       "ข้อมูลของคุณไม่เคยออกจาก Apple ecosystem",
    privacyBody:        "ไม่มีบัญชี ไม่มีการติดตาม ไม่มีการวิเคราะห์ Cue สร้างบน SwiftData และ CloudKit ส่วนตัว",
    privacyOneTitle:    "ไม่มีการติดตามเลย",
    privacyOneBody:     "ไม่มี SDK โฆษณา ไม่มี SDK วิเคราะห์ Privacy manifest ของ Cue บันทึกประเภทข้อมูลที่เก็บรวบรวมเป็นศูนย์",
    privacyTwoTitle:    "เฉพาะ iCloud ส่วนตัว",
    privacyTwoBody:     "การซิงค์ใช้บัญชี iCloud ส่วนตัวของคุณผ่าน CloudKit Cue ไม่มีเซิร์ฟเวอร์เป็นของตัวเอง",
    privacyThreeTitle:  "Local-first บน Watch",
    privacyThreeBody:   "Apple Watch ของคุณเก็บสำเนาข้อมูลของตัวเองในเครื่อง — ไม่มีอะไรออกจาก Apple ecosystem",
    privacyFourTitle:   "รายการของคุณ อุปกรณ์ของคุณ",
    privacyFourBody:    "รายการ ตำแหน่ง และการตั้งค่าจะอยู่ใน SwiftData บนอุปกรณ์ของคุณ ลบได้ทุกเมื่อด้วยการแตะเพียงครั้งเดียวใน Settings",

    // final CTA
    finalTitle:   "รายการของคุณ พร้อมตอนที่คุณเดินเข้าประตู",
    finalBody:    "Cue ฟรีและทำงานภายใน Apple ecosystem ทั้งหมด มีให้สำหรับ iPhone, iPad และ Apple Watch",
    finalCta:     "ดาวน์โหลดบน App Store",
    finalSupport: "อ่านเอกสารความช่วยเหลือ",

    // footer
    footerTagline: "Cue ซิงค์ข้อมูลของคุณอย่างเป็นส่วนตัวผ่าน iCloud",

    // support page
    supportTitle:        "ความช่วยเหลือ Cue",
    supportLead:         "Cue คือรายการช้อปปิ้งที่รู้บริบทสำหรับ iPhone, iPad และ Apple Watch หากคุณมีคำถามหรือพบปัญหา ติดต่อเรา — เรายินดีช่วยเหลือ",
    supportUpdated:      "อัปเดตล่าสุด: สิงหาคม 2569",
    supportContactTitle: "ติดต่อ",
    supportContactBody:  "ส่งอีเมลหาเรา หรือส่งคำขอผ่านหน้ารีวิวบน App Store เราตั้งเป้าตอบกลับภายในหนึ่งวันทำการ",
    supportFaqTitle:     "หัวข้อความช่วยเหลือทั่วไป",
    supportFaqOne:       "การสลับรายการอัตโนมัติทำงานอย่างไร? — Cue ตรวจสอบ geofence ที่คุณตั้งไว้ใน Context แต่ละอัน เมื่ออุปกรณ์ของคุณเข้าสู่พื้นที่นั้น Context จะถูกเปิดใช้งานและ Cue จะแสดงบน iPhone และ Apple Watch ของคุณ",
    supportFaqTwo:       "ทำไมรายการของฉันไม่สลับอัตโนมัติ? — ตรวจสอบให้แน่ใจว่าคุณได้ให้สิทธิ์ตำแหน่ง \"เปิดตลอดเวลา\" ใน Settings → Cue และคุณได้ตั้งค่าทริกเกอร์ตำแหน่งบน Context ของคุณ iOS จำกัดแอปให้ตรวจสอบ 20 พื้นที่พร้อมกัน Cue จะปรับสมดุลเมื่อคุณเคลื่อนที่",
    supportFaqThree:     "จะเพิ่มรายการจาก Apple Watch ได้อย่างไร? — เปิด Cue บน Watch ของคุณ แตะไอคอนไมโครโฟน และบอกรายการโดยใช้ Voice Capture ต้องมีสิทธิ์ไมโครโฟนและการรู้จำเสียงพูด",
    supportFaqFour:      "ฉันสามารถใช้ Cue โดยไม่มีบัญชี iCloud ได้ไหม? — ได้ Cue ทำงานออฟไลน์ได้อย่างสมบูรณ์บนอุปกรณ์เดียว การซิงค์ iCloud เป็นทางเลือกและจะเปิดใช้งานอัตโนมัติเมื่อคุณลงชื่อเข้าใช้ด้วย Apple ID ที่เปิดใช้งาน iCloud Drive",

    // privacy doc page
    privacyDocTitle:        "นโยบายความเป็นส่วนตัวของ Cue",
    privacyDocLead:         "Cue สร้างขึ้นโดยมีความเป็นส่วนตัวเป็นคุณค่าหลัก แอปไม่เก็บข้อมูลส่วนบุคคล ไม่ใช้การติดตาม และไม่มี SDK วิเคราะห์หรือโฆษณาจากบุคคลที่สาม",
    privacyDocUpdated:      "อัปเดตล่าสุด: สิงหาคม 2569",
    privacyCollectTitle:    "ข้อมูลที่เราจัดการ",
    privacyCollectBody:     "Cue เก็บรายการ รายการสินค้า และทริกเกอร์ตำแหน่งที่คุณสร้าง ข้อมูลนี้อยู่ในอุปกรณ์ของคุณใน SwiftData และหากคุณเลือก ในบัญชี iCloud ส่วนตัวของคุณผ่าน CloudKit Cue ไม่ส่งข้อมูลใดๆ ไปยังเซิร์ฟเวอร์ของตัวเอง",
    privacyStorageTitle:    "การซิงค์และจัดเก็บ",
    privacyStorageBody:     "การซิงค์ iCloud ใช้ฐานข้อมูลส่วนตัวของ CloudKit จาก Apple เชื่อมโยงกับ Apple ID ส่วนตัวของคุณ มีเพียงคุณเท่านั้นที่เข้าถึงข้อมูลนี้ได้ การซิงค์ Apple Watch ใช้ WatchConnectivity — ข้อมูลอยู่ในคู่อุปกรณ์ของคุณ",
    privacyNoAdsTitle:      "ไม่มีโฆษณาหรือการวิเคราะห์",
    privacyNoAdsBody:       "Cue ไม่มี SDK โฆษณา ไม่มี SDK วิเคราะห์ และไม่ติดตามผู้ใช้ ไฟล์ PrivacyInfo.xcprivacy ของแอปบันทึกประเภทข้อมูลที่เก็บรวบรวมเป็นศูนย์และโดเมนการติดตามเป็นศูนย์",
    privacyLocationTitle:   "ข้อมูลตำแหน่ง",
    privacyLocationBody:    "Cue ขอสิทธิ์ตำแหน่ง \"เปิดตลอดเวลา\" เพื่อตรวจสอบ geofence ที่คุณตั้งไว้เท่านั้น ข้อมูลตำแหน่งใช้บนอุปกรณ์เพื่อกำหนด Context ที่จะแสดง ไม่มีการอัปโหลด จัดเก็บจากระยะไกล หรือแชร์",
    privacyControlsTitle:   "การควบคุมของคุณ",
    privacyControlsBody:    "คุณสามารถเพิกถอนสิทธิ์ตำแหน่งหรือไมโครโฟนได้ตลอดเวลาใน iOS Settings คุณสามารถลบข้อมูล Cue ทั้งหมดจาก Settings → Data Management → Erase All Data การลบแอปจะลบข้อมูลในเครื่องทั้งหมด",
    privacyContactTitle:    "ติดต่อ",
    privacyContactBody:     "มีคำถามเกี่ยวกับความเป็นส่วนตัว? ส่งอีเมลหาเราที่ที่อยู่ที่ระบุในหน้า App Store",
  }
};

/* ------------------------------------------------------------
   4. SVG Icons
   ------------------------------------------------------------ */
function icon(name) {
  if (name === "moon") {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
  if (name === "sun") {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  }
  return "";
}

/* ------------------------------------------------------------
   5. applyLang
   ------------------------------------------------------------ */
function applyLang(lang) {
  activeLang = lang;
  localStorage.setItem("cue-lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      node.textContent = i18n[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.dataset.i18nAria;
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      node.setAttribute("aria-label", i18n[lang][key]);
    }
  });

  document.querySelectorAll("img[data-img-en][data-img-th]").forEach((img) => {
    const next = img.dataset[lang === "th" ? "imgTh" : "imgEn"];
    if (next && img.getAttribute("src") !== next) {
      img.setAttribute("src", next);
    }
  });
}

/* ------------------------------------------------------------
   6. applyThemeIcon
   ------------------------------------------------------------ */
function applyThemeIcon() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;
  button.innerHTML = root.dataset.theme === "dark" ? icon("sun") : icon("moon");
}

/* ------------------------------------------------------------
   7. Event Wiring
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  applyLang(activeLang);
  applyThemeIcon();

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => applyLang(activeLang === "en" ? "th" : "en"));
  });

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("cue-theme", root.dataset.theme);
      applyThemeIcon();
    });
  });
});
