// ═══════════════════════════════════════════════════════════
// PEDIGREE DATA — all 20 cases
// Each entry: proband, inheritanceLabel, inheritanceExplainer,
//             members[], connectors[], coupleLines[], siblingLines[],
//             cascade[] (GENA recommendations), layout{}
// ═══════════════════════════════════════════════════════════
window.PEDIGREES = {};

// ─────────────────────────────────────────────────────────
// FAMILY 1 — FATIGUE
// ─────────────────────────────────────────────────────────

// A — Sofia / Iron Deficiency Anemia
window.PEDIGREES['A'] = {
  proband:'Sofia, 34F', diagnosis:'Iron Deficiency Anemia',
  inheritanceLabel:'No hereditary pattern — environmental cause',
  inheritanceExplainer:'Iron deficiency anemia from heavy menstrual bleeding and low dietary iron intake is not a genetic condition. This pedigree shows a healthy family with no relevant hereditary disease. The IUD change 14 months ago — not genetics — explains Sofia\'s presentation.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:260,y2:60,dropX:200,dropY:100}],
  connectors:[],
  siblingLines:[],
  cascade:[],
  members:[
    {id:'mother',name:'Maria, 62F',relation:'Mother',age:'62',sex:'F',status:'unaffected',story:'Healthy. Had three normal pregnancies. No anemia, no hematologic conditions. Mother\'s IUD history is not relevant to Sofia\'s.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'father',name:'Roberto, 65M',relation:'Father',age:'65',sex:'M',status:'unaffected',story:'Healthy. Retired teacher. No hematologic conditions, no chronic illness.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'sofia',name:'Sofia, 34F',relation:'Proband',age:'34',sex:'F',status:'affected',isProband:true,story:'Iron deficiency anemia secondary to heavy menstrual bleeding (IUD-related) and low dietary iron intake. Not a genetic diagnosis.',symptoms:'Hgb 9.8, ferritin 6, MCV 71. Symptomatic fatigue 14 months.',tested:null,clinicalPearl:'The pedigree is unremarkable — confirming this is an environmental, not hereditary, cause of anemia.'},
    {id:'brother',name:'Carlos, 30M',relation:'Brother',age:'30',sex:'M',status:'unaffected',story:'Healthy. No anemia. Males cannot develop iron deficiency from the same mechanism as Sofia — no menstrual losses.',symptoms:null,tested:null,clinicalPearl:null}
  ],
  x:{mother:140,father:260,sofia:170,brother:280}
};
// Fix positions
(function(){
  var p=window.PEDIGREES['A'];
  p.members[0].x=140;p.members[0].y=60;
  p.members[1].x=280;p.members[1].y=60;
  p.members[2].x=170;p.members[2].y=130;
  p.members[3].x=290;p.members[3].y=130;
  p.coupleLines=[{x1:160,y1:60,x2:260,y2:60,dropX:210,dropY:100}];
  p.siblingLines=[{x1:150,y1:100,x2:310,y2:100,y:100,drops:[{x:170,y:130},{x:290,y:130}]}];
})();

// B — Marcus / Fabry Disease (X-linked recessive)
window.PEDIGREES['B'] = {
  proband:'Marcus, 41M', diagnosis:'Fabry Disease (GLA gene)',
  inheritanceLabel:'X-Linked Recessive',
  inheritanceExplainer:'Fabry disease is X-linked — the GLA gene is on the X chromosome. Males with one pathogenic variant are affected. Females with one copy are carriers and may have variable symptoms due to X-inactivation (lyonization). The pattern travels through the maternal line: carrier mothers pass to 50% of sons (affected) and 50% of daughters (carriers). Affected fathers pass to all daughters (obligate carriers) but no sons.',
  layout:{height:300},
  coupleLines:[
    {x1:120,y1:55,x2:240,y2:55,dropX:180,dropY:90},
    {x1:300,y1:55,x2:420,y2:55,dropX:360,dropY:90}
  ],
  siblingLines:[{x1:80,y1:155,x2:440,y2:155,y:155,drops:[{x:100,y:185},{x:200,y:185},{x:320,y:185},{x:440,y:185}]}],
  connectors:[{x1:180,y1:90,x2:180,y2:125},{x1:360,y1:90,x2:360,y2:125}],
  cascade:[
    {name:'Helen (Mother)',relation:'Obligate carrier — GLA heterozygous',test:'GLA gene sequencing + alpha-Gal A enzyme assay',reason:'As mother of an affected male, Helen is an obligate carrier. She has Stage 2 CKD — Fabry females can have significant renal and cardiac involvement due to X-inactivation. Enzyme assay may be normal; sequencing is definitive.',priority:'urgent'},
    {name:'Raul (Brother)',relation:'Brother — 50% risk of being affected',test:'Alpha-galactosidase A enzyme assay, then GLA sequencing if low',reason:'50% chance of inheriting the pathogenic GLA variant from carrier mother. Raul has unexplained CKD — strongly suggests undiagnosed Fabry disease.',priority:'urgent'},
    {name:'Diana (Sister)',relation:'Sister — 50% carrier risk',test:'GLA gene sequencing',reason:'50% chance of being a carrier. Female carriers have variable expression — may have renal, cardiac, or neurologic involvement. Enzyme assay unreliable in females; sequencing required.',priority:'high'},
    {name:'Marcus\'s children',relation:'Children — daughters are obligate carriers',test:'GLA gene sequencing when appropriate age',reason:'All of Marcus\'s daughters will be obligate carriers (X-linked: father passes affected X to all daughters). Sons will be unaffected (father passes Y). Family planning discussion warranted.',priority:'routine'}
  ],
  members:[
    {id:'mat_gf',name:'Eduardo †',relation:'Maternal grandfather',age:'†age 55',sex:'M',deceased:true,status:'affected',story:'Died age 55 of "heart failure." Never diagnosed with Fabry disease. Retrospectively, his early cardiovascular death, reported history of burning pain in his hands, and kidney problems before death are highly consistent with undiagnosed Fabry disease. The diagnosis was available — but no one connected the dots.',symptoms:'Reported: burning hands, kidney disease, early cardiac death',tested:{result:'pending',text:'Never tested. Retrospective diagnosis strongly suspected based on family constellation.'},clinicalPearl:'Undiagnosed Fabry disease in prior generations is the rule, not the exception — 14-year average diagnostic delay.'},
    {id:'mat_gm',name:'Rosa',relation:'Maternal grandmother',age:'78',sex:'F',status:'carrier',story:'Age 78. Mild proteinuria noted on recent labs — attributed to age. Has not been evaluated for Fabry carrier status. As wife of an affected male, she is NOT a carrier — the variant came from her husband\'s side. However, her daughters may be.',symptoms:'Mild proteinuria — significance unclear without testing',tested:null,clinicalPearl:'Maternal grandmother is NOT a carrier — she married into the Fabry variant. Her children\'s carrier status comes from Eduardo.'},
    {id:'mat_uncle',name:'Roberto †',relation:'Maternal uncle',age:'†age 46',sex:'M',deceased:true,status:'affected',story:'Marcus\'s maternal uncle. Died age 46. "He always complained about burning in his hands. And he had kidney problems before he died." This family history — a male maternal relative with burning extremity pain and kidney disease dying in his 40s — is a near-diagnostic constellation for X-linked Fabry disease.',symptoms:'Burning pain in hands, renal failure, died age 46',tested:{result:'pending',text:'Never tested. Clinical history is diagnostic for Fabry disease posthumously.'},clinicalPearl:'This is the single most important family history data point. A male maternal relative with acroparesthesias and kidney disease dying young is Fabry disease until proven otherwise.'},
    {id:'helen',name:'Helen',relation:'Mother — obligate carrier',age:'58',sex:'F',status:'carrier',story:'Marcus\'s mother. Stage 2 CKD (eGFR 58). Mild fatigue. Has been told her kidney disease is "unexplained." As the biological daughter of Eduardo (affected male), Helen is an OBLIGATE carrier — she received one copy of the pathogenic GLA variant from her father. Her CKD is almost certainly Fabry nephropathy.',symptoms:'CKD Stage 2, eGFR 58, fatigue',tested:{result:'carrier',text:'Obligate carrier by inheritance — confirmed carrier. GLA sequencing confirmed c.901C>T heterozygous. Referred to nephrology for Fabry renal assessment.'},clinicalPearl:'X-inactivation (lyonization) means carrier females can have significant disease. Helen\'s CKD should have triggered investigation years ago.'},
    {id:'marcus',name:'Marcus',relation:'Proband — affected',age:'41',sex:'M',status:'affected',isProband:true,story:'41-year-old finance professional. Diagnosed with Fabry disease after 6 years and 3 physicians. Alpha-Gal A 0.3 nmol/hr/mg (critically reduced). GLA c.901C>T pathogenic hemizygous. Now on enzyme replacement therapy. Triggered family cascade testing.',symptoms:'Acroparesthesias since adolescence, angiokeratomas, cornea verticillata, CKD, LVH, hypohidrosis',tested:{result:'positive',text:'Alpha-Gal A 0.3 (critically low). GLA c.901C>T — Pathogenic, hemizygous. INDEX CASE.'},clinicalPearl:'Marcus is the index case. His diagnosis saves his entire family from the same diagnostic odyssey.'},
    {id:'raul',name:'Raul',relation:'Brother — affected (undiagnosed)',age:'38',sex:'M',status:'affected',story:'Marcus\'s brother. Unexplained CKD (eGFR 52). Works as an IT professional. Has never been evaluated for Fabry disease. With 50% probability of inheriting the GLA variant from their carrier mother — and with unexplained CKD at age 38 — Raul almost certainly has undiagnosed Fabry disease.',symptoms:'CKD eGFR 52, mild fatigue — never evaluated for Fabry',tested:{result:'pending',text:'Not yet tested. Urgent referral placed after Marcus\'s diagnosis. Results pending.'},clinicalPearl:'Raul is the case within the case — the sibling with unexplained CKD who has never had a diagnosis. Marcus\'s GENA result should trigger Raul\'s workup immediately.'},
    {id:'diana',name:'Diana',relation:'Sister — carrier (variable)',age:'35',sex:'F',status:'carrier',story:'Marcus\'s sister. Currently asymptomatic. As a daughter of carrier mother Helen, Diana has a 50% chance of being a carrier. Carrier females with Fabry disease have variable expression — some are entirely asymptomatic; others develop significant renal or cardiac disease due to X-inactivation.',symptoms:'None currently — annual surveillance recommended',tested:{result:'carrier',text:'GLA c.901C>T heterozygous — confirmed carrier. Currently asymptomatic. Annual renal, cardiac, and ophthalmologic surveillance initiated.'},clinicalPearl:'Carrier females can range from completely asymptomatic to having as severe disease as affected males. The same variant, different X-inactivation patterns.'}
  ]
};
// Set positions for Marcus/Fabry 3-generation pedigree
(function(){
  var p=window.PEDIGREES['B'];
  p.members[0].x=100;p.members[0].y=55;  // Eduardo (mat gf)
  p.members[1].x=240;p.members[1].y=55;  // Rosa (mat gm)
  p.members[2].x=380;p.members[2].y=55;  // Roberto (mat uncle) †
  p.members[3].x=160;p.members[3].y=155; // Helen (mother, carrier)
  p.members[4].x=280;p.members[4].y=240; // Marcus (proband)
  p.members[5].x=380;p.members[5].y=240; // Raul (brother)
  p.members[6].x=170;p.members[6].y=240; // Diana (sister)
  p.coupleLines=[{x1:120,y1:55,x2:220,y2:55,dropX:170,dropY:95}];
  p.siblingLines=[
    {x1:140,y1:95,x2:400,y2:95,y:95,drops:[{x:160,y:155},{x:380,y:155}]},
    {x1:150,y1:205,x2:400,y2:205,y:205,drops:[{x:170,y:240},{x:280,y:240},{x:380,y:240}]}
  ];
  p.connectors=[{x1:170,y1:95,x2:170,y2:125},{x1:160,y1:175,x2:160,y2:205}];
  p.layout.height=290;
})();

// D1 — Priya / Hypothyroidism
window.PEDIGREES['D1'] = {
  proband:'Priya, 29F', diagnosis:'Hashimoto\'s Thyroiditis',
  inheritanceLabel:'Polygenic autoimmune predisposition',
  inheritanceExplainer:'Hashimoto\'s thyroiditis has a strong familial component — first-degree relatives have a significantly elevated risk. However, it is not a single-gene disorder with Mendelian inheritance. Multiple HLA and non-HLA genes contribute to autoimmune thyroid disease risk. Having a first-degree relative with Hashimoto\'s or Graves\' disease increases your lifetime risk approximately 3-5 fold.',
  layout:{height:170},
  coupleLines:[{x1:140,y1:60,x2:280,y2:60,dropX:210,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:310,y2:100,y:100,drops:[{x:180,y:140},{x:300,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'mother',name:'Anita, 55F',relation:'Mother',age:'55',sex:'F',status:'affected',story:'Has Hashimoto\'s thyroiditis — diagnosed at age 42. On levothyroxine. She is the key family history data point. Priya knew about her mother\'s thyroid condition but never connected it to her own symptoms.',symptoms:'Hashimoto\'s thyroiditis, on levothyroxine 88mcg daily',tested:{result:'positive',text:'Anti-TPO positive, TSH elevated. Diagnosed age 42, well-controlled on levothyroxine.'},clinicalPearl:'First-degree relative with Hashimoto\'s raises Priya\'s pre-test probability substantially — this family history should trigger early TSH screening.'},
    {id:'father',name:'Vijay, 58M',relation:'Father',age:'58',sex:'M',status:'unaffected',story:'Healthy. No thyroid disease. No autoimmune conditions.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'priya',name:'Priya, 29F',relation:'Proband',age:'29',sex:'F',status:'affected',isProband:true,story:'29-year-old medical student. Attributed 18 months of fatigue, weight gain, cold intolerance, and hair loss to medical school stress. TSH 14.2, Anti-TPO 480 — confirmed Hashimoto\'s thyroiditis. Started on levothyroxine.',symptoms:'TSH 14.2, Free T4 0.6, Anti-TPO 480, HR 58',tested:{result:'positive',text:'TSH 14.2 (markedly elevated), Anti-TPO 480. Hashimoto\'s thyroiditis confirmed. INDEX CASE.'},clinicalPearl:'Priya is a medical student who knew the symptoms of hypothyroidism and still attributed them to stress. The family history of her mother\'s thyroid disease was the highest-value pre-test probability modifier.'},
    {id:'brother',name:'Arjun, 26M',relation:'Brother',age:'26',sex:'M',status:'unaffected',story:'Currently asymptomatic. Given family history (mother + sister with Hashimoto\'s), annual TSH screening is recommended as he ages. Males develop autoimmune thyroid disease at lower rates than females but are not protected.',symptoms:null,tested:{result:'pending',text:'Annual TSH screening recommended given family history.'},clinicalPearl:null}
  ]
};

// E1 — James / Obstructive Sleep Apnea
window.PEDIGREES['E1'] = {
  proband:'James, 52M', diagnosis:'Obstructive Sleep Apnea',
  inheritanceLabel:'Familial clustering — not single-gene',
  inheritanceExplainer:'OSA has a familial component — craniofacial structure, obesity predisposition, and upper airway anatomy all have genetic contributions. However, OSA is not a Mendelian genetic disorder. The pedigree here shows familial snoring and obesity-related sleep-disordered breathing but no hereditary rare disease pattern. GENA is not indicated.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:280,y2:60,dropX:210,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:310,y2:100,y:100,drops:[{x:180,y:140},{x:300,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'Harold Sr, 78M',relation:'Father',age:'78',sex:'M',status:'affected',story:'James\'s father. Heavy snorer his entire adult life. Wife always complained. Never formally diagnosed but almost certainly had OSA. Died of MI at age 72 — cardiovascular risk compounded by untreated OSA is well-established.',symptoms:'Lifelong heavy snoring, cardiovascular death age 72',tested:null,clinicalPearl:'Untreated OSA increases cardiovascular risk. James\'s father\'s death from MI may have been partly driven by decades of untreated nocturnal hypoxemia.'},
    {id:'mother',name:'Dorothy, 75F',relation:'Mother',age:'75',sex:'F',status:'unaffected',story:'Healthy. No snoring. No OSA. Moved to the spare room to escape her husband\'s snoring — a 40-year tradition James has now continued with his own wife.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'james',name:'James, 52M',relation:'Proband',age:'52',sex:'M',status:'affected',isProband:true,story:'52-year-old high school teacher. AHI 38 (severe OSA), SpO2 nadir 82%. Referred for CPAP titration. Family history of paternal snoring and cardiovascular death is consistent with familial OSA clustering.',symptoms:'AHI 38, SpO2 nadir 82%, daytime somnolence, BP 148/88',tested:{result:'positive',text:'Home sleep test: AHI 38, severe OSA. CPAP initiated.'},clinicalPearl:'The pedigree here is instructive not for rare disease — but for showing that OSA clusters in families through shared anatomy and metabolic risk.'},
    {id:'brother',name:'Tom, 48M',relation:'Brother',age:'48',sex:'M',status:'unaffected',story:'Slightly overweight but no reported snoring. Has not been evaluated for OSA. Family history warrants screening.',symptoms:'Not evaluated',tested:{result:'pending',text:'OSA screening recommended given family history and risk factors.'},clinicalPearl:null}
  ]
};

// Raymond — Multiple Myeloma
window.PEDIGREES['Raymond'] = {
  proband:'Raymond, 68M', diagnosis:'Multiple Myeloma',
  inheritanceLabel:'Sporadic — not hereditary',
  inheritanceExplainer:'Multiple myeloma is not typically a hereditary cancer syndrome. The vast majority of cases are sporadic. While rare familial clustering has been reported, standard genetic testing for inherited risk is not recommended in typical myeloma. The pedigree here shows no relevant family cancer history. Raymond\'s myeloma is explained by his age (median diagnosis age 69) and sporadic somatic mutations — not inherited predisposition.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:280,y2:60,dropX:210,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:310,y2:100,y:100,drops:[{x:180,y:140},{x:300,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'William †',relation:'Father',age:'†age 81',sex:'M',deceased:true,status:'unaffected',story:'Died age 81 of pneumonia. No cancer history. No hematologic conditions.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'mother',name:'Edna †',relation:'Mother',age:'†age 79',sex:'F',deceased:true,status:'unaffected',story:'Died age 79 of congestive heart failure. No cancer history.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'raymond',name:'Raymond, 68M',relation:'Proband',age:'68',sex:'M',status:'affected',isProband:true,story:'68-year-old retired accountant. Diagnosed with symptomatic multiple myeloma — all CRAB criteria present. Unintentional 12-lb weight loss, frothy urine, bone pain. No family history of hematologic malignancy.',symptoms:'CRAB criteria: Ca 11.4, Cr 1.9, Hgb 9.2, T10 lytic lesion. M-spike 3.2 g/dL.',tested:{result:'positive',text:'Bone marrow biopsy: 45% plasma cells. IgG kappa M-spike. FISH cytogenetics pending. INDEX CASE.'},clinicalPearl:'The pedigree is unremarkable — confirming this is sporadic myeloma, not a hereditary syndrome. No cascade genetic testing indicated for family members.'},
    {id:'sister',name:'Beverly, 65F',relation:'Sister',age:'65',sex:'F',status:'unaffected',story:'Healthy. No cancer history. No hematologic conditions. No cascade testing indicated.',symptoms:null,tested:null,clinicalPearl:null}
  ]
};

// ─────────────────────────────────────────────────────────
// FAMILY 2 — RECURRENT INFECTIONS
// ─────────────────────────────────────────────────────────

// C — Liam / XLA
window.PEDIGREES['C'] = {
  proband:'Liam, 5M', diagnosis:'X-Linked Agammaglobulinemia (BTK)',
  inheritanceLabel:'X-Linked Recessive',
  inheritanceExplainer:'XLA is X-linked recessive — caused by pathogenic BTK variants on the X chromosome. Males with one copy are fully affected (hemizygous). Carrier females (one normal + one pathogenic X) are asymptomatic. The inheritance travels through the maternal line. Carrier mothers have a 50% chance of passing the affected X to each son (affected) and each daughter (carrier). The maternal uncle\'s death from childhood infections is the critical historical clue.',
  layout:{height:280},
  coupleLines:[{x1:120,y1:55,x2:240,y2:55,dropX:180,dropY:90}],
  siblingLines:[
    {x1:100,y1:90,x2:340,y2:90,y:90,drops:[{x:120,y:155},{x:250,y:155},{x:340,y:155}]},
    {x1:80,y1:210,x2:180,y2:210,y:210,drops:[{x:100,y:240}]}
  ],
  connectors:[{x1:120,y1:175,x2:120,y2:210}],
  cascade:[
    {name:'Sarah (Mother)',relation:'Obligate carrier — BTK heterozygous',test:'BTK gene sequencing',reason:'As mother of an affected male, Sarah is an obligate carrier. She is asymptomatic (X-linked carriers are protected by their second normal X). Carrier testing confirms the variant for family planning counseling.',priority:'high'},
    {name:'Sarah\'s brothers',relation:'Maternal uncles — 50% risk of being affected',test:'BTK enzyme (BTK protein expression) or BTK sequencing',reason:'Sarah\'s brothers each had a 50% chance of inheriting the pathogenic BTK variant from their carrier mother (Liam\'s maternal grandmother). One maternal uncle already died of childhood infections — likely affected. Any living maternal brothers should be evaluated.',priority:'urgent'},
    {name:'Future pregnancies',relation:'Prenatal / preimplantation genetic testing',test:'Prenatal BTK sequencing or PGT-M',reason:'50% of future male pregnancies will be affected. 50% of female pregnancies will be carriers. Genetic counseling for family planning strongly recommended.',priority:'high'}
  ],
  members:[
    {id:'mat_gf',name:'Thomas, 72M',relation:'Maternal grandfather',age:'72',sex:'M',status:'unaffected',story:'Age 72. Healthy. No immune conditions. Not a carrier — XLA travels through females, not males. Thomas married into the family.',symptoms:null,tested:null,clinicalPearl:'In X-linked conditions, the maternal grandfather is NOT a carrier. The variant entered the family through the maternal grandmother.'},
    {id:'mat_gm',name:'Ellen, 70F',relation:'Maternal grandmother',age:'70',sex:'F',status:'carrier',story:'Age 70. Asymptomatic carrier of the pathogenic BTK variant. Had one son (the maternal uncle) who died of a chest infection at age 8 in another country — almost certainly XLA. She passed the variant to her daughter Sarah.',symptoms:'Asymptomatic — X-linked carrier females are protected by their second normal X',tested:{result:'carrier',text:'BTK sequencing confirmed heterozygous c.1684T>C carrier. Asymptomatic.'},clinicalPearl:'Ellen\'s son (maternal uncle) dying of childhood infections at age 8 was the diagnostic key. This family history was available — but no one asked about it for 5 years.'},
    {id:'mat_uncle',name:'James †',relation:'Maternal uncle',age:'†age 8',sex:'M',deceased:true,status:'affected',story:'Died at age 8 in another country of "a chest infection." Almost certainly had XLA — the same condition as Liam. The family never received a diagnosis. This death, if known to Liam\'s physicians, would have triggered immune workup immediately.',symptoms:'Recurrent bacterial infections, died of chest infection age 8',tested:{result:'pending',text:'Never diagnosed or tested. Retrospective diagnosis almost certain based on family pattern.'},clinicalPearl:'This is the most important family history finding. A male maternal relative who died of childhood infections = X-linked immune deficiency until proven otherwise.'},
    {id:'sarah',name:'Sarah K.',relation:'Mother — obligate carrier',age:'34',sex:'F',status:'carrier',story:'Liam\'s mother. Asymptomatic carrier of the BTK variant — she received one pathogenic X from her mother Ellen and one normal X from her father Thomas. She has no immune symptoms (her normal X compensates).',symptoms:'None — asymptomatic carrier',tested:{result:'carrier',text:'BTK c.1684T>C heterozygous — obligate carrier confirmed by family analysis.'},clinicalPearl:'Carrier females for X-linked conditions are almost always asymptomatic. Sarah had no way to know she was carrying this variant before Liam\'s diagnosis.'},
    {id:'father',name:'David K.',relation:'Father',age:'36',sex:'M',status:'unaffected',story:'Healthy. No immune conditions. Cannot contribute to XLA — Liam inherited his pathogenic X from his mother, not his father (Liam has X from mother, Y from father).',symptoms:null,tested:null,clinicalPearl:'In X-linked conditions, fathers cannot be carriers or pass the condition to sons.'},
    {id:'liam',name:'Liam, 5M',relation:'Proband — affected',age:'5',sex:'M',status:'affected',isProband:true,story:'5-year-old boy. Three bacterial pneumonias in 18 months — all requiring antibiotics. Absent tonsils on exam (absent B cells = no lymphoid tissue = no tonsils). BTK c.1684T>C pathogenic, hemizygous. Now on monthly IVIG.',symptoms:'IgG <100, IgA absent, IgM absent, B cells 0% on flow cytometry. Absent tonsils.',tested:{result:'positive',text:'BTK c.1684T>C — Pathogenic, hemizygous. INDEX CASE. Monthly IVIG initiated.'},clinicalPearl:'Absent tonsils on exam was the physical finding that should have triggered immune investigation at the first or second pneumonia.'}
  ]
};
(function(){
  var p=window.PEDIGREES['C'];
  p.members[0].x=100;p.members[0].y=55;
  p.members[1].x=240;p.members[1].y=55;
  p.members[2].x=360;p.members[2].y=55;
  p.members[3].x=120;p.members[3].y=155;
  p.members[4].x=240;p.members[4].y=155;
  p.members[5].x=100;p.members[5].y=245;
  p.coupleLines=[{x1:120,y1:55,x2:220,y2:55,dropX:170,dropY:90},{x1:140,y1:155,x2:220,y2:155,dropX:180,dropY:195}];
  p.siblingLines=[{x1:100,y1:90,x2:360,y2:90,y:90,drops:[{x:120,y:155},{x:360,y:155}]}];
  p.connectors=[{x1:170,y1:90,x2:170,y2:125}];
  p.layout.height=280;
})();

// D — Noah / Normal Immunity
window.PEDIGREES['D'] = {
  proband:'Noah, 4M', diagnosis:'Normal immune response — viral URIs',
  inheritanceLabel:'No hereditary immune condition',
  inheritanceExplainer:'Noah\'s recurrent viral URIs represent normal immune development for a child in daycare. This pedigree shows a completely healthy family with no immune deficiency, no recurrent infections requiring hospitalization, no absent tonsils, no abnormal lymph nodes — and a sibling getting sick at the same rate. The pedigree itself is the reassuring finding.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:280,y2:60,dropX:210,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:340,y2:100,y:100,drops:[{x:170,y:140},{x:310,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'Mark B., 38M',relation:'Father',age:'38',sex:'M',status:'unaffected',story:'Healthy. No immune conditions. No recurrent infections. No hospitalizations.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'mother',name:'Emily B., 36F',relation:'Mother',age:'36',sex:'F',status:'unaffected',story:'Healthy. No immune conditions. Emily is the anxious parent in this case — appropriately worried, but bringing in a healthy child with normal daycare-related illness.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'noah',name:'Noah, 4M',relation:'Proband',age:'4',sex:'M',status:'unaffected',isProband:true,story:'4-year-old boy in daycare. Three urgent care visits this year — two viral URIs and one otitis media. Fully vaccinated. Growing normally at 55th percentile. Normal tonsils. Normal immunoglobulins. NORMAL immune function.',symptoms:'Viral URIs, one otitis media — all self-resolving. Normal IgG, CBC.',tested:{result:'negative',text:'IgG 780 mg/dL (normal), IgA 85 (normal), IgM 95 (normal). Normal immune function confirmed.'},clinicalPearl:'The normal tonsils on exam and the sibling getting sick at the same rate are the two most reassuring clinical findings.'},
    {id:'sister',name:'Olivia, 6F',relation:'Sister',age:'6',sex:'F',status:'unaffected',story:'6-year-old sister. Attends the same daycare. Gets sick at approximately the same rate as Noah — confirming an environmental (daycare) rather than immunologic explanation.',symptoms:'Same illness rate as Noah at same daycare — confirms environmental cause',tested:null,clinicalPearl:'When a sibling at the same school has the same illness frequency, the cause is environmental, not immunologic.'}
  ]
};

// C2 — Elena / CVID
window.PEDIGREES['C2'] = {
  proband:'Elena, 28F', diagnosis:'Common Variable Immune Deficiency (CVID)',
  inheritanceLabel:'Complex — mostly sporadic; ~10-20% monogenic',
  inheritanceExplainer:'CVID is the most common symptomatic primary immune deficiency in adults. Most cases (~80-90%) are sporadic with no identified single gene cause. Approximately 10-20% have an identifiable monogenic cause (TNFRSF13B/TACI, IKBKG, NFKB1, and others). First-degree relatives of CVID patients have modestly elevated risk. Unlike XLA, which has a single clear gene, CVID is a heterogeneous syndrome.',
  layout:{height:170},
  coupleLines:[{x1:140,y1:60,x2:280,y2:60,dropX:210,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:310,y2:100,y:100,drops:[{x:190,y:140},{x:300,y:140}]}],
  connectors:[],
  cascade:[
    {name:'Parents',relation:'First-degree relatives',test:'Immunoglobulin levels (IgG, IgA, IgM) + vaccine titers',reason:'First-degree relatives of CVID patients have modestly elevated risk. Screening immunoglobulin levels are reasonable. Genetic testing guided by any monogenic cause identified in Elena.',priority:'routine'},
    {name:'Elena\'s genetic testing',relation:'Proband — extended workup',test:'CVID gene panel (TNFRSF13B, NFKB1, IKBKG, CTLA4, PIK3CD, others)',reason:'Identifying a monogenic cause in Elena changes cascade testing and may influence treatment. ~10-20% of CVID patients have an identifiable variant.',priority:'high'}
  ],
  members:[
    {id:'father',name:'Carlos V., 58M',relation:'Father',age:'58',sex:'M',status:'unaffected',story:'Healthy. No recurrent infections. No immune deficiency. No autoimmune conditions.',symptoms:null,tested:{result:'pending',text:'Immunoglobulin screening recommended given Elena\'s diagnosis.'},clinicalPearl:null},
    {id:'mother',name:'Maria V., 55F',relation:'Mother',age:'55',sex:'F',status:'unaffected',story:'Healthy. No immune conditions. No autoimmune disease. One episode of pneumonia in her 40s treated outpatient.',symptoms:null,tested:{result:'pending',text:'Immunoglobulin screening recommended.'},clinicalPearl:null},
    {id:'elena',name:'Elena, 28F',relation:'Proband',age:'28',sex:'F',status:'affected',isProband:true,story:'28-year-old teacher. Four bacterial sinus infections in 18 months + one hospitalized pneumonia at age 25. Healthy childhood — adult onset distinguishes CVID from XLA. IgG 280, B cells present but memory B cells <1%, vaccine titers non-protective.',symptoms:'IgG 280, IgA 18, IgM 22. B cells present but non-functional memory B cells.',tested:{result:'positive',text:'CVID confirmed: IgG 280, vaccine titers non-protective, memory B cells <1%. On SCIG replacement. INDEX CASE.'},clinicalPearl:'Adult onset (not childhood) is the defining feature of CVID vs XLA. Elena was healthy through childhood — her immune deficiency began in her early 20s.'},
    {id:'brother',name:'Miguel, 25M',relation:'Brother',age:'25',sex:'M',status:'unaffected',story:'Appears healthy. No recurrent infections. Given Elena\'s diagnosis of CVID, immunoglobulin screening is reasonable in first-degree relatives.',symptoms:null,tested:{result:'pending',text:'IgG/IgA/IgM screening recommended as first-degree relative of CVID patient.'},clinicalPearl:null}
  ]
};

// D2 — Carlos / Recurrent MRSA
window.PEDIGREES['D2'] = {
  proband:'Carlos, 19M', diagnosis:'Recurrent MRSA — normal immunity',
  inheritanceLabel:'No hereditary immune condition — environmental',
  inheritanceExplainer:'Carlos\'s recurrent MRSA skin infections are an environmental and microbiological problem, not a genetic immune deficiency. His teammates also have MRSA infections — confirming community transmission in a contact sport. The pedigree shows a healthy family with no immune deficiency. The pedigree itself teaches: when the environment explains the pattern, stop looking for genetics.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:280,y2:60,dropX:210,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:320,y2:100,y:100,drops:[{x:180,y:140},{x:310,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'Hector M., 46M',relation:'Father',age:'46',sex:'M',status:'unaffected',story:'Healthy. No recurrent infections. No immune conditions.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'mother',name:'Rosa M., 44F',relation:'Mother',age:'44',sex:'F',status:'unaffected',story:'Healthy. No immune conditions. No recurrent infections.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'carlos',name:'Carlos, 19M',relation:'Proband',age:'19',sex:'M',status:'unaffected',isProband:true,story:'19-year-old college wrestler. Three cellulitis episodes in 2 years — all MRSA. Nasal MRSA carrier confirmed. Normal immune function. Environmental/microbiological cause identified. Decolonization protocol initiated.',symptoms:'Recurrent MRSA skin infections — all skin-limited, no systemic infections, normal IgG and CBC',tested:{result:'negative',text:'IgG, IgA, IgM all normal. CBC normal. MRSA carrier confirmed — cause is environmental.'},clinicalPearl:'A well athlete who is completely healthy between skin episodes and has never had a pneumonia or sinusitis does not have immune deficiency.'},
    {id:'sister',name:'Maria, 16F',relation:'Sister',age:'16',sex:'F',status:'unaffected',story:'Healthy. No skin infections. No immune conditions. Not a contact sport athlete — environmental risk factor is Carlos\'s wrestling, not a familial immune vulnerability.',symptoms:null,tested:null,clinicalPearl:null}
  ]
};

// E2 — Derek / Cystic Fibrosis
window.PEDIGREES['E2'] = {
  proband:'Derek, 34M', diagnosis:'Cystic Fibrosis (CFTR F508del/R117H)',
  inheritanceLabel:'Autosomal Recessive',
  inheritanceExplainer:'Cystic fibrosis is autosomal recessive — two pathogenic CFTR variants required for disease. Derek\'s compound heterozygosity (F508del from one parent, R117H from the other) means each parent is a carrier of one CFTR variant. Both parents are phenotypically normal — carriers are asymptomatic. Each child of two CFTR carriers has a 25% chance of being affected, 50% chance of being a carrier, and 25% chance of inheriting neither variant.',
  layout:{height:200},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:130,y1:100,x2:360,y2:100,y:100,drops:[{x:150,y:140},{x:260,y:140},{x:360,y:140}]}],
  connectors:[],
  cascade:[
    {name:'Father (Tom)',relation:'CFTR carrier — F508del',test:'CFTR sequencing for F508del confirmed',reason:'Tom carries F508del. His other children each had a 25% chance of CF and 50% chance of being carriers.',priority:'high'},
    {name:'Mother (Linda)',relation:'CFTR carrier — R117H',test:'CFTR sequencing for R117H confirmed',reason:'Linda carries R117H (mild CFTR variant). Her other children each had a 50% carrier risk.',priority:'high'},
    {name:'Siblings',relation:'50% carrier risk each',test:'CFTR carrier testing',reason:'Each sibling has 25% chance of being affected (like Derek), 50% of being a carrier, 25% unaffected non-carrier. Carriers are important to identify for family planning.',priority:'high'},
    {name:'Derek\'s wife',relation:'Partner — carrier screening',test:'CFTR 40-mutation panel or full sequencing',reason:'If Derek\'s wife is a CFTR carrier, their children have a 50% chance of CF. CFTR carrier screening is standard preconception care.',priority:'urgent'}
  ],
  members:[
    {id:'father',name:'Tom M., 62M',relation:'Father — CFTR carrier',age:'62',sex:'M',status:'carrier',story:'Healthy. Asymptomatic CFTR F508del carrier. Has never had pulmonary symptoms. Carriers have one functioning CFTR copy — sufficient for normal lung and GI function.',symptoms:'None — asymptomatic carrier',tested:{result:'carrier',text:'CFTR F508del heterozygous carrier — confirmed after Derek\'s diagnosis.'},clinicalPearl:'Carriers of CFTR variants are completely healthy. Tom had no symptoms and no reason to suspect he carried a CF variant.'},
    {id:'mother',name:'Linda M., 60F',relation:'Mother — CFTR carrier',age:'60',sex:'F',status:'carrier',story:'Healthy. Asymptomatic CFTR R117H carrier. R117H is a class IV (reduced function) variant — even milder than F508del. Heterozygous carriers of R117H are completely asymptomatic.',symptoms:'None — asymptomatic R117H carrier',tested:{result:'carrier',text:'CFTR R117H heterozygous carrier — confirmed after Derek\'s diagnosis.'},clinicalPearl:'R117H is a mild CFTR variant. In compound heterozygosity with F508del (as in Derek), it causes CF — but with milder phenotype than F508del/F508del.'},
    {id:'derek',name:'Derek, 34M',relation:'Proband — affected',age:'34',sex:'M',status:'affected',isProband:true,story:'34 years undiagnosed. Recurrent Pseudomonas pneumonias since age 2, digital clubbing, BMI 17.8, azoospermia (CBAVD). Sweat chloride 68 (diagnostic). CFTR F508del/R117H compound heterozygote. Trikafta eligible.',symptoms:'FEV1 55%, Pseudomonas colonization, CBAVD, BMI 17.8',tested:{result:'positive',text:'Sweat chloride 68. CFTR F508del/R117H compound heterozygote. INDEX CASE. Trikafta initiated.'},clinicalPearl:'Derek\'s mild phenotype (pancreatic-sufficient, later diagnosis) is explained by R117H — a milder CFTR variant that preserved some residual CFTR function.'},
    {id:'sister1',name:'Amy, 31F',relation:'Sister',age:'31',sex:'F',status:'carrier',story:'Tested after Derek\'s diagnosis. CFTR carrier — inherited F508del from father. Asymptomatic. No CF. Referred for preconception CFTR carrier screening of her partner.',symptoms:'None — F508del heterozygous carrier',tested:{result:'carrier',text:'CFTR F508del heterozygous — carrier. Partner screening recommended before pregnancy.'},clinicalPearl:null},
    {id:'brother',name:'Kevin, 28M',relation:'Brother',age:'28',sex:'M',status:'unaffected',story:'Tested after Derek\'s diagnosis. Did not inherit either CFTR variant from parents. Unaffected and not a carrier.',symptoms:'None',tested:{result:'negative',text:'CFTR sequencing: no pathogenic variants detected. Not a carrier.'},clinicalPearl:null}
  ]
};
(function(){
  var p=window.PEDIGREES['E2'];
  p.members[0].x=140;p.members[0].y=60;
  p.members[1].x=300;p.members[1].y=60;
  p.members[2].x=150;p.members[2].y=150;
  p.members[3].x=270;p.members[3].y=150;
  p.members[4].x=380;p.members[4].y=150;
  p.coupleLines=[{x1:160,y1:60,x2:280,y2:60,dropX:220,dropY:95}];
  p.siblingLines=[{x1:130,y1:95,x2:400,y2:95,y:95,drops:[{x:150,y:150},{x:270,y:150},{x:380,y:150}]}];
  p.layout.height=195;
})();

// ─────────────────────────────────────────────────────────
// FAMILY 3 — DEVELOPMENTAL CONCERNS
// ─────────────────────────────────────────────────────────

// A3 — Aiden / Down Syndrome
window.PEDIGREES['A3'] = {
  proband:'Aiden, 3M', diagnosis:'Down Syndrome (Trisomy 21)',
  inheritanceLabel:'Chromosomal — de novo trisomy 21',
  inheritanceExplainer:'Down syndrome due to standard trisomy 21 (non-disjunction) is not inherited — it arises as a new chromosomal event (de novo) during formation of the egg or sperm. The risk increases significantly with maternal age (1 in 1,000 at age 30; 1 in 100 at age 40; 1 in 30 at age 45). Jennifer was 35 when Aiden was born — in the age range where screening is recommended. Recurrence risk for standard trisomy 21 is approximately 1% above the age-related risk.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:340,y2:100,y:100,drops:[{x:200,y:140},{x:330,y:140}]}],
  connectors:[],
  cascade:[
    {name:'Jennifer & Michael',relation:'Parents — recurrence counseling',test:'Chromosomal analysis to exclude translocation Down syndrome',reason:'If Aiden\'s trisomy 21 is standard (non-disjunction), recurrence risk is ~1% above age-related risk. If translocation DS, parental karyotype is essential — carrier parent confers much higher recurrence risk. Genetic counseling recommended.',priority:'high'}
  ],
  members:[
    {id:'father',name:'Michael C., 38M',relation:'Father',age:'38',sex:'M',status:'unaffected',story:'Healthy. Normal chromosomes. No family history of Down syndrome. Chromosomal karyotype obtained after Aiden\'s diagnosis — normal 46,XY.',symptoms:null,tested:{result:'negative',text:'Parental karyotype: 46,XY — normal. Standard trisomy 21 (non-disjunction) confirmed.'},clinicalPearl:null},
    {id:'mother',name:'Jennifer C., 38F',relation:'Mother',age:'38',sex:'F',status:'unaffected',story:'Was 35 at Aiden\'s birth. Prenatal screening was offered but declined. Normal chromosomes — standard trisomy 21 arises from non-disjunction during meiosis, not from a parental chromosomal abnormality.',symptoms:null,tested:{result:'negative',text:'Parental karyotype: 46,XX — normal. Age-related non-disjunction confirmed as mechanism.'},clinicalPearl:'Advanced maternal age at delivery (35+) is associated with increased non-disjunction risk. Prenatal screening was available and declined — a counseling opportunity.'},
    {id:'aiden',name:'Aiden, 3M',relation:'Proband',age:'3',sex:'M',status:'affected',isProband:true,story:'3-year-old with Trisomy 21, diagnosed at birth. AV canal repair at 6 months. On levothyroxine for hypothyroidism. Conductive hearing loss 25dB bilateral identified at this visit — contributing to speech delay.',symptoms:'10 words at age 3 (expected 50+). Conductive hearing loss 25dB. Hypothyroidism on levothyroxine.',tested:{result:'positive',text:'Karyotype: 47,XX,+21 — Trisomy 21. INDEX CASE.'},clinicalPearl:'The pedigree teaches that de novo trisomy 21 comes from the egg/sperm, not from parental chromosomal rearrangement — parents have normal chromosomes.'},
    {id:'sister',name:'Ella, 6F',relation:'Sister',age:'6',sex:'F',status:'unaffected',story:'Healthy 6-year-old. Normal development. Normal chromosomes. No surveillance needed.',symptoms:null,tested:null,clinicalPearl:null}
  ]
};

// B3 — Lily / Rett Syndrome
window.PEDIGREES['B3'] = {
  proband:'Lily, 18M', diagnosis:'Rett Syndrome (MECP2 gene)',
  inheritanceLabel:'X-Linked — de novo in 99% of cases',
  inheritanceExplainer:'Rett syndrome is caused by pathogenic MECP2 variants on the X chromosome. In ~99% of cases, the variant is de novo (new mutation) — not inherited from either parent. Both parents have normal chromosomes and normal MECP2. Recurrence risk is less than 1% for future pregnancies (the very small risk comes from germline mosaicism — where a small percentage of the mother\'s eggs carry the variant without her blood cells showing it). MECP2 mutations in males are almost always lethal — which is why Rett syndrome occurs almost exclusively in females.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:310,y2:100,y:100,drops:[{x:200,y:140}]}],
  connectors:[],
  cascade:[
    {name:'Michelle (Mother)',relation:'Rule out germline mosaicism',test:'MECP2 sequencing on blood + consider ovarian tissue testing if planning future pregnancies',reason:'Although de novo, germline mosaicism (~1% risk) means the variant could be present in some of Michelle\'s eggs without appearing in her blood. Sequencing blood is standard; more sensitive testing available if future pregnancies are planned.',priority:'high'}
  ],
  members:[
    {id:'father',name:'James H., 40M',relation:'Father',age:'40',sex:'M',status:'unaffected',story:'Healthy. Normal MECP2. The de novo mutation occurred in Lily — not inherited from either parent.',symptoms:null,tested:{result:'negative',text:'MECP2 sequencing: no pathogenic variant. Normal.'},clinicalPearl:null},
    {id:'mother',name:'Michelle H., 38F',relation:'Mother',age:'38',sex:'F',status:'unaffected',story:'Healthy. Normal MECP2 in blood. The de novo MECP2 variant arose during formation of the egg that became Lily — or very early in Lily\'s embryonic development. Michelle did nothing to cause this.',symptoms:'None — normal MECP2',tested:{result:'negative',text:'MECP2 sequencing: no pathogenic variant in blood. Germline mosaicism <1% risk for future pregnancies.'},clinicalPearl:'Mothers of children with de novo MECP2 variants should be counseled about the small (<1%) risk of germline mosaicism — a variant present in some eggs but not detectable in blood.'},
    {id:'lily',name:'Lily, 18M',relation:'Proband',age:'18mo',sex:'F',status:'affected',isProband:true,story:'18-month-old girl. Normal development to 15 months, then true regression. Lost 6 words. Hand-wringing stereotypies. Acquired microcephaly (HC 50th→35th %ile). Irregular breathing. MECP2 c.916C>T (p.Arg306Cys) — pathogenic, de novo.',symptoms:'HC deceleration, hand-wringing stereotypies, regression, irregular breathing',tested:{result:'positive',text:'MECP2 c.916C>T — Pathogenic, de novo. Rett syndrome confirmed. INDEX CASE.'},clinicalPearl:'De novo mutations arise from scratch — they are not inherited. The pedigree with two unaffected parents and one affected child is the characteristic Rett pedigree.'}
  ]
};

// C3 — Noah P. / ASD + 16p11.2
window.PEDIGREES['C3'] = {
  proband:'Noah P., 4M', diagnosis:'ASD Level 2 + 16p11.2 microdeletion',
  inheritanceLabel:'Chromosomal — 16p11.2 microdeletion (de novo vs inherited)',
  inheritanceExplainer:'16p11.2 microdeletion can arise de novo (new mutation) or be inherited from a parent who may be mildly affected or unaffected (variable expressivity). Parental chromosomal microarray is essential to determine recurrence risk: if de novo, recurrence risk is <1%; if one parent carries the deletion, each pregnancy has a 50% chance of inheriting it. The deletion shows variable expressivity — a parent may carry it with no intellectual disability while the child has ASD.',
  layout:{height:170},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:160,y1:100,x2:240,y2:100,y:100,drops:[{x:200,y:140}]}],
  connectors:[],
  cascade:[
    {name:'Robert (Father)',relation:'Parental microarray — critical',test:'Chromosomal microarray 16p11.2 region',reason:'If Robert carries the 16p11.2 deletion (with possible mild phenotype), recurrence risk for future pregnancies is 50%. If de novo in Noah, recurrence risk is <1%.',priority:'urgent'},
    {name:'Lisa (Mother)',relation:'Parental microarray',test:'Chromosomal microarray 16p11.2 region',reason:'Same rationale as father — determines whether deletion is inherited or de novo.',priority:'urgent'}
  ],
  members:[
    {id:'father',name:'Robert P., 38M',relation:'Father',age:'38',sex:'M',status:'unknown',story:'History of attention difficulties as a child — never formally diagnosed with ADHD or ASD. Slightly large head circumference noted on chart review. Chromosomal microarray pending — he may be a carrier of the 16p11.2 deletion with a milder phenotype.',symptoms:'Possible mild ADHD features — never formally evaluated',tested:{result:'pending',text:'Chromosomal microarray pending. Key question: is the 16p11.2 deletion de novo in Noah or inherited from Robert?'},clinicalPearl:'16p11.2 deletions show variable expressivity. A parent can carry the deletion with no intellectual disability while their child has ASD. This is why parental testing is essential.'},
    {id:'mother',name:'Lisa P., 36F',relation:'Mother',age:'36',sex:'F',status:'unaffected',story:'Healthy. No developmental concerns. No ASD features. No learning disabilities.',symptoms:null,tested:{result:'pending',text:'Chromosomal microarray pending.'},clinicalPearl:null},
    {id:'noah',name:'Noah, 4M',relation:'Proband',age:'4',sex:'M',status:'affected',isProband:true,story:'4-year-old boy. ASD Level 2 — limited joint attention from the start, no regression. Macrocephaly (HC >97th %ile). 16p11.2 microdeletion 593kb on chromosomal microarray. Co-occurring dyslexia on neuropsychological testing. IQ 88.',symptoms:'ASD Level 2, macrocephaly, co-occurring dyslexia. 16p11.2 microdeletion.',tested:{result:'positive',text:'Chromosomal microarray: 16p11.2 microdeletion 593kb. ADOS-2: ASD Level 2. INDEX CASE.'},clinicalPearl:'Macrocephaly in ASD is a flag for 16p11.2 deletion (and PTEN mutations). Always measure and plot head circumference in ASD evaluations.'}
  ]
};

// D3 — Emma / Angelman Syndrome
window.PEDIGREES['D3'] = {
  proband:'Emma, 6F', diagnosis:'Angelman Syndrome (maternal 15q11 deletion)',
  inheritanceLabel:'Genomic imprinting — maternal 15q11 deletion',
  inheritanceExplainer:'Angelman syndrome is caused by loss of maternal UBE3A function through maternal 15q11 deletion (~70%), UBE3A mutation (~11%), imprinting defect (~3%), or paternal uniparental disomy (~7%). This is a disorder of genomic imprinting — the same region on the paternal chromosome is silenced in the brain, so losing the maternal copy causes disease. Standard karyotype (which missed Emma\'s diagnosis) cannot detect this deletion — methylation analysis is required. If the mother carries a balanced chromosomal translocation involving 15q11, recurrence risk is much higher than the <1% seen with de novo deletions.',
  layout:{height:170},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:160,y1:100,x2:290,y2:100,y:100,drops:[{x:200,y:140}]}],
  connectors:[],
  cascade:[
    {name:'Karen (Mother)',relation:'Maternal karyotype — critical',test:'High-resolution karyotype to rule out balanced translocation',reason:'If Karen carries a balanced Robertsonian translocation involving chromosome 15, her recurrence risk is substantially higher than <1%. This is the most critical cascade test.',priority:'urgent'},
    {name:'Karen\'s parents',relation:'Maternal grandparents',test:'Karyotype if Karen has balanced translocation',reason:'If Karen carries a balanced translocation, it may have been inherited from one of her parents.',priority:'high'}
  ],
  members:[
    {id:'father',name:'Greg W., 42M',relation:'Father',age:'42',sex:'M',status:'unaffected',story:'Healthy. Normal chromosomes. Normal karyotype. The paternal chromosome 15 is not involved in Angelman syndrome (paternal UBE3A is silenced in neurons).',symptoms:null,tested:{result:'negative',text:'Karyotype: 46,XY — normal.'},clinicalPearl:null},
    {id:'mother',name:'Karen W., 40F',relation:'Mother',age:'40',sex:'F',status:'unaffected',story:'Healthy. Normal appearance. High-resolution karyotype pending to rule out a balanced translocation of chromosome 15 — the critical determinant of recurrence risk.',symptoms:null,tested:{result:'pending',text:'Maternal karyotype pending. Key question: balanced translocation vs. de novo deletion in Emma.'},clinicalPearl:'If Karen has a balanced Robertsonian translocation (chromosomes 15 fused to another chromosome), her recurrence risk for another Angelman child is far higher than 1%.'},
    {id:'emma',name:'Emma, 6F',relation:'Proband',age:'6',sex:'F',status:'affected',isProband:true,story:'6-year-old with intellectual disability, absent speech, seizures on valproate, inappropriate happiness, puppetlike gait, water fascination. Previously told "normal chromosomes" — standard karyotype missed the diagnosis. Methylation analysis confirmed maternal 15q11 deletion.',symptoms:'IQ ~60, absent speech, seizures, inappropriate happiness, puppetlike gait',tested:{result:'positive',text:'Chromosome 15 methylation: ABNORMAL — maternal deletion confirmed. Prior karyotype was WRONG TEST. INDEX CASE.'},clinicalPearl:'"Normal chromosomes" on standard karyotype does NOT exclude Angelman syndrome. Methylation analysis is the required test.'}
  ]
};

// E3 — Tyler / ADHD
window.PEDIGREES['E3'] = {
  proband:'Tyler, 8M', diagnosis:'ADHD Combined + Dyslexia',
  inheritanceLabel:'Polygenic — highly heritable (~74%) but not single-gene',
  inheritanceExplainer:'ADHD is one of the most heritable behavioral conditions known (~74% heritability), but it is not caused by a single gene. Multiple common genetic variants of small effect size contribute to ADHD risk. Having a first-degree relative with ADHD substantially increases risk. However, genetic testing is not indicated for typical ADHD — the diagnosis is clinical, using validated rating scales. The pedigree shows familial ADHD (father) but no single-gene disorder requiring genetic workup.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:160,y1:100,x2:250,y2:100,y:100,drops:[{x:200,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'David B., 40M',relation:'Father',age:'40',sex:'M',status:'affected',story:'Had ADHD as a child — never formally diagnosed in childhood but retrospectively clear. As an adult, he now recognizes the same patterns in Tyler. Father\'s ADHD history raises Tyler\'s pre-test probability substantially — ADHD heritability is ~74%.',symptoms:'ADHD — childhood onset, now manages well as adult',tested:null,clinicalPearl:'Father\'s ADHD history is legitimate clinical information that substantially raises pre-test probability. First-degree relative with ADHD is one of the strongest predictors.'},
    {id:'mother',name:'Susan B., 38F',relation:'Mother',age:'38',sex:'F',status:'unaffected',story:'No ADHD or learning disabilities. She is the one who first noticed Tyler\'s reading difficulties — the clue that led to the dyslexia identification.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'tyler',name:'Tyler, 8M',relation:'Proband',age:'8',sex:'M',status:'affected',isProband:true,story:'8-year-old boy. ADHD Combined presentation confirmed on Vanderbilt rating scales (both parent and teacher). Co-occurring dyslexia identified on neuropsychological testing (reading score 76, 6th percentile). IQ 104 (average). Genetic testing not indicated.',symptoms:'ADHD Combined, co-occurring dyslexia. Vanderbilt elevated both settings.',tested:{result:'negative',text:'Genetic testing NOT indicated for typical ADHD. Diagnosis confirmed clinically. INDEX CASE.'},clinicalPearl:'The pedigree shows familial ADHD — confirming high heritability. But genetic testing does not change management. The diagnosis is clinical.'}
  ]
};

// ─────────────────────────────────────────────────────────
// FAMILY 4 — JOINT PAIN
// ─────────────────────────────────────────────────────────

// F4A — Maria / Rheumatoid Arthritis
window.PEDIGREES['F4A'] = {
  proband:'Maria, 32F', diagnosis:'Rheumatoid Arthritis (seropositive)',
  inheritanceLabel:'Polygenic autoimmune predisposition — HLA-DRB1 association',
  inheritanceExplainer:'RA has a strong genetic component — ~60% heritability — primarily through HLA-DRB1 ("shared epitope" alleles). However, it is not a single-gene Mendelian disorder. First-degree relatives of RA patients have approximately 3-5x elevated risk. Having a mother with RA (as Maria does) is the most important family history risk factor. Genetic testing for HLA-DRB1 is not routinely ordered in clinical practice for RA — it does not change management.',
  layout:{height:160},
  coupleLines:[{x1:130,y1:60,x2:290,y2:60,dropX:210,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:310,y2:100,y:100,drops:[{x:190,y:140},{x:300,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'Carlos L., 60M',relation:'Father',age:'60',sex:'M',status:'unaffected',story:'Healthy. No arthritis. No autoimmune conditions.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'mother',name:'Rosa L., 58F',relation:'Mother',age:'58',sex:'F',status:'affected',story:'Has rheumatoid arthritis — diagnosed at age 50. On methotrexate. Well-controlled. Maria knew about her mother\'s RA but did not connect it to her own symptoms until the physician specifically asked about family autoimmune history.',symptoms:'RA diagnosed age 50, on MTX, seropositive',tested:null,clinicalPearl:'First-degree relative with RA raises the pre-test probability for seropositive RA in Maria substantially. Family history is a legitimate diagnostic tool.'},
    {id:'maria',name:'Maria, 32F',relation:'Proband',age:'32',sex:'F',status:'affected',isProband:true,story:'32-year-old graphic designer. Symmetric MCP/PIP synovitis, morning stiffness >1 hour. RF 182, Anti-CCP >250 (strongly seropositive). Early erosive disease on X-ray. Started on methotrexate.',symptoms:'RF 182, Anti-CCP >250, ESR 68, early erosion right 2nd MCP',tested:{result:'positive',text:'Seropositive RA confirmed. RF 182, Anti-CCP >250. INDEX CASE. Methotrexate initiated.'},clinicalPearl:'The family history of maternal RA was available at visit 1. It was the highest-value pre-test probability modifier — but no one asked until this visit.'},
    {id:'brother',name:'Miguel, 28M',relation:'Brother',age:'28',sex:'M',status:'unaffected',story:'Healthy. No arthritis. Annual musculoskeletal review recommended given family history.',symptoms:null,tested:null,clinicalPearl:null}
  ]
};

// F4B — Kevin / Ankylosing Spondylitis
window.PEDIGREES['F4B'] = {
  proband:'Kevin, 24M', diagnosis:'Ankylosing Spondylitis (HLA-B27+)',
  inheritanceLabel:'HLA-B27 association — strong genetic risk factor',
  inheritanceExplainer:'HLA-B27 is present in ~90% of patients with ankylosing spondylitis and is one of the strongest HLA disease associations known. HLA-B27 is inherited in an autosomal codominant pattern — 50% of first-degree relatives of an HLA-B27 positive person will also be B27 positive. However, only about 5-10% of HLA-B27 positive individuals develop AS — other genetic and environmental factors are required. The paternal uncle with "a stiff spine" is the most diagnostically relevant family history finding.',
  layout:{height:200},
  coupleLines:[{x1:120,y1:55,x2:260,y2:55,dropX:190,dropY:90},{x1:300,y1:55,x2:420,y2:55,dropX:360,dropY:90}],
  siblingLines:[{x1:100,y1:90,x2:420,y2:90,y:90,drops:[{x:130,y:150},{x:250,y:150},{x:380,y:150}]},
               {x1:110,y1:200,x2:220,y2:200,y:200,drops:[{x:150,y:235}]}],
  connectors:[{x1:250,y1:90,x2:250,y2:170},{x1:150,y1:170,x2:150,y2:200}],
  cascade:[
    {name:'Father',relation:'50% HLA-B27 risk',test:'HLA-B27 typing if symptomatic',reason:'Kevin\'s father has a 50% chance of being HLA-B27 positive. If symptomatic with inflammatory back pain, HLA-B27 testing and rheumatology evaluation warranted.',priority:'routine'},
    {name:'Uncle (paternal)',relation:'Likely undiagnosed AS',test:'HLA-B27 + MRI SI joints + rheumatology evaluation',reason:'Uncle with "stiff spine" and hunched posture in Kevin\'s paternal family almost certainly has undiagnosed AS. He should be evaluated and treated — biologic therapy may still benefit.',priority:'high'}
  ],
  members:[
    {id:'pat_gf',name:'George Sr †',relation:'Paternal grandfather',age:'†age 76',sex:'M',deceased:true,status:'unknown',story:'Died age 76. Reportedly walked with a stooped posture in later life — possibly spinal fusion from longstanding untreated AS. Never evaluated. HLA-B27 status unknown.',symptoms:'Stooped posture in later life — possible undiagnosed AS',tested:null,clinicalPearl:'Longstanding untreated AS eventually fuses the spine into a fixed kyphotic posture — the "bamboo spine" of advanced disease. The grandfather\'s stooped walk may have been late-stage AS.'},
    {id:'pat_gm',name:'Helen Sr',relation:'Paternal grandmother',age:'74',sex:'F',status:'unaffected',story:'Healthy. No joint disease. No HLA-B27-associated conditions.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'uncle',name:'Robert O.',relation:'Paternal uncle',age:'52',sex:'M',status:'affected',story:'"Stiff spine" and walks hunched. Age 52. Never evaluated. Almost certainly has undiagnosed AS — the same condition as Kevin, just decades untreated. He was never asked the right questions: inflammatory vs. mechanical pain, morning stiffness, NSAID response.',symptoms:'Stiff spine, hunched posture, likely longstanding untreated AS',tested:{result:'pending',text:'Never evaluated. Urgent referral placed after Kevin\'s diagnosis.'},clinicalPearl:'This is the missed generation — the uncle whose diagnosis would have triggered Kevin\'s evaluation years earlier, preventing further sacroiliac damage.'},
    {id:'father',name:'Donald O.',relation:'Father',age:'52',sex:'M',status:'unknown',story:'No back pain. May or may not carry HLA-B27. Does not have AS. HLA-B27 is present in ~8% of the general population — not everyone who carries it develops AS.',symptoms:'No symptoms. HLA-B27 status unknown.',tested:{result:'pending',text:'HLA-B27 typing recommended for family counseling.'},clinicalPearl:null},
    {id:'mother',name:'Patricia O.',relation:'Mother',age:'50',sex:'F',status:'unaffected',story:'Healthy. No joint disease. No inflammatory conditions.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'kevin',name:'Kevin, 24M',relation:'Proband',age:'24',sex:'M',status:'affected',isProband:true,story:'24-year-old software developer. Inflammatory back pain 2 years. HLA-B27 positive. Bilateral sacroiliitis on MRI. Anterior uveitis last year (missed opportunity for earlier diagnosis). On scheduled NSAIDs. Rheumatology follow-up.',symptoms:'Inflammatory back pain, SI joint tenderness, Schober 2cm, HLA-B27+, MRI sacroiliitis',tested:{result:'positive',text:'HLA-B27 positive. MRI: bilateral sacroiliitis. AS confirmed. INDEX CASE.'},clinicalPearl:'The paternal uncle with "stiff spine" was the critical family history finding. Had this been elicited at his uveitis visit, Kevin\'s diagnosis could have been made 2 years earlier.'}
  ]
};
(function(){
  var p=window.PEDIGREES['F4B'];
  p.members[0].x=100;p.members[0].y=55;
  p.members[1].x=240;p.members[1].y=55;
  p.members[2].x=390;p.members[2].y=55;
  p.members[3].x=120;p.members[3].y=150;
  p.members[4].x=260;p.members[4].y=150;
  p.members[5].x=160;p.members[5].y=235;
  p.coupleLines=[{x1:120,y1:55,x2:220,y2:55,dropX:170,dropY:90}];
  p.siblingLines=[{x1:100,y1:90,x2:410,y2:90,y:90,drops:[{x:120,y:150},{x:260,y:150},{x:390,y:150}]},
                  {x1:100,y1:200,x2:220,y2:200,y:200,drops:[{x:160,y:235}]}];
  p.connectors=[{x1:170,y1:90,x2:170,y2:120},{x1:120,y1:170,x2:120,y2:200}];
  p.layout.height=275;
})();

// F4C — Sandra / Psoriatic Arthritis
window.PEDIGREES['F4C'] = {
  proband:'Sandra, 45F', diagnosis:'Psoriatic Arthritis',
  inheritanceLabel:'Polygenic — psoriasis + PsA family clustering',
  inheritanceExplainer:'Psoriasis and psoriatic arthritis have strong familial clustering — first-degree relatives of patients with psoriasis have a 3-5x elevated risk of developing psoriasis or PsA. HLA-C*06:02 is the strongest genetic risk factor. However, PsA is not a Mendelian disorder — genetic testing does not change diagnosis or management. The brother\'s psoriasis in this pedigree is clinically relevant family history.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:340,y2:100,y:100,drops:[{x:200,y:140},{x:330,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'Harold T., 68M',relation:'Father',age:'68',sex:'M',status:'unaffected',story:'Healthy. No psoriasis or arthritis.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'mother',name:'Judith T., 66F',relation:'Mother',age:'66',sex:'F',status:'unaffected',story:'No psoriasis. Mild osteoarthritis of knees — mechanical, not inflammatory.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'sandra',name:'Sandra, 45F',relation:'Proband',age:'45',sex:'F',status:'affected',isProband:true,story:'45-year-old nurse. Psoriasis 10 years, now DIP arthritis with dactylitis. Seronegative. Pencil-in-cup deformity on X-ray. Started on biologics.',symptoms:'DIP arthritis, dactylitis, nail pitting, seronegative',tested:{result:'positive',text:'PsA confirmed — DIP pattern, dactylitis, seronegative. INDEX CASE.'},clinicalPearl:'Psoriatic disease (skin + joints) can cluster in families, sometimes with different manifestations — one member has skin-predominant disease, another has joint-predominant disease.'},
    {id:'brother',name:'Mark, 42M',relation:'Brother',age:'42',sex:'M',status:'affected',story:'Has psoriasis — skin-predominant, no joint involvement currently. Family history of psoriasis in a first-degree relative is clinically relevant for Sandra\'s diagnosis.',symptoms:'Psoriasis (plaque) — skin only, no arthritis currently',tested:null,clinicalPearl:'Mark should be monitored for psoriatic arthritis — up to 30% of psoriasis patients develop PsA, and his sister\'s diagnosis makes the family risk concrete.'}
  ]
};

// F4D — Harold / Osteoarthritis
window.PEDIGREES['F4D'] = {
  proband:'Harold, 72M', diagnosis:'Osteoarthritis — bilateral knees',
  inheritanceLabel:'Polygenic risk + mechanical factors — not single-gene',
  inheritanceExplainer:'OA has a significant genetic component (~50-60% heritability) — genes affecting cartilage biology, collagen structure, and inflammation all contribute. However, OA is not a Mendelian genetic disorder, and genetic testing does not change management. Mechanical factors (prior injury, BMI, occupation) are often the dominant modifiable risk factors. Harold\'s 30-year carpentry career and prior football knee injury are the primary explanatory factors here.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:310,y2:100,y:100,drops:[{x:190,y:140},{x:300,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'Earl M. †',relation:'Father',age:'†age 80',sex:'M',deceased:true,status:'unaffected',story:'Died age 80. Had "bad knees" in his 70s — attributed to farming. Likely OA. Never formally evaluated.',symptoms:'Possible OA in later life — not formally diagnosed',tested:null,clinicalPearl:null},
    {id:'mother',name:'Mildred M. †',relation:'Mother',age:'†age 82',sex:'F',deceased:true,status:'unaffected',story:'Died age 82. Healthy until her late 70s. Hip replacement at age 76.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'harold',name:'Harold, 72M',relation:'Proband',age:'72',sex:'M',status:'affected',isProband:true,story:'72-year-old retired carpenter. KL Grade 3-4 OA left knee, Grade 2 right knee. Prior football injury right knee age 22. 30+ years as a carpenter on his feet. Mechanical + genetic + BMI risk factors combine.',symptoms:'KL 3-4 left knee, Grade 2 right knee, BMI 29, antalgic gait',tested:{result:'positive',text:'OA confirmed — weight-bearing X-rays. Surgical evaluation for TKA indicated. Genetic testing not indicated.'},clinicalPearl:'The pedigree is unremarkable for rare disease — confirming OA as a common, multifactorial condition. Occupation, BMI, and prior injury are the dominant risk factors here.'},
    {id:'son',name:'Robert, 45M',relation:'Son',age:'45',sex:'M',status:'unaffected',story:'Healthy. No joint disease. Encouraged to maintain healthy BMI and avoid repetitive joint trauma given family history.',symptoms:null,tested:null,clinicalPearl:null}
  ]
};

// F4E — George / Gout
window.PEDIGREES['F4E'] = {
  proband:'George, 58M', diagnosis:'Gout — acute podagra',
  inheritanceLabel:'Polygenic + dietary/medication triggers',
  inheritanceExplainer:'Gout has a significant genetic component (~35-65% heritability) — SLC22A12 (URAT1) and SLC2A9 variants affect renal uric acid handling. However, gout is fundamentally a metabolic and dietary disease, and genetic testing is not indicated in typical cases. The most actionable interventions are dietary modification, urate-lowering therapy, and switching from HCTZ to a uricosuric antihypertensive (losartan). The family history here shows familial hyperuricemia — but management is the same regardless.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:150,y1:100,x2:310,y2:100,y:100,drops:[{x:190,y:140},{x:300,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'Norman N. †',relation:'Father',age:'†age 72',sex:'M',deceased:true,status:'affected',story:'Had gout — multiple attacks over his life. Died age 72 of MI. Likely had untreated hyperuricemia contributing to cardiovascular risk.',symptoms:'Recurrent gout attacks, untreated hyperuricemia',tested:null,clinicalPearl:'Familial gout is common — but the management is the same regardless. Diet, urate-lowering therapy, and medication review.'},
    {id:'mother',name:'Agnes N., 76F',relation:'Mother',age:'76',sex:'F',status:'unaffected',story:'No gout. No hyperuricemia. Healthy.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'george',name:'George, 58M',relation:'Proband',age:'58',sex:'M',status:'affected',isProband:true,story:'58-year-old accountant. First gout attack — podagra. Uric acid 11.2. HCTZ contributing (thiazide raises uric acid). Switched to losartan. Allopurinol to be started after flare resolution.',symptoms:'Uric acid 11.2, MSU crystals on aspiration, HCTZ-induced',tested:{result:'positive',text:'Gout confirmed — MSU crystals. Uric acid 11.2. HCTZ switched to losartan. Allopurinol planned. INDEX CASE.'},clinicalPearl:'Genetic testing is not indicated for typical gout. HCTZ is the most modifiable risk factor here — switching to losartan addresses both hypertension and uric acid.'},
    {id:'brother',name:'Earl, 55M',relation:'Brother',age:'55',sex:'M',status:'affected',story:'Has had two gout attacks. On allopurinol. Uric acid controlled at 5.2 mg/dL. Well-managed.',symptoms:'Gout — well controlled on allopurinol',tested:null,clinicalPearl:'Brother\'s successful gout management is actually useful counseling for George — showing that urate-lowering therapy works.'}
  ]
};

console.log('PEDIGREES loaded for all 20 cases:', Object.keys(window.PEDIGREES).join(', '));

// ─────────────────────────────────────────────────────────
// CHIEF COMPLAINT 5 — RESPIRATORY / WHEEZE
// ─────────────────────────────────────────────────────────

window.PEDIGREES['G5A'] = {
  proband:'Priya R., 34F', diagnosis:'AERD / Samter\'s Triad',
  inheritanceLabel:'Not inherited — arachidonic acid pathway dysregulation',
  inheritanceExplainer:'AERD is not a traditional genetic disorder with Mendelian inheritance. It results from dysregulation of the arachidonic acid/prostaglandin pathway leading to cysteinyl leukotriene overproduction and prostaglandin E2 deficiency. The pedigree shows no affected relatives — confirming that AERD arises de novo and is not inherited from affected parents. Positive family history of atopy (mother has allergic rhinitis) provides background T2 predisposition but does not cause AERD directly.',
  layout:{height:165},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:160,y1:100,x2:300,y2:100,y:100,drops:[{x:190,y:140},{x:290,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'Raj R., 60M',relation:'Father',age:'60',sex:'M',status:'unaffected',story:'Healthy. No asthma. No nasal polyps. No NSAID sensitivity.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'mother',name:'Sunita R., 58F',relation:'Mother',age:'58',sex:'F',status:'unaffected',story:'Allergic rhinitis — seasonal. No asthma, no polyps, no NSAID sensitivity. Her allergic rhinitis reflects background T2 predisposition in the family, but AERD requires additional pathway dysregulation beyond atopy.',symptoms:'Allergic rhinitis (seasonal) — no asthma or AERD',tested:null,clinicalPearl:'Mother\'s allergic rhinitis represents background T2 atopy — but AERD requires arachidonic acid pathway dysregulation that is not directly inherited.'},
    {id:'priya',name:'Priya, 34F',relation:'Proband',age:'34',sex:'F',status:'affected',isProband:true,story:'AERD confirmed — anosmia onset age 28, bilateral nasal polyps, NSAID-triggered ER visit, FeNO 58, eos 680, negative SPT. Dupilumab initiated. Aspirin desensitization planned.',symptoms:'FeNO 58, eos 680, nasal polyps, NSAID sensitivity, anosmia',tested:{result:'positive',text:'AERD confirmed: aspirin challenge positive. Dupilumab initiated. INDEX CASE.'},clinicalPearl:'The pedigree is unremarkable for AERD family history — confirming this is an acquired pathway dysregulation, not a directly inherited disorder.'},
    {id:'brother',name:'Vikram, 30M',relation:'Brother',age:'30',sex:'M',status:'unaffected',story:'Healthy. No asthma, no polyps, no NSAID sensitivity.',symptoms:null,tested:null,clinicalPearl:null}
  ]
};
(function(){
  var p=window.PEDIGREES['G5A'];
  p.members[0].x=140;p.members[0].y=60;
  p.members[1].x=300;p.members[1].y=60;
  p.members[2].x=180;p.members[2].y=140;
  p.members[3].x=300;p.members[3].y=140;
  p.coupleLines=[{x1:160,y1:60,x2:280,y2:60,dropX:220,dropY:100}];
  p.siblingLines=[{x1:160,y1:100,x2:320,y2:100,y:100,drops:[{x:180,y:140},{x:300,y:140}]}];
})();

window.PEDIGREES['G5B'] = {
  proband:'Marcus D., 47M', diagnosis:'Alpha-1 Antitrypsin Deficiency (Pi*ZZ)',
  inheritanceLabel:'Autosomal Codominant (Pi*ZZ)',
  inheritanceExplainer:'AATD follows autosomal codominant inheritance. The Pi*ZZ genotype (two Z alleles) causes severe deficiency. For Marcus to be ZZ, BOTH parents must carry at least one Z allele (each parent is at minimum MZ). Each child of two MZ carriers has a 25% chance of being ZZ (affected), 50% chance of being MZ (carrier), and 25% chance of MM (unaffected). The father\'s history of "emphysema without smoking" suggests he was likely ZZ or SZ — and almost certainly had undiagnosed AATD himself.',
  layout:{height:200},
  coupleLines:[{x1:130,y1:60,x2:300,y2:60,dropX:215,dropY:95}],
  siblingLines:[{x1:120,y1:95,x2:370,y2:95,y:95,drops:[{x:150,y:150},{x:260,y:150},{x:370,y:150}]}],
  connectors:[],
  cascade:[
    {name:'Siblings',relation:'25% ZZ (affected), 50% MZ (carrier), 25% MM',test:'Serum A1AT level + SERPINA1 genotyping',reason:'Each sibling has 25% chance of being ZZ and developing emphysema. Identifying ZZ siblings early allows augmentation therapy before lung damage occurs.',priority:'urgent'},
    {name:'Marcus\'s children',relation:'At minimum MZ (carrier) — if mother is MM',test:'A1AT level when child reaches 18, or earlier if symptomatic',reason:'Marcus is ZZ — all children will inherit one Z allele from him. If the mother is MM (common), all children will be MZ (carriers, asymptomatic). If the mother is MZ, 50% of children will be ZZ.',priority:'high'},
    {name:'Mother',relation:'Obligate MZ carrier (at minimum)',test:'SERPINA1 genotyping',reason:'Mother must carry at least one Z allele to produce a ZZ child. Her genotype determines children\'s recurrence risk. If MZ, asymptomatic but children at 25% ZZ risk.',priority:'high'}
  ],
  members:[
    {id:'father',name:'Donald D. †',relation:'Father',age:'†age 62',sex:'M',deceased:true,status:'affected',story:'Died age 62 of emphysema despite never smoking. Almost certainly had AATD — likely ZZ or SZ genotype. His early death from non-smoking emphysema was the most important family history finding in this case. Never tested.',symptoms:'Emphysema without smoking — died age 62',tested:{result:'pending',text:'Never tested. Posthumous diagnosis strongly suspected: non-smoking emphysema at age 62 = AATD until proven otherwise.'},clinicalPearl:'This is the single most important family history data point. A non-smoking parent with emphysema means Marcus\'s "asthma" should have triggered A1AT testing at the very first pulmonology visit.'},
    {id:'mother',name:'Carol D., 68F',relation:'Mother',age:'68',sex:'F',status:'carrier',story:'Age 68. Mild dyspnea on exertion — attributed to "getting older." Never evaluated for AATD. As a parent of a ZZ child, she must carry at least one Z allele (obligate carrier or possibly ZZ herself).',symptoms:'Mild dyspnea on exertion — not evaluated',tested:{result:'pending',text:'A1AT level and SERPINA1 genotyping ordered after Marcus\'s diagnosis. Results pending.'},clinicalPearl:'Obligate carrier at minimum. If she is MZ, her mild dyspnea may be early AATD lung disease.'},
    {id:'marcus',name:'Marcus, 47M',relation:'Proband — ZZ affected',age:'47',sex:'M',status:'affected',isProband:true,story:'47-year-old non-smoker labeled with asthma since age 8. SERPINA1 Pi*ZZ. A1AT level 18 mg/dL. Basal panlobular emphysema on CT. FEV1 52%. Augmentation therapy initiated.',symptoms:'FEV1 52%, A1AT 18 mg/dL, basal emphysema, recurrent bronchitis',tested:{result:'positive',text:'SERPINA1 Pi*ZZ confirmed. A1AT 18 mg/dL. INDEX CASE. Augmentation therapy initiated.'},clinicalPearl:'47 years labeled as asthma. The diagnosis required: asking about family history + ordering a $20 blood test.'},
    {id:'sister',name:'Patricia, 44F',relation:'Sister',age:'44',sex:'F',status:'unknown',story:'Has "mild asthma" — uses an inhaler occasionally. Never had spirometry or A1AT testing. 25% chance of being ZZ, 50% chance of being MZ. Her "mild asthma" may be early AATD lung disease.',symptoms:'Mild asthma (uncharacterized) — A1AT testing ordered',tested:{result:'pending',text:'A1AT level and SERPINA1 genotyping ordered. Results pending.'},clinicalPearl:'Patricia\'s "mild asthma" may be early AATD — the same misdiagnosis Marcus carried for 39 years.'},
    {id:'brother',name:'Daniel, 40M',relation:'Brother',age:'40',sex:'M',status:'unknown',story:'No respiratory symptoms currently. 25% chance of ZZ, 50% chance of MZ carrier. Urgent A1AT testing recommended — if ZZ, lung damage prevention requires starting augmentation before symptoms develop.',symptoms:'No symptoms — urgent A1AT testing recommended',tested:{result:'pending',text:'A1AT level and SERPINA1 genotyping ordered. Pre-symptomatic testing is the goal.'},clinicalPearl:'Pre-symptomatic detection of ZZ genotype is the highest-value cascade testing outcome — augmentation therapy started before lung damage has maximum impact.'}
  ]
};
(function(){
  var p=window.PEDIGREES['G5B'];
  p.members[0].x=120;p.members[0].y=60;
  p.members[1].x=280;p.members[1].y=60;
  p.members[2].x=150;p.members[2].y=160;
  p.members[3].x=270;p.members[3].y=160;
  p.members[4].x=380;p.members[4].y=160;
  p.coupleLines=[{x1:140,y1:60,x2:260,y2:60,dropX:200,dropY:95}];
  p.siblingLines=[{x1:130,y1:95,x2:400,y2:95,y:95,drops:[{x:150,y:160},{x:270,y:160},{x:380,y:160}]}];
  p.layout.height=200;
})();

window.PEDIGREES['G5C'] = {
  proband:'Diane K., 52F', diagnosis:'EGPA (Eosinophilic Granulomatosis with Polyangiitis)',
  inheritanceLabel:'Sporadic — autoimmune vasculitis, not inherited',
  inheritanceExplainer:'EGPA is an acquired autoimmune vasculitis, not a hereditary condition. The pedigree shows an unremarkable family history — no vasculitis, no autoimmune disease, no relevant family pattern. The teaching here is the inverse: when the pedigree is empty but the patient is this sick from multi-organ involvement, the answer is not genetic inheritance — it is an acquired autoimmune dysregulation. GENA\'s role for EGPA is not rare disease diagnosis but constellation recognition: asthma + eosinophilia >1,500 + organ involvement.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:160,y1:100,x2:290,y2:100,y:100,drops:[{x:200,y:140}]}],
  connectors:[],
  cascade:[
    {name:'Diane — extended EGPA workup',relation:'Proband — vasculitis organ assessment',test:'ANCA panel, echocardiogram, nerve conduction study, skin biopsy, renal function',reason:'EGPA organ assessment is comprehensive. Each organ system (cardiac, renal, neurologic, cutaneous) must be evaluated at diagnosis and during follow-up. Mepolizumab maintenance reduces relapse.',priority:'urgent'}
  ],
  members:[
    {id:'father',name:'Harold K. †',relation:'Father',age:'†age 74',sex:'M',deceased:true,status:'unaffected',story:'Died age 74 of coronary artery disease. No vasculitis, no autoimmune disease, no asthma.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'mother',name:'Beverly K., 76F',relation:'Mother',age:'76',sex:'F',status:'unaffected',story:'Healthy. No autoimmune conditions. No asthma. No vasculitis.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'diane',name:'Diane, 52F',relation:'Proband',age:'52',sex:'F',status:'affected',isProband:true,story:'EGPA confirmed — eos 2,400, p-ANCA positive, EF 40% (cardiomyopathy), mononeuritis multiplex, palpable purpura. Admitted for IV methylprednisolone + cyclophosphamide induction. Mepolizumab planned for maintenance.',symptoms:'Eos 2,400, p-ANCA+, EF 40%, mononeuritis multiplex, purpura',tested:{result:'positive',text:'EGPA confirmed: skin biopsy (eosinophilic vasculitis), ANCA+, echo EF 40%. INDEX CASE. Inpatient immunosuppression.'},clinicalPearl:'The pedigree is unremarkable — EGPA is not inherited. The teaching: a normal family history with a systemically ill patient points toward acquired autoimmune disease, not genetic inheritance.'}
  ]
};
(function(){
  var p=window.PEDIGREES['G5C'];
  p.members[0].x=140;p.members[0].y=60;
  p.members[1].x=300;p.members[1].y=60;
  p.members[2].x=220;p.members[2].y=140;
  p.coupleLines=[{x1:160,y1:60,x2:280,y2:60,dropX:220,dropY:100}];
  p.siblingLines=[{x1:200,y1:100,x2:240,y2:100,y:100,drops:[{x:220,y:140}]}];
})();

window.PEDIGREES['G5D'] = {
  proband:'Tyler W., 28M', diagnosis:'T2-High Atopic Asthma — Dupilumab candidate',
  inheritanceLabel:'Polygenic atopic predisposition — IL-4/IL-13 pathway',
  inheritanceExplainer:'Atopic disease (asthma, atopic dermatitis, allergic rhinitis) clusters in families through shared polygenic susceptibility involving IL-4, IL-13, IL-5, IgE receptor variants, and filaggrin (FLG) gene variants affecting skin barrier function. The atopic march — from eczema in infancy to allergic rhinitis in childhood to asthma in adolescence — reflects sequential sensitization facilitated by a shared genetic background. This pedigree shows classic atopic family clustering. Genetic testing does not change management — the biomarker profile guides biologic selection.',
  layout:{height:165},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:160,y1:100,x2:310,y2:100,y:100,drops:[{x:190,y:140},{x:300,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'Greg W., 55M',relation:'Father',age:'55',sex:'M',status:'affected',story:'Has asthma — well-controlled on ICS/LABA. Had allergic rhinitis since childhood. No atopic dermatitis. His asthma represents the same T2 atopic predisposition Tyler inherited.',symptoms:'Asthma (well-controlled), allergic rhinitis',tested:null,clinicalPearl:'Father\'s asthma + allergic rhinitis confirms the familial atopic background. Tyler inherited the T2 atopic predisposition that manifests in him as asthma + AD + rhinitis.'},
    {id:'mother',name:'Karen W., 52F',relation:'Mother',age:'52',sex:'F',status:'affected',story:'Had atopic dermatitis as a child — resolved in adulthood. Mild allergic rhinitis. No asthma. Her childhood eczema reflects the shared FLG/T2 genetic background.',symptoms:'Childhood atopic dermatitis (resolved), allergic rhinitis',tested:null,clinicalPearl:'Mother\'s childhood eczema and Tyler\'s active AD reflect shared filaggrin and T2 susceptibility variants.'},
    {id:'tyler',name:'Tyler, 28M',relation:'Proband',age:'28',sex:'M',status:'affected',isProband:true,story:'28-year-old with the full atopic triad: moderate-severe asthma + moderate atopic dermatitis + allergic rhinitis. FeNO 62, eos 450, IgE 840. Dust mite strongly sensitized. Dupilumab initiated — addresses all three conditions.',symptoms:'FeNO 62, eos 450, IgE 840, atopic triad, dust mite sensitized',tested:{result:'positive',text:'T2-high atopic asthma. Dupilumab initiated (dual asthma + AD indication). INDEX CASE.'},clinicalPearl:'The atopic march: mother had eczema → Tyler has eczema + asthma + rhinitis. The shared T2 IL-4/IL-13 pathway drives all three — and dupilumab blocks that shared pathway.'},
    {id:'sister',name:'Ashley, 24F',relation:'Sister',age:'24',sex:'F',status:'affected',story:'Has allergic rhinitis and mild eczema — same atopic background as Tyler. No asthma currently. Should be monitored for asthma development, particularly with allergen exposure.',symptoms:'Allergic rhinitis, mild atopic dermatitis — monitor for asthma',tested:null,clinicalPearl:'Ashley\'s allergic rhinitis and eczema place her at elevated risk for asthma development — she should be screened annually.'}
  ]
};
(function(){
  var p=window.PEDIGREES['G5D'];
  p.members[0].x=140;p.members[0].y=60;
  p.members[1].x=300;p.members[1].y=60;
  p.members[2].x=180;p.members[2].y=140;
  p.members[3].x=300;p.members[3].y=140;
  p.coupleLines=[{x1:160,y1:60,x2:280,y2:60,dropX:220,dropY:100}];
  p.siblingLines=[{x1:160,y1:100,x2:320,y2:100,y:100,drops:[{x:180,y:140},{x:300,y:140}]}];
})();

window.PEDIGREES['G5E'] = {
  proband:'Sandra W., 44F', diagnosis:'Inducible Laryngeal Obstruction (ILO/VCD)',
  inheritanceLabel:'Functional disorder — not genetic',
  inheritanceExplainer:'Inducible laryngeal obstruction is a functional disorder of laryngeal motor control — not a genetic or inherited condition. The pedigree is completely unremarkable. The teaching is explicit: a normal family history combined with normal biomarkers (FeNO, eos, IgE) and normal spirometry between episodes points entirely away from genetic or immunologic disease. GENA is not indicated. The pedigree itself is the reassuring finding — when the family history is empty and the biomarkers are normal, look for functional causes before escalating to biologics.',
  layout:{height:160},
  coupleLines:[{x1:140,y1:60,x2:300,y2:60,dropX:220,dropY:100}],
  siblingLines:[{x1:170,y1:100,x2:260,y2:100,y:100,drops:[{x:220,y:140}]}],
  connectors:[],
  cascade:[],
  members:[
    {id:'father',name:'Robert W., 72M',relation:'Father',age:'72',sex:'M',status:'unaffected',story:'Healthy. No asthma, no respiratory disease, no voice problems.',symptoms:null,tested:null,clinicalPearl:null},
    {id:'mother',name:'Helen W., 70F',relation:'Mother',age:'70',sex:'F',status:'unaffected',story:'Healthy. No asthma, no laryngeal problems. Mild reflux (GERD) — treated with omeprazole. GERD is a trigger for ILO and may be contributing to Sandra\'s episodes.',symptoms:'GERD (mild) — treated',tested:null,clinicalPearl:'Mother\'s GERD is notable — GERD is one of the most common ILO triggers through laryngopharyngeal reflux irritating the vocal cords. Sandra should be evaluated for GERD as a contributing trigger.'},
    {id:'sandra',name:'Sandra, 44F',relation:'Proband',age:'44',sex:'F',status:'unaffected',isProband:true,story:'Voice teacher with ILO confirmed on laryngoscopy during exercise-triggered episode. Paradoxical vocal cord adduction. Normal spirometry, normal FeNO, normal eos. Four years on unnecessary ICS/LABA. Speech therapy initiated. ICS/LABA taper underway.',symptoms:'ILO confirmed on laryngoscopy. Normal spirometry, FeNO 14, eos 140.',tested:{result:'negative',text:'All asthma biomarkers NORMAL. ILO confirmed on laryngoscopy. No biologic indicated. Speech therapy is the treatment. INDEX CASE.'},clinicalPearl:'The pedigree is unremarkable — confirming ILO is not inherited. The normal pedigree + normal biomarkers = functional disorder. Speech therapy, not biologics.'}
  ]
};
(function(){
  var p=window.PEDIGREES['G5E'];
  p.members[0].x=140;p.members[0].y=60;
  p.members[1].x=300;p.members[1].y=60;
  p.members[2].x=220;p.members[2].y=140;
  p.coupleLines=[{x1:160,y1:60,x2:280,y2:60,dropX:220,dropY:100}];
  p.siblingLines=[{x1:200,y1:100,x2:240,y2:100,y:100,drops:[{x:220,y:140}]}];
})();

console.log('CC5 pedigrees loaded: G5A, G5B, G5C, G5D, G5E');

// ════════════════════════════════════════════════════════════
// PEDIGREE DATA — Family 6: Pediatric Cardiac / Syncope
// ════════════════════════════════════════════════════════════

window.PEDIGREES['H6A'] = {
  caseId: 'H6A',
  title: 'Jordan Mitchell — CPVT Family Pedigree',
  subtitle: 'RYR2 c.7420G>A (p.Val2474Ile) — Pathogenic · X-linked pattern NOT applicable — Autosomal dominant',
  nodes: [
    // Generation I — Grandparents
    { id:'GI_1', gen:1, pos:1, sex:'M', status:'unknown', label:'Grandfather\nPaternal', age:'72', detail:'No cardiac history reported' },
    { id:'GI_2', gen:1, pos:2, sex:'F', status:'unknown', label:'Grandmother\nPaternal', age:'70', detail:'No cardiac history reported' },
    { id:'GI_3', gen:1, pos:3, sex:'M', status:'affected', label:'Eduardo\nMaternal grandfather', age:'Died 58', detail:'Kidney disease, "burning hands" — possible Fabry mimic but no genetic testing. Died of cardiac event age 58. RETROSPECTIVELY: likely RYR2 carrier with late-onset VT.' },
    { id:'GI_4', gen:1, pos:4, sex:'F', status:'unknown', label:'Grandmother\nMaternal', age:'74', detail:'No cardiac history. Never evaluated.' },

    // Generation II — Parents + uncle
    { id:'GII_1', gen:2, pos:1, sex:'M', status:'unaffected', label:'David\nFather', age:'44', detail:'No syncope. Never evaluated. 50% chance of RYR2 variant — paternal line appears unaffected.' },
    { id:'GII_2', gen:2, pos:2, sex:'F', status:'carrier', label:'Michelle\nMother', age:'41', detail:'No syncope. Obligate carrier candidate — Eduardo\'s daughter. RYR2 testing PENDING. May be asymptomatic carrier (reduced penetrance in females possible). URGENT: test before clearing for strenuous activity.' },
    { id:'GII_3', gen:2, pos:3, sex:'M', status:'deceased', label:'Uncle Marcus\nMaternal', age:'Died 19', detail:'SUDDEN CARDIAC DEATH during high school track meet. Cause listed: "cardiac arrhythmia, undetermined." No autopsy genetic testing. Almost certainly CPVT — same RYR2 variant. His death was preventable with cascade testing.', highlight: true },

    // Generation III — Jordan + sister
    { id:'GIII_1', gen:3, pos:1, sex:'M', status:'affected', label:'Jordan\n★ Index Case', age:'14', detail:'CPVT confirmed. RYR2 c.7420G>A pathogenic variant. Three documented exertional/emotional syncopal episodes. Bidirectional VT at HR 148 on exercise stress test. Management: nadolol + ICD + permanent sports restriction.', highlight: true },
    { id:'GIII_2', gen:3, pos:2, sex:'F', status:'atrisk', label:'Sister\n(Unnamed)', age:'11', detail:'Currently plays soccer. RYR2 testing ORDERED — results pending. Exercise stress test planned after genetic result. CANNOT PLAY SOCCER until evaluated. 50% chance of inheriting variant from mother.' }
  ],
  connections: [
    { from:'GI_1', to:'GII_1', type:'parent' },
    { from:'GI_2', to:'GII_1', type:'parent' },
    { from:'GI_3', to:'GII_2', type:'parent' },
    { from:'GI_3', to:'GII_3', type:'parent' },
    { from:'GI_4', to:'GII_2', type:'parent' },
    { from:'GI_4', to:'GII_3', type:'parent' },
    { from:'GII_1', to:'GIII_1', type:'parent' },
    { from:'GII_2', to:'GIII_1', type:'parent' },
    { from:'GII_1', to:'GIII_2', type:'parent' },
    { from:'GII_2', to:'GIII_2', type:'parent' }
  ],
  cascadeTesting: [
    { member:'Michelle (Mother)', test:'RYR2 gene sequencing', priority:'urgent', reason:'Obligate carrier candidate — Eduardo\'s daughter. Asymptomatic carriers can have arrhythmias during extreme exertion.' },
    { member:'Sister (age 11)', test:'RYR2 gene sequencing + exercise stress test if positive', priority:'urgent', reason:'Currently active in soccer. 50% carrier risk. Cannot be cleared for sport until evaluated.' },
    { member:'David (Father)', test:'RYR2 gene sequencing', priority:'high', reason:'50% chance of carrying variant from paternal line. Never evaluated.' },
    { member:'Uncle Marcus (deceased)', test:'Post-mortem tissue genetic testing if available', priority:'routine', reason:'Confirm RYR2 as cause of death — important for family and for medical record.' }
  ],
  teachingPoints: [
    'Uncle Marcus died at 19 during a track meet. Jordan\'s diagnosis — if made at his first syncopal episode — would have triggered cascade testing that should have happened 25 years ago.',
    'A normal resting ECG is the hallmark of CPVT, not the all-clear. Exercise stress testing is required when the trigger pattern is adrenergic.',
    'The sister is the most urgent action item. She is currently playing soccer with a 50% chance of carrying a variant that causes sudden cardiac death during exercise.',
    'Autosomal dominant with variable penetrance — Michelle has never fainted but may still carry the variant. Carrier females can have arrhythmias, particularly during extreme exertion or pregnancy.'
  ]
};

window.PEDIGREES['H6C'] = {
  caseId: 'H6C',
  title: 'Ethan Brooks — HCM Family Pedigree',
  subtitle: 'MYBPC3 c.3737+1G>A — Pathogenic · Autosomal dominant · 50% first-degree relative risk',
  nodes: [
    // Generation I
    { id:'GI_1', gen:1, pos:1, sex:'M', status:'unknown', label:'Grandfather\nPaternal', age:'71', detail:'No known cardiac history. MYBPC3 penetrance is variable — could be asymptomatic carrier.' },
    { id:'GI_2', gen:1, pos:2, sex:'F', status:'unknown', label:'Grandmother\nPaternal', age:'69', detail:'No known cardiac history.' },
    { id:'GI_3', gen:1, pos:3, sex:'M', status:'affected', label:'Grandfather\nMaternal', age:'Died 52', detail:'Died of "sudden heart attack." No autopsy. Retroactively: likely HCM with lethal arrhythmia.', highlight:true },
    { id:'GI_4', gen:1, pos:4, sex:'F', status:'unknown', label:'Grandmother\nMaternal', age:'68', detail:'No cardiac history. Never evaluated.' },

    // Generation II
    { id:'GII_1', gen:2, pos:1, sex:'M', status:'affected', label:'Michael\nFather', age:'43', detail:'HCM diagnosed age 35. Septal myectomy at age 38 — successful. IVS was 22mm pre-operatively. Now plays golf. MYBPC3 variant confirmed — same as Ethan.', highlight:true },
    { id:'GII_2', gen:2, pos:2, sex:'F', status:'unaffected', label:'Karen\nMother', age:'41', detail:'No cardiac symptoms. Echo performed after Ethan\'s diagnosis: normal IVS. MYBPC3 negative — variant from paternal line confirmed.' },

    // Generation III
    { id:'GIII_1', gen:3, pos:1, sex:'M', status:'affected', label:'Ethan\n★ Index Case', age:'13', detail:'HCM confirmed. IVS 18mm. LVOT gradient 72 mmHg provocable. MYBPC3 c.3737+1G>A pathogenic. Restriction from football and high-intensity contact sports. Beta blocker initiated. HCM specialist referral.', highlight:true },
    { id:'GIII_2', gen:3, pos:2, sex:'F', status:'atrisk', label:'Sister\n(Unnamed)', age:'10', detail:'Currently in recreational gymnastics. Echo ORDERED — results pending. MYBPC3 testing ordered. 50% chance of inheriting variant from father. Cannot participate in competitive gymnastics until evaluated.' }
  ],
  connections: [
    { from:'GI_1', to:'GII_1', type:'parent' },
    { from:'GI_2', to:'GII_1', type:'parent' },
    { from:'GI_3', to:'GII_2', type:'parent' },
    { from:'GI_4', to:'GII_2', type:'parent' },
    { from:'GII_1', to:'GIII_1', type:'parent' },
    { from:'GII_2', to:'GIII_1', type:'parent' },
    { from:'GII_1', to:'GIII_2', type:'parent' },
    { from:'GII_2', to:'GIII_2', type:'parent' }
  ],
  cascadeTesting: [
    { member:'Sister (age 10)', test:'Echocardiography + MYBPC3 gene sequencing', priority:'urgent', reason:'Currently in gymnastics. 50% carrier risk. Echocardiography first — identifies structural disease immediately regardless of genetic result.' },
    { member:'Michael (Father)', test:'Already confirmed MYBPC3 positive — annual echo surveillance', priority:'routine', reason:'Post-myectomy. Annual echo to monitor for recurrence and arrhythmia risk stratification.' },
    { member:'Karen (Mother)', test:'Already confirmed MYBPC3 negative — no further cardiac surveillance needed', priority:'routine', reason:'Variant is paternal — maternal line cleared.' },
    { member:'Paternal grandparents', test:'MYBPC3 gene sequencing + echocardiography', priority:'high', reason:'Variant likely from paternal grandfather — penetrance variable, may be asymptomatic. Grandfather\'s cardiac status unknown.' }
  ],
  teachingPoints: [
    'The dynamic murmur is the most commonly missed physical finding in HCM. Auscultation only in the supine position will miss the dynamic behavior that defines LVOT obstruction.',
    '"Father had heart surgery for thick heart muscle" was present in Ethan\'s intake form at every annual physical since age 8. It was never probed. It is a lay description of septal myectomy for HCM.',
    'The sister is the most urgent action item — she is in gymnastics with a 50% chance of inheriting the MYBPC3 variant. Echocardiography before her next session.',
    'MYBPC3 shows variable penetrance and expressivity — some carriers have minimal hypertrophy, others develop severe obstruction. Asymptomatic does not mean unaffected — annual surveillance echo is required for all variant-positive family members.'
  ]
};
