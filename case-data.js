// ═══════════════════════════════════════════════════════════
// CASE DATA — Guided Case Suite (all 20 cases)
// window.CASES   : visit content, questions, decisions
// window.MODULES : teaching modules per case
// ═══════════════════════════════════════════════════════════
window.CASES   = {};
window.MODULES = {};

// ════════════════════════════════════════════════════════════
// FAMILY 1 — FATIGUE
// ════════════════════════════════════════════════════════════

window.CASES['A'] = {
  id:'A', family:1, isGenetic:false,
  headline:'"I\'ve been exhausted for over a year and I can\'t figure out why"',
  patient:'Sofia, 34F &nbsp;&#183;&nbsp; Teacher &nbsp;&#183;&nbsp; Two children',
  tagline:'The most common cause of anemia — hiding in plain sight.',
  diagnosis:'Iron Deficiency Anemia',
  diagnosisText:'Iron deficiency is the most common cause of anemia worldwide, yet it is routinely missed when physicians do not ask about menstrual history or dietary iron intake.',
  genaText:'Iron deficiency anemia does not require genetic investigation. This case teaches when NOT to activate GENA — the answer is available from a careful history and a CBC.',
  visits:[
    {
      label:'Visit 1', icon:'🩺', iconClass:'v1', title:'Initial Presentation',
      sub:'Sofia T., 34F — chronic fatigue, 14 months',
      snapshot:'Sofia is a 34-year-old teacher. Fatigued for over a year. Saw OB 6 months ago — told everything looks fine. Mildly pale. BP 112/70, HR 88.',
      vitals:[{t:'BP 112/70',f:false},{t:'HR 88',f:false},{t:'Temp 98.4',f:false},{t:'BMI 23',f:false}],
      questions:[
        {id:'A_q1', prompt:'What are the three most common causes of fatigue in a 34-year-old woman? What history questions differentiate them?', placeholder:'Iron deficiency, thyroid disease, depression, sleep disorders...'},
        {id:'A_q2', prompt:'Her OB said everything looks fine 6 months ago. What might the OB have checked — and what did she almost certainly not check?', placeholder:'OB checked pregnancy, Pap — less likely to check ferritin or iron studies...'}
      ],
      nextFindingLabel:'What the history reveals — if you ask',
      nextFinding:'<strong>Menstrual history:</strong> "My periods have been heavier since my IUD was changed about a year ago." IUD change was 14 months ago — matching symptom onset exactly.<br><br><strong>Diet:</strong> Mostly plant-based. Very little red meat. No iron supplements.<br><br><strong>Exam:</strong> Mildly pale conjunctivae. No koilonychia.',
      feedback:[
        {icon:'🩸', text:'<strong>Menstrual history is the key question.</strong> The IUD change 14 months ago corresponds exactly to symptom onset. This is a slow iron leak that was entirely overlooked.'},
        {icon:'🥦', text:'<strong>Dietary iron intake compounds the picture.</strong> Plant-based diet with no supplementation in a woman with heavy periods is a setup for depletion.'},
        {icon:'🔬', text:'<strong>GENA is not indicated here.</strong> Iron deficiency is a common, non-genetic diagnosis. Knowing when NOT to use GENA is as important as knowing when to use it.'}
      ]
    },
    {
      label:'Visit 2', icon:'🧪', iconClass:'v2', title:'Labs & Workup',
      sub:'CBC, iron studies — confirming the diagnosis',
      snapshot:'You ordered CBC and iron studies. Results are back.',
      vitals:[{t:'Hgb 9.8 ↓',f:true},{t:'MCV 71 ↓',f:true},{t:'Ferritin 6 ↓',f:true},{t:'TIBC 420 ↑',f:true}],
      questions:[
        {id:'A_q3', prompt:'CBC: Hgb 9.8, MCV 71. Ferritin 6 ng/mL (severely low), TIBC 420, transferrin sat 10%. What is your diagnosis and what confirms it?', placeholder:'Microcytic hypochromic anemia with depleted iron stores...'},
        {id:'A_q4', prompt:'What is your treatment plan? What underlying cause must also be addressed?', placeholder:'Oral iron supplementation — AND address the bleeding source...'}
      ],
      nextFindingLabel:'Confirmatory results',
      nextFinding:'<strong>CBC:</strong> Hgb 9.8 g/dL, MCV 71 fL, MCH 22 pg. <strong>Iron studies:</strong> Ferritin 6 ng/mL (depleted), TIBC 420 (elevated), transferrin saturation 10%. <strong>TSH:</strong> 2.3 — normal. Hypothyroidism excluded.',
      feedback:[
        {icon:'🔬', text:'<strong>Microcytic hypochromic anemia + depleted ferritin</strong> is diagnostic of iron deficiency. Ferritin is the most sensitive early marker — falls before hemoglobin.'},
        {icon:'🩺', text:'<strong>Treating iron without addressing the source is incomplete.</strong> Sofia needs gynecology referral to evaluate the IUD and heavy bleeding.'}
      ]
    },
    {
      label:'Decision', icon:'⚡', iconClass:'v3', title:'Management Decision',
      sub:'Treatment and source management',
      decisionPrompt:'Hgb 9.8, ferritin 6, MCV 71. Iron deficiency anemia confirmed. IUD-related heavy menstrual bleeding most likely cause. What is your management plan?',
      choices:[
        {text:'Start oral iron (ferrous sulfate 325mg TID). Refer to gynecology for heavy menstrual bleeding evaluation and IUD reassessment. Recheck CBC and ferritin in 4-6 weeks.', outcome:'good'},
        {text:'Start oral iron. Recheck CBC in 3 months. No gynecology referral yet.', outcome:'partial'},
        {text:'Reassure — anemia is mild. Recommend dietary changes. Follow up in 6 months.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Treating the deficiency AND addressing the source is the complete plan. Without addressing bleeding, Sofia will deplete iron again.</p>',
        partial:'<p><strong>Incomplete.</strong> Iron will improve hemoglobin temporarily, but without addressing the source, stores will deplete again.</p>',
        bad:'<p><strong>Incorrect.</strong> Hgb 9.8 is symptomatic anemia. Dietary changes alone cannot overcome ongoing menstrual losses.</p>'
      },
      keyFindings:['Hgb 9.8 — symptomatic anemia','MCV 71 — microcytic','Ferritin 6 — severely depleted','IUD change 14 months ago = onset of symptoms','Plant-based diet — low dietary iron'],
      reflection:[
        {icon:'❓', q:'<strong>The OB said everything looks fine.</strong> What did she likely check — and what was almost certainly not checked?'},
        {icon:'🔬', q:'<strong>When is GENA indicated?</strong> What features would make you consider a genetic cause of anemia?'},
        {icon:'🩸', q:'<strong>What is the most sensitive early marker of iron deficiency</strong> before hemoglobin falls?'}
      ]
    }
  ]
};

window.CASES['B'] = {
  id:'B', family:1, isGenetic:true,
  headline:'"I\'m exhausted all the time \u2014 it\'s been going on for years"',
  patient:'Marcus, 41M &nbsp;&#183;&nbsp; Finance &nbsp;&#183;&nbsp; "Probably stress"',
  tagline:'Five physicians. Six years. One missed diagnosis.',
  diagnosis:'Fabry Disease (GLA gene, X-linked lysosomal storage disorder)',
  diagnosisText:'Fabry disease is an X-linked lysosomal storage disorder caused by deficiency of alpha-galactosidase A, leading to glycolipid accumulation across multiple organ systems. Average diagnostic delay: 14 years.',
  genaText:'Marcus\'s constellation \u2014 acroparesthesias since adolescence, hypohidrosis, angiokeratomas, cornea verticillata, unexplained CKD, LVH, maternal uncle who died at 46 with identical symptoms \u2014 is exactly what GENA Screen is designed to analyze.',
  visits:[
    {
      label:'Visit 1', icon:'\u{1FA7A}', iconClass:'v1', title:'Initial Presentation',
      sub:'Marcus T., 41M \u2014 new patient, chronic fatigue',
      snapshot:'Marcus is a 41-year-old finance professional. Fatigue 5+ years. Three prior physicians all said stress/depression. Six months sertraline with zero improvement. BP 148/92 \u2014 new finding.',
      vitals:[{t:'BP 148/92',f:true},{t:'HR 78',f:false},{t:'BMI 26',f:false},{t:'Temp 98.6',f:false}],
      questions:[
        {id:'B_q1', prompt:'Treatment-resistant depression in a 41-year-old man with new hypertension. What questions has no one asked yet?', placeholder:'Ask about burning pain, sweating, skin changes, eye history, family history...'},
        {id:'B_q2', prompt:'He has been on sertraline for 6 months with zero improvement. What does treatment failure tell you?', placeholder:'Non-response to antidepressant suggests the underlying diagnosis is not depression...'}
      ],
      nextFindingLabel:'What the history reveals \u2014 if you ask',
      nextFinding:'<strong>Burning pain hands/feet since adolescence:</strong> "I\'ve had that since I was a teenager."<br><br><strong>Hypohidrosis:</strong> "I almost never sweat \u2014 even at the gym. Thought I was just lucky."<br><br><strong>Skin:</strong> "Little red spots on my stomach and upper thighs. My whole life."<br><br><strong>Eyes:</strong> "An eye doctor said something unusual about my corneas. Said it wasn\'t a problem."<br><br><strong>Family history (mother by phone):</strong> Her brother \u2014 Marcus\'s maternal uncle \u2014 died at 46. "He always complained about burning in his hands. And had kidney problems."',
      feedback:[
        {icon:'\uD83D\uDD25', text:'<strong>Acroparesthesias since adolescence</strong> \u2014 burning pain in hands and feet since teenage years \u2014 is not depression. It is the cardinal early symptom of Fabry disease. Three physicians missed it because they never asked.'},
        {icon:'\uD83D\uDCA7', text:'<strong>Hypohidrosis</strong> is pathognomonic in context. Marcus normalized it. Physicians never asked.'},
        {icon:'\uD83D\uDC41', text:'<strong>Cornea verticillata</strong> was documented by an ophthalmologist and never communicated to the PCP. The diagnosis was in the system and lost.'},
        {icon:'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66', text:'<strong>Maternal uncle who died at 46 with burning hands and kidney disease</strong> \u2014 X-linked inheritance travels through the maternal line. This history makes the diagnosis before any test is ordered.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Examination & Workup',
      sub:'The constellation emerges',
      snapshot:'Skin: multiple dark-red non-blanching papules on lower abdomen and proximal thighs \u2014 angiokeratomas. Neuro: decreased temperature sensation bilaterally in hands/feet, large fiber intact. Labs returned.',
      vitals:[{t:'Cr 1.6 \u2191',f:true},{t:'eGFR 58 \u2193',f:true},{t:'Protein 2+',f:true},{t:'BP 148/92',f:true}],
      questions:[
        {id:'B_q3', prompt:'Angiokeratomas, burning since adolescence, hypohidrosis, corneal opacity, unexplained CKD at 41, proteinuria, maternal uncle died at 46 with identical symptoms. What is your diagnosis?', placeholder:'Fabry disease \u2014 lysosomal storage disorder, GLA gene...'},
        {id:'B_q4', prompt:'What is the single most important confirmatory test?', placeholder:'Alpha-galactosidase A enzyme activity (leukocytes or plasma)...'}
      ],
      nextFindingLabel:'Confirmatory results',
      nextFinding:'<strong>Alpha-Gal A:</strong> 0.3 nmol/hr/mg (reference &gt;3.0) \u2014 critically reduced. DIAGNOSTIC.<br><br><strong>GLA gene sequencing:</strong> c.901C&gt;T (p.Arg301Trp) \u2014 Pathogenic, hemizygous.<br><br><strong>Echocardiogram:</strong> IVS 13mm (normal \u226411mm). LVH atypical for hypertension duration.',
      feedback:[
        {icon:'\uD83E\uDDEC', text:'<strong>Alpha-galactosidase A enzyme assay</strong> \u2014 level below 1% of normal is diagnostic in males. Marcus\'s level is less than 10% of the lower limit.'},
        {icon:'\u2764', text:'<strong>LVH in a 41-year-old without longstanding hypertension</strong> is a red flag for infiltrative or storage cardiomyopathy.'},
        {icon:'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66', text:'<strong>Family cascade testing is now mandatory.</strong> Marcus\'s brother likely has Fabry disease. His mother has CKD \u2014 almost certainly Fabry. This diagnosis saves more than one life.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'What happens after the diagnosis?',
      decisionPrompt:'Alpha-Gal A: 0.3 nmol/hr/mg. GLA: pathogenic variant confirmed. Marcus has Fabry disease. What is your management plan?',
      choices:[
        {text:'Refer to genetics, nephrology, and cardiology. Discuss enzyme replacement therapy. Ophthalmology for slit lamp. Family cascade testing for all at-risk relatives.', outcome:'good'},
        {text:'Refer to nephrology for CKD management only. Follow up in 3 months.', outcome:'partial'},
        {text:'Start ACE inhibitor for proteinuria and hypertension. Recheck labs in 6 months.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Fabry disease requires multidisciplinary management. Enzyme replacement therapy can halt progression if started before irreversible end-organ damage. Family cascade testing is a diagnostic imperative.</p>',
        partial:'<p><strong>Incomplete.</strong> Without genetics and ERT, cardiac and neurologic manifestations will continue to progress.</p>',
        bad:'<p><strong>Misses the diagnosis.</strong> ACE inhibitor treats proteinuria symptomatically but does nothing for the underlying lysosomal storage disorder.</p>'
      },
      keyFindings:['Acroparesthesias since adolescence','Angiokeratomas since childhood','Cornea verticillata (documented, never communicated)','Unexplained CKD + proteinuria, age 41','LVH atypical for hypertension duration','Maternal uncle died at 46 with identical symptoms','\u03B1-Gal A 0.3 \u2014 critically low','GLA c.901C>T \u2014 pathogenic hemizygous'],
      reflection:[
        {icon:'\u23F1', q:'<strong>Marcus saw 3 physicians before you.</strong> At which visit was the diagnosis first achievable? What single question at visit 1 would have changed everything?'},
        {icon:'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66', q:'<strong>Marcus\'s brother has unexplained kidney disease.</strong> His mother has Stage 2 CKD. How do you approach their evaluation now?'},
        {icon:'\uD83E\uDDEC', q:'<strong>GENA integration:</strong> At what visit should GENA have been activated \u2014 and what would it have returned?'}
      ]
    }
  ]
};

window.CASES['D1'] = {
  id:'D1', family:1, isGenetic:false,
  headline:'"I gain weight no matter what I do and I\'m exhausted all the time"',
  patient:'Priya, 29F &nbsp;&#183;&nbsp; Medical student &nbsp;&#183;&nbsp; Attributes it to stress',
  tagline:'The diagnosis a medical student should have made on herself.',
  diagnosis:'Hypothyroidism (Hashimoto\'s Thyroiditis)',
  diagnosisText:'Hashimoto\'s thyroiditis is the most common cause of hypothyroidism in the developed world. Autoimmune destruction of the thyroid leads to progressive hormone deficiency. The presentation is insidious \u2014 fatigue, weight gain, cold intolerance, hair loss, and bradycardia emerge over months and are routinely attributed to stress.',
  genaText:'Hashimoto\'s thyroiditis is polygenic, not single-gene. GENA is not indicated. The clinical lesson: hypothyroidism is a common, treatable diagnosis that should be identified with a TSH before genetic investigation is considered.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Initial Presentation',
      sub:'Priya S., 29F \u2014 fatigue, weight gain, 18 months',
      snapshot:'Priya is a third-year medical student. Attributed 18 months of fatigue and 8 lbs unexplained weight gain to medical school stress. Mother has a thyroid problem. HR 58, Temp 97.1\u00B0F, skin dry, hair thinning at temples.',
      vitals:[{t:'HR 58 \u2193',f:true},{t:'Temp 97.1 \u2193',f:true},{t:'BMI\u2191',f:true},{t:'BP 108/68',f:false}],
      questions:[
        {id:'D1_q1', prompt:'Fatigue, weight gain despite no dietary change, in a 29-year-old woman. Top 3 diagnoses? What history questions differentiate them?', placeholder:'Hypothyroidism, depression, PCOS, anemia \u2014 ask about cold intolerance, hair loss, constipation, periods...'},
        {id:'D1_q2', prompt:'Her mother has a thyroid problem. How does family history of thyroid disease change your pre-test probability for hypothyroidism?', placeholder:'First-degree relative with autoimmune thyroid disease significantly raises pre-test probability...'}
      ],
      nextFindingLabel:'Exam findings that confirm the direction',
      nextFinding:'<strong>Cold intolerance:</strong> "I\'m always cold \u2014 everyone is comfortable and I\'m in a sweater." <strong>Constipation:</strong> New, chronic. <strong>Hair:</strong> Visibly thinned at temples. <strong>Periods:</strong> Irregular, heavier. <strong>Brain fog:</strong> Affecting studying.<br><br><strong>Exam:</strong> HR 58 (bradycardic). Thyroid: mildly enlarged, diffuse, non-tender. Reflexes: delayed relaxation phase bilaterally. Skin: dry, cool.',
      feedback:[
        {icon:'\uD83E\uDD8B', text:'<strong>The thyroid exam and delayed reflexes</strong> are the most specific physical findings. A bradycardic 29-year-old with a goiter and delayed DTRs has hypothyroidism until proven otherwise.'},
        {icon:'\uD83C\uDF21', text:'<strong>Cold intolerance, constipation, and hair loss</strong> are the classic symptoms \u2014 but patients attribute all three to stress. The physician must ask specifically.'},
        {icon:'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66', text:'<strong>Autoimmune thyroid disease is familial.</strong> First-degree relatives of patients with Hashimoto\'s have significantly elevated risk. The family history was the most important pre-test probability modifier.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Labs & Diagnosis',
      sub:'TSH and antibody testing',
      snapshot:'Labs returned. TSH markedly elevated. Free T4 low. Anti-TPO markedly elevated.',
      vitals:[{t:'TSH 14.2 \u2191',f:true},{t:'Free T4 0.6 \u2193',f:true},{t:'Anti-TPO 480 \u2191',f:true},{t:'Cholesterol\u2191',f:true}],
      questions:[
        {id:'D1_q3', prompt:'TSH 14.2, Free T4 0.6, Anti-TPO 480. What is the diagnosis and what does the Anti-TPO tell you about etiology?', placeholder:'Overt hypothyroidism, Hashimoto\'s thyroiditis (autoimmune etiology confirmed by Anti-TPO)...'},
        {id:'D1_q4', prompt:'Her lipid panel shows elevated total cholesterol and LDL. Is this a separate cardiovascular risk requiring treatment?', placeholder:'Secondary hyperlipidemia from hypothyroidism \u2014 will resolve with thyroid treatment...'}
      ],
      nextFindingLabel:'Full result picture',
      nextFinding:'<strong>TSH:</strong> 14.2 mIU/L (markedly elevated). <strong>Free T4:</strong> 0.6 ng/dL (low). <strong>Anti-TPO:</strong> 480 IU/mL \u2014 confirms Hashimoto\'s. <strong>Lipids:</strong> Total cholesterol 218, LDL 138 \u2014 secondary hyperlipidemia from hypothyroidism. Will improve with treatment.',
      feedback:[
        {icon:'\uD83D\uDD2C', text:'<strong>Anti-TPO antibodies</strong> confirm the autoimmune etiology. Present in &gt;90% of Hashimoto\'s thyroiditis.'},
        {icon:'\uD83D\uDC8A', text:'<strong>Secondary hyperlipidemia from hypothyroidism</strong> does not require separate statin therapy at this stage. Treat the thyroid first.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Starting levothyroxine',
      decisionPrompt:'TSH 14.2, Free T4 0.6, Anti-TPO 480. Hashimoto\'s thyroiditis confirmed. What is your management plan?',
      choices:[
        {text:'Start levothyroxine 1.6 mcg/kg/day. Recheck TSH in 6 weeks. Counsel that symptoms improve over weeks-months. Monitor lipids after thyroid is optimized.', outcome:'good'},
        {text:'Start low-dose levothyroxine 25mcg. Titrate slowly. Recheck in 3 months.', outcome:'partial'},
        {text:'Refer to endocrinology before starting treatment.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Full replacement dose is appropriate in a young healthy patient with overt hypothyroidism. Rechecking TSH in 6 weeks allows titration.</p>',
        partial:'<p><strong>Reasonable but conservative.</strong> Starting at 25mcg is for elderly patients or cardiac disease \u2014 not a 29-year-old. Delays normalization by months.</p>',
        bad:'<p><strong>Unnecessary.</strong> Overt hypothyroidism in a young woman is a primary care diagnosis. Endocrinology referral delays treatment.</p>'
      },
      keyFindings:['TSH 14.2 \u2014 overt hypothyroidism','Free T4 0.6 \u2014 below normal','Anti-TPO 480 \u2014 Hashimoto\'s confirmed','HR 58 \u2014 bradycardia','Delayed DTR relaxation phase','Goiter on exam','Family history: mother with thyroid disease'],
      reflection:[
        {icon:'\uD83E\uDDA5', q:'<strong>Priya is a medical student.</strong> She knew the symptoms of hypothyroidism and still attributed them to stress. What does this tell us about how physician-trainees manage their own health?'},
        {icon:'\uD83D\uDCA1', q:'<strong>The family history was the highest-value pre-test probability modifier.</strong> At what point in the encounter did it become the key question to ask?'},
        {icon:'\uD83D\uDD2C', q:'<strong>When would you consider genetic testing in thyroid disease?</strong> What features would prompt referral to genetics vs. management in primary care?'}
      ]
    }
  ]
};

window.CASES['E1'] = {
  id:'E1', family:1, isGenetic:false,
  headline:'"I fall asleep at my desk \u2014 I sleep 8 hours but I\'m never rested"',
  patient:'James, 52M &nbsp;&#183;&nbsp; Teacher &nbsp;&#183;&nbsp; Wife says he snores',
  tagline:'The diagnosis hiding in the bedroom.',
  diagnosis:'Obstructive Sleep Apnea',
  diagnosisText:'Obstructive sleep apnea affects an estimated 1 billion people worldwide and remains dramatically underdiagnosed. The classic presentation \u2014 loud snoring, witnessed apneas, and daytime somnolence in an overweight middle-aged man \u2014 is textbook, yet patients are routinely treated for depression or fatigue without sleep evaluation.',
  genaText:'OSA is not a genetic diagnosis \u2014 it is a structural and physiological condition. GENA is not indicated. Before invoking rare or genetic diagnoses, ensure common conditions have been systematically considered.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Initial Presentation',
      sub:'James H., 52M \u2014 daytime somnolence, non-restorative sleep',
      snapshot:'James is a 52-year-old teacher. Sleeps 8 hours but wakes unrefreshed. Falls asleep at his desk during lunch. Wife moved to the spare room because of snoring. BMI 31. Neck circumference large. BP 148/88.',
      vitals:[{t:'BP 148/88',f:true},{t:'BMI 31',f:true},{t:'Neck 18"',f:true},{t:'HR 76',f:false}],
      questions:[
        {id:'E1_q1', prompt:'Non-restorative sleep, daytime somnolence, loud snoring, in a 52-year-old overweight man. What is your leading diagnosis? What screening tool would you use?', placeholder:'OSA is #1. Use Epworth Sleepiness Scale and STOP-BANG questionnaire...'},
        {id:'E1_q2', prompt:'His wife has moved to the spare room because of snoring. Why is collateral history from a bed partner diagnostically critical?', placeholder:'Patients cannot witness their own apneas \u2014 bed partner is the only observer of the key finding...'}
      ],
      nextFindingLabel:'Collateral history and risk stratification',
      nextFinding:'<strong>Bed partner history:</strong> "He stops breathing \u2014 I\'ve watched him for 10-15 seconds and then he gasps and starts again. It\'s frightening." Witnessed apneas confirmed.<br><br><strong>STOP-BANG:</strong> Snoring \u2713, Tired \u2713, Observed apneas \u2713, Pressure (HTN) \u2713, BMI &gt;35 \u2717, Age &gt;50 \u2713, Neck &gt;40cm \u2713, Male \u2713 \u2192 Score 7/8 \u2014 HIGH RISK.<br><br><strong>Epworth:</strong> 16/24 \u2014 severe daytime somnolence.',
      feedback:[
        {icon:'\uD83D\uDE34', text:'<strong>Witnessed apneas + snoring + non-restorative sleep + STOP-BANG \u22655</strong> is high-probability OSA. A home sleep test is the next step \u2014 not a trial of antidepressants.'},
        {icon:'\u2764', text:'<strong>Untreated OSA causes systemic hypertension, arrhythmia, and increased cardiovascular risk.</strong> James\'s BP of 148/88 may be partly driven by OSA.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Sleep Study Results',
      sub:'Home sleep test results',
      snapshot:'James completed a home sleep test. Results returned.',
      vitals:[{t:'AHI 38 \u2191',f:true},{t:'SpO2 nadir 82%',f:true},{t:'Snoring: severe',f:true},{t:'REM disruption',f:true}],
      questions:[
        {id:'E1_q3', prompt:'Home sleep test: AHI 38 events/hour (severe OSA, threshold >30), SpO2 nadir 82%. What severity category is this and what treatment is indicated?', placeholder:'Severe OSA \u2014 AHI >30. CPAP therapy is first-line...'},
        {id:'E1_q4', prompt:'James says he tried CPAP before "and hated it." How do you address CPAP non-adherence?', placeholder:'Address mask fit, pressure settings, heated humidifier \u2014 alternatives: APAP, bilevel, oral appliance for mild-moderate...'}
      ],
      nextFindingLabel:'Severity and treatment options',
      nextFinding:'<strong>AHI 38</strong> \u2014 Severe OSA. <strong>SpO2 nadir 82%</strong> \u2014 significant nocturnal hypoxemia. First-line: CPAP or auto-titrating APAP. Referral to sleep medicine for adherence support. Dental appliance is second-line for mild-moderate; less effective at AHI 38.',
      feedback:[
        {icon:'\uD83D\uDCA8', text:'<strong>CPAP adherence</strong> is the primary challenge. Common barriers: mask discomfort, pressure intolerance. Solutions: mask fitting, heated humidifier, APAP (auto-adjusting pressure).'},
        {icon:'\u2764', text:'<strong>Severe OSA with SpO2 nadir 82%</strong> drives nocturnal hypertension, arrhythmia (particularly AF), and increases stroke risk. Treatment is not optional.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'CPAP initiation and cardiovascular risk',
      decisionPrompt:'Severe OSA confirmed (AHI 38, SpO2 nadir 82%). James had a prior failed CPAP attempt. BP 148/88. What is your management plan?',
      choices:[
        {text:'Refer to sleep medicine for CPAP titration and adherence support. Discuss APAP. Set BP re-evaluation at 3 months after CPAP adherence established \u2014 may avoid adding antihypertensive.', outcome:'good'},
        {text:'Prescribe CPAP and follow up in 3 months. Add amlodipine for hypertension now.', outcome:'partial'},
        {text:'Given prior CPAP failure, refer to ENT for surgical evaluation (UPPP).', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Sleep medicine optimizes CPAP setup and adherence. APAP auto-adjusts pressure throughout the night \u2014 often more tolerable. Deferring antihypertensive until CPAP is established is evidence-based.</p>',
        partial:'<p><strong>Partially correct</strong> but premature to add antihypertensive before CPAP adherence is established. BP may improve with OSA treatment alone.</p>',
        bad:'<p><strong>Surgery is not first-line for severe OSA.</strong> UPPP has variable success rates. A prior failed CPAP attempt indicates need for better support, not surgery.</p>'
      },
      keyFindings:['AHI 38 \u2014 severe OSA','SpO2 nadir 82%','STOP-BANG 7/8','Witnessed apneas by bed partner','Prior failed CPAP \u2014 adherence problem, not contraindication','BP 148/88 \u2014 likely partially OSA-driven'],
      reflection:[
        {icon:'\uD83D\uDE34', q:'<strong>James has been fatigued for years.</strong> How many prior encounters might have missed OSA? What is your practice for asking about snoring in fatigued patients?'},
        {icon:'\u2764', q:'<strong>How does nocturnal hypoxemia drive hypertension, arrhythmia, and stroke risk?</strong> How does CPAP treatment change this trajectory?'},
        {icon:'\uD83D\uDD2C', q:'<strong>When would you consider genetic investigation for a fatigued patient?</strong> What features in this family differentiate OSA from a condition warranting GENA?'}
      ]
    }
  ]
};

window.CASES['Raymond'] = {
  id:'Raymond', family:1, isGenetic:true,
  headline:'"I\'ve been tired and a bit short of breath \u2014 thought it was just getting older"',
  patient:'Raymond, 68M &nbsp;&#183;&nbsp; Retired &nbsp;&#183;&nbsp; No recent bloodwork',
  tagline:'The danger of attributing new symptoms to old age.',
  diagnosis:'Multiple Myeloma',
  diagnosisText:'Multiple myeloma is a malignancy of plasma cells characterized by bone marrow infiltration, monoclonal protein production, and end-organ damage (CRAB criteria: hyperCalcemia, Renal failure, Anemia, Bone lesions). Median age at diagnosis: 69. Fatigue and anemia are the most common presenting symptoms \u2014 routinely attributed to aging.',
  genaText:'Multiple myeloma is not caused by a single inherited mutation, but cytogenetic abnormalities (del 17p, t(4;14)) have major prognostic implications. GENA assists in risk stratification once diagnosis is established. The clinical lesson: in an older patient with fatigue, anemia, and bone pain, myeloma must be in the differential.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Initial Presentation',
      sub:'Raymond K., 68M \u2014 fatigue, mild dyspnea, no recent labs',
      snapshot:'Raymond is a 68-year-old retired accountant. Fatigue 6 months. Mild exertional dyspnea. Back pain he attributes to getting old. No bloodwork in 4 years. BP 138/82, HR 88.',
      vitals:[{t:'BP 138/82',f:false},{t:'HR 88',f:false},{t:'BMI 24',f:false},{t:'No labs x4yr',f:true}],
      questions:[
        {id:'Raymond_q1', prompt:'Fatigue, dyspnea, and back pain in a 68-year-old with no bloodwork in 4 years. What is your differential? What features of back pain would concern you?', placeholder:'Myeloma, metastatic cancer, anemia \u2014 ask about pain character, night pain, weight loss, bone pain...'},
        {id:'Raymond_q2', prompt:'He attributes everything to "getting older." What is the risk of accepting this attribution without investigation?', placeholder:'Attribution to aging prevents investigation \u2014 ask about weight loss, bone pain, urine changes, infections...'}
      ],
      nextFindingLabel:'History findings that change everything',
      nextFinding:'<strong>Back pain:</strong> Constant aching, worse with movement, some pain at night. Not relieved by lying down. New in past 4 months.<br><br><strong>Weight loss:</strong> 12 lbs in 6 months \u2014 not intentional.<br><br><strong>Recurrent infections:</strong> Three sinus infections in the past year \u2014 unusual for Raymond.<br><br><strong>Urine:</strong> "Frothy sometimes."<br><br><strong>Exam:</strong> Pale. Mild thoracic spine tenderness. No lymphadenopathy.',
      feedback:[
        {icon:'\uD83E\uDDB4', text:'<strong>Bone pain that is constant, worsened with movement, and present at night</strong> is not musculoskeletal. Mechanical back pain improves lying down. Myeloma bone pain does not. Night pain is a red flag.'},
        {icon:'\u2696', text:'<strong>Unintentional 12-lb weight loss in 6 months</strong> in an older man is malignancy until proven otherwise. This symptom alone mandates investigation.'},
        {icon:'\uD83E\uDEAB', text:'<strong>Frothy urine</strong> suggests proteinuria \u2014 in the context of myeloma, this is Bence Jones protein (free immunoglobulin light chains). This finding was available in the history.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Labs & Imaging',
      sub:'The workup that reveals the diagnosis',
      snapshot:'Labs and imaging returned. Results are striking.',
      vitals:[{t:'Hgb 9.2 \u2193',f:true},{t:'Cr 1.9 \u2191',f:true},{t:'Ca 11.4 \u2191',f:true},{t:'M-spike +',f:true}],
      questions:[
        {id:'Raymond_q3', prompt:'CBC: Hgb 9.2 (normocytic). BMP: Cr 1.9, Ca 11.4. SPEP: M-spike (monoclonal IgG kappa). X-ray spine: lytic lesion T10. What diagnosis does this constellation confirm?', placeholder:'CRAB criteria \u2014 anemia, renal failure, hypercalcemia, bone lesion. Multiple myeloma.'},
        {id:'Raymond_q4', prompt:'What is the next step? Who needs to be involved?', placeholder:'Hematology/oncology urgent referral. Bone marrow biopsy. Staging. Consider immediate treatment.'}
      ],
      nextFindingLabel:'Complete diagnostic picture',
      nextFinding:'<strong>CBC:</strong> Hgb 9.2, rouleaux on smear. <strong>BMP:</strong> Cr 1.9, eGFR 42, Ca 11.4. <strong>SPEP:</strong> M-spike 3.2 g/dL (IgG kappa). <strong>24h urine:</strong> 1.8g Bence Jones protein. <strong>Spine X-ray:</strong> Lytic lesion T10, 1.5cm. <strong>Bone marrow biopsy:</strong> 45% plasma cells. Symptomatic myeloma \u2014 requires treatment.',
      feedback:[
        {icon:'\uD83E\uDE7A', text:'<strong>CRAB criteria \u2014 all four present:</strong> hyperCalcemia (11.4), Renal failure (Cr 1.9), Anemia (Hgb 9.2), Bone lesions (T10 lytic). Meeting CRAB defines symptomatic myeloma requiring treatment.'},
        {icon:'\uD83D\uDD2C', text:'<strong>Serum protein electrophoresis (SPEP)</strong> is inexpensive and widely available. It should be ordered in any older adult with unexplained anemia, renal insufficiency, or hypercalcemia.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Urgent oncology referral',
      decisionPrompt:'Symptomatic multiple myeloma confirmed. CRAB criteria all present. Lytic lesion T10. What do you do now?',
      choices:[
        {text:'Urgent hematology/oncology referral (within days). Assess spinal stability. IV hydration for hypercalcemia. Do not start myeloma treatment in primary care \u2014 hand off promptly with full workup.', outcome:'good'},
        {text:'Refer to hematology/oncology. Routine appointment in 2-3 weeks.', outcome:'partial'},
        {text:'Repeat SPEP in 3 months to confirm M-spike is stable before referring.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Symptomatic myeloma with bone lesions, renal failure, and hypercalcemia is an oncologic urgency. The T10 lytic lesion requires spinal stability assessment. IV hydration helps hypercalcemia and protects kidneys.</p>',
        partial:'<p><strong>Too slow.</strong> A 2-3 week wait with active CRAB criteria and a lytic bone lesion is inappropriate. Spinal cord compression from the T10 lesion can occur.</p>',
        bad:'<p><strong>Dangerous.</strong> An M-spike with CRAB criteria is symptomatic myeloma requiring treatment. Waiting 3 months allows further bone destruction and irreversible renal damage.</p>'
      },
      keyFindings:['Normocytic anemia Hgb 9.2','Hypercalcemia Ca 11.4','Renal failure Cr 1.9 eGFR 42','M-spike 3.2 g/dL on SPEP','T10 lytic lesion on spine X-ray','Bone marrow 45% plasma cells','Frothy urine \u2014 Bence Jones proteinuria','Unintentional 12-lb weight loss'],
      reflection:[
        {icon:'\uD83D\uDC74', q:'<strong>Raymond attributed 6 months of symptoms to getting older.</strong> At what point does "I\'m just getting old" require investigation? What is the physician\'s responsibility?'},
        {icon:'\uD83D\uDD2C', q:'<strong>SPEP is inexpensive and widely available.</strong> What is your practice for ordering SPEP in older adults with unexplained anemia or renal insufficiency?'},
        {icon:'\uD83E\uDDEC', q:'<strong>Cytogenetic risk stratification in myeloma</strong> (del 17p, t(4;14)) guides treatment intensity. How does genetic testing in myeloma differ from the inherited rare disease testing GENA performs?'}
      ]
    }
  ]
};

// ════════════════════════════════════════════════════════════
// FAMILY 2 — RECURRENT INFECTIONS
// ════════════════════════════════════════════════════════════

window.CASES['C'] = {
  id:'C', family:2, isGenetic:true,
  headline:'"He keeps getting sick \u2014 five pneumonias in three years"',
  patient:'Liam, 5M &nbsp;&#183;&nbsp; Three pneumonias in 18 months &nbsp;&#183;&nbsp; Absent tonsils',
  tagline:'The immunodeficiency hiding in the frequent-flyer chart.',
  diagnosis:'X-Linked Agammaglobulinemia (XLA, BTK gene)',
  diagnosisText:'XLA is caused by pathogenic variants in BTK, leading to complete absence of mature B lymphocytes and profound hypogammaglobulinemia. Without B cells there are no antibodies. Without antibodies, bacterial infections \u2014 particularly encapsulated organisms \u2014 recur relentlessly.',
  genaText:'XLA is a textbook GENA case: X-linked single-gene disorder, clear phenotype (absent B cells, hypogammaglobulinemia, recurrent bacterial infections in a boy), measurable biomarker (immunoglobulin levels and B cell count), and confirmatory genetic test (BTK sequencing). Absent tonsils on exam should trigger genetic investigation before extensive microbiologic workup.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Third Pneumonia',
      sub:'Liam K., 5M \u2014 recurrent bacterial pneumonias, currently unwell',
      snapshot:'Liam is a 5-year-old with his third pneumonia in 18 months. All bacterial \u2014 S. pneumoniae twice, H. influenzae once. Recovers with prolonged antibiotics but re-infects within months. No serious viral infections. Tonsils absent.',
      vitals:[{t:'Temp 38.2',f:true},{t:'RR 24',f:true},{t:'O2 96%',f:false},{t:'HR 110',f:false}],
      questions:[
        {id:'C_q1', prompt:'A 5-year-old with three bacterial pneumonias in 18 months. What features tell you this is NOT normal childhood illness? What pattern points toward immune deficiency?', placeholder:'All bacterial (not viral), same serious site, onset after 6 months, no serious viral infections...'},
        {id:'C_q2', prompt:'You examine Liam\'s throat: absent tonsils, no palpable lymph nodes. Why are absent tonsils in a child with recurrent bacterial infections a critical finding?', placeholder:'Tonsils are B-cell-dependent lymphoid tissue \u2014 absent tonsils = absent B cells...'}
      ],
      nextFindingLabel:'The finding that changes the differential',
      nextFinding:'<strong>Infection pattern:</strong> All three pneumonias bacterial. Never a serious viral infection. Healthy between episodes. Started getting sick at 18 months (maternal antibody waning).<br><br><strong>Family history:</strong> Maternal uncle died of "a chest infection" in childhood in another country. Died at age 8.<br><br><strong>Exam:</strong> Absent tonsils, no palpable lymph nodes in any chain. RLL consolidation on auscultation.',
      feedback:[
        {icon:'\uD83E\uDDA0', text:'<strong>All-bacterial pattern with onset after 6 months</strong> is the hallmark of humoral (antibody) immune deficiency. Maternal IgG wanes at 6 months. If there are no B cells, there are no antibodies.'},
        {icon:'\uD83D\uDC41', text:'<strong>Absent tonsils are pathognomonic in this context.</strong> Tonsils are B-cell-dependent secondary lymphoid tissue. Absent tonsils in a boy with recurrent bacterial infections = XLA until proven otherwise.'},
        {icon:'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66', text:'<strong>The maternal uncle who died of a chest infection at age 8</strong> \u2014 X-linked disorders travel through the maternal line. A male maternal relative who died of infection in childhood almost certainly had XLA.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Immune Workup',
      sub:'Quantifying the immune deficiency',
      snapshot:'Immunoglobulins and lymphocyte subset panel ordered while treating the current pneumonia.',
      vitals:[{t:'IgG <100 C',f:true},{t:'IgA: absent',f:true},{t:'B cells: 0%',f:true},{t:'T cells: normal',f:false}],
      questions:[
        {id:'C_q3', prompt:'IgG <100 mg/dL (reference >700), IgA undetectable, IgM undetectable. B cells 0% on flow cytometry. T cells and NK cells normal. What is the diagnosis? What confirmatory test do you order?', placeholder:'Absent B cells + absent immunoglobulins in a male = XLA. Confirm with BTK gene sequencing.'},
        {id:'C_q4', prompt:'BTK pathogenic variant confirmed. Liam needs IVIG. Why is IVIG lifelong, and what does it replace?', placeholder:'IVIG replaces the antibody production Liam cannot perform \u2014 protects against encapsulated bacterial infections...'}
      ],
      nextFindingLabel:'Genetic confirmation and treatment plan',
      nextFinding:'<strong>IgG:</strong> &lt;100 mg/dL (critically low). <strong>IgA:</strong> Undetectable. <strong>IgM:</strong> Undetectable. <strong>Flow cytometry:</strong> B cells 0% (reference 7-23%). T cells and NK cells normal. <strong>BTK sequencing:</strong> c.1684T&gt;C (p.Tyr562His) \u2014 Pathogenic, hemizygous. XLA confirmed.',
      feedback:[
        {icon:'\uD83E\uDDEC', text:'<strong>Absent B cells with absent immunoglobulins</strong> is diagnostic of agammaglobulinemia. CVID has B cells present but non-functional; XLA has no B cells at all.'},
        {icon:'\uD83D\uDC89', text:'<strong>IVIG (intravenous immunoglobulin)</strong> is lifelong replacement therapy. Monthly infusions maintain protective IgG levels, dramatically reducing bacterial infection frequency.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Starting IVIG and cascade testing',
      decisionPrompt:'XLA confirmed. BTK pathogenic variant. Liam needs IVIG. His mother is an obligate carrier. What is your complete management plan?',
      choices:[
        {text:'Start IVIG immediately (400-600 mg/kg/month). Refer to pediatric immunology for long-term management. Maternal carrier testing. Genetic counseling for future pregnancies. Treat current pneumonia.', outcome:'good'},
        {text:'Start prophylactic antibiotics while awaiting immunology referral.', outcome:'partial'},
        {text:'Treat current pneumonia. Refer to immunology in 4 weeks for IVIG discussion.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> IVIG should not wait. The mother is an obligate carrier \u2014 her brothers may also be affected. Genetic counseling for future pregnancies is essential.</p>',
        partial:'<p><strong>Inadequate.</strong> Prophylactic antibiotics do not replace immunoglobulin. IVIG should not wait for an immunology appointment weeks away.</p>',
        bad:'<p><strong>Too slow.</strong> Liam has zero immunoglobulins. A 4-week delay exposes him to further serious infections.</p>'
      },
      keyFindings:['Three bacterial pneumonias in 18 months','Onset after 18 months (maternal IgG waned)','All bacterial \u2014 never serious viral','Absent tonsils on exam','No palpable lymph nodes','IgG <100, IgA absent, IgM absent','B cells 0% on flow cytometry','BTK pathogenic hemizygous','Maternal uncle died of chest infection age 8'],
      reflection:[
        {icon:'\uD83D\uDC41', q:'<strong>The absent tonsils were the key physical finding.</strong> How often do you examine and document tonsil size in children with recurrent infections?'},
        {icon:'\uD83E\uDDA0', q:'<strong>The all-bacterial pattern was the key history finding.</strong> How do you differentiate a child with normal daycare viral URIs from a child with immune deficiency?'},
        {icon:'\uD83E\uDDEC', q:'<strong>GENA integration:</strong> Male + recurrent bacterial infections + onset after 6 months + absent tonsils + maternal family history. At what point would you have activated GENA?'}
      ]
    }
  ]
};

window.CASES['D'] = {
  id:'D', family:2, isGenetic:false,
  headline:'"He keeps getting sick \u2014 three urgent care visits this year"',
  patient:'Noah, 4M &nbsp;&#183;&nbsp; Daycare &nbsp;&#183;&nbsp; Anxious mother',
  tagline:'The most important diagnosis: knowing when the answer is normal.',
  diagnosis:'Normal childhood immune response \u2014 recurrent viral URIs typical of daycare exposure',
  diagnosisText:'Children in daycare average 6-12 viral URIs per year. This is a normal immune response, not immune deficiency. The physician\'s role is to distinguish normal from abnormal \u2014 and to reassure appropriately while knowing exactly what would change the picture.',
  genaText:'GENA is not indicated. The clinical reasoning skill is knowing when common is common. Knowing this with confidence \u2014 and being able to explain it clearly \u2014 is as important as ordering the right test.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Parental Concern Visit',
      sub:'Noah B., 4M \u2014 well-appearing, recurrent URIs',
      snapshot:'Noah is a 4-year-old in daycare. Three urgent care visits in the past year \u2014 two viral URIs and one otitis media. Fully vaccinated. Growing normally (55th %ile). Well between episodes. Older sister attends the same daycare and gets sick at the same rate.',
      vitals:[{t:'Temp 98.6',f:false},{t:'O2 99%',f:false},{t:'Well-appearing',f:false},{t:'Growth: normal',f:false}],
      questions:[
        {id:'D_q1', prompt:'What specific history features distinguish a child with normal daycare illness from one with immune deficiency? List the key differentiating questions.', placeholder:'Ask: infection type (viral vs bacterial), hospitalizations, failure to thrive, age of onset, sick sibling...'},
        {id:'D_q2', prompt:'Emily is convinced something is wrong with Noah\'s immune system. What is the risk of over-investigation in a well child?', placeholder:'Validate concern, explain normal immunity \u2014 risk of overtesting: anxiety amplification, false positives...'}
      ],
      nextFindingLabel:'Reassuring features on history and exam',
      nextFinding:'<strong>Infection type:</strong> Viral URIs \u2014 runny nose, low fever, resolves without antibiotics. One otitis media treated successfully. No bacterial pneumonias, no hospitalizations.<br><br><strong>Between episodes:</strong> "He\'s completely fine \u2014 running around, eating normally, totally himself."<br><br><strong>Sibling:</strong> Older sister at same daycare gets sick at exactly the same rate.<br><br><strong>Exam:</strong> Well-appearing, active. Normal tonsils present bilaterally. Normal lymph nodes. Growing at 55th %ile.',
      feedback:[
        {icon:'\u2705', text:'<strong>Normal tonsils present</strong> \u2014 this single exam finding is reassuring. Normal tonsils require normal B cell development.'},
        {icon:'\uD83D\uDC67', text:'<strong>Sick sibling at the same rate</strong> is the most powerful environmental explanation. Shared environment explains identical illness rates.'},
        {icon:'\uD83C\uDFE5', text:'<strong>Never hospitalized, never required IV antibiotics, fully well between episodes</strong> \u2014 these are the reassuring features. Immune deficiency produces severe, hospitalizing, or persistent infections.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Counseling & Reassurance',
      sub:'When the workup is the conversation',
      snapshot:'You check basic labs to provide concrete reassurance. Results returned.',
      vitals:[{t:'IgG: normal',f:false},{t:'CBC: normal',f:false},{t:'Lymphocytes: normal',f:false},{t:'Growth: 55th',f:false}],
      questions:[
        {id:'D_q3', prompt:'CBC and immunoglobulins are completely normal. How do you frame these results for Emily?', placeholder:'Normal IgG confirms antibody production is intact. Normal lymphocytes confirm B and T cell counts are appropriate...'},
        {id:'D_q4', prompt:'Emily asks "so why does he get sick so much?" How do you explain normal childhood immunity and the role of daycare exposure?', placeholder:'Explain: 6-12 URIs per year is normal for daycare children \u2014 immune system is learning, building memory...'}
      ],
      nextFindingLabel:'Normal results \u2014 the reassuring picture',
      nextFinding:'<strong>IgG:</strong> 780 mg/dL (normal). <strong>IgA:</strong> 85 mg/dL (normal). <strong>IgM:</strong> 95 mg/dL (normal). <strong>CBC:</strong> WBC 9.2, lymphocytes 38% (normal). Normal immune function confirmed.',
      feedback:[
        {icon:'\uD83E\uDDEA', text:'<strong>Checking immunoglobulins</strong> provides concrete reassurance and closes the concern.'},
        {icon:'\uD83D\uDCDA', text:'<strong>The real teaching:</strong> 6-12 URIs per year in daycare is the immune system working exactly as designed, building memory for hundreds of pathogens encountered in early childhood.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Counseling Decision',
      sub:'How to reassure effectively',
      decisionPrompt:'Noah\'s immune workup is normal. His illness pattern is consistent with daycare exposure. Emily asks: "Is there anything I can do to help his immune system?" What do you tell her?',
      choices:[
        {text:'Explain that his immune system is normal and working correctly. No supplements or immune boosters are evidence-based for healthy children. Good nutrition, sleep, and vaccinations are what works. Set a clear return threshold: hospitalization, failure to thrive, or bacterial infections.', outcome:'good'},
        {text:'Recommend vitamin D and probiotics \u2014 some evidence for reducing URI frequency. Follow up in 3 months.', outcome:'partial'},
        {text:'Refer to pediatric immunology for a second opinion given parental anxiety.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Evidence-based counseling with a clear return threshold empowers the family and prevents unnecessary urgent care visits.</p>',
        partial:'<p><strong>Partially reasonable</strong> but risks validating the idea that Noah\'s immune system needs supplementation. Vitamin D correction is evidence-based in deficiency; prophylactic supplementation in a non-deficient child is not.</p>',
        bad:'<p><strong>Unnecessary.</strong> Referring a healthy child with normal immune workup to immunology for parental anxiety amplifies the anxiety and suggests something more is wrong.</p>'
      },
      keyFindings:['Viral URIs only \u2014 never bacterial requiring IV antibiotics','Never hospitalized','Well between episodes','Normal growth','Sibling sick at same rate (environmental)','Normal tonsils on exam','Normal immunoglobulins','Normal CBC'],
      reflection:[
        {icon:'\uD83D\uDCAC', q:'<strong>Reassuring an anxious parent effectively is a clinical skill.</strong> How do you validate concern while providing confident reassurance?'},
        {icon:'\uD83E\uDDEA', q:'<strong>Should you have ordered immunoglobulins at all?</strong> What is your threshold for immune workup in a child with recurrent URIs?'},
        {icon:'\uD83D\uDD04', q:'<strong>What would change the picture?</strong> If Noah presented 6 months later with his first bacterial pneumonia, what would you do differently?'}
      ]
    }
  ]
};

window.CASES['C2'] = {
  id:'C2', family:2, isGenetic:true,
  headline:'"Four sinus infections in 18 months \u2014 and one pneumonia that put me in hospital"',
  patient:'Elena, 28F &nbsp;&#183;&nbsp; Teacher &nbsp;&#183;&nbsp; Allergist suspected immune problem',
  tagline:'Adult-onset immune deficiency \u2014 the diagnosis that hides in plain sight.',
  diagnosis:'Common Variable Immune Deficiency (CVID)',
  diagnosisText:'CVID is the most common symptomatic primary immune deficiency in adults. It is characterized by low immunoglobulins (particularly IgG), failure to mount antibody responses to vaccines, and recurrent bacterial infections \u2014 most commonly sinopulmonary. Onset is typically in the 2nd-4th decade.',
  genaText:'CVID is polygenic and complex \u2014 unlike XLA it does not have a single causative gene in most patients. However ~10-20% of cases have identifiable monogenic causes. GENA can assist in sequencing immune-related genes when CVID is confirmed. The primary diagnostic workup is clinical and functional \u2014 immunoglobulin levels and vaccine titers.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Referral Visit',
      sub:'Elena V., 28F \u2014 recurrent bacterial sinusitis, one hospitalized pneumonia',
      snapshot:'Elena is a 28-year-old teacher referred by her allergist. Four bacterial sinus infections in 18 months (all requiring antibiotics), and one hospitalized pneumonia at age 25. Healthy as a child. Mild GI symptoms \u2014 loose stools and bloating.',
      vitals:[{t:'BP 118/72',f:false},{t:'Temp 37.8',f:false},{t:'Well-appearing',f:false},{t:'BMI 21',f:false}],
      questions:[
        {id:'C2_q1', prompt:'CVID classically begins in young adulthood. Why is adult onset of immune deficiency diagnostically different from childhood onset? What distinguishes CVID from XLA?', placeholder:'Adult onset means healthy childhood. B cells present in CVID but dysfunctional; absent in XLA...'},
        {id:'C2_q2', prompt:'She has mild GI symptoms. Why do GI symptoms matter in immune deficiency workup?', placeholder:'CVID commonly causes GI complications \u2014 nodular lymphoid hyperplasia, Giardia, protein-losing enteropathy...'}
      ],
      nextFindingLabel:'History features that refine the diagnosis',
      nextFinding:'<strong>Onset timeline:</strong> Healthy as a child \u2014 normal vaccinations, no serious infections before age 22. First sinusitis at 23. Adult-onset distinguishes from XLA.<br><br><strong>Infection type:</strong> All bacterial \u2014 S. pneumoniae sinusitis twice, H. influenzae once. One hospitalized pneumonia.<br><br><strong>GI:</strong> Intermittent loose stools and bloating for 2 years.',
      feedback:[
        {icon:'\uD83D\uDCC5', text:'<strong>Adult onset</strong> is the key distinguishing feature of CVID from XLA. A woman who was healthy through childhood and begins serious bacterial infections at 22-25 has CVID until proven otherwise.'},
        {icon:'\uD83E\uDDA0', text:'<strong>All-bacterial pattern</strong> \u2014 sinusitis with pneumococcus and H. influenzae \u2014 is the pattern of antibody deficiency. Viral infections require T cells; bacterial encapsulated organisms require antibodies.'},
        {icon:'\uD83E\uDEB3', text:'<strong>GI involvement in CVID</strong> is common and underappreciated. It ranges from malabsorption to inflammatory bowel-like disease.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Immune Workup',
      sub:'Quantifying the deficiency',
      snapshot:'Immunoglobulins and lymphocyte subset panel returned.',
      vitals:[{t:'IgG 280 \u2193',f:true},{t:'IgA 18 \u2193',f:true},{t:'Memory B <1%',f:true},{t:'Vaccine titers: fail',f:true}],
      questions:[
        {id:'C2_q3', prompt:'IgG 280 mg/dL (reference >700), IgA 18, IgM 22. B cells present at 8% (normal count) but memory B cells <1% (normal >27%). Vaccine titers non-protective. What is the diagnosis?', placeholder:'CVID \u2014 B cells present but dysfunctional (cannot mature to plasma cells). Confirmed by low Ig + failed vaccine response.'},
        {id:'C2_q4', prompt:'How does CVID differ from XLA mechanistically? And what does "failed vaccine response" mean clinically?', placeholder:'XLA: no B cells. CVID: B cells present but fail to differentiate into antibody-secreting plasma cells...'}
      ],
      nextFindingLabel:'Diagnostic confirmation',
      nextFinding:'<strong>IgG:</strong> 280 mg/dL (critically low). <strong>IgA:</strong> 18. <strong>IgM:</strong> 22. <strong>Flow cytometry:</strong> B cells 8% (present) but memory B cells &lt;1% (profoundly reduced). <strong>Vaccine titers:</strong> Tetanus &lt;0.1 (non-protective), Pneumococcal non-protective \u2014 confirms functional antibody deficiency.',
      feedback:[
        {icon:'\uD83D\uDD2C', text:'<strong>The memory B cell count</strong> is the key functional discriminator. B cells present but cannot complete maturation to antibody-secreting plasma cells.'},
        {icon:'\uD83D\uDC89', text:'<strong>Vaccine titer testing</strong> clinches the diagnosis. Failure to mount protective responses to tetanus and pneumococcal vaccines confirms clinically significant antibody deficiency.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'IVIG and long-term management',
      decisionPrompt:'CVID confirmed. IgG 280, vaccine titers non-protective. Four bacterial sinus infections, one hospitalized pneumonia. What is your management plan?',
      choices:[
        {text:'Start subcutaneous or IV IgG replacement therapy. Refer to immunology for long-term management. Chest CT to assess for bronchiectasis. GI evaluation for malabsorption. Counsel: no live vaccines going forward.', outcome:'good'},
        {text:'Start prophylactic azithromycin. Refer to immunology. Hold IgG replacement until immunology confirms.', outcome:'partial'},
        {text:'Watch and wait \u2014 IgG is low but she has been managing. Repeat levels in 6 months.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> IgG replacement (IVIG or SCIG) is the treatment for symptomatic CVID. Chest CT is important \u2014 recurrent bacterial pneumonias cause bronchiectasis. Live vaccines are contraindicated.</p>',
        partial:'<p><strong>Inadequate.</strong> Prophylactic antibiotics do not replace IgG therapy. The fundamental problem \u2014 absence of protective antibodies \u2014 is not addressed by antibiotics alone.</p>',
        bad:'<p><strong>Incorrect.</strong> Elena has symptomatic CVID with hospitalizing infections. The indication for IgG replacement is met. Watchful waiting allows further lung damage.</p>'
      },
      keyFindings:['Adult onset \u2014 healthy childhood','Four bacterial sinusitis episodes','One hospitalized pneumonia','IgG 280, IgA 18, IgM 22','B cells present but memory B cells <1%','Vaccine titers non-protective'],
      reflection:[
        {icon:'\uD83D\uDCC5', q:'<strong>Elena was healthy as a child.</strong> What is the average delay from first adult-onset bacterial infection to CVID diagnosis? Why does it take so long?'},
        {icon:'\uD83E\uDEB3', q:'<strong>Bronchiectasis is the long-term complication of untreated CVID.</strong> How does IgG replacement therapy change the natural history of lung disease?'},
        {icon:'\uD83E\uDDEC', q:'<strong>When would genetic sequencing change management in CVID?</strong> Which patients with CVID should have genetic testing?'}
      ]
    }
  ]
};

window.CASES['D2'] = {
  id:'D2', family:2, isGenetic:false,
  headline:'"Three skin infections in two years \u2014 my doctor thinks I\'m a staph carrier"',
  patient:'Carlos, 19M &nbsp;&#183;&nbsp; College wrestler &nbsp;&#183;&nbsp; Teammates get them too',
  tagline:'The infection that looks like immune deficiency \u2014 but isn\'t.',
  diagnosis:'Recurrent MRSA Skin Infections \u2014 SARS decolonization candidate (normal immunity)',
  diagnosisText:'Recurrent skin infections with MRSA are extremely common in contact sport athletes. They mimic immune deficiency in frequency but differ in pattern: skin-limited, same organism, treatable with decolonization. Normal immunity. The clinical skill is recognizing when NOT to work up for immune deficiency.',
  genaText:'GENA is not indicated. Recurrent infections from a single organism at a single site (skin) in an athlete in a high-contact sport is environmental/microbiological \u2014 not immunological.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Third Skin Infection',
      sub:'Carlos M., 19M \u2014 recurrent cellulitis and abscesses',
      snapshot:'Carlos is a 19-year-old college wrestler. Third cellulitis in 2 years, two prior abscesses requiring I&D. All skin infections \u2014 no pneumonias, no sinusitis. Teammates have had similar infections. Currently: left leg cellulitis responding to cephalexin.',
      vitals:[{t:'Temp 38.1',f:true},{t:'HR 96',f:false},{t:'Cellulitis',f:true},{t:'Well-appearing',f:false}],
      questions:[
        {id:'D2_q1', prompt:'Recurrent skin infections in a college wrestler. Before ordering immune workup, what environmental and microbiologic factors explain recurrent SSTIs in contact sport athletes?', placeholder:'MRSA colonization, shared equipment, skin-to-skin contact sport, nasal carriage, locker room environment...'},
        {id:'D2_q2', prompt:'What features of this case would prompt immune workup \u2014 and what features argue against it?', placeholder:'Features against: skin-limited, same organism, teammates affected, well between episodes, no systemic infections...'}
      ],
      nextFindingLabel:'History that explains the pattern',
      nextFinding:'<strong>Sport environment:</strong> Wrestling \u2014 direct skin contact, shared mats, communal showers. Two teammates had similar infections this semester.<br><br><strong>Infection sites:</strong> All skin. No pneumonias, no sinusitis.<br><br><strong>Culture results:</strong> Prior wound culture \u2014 MRSA.<br><br><strong>Between episodes:</strong> Completely well. Active athlete.<br><br><strong>Exam:</strong> Left leg cellulitis. Normal tonsils, normal lymph nodes.',
      feedback:[
        {icon:'\uD83E\uDD3C', text:'<strong>Wrestling is the highest-risk sport for MRSA transmission.</strong> Direct skin contact, shared equipment, and community showers create a perfect environment. This is an environmental diagnosis, not immune deficiency.'},
        {icon:'\uD83D\uDD2C', text:'<strong>MRSA nasal carriage</strong> is present in ~1-2% of the population and higher in athletes. Colonized individuals infect themselves repeatedly until decolonization is completed.'},
        {icon:'\u2705', text:'<strong>Normal tonsils and no systemic infections</strong> are the reassuring exam findings. An athlete completely well between skin episodes with no pneumonias does not have immune deficiency.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Culture & Decolonization',
      sub:'Identifying the organism and planning decolonization',
      snapshot:'Wound culture: MRSA. Nasal swab (ordered): MRSA positive \u2014 Carlos is a nasal carrier.',
      vitals:[{t:'MRSA: confirmed',f:true},{t:'Nasal swab: +',f:true},{t:'Immunity: normal',f:false},{t:'Teammate: +',f:true}],
      questions:[
        {id:'D2_q3', prompt:'MRSA wound culture confirmed. Nasal swab positive \u2014 Carlos is a carrier. What is the decolonization protocol? Who else needs treatment?', placeholder:'Mupirocin nasal ointment x5 days + chlorhexidine body wash. Linens, equipment. Evaluate teammates.'},
        {id:'D2_q4', prompt:'His coach wants to know if Carlos can continue wrestling. What guidance do you give about return to sport?', placeholder:'Covered wounds can return when healing. Active open/draining wounds: off the mat.'}
      ],
      nextFindingLabel:'Decolonization plan',
      nextFinding:'<strong>Decolonization:</strong> Mupirocin nasal ointment 2% BID x5 days. Chlorhexidine 4% body wash daily x5 days. Decontaminate wrestling gear and linens. Evaluate household contacts. Team should be screened.<br><br><strong>Current infection:</strong> Cephalexin may be inadequate for MRSA \u2014 switch to TMP/SMX based on sensitivities.',
      feedback:[
        {icon:'\uD83D\uDC8A', text:'<strong>MRSA decolonization</strong> is highly effective when done correctly. Mupirocin eliminates nasal carriage \u2014 the reservoir from which most skin re-infections originate.'},
        {icon:'\uD83C\uDFC3', text:'<strong>Return-to-sport guidance</strong> for skin infections in wrestlers: no active drainage, wound fully covered, no systemic signs.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Complete management plan',
      decisionPrompt:'MRSA SSTI, third episode. Nasal carrier confirmed. Normal immune function. What is your complete management plan?',
      choices:[
        {text:'Treat current infection with TMP/SMX (MRSA sensitivities). Complete decolonization protocol. Notify the team and school health services. Counsel on wound care. No immune workup needed.', outcome:'good'},
        {text:'Treat current infection. Order immune workup "to be safe." Follow up in 4 weeks.', outcome:'partial'},
        {text:'Refer to immunology for evaluation of recurrent infections.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> This is an environmental/microbiological problem. Targeted treatment, decolonization, and environmental control are the correct response.</p>',
        partial:'<p><strong>Over-investigation.</strong> Immune workup in a well athlete with skin-limited MRSA infections is unlikely to be informative and may generate false positives.</p>',
        bad:'<p><strong>Incorrect referral.</strong> Immunology is for suspected primary immune deficiency \u2014 which this patient does not have.</p>'
      },
      keyFindings:['All infections: skin-limited (no systemic)','Same organism: MRSA','Contact sport athlete \u2014 high-risk environment','Teammates also affected','Nasal carrier confirmed','Completely well between episodes','Normal tonsils, no lymphadenopathy'],
      reflection:[
        {icon:'\uD83E\uDD3C', q:'<strong>What features of recurrent infections prompt immune workup</strong> vs. microbiological investigation? Create your clinical decision rule.'},
        {icon:'\uD83D\uDD2C', q:'<strong>MRSA decolonization requires a complete protocol.</strong> What is the failure mode when decolonization is done incompletely?'},
        {icon:'\uD83D\uDCAC', q:'<strong>How do you explain to Carlos</strong> that his immune system is normal without making him feel dismissed?'}
      ]
    }
  ]
};

window.CASES['E2'] = {
  id:'E2', family:2, isGenetic:true,
  headline:'"Recurrent pulmonary infections since childhood \u2014 now losing weight"',
  patient:'Derek, 34M &nbsp;&#183;&nbsp; Recurrent Pseudomonas pneumonias since age 2 &nbsp;&#183;&nbsp; Underweight',
  tagline:'A diagnosis that should have been made at birth \u2014 and wasn\'t.',
  diagnosis:'Cystic Fibrosis (CFTR F508del/R117H compound heterozygote)',
  diagnosisText:'CF is caused by pathogenic CFTR variants. Adults with mild or atypical phenotypes \u2014 particularly CFTR compound heterozygotes with one severe and one mild variant \u2014 may not be diagnosed until adulthood. Derek has a mild phenotype (pancreatic-sufficient) that delayed diagnosis for 34 years.',
  genaText:'CF is the paradigmatic single-gene disorder for GENA-type analysis: specific gene (CFTR), clear phenotype (pulmonary infections, malabsorption, infertility in males), measurable biomarker (sweat chloride), and established genetic testing. Derek\'s compound heterozygosity (F508del/R117H) explains his milder phenotype. CFTR modulator eligibility (Trikafta) depends on the specific variants identified.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'New Patient',
      sub:'Derek M., 34M \u2014 recurrent Pseudomonas pneumonias since childhood',
      snapshot:'Derek has had recurrent pulmonary infections since early childhood \u2014 all requiring IV antibiotics, many requiring hospitalization. He is chronically underweight (BMI 17.8). He was told as a child that his symptoms were "severe asthma." He has never been evaluated for CF. Chronic productive cough.',
      vitals:[{t:'BMI 17.8 \u2193',f:true},{t:'O2 95%',f:true},{t:'Productive cough',f:true},{t:'Digital clubbing',f:true}],
      questions:[
        {id:'E2_q1', prompt:'Recurrent pulmonary infections with Pseudomonas since childhood, chronic productive cough, underweight, in a 34-year-old labeled "severe asthma." What diagnosis should have been considered years ago?', placeholder:'Cystic fibrosis \u2014 classic CF pathogens (Pseudomonas, Staph), malabsorption, underweight, chronic productive cough...'},
        {id:'E2_q2', prompt:'Derek is pancreatic-sufficient. Why does pancreatic sufficiency delay CF diagnosis?', placeholder:'Pancreatic-sufficient CF has milder phenotype, may not have steatorrhea \u2014 but recurrent pulmonary infections persist...'}
      ],
      nextFindingLabel:'History that reframes the diagnosis',
      nextFinding:'<strong>Pulmonary infections:</strong> Pseudomonas aeruginosa cultured at every hospitalization. This organism is characteristic of CF airways \u2014 it colonizes thick CF mucus and is rare in immunocompetent hosts.<br><br><strong>Infertility:</strong> Derek and his wife have been unable to conceive for 2 years.<br><br><strong>Exam:</strong> Thin man. Barrel chest. Digital clubbing. Bilateral crackles.',
      feedback:[
        {icon:'\uD83E\uDDA0', text:'<strong>Pseudomonas aeruginosa in the lungs of a young person</strong> is a massive red flag. This organism colonizes compromised airways. Its presence at every hospitalization since age 2 should have triggered CF evaluation decades earlier.'},
        {icon:'\uD83E\uDEB3', text:'<strong>Digital clubbing</strong> is chronic hypoxia manifesting in the fingertips. In a 34-year-old with recurrent pulmonary infections, this suggests years of unrecognized chronic lung disease \u2014 not asthma.'},
        {icon:'\uD83D\uDC76', text:'<strong>Male infertility in CF:</strong> ~98% of males with CF have congenital bilateral absence of vas deferens (CBAVD) and obstructive azoospermia. Derek\'s infertility may be the most treatable part of his diagnosis.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Diagnostic Confirmation',
      sub:'Sweat chloride and CFTR sequencing',
      snapshot:'Sweat chloride test and CFTR mutation panel ordered.',
      vitals:[{t:'Sweat Cl: 68 \u2191',f:true},{t:'F508del/R117H',f:true},{t:'FEV1: 55%',f:true},{t:'Azoospermia',f:true}],
      questions:[
        {id:'E2_q3', prompt:'Sweat chloride 68 mmol/L (>60 = diagnostic). CFTR: F508del/R117H compound heterozygote. FEV1 55%. Azoospermia. What does the compound heterozygosity explain?', placeholder:'R117H is a mild CFTR variant \u2014 some residual CFTR function preserved. Explains pancreatic sufficiency and milder phenotype.'},
        {id:'E2_q4', prompt:'Derek asks if he qualifies for Trikafta. How do you determine CFTR modulator eligibility?', placeholder:'Trikafta is approved for F508del-containing genotypes. Derek has one F508del \u2014 he is eligible. This is transformative therapy.'}
      ],
      nextFindingLabel:'Complete diagnostic picture',
      nextFinding:'<strong>Sweat chloride:</strong> 68 mmol/L (diagnostic). <strong>CFTR:</strong> F508del/R117H compound heterozygote. R117H is a class IV mutation (reduced function, not absent) \u2014 explains pancreatic sufficiency. <strong>FEV1:</strong> 55% predicted. <strong>Semen analysis:</strong> Azoospermia \u2014 CBAVD confirmed.',
      feedback:[
        {icon:'\uD83D\uDC8A', text:'<strong>Trikafta (elexacaftor/tezacaftor/ivacaftor)</strong> is approved for patients with at least one F508del allele. In clinical trials, it improved FEV1 by 14 percentage points and dramatically reduced pulmonary exacerbations.'},
        {icon:'\uD83E\uDDEC', text:'<strong>The specific CFTR variant matters</strong> for modulator eligibility. F508del is the most common CF mutation globally. R117H is a mild variant with residual function.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Starting CFTR modulator therapy',
      decisionPrompt:'CF confirmed. CFTR F508del/R117H. FEV1 55%. Pseudomonas colonization. Azoospermia. Trikafta eligible. What is your management plan?',
      choices:[
        {text:'Start Trikafta immediately. Refer to adult CF center. Pulmonary: airway clearance, inhaled antibiotics for Pseudomonas. Nutrition optimization. Reproductive: urology for sperm extraction discussion.', outcome:'good'},
        {text:'Refer to pulmonology. Hold Trikafta until specialist confirms eligibility.', outcome:'partial'},
        {text:'Continue managing as severe asthma. Await CF center referral.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Derek has been undiagnosed for 34 years. Trikafta should not wait \u2014 it directly addresses the underlying CFTR dysfunction and can meaningfully improve lung function even at age 34.</p>',
        partial:'<p><strong>Too conservative.</strong> Trikafta eligibility is based on genotype \u2014 F508del/R117H qualifies. Waiting for specialist confirmation adds unnecessary delay.</p>',
        bad:'<p><strong>The diagnosis must be acted upon.</strong> Treating CF as asthma does not address mucus viscosity, airway clearance, or CFTR dysfunction.</p>'
      },
      keyFindings:['Pseudomonas aeruginosa at every hospitalization since age 2','Digital clubbing','FEV1 55%','Sweat chloride 68 (diagnostic)','CFTR F508del/R117H \u2014 Trikafta eligible','Azoospermia \u2014 CBAVD','BMI 17.8 \u2014 malnutrition','Previously mislabeled as severe asthma 32 years'],
      reflection:[
        {icon:'\u23F1', q:'<strong>Derek was undiagnosed for 34 years.</strong> Newborn CF screening would have identified him at birth. What genotypes can be missed by newborn screening?'},
        {icon:'\uD83D\uDC8A', q:'<strong>Trikafta has transformed CF outcomes.</strong> What can and cannot be reversed when CFTR modulator therapy is started at age 34?'},
        {icon:'\uD83E\uDDEC', q:'<strong>GENA integration:</strong> Recurrent Pseudomonas + underweight + digital clubbing + male infertility. At what point would GENA have been activated?'}
      ]
    }
  ]
};

// ════════════════════════════════════════════════════════════
// FAMILY 3 — DEVELOPMENTAL CONCERNS
// ════════════════════════════════════════════════════════════

window.CASES['A3'] = {
  id:'A3', family:3, isGenetic:true,
  headline:'"Something\'s not right \u2014 he\'s not keeping up"',
  patient:'Aiden, 3M &nbsp;&#183;&nbsp; 10 words at age 3 &nbsp;&#183;&nbsp; Known Down syndrome',
  tagline:'The diagnosis is known. The surveillance gaps are not.',
  diagnosis:'Down Syndrome (Trisomy 21) \u2014 Surveillance and Management Gaps',
  diagnosisText:'Aiden\'s Down syndrome was diagnosed at birth. This case is not about making a genetic diagnosis \u2014 it is about what happens after. Annual surveillance protocols for DS are frequently incomplete.',
  genaText:'GENA\'s role in a known genetic diagnosis shifts from diagnostic to surveillance. For Trisomy 21, GENA can flag which annual screening items are overdue based on the patient\'s age and problem list.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Developmental Review',
      sub:'Aiden C., 3yo M \u2014 developmental follow-up, known Down syndrome',
      snapshot:'Aiden is a 3-year-old with known Trisomy 21. In early intervention since 6 months. Currently says 10 words (expected 50+ at age 3). Walked at 20 months. Had AV canal repair at 6 months. On levothyroxine for hypothyroidism. Mom Jennifer is engaged and proactive.',
      vitals:[{t:'Weight 50th %ile (DS)',f:false},{t:'Height 48th %ile',f:false},{t:'HC 52nd %ile',f:false},{t:'Alert',f:false}],
      questions:[
        {id:'A3_q1', prompt:'Aiden has Down syndrome and is significantly behind in speech. Before assuming this is "just DS," what modifiable causes of speech delay would you investigate first?', placeholder:'Hearing loss, thyroid dysfunction, vision \u2014 all modifiable contributors...'},
        {id:'A3_q2', prompt:'List the annual surveillance items recommended for a 3-year-old with Down syndrome. How many can you list without looking them up?', placeholder:'TSH, audiology, ophthalmology, atlantoaxial X-ray, echocardiogram follow-up, celiac screening...'}
      ],
      nextFindingLabel:'What the workup reveals',
      nextFinding:'<strong>TSH:</strong> 3.1 mIU/L \u2014 stable on levothyroxine.<br><br><strong>Audiology:</strong> Mild conductive hearing loss, 25dB bilateral. Not previously identified. Likely contributing to speech delay.<br><br><strong>Atlantoaxial X-ray:</strong> Atlantodens interval 3mm (normal &lt;4.5mm). No instability.<br><br><strong>Exam:</strong> Joint laxity, flat feet. Referred to orthotics.',
      feedback:[
        {icon:'\uD83D\uDC42', text:'<strong>Mild conductive hearing loss (25dB) was the missed finding.</strong> Hearing loss is extremely common in DS and is a major modifiable contributor to speech delay.'},
        {icon:'\uD83E\uDDBA', text:'<strong>Atlantoaxial instability screening</strong> is mandatory before contact sports, gymnastics, or general anesthesia in DS. Most PCPs do not order this proactively.'},
        {icon:'\uD83E\uDD8B', text:'<strong>Annual TSH in DS is evidence-based.</strong> Aiden\'s is stable \u2014 but was it being checked annually?'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Surveillance & Referrals',
      sub:'Completing the DS surveillance protocol',
      snapshot:'Hearing loss identified. Multiple referrals placed.',
      vitals:[{t:'Hearing: 25dB loss',f:true},{t:'C1-C2: stable',f:false},{t:'TSH: stable',f:false},{t:'Ophtho: pending',f:true}],
      questions:[
        {id:'A3_q3', prompt:'The hearing loss is new. How does this change your counseling to Jennifer about Aiden\'s speech delay?', placeholder:'Hearing loss is a modifiable contributor \u2014 addressing it may significantly improve speech trajectory...'},
        {id:'A3_q4', prompt:'Aiden wants to join a t-ball league. His cervical spine X-ray is stable. What sports guidance do you give?', placeholder:'Atlantoaxial interval 3mm \u2014 stable. Cleared for non-contact sports. Annual re-evaluation.'}
      ],
      nextFindingLabel:'Surveillance checklist summary',
      nextFinding:'Completed: TSH \u2713, Audiology \u2713, Atlantoaxial X-ray \u2713, ENT referral \u2713, Ophthalmology referral \u2713, Developmental pediatrics \u2713. Outstanding: Echocardiogram follow-up (post-AV canal), Celiac screen (not yet done at age 3).',
      feedback:[
        {icon:'\uD83D\uDCCB', text:'<strong>A complete DS surveillance checklist</strong> at every well visit prevents accumulation of missed items.'},
        {icon:'\uD83C\uDFAF', text:'<strong>PE tubes for conductive hearing loss in DS</strong> can meaningfully improve language acquisition. The highest-yield finding of this visit.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Empowering the family',
      decisionPrompt:'Hearing loss found. Spine stable. TSH stable. Jennifer asks: "Is there anything else we should be doing that we haven\'t been?" What is your answer?',
      choices:[
        {text:'Review the full DS surveillance protocol. Identify the ophthalmology gap. Confirm annual cardiology follow-up post-AV canal. Provide a written DS health supervision checklist to bring to every future visit.', outcome:'good'},
        {text:'Tell her the hearing loss is the main finding, that\'s being addressed. Follow up in 6 months.', outcome:'partial'},
        {text:'Reassure her that Aiden is doing well for DS and continue current management.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Excellent.</strong> Empowering the family with a written checklist ensures continuity. Ophthalmology was overdue. Cardiology follow-up post-AV canal repair should continue through adolescence.</p>',
        partial:'<p><strong>Incomplete.</strong> Addressing hearing loss is important but the question specifically asked about gaps. Ophthalmology was 18 months overdue.</p>',
        bad:'<p><strong>Missed opportunity.</strong> "Doing well for DS" is not a surveillance plan. A new hearing loss was identified at this visit \u2014 there are likely other gaps.</p>'
      },
      keyFindings:['Conductive hearing loss 25dB bilateral \u2014 newly identified','TSH stable on levothyroxine','Atlantoaxial interval 3mm \u2014 stable','Ophthalmology overdue (18 months)','Post-AV canal \u2014 cardiology follow-up unclear'],
      reflection:[
        {icon:'\uD83D\uDCCB', q:'<strong>How many DS annual surveillance items can you list?</strong> What is your practice\'s system for tracking these?'},
        {icon:'\uD83D\uDC42', q:'<strong>The hearing loss was the highest-yield finding.</strong> What is your threshold for audiology referral in a child with DS and speech delay?'},
        {icon:'\uD83E\uDDEC', q:'<strong>GENA\'s role in known genetic diagnoses:</strong> How could GENA flag overdue surveillance items for patients with established genetic conditions across an EMR panel?'}
      ]
    }
  ]
};

window.CASES['B3'] = {
  id:'B3', family:3, isGenetic:true,
  headline:'"She said six words and then stopped. Something changed."',
  patient:'Lily, 18 months &nbsp;&#183;&nbsp; Lost words, decreased eye contact, hand-wringing',
  tagline:'Normal development. Then regression. The distinction that makes the diagnosis.',
  diagnosis:'Rett Syndrome (MECP2 gene, X-linked dominant)',
  diagnosisText:'Rett syndrome is caused by pathogenic MECP2 variants and occurs almost exclusively in females. It is defined by a period of apparently normal development followed by regression. Hand-wringing stereotypies, irregular breathing, and acquired microcephaly distinguish Rett from autism.',
  genaText:'Lily\'s constellation \u2014 female sex, normal development to 15 months, true regression with word loss, hand-wringing stereotypies, acquired microcephaly, and irregular breathing \u2014 is the exact input that leads GENA to prioritize MECP2 sequencing.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Developmental Regression',
      sub:'Lily H., 18mo F \u2014 regression, hand stereotypies',
      snapshot:'Michelle brings Lily, 18 months. "She said six words and then around 15 months she just stopped." Lily is in the exam room \u2014 not tracking consistently. Her hands move in a repetitive wringing pattern she cannot stop.',
      vitals:[{t:'Weight 45th %ile',f:false},{t:'HC: 50th\u219235th',f:true},{t:'Alert',f:false},{t:'Not tracking',f:true}],
      questions:[
        {id:'B3_q1', prompt:'The most critical question: was there a period of NORMAL development before the regression? Why does this distinction change the entire differential?', placeholder:'Prior normal development excludes ASD. Regression after normal development = Rett, metabolic, or regression disorder...'},
        {id:'B3_q2', prompt:'Michelle describes repetitive hand movements Lily cannot stop \u2014 a wringing or washing motion. How do you distinguish Rett syndrome hand stereotypies from autistic repetitive behaviors?', placeholder:'Rett: hand-wringing, midline, involuntary, replaces purposeful hand use. ASD: hand-flapping, voluntary, preserves purposeful use...'}
      ],
      nextFindingLabel:'History and exam findings',
      nextFinding:'<strong>Developmental history:</strong> 6 words, waved, pointed, good eye contact at 12 months \u2014 documented on well visit. True regression at 15 months. Lost all words. Decreased eye contact. Lost purposeful hand use.<br><br><strong>Breathing:</strong> Episodes of breath-holding and hyperventilation in the exam room.<br><br><strong>HC:</strong> Deceleration from 50th to 35th %ile over 6 months \u2014 acquired microcephaly.',
      feedback:[
        {icon:'\uD83D\uDD04', text:'<strong>True regression after normal development</strong> is the hallmark of Rett syndrome. "She used to say words and now she doesn\'t" is not autism \u2014 autism is failure to acquire language. This one question changes the entire differential.'},
        {icon:'\u270B', text:'<strong>Hand-wringing stereotypies</strong> are pathognomonic for Rett syndrome. The child cannot stop them and cannot use her hands purposefully alongside them.'},
        {icon:'\uD83D\uDCCF', text:'<strong>HC deceleration</strong> \u2014 acquired microcephaly \u2014 is a Rett hallmark. The head was normal at birth and at 12 months. Measure and plot HC at every visit.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Genetic Confirmation',
      sub:'MECP2 sequencing and EEG',
      snapshot:'MECP2 gene sequencing and EEG results returned.',
      vitals:[{t:'MECP2: PATHOGENIC',f:true},{t:'EEG: abnormal',f:true},{t:'Seizure risk\u2191',f:true},{t:'QT: monitor',f:true}],
      questions:[
        {id:'B3_q3', prompt:'MECP2 c.916C>T (p.Arg306Cys) \u2014 Pathogenic confirmed. How do you counsel Michelle? What does the trajectory look like for Lily?', placeholder:'Rett has stages: regression (now), pseudostationary, late motor. Some girls stabilize. AAC devices, seizure monitoring, QT monitoring.'},
        {id:'B3_q4', prompt:'Rett syndrome MECP2 mutations are almost always de novo (new). What does this mean for the family\'s recurrence risk?', placeholder:'De novo mutation \u2014 recurrence risk <1%. Carrier mother possible (germline mosaicism) \u2014 genetic counseling for future pregnancies.'}
      ],
      nextFindingLabel:'Diagnostic confirmation and team plan',
      nextFinding:'<strong>MECP2:</strong> c.916C&gt;T (p.Arg306Cys) \u2014 Pathogenic. Rett confirmed.<br><br><strong>EEG:</strong> Diffusely slow background, centrotemporal spike-wave. Elevated seizure risk.<br><br><strong>ECG:</strong> Prolonged QT interval \u2014 annual monitoring required.<br><br><strong>Plan:</strong> Neurology, genetics, developmental pediatrics, speech/AAC, OT, PT.',
      feedback:[
        {icon:'\uD83D\uDC8A', text:'<strong>Trofinetide (Daybue)</strong> was FDA-approved in 2023 for Rett syndrome \u2014 the first approved therapy. MECP2 gene therapy trials are underway.'},
        {icon:'\uD83E\uDEC0', text:'<strong>QT interval monitoring</strong> is a Rett-specific requirement that many general pediatricians don\'t know. Prolonged QT increases sudden death risk \u2014 annual ECG recommended.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Building the long-term care plan',
      decisionPrompt:'Rett syndrome confirmed. Lily is 18 months. Michelle asks: "What should we be doing right now to give her the best chance?"',
      choices:[
        {text:'Early intensive therapy: speech/AAC, OT, PT. Seizure precautions. QT monitoring. Trofinetide discussion. Neurology, genetics, developmental pediatrics. Connect family with International Rett Syndrome Foundation and active clinical trials.', outcome:'good'},
        {text:'Refer to neurology and genetics. Follow up in 3 months once specialist appointments confirmed.', outcome:'partial'},
        {text:'Explain there is no cure and management is supportive. Refer to neurology. Follow up in 6 months.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Excellent.</strong> Early intensive therapy during regression phase is associated with better long-term functional outcomes. AAC devices preserve communication. QT monitoring and seizure precautions are safety-critical.</p>',
        partial:'<p><strong>Incomplete.</strong> The family needs support, a coordinated care plan, and knowledge of what to watch for during regression. A 3-month wait without active therapy guidance misses a critical window.</p>',
        bad:'<p><strong>Framing this as "just supportive" underestimates what can be done.</strong> Trofinetide is approved. Gene therapy trials are enrolling. The family deserves a proactive plan.</p>'
      },
      keyFindings:['Normal development to 15 months \u2014 true regression','6 words lost','Hand-wringing stereotypies','Irregular breathing','HC deceleration 50th\u219235th %ile','MECP2 c.916C>T \u2014 Pathogenic','EEG: abnormal, elevated seizure risk','QT prolongation on ECG'],
      reflection:[
        {icon:'\uD83D\uDD04', q:'<strong>The single most important question was: was there prior normal development?</strong> What would have happened if the first physician assumed autism without asking about regression?'},
        {icon:'\u270B', q:'<strong>The hand stereotypies are pathognomonic.</strong> What is your differential for repetitive hand movements in an 18-month-old girl?'},
        {icon:'\uD83E\uDDEC', q:'<strong>GENA integration:</strong> Female + prior normal development + regression + hand-wringing + acquired microcephaly + irregular breathing. At what point would you have activated GENA?'}
      ]
    }
  ]
};

window.CASES['C3'] = {
  id:'C3', family:3, isGenetic:true,
  headline:'"He doesn\'t make eye contact and gets very upset with any change in routine"',
  patient:'Noah, 4M &nbsp;&#183;&nbsp; Limited joint attention &nbsp;&#183;&nbsp; Repetitive behaviors',
  tagline:'When the presentation looks like Rett \u2014 but isn\'t.',
  diagnosis:'Autism Spectrum Disorder (ASD, Level 2) + 16p11.2 microdeletion on chromosomal microarray',
  diagnosisText:'ASD is defined by persistent deficits in social communication and restricted/repetitive behaviors. Noah has never had normal development \u2014 no regression. His macrocephaly and 16p11.2 microdeletion on chromosomal microarray explain his ASD etiology.',
  genaText:'ASD with macrocephaly and no regression warrants first-line genetic testing: Fragile X DNA testing and chromosomal microarray. The 16p11.2 microdeletion found here has implications for prognosis and family testing.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Autism Evaluation',
      sub:'Noah P., 4M \u2014 social communication delay, repetitive behaviors',
      snapshot:'Noah is a 4-year-old. Parents have suspected autism for over a year. Limited joint attention from the start \u2014 no pointing, no showing by 18 months. 50 words at age 4, mostly echolalic. Rigid routines, melts down with change. Head circumference large.',
      vitals:[{t:'Weight 60th %ile',f:false},{t:'HC 58cm (>97th)',f:true},{t:'Alert',f:false},{t:'No regression',f:false}],
      questions:[
        {id:'C3_q1', prompt:'This case is in the same family as Lily (Rett). What is the most important distinguishing feature between ASD and Rett syndrome?', placeholder:'ASD: never had normal development, no regression. Rett: normal development then regression. This is the diagnostic pivot.'},
        {id:'C3_q2', prompt:'Noah has macrocephaly (HC >97th %ile). Why does macrocephaly in an ASD evaluation prompt genetic investigation?', placeholder:'Macrocephaly in ASD is associated with PTEN mutations and 16p11.2 deletions \u2014 require specific testing.'}
      ],
      nextFindingLabel:'History that confirms the diagnosis',
      nextFinding:'<strong>NO regression:</strong> Robert confirms Noah has never had normal social development \u2014 limited joint attention from the start, no regression. This is failure to acquire.<br><br><strong>Exam:</strong> Good eye contact briefly. Avoids examiner\'s gaze. Echolalic speech. No hand-wringing stereotypies. Normal tonsils. HC 58cm (&gt;97th %ile).<br><br><strong>Skin:</strong> No caf\u00e9-au-lait spots (NF1 excluded), no ash-leaf macules (TSC excluded).',
      feedback:[
        {icon:'\uD83D\uDD04', text:'<strong>No regression</strong> is the defining feature distinguishing Noah from Lily. ASD is characterized by failure to acquire typical social communication milestones \u2014 not by loss of previously acquired skills.'},
        {icon:'\uD83E\uDDE0', text:'<strong>Macrocephaly in ASD</strong> is associated with 16p11.2 microdeletion (which causes macrocephaly) and PTEN mutations. Chromosomal microarray and PTEN sequencing are indicated.'},
        {icon:'\uD83D\uDC41', text:'<strong>Skin exam in neurodevelopmental evaluation:</strong> Caf\u00e9-au-lait spots (NF1), ash-leaf macules (TSC) are genetic dermatologic findings that can explain developmental disorders.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Genetic Workup',
      sub:'ADOS-2, Fragile X, and chromosomal microarray',
      snapshot:'ADOS-2 assessment confirms ASD Level 2. Genetic testing returned.',
      vitals:[{t:'ADOS-2: ASD L2',f:true},{t:'Fragile X: neg',f:false},{t:'16p11.2 deletion',f:true},{t:'IQ: 88 (avg)',f:false}],
      questions:[
        {id:'C3_q3', prompt:'Chromosomal microarray: 16p11.2 microdeletion (593kb). Fragile X: negative. How does finding the 16p11.2 deletion change management compared to "idiopathic" ASD?', placeholder:'16p11.2 has implications for prognosis, family testing, and specific associated comorbidities (obesity, seizures)...'},
        {id:'C3_q4', prompt:'Robert\'s parents want to know if they carry the deletion. Why is parental testing important for recurrence risk counseling?', placeholder:'If one parent carries 16p11.2 deletion \u2014 50% recurrence risk. De novo deletion \u2014 recurrence <1%.'}
      ],
      nextFindingLabel:'Genetic results and implications',
      nextFinding:'<strong>Fragile X:</strong> Negative. <strong>Chromosomal microarray:</strong> 16p11.2 microdeletion, 593kb \u2014 associated with ASD, intellectual disability, macrocephaly, and obesity risk. <strong>Neuropsychological testing:</strong> IQ 88 (average), reading 76 (co-occurring dyslexia). <strong>ADOS-2:</strong> ASD Level 2.',
      feedback:[
        {icon:'\uD83E\uDDEC', text:'<strong>16p11.2 microdeletion</strong> is one of the most common copy number variants associated with ASD (~0.5-1% of ASD cases). Associated with macrocephaly, ASD, intellectual disability, and obesity risk.'},
        {icon:'\uD83D\uDCDA', text:'<strong>Co-occurring dyslexia</strong> was identified on neuropsychological testing \u2014 a finding that changes educational intervention.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'ASD management and genetic follow-up',
      decisionPrompt:'ASD Level 2 confirmed. 16p11.2 microdeletion identified. IQ 88 with dyslexia. What is your management plan?',
      choices:[
        {text:'ABA therapy and school-based supports (IEP with reading intervention for dyslexia). Genetics counseling \u2014 parental microarray testing. Monitor for 16p11.2-associated obesity and seizure risk. Annual developmental surveillance.', outcome:'good'},
        {text:'ABA therapy referral. Follow up in 6 months.', outcome:'partial'},
        {text:'ABA therapy and reassure parents the genetic finding "doesn\'t change anything."', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> The 16p11.2 finding changes management: parental testing determines recurrence risk, obesity monitoring is warranted, and seizure surveillance is appropriate. Dyslexia requires specific educational intervention.</p>',
        partial:'<p><strong>Incomplete.</strong> ABA is appropriate but ignores the genetic finding and co-occurring dyslexia. These require specific management beyond behavioral intervention.</p>',
        bad:'<p><strong>Incorrect.</strong> The genetic finding changes management. Parental testing, obesity monitoring, and seizure surveillance are all indicated.</p>'
      },
      keyFindings:['No prior regression \u2014 failure to acquire','Limited joint attention from the start','Macrocephaly (HC >97th %ile)','ADOS-2: ASD Level 2','Fragile X: negative','16p11.2 microdeletion \u2014 593kb','Co-occurring dyslexia on neuropsychological testing'],
      reflection:[
        {icon:'\uD83D\uDD04', q:'<strong>The no-regression question</strong> was the pivot that distinguished Noah from Lily. How do you systematically ask about developmental regression in every evaluation?'},
        {icon:'\uD83E\uDDEC', q:'<strong>When should chromosomal microarray be ordered in ASD?</strong> Current guidelines recommend microarray in all ASD evaluations. What is the yield?'},
        {icon:'\uD83E\uDDE0', q:'<strong>Noah has ASD Level 2, dyslexia, and a 16p11.2 microdeletion.</strong> How do you explain to Robert that these three diagnoses are related and each needs its own intervention track?'}
      ]
    }
  ]
};

window.CASES['D3'] = {
  id:'D3', family:3, isGenetic:true,
  headline:'"She\'s always happy \u2014 but the teacher says it\'s not normal"',
  patient:'Emma, 6F &nbsp;&#183;&nbsp; Intellectual disability &nbsp;&#183;&nbsp; Seizures &nbsp;&#183;&nbsp; "Normal chromosomes"',
  tagline:'The happy child whose diagnosis was missed because the wrong test was ordered.',
  diagnosis:'Angelman Syndrome (UBE3A, maternal 15q11 deletion)',
  diagnosisText:'Angelman syndrome is caused by loss of maternal UBE3A function. The characteristic phenotype is severe intellectual disability, absence of speech, seizures, ataxic gait, inappropriate happiness, and fascination with water. Standard karyotype is normal \u2014 the diagnosis requires methylation analysis or FISH of chromosome 15.',
  genaText:'Angelman syndrome is a classic GENA case: imprinting disorder with a specific phenotype, characteristic EEG pattern, and a specific diagnostic test (chromosome 15 methylation analysis). The key teaching: "normal chromosomes" does NOT exclude Angelman.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Neurodevelopmental Evaluation',
      sub:'Emma W., 6F \u2014 intellectual disability, seizures, behavioral profile',
      snapshot:'Emma is a 6-year-old with intellectual disability (IQ ~60), seizures controlled on valproate, and no functional speech. Prior genetics workup: "normal chromosomes" (karyotype only). Teacher notes her happiness is inappropriate \u2014 she laughs spontaneously at nothing. Has a distinctive puppetlike gait.',
      vitals:[{t:'Weight 40th %ile',f:false},{t:'HC 30th %ile',f:false},{t:'Alert',f:false},{t:'Happy affect',f:true}],
      questions:[
        {id:'D3_q1', prompt:'Emma\'s prior genetic testing showed "normal chromosomes." Her physician told the family she\'s been completely evaluated genetically. What was missed \u2014 and what specific test was NOT ordered?', placeholder:'Standard karyotype misses Angelman. Chromosome 15 methylation analysis is required...'},
        {id:'D3_q2', prompt:'What is the significance of the "happy phenotype" in Angelman syndrome? Why is inappropriate happiness a diagnostic feature?', placeholder:'Inappropriately happy affect with spontaneous laughter is characteristic of Angelman \u2014 reflects disrupted limbic function, not well-being...'}
      ],
      nextFindingLabel:'Exam findings that complete the constellation',
      nextFinding:'<strong>Gait:</strong> Wide-based, stiff-legged "marionette" or puppetlike gait \u2014 characteristic of Angelman.<br><br><strong>Speech:</strong> No functional words. Communicates with gestures. Fascinated by water.<br><br><strong>Behavior:</strong> Spontaneous laughter without clear trigger throughout the exam.<br><br><strong>Skin:</strong> Mildly hypopigmented compared to parents \u2014 loss of OCA2 gene near 15q11 deletion reduces melanin.',
      feedback:[
        {icon:'\uD83D\uDE0A', text:'<strong>The Angelman happy phenotype</strong> is distinctive but frequently misattributed to "good temperament." Inappropriate happiness in a severely disabled child is a neurobiological feature of UBE3A dysfunction.'},
        {icon:'\uD83E\uDD96', text:'<strong>The puppetlike gait</strong> \u2014 stiff, jerky, wide-based, with arm raising for balance \u2014 is highly characteristic. This gait pattern should trigger Angelman consideration.'},
        {icon:'\uD83E\uDDEC', text:'<strong>"Normal chromosomes" does NOT mean normal genetics.</strong> Standard karyotype has a resolution of ~5-10 Mb. The 15q11 deletion in most Angelman patients is ~4-6 Mb \u2014 at the limit of or below karyotype detection.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Correct Testing',
      sub:'Chromosome 15 methylation analysis',
      snapshot:'You order chromosome 15 methylation analysis. Results returned.',
      vitals:[{t:'Methylation: ABNORMAL',f:true},{t:'EEG: characteristic',f:true},{t:'Diagnosis: confirmed',f:true},{t:'Prior test: missed',f:true}],
      questions:[
        {id:'D3_q3', prompt:'Methylation analysis: abnormal methylation \u2014 maternal 15q11 deletion confirmed. EEG: high-amplitude delta activity with characteristic Angelman pattern. How do you explain to Karen that "normal chromosomes" was not a complete evaluation?', placeholder:'Karyotype and methylation testing are different tests. Karyotype missed the deletion because it was below karyotype resolution.'},
        {id:'D3_q4', prompt:'What are the implications of the specific subtype (maternal deletion) for the family?', placeholder:'Maternal deletion: ~50% risk if mother carries balanced translocation. De novo deletion: recurrence <1%.'}
      ],
      nextFindingLabel:'Diagnostic confirmation and subtype',
      nextFinding:'<strong>Chromosome 15 methylation:</strong> Abnormal \u2014 maternal deletion confirmed (70% of Angelman cases). <strong>FISH:</strong> Deletion of 15q11.2-q13 (~5Mb). <strong>EEG:</strong> High-amplitude delta activity (1-3 Hz) with spike-wave bursts \u2014 classic Angelman pattern.',
      feedback:[
        {icon:'\uD83E\uDDEC', text:'<strong>The Angelman EEG pattern</strong> \u2014 high-amplitude 1-3 Hz delta with triphasic waves and spike-wave bursts \u2014 is highly characteristic. An EEG was never ordered for Emma.'},
        {icon:'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67', text:'<strong>Maternal karyotype</strong> is essential when a maternal deletion is found. If Emma\'s mother carries a balanced translocation of chromosome 15, recurrence risk is much higher than the typical <1% for de novo deletions.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'After a delayed diagnosis',
      decisionPrompt:'Angelman syndrome confirmed. Emma is 6 \u2014 the diagnosis was missed for 4 years. Karen asks: "What should we have been doing differently, and what do we do now?"',
      choices:[
        {text:'Acknowledge the delayed diagnosis. Initiate AAC evaluation immediately. Optimize seizure management. Genetics counseling \u2014 maternal karyotype. Connect family with Angelman Syndrome Foundation. Intensify PT and OT.', outcome:'good'},
        {text:'Refer to neurology and genetics. Follow up in 3 months.', outcome:'partial'},
        {text:'Explain that management would have been the same regardless of when the diagnosis was made.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Acknowledging the delay validates the family\'s experience. AAC devices should have been initiated years ago; starting now still improves communication outcomes. The Angelman Syndrome Foundation provides family support and research trial information.</p>',
        partial:'<p><strong>Too passive.</strong> Specialist referral is appropriate but the family needs actionable guidance now, not another wait.</p>',
        bad:'<p><strong>Incorrect and dismissive.</strong> The diagnosis matters for multiple reasons: AAC initiation, correct seizure management, accurate recurrence risk counseling, and access to Angelman-specific research trials.</p>'
      },
      keyFindings:['Severe intellectual disability','No functional speech','Seizures onset age 3','Inappropriate happiness \u2014 spontaneous laughter','Puppetlike gait','Water fascination','Normal karyotype (wrong test!)','Chromosome 15 methylation: ABNORMAL \u2014 maternal deletion'],
      reflection:[
        {icon:'\uD83E\uDDEC', q:'"Normal chromosomes" is not a complete genetic evaluation. How do you counsel families who present with prior "normal genetic testing"?'},
        {icon:'\uD83D\uDE0A', q:'<strong>Inappropriate happiness is a feature, not reassurance.</strong> How do you explain to families that a child\'s apparent happiness does not mean the disability is less severe?'},
        {icon:'\u23F1', q:'<strong>Four years of delayed diagnosis.</strong> What were the real costs? How do you approach families after a diagnostic delay with honesty and forward focus?'}
      ]
    }
  ]
};

window.CASES['E3'] = {
  id:'E3', family:3, isGenetic:false,
  headline:'"Tyler\'s teacher says he can\'t focus and he\'s always moving"',
  patient:'Tyler, 8M &nbsp;&#183;&nbsp; Inattention &nbsp;&#183;&nbsp; Hyperactivity &nbsp;&#183;&nbsp; Reading below grade level',
  tagline:'The most common pediatric neurodevelopmental diagnosis \u2014 and the one most often over-investigated.',
  diagnosis:'ADHD, Combined Presentation \u2014 with co-occurring dyslexia',
  diagnosisText:'ADHD is the most common neurodevelopmental disorder in school-age children (prevalence ~5-10%). Standard genetic workup is NOT indicated for straightforward ADHD without atypical features. The clinical skill is making the diagnosis confidently with validated rating scales.',
  genaText:'ADHD does not routinely require genetic testing. This case teaches clinicians to resist the pull toward investigation when the clinical picture is clear. GENA is not indicated for Tyler.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'ADHD Evaluation',
      sub:'Tyler B., 8M \u2014 inattention, hyperactivity, academic underperformance',
      snapshot:'Tyler is an 8-year-old boy. Two years of teacher concern about inattention and inability to sit still. Below grade level in reading. No regression. Good social skills \u2014 friends, appropriate emotions. Dad had ADHD as a child. Symptoms present both at home AND at school.',
      vitals:[{t:'Weight 55th %ile',f:false},{t:'Height 52nd %ile',f:false},{t:'HC: normal',f:false},{t:'Alert, active',f:false}],
      questions:[
        {id:'E3_q1', prompt:'Tyler is in the same complaint family as Lily (Rett) and Noah (ASD). What features of this case immediately distinguish it from a disorder requiring genetic investigation?', placeholder:'No regression, normal head circumference, good social skills, symptoms in 2 settings, family history of ADHD...'},
        {id:'E3_q2', prompt:'DSM-5 requires ADHD symptoms to be present in 2 or more settings. Why is the two-setting requirement diagnostically important?', placeholder:'Two-setting criterion distinguishes ADHD from situational responses to a specific teacher or home environment...'}
      ],
      nextFindingLabel:'History and exam findings',
      nextFinding:'<strong>Two-setting confirmed:</strong> Teacher reports inattention in school. Dad reports same behavior at home. Different teachers, same pattern each year.<br><br><strong>No regression:</strong> Always been this way \u2014 no prior normal period.<br><br><strong>Exam:</strong> Active, fidgety. Makes good eye contact. Socially appropriate. No tics, no stereotypies, normal HC. No caf\u00e9-au-lait spots.',
      feedback:[
        {icon:'\uD83C\uDFEB', text:'<strong>Symptoms in 2+ settings</strong> is the most important DSM-5 criterion. A child inattentive only in school may have a learning disability or classroom-specific issue. ADHD produces symptoms wherever the child is.'},
        {icon:'\uD83D\uDC65', text:'<strong>Good social skills and appropriate emotions</strong> distinguish ADHD from ASD. Tyler has friends and reads emotional cues correctly.'},
        {icon:'\uD83E\uDDEC', text:'<strong>ADHD is highly heritable (~74%).</strong> Dad\'s ADHD history meaningfully raises pre-test probability.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Validated Assessment',
      sub:'Vanderbilt rating scales and neuropsychological testing',
      snapshot:'Vanderbilt ADHD Rating Scales returned from parent and teacher. Neuropsychological testing completed.',
      vitals:[{t:'Vanderbilt: parent+',f:true},{t:'Vanderbilt: teacher+',f:true},{t:'IQ: 104 (avg)',f:false},{t:'Reading: 76 (low)',f:true}],
      questions:[
        {id:'E3_q3', prompt:'Vanderbilt scales: significantly elevated inattention and hyperactivity on both parent AND teacher reports. Neuropsych: IQ 104 (average), reading 76 (below average), working memory 82. What co-occurring diagnosis does this reveal?', placeholder:'Co-occurring dyslexia \u2014 reading 76 = below 6th percentile. ADHD + dyslexia is a common and frequently missed combination.'},
        {id:'E3_q4', prompt:'Tyler\'s dad asks about genetic testing \u2014 "should we check his chromosomes?" How do you respond?', placeholder:'ADHD does not require genetic testing in a typical presentation. No intellectual disability, no atypical features \u2014 workup is complete with rating scales and neuropsychological testing.'}
      ],
      nextFindingLabel:'Complete assessment picture',
      nextFinding:'<strong>Vanderbilt (Parent):</strong> Significantly elevated inattention and hyperactivity. <strong>Vanderbilt (Teacher):</strong> Same. <strong>IQ:</strong> 104. <strong>Reading:</strong> 76 (6th percentile \u2014 dyslexia). <strong>Diagnosis:</strong> ADHD Combined + Co-occurring Dyslexia.',
      feedback:[
        {icon:'\uD83D\uDCDA', text:'<strong>Co-occurring dyslexia</strong> is present in ~20-40% of children with ADHD. It requires specific educational intervention (structured literacy) beyond behavioral ADHD management.'},
        {icon:'\uD83E\uDDEC', text:'<strong>Genetic testing is not indicated</strong> for typical ADHD. Indicators for workup: intellectual disability, dysmorphic features, or atypical features that don\'t fit ADHD.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'ADHD and dyslexia management plan',
      decisionPrompt:'ADHD Combined presentation confirmed. Co-occurring dyslexia identified. IQ 104. What is your management plan?',
      choices:[
        {text:'Multimodal ADHD treatment: behavioral therapy + stimulant medication discussion. IEP with ADHD accommodations AND structured literacy intervention for dyslexia \u2014 two separate tracks. Follow up 4-6 weeks after medication initiation.', outcome:'good'},
        {text:'Start stimulant medication. Refer to school for accommodations. Follow up in 3 months.', outcome:'partial'},
        {text:'Behavior therapy only \u2014 prefer to avoid medication. Follow up in 6 months.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> ADHD and dyslexia require two separate intervention tracks. The IEP must address both. Medication improves ADHD symptoms but does not teach decoding \u2014 dyslexia requires explicit phonics instruction.</p>',
        partial:'<p><strong>Incomplete.</strong> Starting medication is reasonable but the dyslexia is not addressed. Accommodations for ADHD alone will not resolve the reading disability.</p>',
        bad:'<p><strong>Undertreatment.</strong> Behavior therapy alone is first-line only in children under 6. For a school-age child with ADHD Combined, guidelines recommend medication + behavioral intervention.</p>'
      },
      keyFindings:['Symptoms in 2+ settings','No regression \u2014 always been this way','Good social skills','Normal HC, no dysmorphic features','Father had ADHD','Vanderbilt: both parent and teacher elevated','IQ 104 but reading 76 \u2014 co-occurring dyslexia','Genetic testing NOT indicated'],
      reflection:[
        {icon:'\uD83E\uDDEC', q:'<strong>Tyler\'s dad asked about chromosome testing.</strong> What is your framework for deciding when genetic testing is indicated in a child with neurodevelopmental concerns?'},
        {icon:'\uD83D\uDCDA', q:'<strong>The dyslexia was found on neuropsychological testing.</strong> What is the risk of treating ADHD without identifying co-occurring learning disabilities?'},
        {icon:'\uD83D\uDD04', q:'<strong>This case is in the same family as Lily (Rett) and Noah (ASD).</strong> What clinical features in the first few minutes of each encounter should direct you toward or away from genetic investigation?'}
      ]
    }
  ]
};

// ════════════════════════════════════════════════════════════
// FAMILY 4 — JOINT PAIN
// ════════════════════════════════════════════════════════════

window.CASES['F4A'] = {
  id:'F4A', family:4, isGenetic:false,
  headline:'"My hands and wrists have been swollen and painful for 8 months"',
  patient:'Maria, 32F &nbsp;&#183;&nbsp; Graphic designer &nbsp;&#183;&nbsp; Mother has RA',
  tagline:'Symmetric small joint synovitis \u2014 the pattern that makes the diagnosis.',
  diagnosis:'Rheumatoid Arthritis (Seropositive \u2014 high Anti-CCP)',
  diagnosisText:'RA is a systemic autoimmune disease characterized by symmetric small joint synovitis. MCP and PIP joints with sparing of DIPs is the classic distribution. High Anti-CCP confirms the diagnosis and predicts erosive disease.',
  genaText:'RA is polygenic \u2014 HLA-DRB1 is the primary genetic risk factor. GENA is not indicated for straightforward seropositive RA. The clinical lesson: autoimmune arthritis is a clinical and serological diagnosis.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Initial Presentation',
      sub:'Maria L., 32F \u2014 bilateral hand and wrist swelling, 8 months',
      snapshot:'Maria is a 32-year-old graphic designer. Bilateral symmetric swelling and pain of MCPs, PIPs, and wrists for 8 months. Morning stiffness >1 hour. Mild improvement with ibuprofen. Mother has RA.',
      vitals:[{t:'BP 118/74',f:false},{t:'HR 82',f:false},{t:'Temp 37.4',f:false},{t:'BMI 22',f:false}],
      questions:[
        {id:'F4A_q1', prompt:'Symmetric small joint polyarthritis with morning stiffness >1 hour in a 32-year-old woman with family history of RA. What is your leading diagnosis? What history features confirm inflammatory vs. mechanical arthritis?', placeholder:'RA most likely \u2014 symmetric, small joints, morning stiffness >1hr. Mechanical: worse with use, better with rest, stiffness <30min...'},
        {id:'F4A_q2', prompt:'What is the significance of morning stiffness duration in distinguishing inflammatory from mechanical arthritis?', placeholder:'Inflammatory: morning stiffness >1 hour, improves with movement. Mechanical: <30 minutes, worsens with use...'}
      ],
      nextFindingLabel:'Exam findings',
      nextFinding:'<strong>Hands:</strong> Bilateral MCP and PIP synovitis \u2014 boggy swelling, warmth, tenderness. Wrist synovitis bilaterally. DIP joints spared.<br><br><strong>Distribution:</strong> Symmetric. Small joints. DIP-sparing. Classic RA pattern.',
      feedback:[
        {icon:'\uD83E\uDD32', text:'<strong>Symmetric MCP/PIP synovitis with DIP sparing</strong> is the classic RA distribution. DIP involvement distinguishes psoriatic arthritis (DIP predominant) from RA (DIP spared).'},
        {icon:'\u23F0', text:'<strong>Morning stiffness >1 hour</strong> is the defining clinical feature of inflammatory arthritis. Mechanical arthritis stiffness resolves in minutes.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Serology & Imaging',
      sub:'Anti-CCP, RF, inflammatory markers, X-rays',
      snapshot:'Lab results and hand X-rays returned.',
      vitals:[{t:'Anti-CCP >250 \u2191',f:true},{t:'RF 182 \u2191',f:true},{t:'ESR 68 \u2191',f:true},{t:'Erosion on X-ray',f:true}],
      questions:[
        {id:'F4A_q3', prompt:'RF 182, Anti-CCP >250 (strongly seropositive). ESR 68, CRP 3.2. Hand X-rays: periarticular osteopenia, early erosion at right 2nd MCP. What does high Anti-CCP predict?', placeholder:'High Anti-CCP predicts erosive disease \u2014 more aggressive treatment indicated. Anti-CCP is more specific than RF for RA.'},
        {id:'F4A_q4', prompt:'Her lipid panel is mildly elevated. Should you treat her cholesterol now?', placeholder:'RA causes systemic inflammation that raises cardiovascular risk. Treat RA aggressively first \u2014 reassess lipids once RA is controlled.'}
      ],
      nextFindingLabel:'Full serological picture',
      nextFinding:'<strong>RF:</strong> 182 IU/mL (strongly positive). <strong>Anti-CCP:</strong> &gt;250 U/mL (strongly positive). <strong>ESR:</strong> 68, CRP 3.2. <strong>X-rays:</strong> Early erosion at right 2nd MCP, periarticular osteopenia.',
      feedback:[
        {icon:'\uD83C\uDFAF', text:'<strong>High Anti-CCP</strong> is the most specific RA marker and predicts erosive joint disease. Early aggressive DMARD therapy prevents irreversible erosive damage.'},
        {icon:'\u2764', text:'<strong>RA is a systemic disease</strong> \u2014 it increases cardiovascular risk independent of traditional risk factors. Aggressive RA treatment reduces this excess cardiovascular risk.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'DMARD initiation',
      decisionPrompt:'Seropositive RA confirmed. High Anti-CCP. Early erosive disease. Active synovitis. What is your management plan?',
      choices:[
        {text:'Refer to rheumatology urgently. Initiate methotrexate (MTX) as anchor DMARD after TB screening. Consider short course bridging prednisone. NSAIDs for symptom relief. Recheck CMP/CBC in 4-6 weeks after MTX start.', outcome:'good'},
        {text:'Start NSAIDs and refer to rheumatology. Await rheumatology visit before starting DMARD.', outcome:'partial'},
        {text:'Refer to rheumatology. Continue ibuprofen. No further action in primary care.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Early aggressive DMARD therapy is the standard of care for seropositive RA with erosive disease. Methotrexate is the anchor DMARD. Primary care can initiate this \u2014 waiting for rheumatology causes irreversible joint damage.</p>',
        partial:'<p><strong>Too slow.</strong> Every month of untreated active RA results in additional erosive damage. NSAIDs alone do not prevent erosion.</p>',
        bad:'<p><strong>Passing the buck.</strong> Early RA is a primary care diagnosis that primary care can begin treating. Waiting passively allows progressive erosive damage.</p>'
      },
      keyFindings:['Symmetric MCP/PIP synovitis \u2014 bilateral','DIP joints spared','Morning stiffness >1 hour','RF 182 (strongly positive)','Anti-CCP >250 (high erosive risk)','Early erosion at right 2nd MCP','ESR 68, CRP 3.2','Mother has RA'],
      reflection:[
        {icon:'\u23F1', q:'<strong>Every month of active RA causes irreversible erosive damage.</strong> What is your system for ensuring patients with suspected inflammatory arthritis are evaluated urgently?'},
        {icon:'\uD83C\uDFAF', q:'<strong>Anti-CCP >250 predicts erosive disease.</strong> How does the serologic result change your urgency of treatment?'},
        {icon:'\uD83D\uDD2C', q:'<strong>When would you consider genetic testing in a joint pain case?</strong> What features would prompt GENA activation for a patient presenting with arthritis?'}
      ]
    }
  ]
};

window.CASES['F4B'] = {
  id:'F4B', family:4, isGenetic:true,
  headline:'"My back pain is the worst when I wake up \u2014 it gets better when I move"',
  patient:'Kevin, 24M &nbsp;&#183;&nbsp; Software developer &nbsp;&#183;&nbsp; Back pain since age 22',
  tagline:'Inflammatory back pain in a young man \u2014 the pattern most primary care physicians miss.',
  diagnosis:'Ankylosing Spondylitis (HLA-B27 positive, axial spondyloarthropathy)',
  diagnosisText:'Ankylosing spondylitis is a seronegative spondyloarthropathy causing chronic inflammatory arthritis of the axial skeleton. The characteristic feature is inflammatory back pain \u2014 worse at rest and at night, improved with movement and NSAIDs, onset before age 40.',
  genaText:'AS has strong HLA-B27 genetic association (~90% of AS patients are HLA-B27 positive). HLA-B27 testing is a legitimate part of the diagnostic workup \u2014 it is a genetic marker that is clinically actionable in this context.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Initial Presentation',
      sub:'Kevin O., 24M \u2014 inflammatory back pain, 2 years',
      snapshot:'Kevin is a 24-year-old software developer. Back pain for 2 years \u2014 worst when he wakes up, improves when he moves. Morning stiffness 1-2 hours. NSAIDs provide dramatic relief. Right heel pain (enthesitis). Painful red right eye last year (anterior uveitis). Paternal uncle has "a stiff spine."',
      vitals:[{t:'BP 124/76',f:false},{t:'HR 74',f:false},{t:'Schober: 2cm \u2193',f:true},{t:'SI joints tender',f:true}],
      questions:[
        {id:'F4B_q1', prompt:'Inflammatory back pain \u2014 worse at rest, better with exercise \u2014 in a 24-year-old. Why is this pattern completely opposite to mechanical back pain?', placeholder:'Inflammatory: synovial inflammation drives stiffness that improves with movement. Mechanical: cartilage wear worsens with loading, better with rest.'},
        {id:'F4B_q2', prompt:'He had anterior uveitis last year. Why is anterior uveitis a diagnostically critical extra-articular feature?', placeholder:'Anterior uveitis is the most common extra-articular feature of AS \u2014 present in ~25-40% of AS patients.'}
      ],
      nextFindingLabel:'History and exam findings',
      nextFinding:'<strong>Inflammatory pattern:</strong> Worse at rest and at night, improves with exercise. NSAID response "dramatic."<br><br><strong>Enthesitis:</strong> Right heel pain \u2014 Achilles tendon insertion.<br><br><strong>Family history:</strong> Paternal uncle with "stiff spine" and hunched posture \u2014 likely undiagnosed AS.<br><br><strong>Exam:</strong> Schober test 2cm increase (normal &gt;5cm). Bilateral SI joint tenderness.',
      feedback:[
        {icon:'\uD83C\uDFC3', text:'<strong>Inflammatory back pain that improves with exercise</strong> is the opposite of every other cause of back pain. This single feature \u2014 better with movement \u2014 is the most important differentiator.'},
        {icon:'\uD83D\uDC41', text:'<strong>Anterior uveitis is the red flag extra-articular feature.</strong> A young man with inflammatory back pain who had a painful red eye has spondyloarthropathy until proven otherwise.'},
        {icon:'\uD83D\uDCCF', text:'<strong>The Schober test measures lumbar spine flexion.</strong> A 2cm increase (normal &gt;5cm) confirms reduced spinal mobility. This test takes 30 seconds and is almost never performed in primary care.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'HLA-B27 and MRI',
      sub:'Genetic marker and imaging confirmation',
      snapshot:'HLA-B27, MRI sacroiliac joints, and inflammatory markers returned.',
      vitals:[{t:'HLA-B27: POSITIVE',f:true},{t:'Sacroiliitis: bilateral',f:true},{t:'CRP 2.8 \u2191',f:true},{t:'ESR 42 \u2191',f:true}],
      questions:[
        {id:'F4B_q3', prompt:'HLA-B27 positive. MRI SI joints: bilateral bone marrow edema and erosions \u2014 active sacroiliitis. CRP 2.8, ESR 42. What does HLA-B27 tell you \u2014 and what does it NOT tell you?', placeholder:'HLA-B27 positive in 90% of AS but also in 8% of general population \u2014 not diagnostic alone. Must be interpreted with clinical picture.'},
        {id:'F4B_q4', prompt:'Kevin asks about his uncle \u2014 should the uncle be evaluated?', placeholder:'HLA-B27 is ~90% heritable. First-degree relatives of AS patients who are HLA-B27 positive have ~10-20% lifetime risk.'}
      ],
      nextFindingLabel:'Confirmation and staging',
      nextFinding:'<strong>HLA-B27:</strong> Positive. <strong>MRI SI joints:</strong> Bilateral bone marrow edema and erosion \u2014 active sacroiliitis. No bridging syndesmophytes yet. <strong>CRP 2.8, ESR 42.</strong> Meets ASAS criteria for ankylosing spondylitis.',
      feedback:[
        {icon:'\uD83E\uDDEC', text:'<strong>HLA-B27 in context</strong> \u2014 present in ~90% of AS patients but also in ~8% of the general population. The clinical picture makes the diagnosis \u2014 HLA-B27 raises the probability.'},
        {icon:'\uD83C\uDFE5', text:'<strong>MRI shows sacroiliitis before plain films show fusion.</strong> MRI bone marrow edema at SI joints is the earliest detectable finding and confirms the diagnosis years before structural damage appears on plain film.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Starting treatment for AS',
      decisionPrompt:'AS confirmed. Active sacroiliitis on MRI. HLA-B27 positive. NSAIDs provide good symptom relief. What is your management plan?',
      choices:[
        {text:'Rheumatology referral. Continue NSAIDs scheduled (continuous use may slow radiographic progression). Physical therapy for spinal mobility. Ophthalmology for baseline and uveitis monitoring. Discuss biologic therapy (TNF inhibitor) if NSAID failure.', outcome:'good'},
        {text:'Continue ibuprofen PRN. Refer to rheumatology. Follow up in 3 months.', outcome:'partial'},
        {text:'Physical therapy alone \u2014 he\'s young, avoid medications.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Scheduled full-dose NSAIDs (not PRN) are first-line for active AS. Continuous NSAID use has evidence for slowing radiographic progression. Physical therapy preserves spinal mobility.</p>',
        partial:'<p><strong>Suboptimal.</strong> PRN ibuprofen provides symptom relief but not the continuous anti-inflammatory effect that scheduled NSAIDs provide.</p>',
        bad:'<p><strong>Inadequate.</strong> Physical therapy alone does not adequately control AS inflammation. Without anti-inflammatory therapy, progressive inflammation leads to eventual fusion.</p>'
      },
      keyFindings:['Inflammatory back pain \u2014 worse at rest, better with movement','Morning stiffness 1-2 hours','NSAID response dramatic','Anterior uveitis (prior episode)','Right heel enthesitis','Schober test 2cm (reduced flexion)','SI joint tenderness bilaterally','HLA-B27 positive','MRI: bilateral sacroiliitis'],
      reflection:[
        {icon:'\uD83C\uDFC3', q:'<strong>Kevin had back pain for 2 years before diagnosis.</strong> What is the primary care screening question for inflammatory back pain that would have changed the trajectory?'},
        {icon:'\uD83D\uDC41', q:'<strong>The uveitis was a missed opportunity.</strong> Anterior uveitis in a young person should prompt rheumatologic evaluation. How do you build this reflex into your practice?'},
        {icon:'\uD83E\uDDEC', q:'<strong>HLA-B27 is one of the strongest HLA disease associations known.</strong> How does genetic testing for HLA-B27 differ from the rare inherited disease testing GENA performs?'}
      ]
    }
  ]
};

window.CASES['F4C'] = {
  id:'F4C', family:4, isGenetic:false,
  headline:'"My finger joints are swollen \u2014 but it\'s the end joints, not the knuckles"',
  patient:'Sandra, 45F &nbsp;&#183;&nbsp; Nurse &nbsp;&#183;&nbsp; Known psoriasis for 10 years',
  tagline:'The dermatology patient who needs a rheumatologist.',
  diagnosis:'Psoriatic Arthritis (DIP predominant pattern)',
  diagnosisText:'Psoriatic arthritis affects up to 30% of patients with psoriasis. The DIP-predominant pattern \u2014 with nail pitting and dactylitis \u2014 is one of five clinical patterns. Seronegative arthritis with psoriasis and DIP involvement is PsA until proven otherwise.',
  genaText:'PsA is a complex polygenic inflammatory arthritis. GENA is not indicated. The diagnosis is clinical: psoriasis + inflammatory arthritis + characteristic distribution + seronegative.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Referred from Dermatology',
      sub:'Sandra T., 45F \u2014 DIP arthritis, known psoriasis',
      snapshot:'Sandra is a 45-year-old nurse referred by her dermatologist. Psoriatic plaques 10 years. Now: asymmetric DIP joint swelling of right 3rd and 4th fingers, and left 2nd finger. "Sausage swelling" of left 3rd finger. Nail pitting.',
      vitals:[{t:'BP 132/82',f:false},{t:'HR 78',f:false},{t:'Temp 98.8',f:false},{t:'BMI 27',f:false}],
      questions:[
        {id:'F4C_q1', prompt:'DIP joint arthritis in a patient with known psoriasis. Why does DIP involvement distinguish psoriatic arthritis from rheumatoid arthritis?', placeholder:'RA spares DIPs \u2014 affects MCPs and PIPs. PsA can involve any joint including DIPs. DIP + psoriasis = PsA pattern.'},
        {id:'F4C_q2', prompt:'Sandra has "sausage swelling" of her entire left 3rd finger. What is this finding called? What is its diagnostic significance?', placeholder:'Dactylitis \u2014 diffuse swelling of an entire digit. Dactylitis is a hallmark of psoriatic arthritis.'}
      ],
      nextFindingLabel:'Exam findings',
      nextFinding:'<strong>Skin:</strong> Psoriatic plaques on bilateral elbows and posterior scalp.<br><br><strong>Nails:</strong> Pitting of multiple fingernails. Onycholysis of right 3rd fingernail.<br><br><strong>Joints:</strong> Right 3rd and 4th DIP joints \u2014 swelling, tenderness. <strong>Left 3rd finger:</strong> Dactylitis \u2014 entire finger diffusely swollen.',
      feedback:[
        {icon:'\uD83D\uDC85', text:'<strong>Nail pitting and onycholysis</strong> are highly associated with psoriatic arthritis \u2014 present in ~80% of PsA patients. Every psoriasis patient\'s nails should be examined.'},
        {icon:'\uD83C\uDF2D', text:'<strong>Dactylitis (sausage digit)</strong> is a hallmark of psoriatic arthritis. It represents tenosynovitis of the flexor tendons causing the entire digit to swell.'},
        {icon:'\uD83D\uDD0E', text:'<strong>DIP involvement</strong> most reliably distinguishes PsA from RA. RA protects the DIPs. PsA preferentially attacks them \u2014 especially in patients with nail disease.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Serology and Imaging',
      sub:'Seronegative confirmation and erosion pattern',
      snapshot:'Serology and hand X-rays returned.',
      vitals:[{t:'RF: negative',f:false},{t:'Anti-CCP: negative',f:false},{t:'Pencil-in-cup',f:true},{t:'ESR 38 \u2191',f:true}],
      questions:[
        {id:'F4C_q3', prompt:'RF negative, Anti-CCP negative (seronegative). Hand X-rays: DIP erosions with early "pencil-in-cup" deformity. What does "pencil-in-cup" mean and why is it characteristic of PsA?', placeholder:'Pencil-in-cup: one side of joint erodes to a point (pencil), other side scoops out (cup). Characteristic of PsA \u2014 not seen in RA.'},
        {id:'F4C_q4', prompt:'Sandra is already on methotrexate for her skin psoriasis. How does this affect her arthritis management?', placeholder:'MTX treats skin psoriasis and may help joints, but at current dose may be insufficient. Rheumatology will assess whether biologic is needed.'}
      ],
      nextFindingLabel:'Full picture',
      nextFinding:'<strong>RF:</strong> Negative. <strong>Anti-CCP:</strong> Negative. Seronegative. <strong>X-rays:</strong> DIP erosions, early pencil-in-cup deformity. No periarticular osteopenia. <strong>ESR 38.</strong> PsA \u2014 DIP predominant with dactylitis confirmed.',
      feedback:[
        {icon:'\uD83C\uDFAF', text:'<strong>Seronegative + DIP arthritis + psoriasis + dactylitis + nail disease</strong> is PsA by CASPAR criteria. No further diagnostic testing required.'},
        {icon:'\uD83D\uDC8A', text:'<strong>Methotrexate for skin psoriasis</strong> is generally less effective for PsA joints than biologics. Rheumatology will determine whether escalation or biologic addition is required.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Referral and treatment optimization',
      decisionPrompt:'PsA confirmed \u2014 DIP predominant with dactylitis. Early erosive disease. Currently on methotrexate for skin. What is your management plan?',
      choices:[
        {text:'Urgent rheumatology referral \u2014 early erosive PsA requires biologic therapy assessment. Coordinate with dermatology \u2014 unify skin and joint management plans. Continue current MTX while awaiting rheumatology.', outcome:'good'},
        {text:'Continue MTX. Refer to rheumatology. Routine appointment.', outcome:'partial'},
        {text:'Increase ibuprofen. Add hydroxychloroquine. Refer to rheumatology in 3 months.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Early erosive PsA with dactylitis requires rheumatology assessment for biologic therapy \u2014 TNF inhibitors, IL-17 inhibitors, or IL-23 inhibitors. MTX alone is often insufficient for joint disease in PsA.</p>',
        partial:'<p><strong>Too slow.</strong> Early erosive disease should be evaluated urgently by rheumatology.</p>',
        bad:'<p><strong>Incorrect.</strong> Hydroxychloroquine is not indicated for PsA. NSAIDs alone do not prevent erosive progression.</p>'
      },
      keyFindings:['Psoriasis 10 years','DIP predominant asymmetric arthritis','Dactylitis \u2014 sausage digit left 3rd','Nail pitting and onycholysis','RF negative, Anti-CCP negative (seronegative)','Pencil-in-cup deformity on X-ray','Currently on MTX for skin disease'],
      reflection:[
        {icon:'\uD83D\uDC85', q:'<strong>Nail examination was the key physical finding.</strong> At your last visit with a psoriasis patient \u2014 did you examine the nails?'},
        {icon:'\uD83C\uDF2D', q:'<strong>Dactylitis is pathognomonic for spondyloarthropathy.</strong> How do you distinguish dactylitis from a single-joint infectious or crystal arthritis?'},
        {icon:'\uD83D\uDD2C', q:'<strong>HLA-B27 in AS is clinically actionable. HLA-C in PsA is not routinely tested.</strong> What distinguishes a genetic marker that changes management from one that doesn\'t?'}
      ]
    }
  ]
};

window.CASES['F4D'] = {
  id:'F4D', family:4, isGenetic:false,
  headline:'"My knees ache, especially going down stairs \u2014 it\'s been getting worse for 3 years"',
  patient:'Harold, 72M &nbsp;&#183;&nbsp; Retired carpenter &nbsp;&#183;&nbsp; Bilateral knee pain',
  tagline:'The most common arthritis \u2014 and the one most often overtreated.',
  diagnosis:'Osteoarthritis \u2014 bilateral knees, moderate-severe (Kellgren-Lawrence Grade 3-4 left)',
  diagnosisText:'Osteoarthritis is the most common form of arthritis, affecting >30 million Americans. It is characterized by progressive cartilage loss, subchondral bone changes, and osteophyte formation. Mechanical pain \u2014 worse with activity, better with rest, morning stiffness <30 minutes \u2014 distinguishes OA from inflammatory arthritis.',
  genaText:'OA is not a traditional genetic diagnosis. Polygenic risk factors contribute to OA risk, but genetic testing does not change management. GENA is not indicated.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Initial Presentation',
      sub:'Harold M., 72M \u2014 bilateral knee pain, 3 years',
      snapshot:'Harold is a 72-year-old retired carpenter. Bilateral knee pain 3 years, worse with activity especially stairs, better with rest. Morning stiffness <30 minutes. Left worse than right. Prior right knee injury age 22. Acetaminophen helps moderately. BMI 29.',
      vitals:[{t:'BP 138/84',f:false},{t:'HR 72',f:false},{t:'BMI 29',f:true},{t:'Antalgic gait',f:true}],
      questions:[
        {id:'F4D_q1', prompt:'Bilateral knee pain in a 72-year-old with morning stiffness <30 minutes, worse with activity, better with rest, prior knee injury. What is the diagnosis? What features confirm mechanical rather than inflammatory arthritis?', placeholder:'OA: worse with activity, better with rest, stiffness <30min, no systemic features, prior injury, older age...'},
        {id:'F4D_q2', prompt:'Why must weight-bearing X-rays be taken rather than X-rays with the patient lying down?', placeholder:'Weight-bearing X-rays show joint space under load \u2014 accurately reflects cartilage loss. Non-weight-bearing underestimates severity.'}
      ],
      nextFindingLabel:'Exam findings',
      nextFinding:'<strong>Left knee:</strong> Crepitus on range of motion. Small effusion. Bony enlargement of medial joint line. Varus deformity. ROM 0-95 degrees (limited). <strong>Right knee:</strong> Crepitus. ROM 0-110. <strong>No warmth, no significant synovitis</strong> \u2014 mechanical, not inflammatory.',
      feedback:[
        {icon:'\u2699', text:'<strong>Crepitus, bony joint-line enlargement, and varus deformity</strong> are the classic exam findings of OA. Varus (bow-leg) deformity reflects medial compartment collapse \u2014 most common pattern in knee OA.'},
        {icon:'\uD83D\uDCCF', text:'<strong>Morning stiffness <30 minutes</strong> is the cardinal feature distinguishing OA from inflammatory arthritis (>1 hour).'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Imaging & Staging',
      sub:'Weight-bearing bilateral knee X-rays',
      snapshot:'Weight-bearing bilateral knee X-rays taken. Results available.',
      vitals:[{t:'Left: KL Grade 3-4',f:true},{t:'Right: KL Grade 2',f:false},{t:'Medial compartment',f:true},{t:'Varus deformity',f:true}],
      questions:[
        {id:'F4D_q3', prompt:'Left knee: Grade 3-4 OA (Kellgren-Lawrence) \u2014 severe medial compartment joint space narrowing, subchondral sclerosis, osteophytes. Right knee: Grade 2. What does KL Grade 3-4 mean for management options?', placeholder:'KL 3-4 = surgical evaluation appropriate. Non-surgical options may provide temporary relief but joint replacement is likely near-term.'},
        {id:'F4D_q4', prompt:'Should you check RF and CRP given his bilateral joint disease? Why or why not?', placeholder:'Inflammatory markers not indicated \u2014 clinical picture is classic OA. Ordering RF/CRP adds cost without changing management.'}
      ],
      nextFindingLabel:'Imaging findings',
      nextFinding:'<strong>Left knee (weight-bearing):</strong> Kellgren-Lawrence Grade 3-4. Severe medial compartment joint space narrowing. Subchondral sclerosis. Osteophytes. Varus deformity. <strong>Right knee:</strong> Grade 2. Mild medial narrowing. Left knee surgical evaluation appropriate.',
      feedback:[
        {icon:'\uD83D\uDCCA', text:'<strong>The Kellgren-Lawrence scale</strong> grades OA from 0 to 4. Grade 3-4 represents severe cartilage loss \u2014 often bone-on-bone. At this severity, total knee arthroplasty is the definitive treatment.'},
        {icon:'\uD83D\uDC89', text:'<strong>Intra-articular corticosteroid injections</strong> provide 4-12 weeks of symptom relief \u2014 a useful bridge while waiting for surgery.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Non-surgical and surgical options',
      decisionPrompt:'KL Grade 3-4 OA left knee. Grade 2 right knee. Harold is functionally limited and failing conservative management. What do you recommend?',
      choices:[
        {text:'Orthopedic surgery referral for left knee TKA evaluation. Continue acetaminophen for right knee. Physical therapy for quad strengthening. Weight loss counseling (BMI 29). Intra-articular steroid injection left knee for short-term relief.', outcome:'good'},
        {text:'Add tramadol for pain control. Continue physical therapy. Follow up in 3 months.', outcome:'partial'},
        {text:'Refer to rheumatology for disease-modifying therapy evaluation.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Grade 3-4 OA with functional limitation and failure of conservative management is an indication for surgical evaluation. TKA for severe OA has 90%+ success rates.</p>',
        partial:'<p><strong>Inadequate long-term plan.</strong> Tramadol adds opioid risk in a 72-year-old. At KL Grade 3-4, the appropriate next step is surgical evaluation.</p>',
        bad:'<p><strong>Incorrect referral.</strong> OA is not an inflammatory arthritis and has no disease-modifying therapy. Orthopedics is the correct referral \u2014 not rheumatology.</p>'
      },
      keyFindings:['Bilateral knee pain \u2014 mechanical pattern','Morning stiffness <30 minutes','Worse with activity (stairs), better with rest','Crepitus, bony joint-line enlargement','Varus deformity left knee','KL Grade 3-4 left knee on weight-bearing X-ray','Prior right knee injury age 22 (post-traumatic OA)','BMI 29 \u2014 modifiable risk factor'],
      reflection:[
        {icon:'\u2699', q:'<strong>When is surgical referral appropriate in OA?</strong> What are the criteria for surgical evaluation \u2014 and who is not a surgical candidate?'},
        {icon:'\uD83C\uDFCB', q:'<strong>Weight loss is the most evidence-based non-surgical intervention in knee OA.</strong> What weight loss is clinically meaningful?'},
        {icon:'\uD83D\uDD2C', q:'<strong>What features of a joint pain case would prompt GENA activation?</strong> What arthritis presentations hide rare genetic diagnoses?'}
      ]
    }
  ]
};

window.CASES['F4E'] = {
  id:'F4E', family:4, isGenetic:false,
  headline:'"I woke up at 3am with the worst pain I\'ve ever had in my big toe"',
  patient:'George, 58M &nbsp;&#183;&nbsp; Accountant &nbsp;&#183;&nbsp; Known high uric acid, untreated',
  tagline:'The most painful joint in the building \u2014 and the most treatable.',
  diagnosis:'Gout \u2014 acute flare, first metatarsophalangeal joint (podagra)',
  diagnosisText:'Gout is a crystal arthropathy caused by deposition of monosodium urate crystals. Hyperuricemia (serum uric acid >6.8 mg/dL) is the prerequisite. Acute flares are among the most painful inflammatory conditions in medicine. Treatment: anti-inflammatory therapy for flares, urate-lowering therapy for prevention.',
  genaText:'Gout is not a genetic diagnosis \u2014 it is metabolic and dietary. GENA is not indicated. The clinical teaching: gout is the most treatable of all arthritides \u2014 the goal is not just treating flares but achieving a uric acid target of <6 mg/dL.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Acute Flare Presentation',
      sub:'George N., 58M \u2014 acute first MTP joint pain, onset overnight',
      snapshot:'George woke at 3am with 10/10 pain in his right big toe. Weight of bedsheet was unbearable. Large steak dinner and wine last night. Known hyperuricemia \u2014 never treated. On HCTZ for hypertension. Cannot bear weight.',
      vitals:[{t:'BP 146/88',f:true},{t:'HR 92',f:false},{t:'Temp 38.1',f:true},{t:'Cannot bear wt',f:true}],
      questions:[
        {id:'F4E_q1', prompt:'Overnight onset of 10/10 monoarthritis of the first MTP joint after a purine-rich meal and alcohol. What is the diagnosis? What is "podagra"?', placeholder:'Gout \u2014 acute crystal arthropathy. Podagra = acute gout of the 1st MTP joint. Classic presentation, virtually diagnostic.'},
        {id:'F4E_q2', prompt:'George is on HCTZ (hydrochlorothiazide) for hypertension. Why is HCTZ relevant to his gout presentation?', placeholder:'HCTZ (thiazide diuretic) reduces renal uric acid excretion \u2014 raises serum uric acid. Most common drug-induced cause of hyperuricemia.'}
      ],
      nextFindingLabel:'Exam findings',
      nextFinding:'<strong>Right 1st MTP:</strong> Exquisitely tender, erythematous, warm, swollen. Podagra pattern. Cannot tolerate palpation. <strong>No other joints involved</strong> \u2014 monoarthritis. <strong>No tophi visible</strong> \u2014 first episode.',
      feedback:[
        {icon:'\uD83E\uDDB6', text:'<strong>Podagra in a 58-year-old man</strong> with hyperuricemia, purine-rich diet trigger, and diuretic use is gout until proven otherwise. Clinical diagnosis is >95% accurate in this classic presentation.'},
        {icon:'\uD83D\uDC8A', text:'<strong>HCTZ is the most common drug trigger for gout.</strong> Thiazide diuretics reduce renal tubular secretion of urate \u2014 raising serum uric acid by 1-2 mg/dL. Switching to losartan addresses both hypertension and reduces uric acid.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Labs & Confirmation',
      sub:'Uric acid, joint aspiration, and renal function',
      snapshot:'Labs returned. Uric acid markedly elevated.',
      vitals:[{t:'Uric acid 11.2 \u2191',f:true},{t:'Cr 1.3',f:false},{t:'eGFR 64',f:false},{t:'MSU crystals',f:true}],
      questions:[
        {id:'F4E_q3', prompt:'Serum uric acid 11.2 mg/dL. Joint aspiration: negatively birefringent needle-shaped crystals (MSU) \u2014 gout confirmed. Cr 1.3, eGFR 64. How does the eGFR affect your choice of urate-lowering therapy?', placeholder:'eGFR 64 \u2014 mildly reduced. Allopurinol must be started at low dose in CKD. Avoid NSAIDs long-term. Febuxostat is alternative for CKD patients.'},
        {id:'F4E_q4', prompt:'George asks why his uric acid can be normal during an acute attack. Why might serum uric acid be falsely low during a flare?', placeholder:'During acute flare, uric acid may precipitate out of serum into the joint \u2014 falsely lowering the measured serum level. Do not rule out gout based on normal uric acid during flare.'}
      ],
      nextFindingLabel:'Confirmatory results',
      nextFinding:'<strong>Serum uric acid:</strong> 11.2 mg/dL (markedly elevated \u2014 target &lt;6 mg/dL). <strong>Joint aspiration:</strong> Negatively birefringent needle-shaped MSU crystals \u2014 diagnostic of gout. Culture negative. <strong>Cr 1.3, eGFR 64</strong> \u2014 mild CKD Stage 2.',
      feedback:[
        {icon:'\uD83D\uDD2C', text:'<strong>MSU crystals on polarized light microscopy</strong> are diagnostic. Negatively birefringent (yellow when parallel to polarizer) needle-shaped crystals confirm gout. This distinguishes from pseudogout (CPPD \u2014 positively birefringent rhomboid crystals).'},
        {icon:'\uD83C\uDFAF', text:'<strong>Uric acid target is &lt;6 mg/dL \u2014 not just "normal."</strong> Many labs report normal uric acid as &lt;8 mg/dL. The target for gout prevention is &lt;6 mg/dL to maintain urate below the saturation threshold.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Treating the flare AND preventing recurrence',
      decisionPrompt:'Acute gout flare confirmed. Uric acid 11.2. eGFR 64. HCTZ contributing. What is your complete management plan?',
      choices:[
        {text:'Flare: colchicine 1.2mg then 0.6mg 1 hour later (avoid NSAIDs long-term with CKD). Prevention: switch HCTZ to losartan (uricosuric). Start allopurinol 50mg after flare resolves, titrate to uric acid target <6 mg/dL. Low-purine diet counseling.', outcome:'good'},
        {text:'Colchicine for flare. Repeat uric acid in 3 months. Discuss allopurinol then.', outcome:'partial'},
        {text:'Ibuprofen for flare. Start allopurinol now during the acute attack.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Colchicine is preferred over NSAIDs in CKD. Switching HCTZ to losartan addresses both hypertension and reduces uric acid. Starting allopurinol after the flare resolves is correct \u2014 starting during a flare can prolong it.</p>',
        partial:'<p><strong>Incomplete prevention.</strong> After a confirmed gout flare with uric acid 11.2, urate-lowering therapy should be planned at this visit and initiated after flare resolution.</p>',
        bad:'<p><strong>Two errors:</strong> Ibuprofen long-term in CKD risks renal toxicity. Starting allopurinol during an acute flare can trigger or prolong it \u2014 initiate 2-4 weeks after flare resolves.</p>'
      },
      keyFindings:['Overnight onset \u2014 monoarthritis 1st MTP','10/10 pain','HCTZ use \u2014 raises uric acid','Purine-rich meal + alcohol \u2014 triggers','Uric acid 11.2 (markedly elevated)','MSU crystals on aspiration \u2014 diagnostic','eGFR 64 \u2014 affects medication choice'],
      reflection:[
        {icon:'\uD83C\uDFAF', q:'<strong>The uric acid target is &lt;6 mg/dL, not just "normal."</strong> Does your practice set this target explicitly for gout patients on urate-lowering therapy?'},
        {icon:'\uD83D\uDC8A', q:'<strong>HCTZ was contributing to George\'s gout.</strong> How do you systematically review medication lists for uricogenic drugs when you see a gout patient?'},
        {icon:'\uD83D\uDD2C', q:'<strong>Gout is the most treatable form of arthritis</strong> yet remains undertreated. What are the barriers to achieving the uric acid target <6 mg/dL?'}
      ]
    }
  ]
};

// ════════════════════════════════════════════════════════════
// TEACHING MODULES — key demo cases (B, B3, A3)
// ════════════════════════════════════════════════════════════

window.MODULES['B'] = {
  tabs:['Pathophysiology','Guidelines','Framework','Evidence','EMR Lens'],
  panels:[
    {title:'Fabry Disease \u2014 Pathophysiology',content:'<div class="module-section-title">GLA gene \u2192 \u03B1-Gal A deficiency \u2192 Gb3 accumulation</div><p class="module-body-text">Fabry disease is caused by pathogenic variants in the <em>GLA</em> gene (Xq22.1), encoding alpha-galactosidase A (\u03B1-Gal A). Deficiency leads to progressive glycolipid (Gb3) accumulation in vascular endothelium, dorsal root ganglia, cardiomyocytes, and renal podocytes.</p><p class="module-body-text"><strong>Why burning pain:</strong> Gb3 in small unmyelinated C fibers and A\u03B4 fibers \u2192 small fiber neuropathy \u2192 temperature and pain sensing affected; large fiber modalities (vibration, proprioception) preserved.</p><p class="module-body-text"><strong>Why no sweating:</strong> Gb3 in eccrine sweat gland cells \u2192 hypohidrosis.</p><p class="module-body-text"><strong>Cardiac:</strong> Gb3 in cardiomyocytes \u2192 concentric LVH \u2192 arrhythmia and heart failure.</p><p class="module-body-text"><strong>Renal:</strong> Podocyte accumulation \u2192 proteinuria \u2192 progressive CKD \u2192 ESRD in the 4th\u20135th decade without treatment.</p><div class="module-refs"><div class="module-refs-label">References</div><div class="module-ref-item">Germain DP. Fabry disease. Orphanet J Rare Dis. 2010;5:30.</div></div>'},
    {title:'Diagnostic Guidelines',content:'<div class="module-section-title">Fabry Disease Diagnostic Pathway</div><table class="module-table"><tr><th>Step</th><th>Test</th><th>Notes</th></tr><tr><td>1</td><td>Clinical suspicion</td><td>Acroparesthesias, angiokeratomas, hypohidrosis, corneal opacity, unexplained CKD/LVH, family history</td></tr><tr><td>2 (males)</td><td>\u03B1-Gal A enzyme activity</td><td>&lt;1% of normal = diagnostic. Marcus: 0.3 vs. ref &gt;3.0 nmol/hr/mg</td></tr><tr><td>2 (females)</td><td>GLA gene sequencing</td><td>Carrier females may have normal enzyme activity due to X-inactivation</td></tr><tr><td>3</td><td>GLA sequencing</td><td>Confirms pathogenic variant; guides family cascade and modulator eligibility</td></tr><tr><td>4</td><td>Multidisciplinary evaluation</td><td>Nephrology, cardiology, neurology, ophthalmology, genetics</td></tr></table>'},
    {title:'Clinical Framework',content:'<div class="module-section-title">The Constellation Approach</div><p class="module-body-text">No single finding diagnoses Fabry disease. The diagnosis emerges from the pattern across organ systems \u2014 and from asking questions other physicians have not asked.</p><table class="module-table"><tr><th>System</th><th>Finding</th><th>Mechanism</th></tr><tr><td>Peripheral nervous</td><td>Acroparesthesias since adolescence</td><td>Small fiber neuropathy (Gb3 in DRG)</td></tr><tr><td>Autonomic</td><td>Hypohidrosis</td><td>Gb3 in eccrine sweat glands</td></tr><tr><td>Skin</td><td>Angiokeratomas</td><td>Gb3 in dermal capillaries</td></tr><tr><td>Eye</td><td>Cornea verticillata</td><td>Gb3 in corneal epithelium</td></tr><tr><td>Kidney</td><td>Proteinuria, CKD</td><td>Gb3 in podocytes</td></tr><tr><td>Heart</td><td>LVH, arrhythmia</td><td>Gb3 in cardiomyocytes</td></tr></table>'},
    {title:'Evidence Grades',content:'<div class="module-section-title">Evidence Base \u2014 Fabry Disease Management</div><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> Enzyme replacement therapy slows renal progression when started before significant nephropathy (eGFR &gt;60).</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> ACE inhibitor/ARB for proteinuria in Fabry nephropathy.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Chaperone therapy (migalastat) for amenable GLA variants \u2014 oral, every-other-day dosing.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Annual cardiac imaging to monitor LVH progression and myocardial fibrosis.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Family cascade testing after index case confirmation.</p>'},
    {title:'EMR Lens',content:'<div class="module-section-title">What the EMR Could Have Flagged</div><p class="module-emr-note">This section shows how EMR data integration \u2014 the future state of GENA \u2014 could identify at-risk patients before specialist referral.</p><table class="module-table"><tr><th>Data Point</th><th>Recorded?</th><th>Acted On?</th></tr><tr><td>BP 148/92 (new hypertension, age 41)</td><td>\u2713</td><td>Not investigated</td></tr><tr><td>Creatinine trending up over 3 years</td><td>\u2713</td><td>Attributed to dehydration</td></tr><tr><td>Depression diagnosis \u2014 sertraline 6 months, ineffective</td><td>\u2713</td><td>Treatment failure not re-evaluated</td></tr><tr><td>Ophthalmology note: "corneal opacity \u2014 NOS"</td><td>\u2713</td><td>Not communicated to PCP</td></tr><tr><td>Acroparesthesias since adolescence</td><td>\u2717</td><td>Never asked, never documented</td></tr></table>'}
  ]
};

window.MODULES['B3'] = {
  tabs:['Pathophysiology','Guidelines','Framework','Evidence','EMR Lens'],
  panels:[
    {title:'Rett Syndrome \u2014 Pathophysiology',content:'<div class="module-section-title">MECP2 \u2192 Synaptic dysfunction \u2192 Developmental regression</div><p class="module-body-text">Rett syndrome is caused by loss-of-function variants in <em>MECP2</em> (Xq28), a transcriptional regulator essential for synaptic maturation. De novo mutations occur almost exclusively in females.</p><p class="module-body-text"><strong>Why normal development first:</strong> MECP2 is not required for early neurodevelopment. It becomes essential for synaptic maturation after the first year, explaining why regression begins at 12-18 months.</p><p class="module-body-text"><strong>Why hand stereotypies:</strong> Loss of purposeful hand use reflects disrupted corticospinal circuitry requiring intact MECP2 in motor cortex neurons.</p><p class="module-body-text"><strong>Why irregular breathing:</strong> MECP2 is highly expressed in brainstem respiratory control centers. Dysfunction leads to apnea and hyperventilation.</p><div class="module-refs"><div class="module-refs-label">References</div><div class="module-ref-item">Amir RE et al. Rett syndrome is caused by mutations in X-linked MECP2. Nat Genet. 1999;23(2):185-8.</div></div>'},
    {title:'Diagnostic Criteria',content:'<div class="module-section-title">Revised Rett Syndrome Diagnostic Criteria (Neul 2010)</div><p class="module-body-text"><strong>Required for classic Rett:</strong> Period of regression followed by stabilization AND all four main criteria:</p><table class="module-table"><tr><th>Main Criteria</th><th>Lily&#39;s Status</th></tr><tr><td>Loss of acquired purposeful hand skills</td><td>\u2713 Lost at 15 months</td></tr><tr><td>Loss of acquired spoken language</td><td>\u2713 6 words lost</td></tr><tr><td>Gait abnormalities</td><td>\u2713 Ataxic gait</td></tr><tr><td>Stereotypic hand movements</td><td>\u2713 Hand-wringing</td></tr></table><p class="module-body-text"><strong>Confirmatory testing:</strong> MECP2 gene sequencing. 95%+ of classic Rett cases have an identifiable MECP2 variant.</p>'},
    {title:'Clinical Framework',content:'<div class="module-section-title">The Key Distinction \u2014 Rett vs. Autism</div><table class="module-table"><tr><th>Feature</th><th>Rett Syndrome</th><th>Autism Spectrum</th></tr><tr><td>Prior development</td><td>Normal to 12-18 months</td><td>Abnormal from start</td></tr><tr><td>Regression</td><td>True regression \u2014 skills lost</td><td>Failure to acquire</td></tr><tr><td>Hand stereotypies</td><td>Wringing/washing \u2014 midline, involuntary</td><td>Flapping, voluntary</td></tr><tr><td>Purposeful hand use</td><td>Lost completely</td><td>Usually preserved</td></tr><tr><td>Breathing</td><td>Irregular (apnea/hyperventilation)</td><td>Normal</td></tr><tr><td>Head circumference</td><td>Decelerates after normal start</td><td>Often macrocephalic</td></tr><tr><td>Sex</td><td>Almost exclusively female</td><td>4:1 male predominance</td></tr></table>'},
    {title:'Evidence Grades',content:'<div class="module-section-title">Evidence Base \u2014 Rett Syndrome</div><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> MECP2 gene sequencing \u2014 diagnostic standard, 95%+ sensitivity.</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> EEG monitoring \u2014 seizure prevalence 60-80%.</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> ECG/QT interval monitoring \u2014 prolonged QT increases sudden death risk.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> AAC (augmentative and alternative communication) \u2014 early introduction preserves communication function.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Trofinetide (Daybue) \u2014 FDA-approved 2023 for Rett syndrome \u22652 years. First approved treatment.</p><p class="module-body-text"><span class="ev-grade ev-c">Grade C</span> MECP2 gene therapy \u2014 in clinical trials.</p>'},
    {title:'EMR Lens',content:'<div class="module-section-title">What the EMR Could Have Flagged</div><p class="module-emr-note">How EMR milestone documentation could identify Rett syndrome earlier \u2014 at the 15-month well visit.</p><table class="module-table"><tr><th>Visit Data</th><th>Recorded?</th><th>Significance</th></tr><tr><td>12-month: 6 words, pointing, good eye contact</td><td>\u2713 (if milestone-structured)</td><td>Establishes baseline \u2014 prior normal development</td></tr><tr><td>15-month: no words</td><td>Sometimes</td><td>Drop from 6 words = regression flag</td></tr><tr><td>HC deceleration (50th \u2192 35th %ile)</td><td>If plotted</td><td>Acquired microcephaly \u2014 Rett flag</td></tr><tr><td>Parent concern: "she stopped talking"</td><td>Rarely coded</td><td>Most critical data point \u2014 rarely structured</td></tr></table>'}
  ]
};

window.MODULES['A3'] = {
  tabs:['Pathophysiology','Guidelines','Framework','Evidence','EMR Lens'],
  panels:[
    {title:'Down Syndrome \u2014 Biology',content:'<div class="module-section-title">Trisomy 21 \u2014 mechanisms of multisystem involvement</div><p class="module-body-text">Down syndrome results from trisomy of chromosome 21, most commonly through non-disjunction during maternal meiosis I. The extra chromosome 21 leads to overexpression of ~300 genes with downstream effects across multiple organ systems.</p><p class="module-body-text"><strong>Hearing:</strong> Eustachian tube dysfunction and middle ear effusion affect 40-80% of children with DS. Conductive hearing loss is highly modifiable.</p><p class="module-body-text"><strong>Thyroid:</strong> Hypothyroidism occurs in 15-20% across the lifespan. Annual TSH monitoring is evidence-based from birth.</p><p class="module-body-text"><strong>Atlantoaxial instability:</strong> Ligamentous laxity affects the C1-C2 articulation. 1-2% have symptomatic instability requiring surgical stabilization.</p>'},
    {title:'Surveillance Guidelines',content:'<div class="module-section-title">ACMG/AAP Down Syndrome Health Supervision Guidelines</div><table class="module-table"><tr><th>Screen</th><th>Frequency</th><th>Rationale</th></tr><tr><td>TSH</td><td>Annual (from birth)</td><td>Hypothyroidism worsens developmental outcomes</td></tr><tr><td>Audiology</td><td>Annual</td><td>Conductive hearing loss \u2014 modifiable contributor to speech delay</td></tr><tr><td>Ophthalmology</td><td>Annual</td><td>Refractive error, strabismus, cataracts</td></tr><tr><td>Atlantoaxial X-ray</td><td>Before sports/anesthesia</td><td>Safety \u2014 C1-C2 instability risk</td></tr><tr><td>Echocardiogram</td><td>At birth; per cardiology</td><td>40-50% have congenital heart disease</td></tr><tr><td>Celiac screen (tTG-IgA)</td><td>Every 2-3 years</td><td>5-10% prevalence of celiac in DS</td></tr></table>'},
    {title:'Clinical Framework',content:'<div class="module-section-title">The Known Diagnosis Problem</div><p class="module-body-text">When a genetic diagnosis is established at birth, subsequent providers often assume surveillance is being handled by someone else. Children with known genetic syndromes accumulate surveillance gaps over time.</p><table class="module-table"><tr><th>Item</th><th>Miss Rate</th><th>Impact</th></tr><tr><td>Annual audiology</td><td>~40%</td><td>Hearing loss \u2192 speech delay \u2014 directly modifiable</td></tr><tr><td>Atlantoaxial screening before activity</td><td>~60%</td><td>Safety \u2014 instability risk</td></tr><tr><td>Annual TSH</td><td>~25%</td><td>Undertreated hypothyroidism \u2192 worsened trajectory</td></tr></table>'},
    {title:'Evidence Grades',content:'<div class="module-section-title">Evidence Base \u2014 Down Syndrome Surveillance</div><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> Annual TSH monitoring from birth.</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> Annual audiology \u2014 hearing loss is the most modifiable contributor to speech delay in DS.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Atlantoaxial X-ray before contact sports or general anesthesia.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> PE tubes for recurrent middle ear effusion with hearing loss.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Early intervention from birth (speech, OT, PT).</p>'},
    {title:'EMR Lens',content:'<div class="module-section-title">GENA&#39;s Role in Known Genetic Diagnoses</div><p class="module-emr-note">For patients with established genetic diagnoses, GENA&#39;s role shifts from diagnostic to surveillance \u2014 flagging overdue items based on age, diagnosis, and problem list.</p><table class="module-table"><tr><th>Surveillance Item</th><th>Last Done</th><th>Status</th></tr><tr><td>TSH</td><td>6 months ago</td><td>\u2713 Current</td></tr><tr><td>Audiology</td><td>18 months ago</td><td>\u26A0 Overdue \u2014 flag</td></tr><tr><td>Ophthalmology</td><td>18 months ago</td><td>\u26A0 Overdue \u2014 flag</td></tr><tr><td>Atlantoaxial X-ray</td><td>Never</td><td>\uD83D\uDD34 Not done \u2014 alert</td></tr></table>'}
  ]
};


// ════════════════════════════════════════════════════════════
// CHIEF COMPLAINT 5 — RESPIRATORY / WHEEZE
// ════════════════════════════════════════════════════════════

// ── G5A  PRIYA / AERD (Samter\'s Triad) ──────────────────────
window.CASES['G5A'] = {
  id:'G5A', family:5, isGenetic:false,
  headline:'"My asthma has never really been controlled \u2014 and I lost my sense of smell years ago"',
  patient:'Priya R., 34F &nbsp;&#183;&nbsp; Accountant &nbsp;&#183;&nbsp; Four OCS courses last year',
  tagline:'The triad hiding in the allergy history.',
  diagnosis:'Aspirin-Exacerbated Respiratory Disease (AERD / Samter\u2019s Triad)',
  diagnosisText:'AERD is a distinct asthma endotype defined by the triad of asthma, chronic rhinosinusitis with nasal polyps, and sensitivity to aspirin and NSAIDs. It affects ~10% of adult asthmatics and ~40% of those with severe asthma. The mechanism is arachidonic acid pathway dysregulation \u2014 not IgE-mediated allergy. It is persistently underdiagnosed because physicians do not routinely ask about NSAID tolerance or anosmia.',
  genaText:'Priya\u2019s constellation \u2014 uncontrolled asthma despite high-dose ICS/LABA, blood eosinophils 680, FeNO 58, nasal polyps, anosmia since age 28, and a history of a severe asthma attack after ibuprofen \u2014 is AERD until proven otherwise. GENA Screen would flag this phenotype and recommend aspirin challenge (in a controlled setting), dupilumab or benralizumab as first biologic, and ENT referral for polyp management.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Initial Presentation',
      sub:'Priya R., 34F \u2014 uncontrolled asthma, referred by PCP',
      snapshot:'Priya is a 34-year-old accountant referred for uncontrolled asthma. She has been on high-dose fluticasone/salmeterol for 3 years. Four courses of oral prednisone last year. "My asthma is just bad \u2014 it runs in my family." She uses her albuterol inhaler 6-8 times per week. She mentions offhand: "I haven\u2019t been able to smell anything well since my late 20s."',
      vitals:[{t:'SpO2 96%',f:true},{t:'RR 18',f:false},{t:'No wheeze at rest',f:false},{t:'Nasal congestion',f:true}],
      questions:[
        {id:'G5A_q1', prompt:'Before ordering any tests: what specific history questions have likely never been asked? What three history items, if positive, would completely change your differential for her asthma phenotype?', placeholder:'Ask about: NSAID/aspirin tolerance, anosmia onset, nasal polyps, alcohol-triggered symptoms...'},
        {id:'G5A_q2', prompt:'She says her smell "hasn\'t been right since her late 20s." She\'s 34 now. Why is gradual anosmia in a young adult with asthma a diagnostically critical finding \u2014 and what does it tell you about the timeline of her disease?', placeholder:'Anosmia from nasal polyps often precedes aspirin sensitivity \u2014 it marks the start of the AERD disease process...'}
      ],
      nextFindingLabel:'The history that changes everything',
      nextFinding:'<strong>NSAID history:</strong> "Actually \u2014 yes. About 5 years ago I took ibuprofen for a headache and had the worst asthma attack of my life. I ended up in the ER. I thought it was a coincidence. I\u2019ve been avoiding ibuprofen since but no one ever told me why."<br><br><strong>Anosmia:</strong> "My smell started going around age 28. My ENT said I had chronic sinusitis and polyps."<br><br><strong>Alcohol:</strong> "Red wine definitely makes my nose run and my chest tight within 20 minutes."<br><br><strong>Aspirin:</strong> "I\u2019ve never tried aspirin since the ibuprofen incident."<br><br><strong>Exam:</strong> Nasal polyps visible on anterior rhinoscopy bilaterally. Mild expiratory wheeze. No skin findings.',
      feedback:[
        {icon:'\uD83D\uDC43', text:'<strong>The NSAID history was the key question.</strong> Priya\u2019s ER visit after ibuprofen was the diagnosis \u2014 it happened 5 years ago and no one connected it. NSAID-triggered bronchospasm in an asthmatic with polyps and anosmia is AERD until proven otherwise.'},
        {icon:'\uD83D\uDDFD', text:'<strong>Anosmia at age 28</strong> was the first manifestation of her disease \u2014 before the NSAID reaction, before severe asthma. The timeline in AERD typically runs: anosmia \u2192 nasal polyps \u2192 aspirin sensitivity \u2192 worsening asthma. Priya\u2019s history follows this exactly.'},
        {icon:'\uD83C\uDF77', text:'<strong>Alcohol (especially red wine)</strong> contains sulfites and salicylates that can trigger AERD reactions. This history detail is specific and should be asked in any uncontrolled asthmatic with polyps.'},
        {icon:'\uD83D\uDCA1', text:'<strong>AERD is not IgE-mediated allergy</strong> \u2014 it is arachidonic acid pathway dysregulation. Standard allergy testing will be negative. This is why the phenotype is so frequently missed: physicians look for allergic triggers, find none, and conclude the asthma is "intrinsic."'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Biomarker Workup',
      sub:'Spirometry, FeNO, biomarkers, imaging',
      snapshot:'Full phenotyping workup completed. Results returned.',
      vitals:[{t:'FEV1 68% pred \u2193',f:true},{t:'FeNO 58 ppb \u2191',f:true},{t:'Eos 680/\u03BCL \u2191',f:true},{t:'IgE 180 IU/mL',f:false}],
      questions:[
        {id:'G5A_q3', prompt:'Spirometry: FEV1 68% predicted, FVC normal, FEV1/FVC 0.68 (mild obstruction). FeNO 58 ppb (elevated \u2014 T2 inflammation). Blood eos 680/\u03BCL. IgE 180 (modestly elevated). Skin prick testing: negative to all standard allergens. CT sinus: bilateral polyposis, near-complete sinus opacification. How does the negative skin prick test change your phenotyping?', placeholder:'Negative SPT + high eos + high FeNO = non-allergic T2 disease = AERD phenotype confirmed, not atopic asthma...'},
        {id:'G5A_q4', prompt:'Priya asks why her eosinophils are so high if she doesn\u2019t have allergies. Explain the difference between allergic (IgE-mediated) and eosinophilic non-allergic (AERD) inflammation.', placeholder:'AERD drives eosinophilia through arachidonic acid / prostaglandin pathway dysregulation, not IgE. Eos are elevated but allergen-independent...'}
      ],
      nextFindingLabel:'Complete biomarker profile',
      nextFinding:'<strong>Spirometry:</strong> FEV1 68% predicted (mild obstruction), post-bronchodilator improvement 14%. <strong>FeNO:</strong> 58 ppb (reference &lt;25 \u2014 significant T2 airway inflammation). <strong>Blood eos:</strong> 680/\u03BCL (reference &lt;300 \u2014 significantly elevated). <strong>Total IgE:</strong> 180 IU/mL (modestly elevated). <strong>Specific IgE panel:</strong> NEGATIVE to dust mite, cat, dog, mold, cockroach, grass, tree, ragweed. <strong>CT sinuses:</strong> Bilateral nasal polyps with near-complete opacification of ethmoid and maxillary sinuses. <strong>Aspirin challenge:</strong> Planned in monitored setting \u2014 confirmed bronchospasm + nasal symptoms at 40mg aspirin.',
      feedback:[
        {icon:'\uD83D\uDD2C', text:'<strong>Negative specific IgE is the diagnostic key in AERD.</strong> High eosinophils + high FeNO + NEGATIVE allergen testing = non-allergic T2 eosinophilic disease. This rules out omalizumab (anti-IgE) as first-line biologic and points toward anti-IL-5 or anti-IL-4/13 therapy.'},
        {icon:'\uD83D\uDEA8', text:'<strong>CT sinuses showing near-complete opacification</strong> explains her anosmia and the severity of her upper airway disease. AERD requires coordinated management of both upper and lower airway \u2014 ENT and pulmonology/allergy together.'},
        {icon:'\uD83D\uDC8A', text:'<strong>Aspirin desensitization</strong> is a specific, effective treatment for AERD that has no analog in other asthma phenotypes. After a positive aspirin challenge confirms the diagnosis, controlled desensitization followed by daily aspirin therapy reduces nasal polyp burden, OCS requirements, and ER visits.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Biologic selection + AERD-specific treatment',
      decisionPrompt:'AERD confirmed. FEV1 68%, FeNO 58, eos 680, bilateral nasal polyps, aspirin challenge positive. Four OCS courses last year. Currently on high-dose ICS/LABA. What is your complete management plan?',
      choices:[
        {text:'Start dupilumab (addresses both asthma AND nasal polyposis in a single biologic \u2014 FDA-approved for both). Refer to ENT for polypectomy consideration. Aspirin desensitization protocol after polyp management. Strict NSAID avoidance with medical alert. Eliminate OCS dependency as dupilumab takes effect.', outcome:'good'},
        {text:'Start mepolizumab (anti-IL-5) for eosinophilic asthma. Continue ICS/LABA. ENT referral for polyps.', outcome:'partial'},
        {text:'Start omalizumab (anti-IgE). The IgE is 180 \u2014 within the dosing range. Add a leukotriene modifier.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Excellent.</strong> Dupilumab (anti-IL-4R\u03B1) is the preferred biologic for AERD because it has FDA approval for both severe asthma AND chronic rhinosinusitis with nasal polyposis \u2014 treating both components of Samter\u2019s triad with one injection. In SINUS-52 and LIBERTY ASTHMA QUEST trials, dupilumab dramatically reduced nasal polyp burden and exacerbation rate. Aspirin desensitization after polyp control is the only AERD-specific long-term therapy.</p>',
        partial:'<p><strong>Reasonable but not optimal.</strong> Mepolizumab reduces exacerbations in eosinophilic asthma but has limited evidence specifically for the nasal polyposis component of AERD. Dupilumab has dual approval. If mepolizumab is chosen, a separate nasal biologic or surgical approach to polyps is still needed.</p>',
        bad:'<p><strong>Wrong phenotype match.</strong> Omalizumab targets IgE-mediated allergic asthma. Priya has NEGATIVE specific IgE and non-allergic T2 disease. Omalizumab will not address her eosinophilic inflammation, FeNO elevation, or nasal polyps. The 180 IU/mL IgE is within the dosing range technically, but this is not an IgE-driven disease.</p>'
      },
      keyFindings:['Anosmia onset age 28 \u2014 first AERD manifestation','Severe bronchospasm after ibuprofen \u2014 NSAID sensitivity confirmed','Bilateral nasal polyps on anterior rhinoscopy and CT','FeNO 58 ppb \u2014 significant T2 airway inflammation','Blood eos 680/\u03BCL \u2014 significantly elevated','Specific IgE NEGATIVE \u2014 non-allergic T2 disease','Aspirin challenge positive \u2014 AERD confirmed','FEV1 68% \u2014 persistent obstruction despite high-dose ICS/LABA'],
      reflection:[
        {icon:'\uD83D\uDC43', q:'<strong>The NSAID history was available at every previous visit.</strong> Why do physicians fail to ask about NSAID tolerance in uncontrolled asthmatics? What question do you now commit to asking at every asthma review?'},
        {icon:'\uD83D\uDDFD', q:'<strong>Anosmia at age 28 was the first symptom \u2014 six years before presentation.</strong> What is your practice for asking about anosmia in patients with chronic sinusitis or nasal congestion? How does the anosmia timeline help you date the onset of AERD?'},
        {icon:'\uD83E\uDDEC', q:'<strong>GENA integration:</strong> Uncontrolled asthma + nasal polyps + anosmia + NSAID-triggered ER visit + high eosinophils + high FeNO + negative specific IgE. At what point in this case would GENA have returned an AERD probability flag?'}
      ]
    }
  ]
};

// ── G5B  MARCUS 2 / ALPHA-1 ANTITRYPSIN DEFICIENCY ──────────
window.CASES['G5B'] = {
  id:'G5B', family:5, isGenetic:true,
  headline:'"Asthma since I was a kid \u2014 it\u2019s never gotten better no matter what I try"',
  patient:'Marcus D., 47M &nbsp;&#183;&nbsp; Non-smoker &nbsp;&#183;&nbsp; FEV1 52% "for years"',
  tagline:'47 years labeled as asthma. One blood test changes everything.',
  diagnosis:'Alpha-1 Antitrypsin Deficiency (SERPINA1 ZZ genotype)',
  diagnosisText:'Alpha-1 antitrypsin deficiency (AATD) is the most common serious genetic disorder in adults of Northern European descent, affecting approximately 1 in 2,500. It is caused by pathogenic SERPINA1 variants \u2014 most commonly the Z allele \u2014 that result in A1AT protein misfolding, hepatic retention, and severely reduced circulating A1AT. Without A1AT to protect lung tissue from neutrophil elastase, progressive panlobular emphysema develops. The condition is massively underdiagnosed: median time from symptom onset to diagnosis is 5-7 years, and most patients carry a prior "asthma" or "COPD" label for years before testing.',
  genaText:'Marcus\u2019s constellation \u2014 "asthma" since childhood that has never fully responded to any controller therapy, FEV1 52% with limited bronchodilator response, basal-predominant emphysema on CT, recurrent pulmonary infections, non-smoker, and a father who died of "emphysema" despite never smoking \u2014 is AATD until a serum A1AT level proves otherwise. GENA Screen is specifically designed to surface this pattern: irreversible airflow obstruction in a non-smoker with an unexplained family history of lung disease.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Initial Presentation',
      sub:'Marcus D., 47M \u2014 uncontrolled "asthma," referred for second opinion',
      snapshot:'Marcus is a 47-year-old non-smoker labeled with asthma since age 8. He has been on ICS/LABA for 20 years with minimal response. FEV1 has been 50-55% "for as long as anyone can remember." Three pulmonologists have seen him. He\u2019s been told his asthma is "just bad." He has never smoked. He has recurrent bronchitis 3-4 times per year requiring antibiotics. His father died at age 62 of "emphysema" despite never having smoked.',
      vitals:[{t:'SpO2 94% \u2193',f:true},{t:'RR 20',f:false},{t:'Prolonged exp.',f:true},{t:'Diffuse wheeze',f:true}],
      questions:[
        {id:'G5B_q1', prompt:'Non-smoker with FEV1 52% that has never improved, despite 20 years of ICS/LABA therapy. What diagnoses should have been reconsidered years ago? What single question about family history would most change your pre-test probability for a genetic cause?', placeholder:'AATD, CF, bronchiectasis \u2014 ask: did any non-smoking relative develop emphysema or severe COPD at a young age?'},
        {id:'G5B_q2', prompt:'His father had emphysema without ever smoking. Marcus has COPD-range obstruction without smoking. Why is this family history so diagnostically powerful? What inheritance pattern does AATD follow?', placeholder:'Autosomal codominant \u2014 both parents must carry at least one Z allele. Father with emphysema without smoking = likely ZZ or SZ genotype...'}
      ],
      nextFindingLabel:'The history that reframes 47 years',
      nextFinding:'<strong>Father:</strong> "He never smoked a day in his life. Died at 62 on oxygen. They said it was emphysema but we always thought it was strange."<br><br><strong>Recurrent infections:</strong> Bronchitis 3-4 times per year since his 30s. Has needed IV antibiotics once. "My chest just never clears completely."<br><br><strong>Response to ICS/LABA:</strong> "I feel slightly better subjectively but my breathing tests have never improved." The obstruction is fixed \u2014 not bronchospasm-reversible.<br><br><strong>Exam:</strong> Barrel chest. Prolonged expiratory phase. Diffuse expiratory wheeze. Hyperresonant to percussion bilaterally. SpO2 94% at rest.',
      feedback:[
        {icon:'\uD83D\uDC68\u200D\uD83D\uDC66', text:'<strong>A non-smoking father who died of emphysema at 62</strong> is the single most powerful family history finding for AATD. COPD in a non-smoker, especially with family history of early lung disease, should trigger A1AT level measurement immediately \u2014 at the first visit.'},
        {icon:'\uD83D\uDD34', text:'<strong>Fixed obstruction not responding to ICS/LABA over 20 years</strong> is not asthma. True asthma has variable, reversible airflow obstruction. Marcus\u2019s disease is progressive and irreversible \u2014 the pathology is emphysema, not bronchospasm. Every year of delayed diagnosis is irreversible lung tissue lost.'},
        {icon:'\uD83E\uDDEC', text:'<strong>AATD is autosomal codominant.</strong> The ZZ genotype (two Z alleles) causes severe disease. Both of Marcus\u2019s parents must have carried at least one Z allele. His father\u2019s "emphysema" was almost certainly AATD \u2014 undiagnosed.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Biomarker Workup',
      sub:'Spirometry, A1AT level, CT chest, genetics',
      snapshot:'Full phenotyping workup ordered. Results returned.',
      vitals:[{t:'FEV1 52% pred \u2193',f:true},{t:'A1AT 18 mg/dL \u2193',f:true},{t:'ZZ genotype',f:true},{t:'Basal emphysema',f:true}],
      questions:[
        {id:'G5B_q3', prompt:'Spirometry: FEV1 52% predicted, FVC 78%, FEV1/FVC 0.58. Post-BD improvement only 4% \u2014 minimal reversibility. Serum A1AT level: 18 mg/dL (reference 100-200 mg/dL \u2014 severely reduced). SERPINA1 genotype: ZZ. CT chest: panlobular emphysema basal-predominant, bilateral. What does ZZ genotype mean, and how does basal-predominant distribution distinguish AATD from smoking-related emphysema?', placeholder:'ZZ = severe deficiency. Basal-predominant is AATD pattern \u2014 smoking-related emphysema is apical-predominant...'},
        {id:'G5B_q4', prompt:'Marcus asks: "Can I get my lungs back?" What is augmentation therapy, who qualifies, and what does it actually do?', placeholder:'A1AT augmentation (weekly IV infusions) slows emphysema progression by restoring circulating A1AT to protective levels \u2014 it cannot reverse existing damage...'}
      ],
      nextFindingLabel:'Diagnostic confirmation',
      nextFinding:'<strong>Spirometry:</strong> FEV1 52%, FEV1/FVC 0.58, post-BD improvement 4% (fixed obstruction). <strong>Serum A1AT:</strong> 18 mg/dL \u2014 severely reduced (reference 100-200). <strong>SERPINA1 genotype:</strong> Pi*ZZ \u2014 homozygous Z allele. <strong>CT chest:</strong> Panlobular emphysema, basal-predominant bilaterally \u2014 classic AATD pattern (vs. centrilobular apical-predominant in smoking). <strong>FeNO:</strong> 18 ppb (normal \u2014 no T2 inflammation). <strong>Blood eos:</strong> 180/\u03BCL (normal). <strong>IgE:</strong> 82 IU/mL (normal). <strong>Liver enzymes:</strong> ALT 68 (mildly elevated \u2014 hepatic Z protein accumulation).',
      feedback:[
        {icon:'\uD83C\uDFDE', text:'<strong>Basal-predominant panlobular emphysema</strong> on CT is the radiographic signature of AATD. Smoking-related emphysema destroys upper lobe tissue (centrilobular, apical). AATD destroys lower lobe tissue (panlobular, basal). This distinction alone should trigger A1AT testing.'},
        {icon:'\uD83D\uDC89', text:'<strong>Augmentation therapy</strong> (weekly intravenous A1AT protein infusions, e.g., Prolastin, Zemaira) is the only AATD-specific treatment. It maintains serum A1AT above the protective threshold of 80 mg/dL, slowing the rate of FEV1 decline. It does not restore lost lung tissue \u2014 early diagnosis matters enormously.'},
        {icon:'\uD83E\uDEB4', text:'<strong>Mildly elevated liver enzymes</strong> in ZZ genotype reflects hepatic accumulation of misfolded Z protein \u2014 AATD is also a liver disease. Annual liver surveillance and hepatology referral are indicated regardless of pulmonary severity.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'AATD-specific management',
      decisionPrompt:'AATD confirmed. Pi*ZZ genotype. A1AT level 18 mg/dL. FEV1 52%, basal emphysema on CT. Non-smoker. Recurrent bronchitis 3-4x/year. Father died of emphysema at 62. What is your management plan?',
      choices:[
        {text:'Start A1AT augmentation therapy (IV infusion weekly). Pulmonary rehabilitation. Aggressive infection management (early antibiotics, consider prophylactic azithromycin). Hepatology referral for liver surveillance. Family cascade testing \u2014 siblings have 50% carrier risk, 25% ZZ risk. Lung transplant evaluation if FEV1 continues to decline.', outcome:'good'},
        {text:'Optimize ICS/LABA/LAMA. Pulmonary rehab. Refer to pulmonology. Discuss augmentation.', outcome:'partial'},
        {text:'Continue current ICS/LABA. Add roflumilast (PDE4 inhibitor for COPD). Follow FEV1 annually.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct and comprehensive.</strong> Augmentation therapy addresses the underlying deficiency. Pulmonary rehab improves functional capacity. Infection prevention is critical \u2014 each exacerbation accelerates FEV1 decline. Hepatology is essential \u2014 ZZ patients have significant liver disease risk. Family cascade testing may identify siblings with ZZ genotype before they develop symptoms \u2014 the most important secondary benefit of the diagnosis.</p>',
        partial:'<p><strong>Incomplete.</strong> Optimizing inhaled therapy addresses symptoms but not the underlying mechanism. Augmentation therapy should not be "discussed" \u2014 it should be initiated. Marcus has FEV1 52% and is actively losing lung function at an accelerated rate without augmentation.</p>',
        bad:'<p><strong>Misses the diagnosis entirely.</strong> Roflumilast is for frequent-exacerbator COPD \u2014 not AATD. Adding another COPD medication without addressing the A1AT deficiency continues 47 years of wrong treatment. Annual FEV1 monitoring without augmentation is watching irreversible lung destruction happen slowly.</p>'
      },
      keyFindings:['Non-smoker with FEV1 52% \u2014 irreversible obstruction','Father died of emphysema without smoking \u2014 critical family history','Serum A1AT 18 mg/dL \u2014 severely deficient','SERPINA1 Pi*ZZ genotype \u2014 confirmed','Basal-predominant panlobular emphysema on CT \u2014 AATD pattern','FeNO 18, eos 180 \u2014 no T2 inflammation (not eosinophilic asthma)','Mildly elevated liver enzymes \u2014 hepatic involvement','Fixed obstruction \u2014 minimal bronchodilator response'],
      reflection:[
        {icon:'\u23F1', q:'<strong>Marcus was labeled with asthma for 39 years.</strong> At which visit could this diagnosis have been made? What is the single most important question that should be asked in every patient with "difficult asthma" or "COPD"?'},
        {icon:'\uD83D\uDC68\u200D\uD83D\uDC66', q:'<strong>Marcus\u2019s father almost certainly had undiagnosed AATD.</strong> His siblings may have ZZ genotype without knowing it. How do you approach family cascade testing for AATD \u2014 and who pays for it?'},
        {icon:'\uD83E\uDDEC', q:'<strong>GENA integration:</strong> Non-smoker + irreversible obstruction + basal emphysema + father with non-smoking emphysema + recurrent infections. What would GENA\u2019s output look like, and at what visit would it have been triggered?'}
      ]
    }
  ]
};

// ── G5C  DIANE / EGPA ────────────────────────────────────────
window.CASES['G5C'] = {
  id:'G5C', family:5, isGenetic:false,
  headline:'"My asthma has gotten so much worse \u2014 and now my foot is numb"',
  patient:'Diane K., 52F &nbsp;&#183;&nbsp; Late-onset asthma &nbsp;&#183;&nbsp; Foot drop, skin lesions',
  tagline:'When asthma is not the diagnosis \u2014 it\u2019s the first symptom.',
  diagnosis:'Eosinophilic Granulomatosis with Polyangiitis (EGPA / Churg-Strauss Syndrome)',
  diagnosisText:'EGPA is a systemic necrotizing vasculitis affecting small-to-medium vessels, characteristically associated with asthma, eosinophilia, and granulomatous inflammation. It progresses through three phases: an allergic phase (asthma and allergic rhinitis), an eosinophilic phase (peripheral eosinophilia, organ infiltration), and a vasculitic phase (mononeuritis multiplex, cutaneous vasculitis, cardiac involvement). It is rare (1-3 per 100,000) but fatal if untreated. The most common misdiagnosis is "severe asthma."',
  genaText:'Diane\u2019s constellation \u2014 late-onset asthma at age 47 (atypical), blood eosinophils 2,400/\u03BCL (markedly elevated), FeNO 72, new foot drop (mononeuritis multiplex), palpable purpura on lower legs, sinusitis, and no prior atopic history \u2014 is EGPA until proven otherwise. Blood eosinophils above 1,500 in a patient with asthma should always trigger vasculitis workup. GENA Screen is designed to surface this pattern before organ damage becomes permanent.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Urgent Referral',
      sub:'Diane K., 52F \u2014 worsening asthma + new neurologic symptoms',
      snapshot:'Diane is a 52-year-old woman referred urgently. She developed asthma at age 47 \u2014 no prior atopic history, no childhood asthma. Now on high-dose ICS/LABA + montelukast. Asthma getting worse despite escalating therapy. Three weeks ago she noticed numbness and weakness of her right foot. Today she has a rash on her lower legs. "I don\u2019t understand \u2014 I thought this was just asthma."',
      vitals:[{t:'SpO2 95%',f:true},{t:'RR 20',f:false},{t:'Purpura: bilateral',f:true},{t:'Foot drop R',f:true}],
      questions:[
        {id:'G5C_q1', prompt:'Late-onset asthma at 47, now with foot drop and palpable purpura. This is not a routine asthma visit. What systemic diagnosis must you rule out immediately \u2014 and why is the eosinophil count the most important lab you can order right now?', placeholder:'EGPA \u2014 vasculitis presenting as severe asthma. Blood eos >1500 + asthma + organ involvement = EGPA until proven otherwise...'},
        {id:'G5C_q2', prompt:'Diane has no childhood asthma, no allergies, no family atopy. She developed asthma de novo at age 47. Why is late-onset non-atopic asthma a red flag that demands further investigation beyond inhaler escalation?', placeholder:'Adult-onset non-atopic asthma is not classic asthma \u2014 suggests intrinsic mechanism, possible underlying systemic disease...'}
      ],
      nextFindingLabel:'Exam findings that make this urgent',
      nextFinding:'<strong>Neurologic:</strong> Right foot drop confirmed \u2014 peroneal nerve territory. Right hand grip weakness (4/5). Pattern of mononeuritis multiplex \u2014 multiple isolated nerve deficits.<br><br><strong>Skin:</strong> Palpable purpura on bilateral lower extremities \u2014 non-blanching, 2-8mm lesions. Consistent with small vessel vasculitis.<br><br><strong>Cardiac:</strong> New S4 gallop. Echo ordered urgently.<br><br><strong>History:</strong> No NSAID use, no allergies to medications. Never smoked. No family history of autoimmune disease. Lost 8 lbs over 2 months.',
      feedback:[
        {icon:'\uD83D\uDEA8', text:'<strong>Mononeuritis multiplex + palpable purpura + worsening asthma = systemic vasculitis until proven otherwise.</strong> This is a medical urgency. EGPA can cause fatal cardiac involvement (myocarditis, coronary vasculitis) \u2014 the echocardiogram ordered today may reveal cardiomyopathy.'},
        {icon:'\uD83D\uDCCA', text:'<strong>Blood eosinophils is the most important test to order right now.</strong> In EGPA, eosinophils are dramatically elevated \u2014 typically >1,500/\u03BCL and often >5,000. A count this high in a patient with multi-organ involvement is near-diagnostic.'},
        {icon:'\u2764', text:'<strong>Cardiac EGPA carries 50% mortality if untreated.</strong> The new S4 gallop in this patient with multiorgan vasculitis requires urgent echocardiography and cardiology consultation today.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Urgent Biomarker Workup',
      sub:'Eos, ANCA, biopsy, echo',
      snapshot:'Urgent labs and imaging returned. Rheumatology consulted.',
      vitals:[{t:'Eos 2,400 \u2191\u2191',f:true},{t:'ANCA: p-ANCA +',f:true},{t:'Echo: EF 40% \u2193',f:true},{t:'Biopsy: vasculitis',f:true}],
      questions:[
        {id:'G5C_q3', prompt:'Blood eos 2,400/\u03BCL (markedly elevated). p-ANCA positive (MPO). Echo: EF 40% (reduced from normal 6 months ago \u2014 new cardiomyopathy). Skin biopsy: small vessel vasculitis with eosinophilic infiltration. FeNO 72 ppb. FEV1 64%. What is the diagnosis and what ACR/EULAR criteria does Diane meet?', placeholder:'EGPA confirmed \u2014 asthma + eos >1500 + mononeuritis + purpura + positive biopsy. Meets ACR 2022 classification criteria...'},
        {id:'G5C_q4', prompt:'Diane asks: "Will I get better? Will my foot drop go away?" How do you counsel a patient with newly diagnosed EGPA about prognosis \u2014 including what can and cannot be reversed?', placeholder:'With treatment, vasculitis and organ inflammation improve. Neuropathy partially reverses with time. Cardiac function usually improves with immunosuppression. Asthma persists lifelong.'}
      ],
      nextFindingLabel:'Diagnostic confirmation',
      nextFinding:'<strong>Blood eos:</strong> 2,400/\u03BCL (markedly elevated, reference &lt;300). <strong>p-ANCA (MPO):</strong> Positive \u2014 present in ~40% of EGPA, associated with vasculitic phenotype. <strong>Echo:</strong> EF 40%, global hypokinesis \u2014 EGPA cardiomyopathy. <strong>Skin biopsy:</strong> Eosinophilic vasculitis of small vessels \u2014 diagnostic. <strong>FeNO:</strong> 72 ppb. <strong>Nerve conduction study:</strong> Mononeuritis multiplex \u2014 right peroneal and right median nerve. <strong>CT chest/sinuses:</strong> Bilateral pulmonary infiltrates (eosinophilic), sinus opacification.',
      feedback:[
        {icon:'\uD83D\uDEA8', text:'<strong>EF 40% \u2014 new cardiomyopathy \u2014 is the most dangerous finding.</strong> EGPA cardiac involvement (myocarditis, coronary vasculitis, pericarditis) is the leading cause of EGPA mortality. This patient needs inpatient cardiac monitoring and immediate immunosuppression.'},
        {icon:'\uD83D\uDD2C', text:'<strong>Skin biopsy is diagnostic.</strong> Eosinophilic vasculitis on biopsy, combined with the clinical constellation, confirms EGPA. This is why unexplained purpura in a systemic illness always warrants biopsy.'},
        {icon:'\uD83D\uDC8A', text:'<strong>Treatment is high-dose systemic corticosteroids + cyclophosphamide</strong> (or rituximab for ANCA-positive disease). Biologic option: mepolizumab is FDA-approved for EGPA \u2014 reduces eosinophilic inflammation and allows OCS tapering after induction.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'EGPA \u2014 urgent immunosuppression',
      decisionPrompt:'EGPA confirmed. Blood eos 2,400. p-ANCA positive. EF 40% (new cardiomyopathy). Mononeuritis multiplex. Palpable purpura. What is your management plan?',
      choices:[
        {text:'Admit for inpatient management. High-dose IV methylprednisolone (induction). Add cyclophosphamide or rituximab given cardiac and neurologic involvement (severe/refractory disease features). Cardiology co-management. Rheumatology primary. After remission induction: mepolizumab for maintenance + OCS taper. Continue asthma controller therapy throughout \u2014 asthma persists even in remission.', outcome:'good'},
        {text:'Start high-dose oral prednisone 60mg. Rheumatology referral (next available). Follow up in 2 weeks.', outcome:'partial'},
        {text:'Escalate asthma therapy \u2014 add biologic for severe eosinophilic asthma. Neurology referral for foot drop. Dermatology for rash.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct and urgent.</strong> EGPA with cardiac involvement (EF 40%) and mononeuritis multiplex is severe disease requiring inpatient induction. IV methylprednisolone achieves faster therapeutic levels. Cyclophosphamide is indicated for organ-threatening disease. Mepolizumab maintenance after remission is FDA-approved and reduces relapse. The asthma will persist \u2014 it does not resolve with EGPA treatment.</p>',
        partial:'<p><strong>Dangerously slow.</strong> This patient has a new cardiomyopathy \u2014 EF dropped from normal to 40%. Outpatient management with 2-week follow-up is inappropriate. EGPA cardiac disease can progress to complete heart block or fatal arrhythmia within days. This patient needs inpatient admission today.</p>',
        bad:'<p><strong>Fatal misframing.</strong> Treating multi-organ vasculitis as "difficult asthma" with a biologic is not appropriate. EGPA is a systemic vasculitis that happens to present with asthma \u2014 the asthma is a symptom, not the diagnosis. Referring individual organ manifestations to separate specialists without a unifying diagnosis delays life-saving systemic immunosuppression.</p>'
      },
      keyFindings:['Late-onset asthma age 47 \u2014 no prior atopy (red flag)','Blood eos 2,400/\u03BCL \u2014 markedly elevated (>1,500 = vasculitis workup mandatory)','p-ANCA (MPO) positive','EF 40% \u2014 new EGPA cardiomyopathy','Mononeuritis multiplex \u2014 right peroneal + right median','Palpable purpura \u2014 small vessel vasculitis','Skin biopsy: eosinophilic vasculitis \u2014 diagnostic','8-lb weight loss \u2014 systemic disease'],
      reflection:[
        {icon:'\uD83D\uDCCA', q:'<strong>Blood eos 2,400 was the number that should have triggered immediate vasculitis workup.</strong> What is your threshold for eosinophil count that mandates further systemic investigation in an asthmatic? Write down your number now.'},
        {icon:'\u2764', q:'<strong>Cardiac EGPA killed this patient\u2019s myocardium before she was diagnosed.</strong> The EF dropped from normal to 40% during the workup period. How do you build urgency into your evaluation when multi-organ involvement is suspected?'},
        {icon:'\uD83E\uDDEC', q:'<strong>GENA integration:</strong> Late-onset non-atopic asthma + eos 2,400 + mononeuritis + purpura + weight loss. At what eosinophil threshold would GENA have returned a vasculitis flag? What other constellations in the presenting history should have triggered earlier concern?'}
      ]
    }
  ]
};

// ── G5D  TYLER 2 / T2-HIGH ATOPIC ASTHMA ────────────────────
window.CASES['G5D'] = {
  id:'G5D', family:5, isGenetic:false,
  headline:'"I\u2019ve had asthma my whole life \u2014 the new medications help but I still have attacks"',
  patient:'Tyler W., 28M &nbsp;&#183;&nbsp; Atopic dermatitis, allergic rhinitis &nbsp;&#183;&nbsp; FeNO 62',
  tagline:'The right biomarkers, the right biologic \u2014 teaching the selection pathway.',
  diagnosis:'T2-High Atopic Asthma \u2014 Dupilumab candidate (IL-4R\u03B1)',
  diagnosisText:'T2-high atopic asthma is the most common severe asthma endotype, characterized by IgE-mediated allergic sensitization, elevated blood eosinophils, elevated FeNO, and frequently coexisting atopic dermatitis and allergic rhinitis (the "atopic march"). Treatment is guided by the biomarker profile: the presence of atopic dermatitis alongside asthma and the degree of type 2 inflammation determine biologic selection. This case teaches the structured biomarker-to-biologic decision pathway.',
  genaText:'This case is not a rare disease \u2014 it is the most common severe asthma phenotype. GENA\u2019s role here is not rare disease identification but structured phenotyping that guides biologic selection. The teaching: even common diseases benefit from constellation-based decision support when the treatment options are expensive, phenotype-specific, and frequently mismatched.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Initial Presentation',
      sub:'Tyler W., 28M \u2014 severe persistent asthma, atopic comorbidities',
      snapshot:'Tyler is a 28-year-old with asthma since childhood. Also has atopic dermatitis (moderate \u2014 elbows, behind knees) and allergic rhinitis. Currently on high-dose ICS/LABA. Still has 2-3 exacerbations per year requiring OCS. Skin flares correlate with asthma flares. He has never had eos measured or FeNO testing.',
      vitals:[{t:'SpO2 98%',f:false},{t:'FEV1 72%',f:true},{t:'Eczema on arms',f:true},{t:'Rhinitic mucosa',f:true}],
      questions:[
        {id:'G5D_q1', prompt:'Tyler has the classic atopic triad: asthma + atopic dermatitis + allergic rhinitis. Before selecting a biologic, what biomarkers do you need to order \u2014 and why does the presence of atopic dermatitis specifically change which biologic you would choose?', placeholder:'Order FeNO, blood eos, total IgE, specific IgE panel. AD + asthma = dupilumab (approved for both) vs mepolizumab (asthma only)...'},
        {id:'G5D_q2', prompt:'Tyler asks why his skin flares and his asthma flares happen at the same time. Explain the shared type 2 inflammatory pathway that connects atopic dermatitis and asthma.', placeholder:'IL-4 and IL-13 drive both AD (skin barrier dysfunction, type 2 skin inflammation) and asthma (airway eosinophilia, mucus production). Dupilumab blocks both simultaneously...'}
      ],
      nextFindingLabel:'Clinical features and atopic history',
      nextFinding:'<strong>Atopic dermatitis:</strong> Active moderate eczema on bilateral antecubital fossae and popliteal fossae. Flares with dust mite exposure and stress. Uses topical steroids daily.<br><br><strong>Allergic rhinitis:</strong> Year-round congestion, sneezing. Responds partially to antihistamines and intranasal fluticasone.<br><br><strong>Asthma triggers:</strong> Dust mites, cats, exercise, URIs. Never had occupational exposure. Never smoked.<br><br><strong>Skin prick testing (today):</strong> Strongly positive to dust mite (4+), cat (3+), dog (2+), cockroach (2+).',
      feedback:[
        {icon:'\uD83D\uDD17', text:'<strong>The atopic triad</strong> (asthma + AD + allergic rhinitis) is driven by shared type 2 (IL-4/IL-13/IL-5) inflammation. The skin and airway are part of the same immunologic disease \u2014 not three separate conditions. This is why Tyler\u2019s skin and chest flare together.'},
        {icon:'\uD83D\uDC8A', text:'<strong>Dupilumab (anti-IL-4R\u03B1)</strong> is FDA-approved for moderate-to-severe atopic dermatitis AND for add-on maintenance therapy of moderate-to-severe asthma. In Tyler\u2019s case \u2014 where both require biologic-level therapy \u2014 one injection treats both conditions.'},
        {icon:'\uD83D\uDC1D', text:'<strong>Strongly positive dust mite SPT</strong> makes this an allergen immunotherapy candidate as well \u2014 subcutaneous or sublingual dust mite SLIT could address the allergic sensitization driving both his skin and airway disease.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Biomarker Workup',
      sub:'Complete T2 biomarker profile',
      snapshot:'Biomarker workup returned. Biologic selection now possible.',
      vitals:[{t:'FeNO 62 ppb \u2191',f:true},{t:'Eos 450/\u03BCL \u2191',f:true},{t:'IgE 840 IU/mL \u2191',f:true},{t:'FEV1 72%',f:true}],
      questions:[
        {id:'G5D_q3', prompt:'FeNO 62 ppb (elevated T2). Blood eos 450/\u03BCL (elevated). Total IgE 840 IU/mL (elevated). Specific IgE: dust mite 18 kU/L (strongly positive), cat 8.2, dog 4.1. FEV1 72%. Using the biomarker profile, rank the biologics: dupilumab, mepolizumab, benralizumab, omalizumab. What is your first choice and why?', placeholder:'Dupilumab: covers AD + asthma + high FeNO/eos/IgE. Omalizumab: high IgE but IgE 840 may be above dosing range. Mepolizumab: eos only, no AD coverage...'},
        {id:'G5D_q4', prompt:'IgE 840 IU/mL: is Tyler eligible for omalizumab? What are the weight-based IgE dosing limits for omalizumab \u2014 and at IgE 840, what weight limit applies?', placeholder:'Omalizumab dosing table: IgE 701-1300 approved only for 25-70kg. Above 90kg is outside dosing table. Need to check Tyler\u2019s weight...'}
      ],
      nextFindingLabel:'Complete phenotype profile',
      nextFinding:'<strong>FeNO:</strong> 62 ppb (significantly elevated \u2014 predicts corticosteroid response and T2 inflammation). <strong>Blood eos:</strong> 450/\u03BCL (elevated \u2014 eosinophilic phenotype). <strong>Total IgE:</strong> 840 IU/mL (significantly elevated). <strong>Specific IgE:</strong> Dust mite 18 kU/L, cat 8.2, dog 4.1. <strong>Weight:</strong> 82kg. <strong>Omalizumab dosing check:</strong> IgE 840 at weight 82kg \u2014 above dosing table (IgE 701-1300 is only approved up to 70kg). Omalizumab NOT appropriate at this IgE/weight combination. <strong>Dupilumab:</strong> No dosing restrictions based on IgE or weight.',
      feedback:[
        {icon:'\uD83C\uDFAF', text:'<strong>The biomarker profile points to dupilumab as first choice</strong> \u2014 high FeNO (IL-4/IL-13 pathway dominant), elevated eos, elevated IgE, AND active atopic dermatitis. Dupilumab is the only biologic that addresses the IL-4/IL-13 axis driving all three conditions simultaneously.'},
        {icon:'\u26A0', text:'<strong>Omalizumab is excluded by the dosing table.</strong> IgE 840 + weight 82kg puts Tyler outside the approved dosing range. This is a real clinical pitfall \u2014 high IgE looks like an omalizumab candidate until you check the weight-based table.'},
        {icon:'\uD83D\uDD2C', text:'<strong>FeNO 62 ppb predicts excellent response to dupilumab.</strong> In the LIBERTY ASTHMA QUEST trial, patients with FeNO \u226525 ppb had the greatest exacerbation reduction on dupilumab. Tyler\u2019s FeNO 62 puts him in the highest-response category.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'Biologic selection \u2014 the structured pathway',
      decisionPrompt:'T2-high atopic asthma confirmed. FeNO 62, eos 450, IgE 840 (above omalizumab dosing table at 82kg). Active moderate atopic dermatitis. FEV1 72%. 2-3 OCS courses per year. What is your biologic recommendation?',
      choices:[
        {text:'Start dupilumab 200mg SC every 2 weeks. Addresses asthma AND atopic dermatitis with a single biologic. Discuss concurrent dust mite allergen immunotherapy for allergic sensitization. Add intranasal dupilumab for rhinitis (or optimize intranasal ICS). Recheck FeNO and eos at 4 months.', outcome:'good'},
        {text:'Start mepolizumab 100mg SC monthly. Eosinophils are elevated and mepolizumab is well-established.', outcome:'partial'},
        {text:'Start omalizumab \u2014 IgE 840 confirms allergic asthma and omalizumab targets IgE.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> Dupilumab is the optimal choice: FDA-approved for both moderate-to-severe asthma AND moderate-to-severe atopic dermatitis, addressing Tyler\u2019s entire T2 disease burden with one biologic. FeNO 62 predicts strong response. Adding dust mite SLIT addresses the allergic sensitization driving both conditions. Monitoring FeNO and eos at 4 months confirms treatment response.</p>',
        partial:'<p><strong>Reasonable but incomplete.</strong> Mepolizumab reduces eosinophils and asthma exacerbations but does not address the atopic dermatitis component. Tyler would still need separate AD therapy. Dupilumab is more efficient for this phenotype.</p>',
        bad:'<p><strong>Dosing error.</strong> Omalizumab at IgE 840 and weight 82kg is outside the FDA-approved dosing table. This would be an off-label prescribing error. Beyond the dosing issue, omalizumab targets IgE but does not address the T2 airway inflammation (FeNO, eos) or atopic dermatitis. Dupilumab is the correct phenotype match.</p>'
      },
      keyFindings:['Atopic triad: asthma + atopic dermatitis + allergic rhinitis','FeNO 62 ppb \u2014 IL-4/IL-13 pathway dominant','Blood eos 450/\u03BCL \u2014 eosinophilic component','IgE 840 IU/mL \u2014 above omalizumab dosing table at 82kg','Dust mite strongly sensitized (SPT 4+, specific IgE 18)','FEV1 72% \u2014 persistent obstruction','Skin and chest flares correlated \u2014 shared T2 mechanism'],
      reflection:[
        {icon:'\uD83C\uDFAF', q:'<strong>The omalizumab dosing table is a real clinical trap.</strong> How do you systematically verify biologic eligibility before discussing a specific agent with a patient? What reference do you use?'},
        {icon:'\uD83D\uDD17', q:'<strong>Tyler\u2019s skin and asthma flare together.</strong> How do you explain the shared T2 pathway to a patient who has always thought of his eczema and asthma as two separate diseases?'},
        {icon:'\uD83D\uDCC8', q:'<strong>FeNO as a treatment response monitor:</strong> If Tyler\u2019s FeNO drops from 62 to 18 at 4 months on dupilumab, what does that tell you? What if it remains elevated?'}
      ]
    }
  ]
};

// ── G5E  SANDRA 2 / INDUCIBLE LARYNGEAL OBSTRUCTION ─────────
window.CASES['G5E'] = {
  id:'G5E', family:5, isGenetic:false,
  headline:'"My asthma attacks don\u2019t respond to my inhaler and they scare me to death"',
  patient:'Sandra W., 44F &nbsp;&#183;&nbsp; Voice teacher &nbsp;&#183;&nbsp; Normal spirometry between episodes',
  tagline:'Not every wheeze is asthma. Not every inhaler failure is severe asthma.',
  diagnosis:'Inducible Laryngeal Obstruction (ILO / Vocal Cord Dysfunction)',
  diagnosisText:'Inducible laryngeal obstruction (ILO), formerly called vocal cord dysfunction (VCD), is paradoxical adduction of the vocal cords during inspiration, causing episodic dyspnea, stridor, and throat tightness. It is frequently misdiagnosed as asthma and may coexist with true asthma. The key distinguishing features are: inspiratory stridor rather than expiratory wheeze, normal spirometry between episodes, flattened inspiratory loop on flow-volume curve during symptoms, and absence of response to bronchodilators. Treatment is speech therapy \u2014 not inhalers or biologics.',
  genaText:'This case is the deliberate foil in Chief Complaint 5. GENA is not indicated. ILO is a functional disorder of laryngeal control \u2014 not a genetic, immunologic, or structural lung disease. The teaching: the most important GENA skill is knowing when NOT to activate it. A patient with episodic dyspnea, normal biomarkers, normal spirometry between episodes, and no response to any asthma therapy does not need a biologic workup \u2014 they need a laryngoscopy during symptoms and referral to a speech-language pathologist.',
  visits:[
    {
      label:'Visit 1', icon:'\uD83E\uDE7A', iconClass:'v1', title:'Initial Presentation',
      sub:'Sandra W., 44F \u2014 episodic dyspnea, inhaler failures',
      snapshot:'Sandra is a 44-year-old voice teacher referred with "refractory asthma." She has been on high-dose ICS/LABA for 4 years. Her "asthma attacks" are terrifying \u2014 sudden onset, intense throat tightness, feeling of choking. Albuterol doesn\u2019t help during attacks. Between episodes, she feels completely normal. Her pulmonologist has been escalating therapy. She\u2019s been told she may need a biologic.',
      vitals:[{t:'SpO2 99%',f:false},{t:'Normal at rest',f:false},{t:'No wheeze',f:false},{t:'Voice: slightly hoarse',f:false}],
      questions:[
        {id:'G5E_q1', prompt:'Episodic dyspnea that doesn\u2019t respond to albuterol, completely normal between episodes, and a voice teacher. What diagnosis should be at the top of your differential \u2014 and what is the single most diagnostically useful question to ask about the character of her breathing during an episode?', placeholder:'ILO/VCD \u2014 ask about inspiratory vs. expiratory noise, throat tightness vs. chest tightness, stridor vs. wheeze...'},
        {id:'G5E_q2', prompt:'She describes the noise during episodes as coming from her throat, not her chest. She can sometimes abort episodes by breathing slowly through pursed lips. What does this pattern tell you about the anatomy of her obstruction?', placeholder:'Throat-origin noise = laryngeal, not bronchial. Pursed lip breathing helps ILO (slows turbulent flow through vocal cords) \u2014 doesn\u2019t help bronchospasm...'}
      ],
      nextFindingLabel:'History that redirects the diagnosis',
      nextFinding:'<strong>Episode character:</strong> "The noise is definitely in my throat, not my chest. It\u2019s an inspiratory sound \u2014 like I\u2019m sucking air through something tight." Inspiratory stridor, not expiratory wheeze.<br><br><strong>Triggers:</strong> High-stress performances, certain high notes, exercise, strong smells, cold air. Notably: NOT allergen exposure.<br><br><strong>Response to albuterol:</strong> "It never helps during an attack. I\u2019ve used it during an episode and nothing happened."<br><br><strong>Occupation:</strong> Voice teacher \u2014 exquisite laryngeal proprioception. Has noticed her cords "slam shut" sometimes when she pushes her voice.<br><br><strong>Between episodes:</strong> "I\u2019m completely fine. I run 5 miles three times a week with no symptoms."',
      feedback:[
        {icon:'\uD83C\uDFB5', text:'<strong>Voice teachers and performers</strong> have heightened laryngeal awareness and are over-represented among ILO patients \u2014 both because they use their larynx professionally and because the condition can be triggered by vocal effort. The occupation is a diagnostic clue.'},
        {icon:'\uD83D\uDEAB', text:'<strong>Albuterol that reliably fails during episodes is not severe asthma.</strong> True severe asthma has some response to bronchodilator \u2014 even if incomplete. Complete non-response during a distressing episode suggests the obstruction is not at the bronchial level.'},
        {icon:'\uD83D\uDCA8', text:'<strong>Inspiratory stridor originating in the throat</strong> localizes the obstruction to the larynx, not the lower airways. Asthma produces expiratory wheeze from bronchospasm. ILO produces inspiratory stridor from paradoxical vocal cord adduction during inhalation.'}
      ]
    },
    {
      label:'Visit 2', icon:'\uD83E\uDDEA', iconClass:'v2', title:'Diagnostic Workup',
      sub:'Spirometry, FeNO, laryngoscopy',
      snapshot:'Full workup completed including laryngoscopy during a triggered episode.',
      vitals:[{t:'FEV1 98% pred',f:false},{t:'FeNO 14 ppb',f:false},{t:'Eos 140/\u03BCL',f:false},{t:'Laryngoscopy: ILO',f:true}],
      questions:[
        {id:'G5E_q3', prompt:'Spirometry (between episodes): FEV1 98%, FVC 102%, FEV1/FVC 0.82 \u2014 completely normal. FeNO 14 ppb (normal \u2014 no T2 inflammation). Blood eos 140/\u03BCL (normal). IgE 68 IU/mL (normal). During an exercise-triggered episode: laryngoscopy shows paradoxical vocal cord adduction on inspiration \u2014 ILO confirmed. How does this workup eliminate asthma as the primary diagnosis?', placeholder:'Normal spirometry between episodes + normal FeNO + normal eos + paradoxical cord adduction on laryngoscopy = ILO, not asthma...'},
        {id:'G5E_q4', prompt:'Sandra asks: "Why has everyone been treating me for asthma for 4 years?" What systemic factors lead to ILO misdiagnosis \u2014 and why is it so common?', placeholder:'ILO mimics asthma clinically. Episodes are distressing. Physicians default to asthma diagnosis. Spirometry is not done during an episode. Laryngoscopy during an episode is rarely performed. Speech therapy is not a reflex prescription for dyspnea...'}
      ],
      nextFindingLabel:'Diagnostic clarification',
      nextFinding:'<strong>Spirometry (baseline):</strong> Completely normal \u2014 FEV1 98%, no obstruction, no restriction. <strong>Flow-volume loop during episode:</strong> Flattened inspiratory limb (classic ILO pattern). <strong>FeNO:</strong> 14 ppb (no T2 inflammation). <strong>Blood eos:</strong> 140/\u03BCL (normal). <strong>IgE:</strong> 68 IU/mL (normal). <strong>Laryngoscopy during triggered episode:</strong> Paradoxical adduction of both vocal cords during inspiration \u2014 ILO confirmed. Aryepiglottic fold involvement noted.',
      feedback:[
        {icon:'\uD83D\uDCC9', text:'<strong>Normal spirometry between episodes is the most important finding.</strong> Asthma \u2014 even well-controlled asthma \u2014 typically shows some degree of airflow variability. Completely normal FEV1 between distressing episodes is a strong sign that the obstruction is functional and episodic, not structural and continuous.'},
        {icon:'\uD83D\uDD2C', text:'<strong>Normal FeNO + normal eos + normal IgE = no T2 inflammation.</strong> This patient has no biomarker evidence of eosinophilic or allergic asthma. Adding a biologic would have been not just ineffective but unnecessary \u2014 treating a laboratory finding that doesn\u2019t exist.'},
        {icon:'\uD83D\uDCAC', text:'<strong>Treatment is speech therapy</strong> \u2014 specifically, laryngeal control techniques taught by a speech-language pathologist with expertise in ILO. Breathing retraining, trigger management, and psychosocial support are the treatment. Not ICS, not biologics.'}
      ]
    },
    {
      label:'Decision', icon:'\u26A1', iconClass:'v3', title:'Management Decision',
      sub:'ILO \u2014 the right treatment for the right diagnosis',
      decisionPrompt:'ILO confirmed on laryngoscopy. Spirometry completely normal between episodes. No T2 biomarkers. Four years on unnecessary high-dose ICS/LABA. What is your management plan?',
      choices:[
        {text:'Refer to speech-language pathologist with ILO expertise for laryngeal control therapy. Taper and discontinue ICS/LABA over 4-6 weeks (no asthma found). Identify and manage triggers (GERD, post-nasal drip, stress). Counsel Sandra that this is a functional disorder \u2014 highly treatable. No biologic warranted.', outcome:'good'},
        {text:'Continue ICS/LABA in case true asthma is present. Add speech therapy. Follow up in 3 months.', outcome:'partial'},
        {text:'Proceed with dupilumab workup \u2014 her symptoms are severe and she has failed multiple controllers.', outcome:'bad'}
      ],
      outcomes:{
        good:'<p><strong>Correct.</strong> ILO is treated with speech therapy \u2014 laryngeal control techniques, breathing retraining, and trigger management. There is no asthma on this workup, so ICS/LABA should be tapered safely. Sandra has been on unnecessary high-dose inhaled steroids for 4 years with known side effects (adrenal suppression, bone density, ocular). Removing them is as important as adding the right treatment.</p>',
        partial:'<p><strong>Partially correct.</strong> Adding speech therapy is right, but continuing unnecessary ICS/LABA when there is no evidence of asthma continues 4 years of overtreatment. If Sandra has no asthma, she should not be on asthma medication. A supervised taper with close follow-up is appropriate.</p>',
        bad:'<p><strong>Incorrect diagnosis, wrong treatment.</strong> Dupilumab targets IL-4/IL-13 inflammatory asthma. Sandra has no T2 inflammation, no eosinophilia, no IgE sensitization, and normal spirometry. Biologics are expensive, require injections, and would have no mechanism of action in ILO. This is a function disorder of laryngeal control.'},
      keyFindings:['Normal spirometry between episodes \u2014 no fixed obstruction','Flattened inspiratory loop on flow-volume curve','FeNO 14 ppb \u2014 no T2 inflammation','Blood eos 140, IgE 68 \u2014 all normal','Inspiratory stridor from throat (not expiratory chest wheeze)','Paradoxical vocal cord adduction on laryngoscopy \u2014 ILO confirmed','Albuterol reliably failed during episodes','Voice teacher \u2014 occupation is a risk factor'],
      reflection:[
        {icon:'\uD83D\uDEAB', q:'<strong>Sandra was overtreated for 4 years.</strong> High-dose ICS has real side effects. What is your system for questioning an established asthma diagnosis when the patient is not responding to appropriate therapy?'},
        {icon:'\uD83D\uDCC9', q:'<strong>Normal spirometry between episodes</strong> is the key finding that should have triggered diagnostic reconsideration years ago. How do you distinguish ILO from asthma at the bedside \u2014 without laryngoscopy?'},
        {icon:'\uD83E\uDDEC', q:'<strong>GENA is not indicated here \u2014 and that\u2019s the lesson.</strong> What features of this presentation \u2014 in the first 5 minutes of visit 1 \u2014 should have told you this was not a genetic or immunologic problem?'}
      ]
    }
  ]
};

// Teaching modules for anchor asthma cases
window.MODULES['G5B'] = {
  tabs:['Pathophysiology','Guidelines','Framework','Evidence','EMR Lens'],
  panels:[
    {title:'A1AT Deficiency \u2014 Pathophysiology',content:'<div class="module-section-title">SERPINA1 Z allele \u2192 misfolded Z protein \u2192 hepatic retention \u2192 lung destruction</div><p class="module-body-text">Alpha-1 antitrypsin (A1AT) is the primary protease inhibitor in the lower respiratory tract. It is produced by the liver and secreted into circulation, where it neutralizes neutrophil elastase \u2014 an enzyme that would otherwise digest lung parenchyma during inflammation.</p><p class="module-body-text"><strong>The Z allele mechanism:</strong> The Z allele (Glu342Lys substitution) causes the A1AT protein to misfold and polymerize within hepatocytes. Instead of being secreted into circulation, Z protein accumulates in the liver (causing hepatic disease) and circulating A1AT levels fall to \u22648% of normal in ZZ homozygotes.</p><p class="module-body-text"><strong>Lung destruction:</strong> Without adequate circulating A1AT, neutrophil elastase degrades alveolar walls unopposed \u2014 producing panlobular emphysema beginning in the lung bases (where blood flow and elastase load are greatest).</p><p class="module-body-text"><strong>Why basal-predominant:</strong> Unlike smoking-related emphysema (apical, centrilobular), AATD emphysema is panlobular and basal-predominant \u2014 reflecting the gravity-dependent distribution of neutrophil elastase activity.</p><div class="module-refs"><div class="module-refs-label">References</div><div class="module-ref-item">American Thoracic Society/European Respiratory Society Statement: Standards for the Diagnosis and Management of Individuals with Alpha-1 Antitrypsin Deficiency. AJRCCM. 2003;168(7):818-900.</div></div>'},
    {title:'Diagnostic Guidelines',content:'<div class="module-section-title">AATD Diagnostic Pathway \u2014 ATS/ERS Standards</div><table class="module-table"><tr><th>Indication for Testing</th><th>Rationale</th></tr><tr><td>COPD or emphysema in non-smoker</td><td>AATD is the diagnosis until ruled out</td></tr><tr><td>COPD in smoker age &lt;45</td><td>Premature lung disease suggests genetic contribution</td></tr><tr><td>Basal-predominant emphysema on CT</td><td>AATD pattern vs. apical smoking pattern</td></tr><tr><td>Asthma not responding to therapy</td><td>AATD mimics refractory asthma</td></tr><tr><td>First-degree relative with AATD</td><td>Cascade testing \u2014 autosomal codominant</td></tr><tr><td>Unexplained liver disease</td><td>Z protein hepatic accumulation</td></tr></table><p class="module-body-text"><strong>Diagnostic tests in order:</strong><br>1. Serum A1AT level (if &lt;80 mg/dL, proceed)<br>2. SERPINA1 phenotyping (isoelectric focusing) or genotyping<br>3. Consider liver biopsy if hepatic disease suspected</p>'},
    {title:'Clinical Framework',content:'<div class="module-section-title">AATD vs. Asthma vs. COPD \u2014 Key Distinguishers</div><table class="module-table"><tr><th>Feature</th><th>AATD</th><th>Asthma</th><th>COPD (smoking)</th></tr><tr><td>Age of onset</td><td>30s-50s</td><td>Any</td><td>45+</td></tr><tr><td>Smoking history</td><td>Not required</td><td>Not required</td><td>Usually present</td></tr><tr><td>Obstruction</td><td>Fixed</td><td>Variable/reversible</td><td>Fixed</td></tr><tr><td>CT pattern</td><td>Basal panlobular</td><td>Normal or hyperinflation</td><td>Apical centrilobular</td></tr><tr><td>FeNO</td><td>Normal</td><td>Elevated (T2)</td><td>Normal</td></tr><tr><td>Family history</td><td>Lung disease in non-smokers</td><td>Atopy</td><td>Smoking</td></tr><tr><td>Specific treatment</td><td>Augmentation therapy</td><td>ICS/biologic</td><td>LAMA/LABA</td></tr></table>'},
    {title:'Evidence Grades',content:'<div class="module-section-title">Evidence Base \u2014 AATD Management</div><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> A1AT augmentation therapy slows CT-measured emphysema progression in ZZ patients (RAPID trial, NEJM 2015).</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> Smoking cessation is the single most important intervention \u2014 smoking massively accelerates AATD lung destruction.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Pulmonary rehabilitation improves functional capacity and quality of life.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Annual liver ultrasound surveillance for hepatocellular carcinoma in ZZ patients with cirrhosis.</p><p class="module-body-text"><span class="ev-grade ev-c">Grade C</span> Lung transplant is considered for end-stage disease \u2014 AATD is the 4th most common indication for lung transplant.</p>'},
    {title:'EMR Lens',content:'<div class="module-section-title">What the EMR Could Have Flagged for Marcus</div><p class="module-emr-note">GENA-style EMR integration would surface the AATD pattern before the 47-year mark.</p><table class="module-table"><tr><th>EMR Data Point</th><th>Available?</th><th>GENA Flag</th></tr><tr><td>FEV1 52% \u2014 never improved over 20 years</td><td>\u2713 Multiple visits</td><td>Fixed obstruction in non-smoker \u2014 test A1AT</td></tr><tr><td>Patient: non-smoker</td><td>\u2713 Social history</td><td>COPD-range obstruction in non-smoker = genetic cause</td></tr><tr><td>Father: emphysema without smoking</td><td>\u2717 Never documented</td><td>If documented: immediate A1AT testing trigger</td></tr><tr><td>Recurrent bronchitis 3-4x/year</td><td>\u2713 Antibiotic prescriptions</td><td>Recurrent infections + obstruction = non-smoking COPD workup</td></tr><tr><td>CT chest: basal emphysema</td><td>\u2713 Radiology report</td><td>Basal-predominant pattern = AATD-specific flag</td></tr></table><p class="module-body-text">A GENA-integrated EMR scanning for: [non-smoker + FEV1 &lt;70% + age &lt;50] would return AATD as a pre-diagnostic consideration and prompt A1AT level measurement \u2014 a $20 blood test that changes everything.</p>'}
  ]
};

window.MODULES['G5C'] = {
  tabs:['Pathophysiology','Guidelines','Framework','Evidence','EMR Lens'],
  panels:[
    {title:'EGPA \u2014 Pathophysiology',content:'<div class="module-section-title">Necrotizing vasculitis of small-to-medium vessels with eosinophilic infiltration</div><p class="module-body-text">EGPA (Eosinophilic Granulomatosis with Polyangiitis) is an ANCA-associated vasculitis characterized by tissue eosinophilia, granulomatous inflammation, and necrotizing vasculitis. It occurs almost exclusively in patients with pre-existing asthma \u2014 asthma is not just a comorbidity but an integral part of the disease process.</p><p class="module-body-text"><strong>Three phases:</strong></p><p class="module-body-text">1. <strong>Allergic phase:</strong> Asthma and allergic rhinitis, often present for years before diagnosis. Asthma is typically late-onset and non-atopic.</p><p class="module-body-text">2. <strong>Eosinophilic phase:</strong> Peripheral blood eosinophilia (often &gt;1,500/\u03BCL), organ infiltration (lungs, GI tract, heart).</p><p class="module-body-text">3. <strong>Vasculitic phase:</strong> Necrotizing vasculitis \u2014 mononeuritis multiplex, cutaneous vasculitis (purpura), renal involvement, and most dangerously, cardiac involvement.</p><p class="module-body-text"><strong>ANCA status:</strong> ~40% of EGPA patients are p-ANCA (MPO) positive \u2014 associated with more renal and neurologic disease. ~60% are ANCA-negative \u2014 associated with more cardiac and pulmonary eosinophilic disease.</p>'},
    {title:'Diagnostic Criteria',content:'<div class="module-section-title">ACR/EULAR 2022 EGPA Classification Criteria</div><p class="module-body-text">For classification (not diagnosis), the 2022 ACR/EULAR criteria require a score \u22656 from the following:</p><table class="module-table"><tr><th>Criterion</th><th>Points</th></tr><tr><td>Obstructive airway disease</td><td>+3</td></tr><tr><td>Nasal polyps</td><td>+3</td></tr><tr><td>Mononeuritis multiplex</td><td>+1</td></tr><tr><td>Blood eosinophils \u22651,000/\u03BCL</td><td>+5</td></tr><tr><td>Extravascular eosinophilic-predominant inflammation on biopsy</td><td>+2</td></tr><tr><td>p-ANCA/MPO-ANCA positive</td><td>-1 (reduces specificity)</td></tr></table><p class="module-body-text"><strong>Diane\u2019s score:</strong> Obstructive disease (+3) + mononeuritis (+1) + eos 2,400 (+5) + biopsy (+2) = <strong>11 points \u2014 classified as EGPA.</strong></p>'},
    {title:'Clinical Framework',content:'<div class="module-section-title">The Eosinophil Threshold Rule</div><p class="module-body-text">Every physician seeing asthma patients should know this rule:</p><div style="background:#fff3cd;border:2px solid #c9a84c;border-radius:8px;padding:16px;margin:12px 0;font-size:14px;"><strong>Blood eosinophils &gt;1,500/\u03BCL in a patient with asthma = vasculitis workup until proven otherwise.</strong></div><table class="module-table"><tr><th>Eos count</th><th>Clinical significance</th><th>Action</th></tr><tr><td>&lt;300</td><td>Normal / T2-low phenotype</td><td>Non-eosinophilic workup</td></tr><tr><td>300-500</td><td>Mild eosinophilia \u2014 T2-high asthma</td><td>Biologic consideration</td></tr><tr><td>500-1,500</td><td>Significant eosinophilia</td><td>Consider AERD, EGPA early phase</td></tr><tr><td>&gt;1,500</td><td>EGPA threshold</td><td>Immediate EGPA workup \u2014 ANCA, biopsy, echo, NCS</td></tr><tr><td>&gt;5,000</td><td>Hypereosinophilic syndrome threshold</td><td>Urgent hematology + cardiology</td></tr></table>'},
    {title:'Evidence Grades',content:'<div class="module-section-title">Evidence Base \u2014 EGPA Management</div><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> High-dose systemic corticosteroids for remission induction \u2014 methylprednisolone IV for severe/organ-threatening disease.</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> Cyclophosphamide for severe organ-threatening EGPA (cardiac, renal, neurologic).</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Rituximab as alternative to cyclophosphamide, particularly in ANCA-positive disease.</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> Mepolizumab \u2014 FDA-approved for EGPA maintenance/OCS-sparing (MIRRA trial, NEJM 2017).</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Echocardiography at diagnosis \u2014 cardiac EGPA is the leading cause of mortality.</p>'},
    {title:'EMR Lens',content:'<div class="module-section-title">What the EMR Could Have Flagged for Diane</div><p class="module-emr-note">GENA-style analysis would surface EGPA before organ damage accumulated.</p><table class="module-table"><tr><th>EMR Data Point</th><th>Available?</th><th>GENA Flag</th></tr><tr><td>Asthma onset age 47 \u2014 late-onset</td><td>\u2713 Problem list</td><td>Late-onset non-atopic asthma = intrinsic mechanism flag</td></tr><tr><td>Blood eos 2,400/\u03BCL</td><td>\u2713 CBC differential</td><td>Eos &gt;1,500 = EGPA vasculitis workup trigger</td></tr><tr><td>Sinus opacification on CT</td><td>\u2713 Radiology</td><td>Sinusitis + eos + asthma = EGPA upper airway involvement</td></tr><tr><td>Weight loss 8 lbs</td><td>\u2717 Not documented</td><td>Constitutional symptoms + vasculitis constellation = urgent</td></tr><tr><td>New foot weakness</td><td>\u2713 Neurology referral</td><td>Neuropathy + eos + asthma = mononeuritis multiplex = EGPA</td></tr></table><p class="module-body-text">The blood eosinophil count \u2014 already in the CBC differential ordered for a routine visit \u2014 was 2,400. That number, combined with late-onset asthma in the problem list, would have returned an EGPA flag at a prior visit. The data was there. No one looked.</p>'}
  ]
};

// ════════════════════════════════════════════════════════════
// CHIEF COMPLAINT 6 — "My child passed out"
// Pediatric syncope family — for Richard Simon
// H6A: Jordan / CPVT (THE case — genuinely missed)
// H6B: Maya / Vasovagal (benign foil)
// H6C: Ethan / HCM (structural — murmur missed)
// ════════════════════════════════════════════════════════════

// ── H6A  JORDAN / CPVT ────────────────────────────────────────
window.CASES['H6A'] = {
  id:'H6A', family:6, isGenetic:true,
  title:'Chief Complaint 6A',
  chief:'"He passed out during basketball — the coach thought he was just overheated"',
  patient:'Jordan, 14M &nbsp;&#183;&nbsp; 8th grade &nbsp;&#183;&nbsp; JV basketball &nbsp;&#183;&nbsp; Third episode this year',
  tags:['Pediatric','Syncope','Genetic','Cardiac'],
  accentColor:'#1a0a3d',
  headerGrad:'linear-gradient(135deg,#1a0a3d,#3a1a6e)',
  diagnosis:'Catecholaminergic Polymorphic Ventricular Tachycardia (CPVT) — RYR2 pathogenic variant',
  diagnosisText:'CPVT is caused by pathogenic variants in RYR2 (ryanodine receptor 2), leading to abnormal calcium release from the sarcoplasmic reticulum during adrenergic stimulation. The result: life-threatening bidirectional or polymorphic ventricular tachycardia triggered specifically by exercise or emotional stress — with a completely normal resting ECG. Jordan\'s three syncopal episodes, each during exertion or intense emotion, represent three near-death events. His resting ECG has been normal every time. That normal ECG has been falsely reassuring his physicians for two years.',
  genaText:'GENA Screen flags this constellation immediately: exertional syncope in a child + emotional trigger syncope + family history of sudden unexplained death in a young relative + normal resting ECG + normal echo = CPVT until proven otherwise. The normal ECG is not reassuring — it is the hallmark of CPVT. Exercise stress testing with continuous monitoring would have shown bidirectional VT within minutes. GENA would have triggered this workup after the first episode.',
  visits:[
    {
      label:'Visit 1', icon:'🏥',
      scenario:'<strong>Jordan Mitchell, 14M</strong> is brought in by his mother after his third syncopal episode this school year. Today\'s episode occurred during the fourth quarter of a close basketball game — he collapsed on the court and was unresponsive for approximately 20 seconds before regaining consciousness. He was confused for about two minutes afterward. His prior episodes: once during a timed mile run in September (witnessed, ~15 seconds), and once when he learned his grandfather had died suddenly — he was on the phone when he fainted.<br><br>His pediatrician evaluated him after the first episode. Resting ECG: normal. Orthostatic vitals: normal. Blood glucose: normal. He was told it was "vasovagal syncope — very common in adolescents" and to "make sure he stays hydrated."<br><br><strong>Vitals today:</strong> BP 118/72 &nbsp;|&nbsp; HR 82 regular &nbsp;|&nbsp; SpO₂ 99% &nbsp;|&nbsp; Wt 58kg &nbsp;|&nbsp; Ht 5\'8"<br><strong>Today\'s ECG:</strong> Normal sinus rhythm. QTc 418ms. No ST changes. No delta waves. <em>Normal.</em>',
      questions:[
        {id:'H6A_q1', prompt:'Three syncopal episodes: one during a mile run, one during emotional distress (learning of grandfather\'s death), one during the fourth quarter of a basketball game. What is the critical pattern in these triggers — and why does this pattern make "vasovagal syncope" the wrong diagnosis?', placeholder:'All three are adrenergic triggers: exercise + emotional stress. Vasovagal syncope is typically triggered by prolonged standing, heat, pain, or blood draws — not exertion and emotion. Exertional syncope in a child demands cardiac workup regardless of normal ECG...'},
        {id:'H6A_q2', prompt:'The resting ECG is normal. His pediatrician was reassured by this finding. Why is a normal resting ECG specifically NOT reassuring in a child with exertional syncope — and what cardiac arrhythmia is characterized by a normal resting ECG with life-threatening arrhythmias only during adrenergic stimulation?', placeholder:'CPVT, Long QT (some variants), HCM (ECG can be abnormal but may be subtle) — CPVT is the classic "normal resting ECG, lethal arrhythmia on exercise." A normal ECG at rest does not exclude the most dangerous causes of exertional syncope in children...'}
      ],
      keyFindings:['Exertional + emotional trigger pattern — adrenergic, not vasovagal','Three episodes in one school year — progressive frequency','Normal resting ECG: falsely reassuring for the most dangerous diagnoses','20-second loss of consciousness with post-event confusion — cardiac, not vasovagal','Grandfather\'s sudden death — family history not yet explored'],
      feedback:{
        good:'Correct reasoning. The adrenergic trigger pattern (exercise + emotion) is incompatible with vasovagal syncope. You\'ve identified the key discriminating feature that was missed at the prior visit.',
        partial:'You identified the exercise trigger but may have missed the emotional trigger as equally important. Both are adrenergic — together they define the CPVT phenotype.',
        bad:'The normal ECG is not a safe stopping point for exertional syncope in a child. Vasovagal syncope is a diagnosis of exclusion — it requires that cardiac causes have been specifically evaluated and excluded. They have not been.'
      }
    },
    {
      label:'Visit 2', icon:'🔬',
      scenario:'You\'ve appropriately escalated Jordan\'s workup. While arranging cardiology referral, you take a more detailed family history.<br><br><strong>Family history revealed:</strong><br>Jordan\'s maternal uncle — his mother\'s brother — died suddenly at age 19 during a high school track meet. The official cause of death was listed as "cardiac arrhythmia, cause undetermined." The family was told "these things happen sometimes" and no further evaluation of family members was performed. Jordan\'s mother has never fainted. Jordan\'s 11-year-old sister plays soccer — she has never fainted but has never been evaluated.<br><br><strong>Cardiology evaluation results:</strong><br>Resting ECG: Normal. QTc 418ms.<br>Echocardiogram: Normal — no structural abnormality, no LVH, normal function, normal valves.<br>Exercise stress test with continuous monitoring: At 85% max heart rate during stage 3 Bruce protocol, Jordan develops <strong>bidirectional ventricular tachycardia</strong> — alternating QRS axis with each beat. The test is stopped immediately. He does not lose consciousness during the test. Heart rate at onset: 148 bpm.<br><br><em>Bidirectional VT on exercise stress testing in a child is pathognomonic for CPVT.</em>',
      questions:[
        {id:'H6A_q3', prompt:'Bidirectional ventricular tachycardia appearing at HR 148 during exercise stress testing — with a completely normal resting ECG and normal echo. What is the diagnosis? What gene is most likely involved, and what is the mechanism by which adrenergic stimulation causes this arrhythmia?', placeholder:'CPVT — RYR2 (ryanodine receptor 2) in ~60% of cases. Mechanism: RYR2 mutation causes abnormal Ca2+ leak from sarcoplasmic reticulum during sympathetic activation → triggered activity → bidirectional VT. Normal heart structurally — the problem is calcium channel function, not structure...'},
        {id:'H6A_q4', prompt:'Jordan\'s maternal uncle died at 19 during a track meet — sudden death during exercise, no structural cause found. Jordan\'s 11-year-old sister plays soccer and has never been evaluated. What do you do next for the family — specifically, who needs evaluation, what test, and in what timeframe?', placeholder:'Cascade family testing urgently: mother (RYR2 sequencing — may be asymptomatic carrier), sister (exercise stress test + genetic testing — she is currently at risk during soccer). Uncle\'s death was almost certainly CPVT — the same mutation. This is the family diagnosis, not just Jordan\'s diagnosis...'}
      ],
      keyFindings:['Bidirectional VT at HR 148 on exercise stress — CPVT pathognomonic finding','Normal echo: no structural cause — arrhythmia is the primary problem','Normal resting ECG confirmed: characteristic of CPVT','Maternal uncle: sudden death at 19 during exercise — same diagnosis','Sister: currently active in soccer — at risk, unevaluated'],
      feedback:{
        good:'Excellent. You\'ve made the diagnosis from the exercise stress test finding and recognized the family implications immediately. The sister\'s unevaluated status during active sport is the most urgent action item.',
        partial:'You\'ve identified the diagnosis but may not have escalated the family urgency appropriately. The sister is currently playing soccer — she needs evaluation before her next game.',
        bad:'Bidirectional VT on exercise stress testing in a child is not a finding to await outpatient follow-up. This is the diagnosis. The sister playing soccer without evaluation is an active emergency.'
      }
    },
    {
      label:'Decision', icon:'⚡',
      scenario:'Jordan is admitted for monitoring and initiation of therapy. Genetic testing confirms: <strong>RYR2 c.7420G>A (p.Val2474Ile) — Pathogenic, heterozygous.</strong><br><br>He needs immediate treatment decisions. His mother asks: "Is he going to be okay? Can he ever play basketball again?"<br><br>Three management decisions must be made simultaneously:<br>1. Medical therapy<br>2. Device consideration<br>3. Activity restriction and return-to-sport counseling<br><br>Choose the management approach:',
      decisionPrompt:true,
      choices:[
        {
          text:'Beta blocker (nadolol preferred) + ICD implantation + permanent restriction from competitive sport. Genetic testing for mother and sister today.',
          outcome:'good'
        },
        {
          text:'Beta blocker alone. Reassure family that with medication compliance Jordan can return to all sports. Genetic testing can be arranged outpatient.',
          outcome:'bad'
        },
        {
          text:'ICD implantation only — no beta blocker needed if device is in place. Sports restriction until device confirmed working.',
          outcome:'partial'
        }
      ],
      outcomes:{
        good:'<strong>Correct management.</strong> Nadolol is the preferred beta blocker for CPVT (superior to metoprolol based on evidence). ICD is indicated given the documented hemodynamically significant VT — it is the backstop if medical therapy fails. Permanent restriction from competitive sport is guideline-recommended for CPVT regardless of medical therapy or ICD. The family genetic testing is urgent — the sister cannot play soccer until her RYR2 status and exercise response are known.',
        bad:'<strong>Beta blocker alone is insufficient.</strong> CPVT carries 30% mortality without treatment, and breakthrough events can occur on beta blockers. ICD implantation provides the essential safety net. More critically: Jordan cannot return to competitive sport — the guidelines are unambiguous. Telling a family their child can return to basketball with medication is incorrect and potentially fatal advice.',
        partial:'<strong>ICD without beta blocker is incomplete.</strong> Beta blockers are first-line and reduce arrhythmia burden. ICD is the safety backstop — it treats the event but does not prevent it. The combination is required. Sports restriction guidance is also incomplete.'
      },
      reflection:[
        {icon:'💔', q:'Richard Simon\'s question: Jordan\'s uncle died at 19 on a track. Jordan had three documented episodes before anyone ordered an exercise stress test. What should have happened at episode one — and what systemic change would ensure it does?'},
        {icon:'👨‍👩‍👧‍👦', q:'Jordan\'s sister is 11 and plays soccer. She has never fainted. Does she need evaluation? What does "asymptomatic carrier" mean for CPVT specifically — and what is her risk if untested?'},
        {icon:'🧬', q:'The RYR2 variant came from somewhere. Jordan\'s mother has never fainted. Can she still be a carrier? What does that tell you about the penetrance of CPVT — and how does it change your cascade testing strategy?'},
        {icon:'🏀', q:'Jordan asks if he can ever play basketball again. What is the honest answer — and how do you have that conversation with a 14-year-old who has been playing basketball since he was 6?'}
      ]
    }
  ]
};

// ── H6B  MAYA / VASOVAGAL (benign foil) ────────────────────────
window.CASES['H6B'] = {
  id:'H6B', family:6, isGenetic:false,
  title:'Chief Complaint 6B',
  chief:'"She fainted in the cafeteria — everyone thought she was having a seizure"',
  patient:'Maya, 15F &nbsp;&#183;&nbsp; 10th grade &nbsp;&#183;&nbsp; First episode &nbsp;&#183;&nbsp; Skipped lunch',
  tags:['Pediatric','Syncope','Benign'],
  accentColor:'#1a3a1a',
  headerGrad:'linear-gradient(135deg,#1a3a1a,#2e5e2e)',
  diagnosis:'Vasovagal syncope — neurally mediated, benign',
  diagnosisText:'Vasovagal syncope is the most common cause of syncope in adolescents, accounting for approximately 50% of cases. It is a benign, self-limiting condition caused by a reflex response to triggers such as prolonged standing, heat, pain, hunger, or emotional distress — leading to bradycardia and peripheral vasodilation, and transient cerebral hypoperfusion. The key teaching: vasovagal syncope is a diagnosis of exclusion. It is correct when the history, triggers, and clinical features are all consistent — and when cardiac causes have been considered and appropriately excluded.',
  genaText:'GENA recognizes that Maya\'s constellation — single episode, prolonged standing, hot environment, hunger, prodrome of nausea and lightheadedness, rapid recovery with no post-event confusion, normal ECG, no family history of sudden death — is consistent with vasovagal syncope. No further cardiac workup is indicated. This is the foil case: the skill is not just recognizing CPVT — it is correctly reassuring a family when the syncope is benign.',
  visits:[
    {
      label:'Visit 1', icon:'🏥',
      scenario:'<strong>Maya Chen, 15F</strong> is brought in after fainting in her school cafeteria. She had been standing in the lunch line for about 20 minutes in a warm, crowded room. She had skipped breakfast and was hungry. She felt nauseated and lightheaded for about 30 seconds before losing consciousness, and a bystander caught her as she fell. She was unconscious for approximately 10 seconds. She woke up immediately, knew where she was, and felt "embarrassed but fine." No confusion afterward.<br><br>This is her first episode. She has never fainted before. She does not exercise competitively — she\'s in drama club.<br><br><strong>Family history:</strong> No sudden deaths. No arrhythmias. Mother had "fainting spells" as a teenager, resolved on their own.<br><br><strong>Vitals:</strong> BP 112/68 sitting, 108/64 standing (minimal drop) &nbsp;|&nbsp; HR 78 &nbsp;|&nbsp; ECG: Normal, QTc 412ms.',
      questions:[
        {id:'H6B_q1', prompt:'Compare Maya\'s syncope to Jordan\'s (Case 6A). What features in Maya\'s presentation make vasovagal syncope the most likely diagnosis — and what features specifically distinguish her case from a cardiac cause?', placeholder:'Vasovagal: prolonged standing + heat + hunger + nausea prodrome + rapid recovery + no confusion + no exertional trigger + no family history of sudden death. Cardiac: exertional/emotional trigger, no prodrome, post-event confusion, family history of sudden death in young relatives...'},
        {id:'H6B_q2', prompt:'Maya\'s mother had fainting spells as a teenager. Does familial vasovagal syncope change your management? Is any additional workup indicated?', placeholder:'Familial vasovagal is reassuring — it suggests a constitutional predisposition to vagally mediated syncope, not a hereditary arrhythmia syndrome. No additional workup needed. The family history of MATERNAL fainting (not sudden death) is important to distinguish from the family history of Jordan\'s MATERNAL UNCLE dying suddenly at 19...'}
      ],
      keyFindings:['Classic vasovagal triggers: standing + heat + hunger','Prodrome of nausea and lightheadedness','Brief loss of consciousness with immediate full recovery — no post-event confusion','First episode — no prior cardiac history','Family history: maternal fainting (vasovagal) not sudden death'],
      feedback:{
        good:'Correct pattern recognition. The constellation is entirely consistent with vasovagal syncope. The skill here is appropriate reassurance — not every syncopal episode in an adolescent requires extensive cardiac workup.',
        partial:'You may be over-investigating. The history is classic vasovagal. Extensive cardiac workup in this clinical context creates anxiety, costs, and radiation exposure without diagnostic yield.',
        bad:'The normal ECG and the vasovagal trigger constellation together make cardiac arrhythmia extremely unlikely here. This clinical picture does not require an echocardiogram or exercise stress test.'
      }
    },
    {
      label:'Visit 2', icon:'🔬',
      scenario:'You\'ve appropriately evaluated Maya. Tilt-table testing was not performed — it is not required for classic vasovagal presentations with a clear trigger and full recovery. Review of her ECG confirms QTc 412ms, no Brugada pattern, no pre-excitation.<br><br>Maya asks: "Is this going to keep happening? Do I have a heart problem?"<br><br>Her mother asks: "Should she see a cardiologist?"<br><br>Her father, who googled "teenage fainting" at 2am, asks: "Could this be Long QT syndrome?"',
      questions:[
        {id:'H6B_q3', prompt:'Address the father\'s question specifically: Maya\'s QTc is 412ms. The Long QT threshold is generally QTc >460ms in females. How do you explain to a worried parent why Long QT has been excluded — without dismissing his concern?', placeholder:'QTc 412ms is clearly normal. Long QT threshold in females is 460ms. We have the right test (ECG), interpreted correctly, with a clearly normal result. The fainting episode had a classic vasovagal pattern with no features suggesting arrhythmia...'},
        {id:'H6B_q4', prompt:'Maya asks what she should do to prevent future episodes. What behavioral modifications are evidence-based for vasovagal syncope in adolescents?', placeholder:'Increased fluid and salt intake. Avoid prolonged standing in heat. Recognize the prodrome and sit or lie down immediately. Compression stockings if orthostatic component. Avoid triggers when possible. Prognosis excellent — most adolescent vasovagal syncope resolves spontaneously...'}
      ],
      keyFindings:['QTc 412ms — clearly normal, excludes Long QT','No structural abnormality on clinical exam','Classic vasovagal constellation confirmed','Behavioral modification is first-line treatment','Excellent prognosis — most adolescent vasovagal syncope self-resolves'],
      feedback:{
        good:'Excellent reassurance and appropriate counseling. You\'ve addressed the father\'s specific concern with data, provided actionable behavioral guidance, and avoided unnecessary referral.',
        partial:'Good clinical reasoning but the behavioral counseling could be more specific. Fluid intake targets (2-3L/day), salt recommendations, and prodrome recognition are the key teachable skills.',
        bad:'Referring Maya to cardiology without a specific indication creates unnecessary anxiety and cost. This is appropriate primary care management.'
      }
    },
    {
      label:'Decision', icon:'⚡',
      scenario:'Maya\'s workup is complete. Vasovagal syncope is confirmed clinically. Choose the management plan:',
      decisionPrompt:true,
      choices:[
        {text:'Behavioral modification counseling + return precautions. No medications. No cardiology referral. Follow-up in 3 months or sooner if recurrence with atypical features.', outcome:'good'},
        {text:'Refer to cardiology for tilt-table testing and Holter monitor before concluding this is benign.', outcome:'bad'},
        {text:'Prescribe fludrocortisone empirically for orthostatic component even without confirmed orthostatic hypotension.', outcome:'partial'}
      ],
      outcomes:{
        good:'<strong>Correct.</strong> Classic vasovagal syncope in an adolescent with a clear trigger and full recovery requires no additional workup and no medication. Behavioral modification is first-line. Return precautions are appropriate — if she has an episode without a clear vasovagal trigger, or an exertional episode, reconsider the diagnosis.',
        bad:'<strong>Over-investigation.</strong> Tilt-table testing has limited additional diagnostic value when the clinical picture is already classic vasovagal. Holter monitoring captures arrhythmias — which this presentation does not suggest. Unnecessary referral creates patient anxiety and cost without benefit.',
        partial:'<strong>Medication not indicated.</strong> Fludrocortisone is used in refractory vasovagal syncope with a confirmed orthostatic component — not first-line for a first episode with no orthostatic drop on vitals. Behavioral modification first.'
      },
      reflection:[
        {icon:'🎭', q:'The foil case teaches as much as the index case. What specific features in Maya\'s history let you confidently reassure her — and what single feature, if present, would have changed your entire management approach?'},
        {icon:'📊', q:'Over-investigation of benign syncope is costly and anxiety-provoking. What is the evidence-based threshold for ordering an echocardiogram in an adolescent with syncope?'},
        {icon:'👨‍👧', q:'Maya\'s father googled at 2am and is scared. He is not wrong to be scared — exertional syncope in adolescents can be CPVT or HCM. How do you validate his concern while explaining why this specific presentation is different?'}
      ]
    }
  ]
};

// ── H6C  ETHAN / HCM (structural — murmur missed) ──────────────
window.CASES['H6C'] = {
  id:'H6C', family:6, isGenetic:true,
  title:'Chief Complaint 6C',
  chief:'"He gets chest pain and dizzy when he exercises — we thought it was growing pains"',
  patient:'Ethan, 13M &nbsp;&#183;&nbsp; 7th grade &nbsp;&#183;&nbsp; Football player &nbsp;&#183;&nbsp; Father had "heart surgery" at 38',
  tags:['Pediatric','Syncope','Genetic','Cardiac','HCM'],
  accentColor:'#2e1a0a',
  headerGrad:'linear-gradient(135deg,#2e1a0a,#5c3415)',
  diagnosis:'Hypertrophic Cardiomyopathy (HCM) — MYBPC3 pathogenic variant',
  diagnosisText:'Hypertrophic cardiomyopathy is the most common inherited cardiac condition and the most common cause of sudden cardiac death in young athletes in the United States. It is caused by pathogenic variants in sarcomere genes — most commonly MYBPC3 (myosin-binding protein C) or MYH7 (beta-myosin heavy chain). The hallmark is asymmetric left ventricular hypertrophy causing dynamic outflow obstruction that worsens with exertion. The murmur is dynamic — louder with Valsalva and standing (decreased preload) and quieter with squatting (increased preload). This distinguishing feature of the murmur is not taught well in medical schools and is frequently missed.',
  genaText:'GENA Screen flags: exertional chest pain + exertional near-syncope in an adolescent athlete + dynamic systolic murmur (louder with Valsalva) + father who had "heart surgery" at 38 = HCM until proven otherwise. The family history is the most important single data point. "Heart surgery at 38" in a first-degree relative of an adolescent with exertional symptoms is septal myectomy or alcohol septal ablation for HCM — until proven otherwise.',
  visits:[
    {
      label:'Visit 1', icon:'🏥',
      scenario:'<strong>Ethan Brooks, 13M</strong> presents for his annual sports physical before football tryouts. His mother mentions that over the past season he\'s had three episodes of chest tightness and dizziness during practice — always during the most intense drills. He\'s never lost consciousness. He\'s never complained because he didn\'t want to miss the team.<br><br>His father had "some heart surgery" at age 38 — his mother isn\'t sure of the details, just that it involved "the heart muscle being too thick." He recovered well and plays golf.<br><br><strong>Exam:</strong> Well-developed athletic male. No dysmorphic features. <br>BP 124/76 &nbsp;|&nbsp; HR 68 regular &nbsp;|&nbsp; Lungs clear<br>Cardiac: Regular rate and rhythm. <strong>Grade 2/6 systolic murmur, best heard at left sternal border.</strong> Murmur changes with position — you ask him to squat and the murmur becomes quieter. You ask him to stand and perform Valsalva — the murmur becomes louder and harsher.<br><br>ECG: LVH voltage criteria met. Diffuse T-wave inversions in lateral leads.',
      questions:[
        {id:'H6C_q1', prompt:'The murmur becomes louder with Valsalva and standing, and quieter with squatting. What does this dynamic behavior tell you about the murmur\'s mechanism — and what diagnosis does this pattern most strongly suggest?', placeholder:'Dynamic murmur louder with decreased preload (Valsalva, standing) and quieter with increased preload (squatting) = LVOT obstruction that worsens when the ventricle is less full. This is the hallmark of HCM with dynamic outflow obstruction. Fixed murmurs (AS, VSD) do not change this way...'},
        {id:'H6C_q2', prompt:'Ethan\'s father had surgery at 38 for "heart muscle too thick." What procedure does this almost certainly describe — and what does it tell you about the genetic diagnosis you should be considering for Ethan right now?', placeholder:'Septal myectomy or alcohol septal ablation — both are treatments for obstructive HCM. "Heart muscle too thick" is essentially a lay description of HCM. HCM is autosomal dominant — 50% of first-degree relatives are affected. Ethan has a symptomatic father with HCM and a dynamic murmur himself. This is HCM until proven otherwise...'}
      ],
      keyFindings:['Dynamic murmur: louder with Valsalva/standing, softer with squatting — LVOT obstruction','ECG: LVH voltage + lateral T-wave inversions — not normal in a healthy adolescent','Father: "heart surgery for thick heart muscle" at 38 = septal myectomy for HCM','Exertional chest pain and near-syncope in an athlete — not growing pains','Autosomal dominant: 50% first-degree relative risk'],
      feedback:{
        good:'Excellent physical examination and family history interpretation. The dynamic murmur is the physical finding most commonly missed in HCM — you caught it. Combined with the family history, this is HCM until the echocardiogram proves otherwise.',
        partial:'You identified the murmur but may not have fully interpreted the dynamic behavior. The key teaching: a murmur that changes with Valsalva and position is not a flow murmur — it is LVOT obstruction.',
        bad:'This child cannot be cleared for football contact sports today. A dynamic systolic murmur with LVH on ECG and a family history of HCM requires echocardiography before any athletic participation.'
      }
    },
    {
      label:'Visit 2', icon:'🔬',
      scenario:'Ethan\'s echocardiogram results:<br><br><strong>Asymmetric septal hypertrophy: IVS 18mm</strong> (normal &lt;12mm in children). Posterior wall 10mm — confirming asymmetry. Systolic anterior motion (SAM) of the mitral valve leaflet. LVOT gradient at rest: 38 mmHg. With Valsalva: 72 mmHg (obstructive HCM threshold: &gt;30 mmHg at rest or &gt;50 mmHg with provocation).<br><br>Genetic testing: <strong>MYBPC3 c.3737+1G>A — Pathogenic, heterozygous.</strong><br><br>His father\'s genetic test confirms the same variant. His 10-year-old sister has not been tested.<br><br>Ethan asks: "Can I still play football?"',
      questions:[
        {id:'H6C_q3', prompt:'IVS 18mm with SAM and a provocable LVOT gradient of 72 mmHg. MYBPC3 pathogenic variant confirmed. Ethan wants to play football. What is the current guideline recommendation for competitive athletics in adolescents with obstructive HCM — and how has this guidance evolved in recent years?', placeholder:'2015 AHA/ACC guidelines: disqualification from most competitive sports. 2020 HCM guidelines: more individualized approach — shared decision-making, ICD implantation does not automatically clear for sport, but high-risk features (max gradient >50mmHg, non-sustained VT on Holter, family SCD history) favor restriction. Football is a class IA sport — not recommended for obstructive HCM...'},
        {id:'H6C_q4', prompt:'The 10-year-old sister has not been tested. She is currently in a recreational gymnastics program. What is the urgency of her evaluation — and what test should be performed first in a 10-year-old who carries a 50% risk of inheriting MYBPC3?', placeholder:'Echocardiography first (non-invasive, no radiation, identifies structural disease before symptoms). Genetic testing if echo is abnormal or family wishes. Urgency: she should not participate in competitive gymnastics until evaluated. MYBPC3 HCM can manifest in childhood — waiting is not low-risk...'}
      ],
      keyFindings:['IVS 18mm — severe asymmetric septal hypertrophy','Provocable LVOT gradient 72 mmHg — obstructive HCM confirmed','MYBPC3 pathogenic variant — autosomal dominant confirmed','Sister: 50% carrier risk, currently in gymnastics, unevaluated','Football: Class IA sport — not recommended for obstructive HCM'],
      feedback:{
        good:'Excellent management. The sister\'s unevaluated status is the most urgent action item — she is in a physical activity program with a 50% chance of carrying the same variant as her father and brother.',
        partial:'Good clinical management but the sister\'s urgency may have been underweighted. She needs evaluation before her next gymnastics session — not at the next convenient appointment.',
        bad:'Clearing Ethan for football with this echo and gradient would be incorrect. The guidelines are clear on obstructive HCM and class IA sports.'
      }
    },
    {
      label:'Decision', icon:'⚡',
      scenario:'Ethan and his parents sit in your office. The echocardiogram is on the screen. Ethan has been playing football since age 8. He is crying. His mother is asking about medications. His father — who had a myectomy at 38 — is trying to explain what the surgery felt like. Choose the management plan:',
      decisionPrompt:true,
      choices:[
        {text:'Beta blocker or verapamil for symptom management + restriction from football and high-intensity contact sports + referral to HCM specialist center + ICD evaluation + sister evaluated before next gymnastics session.', outcome:'good'},
        {text:'ICD implantation now + cleared for non-contact sports + beta blocker + sister can wait until summer for evaluation.', outcome:'partial'},
        {text:'No medications yet — reassure family that many HCM patients do fine without treatment. He can continue football with a defibrillator vest. Recheck echo in 6 months.', outcome:'bad'}
      ],
      outcomes:{
        good:'<strong>Correct comprehensive management.</strong> Medical therapy addresses symptoms and reduces obstruction. Sports restriction is indicated for obstructive HCM with this gradient. HCM specialist center referral optimizes the complex management decisions including ICD threshold and long-term monitoring. The sister\'s urgency is correctly prioritized — she cannot wait.',
        partial:'<strong>Partially correct but sports guidance is incomplete.</strong> ICD does not automatically permit return to competitive sport in obstructive HCM — this is a common misconception. The 2020 guidelines support shared decision-making but high-intensity contact sports with this gradient require specialist input, not a blanket clearance. Sister urgency is correctly identified.',
        bad:'<strong>Incorrect.</strong> Obstructive HCM with IVS 18mm, gradient 72 mmHg provocable, and a family history of HCM does not warrant a "watchful waiting" approach. Defibrillator vests are not a substitute for appropriate restriction — they treat arrest, they don\'t prevent the arrhythmia from occurring.'
      },
      reflection:[
        {icon:'💔', q:'Richard Simon\'s question: How many children with HCM are cleared for sports every year because the physician didn\'t perform the Valsalva maneuver during the physical? What would systematic dynamic auscultation at every sports physical change?'},
        {icon:'🏈', q:'Ethan has played football since he was 8. He is 13 and crying. His father had surgery and plays golf. How do you counsel a child about permanently leaving the sport that defines his identity — and what resources exist for athletes with HCM?'},
        {icon:'🧬', q:'MYBPC3 is autosomal dominant with variable penetrance — some carriers never develop significant hypertrophy. Does this change how you counsel the sister before her genetic results return?'},
        {icon:'📋', q:'The preparticipation sports physical is the only systematic cardiovascular screen most American children receive. What is the evidence for and against ECG screening in addition to history and physical — and what would GENA\'s passive screening layer add to this process?'}
      ]
    }
  ]
};

// ════════════════════════════════════════════════════════════
// MODULES — Family 6
// ════════════════════════════════════════════════════════════

window.MODULES['H6A'] = {
  tabs:['Pathophysiology','Guidelines','Framework','Evidence','EMR Lens'],
  panels:[
    {title:'CPVT — Pathophysiology',content:'<div class="module-section-title">RYR2 mutation → Ca²⁺ leak → Triggered VT during adrenergic stimulation</div><p class="module-body-text">CPVT is caused by gain-of-function mutations in <em>RYR2</em> (ryanodine receptor 2, chromosome 1q43) in ~60% of cases, and loss-of-function mutations in <em>CASQ2</em> (calsequestrin 2) in ~5%. RYR2 is the principal calcium release channel in cardiomyocytes. During adrenergic stimulation (exercise, emotional stress), PKA phosphorylates RYR2 — mutant channels release calcium abnormally from the sarcoplasmic reticulum (SR), causing delayed afterdepolarizations (DADs) and triggered ventricular ectopy.</p><p class="module-body-text"><strong>Why bidirectional VT:</strong> Alternating QRS axis reflects triggered activity alternating between different ventricular foci — the arrhythmia is pathognomonic for CPVT when seen in the context of exercise stress testing.</p><p class="module-body-text"><strong>Why normal resting ECG:</strong> At rest, adrenergic tone is low. RYR2 channels function normally without sympathetic stimulation. The structural heart is completely normal — no LVH, no outflow obstruction, no accessory pathways. The arrhythmia mechanism is purely functional, triggered by catecholamines.</p><p class="module-body-text"><strong>Why the uncle died on the track:</strong> Sustained bidirectional VT degenerates to ventricular fibrillation without intervention. In 1995, exercise stress testing for an asymptomatic 19-year-old after a sibling\'s near-syncope was not standard. The cascade testing that would have saved him did not happen because Jordan\'s family did not know the diagnosis existed.</p><div class="module-refs"><div class="module-refs-label">References</div><div class="module-ref-item">Priori SG et al. Clinical and molecular characterization of patients with catecholaminergic polymorphic ventricular tachycardia. Circulation. 2002;106(1):69-74.</div><div class="module-ref-item">Napolitano C et al. Genetic testing in the long QT syndrome. JAMA. 2005;294(23):2975-80.</div></div>'},
    {title:'CPVT — Guidelines',content:'<div class="module-section-title">ESC/AHA Guidelines — CPVT Diagnosis and Management</div><table class="module-table"><tr><th>Recommendation</th><th>Class</th><th>Level</th></tr><tr><td>Exercise stress test for all patients with suspected CPVT (exertional syncope, family history of CPVT or exertional SCD)</td><td>I</td><td>C</td></tr><tr><td>Beta blockers (nadolol preferred) for all symptomatic CPVT patients</td><td>I</td><td>C</td></tr><tr><td>ICD implantation for CPVT patients with documented VT/VF or cardiac arrest</td><td>I</td><td>C</td></tr><tr><td>Restriction from competitive sports for CPVT patients</td><td>I</td><td>C</td></tr><tr><td>RYR2/CASQ2 genetic testing for index case and cascade family testing</td><td>I</td><td>C</td></tr><tr><td>Flecainide addition to beta blocker for breakthrough arrhythmia</td><td>IIa</td><td>C</td></tr></table><p class="module-body-text"><strong>Key diagnostic threshold:</strong> Bidirectional VT during exercise stress testing is pathognomonic for CPVT. Polymorphic VT at HR >100-130 bpm during exercise is highly suggestive. A normal resting ECG is expected and does not exclude the diagnosis.</p>'},
    {title:'CPVT — Clinical Framework',content:'<div class="module-section-title">The Constellation GENA Recognizes</div><table class="module-table"><tr><th>Feature</th><th>Jordan\'s Case</th><th>Teaching Point</th></tr><tr><td>Trigger pattern</td><td>Exercise + emotional stress</td><td>Adrenergic = RYR2 channel destabilization</td></tr><tr><td>Resting ECG</td><td>Normal every time</td><td>Normal ECG is the hallmark — not the all-clear</td></tr><tr><td>Echo</td><td>Normal</td><td>Structurally normal heart — functional arrhythmia</td></tr><tr><td>Episode frequency</td><td>3 in one school year</td><td>Progressive — each episode is a near-death event</td></tr><tr><td>Family history</td><td>Uncle: SCD age 19, track meet</td><td>The single most important diagnostic data point</td></tr><tr><td>Age of onset</td><td>14 — symptoms for 2 years</td><td>Typical onset: first or second decade</td></tr></table><p class="module-body-text"><strong>The critical teaching:</strong> A normal resting ECG in a child with exertional syncope is not a reason to stop the workup. It is a reason to proceed to exercise stress testing. The most dangerous causes of exertional syncope in children (CPVT, HCM, Long QT) all require specific testing beyond the resting ECG.</p>'},
    {title:'CPVT — Evidence',content:'<div class="module-section-title">Evidence Base — CPVT Management</div><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> Exercise stress testing is the diagnostic test of choice — bidirectional VT is pathognomonic.</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> Beta blockers reduce arrhythmia burden and are first-line treatment. Nadolol is preferred over metoprolol based on registry data.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> ICD implantation for documented VT — provides safety net for breakthrough events on medical therapy. Does not replace beta blocker.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Flecainide added to beta blocker for refractory breakthrough arrhythmia — reduces inducible VT in registry data.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Competitive sports restriction — universal recommendation regardless of ICD status.</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> Cascade genetic testing of first-degree relatives — RYR2 testing followed by exercise stress testing in variant-positive relatives.</p><div class="module-refs"><div class="module-refs-label">Key References</div><div class="module-ref-item">Priori SG et al. HRS/EHRA Expert Consensus Statement on the Diagnosis and Management of Patients with Inherited Primary Arrhythmia Syndromes. Heart Rhythm. 2013;10(12):1932-63.</div><div class="module-ref-item">Roston TM et al. Catecholaminergic polymorphic ventricular tachycardia in children: analysis of therapeutic strategies. JACC. 2018;72(17):2029-2037.</div></div>'},
    {title:'CPVT — EMR Lens',content:'<div class="module-section-title">What the EMR Contained — And What GENA Would Have Flagged</div><p class="module-emr-note">Jordan had three visits to the healthcare system before his diagnosis. Every piece of data needed to trigger GENA Screen was present in the EHR after visit one.</p><table class="module-table"><tr><th>Data Point</th><th>In EHR?</th><th>Acted On?</th></tr><tr><td>Syncope during timed mile run — "vasovagal" documented</td><td>✓</td><td>Incorrectly reassured</td></tr><tr><td>Resting ECG: normal — filed in chart</td><td>✓</td><td>Used to close the workup</td></tr><tr><td>Family history field: "grandfather died suddenly"</td><td>Partially</td><td>Not probed further</td></tr><tr><td>Maternal uncle: sudden death age 19, exercise-related</td><td>✗</td><td>Never asked, never documented</td></tr><tr><td>Second episode: emotional trigger (phone call)</td><td>✗</td><td>Patient did not volunteer; not asked</td></tr><tr><td>Third episode: game-time, fourth quarter</td><td>✓</td><td>Still labeled vasovagal</td></tr></table><p class="module-body-text"><strong>GENA Screen passive logic:</strong> Adolescent + two or more syncopal episodes + any exertional trigger → flag for review. If family history of sudden death in relative under 40 also present → urgent CPVT/Long QT/HCM workup indicated. The constellation was complete. The tool existed. It was never triggered because no physician recognized the pattern that should have triggered it.</p>'}
  ]
};

window.MODULES['H6C'] = {
  tabs:['Pathophysiology','Guidelines','Framework','Evidence','EMR Lens'],
  panels:[
    {title:'HCM — Pathophysiology',content:'<div class="module-section-title">Sarcomere mutation → Asymmetric LVH → Dynamic LVOT obstruction → Sudden death risk</div><p class="module-body-text">Hypertrophic cardiomyopathy is caused by pathogenic variants in sarcomere protein genes — most commonly <em>MYBPC3</em> (myosin-binding protein C3, ~40% of cases) and <em>MYH7</em> (beta-myosin heavy chain, ~20%). These mutations disrupt normal sarcomere function, leading to myocyte hypertrophy, disarray, and fibrosis — predominantly affecting the interventricular septum.</p><p class="module-body-text"><strong>The dynamic obstruction:</strong> Asymmetric septal hypertrophy creates a narrowed LVOT. During systole, the high-velocity jet through the narrow LVOT creates a Venturi effect, drawing the anterior mitral valve leaflet into the outflow tract (systolic anterior motion, SAM) — worsening obstruction dynamically. Anything that decreases LV volume (dehydration, standing, Valsalva, tachycardia) worsens the obstruction. Anything that increases LV volume (squatting, lying down, phenylephrine) relieves it.</p><p class="module-body-text"><strong>Why the murmur changes:</strong> This is the most important physical examination finding in HCM. A murmur that becomes louder with Valsalva or standing (decreased preload → smaller LV → worse obstruction) and quieter with squatting (increased preload → larger LV → less obstruction) is the hallmark of dynamic LVOT obstruction — and is not taught reliably in medical schools.</p><div class="module-refs"><div class="module-refs-label">References</div><div class="module-ref-item">Maron BJ et al. Hypertrophic cardiomyopathy: a systematic review. JAMA. 2002;287(10):1308-20.</div></div>'},
    {title:'HCM — Guidelines',content:'<div class="module-section-title">2020 AHA/ACC HCM Guideline — Key Recommendations</div><table class="module-table"><tr><th>Recommendation</th><th>Class</th><th>Level</th></tr><tr><td>Echocardiography for all patients with suspected HCM (family history, dynamic murmur, LVH on ECG)</td><td>I</td><td>B</td></tr><tr><td>Genetic testing (sarcomere gene panel) for index case</td><td>I</td><td>B</td></tr><tr><td>Cascade clinical screening (echo ± genetic testing) for first-degree relatives</td><td>I</td><td>B</td></tr><tr><td>Beta blockers or verapamil for symptomatic obstructive HCM</td><td>I</td><td>B</td></tr><tr><td>Septal reduction therapy (myectomy or ASA) for severe refractory obstructive HCM</td><td>IIa</td><td>B</td></tr><tr><td>Shared decision-making for sports participation — individualized by risk profile</td><td>IIa</td><td>C</td></tr><tr><td>ICD implantation for high-risk features (family SCD, max wall thickness >30mm, NSVT, unexplained syncope)</td><td>IIa</td><td>B</td></tr></table>'},
    {title:'HCM — Clinical Framework',content:'<div class="module-section-title">Dynamic Auscultation — The Skill That Changes Everything</div><table class="module-table"><tr><th>Maneuver</th><th>Effect on LV Volume</th><th>Effect on HCM Murmur</th><th>Effect on AS Murmur</th></tr><tr><td>Valsalva (strain phase)</td><td>Decreases</td><td>Louder ↑</td><td>Softer ↓</td></tr><tr><td>Standing</td><td>Decreases</td><td>Louder ↑</td><td>Softer ↓</td></tr><tr><td>Squatting</td><td>Increases</td><td>Softer ↓</td><td>Louder ↑</td></tr><tr><td>Handgrip</td><td>Increases afterload</td><td>Softer ↓</td><td>Louder ↑</td></tr></table><p class="module-body-text"><strong>The sports physical failure point:</strong> Most preparticipation physicals do not include dynamic auscultation. A murmur auscultated only in the supine position will appear as a soft, non-specific flow murmur — missing the dynamic behavior that defines LVOT obstruction. Every sports physical should include auscultation in the standing position and after Valsalva.</p><p class="module-body-text"><strong>The family history failure point:</strong> "Father had heart surgery" was in the intake form. "Heart surgery for thick heart muscle" is a lay description of septal myectomy. The genetic diagnosis was sitting in the family history, waiting to be asked about.</p>'},
    {title:'HCM — Evidence',content:'<div class="module-section-title">Evidence Base — HCM in Young Athletes</div><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> HCM is the most common cause of sudden cardiac death in young athletes in the United States — accounting for approximately 36% of cases in athletes under 35.</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> Echocardiography is the diagnostic standard — IVS ≥15mm (or ≥13mm with family history or genetic confirmation) is diagnostic.</p><p class="module-body-text"><span class="ev-grade ev-a">Grade A</span> MYBPC3 and MYH7 account for ~60% of genotype-positive HCM. Autosomal dominant — 50% of first-degree relatives at risk.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> The 2020 AHA/ACC guideline shift: individualized sports decision-making replacing blanket disqualification. High-intensity contact sports (Class IA) with obstructive physiology and provocable gradient >50 mmHg remain high-risk.</p><p class="module-body-text"><span class="ev-grade ev-b">Grade B</span> Cascade screening of first-degree relatives with echocardiography reduces SCD risk in affected family members. Pediatric screening should begin at diagnosis of index case regardless of symptoms.</p>'},
    {title:'HCM — EMR Lens',content:'<div class="module-section-title">The Preparticipation Physical — A Missed Opportunity</div><p class="module-emr-note">Ethan had annual sports physicals since age 8. The family history field contained "father: heart surgery" every year. Dynamic auscultation was not performed. GENA\'s passive screening layer would have flagged this chart at age 10.</p><table class="module-table"><tr><th>Opportunity</th><th>Documented?</th><th>Action Taken?</th></tr><tr><td>Family history: "father had heart surgery"</td><td>✓ Every year</td><td>Not probed</td></tr><tr><td>Murmur documented age 10 — "innocent flow murmur"</td><td>✓</td><td>Dynamic auscultation not performed</td></tr><tr><td>Exertional chest pain reported age 12</td><td>✓</td><td>"Musculoskeletal — growing pains"</td></tr><tr><td>ECG: never ordered at sports physical</td><td>✗</td><td>Not standard in US preparticipation screening</td></tr><tr><td>Father\'s diagnosis: HCM, septal myectomy at 38</td><td>✗</td><td>Never elicited — "heart surgery" not followed up</td></tr></table><p class="module-body-text"><strong>GENA passive screening logic:</strong> Child + systolic murmur documented + family history field containing "heart surgery" in first-degree relative → flag for clarification of family history. If clarification reveals HCM, myectomy, or sudden cardiac death → echo indicated regardless of current symptoms.</p>'}
  ]
};
