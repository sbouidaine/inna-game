const TOTAL_TIME = 90;
const INITIAL_LIVES = 3;
const GENERATED_CHALLENGE_COUNT = 320;
const USER_SEED_KEY = "innaSistersUserSeedV1";

const TOOL_POOL = ["إن", "أن", "كأن", "لكن", "ليت", "لعل"];

const TOOL_EXPLAIN = {
    "إن": "إن تفيد التوكيد.",
    "أن": "أن تأتي غالبًا بعد أفعال مثل أحب ويسرني.",
    "كأن": "كأن تفيد التشبيه.",
    "لكن": "لكن تفيد الاستدراك بعد معنى سابق.",
    "ليت": "ليت للتمني.",
    "لعل": "لعل للرجاء أو التوقع."
};

const MISSION_BANK = [
    { title: "بيان الإدارة", text: "اختر الأداة الأدق لتعديل البيان الرسمي." },
    { title: "إذاعة الصباح", text: "صحح العبارة قبل البث المباشر." },
    { title: "نشرة الصف", text: "املأ الفراغ بالأداة المناسبة للمعنى." },
    { title: "مسابقة النحو", text: "أجب بدقة لتحافظ على تقدم فريقك." },
    { title: "مخبر اللغة", text: "حلل الجملة واحصل على النقاط الكاملة." },
    { title: "لوحة الإعلانات", text: "صحح الجملة قبل تعليقها في المدرسة." },
    { title: "تقرير المعلم", text: "اختر الأداة الصحيحة في التقرير النهائي." },
    { title: "مكتب النشاط", text: "أنقذ نص النشاط من الأخطاء النحوية." },
    { title: "قسم المتابعة", text: "حدد الأداة الصحيحة بسرعة قبل انتهاء الوقت." },
    { title: "مجلة المدرسة", text: "نسخة المجلة تحتاج مراجعة نحوية دقيقة." },
    { title: "قناة المدرسة", text: "صحح جملة المذيع قبل البث على القناة." },
    { title: "ملف الواجب", text: "حل التحدي لتفتح السؤال التالي." }
];

const STATEMENT_BANK = [
    { acc: "الطالبَ", bare: "الطالب", khabarNom: "مجتهدٌ", khabarBare: "مجتهد" },
    { acc: "الطالبةَ", bare: "الطالبة", khabarNom: "قدوةٌ في الانضباط", khabarBare: "قدوة" },
    { acc: "الفريقَ", bare: "الفريق", khabarNom: "نموذجٌ في التعاون", khabarBare: "نموذج" },
    { acc: "الصفَّ", bare: "الصف", khabarNom: "مساحةُ تعلمٍ", khabarBare: "مساحة" },
    { acc: "المعلمَ", bare: "المعلم", khabarNom: "قدوةٌ في العطاء", khabarBare: "قدوة" },
    { acc: "المعلمةَ", bare: "المعلمة", khabarNom: "مصدرُ إلهامٍ", khabarBare: "مصدر" },
    { acc: "المختبرَ", bare: "المختبر", khabarNom: "بيئةُ اكتشافٍ", khabarBare: "بيئة" },
    { acc: "المكتبةَ", bare: "المكتبة", khabarNom: "ركنُ معرفةٍ", khabarBare: "ركن" },
    { acc: "الإذاعةَ المدرسيةَ", bare: "الإذاعة المدرسية", khabarNom: "منبرُ توعيةٍ", khabarBare: "منبر" },
    { acc: "القاعةَ", bare: "القاعة", khabarNom: "مكانٌ مناسبٌ للتعلم", khabarBare: "مكان" },
    { acc: "المشروعَ", bare: "المشروع", khabarNom: "خطوةٌ مهمةٌ للابتكار", khabarBare: "خطوة" },
    { acc: "العرضَ", bare: "العرض", khabarNom: "عملٌ منظمٌ", khabarBare: "عمل" },
    { acc: "البرنامجَ", bare: "البرنامج", khabarNom: "خطةٌ واضحةٌ", khabarBare: "خطة" },
    { acc: "التمرينَ", bare: "التمرين", khabarNom: "مفتاحُ الإتقان", khabarBare: "مفتاح" },
    { acc: "النشاطَ", bare: "النشاط", khabarNom: "وسيلةٌ لتنمية المهارات", khabarBare: "وسيلة" },
    { acc: "الدرسَ", bare: "الدرس", khabarNom: "أساسُ الفهم", khabarBare: "أساس" },
    { acc: "التقريرَ", bare: "التقرير", khabarNom: "وثيقةٌ دقيقةٌ", khabarBare: "وثيقة" },
    { acc: "الشرحَ", bare: "الشرح", khabarNom: "طريقٌ للفهم", khabarBare: "طريق" },
    { acc: "المسابقةَ", bare: "المسابقة", khabarNom: "فرصةٌ للتطور", khabarBare: "فرصة" },
    { acc: "الإنجازَ", bare: "الإنجاز", khabarNom: "ثمرةُ اجتهادٍ", khabarBare: "ثمرة" },
    { acc: "المدرسةَ", bare: "المدرسة", khabarNom: "بيئةٌ آمنةٌ للتعلم", khabarBare: "بيئة" }
];

const WISH_BANK = [
    { acc: "الحصةَ", bare: "الحصة", khabarNom: "أطولُ قليلًا", khabarBare: "أطول" },
    { acc: "الشرحَ", bare: "الشرح", khabarNom: "أوضحُ للجميع", khabarBare: "أوضح" },
    { acc: "الواجبَ", bare: "الواجب", khabarNom: "أخفُّ هذا الأسبوع", khabarBare: "أخف" },
    { acc: "وقتَ المراجعةِ", bare: "وقت المراجعة", khabarNom: "أوسعُ", khabarBare: "أوسع" },
    { acc: "المختبرَ", bare: "المختبر", khabarNom: "متاحٌ بعد الدوام", khabarBare: "متاح" },
    { acc: "المكتبةَ", bare: "المكتبة", khabarNom: "مفتوحةٌ حتى العصر", khabarBare: "مفتوحة" },
    { acc: "الصفَّ", bare: "الصف", khabarNom: "أهدأُ أثناء الشرح", khabarBare: "أهدأ" },
    { acc: "البرنامجَ", bare: "البرنامج", khabarNom: "أبسطُ للطلاب الجدد", khabarBare: "أبسط" },
    { acc: "النشاطَ", bare: "النشاط", khabarNom: "أكثرُ تفاعلًا", khabarBare: "أكثر" },
    { acc: "المسابقةَ", bare: "المسابقة", khabarNom: "أقربُ إلى واقع المنهج", khabarBare: "أقرب" },
    { acc: "نتائجَ الاختبارِ", bare: "نتائج الاختبار", khabarNom: "أفضلُ هذا الفصل", khabarBare: "أفضل" },
    { acc: "القاعةَ", bare: "القاعة", khabarNom: "أوسعُ للأنشطة", khabarBare: "أوسع" },
    { acc: "جدولَ الاختباراتِ", bare: "جدول الاختبارات", khabarNom: "أكثرُ توازنًا", khabarBare: "أكثر" },
    { acc: "المقاعدَ", bare: "المقاعد", khabarNom: "أريحُ للطلاب", khabarBare: "أريح" },
    { acc: "الرحلةَ العلميةَ", bare: "الرحلة العلمية", khabarNom: "أقربُ موعدًا", khabarBare: "أقرب" },
    { acc: "الأنشطةَ الفنيةَ", bare: "الأنشطة الفنية", khabarNom: "أكثرُ حضورًا", khabarBare: "أكثر" },
    { acc: "جلسةَ النقاشِ", bare: "جلسة النقاش", khabarNom: "أطولُ", khabarBare: "أطول" },
    { acc: "الخطةَ الدراسيةَ", bare: "الخطة الدراسية", khabarNom: "أوضحُ للطلاب", khabarBare: "أوضح" }
];

const HOPE_BANK = [
    { acc: "الفريقَ", bare: "الفريق", khabarNom: "جاهزٌ للمسابقة", khabarBare: "جاهز" },
    { acc: "الطلابَ", bare: "الطلاب", khabarNom: "ملتزمون بالخطة", khabarBare: "ملتزمون" },
    { acc: "النتائجَ", bare: "النتائج", khabarNom: "مرضيةٌ", khabarBare: "مرضية" },
    { acc: "المشروعَ", bare: "المشروع", khabarNom: "مكتملٌ", khabarBare: "مكتمل" },
    { acc: "الطقسَ", bare: "الطقس", khabarNom: "مناسبٌ للرحلة", khabarBare: "مناسب" },
    { acc: "الشرحَ", bare: "الشرح", khabarNom: "مفيدٌ للجميع", khabarBare: "مفيد" },
    { acc: "القاعةَ", bare: "القاعة", khabarNom: "مهيأةٌ للعرض", khabarBare: "مهيأة" },
    { acc: "الإذاعةَ المدرسيةَ", bare: "الإذاعة المدرسية", khabarNom: "مؤثرةٌ في الطلاب", khabarBare: "مؤثرة" },
    { acc: "المختبرَ", bare: "المختبر", khabarNom: "آمنٌ للتجارب", khabarBare: "آمن" },
    { acc: "الواجبَ", bare: "الواجب", khabarNom: "واضحٌ في التعليمات", khabarBare: "واضح" },
    { acc: "التقريرَ", bare: "التقرير", khabarNom: "جاهزٌ للتسليم", khabarBare: "جاهز" },
    { acc: "الطلابَ الجددَ", bare: "الطلاب الجدد", khabarNom: "مندمجون بسرعة", khabarBare: "مندمجون" },
    { acc: "المعرضَ", bare: "المعرض", khabarNom: "منظمٌ", khabarBare: "منظم" },
    { acc: "الخطةَ", bare: "الخطة", khabarNom: "قابلةٌ للتنفيذ", khabarBare: "قابلة" },
    { acc: "البرنامجَ", bare: "البرنامج", khabarNom: "ملائمٌ لقدرات الطلاب", khabarBare: "ملائم" },
    { acc: "الفصلَ", bare: "الفصل", khabarNom: "هادئٌ أثناء الشرح", khabarBare: "هادئ" },
    { acc: "الأنشطةَ", bare: "الأنشطة", khabarNom: "متنوعةٌ", khabarBare: "متنوعة" },
    { acc: "الحافلةَ", bare: "الحافلة", khabarNom: "ملتزمةٌ بالموعد", khabarBare: "ملتزمة" }
];

const SIMILE_SCENES = [
    { acc: "الطالبَ", bare: "الطالب", simileNom: "نجمٌ في الاجتهاد", simileBare: "نجم" },
    { acc: "الطالبةَ", bare: "الطالبة", simileNom: "شعلةُ نشاطٍ", simileBare: "شعلة" },
    { acc: "الفريقَ", bare: "الفريق", simileNom: "خليةُ نحلٍ", simileBare: "خلية" },
    { acc: "المعلمَ", bare: "المعلم", simileNom: "قائدٌ حكيمٌ", simileBare: "قائد" },
    { acc: "المعلمةَ", bare: "المعلمة", simileNom: "بوصلةُ نجاحٍ", simileBare: "بوصلة" },
    { acc: "المختبرَ", bare: "المختبر", simileNom: "ورشةُ ابتكارٍ", simileBare: "ورشة" },
    { acc: "المكتبةَ", bare: "المكتبة", simileNom: "كنزٌ معرفيٌ", simileBare: "كنز" },
    { acc: "الإذاعةَ المدرسيةَ", bare: "الإذاعة المدرسية", simileNom: "صوتُ المدرسة", simileBare: "صوت" },
    { acc: "القاعةَ", bare: "القاعة", simileNom: "خليةُ تعلمٍ", simileBare: "خلية" },
    { acc: "البرنامجَ", bare: "البرنامج", simileNom: "خريطةُ طريقٍ", simileBare: "خريطة" },
    { acc: "المشروعَ", bare: "المشروع", simileNom: "جسرٌ للمستقبل", simileBare: "جسر" },
    { acc: "العرضَ", bare: "العرض", simileNom: "لوحةٌ فنيةٌ", simileBare: "لوحة" },
    { acc: "النشاطَ", bare: "النشاط", simileNom: "محركُ حماسٍ", simileBare: "محرك" },
    { acc: "الدرسَ", bare: "الدرس", simileNom: "مفتاحُ فهمٍ", simileBare: "مفتاح" },
    { acc: "المسابقةَ", bare: "المسابقة", simileNom: "ميدانُ تميزٍ", simileBare: "ميدان" }
];

const CERTAINTY_TAILS = ["حقًا", "بلا شك", "فعلًا", "بصورة واضحة", "في هذا الفصل"];
const WISH_TAILS = ["في هذا الفصل", "خلال الفترة القادمة", "قبل الاختبارات", "عند بداية الفصل القادم", "بشكل مستمر"];
const HOPE_TAILS = ["هذا الأسبوع", "قريبًا", "في الفترة القادمة", "خلال هذا الفصل", "في الأيام المقبلة"];
const CONTRAST_PREFIXES = [
    "المهمة صعبة،",
    "الوقت محدود،",
    "الطريق ليس سهلًا،",
    "التحدي كبير،",
    "المنهج كثيف،",
    "الاستعداد يحتاج جهدًا،"
];
const AN_STARTERS = [
    "يسرني",
    "يسعدنا",
    "من الرائع",
    "من الجميل",
    "من المهم",
    "لاحظت",
    "أؤكد",
    "يسر المعلم"
];
const SIMILE_TAILS = [
    "وقت الحصة",
    "أثناء النشاط",
    "في يوم العرض",
    "عند العمل الجماعي",
    "في أجواء المسابقة"
];

function hashString(value) {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i += 1) {
        hash ^= value.charCodeAt(i);
        hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    }
    return hash >>> 0;
}

function mulberry32(seed) {
    let t = seed >>> 0;
    return function random() {
        t += 0x6D2B79F5;
        let n = Math.imul(t ^ (t >>> 15), 1 | t);
        n ^= n + Math.imul(n ^ (n >>> 7), 61 | n);
        return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
    };
}

function createSeededRng(seedText) {
    return mulberry32(hashString(seedText));
}

function getOrCreateUserSeed() {
    try {
        const fromStorage = window.localStorage.getItem(USER_SEED_KEY);
        if (fromStorage) {
            return fromStorage;
        }

        const randomPart = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
        window.localStorage.setItem(USER_SEED_KEY, randomPart);
        return randomPart;
    } catch (error) {
        return `${Date.now().toString(36)}-fallback-seed`;
    }
}

const USER_SEED = getOrCreateUserSeed();
const userRng = createSeededRng(USER_SEED);

function pickRandom(items, rng) {
    return items[Math.floor(rng() * items.length)];
}

function shuffle(array, rng = Math.random) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(rng() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function uniqueOptions(correct, distractors, rng) {
    const uniqueDistractors = [];
    shuffle(distractors, rng).forEach((item) => {
        if (item !== correct && !uniqueDistractors.includes(item) && uniqueDistractors.length < 3) {
            uniqueDistractors.push(item);
        }
    });

    return shuffle([correct, ...uniqueDistractors], rng);
}

function buildToolOptions(correctTool, rng) {
    const others = TOOL_POOL.filter((tool) => tool !== correctTool);
    return shuffle([correctTool, ...shuffle(others, rng).slice(0, 3)], rng);
}

function buildSentence(tool, rng) {
    let prompt;
    let parseKhabar;
    let subject;

    if (tool === "إن") {
        const statement = pickRandom(STATEMENT_BANK, rng);
        const tail = pickRandom(CERTAINTY_TAILS, rng);
        prompt = `____ ${statement.acc} ${statement.khabarNom} ${tail}.`;
        parseKhabar = { nom: statement.khabarNom, bare: statement.khabarBare };
        subject = { acc: statement.acc, bare: statement.bare };
    } else if (tool === "أن") {
        const statement = pickRandom(STATEMENT_BANK, rng);
        const starter = pickRandom(AN_STARTERS, rng);
        prompt = `${starter} ____ ${statement.acc} ${statement.khabarNom}.`;
        parseKhabar = { nom: statement.khabarNom, bare: statement.khabarBare };
        subject = { acc: statement.acc, bare: statement.bare };
    } else if (tool === "كأن") {
        const simile = pickRandom(SIMILE_SCENES, rng);
        const tail = pickRandom(SIMILE_TAILS, rng);
        prompt = `____ ${simile.acc} ${simile.simileNom} ${tail}.`;
        parseKhabar = { nom: simile.simileNom, bare: simile.simileBare };
        subject = { acc: simile.acc, bare: simile.bare };
    } else if (tool === "لكن") {
        const statement = pickRandom(STATEMENT_BANK, rng);
        const prefix = pickRandom(CONTRAST_PREFIXES, rng);
        prompt = `${prefix} ____ ${statement.acc} ${statement.khabarNom}.`;
        parseKhabar = { nom: statement.khabarNom, bare: statement.khabarBare };
        subject = { acc: statement.acc, bare: statement.bare };
    } else if (tool === "ليت") {
        const statement = pickRandom(WISH_BANK, rng);
        const tail = pickRandom(WISH_TAILS, rng);
        prompt = `____ ${statement.acc} ${statement.khabarNom} ${tail}.`;
        parseKhabar = { nom: statement.khabarNom, bare: statement.khabarBare };
        subject = { acc: statement.acc, bare: statement.bare };
    } else {
        const statement = pickRandom(HOPE_BANK, rng);
        const tail = pickRandom(HOPE_TAILS, rng);
        prompt = `____ ${statement.acc} ${statement.khabarNom} ${tail}.`;
        parseKhabar = { nom: statement.khabarNom, bare: statement.khabarBare };
        subject = { acc: statement.acc, bare: statement.bare };
    }

    return {
        prompt,
        parseKhabar,
        subject
    };
}

function buildParseQuestion(tool, sentenceWithBlank, name, khabar, rng) {
    const solvedSentence = sentenceWithBlank.replace("____", tool);
    const askName = rng() < 0.5;

    if (askName) {
        const correct = `اسم ${tool} منصوب`;
        return {
            prompt: `في الجملة: ${solvedSentence} ما إعراب ${name.bare}؟`,
            correct,
            options: uniqueOptions(correct, [
                `خبر ${tool} مرفوع`,
                "مبتدأ مرفوع",
                "فاعل مرفوع",
                "مفعول به منصوب",
                "اسم كان مرفوع",
                "نعت مرفوع"
            ], rng),
            explain: `القاعدة: اسم ${tool} يكون منصوبًا.`
        };
    }

    const correct = `خبر ${tool} مرفوع`;
    return {
        prompt: `في الجملة: ${solvedSentence} ما إعراب ${khabar.bare}؟`,
        correct,
        options: uniqueOptions(correct, [
            `اسم ${tool} منصوب`,
            "مفعول به منصوب",
            "حال منصوب",
            "خبر كان منصوب",
            "تمييز منصوب",
            "بدل مجرور"
        ], rng),
        explain: `القاعدة: خبر ${tool} يكون مرفوعًا.`
    };
}

function buildSingleChallenge(tool, rng, seen, maxAttempts = 120) {
    let attempts = 0;

    while (attempts < maxAttempts) {
        attempts += 1;
        const mission = pickRandom(MISSION_BANK, rng);
        const sentence = buildSentence(tool, rng);

        const toolQuestion = {
            prompt: sentence.prompt,
            correct: tool,
            options: buildToolOptions(tool, rng),
            explain: TOOL_EXPLAIN[tool]
        };

        const parseQuestion = buildParseQuestion(tool, sentence.prompt, sentence.subject, sentence.parseKhabar, rng);
        const key = `${toolQuestion.prompt}|${parseQuestion.prompt}`;

        if (seen.has(key)) {
            continue;
        }

        seen.add(key);
        return {
            missionTitle: mission.title,
            missionText: mission.text,
            toolQuestion,
            parseQuestion
        };
    }

    return null;
}

function generateChallengePool(count, rng) {
    const pool = [];
    const seen = new Set();

    const basePerTool = Math.floor(count / TOOL_POOL.length);
    const remainder = count % TOOL_POOL.length;
    const remainderOrder = shuffle([...TOOL_POOL], rng);
    const quotas = TOOL_POOL.map((tool) => ({
        tool,
        quota: basePerTool + (remainderOrder.slice(0, remainder).includes(tool) ? 1 : 0)
    }));

    quotas.forEach(({ tool, quota }) => {
        for (let i = 0; i < quota; i += 1) {
            const challenge = buildSingleChallenge(tool, rng, seen);
            if (challenge) {
                pool.push(challenge);
            }
        }
    });

    let safetyAttempts = 0;
    while (pool.length < count && safetyAttempts < count * 40) {
        safetyAttempts += 1;
        const tool = pickRandom(TOOL_POOL, rng);
        const challenge = buildSingleChallenge(tool, rng, seen, 30);
        if (challenge) {
            pool.push(challenge);
        }
    }

    return shuffle(pool, rng);
}

const CHALLENGES = generateChallengePool(GENERATED_CHALLENGE_COUNT, userRng);

const rankTable = [
    { min: 0, rank: "متدرّب نحوي", note: "بداية جميلة، ركّز على معنى كل أداة." },
    { min: 400, rank: "محرر المدرسة", note: "إجاباتك دقيقة. واصل بناء السلسلة." },
    { min: 700, rank: "خبير الإعراب", note: "أداء قوي! أنت قريب من القمة." },
    { min: 1000, rank: "أسطورة إن وأخواتها", note: "مذهل! لا خطأ يمر أمامك." }
];

const state = {
    score: 0,
    streak: 0,
    timeLeft: TOTAL_TIME,
    lives: INITIAL_LIVES,
    currentChallenge: null,
    challengeOrder: [],
    challengeCursor: 0,
    stage: "tool",
    active: false,
    timerId: null
};

const el = {
    hero: document.getElementById("hero"),
    game: document.getElementById("game"),
    resultPanel: document.getElementById("resultPanel"),
    startBtn: document.getElementById("startBtn"),
    restartBtn: document.getElementById("restartBtn"),
    howBtn: document.getElementById("howBtn"),
    howPanel: document.getElementById("howPanel"),
    scoreValue: document.getElementById("scoreValue"),
    streakValue: document.getElementById("streakValue"),
    timeValue: document.getElementById("timeValue"),
    livesValue: document.getElementById("livesValue"),
    missionTitle: document.getElementById("missionTitle"),
    missionText: document.getElementById("missionText"),
    questionType: document.getElementById("questionType"),
    questionText: document.getElementById("questionText"),
    optionsArea: document.getElementById("optionsArea"),
    feedback: document.getElementById("feedback"),
    finalRank: document.getElementById("finalRank"),
    finalScore: document.getElementById("finalScore"),
    finalNote: document.getElementById("finalNote")
};

function buildDiverseChallengeOrder(rng) {
    const buckets = {};

    TOOL_POOL.forEach((tool) => {
        buckets[tool] = [];
    });

    CHALLENGES.forEach((challenge, index) => {
        const tool = challenge.toolQuestion.correct;
        if (!buckets[tool]) {
            buckets[tool] = [];
        }
        buckets[tool].push(index);
    });

    TOOL_POOL.forEach((tool) => {
        buckets[tool] = shuffle(buckets[tool], rng);
    });

    const toolOrder = shuffle([...TOOL_POOL], rng);
    const order = [];
    let hasRemaining = true;

    while (hasRemaining) {
        hasRemaining = false;
        toolOrder.forEach((tool) => {
            const bucket = buckets[tool];
            if (bucket && bucket.length > 0) {
                order.push(bucket.pop());
                hasRemaining = true;
            }
        });
    }

    return order;
}

function resetChallengeOrder() {
    state.challengeOrder = buildDiverseChallengeOrder(userRng);
    state.challengeCursor = 0;
}

function nextChallenge() {
    if (state.challengeOrder.length === 0 || state.challengeCursor >= state.challengeOrder.length) {
        resetChallengeOrder();
    }

    const challengeIndex = state.challengeOrder[state.challengeCursor];
    state.challengeCursor += 1;
    state.currentChallenge = CHALLENGES[challengeIndex];
    state.stage = "tool";
    el.missionTitle.textContent = state.currentChallenge.missionTitle;
    el.missionText.textContent = state.currentChallenge.missionText;
    renderQuestion();
}

function renderQuestion() {
    if (!state.currentChallenge) {
        return;
    }

    el.feedback.textContent = "";
    el.feedback.className = "feedback";

    const question = state.stage === "tool"
        ? state.currentChallenge.toolQuestion
        : state.currentChallenge.parseQuestion;

    el.questionType.textContent = state.stage === "tool" ? "سؤال 1: اختيار الأداة" : "سؤال 2: تحديد الإعراب";
    el.questionText.textContent = question.prompt;
    el.optionsArea.innerHTML = "";

    const options = shuffle(question.options, userRng);
    options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.style.animationDelay = `${index * 70}ms`;
        btn.textContent = option;
        btn.type = "button";
        btn.addEventListener("click", () => onAnswer(option, question, btn));
        el.optionsArea.appendChild(btn);
    });
}

function onAnswer(selected, question, clickedBtn) {
    if (!state.active) {
        return;
    }

    const buttons = el.optionsArea.querySelectorAll("button");
    buttons.forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === question.correct) {
            btn.classList.add("correct");
        }
    });

    const isCorrect = selected === question.correct;

    if (isCorrect) {
        state.streak += 1;
        const points = 90 + state.streak * 12;
        state.score += points;
        clickedBtn.classList.add("correct");
        el.feedback.textContent = `إجابة صحيحة! +${points} نقطة. ${question.explain}`;
        el.feedback.classList.add("good");
    } else {
        state.streak = 0;
        state.lives -= 1;
        clickedBtn.classList.add("wrong");
        el.feedback.textContent = `إجابة غير صحيحة. ${question.explain}`;
        el.feedback.classList.add("bad");
    }

    updateHUD();

    if (state.lives <= 0) {
        window.setTimeout(endGame, 650);
        return;
    }

    if (state.stage === "tool") {
        state.stage = "parse";
        window.setTimeout(renderQuestion, 700);
    } else {
        window.setTimeout(nextChallenge, 700);
    }
}

function updateHUD() {
    el.scoreValue.textContent = String(state.score);
    el.streakValue.textContent = String(state.streak);
    el.timeValue.textContent = String(state.timeLeft);
    el.livesValue.textContent = "❤".repeat(Math.max(state.lives, 0));
}

function getRank(score) {
    let chosen = rankTable[0];
    rankTable.forEach((entry) => {
        if (score >= entry.min) {
            chosen = entry;
        }
    });
    return chosen;
}

function launchConfetti() {
    const pieces = Math.min(34, Math.floor(state.score / 40));
    const colors = ["#ef6a3b", "#2e8b77", "#f2b134", "#0f766e", "#e65a37"];

    for (let i = 0; i < pieces; i += 1) {
        const piece = document.createElement("span");
        piece.className = "confetti";
        piece.style.left = `${userRng() * 100}vw`;
        piece.style.backgroundColor = colors[Math.floor(userRng() * colors.length)];
        piece.style.animationDuration = `${2 + userRng() * 1.8}s`;
        piece.style.opacity = String(0.8 + userRng() * 0.2);
        piece.style.transform = `translateY(0) rotate(${userRng() * 200}deg)`;
        document.body.appendChild(piece);
        window.setTimeout(() => piece.remove(), 4200);
    }
}

function endGame() {
    if (!state.active) {
        return;
    }

    state.active = false;
    window.clearInterval(state.timerId);
    state.timerId = null;

    const result = getRank(state.score);
    el.game.hidden = true;
    el.resultPanel.hidden = false;

    el.finalRank.textContent = `رتبتك: ${result.rank}`;
    el.finalScore.textContent = `نتيجتك النهائية: ${state.score}`;
    el.finalNote.textContent = result.note;

    if (state.score >= 700) {
        launchConfetti();
    }
}

function resetState() {
    state.score = 0;
    state.streak = 0;
    state.timeLeft = TOTAL_TIME;
    state.lives = INITIAL_LIVES;
    state.currentChallenge = null;
    state.stage = "tool";
    state.active = true;
    updateHUD();
}

function startGame() {
    window.clearInterval(state.timerId);

    if (CHALLENGES.length === 0) {
        return;
    }

    el.hero.hidden = true;
    el.resultPanel.hidden = true;
    el.game.hidden = false;

    resetState();
    nextChallenge();

    state.timerId = window.setInterval(() => {
        state.timeLeft -= 1;
        updateHUD();
        if (state.timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function toggleHelp() {
    const isHidden = el.howPanel.hasAttribute("hidden");
    if (isHidden) {
        el.howPanel.removeAttribute("hidden");
        el.howBtn.setAttribute("aria-expanded", "true");
    } else {
        el.howPanel.setAttribute("hidden", "");
        el.howBtn.setAttribute("aria-expanded", "false");
    }
}

el.startBtn.addEventListener("click", startGame);
el.restartBtn.addEventListener("click", startGame);
el.howBtn.addEventListener("click", toggleHelp);
