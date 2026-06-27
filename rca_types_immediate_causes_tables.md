# Comprehensive Guide: RCA Methods, Types & Immediate Causes in Accident Investigations

## Table of Contents
1. [Definitions: Immediate, Underlying & Root Causes](#1-definitions)
2. [RCA Methods Comparison](#2-rca-methods-comparison)
3. [Immediate Causes: Unsafe Acts (Full Checklist)](#3-unsafe-acts)
4. [Immediate Causes: Unsafe Conditions (Full Checklist)](#4-unsafe-conditions)
5. [ICAM Analysis Framework & Codes](#5-icam-framework)
6. [TapRooT Root Cause Tree Categories](#6-taproot-categories)
7. [Contributory Factors Classification Models](#7-classification-models)
8. [Crane-Specific Causative Factors](#8-crane-specific-factors)

---

## 1. Definitions: Immediate, Underlying & Root Causes

### HSE/NEBOSH Standard Definitions (HSG245)

| Level | Definition | Example (Crane Incident) |
|-------|-----------|-------------------------|
| **Immediate Cause** | The agent of injury or ill health (the blade, the substance, the falling load, etc.) | Worker struck by falling crane load |
| **Underlying Cause** | Unsafe acts and unsafe conditions (the guard removed, the brake worn out, the exclusion zone not enforced, etc.) | Wire rope with 75% strength reduction not detected; operator standing under suspended load |
| **Root Cause** | The failure from which all other failings grow, often remote in time and space from the adverse event | No electromagnetic rope testing program; production targets override safety maintenance schedules; inadequate management commitment to crane safety |

> **Source:** UK HSE HSG245 - Investigating Accidents and Incidents [^79^] [^68^]

### NASA Three Levels of Causation

| Level | Term Used | Action Type | Scope |
|-------|----------|-------------|-------|
| **Direct Cause** | Direct Cause | Remedial Action | Addresses the specific nonconformance |
| **Root Cause** | Root Cause | Corrective Action | Prevents nonconformance from recurring on the program and/or other programs |
| **Potential Failure** | Potential Failure | Preventive Action | Prevents nonconformance from initially occurring |

> **Source:** NASA Root Cause Investigation Best Practices Guide [^73^]

---

## 2. RCA Methods Comparison

### 2.1 Comparison of Major RCA Methods

| Method | Type | Structure | Best For | Strengths | Limitations |
|--------|------|-----------|----------|-----------|-------------|
| **5 Whys** | Simple linear | Sequential "Why?" questions | Simple incidents, quick analysis | Easy to learn, fast, no training needed | Linear thinking misses multiple causes, stops at symptoms, investigator bias |
| **Fishbone (Ishikawa)** | Visual/brainstorming | Categories as "bones" with causes | Team brainstorming, visual overview | Visual, inclusive, covers multiple categories | Doesn't establish causal relationships, can become cluttered |
| **Fault Tree Analysis (FTA)** | Top-down logic | Boolean logic gates (AND/OR) | Complex technical failures, equipment systems | Rigorous, handles multi-cause scenarios, can be quantified | Complex, requires specialist knowledge, less effective for human factors |
| **ICAM** | Systemic (4 layers) | Absent Defences / Individual Actions / Task Conditions / Organisational Factors | Serious incidents, fatalities, systemic failures | Addresses organisational root causes, based on Swiss Cheese Model, widely used in mining/heavy industry | Requires trained facilitator, more time-intensive |
| **TapRooT** | Proprietary tree | Root Cause Tree with 7 categories + Human Performance Troubleshooting Guide | High-consistency environments, high-volume investigations | Consistent results, built-in corrective action guidance, 15-question expert system | Proprietary (licensing cost), can feel rigid |
| **Cause Mapping** | Structured tree | "Why" questions with evidence mapped | Complex incidents requiring evidence-based analysis | Evidence-based, visual, scales from simple to complex | Requires training, time-intensive |
| **HFACS** | Aviation-focused | 4 levels: Unsafe Acts / Preconditions / Unsafe Supervision / Organisational Influences | Aviation, transportation, human-factor-dominant incidents | Excellent for human factors, standardized classification | Focus on errors/failures, lacks quantitative measures |
| **AcciMap** | Socio-technical | Multi-level actor map (government to frontline) | Systemic policy-level failures | Broad system view, policy implications | Focus on errors/failures/deficiencies, complex to construct |
| **STAMP-CAST** | Systems theoretic | Control structure analysis (hierarchical) | Complex socio-technical systems (space, nuclear, medical) | Safety as control issue, considers emergent properties | Steep learning curve, complex outputs |
| **FRAM** | Functional resonance | System functions with 6 aspects (input/output/precondition/resource/time/control) | Understanding system variability and interactions | Handles complexity, non-linear interactions | Highly complex outputs, difficult to interpret |
| **Event Tree Analysis** | Consequence mapping | Forward-branching from initiating event | Consequence assessment, emergency planning | Quantitative, shows all possible outcomes | Focuses on consequences not causes |
| **MORT (Management Oversight & Risk Tree)** | Management-focused | Top-down tree focusing on management controls | Management system failures | Strong management focus, comprehensive | Complex, dated, rarely used today |

> **Sources:** NASA RCA Best Practices Guide [^73^], Systematic Review (PMC) [^80^], RiskSight [^75^]

### 2.2 RCA Rigor Based on Significance of Anomaly (NASA)

| Significance Level | Recommended RCA Method | Depth of Investigation |
|-------------------|----------------------|----------------------|
| **Minor / Low Risk** | 5 Whys or Fishbone | 1-2 hours, single investigator |
| **Moderate / Medium Risk** | ICAM or Cause Mapping | Half-day, small team (2-3) |
| **Major / High Risk** | TapRooT or ICAM | 1-3 days, dedicated team (3-5) |
| **Critical / Fatality or Catastrophic** | ICAM + FTA + Independent Review | 1-4 weeks, multi-disciplinary team with external expertise |

> **Source:** NASA Root Cause Investigation Best Practices Guide [^73^]

---

## 3. Immediate Causes: Unsafe Acts (Full Checklist)

### 3.1 Unsafe Acts - Complete Classification

The following table lists all categories of unsafe acts (substandard practices) that may serve as immediate causes or contributing factors in accident investigations, particularly in crane operations and heavy industrial lifting.

| Code | Unsafe Act Category | Description | Crane-Specific Examples |
|------|-------------------|-------------|------------------------|
| UA-01 | **Erroneous unloading/loading** | Improper technique during material handling | Improper ladle hook engagement; uneven load distribution |
| UA-02 | **Horseplay/careless act** | Frivolous or inattentive behavior in hazardous area | Playing near suspended loads; distracting crane operator |
| UA-03 | **Improper lifting** | Incorrect manual or mechanical lifting technique | Standing under suspended load; not using tag lines |
| UA-04 | **Improper placement** | Incorrect positioning of materials, equipment, or persons | Worker in exclusion zone during ladle transfer |
| UA-05 | **Improper use of equipment** | Operating equipment outside design intent or training | Using crane to drag/pull loads; exceeding rated capacity |
| UA-06 | **Improper work position** | Positioning body in line of fire or danger zone | Standing between suspended load and fixed structure |
| UA-07 | **Inadequate communication** | Failure to effectively communicate hazards or intentions | Radio failure not reported; unclear hand signals |
| UA-08 | **Inadequate implementation of protective measures** | Not applying required safety controls | Not installing barricades before crane operation |
| UA-09 | **Inadequate use of PPE** | Failure to wear or improper wearing of required PPE | No hard hat under crane; no high-vis vest |
| UA-10 | **Inattentive / Indiscreet / Lack of concentration** | Loss of situational awareness | Operator distraction by phone; spotter looking away |
| UA-11 | **Insufficient control of equipment** | Failure to maintain proper control of machinery | Excessive trolley speed; abrupt ladle movements |
| UA-12 | **Machinery incorrectly used** | Using wrong equipment for the task | Using auxiliary hook for primary ladle lift |
| UA-13 | **Neglected to tidy up** | Poor housekeeping leading to hazards | Leaving tools on crane walkway; oil spills not cleaned |
| UA-14 | **Operating equipment without authority** | Unauthorized use of machinery | Uncertified operator running ladle crane |
| UA-15 | **Removal of safety devices / Put safety system out of function** | Bypassing or disabling guards, interlocks, or alarms | Disconnecting overload limiter; defeating limit switch |
| UA-16 | **Signs or barricading not respected** | Ignoring posted warnings or barriers | Entering exclusion zone with crane in operation |
| UA-17 | **Under influence of alcohol/drug** | Working while impaired | Operating crane while fatigued or medicated |
| UA-18 | **Use of defective equipment** | Knowingly using damaged or faulty equipment | Operating crane with known brake deficiency |
| UA-19 | **Work on running equipment** | Performing maintenance or checks on energized/operating equipment | Adjusting limit switch with power on |
| UA-20 | **Work/task carried out wrongly** | Performing task using incorrect procedure or method | Wrong crane sequence; improper rigging attachment |
| UA-21 | **Wrong working position** | Being in wrong place at wrong time | Walking under bridge crane path |

> **Source:** EIGA Document 90/17/E - Incident Investigation and Accident Prevention [^67^]

### 3.2 Unsafe Acts Grouped by Type (HSG245)

| Type | Examples |
|------|----------|
| **Slips** (unintentional action) | Finger slipped, hit wrong control, tripped |
| **Lapses** (failure of memory) | Forgot to check brake test, omitted inspection step |
| **Mistakes** (incorrect judgment) | Misjudged load weight, wrong crane selection |
| **Violations** (deliberate deviation) | Skipped pre-use check to save time, overloaded knowingly |

> **Source:** UK HSE HSG245 [^68^]

---

## 4. Immediate Causes: Unsafe Conditions (Full Checklist)

### 4.1 Unsafe Conditions - Complete Classification

| Code | Unsafe Condition Category | Description | Crane-Specific Examples |
|------|------------------------|-------------|------------------------|
| UC-01 | **Bad housekeeping / untidy workspace** | Cluttered, unclean, or disorganized work area | Cables across walkways; debris on crane runway |
| UC-02 | **Chemical exposure** | Presence of hazardous substances | Hydraulic fluid leaks; lubricant contamination |
| UC-03 | **Dangerous or unhealthy working environment** | General unsafe environmental conditions | Excessive radiant heat from molten metal; high noise |
| UC-04 | **Defective equipment** | Equipment with known or unknown defects | Worn wire rope; leaking brake cylinder |
| UC-05 | **Defective equipment/systems/materials** | Substandard or failed systems/components | Failed overload protection; faulty limit switch |
| UC-06 | **Defective tool/equipment** | Hand tools or rigging gear in poor condition | Damaged hook latch; worn sling |
| UC-07 | **Ergonomics** | Poorly designed human-machine interface | Controls not visible from operator position; poor cab design |
| UC-08 | **Extreme weather condition** | Adverse environmental conditions | High winds affecting outdoor crane; lightning risk |
| UC-09 | **Falling object** | Potential for objects to fall from height | Loose parts on crane structure; unsecured tools |
| UC-10 | **Fire or explosion hazards** | Presence of ignition sources or flammables | Hydraulic fluid near heat source; electrical arcing |
| UC-11 | **High noise level** | Excessive noise interfering with communication | Cannot hear radio commands; warning alarms inaudible |
| UC-12 | **Inadequate communication/warning system** | Missing or ineffective warning devices | No audible alarm on crane startup; no radio |
| UC-13 | **Inadequate protective equipment** | Insufficient or inappropriate PPE provided | No heat-resistant gloves for ladle area |
| UC-14 | **Inadequate tool** | Wrong or insufficient tools for the task | No load cell for weight verification |
| UC-15 | **Insufficient or excessive illumination** | Inadequate or excessive lighting | Poor visibility for hook engagement; glare on controls |
| UC-16 | **Insufficient preparedness** | Lack of emergency readiness | No rescue plan for cab evacuation; no fire extinguisher |
| UC-17 | **Insufficient safety devices** | Missing guards, interlocks, or safety systems | No anti-two-block device; no emergency stop |
| UC-18 | **Insufficient ventilation** | Poor air quality or temperature control | Overheated crane cab; exhaust fumes in crane bay |
| UC-19 | **Lack of planning** | Absence of lift plan or risk assessment | No lift plan for critical lift; no exclusion zone defined |
| UC-20 | **Light/sight** | Obstructed or inadequate vision | Steam/smoke obscuring operator view; dirty cab windows |
| UC-21 | **Missing safety warning signs** | Absence of required signage | No "No Standing" signs under crane path |
| UC-22 | **Mismanaged or loose objects** | Unsecured items creating hazards | Loose bolts on crane structure; unsecured maintenance tools |
| UC-23 | **Parallel activities** | Multiple simultaneous operations creating interference | Crane operations concurrent with ground maintenance |
| UC-24 | **Platform movement** | Unexpected or unstable surfaces | Uneven crane runway; floor damage from molten metal |
| UC-25 | **Poor psycho-social condition** | Stress, fatigue, or team conflict | Operator working double shift; conflict between crew |
| UC-26 | **Slippery or rough surface** | Unsafe walking/working surfaces | Oil on crane access platform; slag on floor |
| UC-27 | **Temperature extremes** | Excessively hot or cold conditions | Crane cab exceeding safe temperature; frozen controls |
| UC-28 | **Tight/narrow workspace** | Insufficient clearance for safe operation | Crane bay too narrow for load swing; obstructed sight lines |

> **Source:** EIGA Document 90/17/E [^67^], Adapted with crane-specific examples

---

## 5. ICAM Analysis Framework & Codes

### 5.1 ICAM Four-Layer Model

ICAM (Incident Cause Analysis Method) classifies findings into four contributing levels based on Professor James Reason's Swiss Cheese Model:

| Layer | Description | Question to Ask | Example |
|-------|------------|-----------------|---------|
| **Absent or Failed Defences** | Barriers, controls, or safeguards that should have prevented the incident | What should have stopped this but didn't? | Failed upper limit switch; missing exclusion zone barrier |
| **Individual/Team Actions** | Errors or violations by people directly involved | What did people do or not do? | Operator bypassed limit switch; spotter looked away |
| **Task/Environmental Conditions** | Situational characteristics at the time | What conditions influenced the actions? | Production pressure to skip inspection; poor lighting |
| **Organisational Factors** | Latent system-based factors that created conditions | What management decisions allowed this? | No maintenance budget for safety devices; no competency verification |

> **Source:** CS Energy ICAM Investigation Standard [^74^], RiskSight [^75^]

### 5.2 ICAM Organisational Factor Types (OFTs) - 14 Categories

| Code | Organisational Factor Type | Description | Crane Example |
|------|--------------------------|-------------|---------------|
| **HW** | Hardware | Failures in equipment, tools, or physical resources | Inadequate wire rope specification for heat exposure |
| **TR** | Training | Inadequacies in training systems | No simulator training for emergency scenarios |
| **OR** | Organisation | Structural or resource allocation failures | Insufficient maintenance staffing for crane fleet |
| **CO** | Communication | Failures in information transfer | Safety alerts not shared between shifts |
| **IG** | Incompatible Goals | Conflicting objectives (production vs safety) | Crane safety shutdown overridden to meet production target |
| **PR** | Procedures | Inadequate or missing procedures | No procedure for camera-failure ladle lifting |
| **MM** | Maintenance Management | Failures in maintenance planning or execution | Wire rope replacement deferred for budget reasons |
| **DE** | Design | Inherent design flaws or inadequate specifications | Crane cab position doesn't allow view of hook engagement |
| **RM** | Risk Management | Inadequate hazard identification or risk assessment | No risk assessment for ladle transfer exclusion zones |
| **MC** | Management of Change | Failure to manage organizational or operational changes | New crane operator assigned without formal handover |
| **CM** | Contractor Management | Inadequate oversight of contractor activities | Contractor crane operated without equivalent safety standards |
| **OC** | Organisational Culture | Cultural factors influencing safety behavior | "Get it done" culture tolerates safety shortcuts |
| **RI** | Regulatory Influence | Inadequate regulatory compliance or oversight | Annual inspection missed critical wire rope degradation |
| **OL** | Organisational Learning | Failure to learn from previous incidents | Similar near-miss not investigated or communicated |

> **Source:** CS Energy ICAM Investigation Standard [^74^], OHSA ICAM Template [^76^]

### 5.3 ICAM Absent/Failed Defence Categories (21 Types)

| Category | Code | Defence Type | Description |
|----------|------|-------------|-------------|
| **Awareness** | DF1 | Hazard identification | Failure to identify hazard before incident |
| | DF2 | Communication | Failure to communicate hazard information |
| | DF3 | Competence/knowledge | Personnel lacked knowledge to recognize hazard |
| | DF4 | Supervision | Inadequate oversight of hazardous activity |
| | DF5 | Work instruction/procedure | Procedure not available, unclear, or not followed |
| **Detection** | DF6 | Visual warning systems | Visual alarms, gauges, or indicators failed |
| | DF7 | Aural warning systems | Audible alarms or signals failed |
| | DF8 | Speed/movement detectors | Sensors detecting unsafe speed/movement failed |
| | DF9 | Vigilance/fatigue | Personnel fatigue or inattention |
| | DF10 | Gas/substance detection | Detection of hazardous substances failed |
| **Control & Recovery** | DF11 | Procedures | Control procedures not effective or followed |
| | DF12 | Bypass valves/circuits | Safety bypass systems failed |
| | DF13 | Emergency shut down | ESD system failed or not available |
| **Protection & Containment** | DF14 | PPE | Personal protective equipment not used or inadequate |
| | DF15 | Fire fighting | Fire suppression systems failed or absent |
| | DF16 | Spill response | Spill containment or response inadequate |
| | DF17 | Bunding/barricading/exclusion zones | Physical barriers absent or breached |
| **Escape & Rescue** | DF18 | Safe access/egress | Escape routes blocked or inadequate |
| | DF19 | Emergency planning/response | Emergency plan not available or not effective |
| | DF20 | Emergency communication | Emergency communication systems failed |
| | DF21 | Other | Other defence failures not classified above |

> **Source:** OHSA ICAM Investigation Report Template [^76^]

---

## 6. TapRooT Root Cause Tree Categories

### 6.1 TapRooT Seven Basic Cause Categories

TapRooT uses a structured Root Cause Tree with 7 basic cause categories. Each category branches into sub-categories through a Human Performance Troubleshooting Guide (15 questions) for human errors.

| Category | Description | Sub-Categories (Examples) |
|----------|------------|--------------------------|
| **Procedures** | Failures in written or unwritten work procedures | Ambiguous instructions; missing steps; not followed |
| **Training** | Inadequacies in training or qualification systems | Insufficient training; no refresher; not qualified |
| **Quality Control** | Failures in inspection, testing, or verification | No inspection; inadequate inspection; acceptance of defects |
| **Communications** | Failures in information transfer | Verbal only; wrong information; not communicated |
| **Human Engineering** | Mismatch between human capabilities and task demands | Controls not accessible; displays not visible; ergonomic issues |
| **Management Systems** | Deficiencies in management processes | No procedure for task; no risk assessment; inadequate resources |
| **Equipment Difficulty** | Equipment design, maintenance, or reliability failures | Design inadequate; maintenance ineffective; reliability issues |

> **Source:** TapRooT Root Cause Tree [^69^] [^70^] [^71^]

### 6.2 TapRooT Human Performance Troubleshooting Guide (15 Questions)

| # | Question | Purpose |
|---|----------|---------|
| 1 | Do you consistently look into fatigue, impairment, and distractions? | Ensure human condition factors are considered |
| 2 | Was the task being performed by a qualified person? | Verify competency requirements |
| 3 | Were the procedures clear and available? | Check procedure adequacy |
| 4 | Was the work environment conducive to safe performance? | Assess environmental influences |
| 5 | Was supervision adequate? | Verify oversight effectiveness |
| 6 | Were there time pressures or production demands? | Identify schedule pressure |
| 7 | Were tools and equipment appropriate? | Verify resource adequacy |
| 8 | Was communication effective? | Check information transfer |
| 9 | Was the person's physical condition adequate? | Assess fitness for duty |
| 10 | Were there human-machine interface problems? | Check Human Engineering factors |
| 11 | Was training appropriate and adequate? | Verify training effectiveness |
| 12 | Was there a history of similar errors? | Identify pattern indicators |
| 13 | Were external conditions a factor? | Assess weather, noise, etc. |
| 14 | Were there work group or cultural influences? | Check peer/social influences |
| 15 | Were there organizational or management system failures? | Probe management root causes |

> **Source:** TapRooT Guided Root Cause Analysis [^70^]

---

## 7. Contributory Factors Classification Models

### 7.1 CCOHS Five-Category Model

The Canadian Centre for Occupational Health and Safety uses five categories for investigating incident causes:

| Category | Key Investigation Questions |
|----------|----------------------------|
| **Task** | Was safe work procedure used? Had conditions changed? Were appropriate tools available and used? Were safety devices working? Was lockout used? |
| **Material** | Was there equipment failure? What caused it? Was machinery poorly designed? Was equipment maintained per manufacturer? Were hazardous products involved? Was PPE used properly? |
| **Environment** | What were weather conditions? Was housekeeping adequate? Was temperature/ventilation adequate? Was noise/lighting adequate? Were toxic gases/dusts present? |
| **Personnel** | Were workers experienced? Were they physically/mentally capable? Were they properly trained? Were they following procedures? Was fatigue a factor? |
| **Management** | Were safety rules enforced? Was training adequate? Was supervision sufficient? Were hazards identified and controlled? Was maintenance prioritized? |

> **Source:** CCOHS - Incident Investigation [^77^]

### 7.2 PEEPO Data Collection Method

PEEPO is a structured data collection framework used before ICAM analysis:

| Category | Data to Collect |
|----------|----------------|
| **P - People** | Those involved, witnesses, supervisors, emergency responders, competency records |
| **E - Environment** | Physical scene conditions, weather, lighting, noise, temperature, housekeeping |
| **E - Equipment** | Crane model, capacity, maintenance records, inspection history, safety devices, load details |
| **P - Procedures** | Work procedures, permits, risk assessments, pre-use check records, communication protocols |
| **O - Organization** | Management decisions, resource allocation, safety culture, production pressures, change management |

> **Source:** HZL India Incident Investigation Standard [^78^]

### 7.3 Coventry Council Immediate vs. Underlying Causes Framework

| Area | Immediate Causes | Underlying Causes |
|------|-----------------|-------------------|
| **Premises** | Access/egress; housekeeping; layout; floor conditions; obstructions; lighting; environmental conditions | Design; selection of workplace; repair/maintenance; cleaning regime |
| **Plant & Substances** | Machine guarding; condition of tools; hazardous substances; ventilation | Design; selection; commissioning; maintenance; PPE; risk assessment |
| **Procedures** | Safe system of work; instructions clarity; supervision; safe movement; PPE use | Safe system development; emergency procedures; information communication; monitoring |
| **People** | Suitability; competence/training; supervision; fitness | Selection/placement; refresher training; cover for absence; safety culture; peer pressure |
| **Environment** | Spills, escapes, pollution, contamination | Safe systems for maintenance, premises, plant and equipment |

> **Source:** Coventry Council Accident Investigation Guidance [^65^]

---

## 8. Crane-Specific Causative Factors

### 8.1 Crane Operation Causative Factors Indicator System (20 Factors)

Based on text mining analysis of crane accident reports, causative factors are classified into four dimensions:

| Classification | Code | Unsafe Factor | Frequency |
|---------------|------|--------------|-----------|
| **Human Factor (A)** | A1 | Operation against the procedures | High |
| | A2 | Stay in a dangerous area | High |
| | A3 | Incorrect wearing of personal protective equipment | Medium |
| | A4 | Improper emergency response | Medium |
| | A5 | Poor safety awareness | High |
| **Equipment Factor (B)** | B1 | Unperfect quality of steel wire ropes and other tools | Medium |
| | B2 | Equipment that doesn't meet the need | Medium |
| | B3 | Failure of the security protection function | High |
| | B4 | Equipment failure | High |
| **Environment Factor (C)** | C1 | Bad weather | Low |
| | C2 | Poor space environment | Medium |
| | C3 | Missing safety warning signs | Medium |
| | C4 | Cross parallel operations | High |
| **Management Factor (D)** | D1 | Poor qualification inspection of personnel and equipment | High |
| | D2 | Insufficient safety management | High |
| | D3 | No special personnel for safety management | Medium |
| | D4 | Insufficient safety responsibility | High |
| | D5 | Poor onsite supervision | High |
| | D6 | Lack of operating procedures and documents | High |
| | D7 | Inadequate safety training and education | High |

> **Source:** Intelligent Identification of Causative Factors for Crane Operation (PMC) [^81^]

### 8.2 Crane-Specific Immediate Cause Checklist

| Category | Check Item | Yes | No | N/A | Findings |
|----------|-----------|-----|-----|-----|----------|
| **Operator Actions** | Operator certified for this crane type? | | | | |
| | Pre-use inspection completed and documented? | | | | |
| | Load weight verified before lift? | | | | |
| | Exclusion zone enforced? | | | | |
| | Radio/communication working? | | | | |
| | Operator remained at controls during lift? | | | | |
| **Rigging/Load** | Proper rigging equipment selected? | | | | |
| | Rigging inspected before use? | | | | |
| | Load properly balanced/secured? | | | | |
| | Tag lines used for load control? | | | | |
| **Equipment Condition** | All safety devices functional? | | | | |
| | Limit switches tested? | | | | |
| | Brake test performed (inch test)? | | | | |
| | Wire rope condition acceptable? | | | | |
| | Load indicator calibrated? | | | | |
| **Environmental Factors** | Weather conditions safe for operation? | | | | |
| | Adequate lighting? | | | | |
| | Ground/working surface stable? | | | | |
| | Other operations in conflict? | | | | |

> **Adapted from:** OSHA Crane Inspection Requirements [^44^], BS 7121 Code of Practice [^55^]

---

## Appendix A: Quick Reference - Selecting the Right RCA Method

| Situation | Recommended Method | Why |
|-----------|-------------------|-----|
| Quick, simple incident (minor injury) | **5 Whys** | Fast, minimal resources |
| Team brainstorming session | **Fishbone** | Visual, engages all participants |
| Equipment failure (pump, motor, brake) | **FTA + Equifactor** | Technical rigor, handles complex systems |
| Fatality or serious injury | **ICAM** | Addresses organisational root causes, legally defensible |
| High-frequency incident type | **TapRooT** | Consistent classification, trend analysis capability |
| Policy/organizational failure | **AcciMap or STAMP-CAST** | Addresses system-level decisions |
| Aviation/transportation incident | **HFACS** | Industry-standard classification |
| Complex multi-cause event | **ICAM + FTA** | Combines human and technical analysis |

> **Note:** For crane incidents in steel plants involving fatalities, **ICAM is the recommended primary methodology** supplemented with **FTA for equipment failures** and **5 Whys** for simple contributory chains. The combination provides both systemic organisational analysis and technical failure investigation rigor.

---

## Appendix B: Definitions of Key Terms

| Term | Definition |
|------|------------|
| **Active Failure** | Unsafe acts committed by individuals at the front line (errors and/or violations) |
| **Latent Condition** | Conditions created by management decisions that lie dormant until activated by active failures |
| **Absent/Failed Defence** | Barriers or controls that should have prevented the incident but were missing or ineffective |
| **Contributing Factor** | Any action, inaction, or condition that contributed to the incident or its severity |
| **Causal Factor** | A human error or equipment failure that, if eliminated, would have prevented the incident or reduced its severity |
| **Organisational Factor** | Management decisions or processes that create deficiencies in operational defences |
| **Swiss Cheese Model** | James Reason's model where multiple layers of defences each have holes; alignment of holes allows accident trajectory |
| **Minimal Cut Set** (FTA) | Smallest combination of basic events that would cause the top event |
| **Risk Priority Number (RPN)** | Product of Severity x Occurrence x Detection ratings in FMEA |
| **OFT** | Organisational Factor Type (ICAM classification code) |

---

*This document compiles standardized frameworks from HSE (UK), OSHA (US), NASA, EIGA, ICAM, TapRooT, NEBOSH, and peer-reviewed academic research to provide a comprehensive reference for accident investigation practitioners in crane operations and heavy industry.*
