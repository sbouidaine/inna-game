const TOTAL_TIME = 90;
const INITIAL_LIVES = 3;
const GENERATED_CHALLENGE_COUNT = 90;
const LAST_SELECTION_KEY = "innaLastSelectionSignatureV2";

const TOOL_POOL = ["إن", "أن", "كأن", "لكن", "ليت", "لعل"];

const TOOL_EXPLAIN = {
    "إن": "إن تفيد التوكيد.",
    "أن": "أن تأتي غالبًا بعد أفعال مثل يسرني وأؤكد.",
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

const CURATED_SENTENCE_BANK = [
    { id: "in-01", tool: "إن", prompt: "____ الطالبَ مجتهدٌ في دروسه.", subjectBare: "الطالب", khabarBare: "مجتهد" },
    { id: "in-02", tool: "إن", prompt: "____ الطالبةَ متميزةٌ في الإلقاء.", subjectBare: "الطالبة", khabarBare: "متميزة" },
    { id: "in-03", tool: "إن", prompt: "____ الفريقَ متعاونٌ داخل الصف.", subjectBare: "الفريق", khabarBare: "متعاون" },
    { id: "in-04", tool: "إن", prompt: "____ المعلمَ قدوةٌ في الانضباط.", subjectBare: "المعلم", khabarBare: "قدوة" },
    { id: "in-05", tool: "إن", prompt: "____ المعلمةَ حريصةٌ على فهم الطلاب.", subjectBare: "المعلمة", khabarBare: "حريصة" },
    { id: "in-06", tool: "إن", prompt: "____ المختبرَ مجهزٌ للتجارب العلمية.", subjectBare: "المختبر", khabarBare: "مجهز" },
    { id: "in-07", tool: "إن", prompt: "____ المكتبةَ غنيةٌ بالمراجع المفيدة.", subjectBare: "المكتبة", khabarBare: "غنية" },
    { id: "in-08", tool: "إن", prompt: "____ الإذاعةَ المدرسيةَ مؤثرةٌ في الطلاب.", subjectBare: "الإذاعة المدرسية", khabarBare: "مؤثرة" },
    { id: "in-09", tool: "إن", prompt: "____ النشاطَ الرياضيَّ مهمٌ لصحة الطلاب.", subjectBare: "النشاط الرياضي", khabarBare: "مهم" },
    { id: "in-10", tool: "إن", prompt: "____ الدرسَ واضحٌ بعد الشرح.", subjectBare: "الدرس", khabarBare: "واضح" },
    { id: "in-11", tool: "إن", prompt: "____ التقريرَ منظمٌ ومرتبٌ.", subjectBare: "التقرير", khabarBare: "منظم" },
    { id: "in-12", tool: "إن", prompt: "____ المشروعَ مفيدٌ لتنمية المهارات.", subjectBare: "المشروع", khabarBare: "مفيد" },
    { id: "in-13", tool: "إن", prompt: "____ الحصةَ ممتعةٌ هذا اليوم.", subjectBare: "الحصة", khabarBare: "ممتعة" },
    { id: "in-14", tool: "إن", prompt: "____ الجدولَ مناسبٌ لهذا الأسبوع.", subjectBare: "الجدول", khabarBare: "مناسب" },
    { id: "in-15", tool: "إن", prompt: "____ الجوَّ مناسبٌ للرحلة العلمية.", subjectBare: "الجو", khabarBare: "مناسب" },
    { id: "in-16", tool: "إن", prompt: "____ المسابقةَ فرصةٌ لإظهار المواهب.", subjectBare: "المسابقة", khabarBare: "فرصة" },
    { id: "in-17", tool: "إن", prompt: "____ الفصلَ هادئٌ أثناء الامتحان.", subjectBare: "الفصل", khabarBare: "هادئ" },
    { id: "in-18", tool: "إن", prompt: "____ الاجتهادَ طريقٌ للتفوق.", subjectBare: "الاجتهاد", khabarBare: "طريق" },

    { id: "an-01", tool: "أن", prompt: "يسعدني ____ الطالبَ مجتهدٌ في دروسه.", subjectBare: "الطالب", khabarBare: "مجتهد" },
    { id: "an-02", tool: "أن", prompt: "من الرائع ____ الطالبةَ متألقةٌ في العروض.", subjectBare: "الطالبة", khabarBare: "متألقة" },
    { id: "an-03", tool: "أن", prompt: "يسر المعلم ____ الصفَّ منظمٌ اليوم.", subjectBare: "الصف", khabarBare: "منظم" },
    { id: "an-04", tool: "أن", prompt: "أؤكد ____ الخطةَ واضحةٌ للجميع.", subjectBare: "الخطة", khabarBare: "واضحة" },
    { id: "an-05", tool: "أن", prompt: "لاحظت ____ الفريقَ متعاونٌ في المشروع.", subjectBare: "الفريق", khabarBare: "متعاون" },
    { id: "an-06", tool: "أن", prompt: "من المهم ____ المختبرَ آمنٌ للتجارب.", subjectBare: "المختبر", khabarBare: "آمن" },
    { id: "an-07", tool: "أن", prompt: "يسرني ____ المكتبةَ مفتوحةٌ بعد الدوام.", subjectBare: "المكتبة", khabarBare: "مفتوحة" },
    { id: "an-08", tool: "أن", prompt: "يسعدنا ____ النشاطَ الثقافيَّ مفيدٌ للطلاب.", subjectBare: "النشاط الثقافي", khabarBare: "مفيد" },
    { id: "an-09", tool: "أن", prompt: "أؤكد ____ التقريرَ دقيقٌ في معلوماته.", subjectBare: "التقرير", khabarBare: "دقيق" },
    { id: "an-10", tool: "أن", prompt: "من الجميل ____ الحصةَ تفاعليةٌ هذا الأسبوع.", subjectBare: "الحصة", khabarBare: "تفاعلية" },
    { id: "an-11", tool: "أن", prompt: "يسر المعلم ____ الواجبَ مناسبٌ لمستوى الصف.", subjectBare: "الواجب", khabarBare: "مناسب" },
    { id: "an-12", tool: "أن", prompt: "من الرائع ____ الشرحَ مبسطٌ للطلاب.", subjectBare: "الشرح", khabarBare: "مبسط" },
    { id: "an-13", tool: "أن", prompt: "يسرني ____ المسابقةَ عادلةٌ بين الفرق.", subjectBare: "المسابقة", khabarBare: "عادلة" },
    { id: "an-14", tool: "أن", prompt: "من المهم ____ الجدولَ متوازنٌ هذا الفصل.", subjectBare: "الجدول", khabarBare: "متوازن" },
    { id: "an-15", tool: "أن", prompt: "لاحظت ____ النتائجَ مرضيةٌ بعد التدريب.", subjectBare: "النتائج", khabarBare: "مرضية" },
    { id: "an-16", tool: "أن", prompt: "يسعدنا ____ التعاونَ حاضرٌ بين الطلاب.", subjectBare: "التعاون", khabarBare: "حاضر" },
    { id: "an-17", tool: "أن", prompt: "من الجميل ____ المشروعَ منظمٌ في خطواته.", subjectBare: "المشروع", khabarBare: "منظم" },
    { id: "an-18", tool: "أن", prompt: "أؤكد ____ البرنامجَ ملائمٌ لأهداف المدرسة.", subjectBare: "البرنامج", khabarBare: "ملائم" },

    { id: "ka-01", tool: "كأن", prompt: "____ الطالبَ نجمٌ في الاجتهاد.", subjectBare: "الطالب", khabarBare: "نجم" },
    { id: "ka-02", tool: "كأن", prompt: "____ الطالبةَ شعلةُ نشاطٍ في الصف.", subjectBare: "الطالبة", khabarBare: "شعلة" },
    { id: "ka-03", tool: "كأن", prompt: "____ الفريقَ خليةُ نحلٍ أثناء العمل.", subjectBare: "الفريق", khabarBare: "خلية" },
    { id: "ka-04", tool: "كأن", prompt: "____ المعلمَ أبٌ حانٍ على طلابه.", subjectBare: "المعلم", khabarBare: "أب" },
    { id: "ka-05", tool: "كأن", prompt: "____ المعلمةَ بوصلةُ نجاحٍ للصف.", subjectBare: "المعلمة", khabarBare: "بوصلة" },
    { id: "ka-06", tool: "كأن", prompt: "____ المختبرَ ورشةُ اكتشافٍ ممتعةٍ.", subjectBare: "المختبر", khabarBare: "ورشة" },
    { id: "ka-07", tool: "كأن", prompt: "____ المكتبةَ بحرُ معرفةٍ واسعٌ.", subjectBare: "المكتبة", khabarBare: "بحر" },
    { id: "ka-08", tool: "كأن", prompt: "____ الإذاعةَ المدرسيةَ صوتُ المدرسةِ اليومي.", subjectBare: "الإذاعة المدرسية", khabarBare: "صوت" },
    { id: "ka-09", tool: "كأن", prompt: "____ النشاطَ الفنيَّ لوحةٌ من الإبداع.", subjectBare: "النشاط الفني", khabarBare: "لوحة" },
    { id: "ka-10", tool: "كأن", prompt: "____ الدرسَ مفتاحُ فهمٍ للموضوع.", subjectBare: "الدرس", khabarBare: "مفتاح" },
    { id: "ka-11", tool: "كأن", prompt: "____ المشروعَ جسرٌ نحو الابتكار.", subjectBare: "المشروع", khabarBare: "جسر" },
    { id: "ka-12", tool: "كأن", prompt: "____ العرضَ قصةُ نجاحٍ أمام الحضور.", subjectBare: "العرض", khabarBare: "قصة" },
    { id: "ka-13", tool: "كأن", prompt: "____ المسابقةَ ميدانُ تحدٍّ جميلٍ.", subjectBare: "المسابقة", khabarBare: "ميدان" },
    { id: "ka-14", tool: "كأن", prompt: "____ الفصلَ بيتٌ ثانٍ للطلاب.", subjectBare: "الفصل", khabarBare: "بيت" },
    { id: "ka-15", tool: "كأن", prompt: "____ التعاونَ جناحا نجاحٍ للفريق.", subjectBare: "التعاون", khabarBare: "جناحا" },
    { id: "ka-16", tool: "كأن", prompt: "____ الاجتهادَ سلمٌ نحو التفوق.", subjectBare: "الاجتهاد", khabarBare: "سلم" },
    { id: "ka-17", tool: "كأن", prompt: "____ الحصةَ رحلةُ تعلمٍ ممتعةٍ.", subjectBare: "الحصة", khabarBare: "رحلة" },
    { id: "ka-18", tool: "كأن", prompt: "____ البرنامجَ خريطةُ طريقٍ واضحةٌ.", subjectBare: "البرنامج", khabarBare: "خريطة" },

    { id: "lk-01", tool: "لكن", prompt: "الطريق طويلٌ، ____ الحماسَ كبيرٌ بين الطلاب.", subjectBare: "الحماس", khabarBare: "كبير" },
    { id: "lk-02", tool: "لكن", prompt: "الوقت ضيقٌ، ____ الفريقَ مستعدٌ للمسابقة.", subjectBare: "الفريق", khabarBare: "مستعد" },
    { id: "lk-03", tool: "لكن", prompt: "المنهج كثيفٌ، ____ الشرحَ واضحٌ للجميع.", subjectBare: "الشرح", khabarBare: "واضح" },
    { id: "lk-04", tool: "لكن", prompt: "الأسئلة كثيرةٌ، ____ الطالبَ هادئٌ وواثقٌ.", subjectBare: "الطالب", khabarBare: "هادئ" },
    { id: "lk-05", tool: "لكن", prompt: "الطقس متقلبٌ، ____ الرحلةَ قائمةٌ هذا الأسبوع.", subjectBare: "الرحلة", khabarBare: "قائمة" },
    { id: "lk-06", tool: "لكن", prompt: "المهمة صعبةٌ، ____ التعاونَ حاضرٌ في المجموعة.", subjectBare: "التعاون", khabarBare: "حاضر" },
    { id: "lk-07", tool: "لكن", prompt: "البداية كانت بطيئةً، ____ التقدمَ ملحوظٌ الآن.", subjectBare: "التقدم", khabarBare: "ملحوظ" },
    { id: "lk-08", tool: "لكن", prompt: "الامتحان قريبٌ، ____ الخطةَ منظمةٌ للمراجعة.", subjectBare: "الخطة", khabarBare: "منظمة" },
    { id: "lk-09", tool: "لكن", prompt: "القاعة مزدحمةٌ، ____ العرضَ مرتبٌ وجميلٌ.", subjectBare: "العرض", khabarBare: "مرتب" },
    { id: "lk-10", tool: "لكن", prompt: "التحدي كبيرٌ، ____ المعلمةَ داعمةٌ للطلاب.", subjectBare: "المعلمة", khabarBare: "داعمة" },
    { id: "lk-11", tool: "لكن", prompt: "العمل كثيرٌ، ____ النتائجَ مبشرةٌ هذا الفصل.", subjectBare: "النتائج", khabarBare: "مبشرة" },
    { id: "lk-12", tool: "لكن", prompt: "الوقت قصيرٌ، ____ الواجبَ واضحٌ وسهلٌ.", subjectBare: "الواجب", khabarBare: "واضح" },
    { id: "lk-13", tool: "لكن", prompt: "المشروع طويلٌ، ____ الإنجازَ مستمرٌ كل يوم.", subjectBare: "الإنجاز", khabarBare: "مستمر" },
    { id: "lk-14", tool: "لكن", prompt: "الدرس جديدٌ، ____ الفكرةَ مفهومةٌ بعد الشرح.", subjectBare: "الفكرة", khabarBare: "مفهومة" },
    { id: "lk-15", tool: "لكن", prompt: "النشاط يحتاج جهدًا، ____ الطلابَ متحمسون للمشاركة.", subjectBare: "الطلاب", khabarBare: "متحمسون" },
    { id: "lk-16", tool: "لكن", prompt: "الطريق ليس سهلًا، ____ الاجتهادَ موجودٌ في الصف.", subjectBare: "الاجتهاد", khabarBare: "موجود" },
    { id: "lk-17", tool: "لكن", prompt: "التجربة دقيقةٌ، ____ المختبرَ آمنٌ ومنظمٌ.", subjectBare: "المختبر", khabarBare: "آمن" },
    { id: "lk-18", tool: "لكن", prompt: "المسابقة قويةٌ، ____ الفريقَ واثقٌ من أدائه.", subjectBare: "الفريق", khabarBare: "واثق" },

    { id: "ly-01", tool: "ليت", prompt: "____ الحصةَ أطولُ قليلًا.", subjectBare: "الحصة", khabarBare: "أطول" },
    { id: "ly-02", tool: "ليت", prompt: "____ وقتَ المراجعةِ أوسعُ قبل الاختبار.", subjectBare: "وقت المراجعة", khabarBare: "أوسع" },
    { id: "ly-03", tool: "ليت", prompt: "____ الواجبَ أخفُّ هذا الأسبوع.", subjectBare: "الواجب", khabarBare: "أخف" },
    { id: "ly-04", tool: "ليت", prompt: "____ الشرحَ أوضحُ للجميع.", subjectBare: "الشرح", khabarBare: "أوضح" },
    { id: "ly-05", tool: "ليت", prompt: "____ المختبرَ متاحٌ بعد الدوام.", subjectBare: "المختبر", khabarBare: "متاح" },
    { id: "ly-06", tool: "ليت", prompt: "____ المكتبةَ مفتوحةٌ حتى العصر.", subjectBare: "المكتبة", khabarBare: "مفتوحة" },
    { id: "ly-07", tool: "ليت", prompt: "____ الصفَّ أهدأُ أثناء الشرح.", subjectBare: "الصف", khabarBare: "أهدأ" },
    { id: "ly-08", tool: "ليت", prompt: "____ البرنامجَ أبسطُ للطلاب الجدد.", subjectBare: "البرنامج", khabarBare: "أبسط" },
    { id: "ly-09", tool: "ليت", prompt: "____ النشاطَ أكثرُ تفاعلًا بين الفرق.", subjectBare: "النشاط", khabarBare: "أكثر" },
    { id: "ly-10", tool: "ليت", prompt: "____ المسابقةَ أقربُ إلى واقع المنهج.", subjectBare: "المسابقة", khabarBare: "أقرب" },
    { id: "ly-11", tool: "ليت", prompt: "____ نتائجَ الاختبارِ أفضلُ هذا الفصل.", subjectBare: "نتائج الاختبار", khabarBare: "أفضل" },
    { id: "ly-12", tool: "ليت", prompt: "____ القاعةَ أوسعُ للأنشطة.", subjectBare: "القاعة", khabarBare: "أوسع" },
    { id: "ly-13", tool: "ليت", prompt: "____ جدولَ الاختباراتِ أكثرُ توازنًا.", subjectBare: "جدول الاختبارات", khabarBare: "أكثر" },
    { id: "ly-14", tool: "ليت", prompt: "____ المقاعدَ أريحُ للطلاب.", subjectBare: "المقاعد", khabarBare: "أريح" },
    { id: "ly-15", tool: "ليت", prompt: "____ الرحلةَ العلميةَ أقربُ موعدًا.", subjectBare: "الرحلة العلمية", khabarBare: "أقرب" },
    { id: "ly-16", tool: "ليت", prompt: "____ الأنشطةَ الفنيةَ أكثرُ حضورًا.", subjectBare: "الأنشطة الفنية", khabarBare: "أكثر" },
    { id: "ly-17", tool: "ليت", prompt: "____ جلسةَ النقاشِ أطولُ من المعتاد.", subjectBare: "جلسة النقاش", khabarBare: "أطول" },
    { id: "ly-18", tool: "ليت", prompt: "____ الخطةَ الدراسيةَ أوضحُ للطلاب.", subjectBare: "الخطة الدراسية", khabarBare: "أوضح" },

    { id: "la-01", tool: "لعل", prompt: "____ الفريقَ جاهزٌ للمسابقة.", subjectBare: "الفريق", khabarBare: "جاهز" },
    { id: "la-02", tool: "لعل", prompt: "____ الطلابَ ملتزمون بالخطة.", subjectBare: "الطلاب", khabarBare: "ملتزمون" },
    { id: "la-03", tool: "لعل", prompt: "____ النتائجَ مرضيةٌ هذا الأسبوع.", subjectBare: "النتائج", khabarBare: "مرضية" },
    { id: "la-04", tool: "لعل", prompt: "____ المشروعَ مكتملٌ قريبًا.", subjectBare: "المشروع", khabarBare: "مكتمل" },
    { id: "la-05", tool: "لعل", prompt: "____ الطقسَ مناسبٌ للرحلة.", subjectBare: "الطقس", khabarBare: "مناسب" },
    { id: "la-06", tool: "لعل", prompt: "____ الشرحَ مفيدٌ للجميع.", subjectBare: "الشرح", khabarBare: "مفيد" },
    { id: "la-07", tool: "لعل", prompt: "____ القاعةَ مهيأةٌ للعرض.", subjectBare: "القاعة", khabarBare: "مهيأة" },
    { id: "la-08", tool: "لعل", prompt: "____ الإذاعةَ المدرسيةَ مؤثرةٌ في الطلاب.", subjectBare: "الإذاعة المدرسية", khabarBare: "مؤثرة" },
    { id: "la-09", tool: "لعل", prompt: "____ المختبرَ آمنٌ للتجارب.", subjectBare: "المختبر", khabarBare: "آمن" },
    { id: "la-10", tool: "لعل", prompt: "____ الواجبَ واضحٌ في التعليمات.", subjectBare: "الواجب", khabarBare: "واضح" },
    { id: "la-11", tool: "لعل", prompt: "____ التقريرَ جاهزٌ للتسليم.", subjectBare: "التقرير", khabarBare: "جاهز" },
    { id: "la-12", tool: "لعل", prompt: "____ الطلابَ الجددَ مندمجون بسرعة.", subjectBare: "الطلاب الجدد", khabarBare: "مندمجون" },
    { id: "la-13", tool: "لعل", prompt: "____ المعرضَ منظمٌ هذا العام.", subjectBare: "المعرض", khabarBare: "منظم" },
    { id: "la-14", tool: "لعل", prompt: "____ الخطةَ قابلةٌ للتنفيذ.", subjectBare: "الخطة", khabarBare: "قابلة" },
    { id: "la-15", tool: "لعل", prompt: "____ البرنامجَ ملائمٌ لقدرات الطلاب.", subjectBare: "البرنامج", khabarBare: "ملائم" },
    { id: "la-16", tool: "لعل", prompt: "____ الفصلَ هادئٌ أثناء الشرح.", subjectBare: "الفصل", khabarBare: "هادئ" },
    { id: "la-17", tool: "لعل", prompt: "____ الأنشطةَ متنوعةٌ هذا الشهر.", subjectBare: "الأنشطة", khabarBare: "متنوعة" },
    { id: "la-18", tool: "لعل", prompt: "____ الحافلةَ ملتزمةٌ بالموعد.", subjectBare: "الحافلة", khabarBare: "ملتزمة" }
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

function createSessionSeed() {
    let cryptoPart = "";

    try {
        const bytes = new Uint32Array(2);
        window.crypto.getRandomValues(bytes);
        cryptoPart = `${bytes[0].toString(36)}-${bytes[1].toString(36)}`;
    } catch (error) {
        cryptoPart = Math.random().toString(36).slice(2, 12);
    }

    return `${Date.now().toString(36)}-${cryptoPart}-${Math.random().toString(36).slice(2, 10)}`;
}

const SESSION_SEED = createSessionSeed();
const sessionRng = createSeededRng(SESSION_SEED);

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

function buildChallengeFromSentence(entry, rng) {
    const mission = pickRandom(MISSION_BANK, rng);

    return {
        missionTitle: mission.title,
        missionText: mission.text,
        toolQuestion: {
            prompt: entry.prompt,
            correct: entry.tool,
            options: buildToolOptions(entry.tool, rng),
            explain: TOOL_EXPLAIN[entry.tool]
        },
        parseQuestion: buildParseQuestion(
            entry.tool,
            entry.prompt,
            { bare: entry.subjectBare },
            { bare: entry.khabarBare },
            rng
        )
    };
}

function computeSelectionSignature(entries) {
    return entries
        .map((entry) => entry.id)
        .sort()
        .join("|");
}

function selectBalancedSentences(count, rng) {
    const target = Math.min(count, CURATED_SENTENCE_BANK.length);
    const buckets = {};

    TOOL_POOL.forEach((tool) => {
        buckets[tool] = shuffle(CURATED_SENTENCE_BANK.filter((entry) => entry.tool === tool), rng);
    });

    const base = Math.floor(target / TOOL_POOL.length);
    const remainder = target % TOOL_POOL.length;
    const remainderTools = shuffle([...TOOL_POOL], rng).slice(0, remainder);
    const selected = [];

    TOOL_POOL.forEach((tool) => {
        const quota = base + (remainderTools.includes(tool) ? 1 : 0);
        selected.push(...buckets[tool].splice(0, quota));
    });

    if (selected.length < target) {
        const leftovers = shuffle(TOOL_POOL.flatMap((tool) => buckets[tool]), rng);
        selected.push(...leftovers.slice(0, target - selected.length));
    }

    return shuffle(selected, rng);
}

function generateChallengePool(count, rng) {
    let selected = selectBalancedSentences(count, rng);

    try {
        const previousSignature = window.localStorage.getItem(LAST_SELECTION_KEY);
        let signature = computeSelectionSignature(selected);
        let attempts = 0;

        while (
            previousSignature &&
            signature === previousSignature &&
            attempts < 6 &&
            CURATED_SENTENCE_BANK.length > selected.length
        ) {
            const retryRng = createSeededRng(`${createSessionSeed()}-retry-${attempts}`);
            selected = selectBalancedSentences(count, retryRng);
            signature = computeSelectionSignature(selected);
            attempts += 1;
        }

        window.localStorage.setItem(LAST_SELECTION_KEY, signature);
    } catch (error) {
        // Ignore storage issues and continue with current random selection.
    }

    return selected.map((entry) => buildChallengeFromSentence(entry, rng));
}

const CHALLENGES = generateChallengePool(GENERATED_CHALLENGE_COUNT, sessionRng);

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
            if (bucket.length > 0) {
                order.push(bucket.pop());
                hasRemaining = true;
            }
        });
    }

    return order;
}

function resetChallengeOrder() {
    state.challengeOrder = buildDiverseChallengeOrder(sessionRng);
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

    const options = shuffle(question.options, sessionRng);
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
        piece.style.left = `${sessionRng() * 100}vw`;
        piece.style.backgroundColor = colors[Math.floor(sessionRng() * colors.length)];
        piece.style.animationDuration = `${2 + sessionRng() * 1.8}s`;
        piece.style.opacity = String(0.8 + sessionRng() * 0.2);
        piece.style.transform = `translateY(0) rotate(${sessionRng() * 200}deg)`;
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
