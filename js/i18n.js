/* Affura Plast — trilingual engine (AR / EN / TR)
   EN copy lives inline in the HTML (canonical). AR & TR live here.
   Elements opt in via data-i18n="key" (text), data-i18n-html="key" (markup),
   data-i18n-attr="attribute:key". Choice persists in localStorage. */
(function () {
  "use strict";

  var AR = {
    brand_tag: "حلول التغليف المرن",
    nav_home: "الرئيسية", nav_products: "المنتجات", nav_solutions: "حلول التغليف",
    nav_technology: "التقنيات", nav_sustainability: "الاستدامة", nav_about: "من نحن",
    nav_contact: "تواصل معنا", nav_quote: "اطلب عرض سعر", nav_certificates: "الشهادات",

    foot_quote: "من غازي عنتاب إلى الأسواق العالمية، نقدم حلول تغليف مرنة مبنية على الجودة والابتكار والثقة.",
    foot_about: "مصنع رائد للتغليف المرن — طباعة فلكسوغرافية، تلصيق (لامينيشن) وتصنيع أكياس منذ 2016.",
    foot_company: "الشركة", foot_products: "المنتجات", foot_contact: "تواصل معنا",
    foot_hq: "غازي عنتاب، تركيا · الفرع: سوريا",
    foot_copy: "© 2026 أفورا بلاست. جميع الحقوق محفوظة.",

    ind_food: "تغليف المنتجات الغذائية", ind_beverage: "تغليف المشروبات", ind_bags: "الأكياس الجاهزة",
    ind_homecare: "تغليف منتجات العناية المنزلية والشخصية", ind_petfood: "تغليف أغذية الحيوانات الأليفة",

    /* home */
    s1_eyebrow: "تميّز في التصنيع",
    s1_title: "طباعة فلكسو بإتقان",
    s1_text: "طباعة فلكسوغرافية عالية الدقة لتغليف مرن فاخر — على ماكينة Comexi F2 MB.",
    s1_cta1: "اكتشف قدراتنا", s1_cta2: "اطلب عرض سعر",
    s2_eyebrow: "حلولنا · ميزتك",
    s2_title: "حلول تغليف مرن متكاملة",
    s2_text: "كولد سيل، تلصيق بدون مذيبات وبالمذيبات، وورنيش مطفي — شريك واحد لكل احتياجات التغليف.",
    s2_cta: "استكشف حلولنا",
    s3_eyebrow: "جودة الطباعة",
    s3_title: "كل لون. كل تفصيل. طباعة مثالية.",
    s3_text: "طباعة فلكسوغرافية متقدمة بثبات استثنائي للألوان، تفاصيل حادة، وتشطيبات فاخرة لكل عبوة.",
    s3_cta1: "استكشف التقنيات", s3_cta2: "اطلب عرض سعر",
    ph_cmyk: "صورة الأكف الملونة — قيد التجهيز",
    ph_pending: "صورة AI قيد التجهيز",
    stat_years: "سنوات خبرة", stat_solutions: "حل تغليف", stat_industries: "قطاعات نخدمها",
    stat_markets: "أسواق التصدير", stat_markets_v: "أوروبا · الشرق الأوسط",
    ind_eyebrow: "القطاعات التي نخدمها",
    ind_title: "تغليف لكل قطاع",
    ind_text: "نقدم حلول تغليف متكاملة تلبي احتياجات مختلف الصناعات، مع التركيز على الجودة، وحماية المنتج، وجاذبية التصميم.",
    explore: 'استكشف <span class="arr">→</span>',
    learn_more: 'اعرف المزيد <span class="arr">→</span>',
    feat_eyebrow: "أبرز حلول التغليف",
    feat_title: "تغليف عالي الجودة. علامات تجارية أقوى.",
    feat_flag: "منتج مميز",
    feat1_title: "أكياس الفاكيوم للمكسرات والفستق",
    feat1_text: "حماية عالية وجودة حفظ مثالية للحفاظ على الطعم والنكهة وإطالة مدة الصلاحية.",
    feat2_title: "تغليف القهوة الفاخر",
    feat2_text: "حلول تغليف تحافظ على جودة القهوة ورائحتها مع تصميم راقي يعزز هوية العلامة التجارية.",
    feat3_title: "ملصقات ورولات المشروبات",
    feat3_text: "ملصقات زاهية ورولات شرنك سليف PVC للمياه والعصائر ومشروبات الألبان.",
    about_eyebrow: "عن أفورا بلاست",
    about_title: "جودة تقودنا. شراكة تجمعنا.",
    about_text1: "تأسست أفورا بلاست عام 2016 في غازي عنتاب – تركيا، وأصبحت اسمًا موثوقًا في صناعة التغليف المرن. وفي 2024 توسعنا بافتتاح أول فرع لنا في سوريا.",
    about_text2: "واليوم، نواصل تقديم حلول تغليف مرنة متطورة لعملائنا في الأسواق الأوروبية والعربية، مع التزام دائم بالجودة، والابتكار، والموثوقية.",
    about_cta: "اعرف المزيد عنا",
    tech_eyebrow: "تقنياتنا",
    tech_title: "تقنيات متقدمة. نتائج استثنائية.",
    tech_text: "بماكينة Comexi F2 MB الفلكسوغرافية بثمانية ألوان وتقنية العيار الآلي بالسيرفو، نقدم تغليفًا مرنًا عالي الجودة بألوان زاهية وعيار دقيق وأداء ثابت.",
    cap_flexo: "طباعة فلكسوغرافية", cap_lam: "تلصيق (لامينيشن)", cap_slit: "تقطيع الرولات",
    cap_pouch: "تصنيع الأكياس", cap_qc: "مراقبة الجودة",
    tech_cta: "استكشف تقنياتنا",
    eco_eyebrow: "الاستدامة",
    eco_title: "تغليف مستدام لمستقبل أفضل.",
    eco_text: "نلتزم بتصنيع مسؤول — خيارات قابلة لإعادة التدوير، أفلام أحادية المادة، وحلول صديقة للبيئة.",
    eco_cta: "نهجنا في الاستدامة",
    mkt_eyebrow: "أسواق التصدير",
    mkt_title: "حضور عالمي. اهتمام محلي.",
    mkt_text: "نوصل حلول التغليف المرن لعملائنا في الأسواق الإقليمية والعالمية.",
    mkt_tr: "تركيا", mkt_tr_s: "المقر الرئيسي — غازي عنتاب",
    mkt_sy: "سوريا", mkt_sy_s: "الفرع — منذ 2024",
    mkt_eu: "أوروبا", mkt_eu_s: "سوق تصدير",
    mkt_mena: "الشرق الأوسط وشمال أفريقيا", mkt_mena_s: "سوق تصدير",

    /* about */
    ab_eyebrow: "قصتنا",
    ab_title: "من غازي عنتاب إلى العالم",
    ab_lead: "بدأت أفورا بلاست عام 2016 في غازي عنتاب – تركيا، وتوسعت بافتتاح أول فرع في سوريا عام 2024 — بخبرة راسخة في الأسواق الأوروبية والعربية.",
    ab_intro_eyebrow: "من نحن",
    ab_intro_title: "شريك حقيقي، وليس مجرد مورّد",
    ab_intro_t1: "تقدم أفورا بلاست اليوم حلول تغليف مرنة متطورة لعملائها في الأسواق الأوروبية والعربية، مع التزام دائم بالجودة، والابتكار، والموثوقية.",
    ab_intro_t2: "منتجاتنا مصنفة حسب القطاعات التي نخدمها — الأغذية والمشروبات والأكياس الجاهزة والعناية المنزلية وأغذية الحيوانات الأليفة — ليجد كل عميل الحل المناسب بسرعة.",
    bdg_export: "جودة تصدير", bdg_flexo: "طباعة فلكسوغرافية", bdg_custom: "طباعة مخصصة",
    ab_tl_eyebrow: "مسيرة الشركة",
    ab_tl_title: "قصتنا مطبوعة على رول واحد",
    ab_tl1_t: "تأسيس الشركة", ab_tl1_s: "التأسيس في غازي عنتاب – تركيا.",
    ab_tl2_t: "افتتاح أول فرع", ab_tl2_s: "التوسع بافتتاح أول فرع في سوريا.",
    ab_tl3_y: "اليوم", ab_tl3_t: "نخدم الأسواق الأوروبية والعربية",
    ab_tl3_s: "خدمة العملاء في الأسواق الأوروبية والعربية، مع مواصلة التوسع نحو أسواق جديدة.",
    ab_vision_e: "رؤيتنا", ab_vision_t: "شريك موثوق في التغليف المرن",
    ab_vision_s: "أن نكون شريكًا موثوقًا في صناعة التغليف المرن، وأن نقدم حلولًا مبتكرة تلبي احتياجات الأسواق العالمية بأعلى مستويات الجودة.",
    ab_mission_e: "رسالتنا", ab_mission_t: "تغليف ينمّي العلامات التجارية",
    ab_mission_s: "توفير حلول تغليف مرنة تجمع بين الجودة، والابتكار، والاستدامة، بما يسهم في نجاح عملائنا وتعزيز قيمة علاماتهم التجارية.",
    ab_mfg_e: "تميّز في التصنيع", ab_mfg_t: "تصنيع متقدم ورقابة صارمة",
    ab_mfg1: "طباعة فلكسوغرافية", ab_mfg2: "تلصيق عالي الجودة", ab_mfg3: "تقطيع دقيق",
    ab_mfg4: "تصنيع الأكياس", ab_mfg5: "مراقبة جودة صارمة",
    ab_mfg_s: "كل طلبية تمر عبر Comexi F2 MB بتقنية العيار الآلي بالسيرفو — ألوان دقيقة وتفاصيل حادة ونتائج ثابتة، طلبية بعد طلبية.",
    ab_why_e: "لماذا أفورا بلاست", ab_why_t: "أربعة أسباب تجعل عملاءنا يبقون",
    ab_w1_t: "تصنيع حديث", ab_w1_s: "ماكينات Comexi للطباعة والتلصيق يديرها فريق ذو خبرة.",
    ab_w2_t: "جودة الطباعة", ab_w2_s: "فلكسو بثمانية ألوان مع عيار آلي بالسيرفو لدقة استثنائية.",
    ab_w3_t: "خبرة تصدير", ab_w3_s: "نخدم الأسواق الأوروبية والعربية بلوجستيات موثوقة.",
    ab_w4_t: "عقلية الشراكة", ab_w4_s: "نعمل كامتداد لعلامتك التجارية — من التصميم حتى التسليم.",

    /* products */
    pr_eyebrow: "المنتجات",
    pr_title: "تغليف مرن، منظم حسب قطاعك",
    pr_lead: "نقدم حلول تغليف متكاملة لكل قطاع — بتركيز على الجودة وحماية المنتج وجاذبية التصميم. اختر قطاعك أدناه.",
    pr_food_e: "01 · تغليف المنتجات الغذائية",
    pr_food_t: "رولات مطبوعة للعلامات الغذائية",
    pr_food_s: "رولات مطبوعة عالية الحماية تحافظ على النكهة والطزاجة عبر كل أقسام الأغذية.",
    pr_food_1: "الشيبس والوجبات الخفيفة", pr_food_2: "المكسرات والفواكه المجففة", pr_food_3: "القهوة",
    pr_food_4: "المثلجات", pr_food_5: "البسكويت", pr_food_6: "البقوليات",
    pr_food_7: "البهارات", pr_food_8: "الشوكولاتة", pr_food_9: "الخضروات المجمدة",
    bdg_foodsafe: "آمن غذائيًا", bdg_barrier: "حماية عالية", bdg_recyclable: "خيارات قابلة للتدوير",
    pr_bev_e: "02 · تغليف المشروبات",
    pr_bev_t: "ملصقات وأغلفة تبيع",
    pr_bev_s: "رولات ملصقات زاهية وأغلفة شرنك للمياه المعبأة والعصائر ومشروبات الألبان.",
    pr_bev_1: "ملصقات المياه", pr_bev_2: "ملصقات العصائر", pr_bev_3: "رولات PVC Shrink Sleeve", pr_bev_4: "رولات الليبل",
    pr_bag_e: "03 · الأكياس الجاهزة",
    pr_bag_t: "أكياس جاهزة للتعبئة",
    pr_bag_s: "أكياس مُصنعة بكل الأشكال — ومنها منتجنا المميز: أكياس الفاكيوم للفستق والمكسرات.",
    pr_bag_1: "أكياس الوقوف (Stand-Up Pouches)", pr_bag_2: "أكياس القهوة", pr_bag_3: "أكياس الفاكيوم للمكسرات والفستق ⭐",
    pr_bag_4: "أكياس الفاكيوم للحوم", pr_bag_5: "أكياس الجوانب المطوية", pr_bag_6: "أكياس اللحام الثلاثي", pr_bag_7: "أكياس اللحام الرباعي",
    pr_home_e: "04 · تغليف العناية المنزلية والشخصية",
    pr_home_t: "تغليف لمنتجات العناية",
    pr_home_s: "تغليف متين ومقاوم للمواد الكيميائية لعلامات العناية المنزلية والشخصية.",
    pr_home_1: "تغليف مساحيق الغسيل", pr_home_2: "تغليف المناديل المبللة", pr_home_3: "تغليف الشامبو السائل",
    pr_home_4: "تغليف منظفات الجلي", pr_home_5: "تغليف المنظفات السائلة", pr_home_6: "أغلفة شرنك سليف للمنظفات", pr_home_7: "تغليف الصابون",
    pr_pet_e: "05 · تغليف أغذية الحيوانات الأليفة",
    pr_pet_t: "أكياس قوية لأغذية الحيوانات",
    pr_pet_s: "أكياس متينة عالية الحماية تحافظ على طزاجة أغذية الحيوانات من المصنع حتى الوعاء.",
    pr_pet_1: "أكياس أغذية الكلاب", pr_pet_2: "أكياس أغذية القطط", pr_pet_3: "أغذية الطيور", pr_pet_4: "الأعلاف الحيوانية",
    pr_gal_e: "معرض المنتجات",
    pr_gal_t: "مباشرة من خطوط إنتاجنا",

    /* solutions */
    so_eyebrow: "أشكال التغليف لدينا",
    so_title: "كل شكل يحتاجه منتجك",
    so_lead: "من أكياس الوقوف إلى رولات التغليف المطبوعة — تصنيع داخلي، وطباعة على Comexi F2 MB، وتشطيب بمعايير التصدير.",
    so_f1_t: "كيس الوقوف (ستاند أب)", so_f1_s: "حضور قوي على الرف مع قاعدة ثابتة — مع سحّاب أو بدونه.",
    so_f2_t: "كيس القاعدة المسطحة", so_f2_s: "كيس فاخر بشكل الصندوق يقف بثبات ويمنح مساحة أكبر للعلامة.",
    so_f3_t: "كيس الجوانب المطوية", so_f3_s: "كيس القهوة الكلاسيكي بجوانب قابلة للتمدد لسعة أكبر.",
    so_f4_t: "كيس اللحام الرباعي", so_f4_s: "أربع حواف ملحومة لشكل منتظم وحاد.",
    so_f5_t: "كيس اللحام الثلاثي", so_f5_s: "مسطح ومحكم واقتصادي — مثالي لتطبيقات الفاكيوم.",
    so_f6_t: "كيس الوسادة", so_f6_s: "غلاف الفلو راب السريع والمتعدد للوجبات الخفيفة والشوكولاتة.",
    so_f7_t: "رولات التغليف المطبوعة", so_f7_s: "رولات ملصقة جاهزة للطباعة لخطوط التعبئة الخاصة بكم.",
    so_f8_t: "تحتاج شكلًا مخصصًا؟", so_f8_s: "حدثنا عن منتجك — وسنصمم البنية المناسبة له.",
    so_fin_e: "التشطيبات",
    so_fin_t: "أربعة تشطيبات. معيار واحد: الفخامة.",
    so_fin_s: "اختر التلصيق والتشطيب المناسب لمنتجك: كولد سيل لخطوط الشوكولاتة، وبدون مذيبات للعلامات الصديقة للبيئة، وبالمذيبات لأقصى حماية، وورنيش مطفي للمسة فاخرة.",
    so_fin_cta: "شاهد التقنية وراءها",

    /* technology */
    te_eyebrow: "تقنياتنا",
    te_title: "تقنية الطباعة الفلكسو: جودة تدوم، ألوان تميّز",
    te_lead: "نستخدم أحدث ماكينات الطباعة الفلكسو المتطورة لنضمن أعلى جودة في الطباعة، دقة في الألوان، وثبات استثنائي في كل تفصيلة.",
    te_fx_e: "الطباعة الفلكسوغرافية",
    te_fx_t: "Comexi F2 MB",
    te_sp1: "ألوان طباعة", te_sp2: "عيار آلي", te_sp2_v: "سيرفو",
    te_sp3: "دقة طباعة", te_sp4: "أداء ثابت",
    te_hl_b: "تقنية العيار الآلي:",
    te_hl_s: " تضبط الماكينة محطات الألوان تلقائيًا عبر الشاشة ومحركات السيرفو — لتقدم طباعة عالية الدقة وتفاصيل حادة وعيارًا مثاليًا بين الألوان في كل تشغيلة.",
    te_lm_e: "التلصيق (لامينيشن)",
    te_lm_t: "خط واحد، أربعة تشطيبات فاخرة",
    te_lm_s: "يقوم خط التلصيق Comexi بدمج الأفلام وتشطيبها لكل تطبيق — من أغلفة الشوكولاتة إلى أكياس القهوة المطفية الفاخرة.",
    te_lm2_t: "خط التلصيق Comexi",
    te_lm2_s: "تلصيق بالمذيبات وبدون مذيبات مع تحكم دقيق بالطلاء، إضافة إلى الكولد سيل والورنيش المطفي — بما يناسب احتياجات منتجك من الحماية والجاذبية.",
    te_f1_s: "لحام بدون حرارة للشوكولاتة والمنتجات الحساسة للحرارة على الخطوط السريعة.",
    te_f2_s: "تلصيق أكثر صداقة للبيئة بدون بقايا مذيبات — آمن غذائيًا بالتصميم.",
    te_f3_s: "أقصى قوة التصاق وحماية للتطبيقات الأكثر تطلبًا.",
    te_f4_s: "تشطيب فاخر ناعم الملمس يمنح العلامات إحساسًا راقيًا.",
    te_cap_e: "قدراتنا",
    te_cap_t: "من الفيلم إلى الكيس الجاهز",
    te_cap_s: "بتقنية الطباعة الفلكسوغرافية المتقدمة، نقدم تغليفًا مرنًا عالي الجودة بألوان زاهية وعيار دقيق وأداء ثابت.",

    /* sustainability */
    su_eyebrow: "الاستدامة",
    su_title: "ابتكار مستوحى من الطبيعة، مصمم للأداء.",
    su_lead: "حلول تغليف مستدامة صممت لحماية المنتجات مع احترام البيئة.",
    su_why_e: "لماذا أفورا بلاست",
    su_why_t: "لنحمِ الطبيعة معًا",
    su_why_s: "الاستدامة ليست شعارًا نطبعه — بل طريقتنا في التصنيع. نساعد العلامات على الانتقال لتغليف أكثر خضرة دون التنازل عن الحماية أو الجاذبية.",
    su_p1_t: "خيارات قابلة للتدوير", su_p1_s: "بنى جاهزة لإعادة التدوير متاحة في مختلف الأشكال — اسأل عن النسخة القابلة للتدوير من تغليفك.",
    su_p2_t: "أفلام أحادية المادة", su_p2_s: "أفلام من بوليمر واحد مصممة لأداء حماية عالٍ وإعادة تدوير أسهل.",
    su_p3_t: "عمليات أنظف", su_p3_s: "تلصيق بدون مذيبات وممارسات لتقليل الهدر في الإنتاج — نحو صفر نفايات.",
    su_eco_e: "تغليف صديق للبيئة",
    su_eco_t: "خيارات خضراء، نتائج فاخرة",
    su_eco_s: "أكياسنا الصديقة للبيئة تثبت أن التغليف المستدام يمكن أن يبدو فاخرًا — تلصيق بدون مذيبات، وبنى قابلة للتدوير، وتشطيبات يلاحظها عملاؤك.",
    su_eco_cta: "اسأل عن الخيار المستدام",

    /* certificates */
    ce_eyebrow: "الجودة والشهادات",
    ce_title: "جودة يمكنك التحقق منها",
    ce_lead: "يعمل إنتاجنا تحت رقابة جودة صارمة، موثقة بشهادات معترف بها دوليًا.",
    ce_ph: "صورة الشهادة قيد التجهيز",
    ce_c1: "إدارة الجودة", ce_c2: "سلامة الغذاء", ce_c3: "الالتزام البيئي",
    ce_note: "سيتم نشر صور الشهادات هنا. للاطلاع على وثائق المطابقة الخاصة بطلبك، تواصل معنا مباشرة.",

    /* contact */
    co_eyebrow: "تواصل معنا",
    co_title: "لنتحدث عن تغليف منتجاتك",
    co_lead: "تواصل معنا عبر الهاتف أو واتساب أو البريد الإلكتروني — أو أرسل طلب عرض سعر وسنرد خلال يوم عمل واحد.",
    co_call: "اتصل بنا", co_email: "راسلنا",
    co_hq: "المقر الرئيسي", co_hq_s: "غازي عنتاب — تركيا",
    co_branch: "الفرع", co_branch_s: "سوريا — منذ 2024",
    co_q_e: "اطلب عرض سعر",
    co_q_t: "حدثنا عن منتجك",
    co_f_name: "الاسم", co_f_company: "الشركة", co_f_email: "البريد الإلكتروني", co_f_phone: "الهاتف / واتساب",
    co_f_product: "المنتج المراد تغليفه", co_f_product_ph: "مثال: فستق محمص، 250 غ",
    co_f_msg: "التفاصيل", co_f_msg_ph: "الشكل، المقاسات، الكميات، السوق المستهدف…",
    co_f_send: "أرسل الطلب"
  };

  var TR = {
    brand_tag: "Esnek Ambalaj Çözümleri",
    nav_home: "Ana Sayfa", nav_products: "Ürünler", nav_solutions: "Ambalaj Çözümleri",
    nav_technology: "Teknoloji", nav_sustainability: "Sürdürülebilirlik", nav_about: "Hakkımızda",
    nav_contact: "İletişim", nav_quote: "Teklif İsteyin", nav_certificates: "Sertifikalar",

    foot_quote: "Gaziantep'ten uluslararası pazarlara; kalite, yenilik ve güven üzerine kurulu esnek ambalaj çözümleri sunuyoruz.",
    foot_about: "2016'dan beri premium esnek ambalaj üreticisi — fleksografik baskı, laminasyon ve torba imalatı.",
    foot_company: "Kurumsal", foot_products: "Ürünler", foot_contact: "Bize ulaşın",
    foot_hq: "Gaziantep, Türkiye · Şube: Suriye",
    foot_copy: "© 2026 Affura Plast. Tüm hakları saklıdır.",

    ind_food: "Gıda Ambalajı", ind_beverage: "İçecek Ambalajı", ind_bags: "Hazır Torbalar",
    ind_homecare: "Ev & Kişisel Bakım", ind_petfood: "Evcil Hayvan Maması Ambalajı",

    /* home */
    s1_eyebrow: "Üretimde Mükemmellik",
    s1_title: "Kusursuz Flekso Baskı",
    s1_text: "Premium esnek ambalaj için yüksek hassasiyetli fleksografik baskı — Comexi F2 MB ile.",
    s1_cta1: "Yeteneklerimizi Keşfedin", s1_cta2: "Teklif İsteyin",
    s2_eyebrow: "Çözümlerimiz · Avantajınız",
    s2_title: "Eksiksiz Esnek Ambalaj Çözümleri",
    s2_text: "Cold seal, solventsiz ve solventli laminasyon, mat lak — tüm ambalaj ihtiyaçlarınız için tek partner.",
    s2_cta: "Çözümlerimizi Keşfedin",
    s3_eyebrow: "Baskı Kalitesi",
    s3_title: "Her Renk. Her Detay. Kusursuz Baskı.",
    s3_text: "Olağanüstü renk tutarlılığı, keskin detaylar ve premium bitişlerle ileri fleksografik baskı.",
    s3_cta1: "Teknolojiyi Keşfedin", s3_cta2: "Teklif İsteyin",
    ph_cmyk: "CMYK eller görseli — hazırlanıyor",
    ph_pending: "AI görseli hazırlanıyor",
    stat_years: "Yıllık Deneyim", stat_solutions: "Ambalaj Çözümü", stat_industries: "Hizmet Verilen Sektör",
    stat_markets: "İhracat Pazarları", stat_markets_v: "AB · MENA",
    ind_eyebrow: "Hizmet Verdiğimiz Sektörler",
    ind_title: "Her sektöre uygun ambalaj",
    ind_text: "Kalite, ürün koruması ve tasarım çekiciliğine odaklanan, her sektörün ihtiyacına göre kurgulanmış entegre esnek ambalaj.",
    explore: 'Keşfet <span class="arr">→</span>',
    learn_more: 'Daha fazla <span class="arr">→</span>',
    feat_eyebrow: "Öne Çıkan Ambalaj Çözümleri",
    feat_title: "Kaliteli ambalaj. Daha güçlü markalar.",
    feat_flag: "İmza Ürün",
    feat1_title: "Antep Fıstığı ve Kuruyemiş için Vakum Torbaları",
    feat1_text: "Tadı ve aromayı koruyan, raf ömrünü uzatan yüksek bariyerli koruma.",
    feat2_title: "Premium Kahve Ambalajı",
    feat2_text: "Kahvenin kalitesini ve aromasını koruyan, markanızı yükselten premium tasarım.",
    feat3_title: "İçecek Etiketleri & Shrink Sleeve",
    feat3_text: "Su, meyve suyu ve süt içecekleri için canlı etiketler ve PVC shrink sleeve.",
    about_eyebrow: "Affura Plast Hakkında",
    about_title: "Kaliteyle üretiyor, ortaklıkla büyüyoruz.",
    about_text1: "2016'da Gaziantep'te kurulan Affura Plast, esnek ambalajda güvenilir bir isim haline geldi. 2024'te Suriye'deki ilk şubemizle büyüdük.",
    about_text2: "Bugün Avrupa ve Orta Doğu'ya ihracat yapıyor; kalite ve güvenilirlikten ödün vermeden yenilikçi ambalaj ortaklıkları kuruyoruz.",
    about_cta: "Bizi Yakından Tanıyın",
    tech_eyebrow: "Teknolojimiz",
    tech_title: "İleri teknoloji. Olağanüstü sonuçlar.",
    tech_text: "8 renkli, otomatik servo register sistemli Comexi F2 MB fleksografik baskı makinemizle canlı renkler, hassas register ve tutarlı performans sunuyoruz.",
    cap_flexo: "Fleksografik Baskı", cap_lam: "Laminasyon", cap_slit: "Dilimleme",
    cap_pouch: "Torba İmalatı", cap_qc: "Kalite Kontrol",
    tech_cta: "Teknolojimizi Keşfedin",
    eco_eyebrow: "Sürdürülebilirlik",
    eco_title: "Daha iyi bir gelecek için sürdürülebilir ambalaj.",
    eco_text: "Sorumlu üretime bağlıyız — geri dönüştürülebilir seçenekler, mono-materyal filmler ve çevre dostu çözümler.",
    eco_cta: "Sürdürülebilirlik Yaklaşımımız",
    mkt_eyebrow: "İhracat Pazarları",
    mkt_title: "Küresel erişim. Yerel özen.",
    mkt_text: "Bölgesel ve uluslararası pazarlardaki müşterilerimize esnek ambalaj çözümleri ulaştırıyoruz.",
    mkt_tr: "Türkiye", mkt_tr_s: "Genel Merkez — Gaziantep",
    mkt_sy: "Suriye", mkt_sy_s: "Şube — 2024'ten beri",
    mkt_eu: "Avrupa", mkt_eu_s: "İhracat pazarı",
    mkt_mena: "Orta Doğu & Kuzey Afrika", mkt_mena_s: "İhracat pazarı",

    /* about */
    ab_eyebrow: "Hikayemiz",
    ab_title: "Gaziantep'ten dünyaya",
    ab_lead: "Affura Plast 2016'da Gaziantep'te kuruldu, 2024'te Suriye'deki ilk şubesiyle büyüdü — Avrupa ve Arap pazarlarındaki köklü deneyimiyle.",
    ab_intro_eyebrow: "Biz Kimiz",
    ab_intro_title: "Tedarikçi değil, çözüm ortağı",
    ab_intro_t1: "Affura Plast bugün Avrupa ve Arap pazarlarındaki müşterilerine ileri esnek ambalaj çözümleri sunuyor; kalite, yenilik ve güvenilirlikten asla ödün vermiyor.",
    ab_intro_t2: "Ürünlerimiz hizmet verdiğimiz sektörlere göre sınıflandırılır — gıda, içecek, hazır torbalar, ev & kişisel bakım ve evcil hayvan maması — böylece her müşteri doğru çözümü hızla bulur.",
    bdg_export: "İhracat Kalitesi", bdg_flexo: "Fleksografik Baskı", bdg_custom: "Özel Baskı",
    ab_tl_eyebrow: "Şirket Yolculuğu",
    ab_tl_title: "Hikayemiz tek bir bobine basılı",
    ab_tl1_t: "Şirket kuruldu", ab_tl1_s: "Gaziantep — Türkiye'de kuruluş.",
    ab_tl2_t: "İlk şube açıldı", ab_tl2_s: "Suriye'deki ilk şubemizle büyüme.",
    ab_tl3_y: "Bugün", ab_tl3_t: "Avrupa ve Orta Doğu'ya hizmet",
    ab_tl3_s: "Küresel standartlarda esnek ambalaj; yeni pazarlara açılım sürüyor.",
    ab_vision_e: "Vizyonumuz", ab_vision_t: "Esnek ambalajda güvenilir ortak",
    ab_vision_s: "Esnek ambalaj sektöründe güvenilir bir ortak olmak; küresel pazarların ihtiyaçlarını en yüksek kalite standartlarıyla karşılayan yenilikçi çözümler sunmak.",
    ab_mission_e: "Misyonumuz", ab_mission_t: "Markaları büyüten ambalaj",
    ab_mission_s: "Kalite, yenilik ve sürdürülebilirliği birleştiren esnek ambalaj çözümleri sunmak; müşterilerimizin başarısına ve marka değerine katkıda bulunmak.",
    ab_mfg_e: "Üretimde Mükemmellik", ab_mfg_t: "İleri üretim, sıkı kontrol",
    ab_mfg1: "Fleksografik Baskı", ab_mfg2: "Yüksek Kaliteli Laminasyon", ab_mfg3: "Hassas Dilimleme",
    ab_mfg4: "Torba İmalatı", ab_mfg5: "Sıkı Kalite Kontrol",
    ab_mfg_s: "Her iş, otomatik servo register sistemli Comexi F2 MB'de üretilir — hassas renkler, keskin detaylar, siparişten siparişe tutarlı sonuçlar.",
    ab_why_e: "Neden Affura Plast", ab_why_t: "Müşterilerimizin kalmasının dört nedeni",
    ab_w1_t: "Modern Üretim", ab_w1_s: "Deneyimli bir ekibin işlettiği Comexi baskı ve laminasyon hatları.",
    ab_w2_t: "Baskı Kalitesi", ab_w2_s: "Olağanüstü hassasiyet için otomatik servo register'lı 8 renk flekso.",
    ab_w3_t: "İhracat Deneyimi", ab_w3_s: "Güvenilir lojistikle Avrupa ve Orta Doğu pazarlarına hizmet.",
    ab_w4_t: "Ortaklık Anlayışı", ab_w4_s: "Tasarımdan teslimata markanızın bir uzantısı gibi çalışırız.",

    /* products */
    pr_eyebrow: "Ürünler",
    pr_title: "Sektörünüze göre düzenlenmiş esnek ambalaj",
    pr_lead: "Her sektör için entegre ambalaj çözümleri — kalite, ürün koruması ve tasarım odaklı. Sektörünüzü aşağıda bulun.",
    pr_food_e: "01 · Gıda Ürünleri Ambalajı",
    pr_food_t: "Gıda markaları için baskılı film bobinleri",
    pr_food_s: "Gıda reyonunun tamamında lezzeti ve tazeliği koruyan yüksek bariyerli baskılı bobinler.",
    pr_food_1: "Cips & Atıştırmalık", pr_food_2: "Kuruyemiş & Kuru Meyve", pr_food_3: "Kahve",
    pr_food_4: "Dondurma (Metalize Sargı)", pr_food_5: "Bisküvi", pr_food_6: "Bakliyat",
    pr_food_7: "Baharat", pr_food_8: "Çikolata", pr_food_9: "Donmuş Sebze",
    bdg_foodsafe: "Gıdaya Uygun", bdg_barrier: "Yüksek Bariyer", bdg_recyclable: "Geri Dönüştürülebilir Seçenek",
    pr_bev_e: "02 · İçecek Ambalajı",
    pr_bev_t: "Satan etiketler ve sleeve'ler",
    pr_bev_s: "Şişe suyu, meyve suyu ve süt içecekleri için canlı etiket bobinleri ve shrink sleeve.",
    pr_bev_1: "Su Etiketleri", pr_bev_2: "Meyve Suyu Etiketleri", pr_bev_3: "PVC Shrink Sleeve Bobinleri", pr_bev_4: "Etiket Bobinleri",
    pr_bag_e: "03 · Hazır Torbalar",
    pr_bag_t: "Dolyuma hazır torbalar",
    pr_bag_s: "Her formatta üretilmiş torbalar — imza ürünümüz Antep fıstığı ve kuruyemiş vakum torbaları dahil.",
    pr_bag_1: "Doypack (Stand-Up)", pr_bag_2: "Kahve Torbaları", pr_bag_3: "Fıstık & Kuruyemiş Vakum Torbaları ⭐",
    pr_bag_4: "Et için Vakum Torbaları", pr_bag_5: "Yan Körüklü Torbalar", pr_bag_6: "Üç Taraf Yapıştırmalı", pr_bag_7: "Quad Seal Torbalar",
    pr_home_e: "04 · Ev & Kişisel Bakım Ambalajı",
    pr_home_t: "Bakım ürünleri için ambalaj",
    pr_home_s: "Ev ve kişisel bakım markaları için dayanıklı, kimyasala dirençli ambalaj.",
    pr_home_1: "Çamaşır Deterjanları", pr_home_2: "Islak Mendil", pr_home_3: "Sıvı Şampuan",
    pr_home_4: "Bulaşık Deterjanları", pr_home_5: "Sıvı Temizleyiciler", pr_home_6: "Deterjan Shrink Sleeve Etiketleri", pr_home_7: "Sabun Ambalajı",
    pr_pet_e: "05 · Evcil Hayvan Maması Ambalajı",
    pr_pet_t: "Mama için güçlü torbalar",
    pr_pet_s: "Mamayı fabrikadan mama kabına kadar taze tutan dayanıklı, yüksek bariyerli torbalar.",
    pr_pet_1: "Köpek Maması Torbaları", pr_pet_2: "Kedi Maması Torbaları", pr_pet_3: "Kuş Yemi", pr_pet_4: "Hayvan Yemi",
    pr_gal_e: "Ürün Galerisi",
    pr_gal_t: "Doğrudan üretim hatlarımızdan",

    /* solutions */
    so_eyebrow: "Ambalaj Formatlarımız",
    so_title: "Ürününüzün ihtiyacı olan her format",
    so_lead: "Doypack'ten baskılı bobine — kendi tesisimizde üretilir, Comexi F2 MB'de basılır, ihracat standardında biter.",
    so_f1_t: "Doypack (Stand-Up)", so_f1_s: "Sabit tabanla rafta güçlü duruş — kilitli veya kilitsiz.",
    so_f2_t: "Düz Tabanlı Torba", so_f2_s: "Dik duran, marka alanını büyüten premium kutu formu.",
    so_f3_t: "Yan Körüklü Torba", so_f3_s: "Hacim için genişleyen kenarlarıyla klasik kahve torbası.",
    so_f4_t: "Quad Seal Torba", so_f4_s: "Keskin, yapılandırılmış blok form için dört yapıştırma kenarı.",
    so_f5_t: "Üç Taraf Yapıştırmalı", so_f5_s: "Düz, sıkı ve ekonomik — vakum uygulamaları için ideal.",
    so_f6_t: "Yastık Torba", so_f6_s: "Atıştırmalık ve çikolata için hızlı, çok yönlü flow-wrap.",
    so_f7_t: "Baskılı Bobin", so_f7_s: "Kendi dolum hatlarınız için baskıya hazır lamine bobinler.",
    so_f8_t: "Özel format mı gerekiyor?", so_f8_s: "Ürününüzü anlatın — doğru yapıyı birlikte kuralım.",
    so_fin_e: "Bitişler",
    so_fin_t: "Dört bitiş. Tek standart: premium.",
    so_fin_s: "Ürününüze uygun laminasyon ve bitişi seçin: çikolata hatları için cold seal, çevreye duyarlı markalar için solventsiz, maksimum bariyer için solventli, lüks dokunuş için mat lak.",
    so_fin_cta: "Arkasındaki teknolojiyi görün",

    /* technology */
    te_eyebrow: "Teknolojimiz",
    te_title: "Flekso baskı: kalıcı kalite, fark yaratan renkler",
    te_lead: "En yeni Comexi hatlarıyla baskıda en yüksek kaliteyi, renk hassasiyetini ve her detayda olağanüstü kararlılığı garanti ediyoruz.",
    te_fx_e: "Fleksografik Baskı",
    te_fx_t: "Comexi F2 MB",
    te_sp1: "Baskı rengi", te_sp2: "Otomatik register", te_sp2_v: "Servo",
    te_sp3: "Baskı çözünürlüğü", te_sp4: "Tutarlı performans",
    te_hl_b: "Otomatik register teknolojisi:",
    te_hl_s: " makine, her renk istasyonunu kontrol ekranı ve servo motorlar aracılığıyla otomatik hizalar — her üretimde son derece hassas baskı, keskin detaylar ve kusursuz renk oturması sağlar.",
    te_lm_e: "Laminasyon",
    te_lm_t: "Tek hat, dört premium bitiş",
    te_lm_s: "Comexi laminasyon hattımız her uygulama için filmleri birleştirir ve bitirir — çikolata sargısından lüks mat kahve torbasına.",
    te_lm2_t: "Comexi laminasyon hattı",
    te_lm2_s: "Hassas kaplama kontrolüyle solventli ve solventsiz laminasyon; ayrıca cold seal uygulaması ve mat lak — ürününüzün bariyer ve raf çekiciliği ihtiyacına göre.",
    te_f1_s: "Hızlı hatlarda çikolata ve ısıya duyarlı ürünler için ısısız yapıştırma.",
    te_f2_s: "Solvent kalıntısı olmayan, daha çevreci laminasyon — tasarımı gereği gıdaya uygun.",
    te_f3_s: "En zorlu uygulamalar için maksimum yapışma gücü ve bariyer.",
    te_f4_s: "Markalara lüks hissi veren yumuşak dokunuşlu premium bitiş.",
    te_cap_e: "Yeteneklerimiz",
    te_cap_t: "Filmden bitmiş torbaya",
    te_cap_s: "İleri fleksografik baskı teknolojisiyle canlı renkler, hassas register ve tutarlı performansa sahip yüksek kaliteli esnek ambalaj sunuyoruz.",

    /* sustainability */
    su_eyebrow: "Sürdürülebilirlik",
    su_title: "Doğadan ilham alan, performans için tasarlanan yenilik.",
    su_lead: "Ürünleri korurken çevreye saygı duyan sürdürülebilir ambalaj çözümleri.",
    su_why_e: "Neden Affura Plast",
    su_why_t: "Doğayı birlikte koruyalım",
    su_why_s: "Sürdürülebilirlik bastığımız bir etiket değil, üretme biçimimizdir. Markaların korumadan ve raf çekiciliğinden vazgeçmeden daha yeşil ambalaja geçmesine yardımcı oluyoruz.",
    su_p1_t: "Geri Dönüştürülebilir Seçenekler", su_p1_s: "Tüm formatlarımızda geri dönüşüme hazır yapılar — ambalajınızın geri dönüştürülebilir versiyonunu sorun.",
    su_p2_t: "Mono-Materyal Filmler", su_p2_s: "Bariyer performansı ve daha kolay geri dönüşüm için tek polimerli filmler.",
    su_p3_t: "Daha Temiz Süreçler", su_p3_s: "Solventsiz laminasyon ve üretim genelinde atık azaltma — sıfır atığa doğru.",
    su_eco_e: "Ekolojik Ambalaj",
    su_eco_t: "Yeşil seçimler, premium sonuçlar",
    su_eco_s: "Çevre dostu torbalarımız, sürdürülebilir ambalajın da premium görünebileceğini kanıtlıyor — solventsiz laminasyon, geri dönüştürülebilir yapılar ve fark edilen bitişler.",
    su_eco_cta: "Sürdürülebilir seçeneği sorun",

    /* certificates */
    ce_eyebrow: "Kalite & Sertifikalar",
    ce_title: "Doğrulayabileceğiniz kalite",
    ce_lead: "Üretimimiz, uluslararası kabul görmüş sertifikalarla belgelenen sıkı kalite kontrolü altında yürür.",
    ce_ph: "Sertifika taraması hazırlanıyor",
    ce_c1: "Kalite Yönetimi", ce_c2: "Gıda Güvenliği", ce_c3: "Çevresel Uyum",
    ce_note: "Sertifika taramaları burada yayımlanacaktır. Siparişinize ilişkin uygunluk belgeleri için doğrudan bize ulaşın.",

    /* contact */
    co_eyebrow: "İletişim",
    co_title: "Ambalajınızı konuşalım",
    co_lead: "Bize telefon, WhatsApp veya e-posta ile ulaşın — ya da teklif isteği gönderin, bir iş günü içinde dönüş yapalım.",
    co_call: "Bizi arayın", co_email: "E-posta gönderin",
    co_hq: "Genel Merkez", co_hq_s: "Gaziantep — Türkiye",
    co_branch: "Şube", co_branch_s: "Suriye — 2024'ten beri",
    co_q_e: "Teklif İsteyin",
    co_q_t: "Ürününüzü anlatın",
    co_f_name: "Ad Soyad", co_f_company: "Firma", co_f_email: "E-posta", co_f_phone: "Telefon / WhatsApp",
    co_f_product: "Ambalajlanacak ürün", co_f_product_ph: "örn. kavrulmuş fıstık, 250 g",
    co_f_msg: "Detaylar", co_f_msg_ph: "Format, ölçüler, adetler, hedef pazar…",
    co_f_send: "İsteği gönder"
  };

  var DICTS = { ar: AR, tr: TR, en: {} };
  var RTL = { ar: true };

  /* snapshot inline EN copy so switching back works */
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    DICTS.en[el.getAttribute("data-i18n")] = el.textContent;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    DICTS.en[el.getAttribute("data-i18n-html")] = el.innerHTML;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
    var parts = el.getAttribute("data-i18n-attr").split(":");
    DICTS.en[parts[1]] = el.getAttribute(parts[0]) || "";
  });

  function apply(lang) {
    var dict = DICTS[lang] || DICTS.en;
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL[lang] ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-html")];
      if (v !== undefined) el.innerHTML = v; /* values are our own static dictionary strings */
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var parts = el.getAttribute("data-i18n-attr").split(":");
      var v = dict[parts[1]];
      if (v !== undefined) el.setAttribute(parts[0], v);
    });
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("affura-lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  /* Arabic is the default; a visitor's explicit choice is remembered */
  var saved = "ar";
  try { saved = localStorage.getItem("affura-lang") || "ar"; } catch (e) {}
  if (saved !== "en") apply(saved);
})();
