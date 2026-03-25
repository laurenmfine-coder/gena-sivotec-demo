# GENA × SIVOTEC — Clinical Demo Platform

A clinical reasoning and precision phenotyping demo suite for the GENA/SIVOTEC pitch. All files are static HTML/JS — no build step, no server required. Drop the folder into any web host or open locally.

---

## File Map

### GENA × SIVOTEC Core Demo

| File | Purpose | Open directly? |
|------|---------|---------------|
| `index.html` | Landing page — links to all modules | ✅ Yes |
| `cases.html` | 20-case guided clinical reasoning suite | ✅ Yes (needs siblings) |
| `case-data.js` | All 20 case content (Chief Complaints 1–4) | — required by cases.html |
| `emr-simulator.html` | AI-powered EMR with 4 patient datasets | ✅ Yes (needs sibling) |
| `emr-case-data.js` | EMR patient data | — required by emr-simulator.html |
| `pedigree-engine.js` | SVG pedigree renderer + floating drawer + debrief tab | — required by cases.html |
| `pedigree-data.js` | Pedigree data for all 20 cases | — required by cases.html |

### GENA Asthma Precision Phenotyping

| File | Purpose | Open directly? |
|------|---------|---------------|
| `asthma-gena-v2.html` | Standalone asthma phenotyping pitch site | ✅ Yes — fully self-contained |

---

## Case Architecture

**Chief Complaint 1 — Fatigue**
Sofia (IDA), Marcus (Fabry★), Priya (Hypothyroidism), James (OSA), Raymond (Myeloma★)

**Chief Complaint 2 — Recurrent Infections**
Liam (XLA★), Noah (Normal), Elena (CVID★), Carlos (MRSA), Derek (CF★)

**Chief Complaint 3 — Developmental Concerns**
Aiden (Down Syndrome★), Lily (Rett★), Noah P. (ASD+16p11.2★), Emma (Angelman★), Tyler (ADHD)

**Chief Complaint 4 — Joint Pain**
Maria (RA), Kevin (AS★), Sandra (PsA), Harold (OA), George (Gout)

★ = genetic/rare disease case with full pedigree and GENA cascade testing recommendations

---

## Pedigree System

Every case has a pedigree accessible via the **👤 Family** floating button during any visit. After case completion, the debrief shows:
- Full annotated SVG pedigree (clickable members with clinical stories)
- GENA cascade testing recommendations (name, test, reason, priority: urgent/high/routine)
- Inheritance pattern explainer

---

## Asthma Site Sections

1. **The Problem** — Severity breakdown, GINA Step framework with GENA overlay
2. **What the Literature Says** — Evidence graded A/B/C by severity; honest gaps acknowledged
3. **The GENA Approach** — Step 1–5 current vs. GENA comparison
4. **Live Phenotyping Engine** — Interactive biomarker sliders + EGPA/A1AT/VCD/T2-low alert logic
5. **Clinical Cases** — Priya (AERD), Diane (EGPA), Marcus (A1AT), Rachel (T2-low overtreatment)
6. **Research Foundation** — ISAR algorithm, AHRQ FeNO, SARP/U-BIOPRED, ACR/EULAR EGPA criteria
7. **The Pitch** — Phase 1–4 timeline, closing statement

---

## Hosting

**GitHub Pages:** Push to a repo, enable Pages on main branch. All files load from the same directory — no path configuration needed.

**Local:** Open `index.html` directly in any modern browser. The cases.html pedigree system and asthma-gena-v2.html work fully offline (fonts load from Google CDN if connected).

---

*For educational and demonstration purposes. Clinical decisions require physician judgment. Not FDA-cleared as a medical device. Evidence grades reflect published literature as of early 2025.*
