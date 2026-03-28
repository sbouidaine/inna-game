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

const NAME_BANK = [
    { acc: "الطالبَ", bare: "الطالب" },
    { acc: "الطالبةَ", bare: "الطالبة" },
    { acc: "الفريقَ", bare: "الفريق" },
    { acc: "الصفَّ", bare: "الصف" },
    { acc: "المعلمَ", bare: "المعلم" },
    { acc: "المعلمةَ", bare: "المعلمة" },
    { acc: "المختبرَ", bare: "المختبر" },
    { acc: "المكتبةَ", bare: "المكتبة" },
    { acc: "الإذاعةَ", bare: "الإذاعة" },
    { acc: "القاعةَ", bare: "القاعة" },
    { acc: "المشروعَ", bare: "المشروع" },
    { acc: "العرضَ", bare: "العرض" },
    { acc: "البرنامجَ", bare: "البرنامج" },
    { acc: "التمرينَ", bare: "التمرين" },
    { acc: "النشاطَ", bare: "النشاط" },
    { acc: "الدرسَ", bare: "الدرس" },
    { acc: "التقريرَ", bare: "التقرير" },
    { acc: "الشرحَ", bare: "الشرح" },
    { acc: "المسابقةَ", bare: "المسابقة" },
    { acc: "الإنجازَ", bare: "الإنجاز" },
    { acc: "الطالِبَيْنِ", bare: "الطالبين" },
    { acc: "المدرسةَ", bare: "المدرسة" }
];

const PREDICATE_BANK = [
    { nom: "ممتازٌ", bare: "ممتاز" },
    { nom: "منظمٌ", bare: "منظم" },
    { nom: "واضحٌ", bare: "واضح" },
    { nom: "جاهزٌ", bare: "جاهز" },
    { nom: "متعاونٌ", bare: "متعاون" },
    { nom: "مبدعٌ", bare: "مبدع" },
    { nom: "متميزٌ", bare: "متميز" },
    { nom: "قويٌ", bare: "قوي" },
    { nom: "حاضرٌ", bare: "حاضر" },
    { nom: "دقيقٌ", bare: "دقيق" },
    { nom: "مفيدٌ", bare: "مفيد" },
    { nom: "نشيطٌ", bare: "نشيط" },
    { nom: "متقنٌ", bare: "متقن" },
    { nom: "ملهمٌ", bare: "ملهم" },
    { nom: "مرتبٌ", bare: "مرتب" },
    { nom: "مفهومٌ", bare: "مفهوم" }
];

const SIMILE_BANK = [
    { nom: "نجمٌ", bare: "نجم" },
    { nom: "لوحةٌ", bare: "لوحة" },
    { nom: "خليةُ نحلٍ", bare: "خلية" },
    { nom: "شعلةُ نشاطٍ", bare: "شعلة" },
    { nom: "قدوةٌ", bare: "قدوة" },
    { nom: "رسالةُ أملٍ", bare: "رسالة" },
    { nom: "جسرٌ", bare: "جسر" },
    { nom: "بوصلةٌ", bare: "بوصلة" }
];

const CERTAINTY_TAILS = ["حقًا", "بلا شك", "دائمًا", "هذا الأسبوع", "في هذا الفصل"];
const WISH_TAILS = ["كل يوم", "في كل درس", "دائمًا", "دون انقطاع", "طوال الفصل"];
const HOPE_TAILS = ["قريبًا", "في الحصة القادمة", "هذا الأسبوع", "غدًا", "قبل نهاية الشهر"];
const CONTRAST_PREFIXES = [
    "الوقت ضيق،",
    "التحدي صعب،",
    "الفصل مزدحم،",
    "المادة طويلة،",
    "الموعد قريب،",
    "العمل كثير،"
];
const AN_STARTERS = [
    "يسرني",
    "يسعدنا",
    "أحب",
    "نريد",
    "أتمنى",
    "يهمني",
    "لاحظت",
    "أؤكد",
    "يعجبني",
    "أرغب"
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

function buildSentence(tool, name, predicate, rng) {
    let prompt;
    let parseKhabar = predicate;

    if (tool === "إن") {
        const tail = pickRandom(CERTAINTY_TAILS, rng);
        prompt = `____ ${name.acc} ${predicate.nom} ${tail}.`;
    } else if (tool === "أن") {
        const starter = pickRandom(AN_STARTERS, rng);
        prompt = `${starter} ____ ${name.acc} ${predicate.nom}.`;
    } else if (tool === "كأن") {
        parseKhabar = pickRandom(SIMILE_BANK, rng);
        prompt = `____ ${name.acc} ${parseKhabar.nom} في ساحة المدرسة.`;
    } else if (tool === "لكن") {
        const prefix = pickRandom(CONTRAST_PREFIXES, rng);
        prompt = `${prefix} ____ ${name.acc} ${predicate.nom}.`;
    } else if (tool === "ليت") {
        const tail = pickRandom(WISH_TAILS, rng);
        prompt = `____ ${name.acc} ${predicate.nom} ${tail}.`;
    } else {
        const tail = pickRandom(HOPE_TAILS, rng);
        prompt = `____ ${name.acc} ${predicate.nom} ${tail}.`;
    }

    return {
        prompt,
        parseKhabar
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

function generateChallengePool(count, rng) {
    const pool = [];
    const seen = new Set();
    let attempts = 0;

    while (pool.length < count && attempts < count * 30) {
        attempts += 1;
        const tool = pickRandom(TOOL_POOL, rng);
        const mission = pickRandom(MISSION_BANK, rng);
        const name = pickRandom(NAME_BANK, rng);
        const predicate = pickRandom(PREDICATE_BANK, rng);
        const sentence = buildSentence(tool, name, predicate, rng);

        const toolQuestion = {
            prompt: sentence.prompt,
            correct: tool,
            options: buildToolOptions(tool, rng),
            explain: TOOL_EXPLAIN[tool]
        };

        const parseQuestion = buildParseQuestion(tool, sentence.prompt, name, sentence.parseKhabar, rng);

        const key = `${toolQuestion.prompt}|${parseQuestion.prompt}`;
        if (seen.has(key)) {
            continue;
        }

        seen.add(key);
        pool.push({
            missionTitle: mission.title,
            missionText: mission.text,
            toolQuestion,
            parseQuestion
        });
    }

    return pool;
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

function resetChallengeOrder() {
    const indices = CHALLENGES.map((_, index) => index);
    state.challengeOrder = shuffle(indices, userRng);
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