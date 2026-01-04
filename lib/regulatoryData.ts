// Regulatory complexity data by country with detailed requirements
export interface CostRange {
    min: number;
    max: number;
}

export interface CostBreakdown {
    registrationFee: CostRange;      // Government/agency application fees
    authorizedRepFee: CostRange;     // Local representative (annual)
    labTestingFee: CostRange;        // Testing & certification
    clinicalCost: CostRange;         // Clinical evidence/trials
    otherFees: CostRange;            // Translation, consulting, etc.
}

export interface Requirements {
    authorizedRep: boolean;
    authorizedRepNotes: string;
    labTesting: string[];
    clinicalData: string;
    qualitySystem: string;
}

export interface Pathways {
    classI: string;
    classII: string;
    classIII: string;
}

export interface RegulatoryDetails {
    costBreakdown: CostBreakdown;
    costBasis: string;
    costDisclaimer: string;
    registrationSteps: string[];
    requirements: Requirements;
    pathways: Pathways;
    notes: string;
    websiteUrl: string;
}

export interface RegulatoryData {
    country: string;
    code: string;
    lat: number;
    lng: number;
    agency: string;
    complexity: number;
    avgCost: number;
    avgTimeline: number;
    color: string;
    region: 'Americas' | 'Europe' | 'Asia-Pacific' | 'Other';
    gdpBillions: number;
    populationMillions: number;
    details: RegulatoryDetails;
}

export const REGULATORY_DATA: RegulatoryData[] = [
    {
        country: 'United States',
        code: 'US',
        lat: 37.0902,
        lng: -95.7129,
        agency: 'FDA',
        complexity: 8,
        avgCost: 150000,
        avgTimeline: 12,
        color: '#ef4444',
        region: 'Americas',
        gdpBillions: 27360,
        populationMillions: 335,
        details: {
            costBreakdown: {
                registrationFee: { min: 21760, max: 425000 },
                authorizedRepFee: { min: 3000, max: 15000 },
                labTestingFee: { min: 30000, max: 200000 },
                clinicalCost: { min: 0, max: 5000000 },
                otherFees: { min: 10000, max: 100000 }
            },
            costBasis: "510(k) Class II baseline",
            costDisclaimer: "Class III (PMA) devices require clinical trials costing $1M-$50M+ depending on endpoints, patient population, and trial duration. The min figures represent typical 510(k) costs.",
            registrationSteps: [
                "Determine device classification (Class I/II/III)",
                "Identify predicate device for 510(k) or apply for De Novo",
                "Conduct required testing (biocompatibility, safety, EMC)",
                "Prepare and submit 510(k) or PMA application",
                "Respond to FDA questions (if any)",
                "Receive clearance/approval letter",
                "Complete facility registration and device listing",
                "Implement post-market surveillance"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "US Agent required for foreign manufacturers",
                labTesting: ["Biocompatibility (ISO 10993)", "Electrical Safety (IEC 60601)", "EMC Testing (IEC 60601-1-2)", "Laser Safety (IEC 60825)"],
                clinicalData: "510(k): Often literature/bench data. De Novo: Clinical evidence usually required. PMA: Pivotal clinical trial typically required.",
                qualitySystem: "21 CFR Part 820 (QSR) - FDA Quality System Regulation"
            },
            pathways: {
                classI: "Most exempt from 510(k); general controls apply; facility registration required",
                classII: "510(k) Premarket Notification ($21k fee) - demonstrate substantial equivalence to predicate",
                classIII: "PMA Premarket Approval ($425k fee) - highest scrutiny, pivotal clinical trials typically required"
            },
            notes: "510(k) is the most common pathway (~3,000/year). PMA is rare (~30-40/year) but required for highest-risk devices. De Novo offers a path for novel low-moderate risk devices.",
            websiteUrl: "https://www.fda.gov/medical-devices"
        }
    },
    {
        country: 'European Union',
        code: 'EU',
        lat: 50.8503,
        lng: 4.3517,
        agency: 'Notified Bodies',
        complexity: 9,
        avgCost: 200000,
        avgTimeline: 18,
        color: '#f59e0b',
        region: 'Europe',
        gdpBillions: 18350,
        populationMillions: 450,
        details: {
            costBreakdown: {
                registrationFee: { min: 15000, max: 80000 },
                authorizedRepFee: { min: 10000, max: 25000 },
                labTestingFee: { min: 40000, max: 150000 },
                clinicalCost: { min: 20000, max: 3000000 },
                otherFees: { min: 15000, max: 80000 }
            },
            costBasis: "Class IIa/IIb baseline",
            costDisclaimer: "Class III devices with clinical investigations can cost €2-10M+. Notified Body fees vary significantly. These estimates assume existing ISO 13485 certification.",
            registrationSteps: [
                "Determine device classification under MDR",
                "Appoint EU Authorized Representative (if non-EU)",
                "Establish Quality Management System (ISO 13485)",
                "Prepare Technical Documentation",
                "Conduct clinical evaluation per MDR requirements",
                "Select and engage Notified Body",
                "Complete conformity assessment",
                "Obtain CE marking",
                "Register in EUDAMED database"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "EC REP required for non-EU manufacturers; must be located in EU",
                labTesting: ["Biocompatibility (ISO 10993)", "Electrical Safety (IEC 60601)", "EMC (IEC 60601-1-2)", "Laser Safety (IEC 60825)", "Sterilization Validation"],
                clinicalData: "Clinical evaluation mandatory; PMCF plan required for most devices",
                qualitySystem: "ISO 13485:2016 certification required"
            },
            pathways: {
                classI: "Self-declaration (some Class I); no Notified Body for non-sterile/non-measuring",
                classII: "Class IIa/IIb require Notified Body involvement; conformity assessment",
                classIII: "Full Notified Body review; clinical investigation often required"
            },
            notes: "MDR (EU 2017/745) significantly increased requirements. Notified Body capacity is limited - plan 12+ months for NB engagement. UDI system mandatory.",
            websiteUrl: "https://ec.europa.eu/health/medical-devices"
        }
    },
    {
        country: 'Japan',
        code: 'JP',
        lat: 36.2048,
        lng: 138.2529,
        agency: 'PMDA',
        complexity: 9,
        avgCost: 180000,
        avgTimeline: 20,
        color: '#f59e0b',
        region: 'Asia-Pacific',
        gdpBillions: 4230,
        populationMillions: 125,
        details: {
            costBreakdown: {
                registrationFee: { min: 20000, max: 150000 },
                authorizedRepFee: { min: 20000, max: 50000 },
                labTestingFee: { min: 30000, max: 120000 },
                clinicalCost: { min: 50000, max: 2000000 },
                otherFees: { min: 15000, max: 60000 }
            },
            costBasis: "Class II certification baseline",
            costDisclaimer: "Japanese bridging studies add significant cost. Class III/IV Shonin approval requires extensive clinical evidence. Translation and in-country support are major cost drivers.",
            registrationSteps: [
                "Determine device classification (Class I-IV)",
                "Appoint Marketing Authorization Holder (MAH/DMAH)",
                "Prepare application dossier in Japanese",
                "Submit to PMDA for review",
                "Respond to PMDA queries",
                "Obtain Shonin (approval) or Certification",
                "Complete Manufacturing Site registration",
                "Register product in database"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "Designated Marketing Authorization Holder (DMAH) required for foreign companies",
                labTesting: ["JIS standards compliance", "Electrical Safety (JIS T 0601)", "EMC Testing", "Japanese-specific requirements"],
                clinicalData: "Japanese clinical data often required (bridging studies); Western data may need supplementation",
                qualitySystem: "QMS Ordinance (based on ISO 13485) - Japan-specific requirements"
            },
            pathways: {
                classI: "Notification to PMDA; no pre-market approval required",
                classII: "Certification by Registered Certification Body (RCB)",
                classIII: "Shonin (approval) required from PMDA - rigorous review process"
            },
            notes: "All documents must be in Japanese. PMDA consultation meetings recommended. Japan has unique clinical data requirements - plan for bridging studies.",
            websiteUrl: "https://www.pmda.go.jp/english/"
        }
    },
    {
        country: 'China',
        code: 'CN',
        lat: 35.8617,
        lng: 104.1954,
        agency: 'NMPA',
        complexity: 10,
        avgCost: 250000,
        avgTimeline: 24,
        color: '#dc2626',
        region: 'Asia-Pacific',
        gdpBillions: 17960,
        populationMillions: 1425,
        details: {
            costBreakdown: {
                registrationFee: { min: 25000, max: 100000 },
                authorizedRepFee: { min: 25000, max: 60000 },
                labTestingFee: { min: 50000, max: 200000 },
                clinicalCost: { min: 100000, max: 5000000 },
                otherFees: { min: 20000, max: 80000 }
            },
            costBasis: "Class II registration baseline",
            costDisclaimer: "In-China clinical trials are often mandatory for Class III devices and can cost $2-10M+. Testing must be at NMPA-designated labs which adds cost and time.",
            registrationSteps: [
                "Determine device classification (Class I/II/III)",
                "Appoint China Agent (for foreign manufacturers)",
                "Conduct testing at NMPA-recognized lab in China",
                "Prepare registration dossier in Chinese",
                "Submit to NMPA for review",
                "Clinical trial in China (if required)",
                "Respond to NMPA deficiency letters",
                "Obtain registration certificate"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "China Agent required; must be legally registered in China and understand medical device regulations",
                labTesting: ["GB standards (Chinese national standards)", "Testing at NMPA-designated labs", "In-China testing often required"],
                clinicalData: "Chinese clinical data typically required for Class II/III; multi-regional data may be accepted for some devices",
                qualitySystem: "China GMP compliance required; on-site inspection may be required"
            },
            pathways: {
                classI: "Filing/notification with local provincial NMPA",
                classII: "Registration with provincial NMPA; moderate documentation",
                classIII: "Registration with national NMPA; full review, often requires in-China clinical trials"
            },
            notes: "All documents must be in Chinese. Testing must be done at NMPA-designated labs. Clinical trials often require Chinese patients. Plan significant timeline.",
            websiteUrl: "https://www.nmpa.gov.cn/"
        }
    },
    {
        country: 'Canada',
        code: 'CA',
        lat: 56.1304,
        lng: -106.3468,
        agency: 'Health Canada',
        complexity: 6,
        avgCost: 80000,
        avgTimeline: 9,
        color: '#10b981',
        region: 'Americas',
        gdpBillions: 2140,
        populationMillions: 40,
        details: {
            costBreakdown: {
                registrationFee: { min: 8000, max: 25000 },
                authorizedRepFee: { min: 5000, max: 15000 },
                labTestingFee: { min: 20000, max: 80000 },
                clinicalCost: { min: 0, max: 500000 },
                otherFees: { min: 8000, max: 30000 }
            },
            costBasis: "Class II/III device license baseline",
            costDisclaimer: "MDSAP certification streamlines audits. Class IV devices may require more extensive clinical evidence. Lower costs with existing FDA 510(k) clearance.",
            registrationSteps: [
                "Determine device classification (Class I-IV)",
                "Obtain establishment license (MDEL)",
                "Prepare device license application",
                "Submit to Health Canada",
                "Respond to screening and review questions",
                "Obtain Medical Device License (MDL)",
                "Maintain annual license and report adverse events"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "Canadian importer or foreign manufacturer must hold MDEL",
                labTesting: ["Recognized standards (IEC, ISO)", "Electrical Safety (IEC 60601)", "EMC Testing"],
                clinicalData: "Clinical evidence required; may accept foreign clinical data with justification",
                qualitySystem: "ISO 13485 certification required; MDSAP certificate strongly recommended"
            },
            pathways: {
                classI: "Establishment license only; no device license required",
                classII: "Device license application; declaration of conformity route available",
                classIII: "Full device license application with detailed technical review"
            },
            notes: "MDSAP certificate eliminates need for separate Health Canada audit. Bilingual labeling required (English/French). Harmonized with FDA in many areas.",
            websiteUrl: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html"
        }
    },
    {
        country: 'Australia',
        code: 'AU',
        lat: -25.2744,
        lng: 133.7751,
        agency: 'TGA',
        complexity: 5,
        avgCost: 60000,
        avgTimeline: 8,
        color: '#10b981',
        region: 'Asia-Pacific',
        gdpBillions: 1690,
        populationMillions: 26,
        details: {
            costBreakdown: {
                registrationFee: { min: 5000, max: 20000 },
                authorizedRepFee: { min: 8000, max: 20000 },
                labTestingFee: { min: 15000, max: 60000 },
                clinicalCost: { min: 0, max: 300000 },
                otherFees: { min: 5000, max: 25000 }
            },
            costBasis: "Class IIa/IIb inclusion baseline",
            costDisclaimer: "Comparable overseas regulator pathway offers faster, lower-cost approval for devices already approved by FDA/EU/Health Canada. Class III requires TGA conformity assessment.",
            registrationSteps: [
                "Determine device classification",
                "Appoint Australian Sponsor",
                "Prepare application with conformity assessment evidence",
                "Submit to TGA via online portal",
                "TGA review and assessment",
                "Inclusion in ARTG (Australian Register of Therapeutic Goods)",
                "Maintain registration and report adverse events"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "Australian Sponsor required; must be Australian resident or company",
                labTesting: ["IEC/ISO standards accepted", "Essential Principles compliance", "TGA may request additional testing"],
                clinicalData: "Clinical evidence required per Essential Principles; foreign data generally accepted",
                qualitySystem: "ISO 13485 or equivalent; MDSAP certificate recognized"
            },
            pathways: {
                classI: "Manufacturer's declaration; streamlined inclusion in ARTG",
                classII: "Conformity assessment certification required",
                classIII: "Full TGA conformity assessment; may require independent review"
            },
            notes: "TGA recognizes EU CE marking and MDSAP. Comparable overseas regulator pathway available for faster approval. Annual charges apply.",
            websiteUrl: "https://www.tga.gov.au/medical-devices"
        }
    },
    {
        country: 'Brazil',
        code: 'BR',
        lat: -14.2350,
        lng: -51.9253,
        agency: 'ANVISA',
        complexity: 7,
        avgCost: 100000,
        avgTimeline: 15,
        color: '#f59e0b',
        region: 'Americas',
        gdpBillions: 2130,
        populationMillions: 216,
        details: {
            costBreakdown: {
                registrationFee: { min: 10000, max: 35000 },
                authorizedRepFee: { min: 10000, max: 25000 },
                labTestingFee: { min: 25000, max: 80000 },
                clinicalCost: { min: 10000, max: 500000 },
                otherFees: { min: 10000, max: 40000 }
            },
            costBasis: "Class II registration baseline",
            costDisclaimer: "CBPF (GMP certificate) inspection adds significant cost and time for Class III/IV. Portuguese translation required. MERCOSUR harmonization may reduce costs.",
            registrationSteps: [
                "Determine device classification (Class I-IV)",
                "Obtain Brazilian Good Manufacturing Certificate (CBPF) if required",
                "Appoint Brazilian Registration Holder (BRH)",
                "Prepare dossier in Portuguese",
                "Submit to ANVISA",
                "Facility inspection (for Class III/IV)",
                "ANVISA technical review",
                "Obtain registration"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "Brazilian Registration Holder (BRH) required; must be Brazilian legal entity",
                labTesting: ["INMETRO certified testing", "Brazilian standards (ABNT NBR)", "IEC standards accepted"],
                clinicalData: "Clinical data required for higher-risk devices; foreign data may be accepted with justification",
                qualitySystem: "CBPF (Good Manufacturing Certificate) required for Class III/IV; based on ISO 13485"
            },
            pathways: {
                classI: "Registration by notification; simplified process",
                classII: "Standard registration; technical documentation review",
                classIII: "Full registration with CBPF inspection requirement"
            },
            notes: "All documents must be in Portuguese. CBPF inspection required for Class III/IV - plan 6+ months. MERCOSUR harmonization may apply.",
            websiteUrl: "https://www.gov.br/anvisa/pt-br"
        }
    },
    {
        country: 'South Korea',
        code: 'KR',
        lat: 35.9078,
        lng: 127.7669,
        agency: 'MFDS',
        complexity: 7,
        avgCost: 90000,
        avgTimeline: 12,
        color: '#f59e0b',
        region: 'Asia-Pacific',
        gdpBillions: 1710,
        populationMillions: 52,
        details: {
            costBreakdown: {
                registrationFee: { min: 8000, max: 30000 },
                authorizedRepFee: { min: 12000, max: 30000 },
                labTestingFee: { min: 25000, max: 80000 },
                clinicalCost: { min: 10000, max: 800000 },
                otherFees: { min: 8000, max: 30000 }
            },
            costBasis: "Class II/III baseline",
            costDisclaimer: "Korean clinical data may be required for Class IV devices. KGMP certification is a significant upfront investment. Testing at MFDS-designated labs required.",
            registrationSteps: [
                "Determine device classification (Class I-IV)",
                "Appoint Korea License Holder (KLH)",
                "Conduct testing at MFDS-recognized laboratory",
                "Prepare technical documentation in Korean",
                "Submit application to MFDS",
                "MFDS review and assessment",
                "Obtain device license",
                "Product tracking registration"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "Korea License Holder (KLH) required; must be Korean legal entity",
                labTesting: ["MFDS-designated laboratory testing", "Korean standards (KS)", "IEC/ISO standards accepted"],
                clinicalData: "Clinical data required for Class III/IV; Korean clinical data may be requested",
                qualitySystem: "KGMP (Korean GMP) certification required; based on ISO 13485"
            },
            pathways: {
                classI: "KGMP exemption; notification process",
                classII: "Technical documentation review; KGMP certification",
                classIII: "Full technical review; clinical evaluation; KGMP inspection"
            },
            notes: "MFDS accepts MDSAP audits. Korean language required for labeling. Post-market surveillance program mandatory.",
            websiteUrl: "https://www.mfds.go.kr/eng/"
        }
    },
    {
        country: 'United Kingdom',
        code: 'GB',
        lat: 55.3781,
        lng: -3.4360,
        agency: 'MHRA',
        complexity: 6,
        avgCost: 75000,
        avgTimeline: 10,
        color: '#10b981',
        region: 'Europe',
        gdpBillions: 3340,
        populationMillions: 68,
        details: {
            costBreakdown: {
                registrationFee: { min: 8000, max: 30000 },
                authorizedRepFee: { min: 8000, max: 20000 },
                labTestingFee: { min: 20000, max: 70000 },
                clinicalCost: { min: 10000, max: 500000 },
                otherFees: { min: 6000, max: 25000 }
            },
            costBasis: "Class IIa/IIb UKCA marking baseline",
            costDisclaimer: "CE marking accepted until June 2028. UK Approved Body capacity limited. Costs may increase as transition period ends.",
            registrationSteps: [
                "Determine device classification under UK MDR 2002",
                "Appoint UK Responsible Person (if non-UK)",
                "Obtain UKCA marking or use CE marking (transitional)",
                "Register device with MHRA",
                "Prepare UK-specific labeling",
                "Complete registration in MHRA database"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "UK Responsible Person required for non-UK manufacturers",
                labTesting: ["Designated standards (BS EN)", "IEC/ISO standards accepted", "UK Approved Body for higher classes"],
                clinicalData: "Clinical evaluation required; similar to EU MDR requirements",
                qualitySystem: "ISO 13485 certification required"
            },
            pathways: {
                classI: "Self-declaration; MHRA registration required",
                classII: "UK Approved Body involvement for Class IIa/IIb",
                classIII: "Full UK Approved Body conformity assessment"
            },
            notes: "CE marking accepted until June 2028 (extended transition). UKCA marking will be required. Northern Ireland follows EU rules.",
            websiteUrl: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
        }
    },
    {
        country: 'India',
        code: 'IN',
        lat: 20.5937,
        lng: 78.9629,
        agency: 'CDSCO',
        complexity: 6,
        avgCost: 50000,
        avgTimeline: 12,
        color: '#10b981',
        region: 'Asia-Pacific',
        gdpBillions: 3730,
        populationMillions: 1428,
        details: {
            costBreakdown: {
                registrationFee: { min: 3000, max: 15000 },
                authorizedRepFee: { min: 5000, max: 15000 },
                labTestingFee: { min: 15000, max: 50000 },
                clinicalCost: { min: 5000, max: 300000 },
                otherFees: { min: 5000, max: 20000 }
            },
            costBasis: "Class B/C import license baseline",
            costDisclaimer: "India offers lower-cost market entry but regulatory framework is evolving. Clinical investigation requirements for Class C/D devices can add significant costs.",
            registrationSteps: [
                "Determine device classification (Class A/B/C/D)",
                "Appoint Indian Authorized Agent",
                "Register manufacturing site",
                "Prepare application per MDR 2017",
                "Submit to CDSCO online portal",
                "CDSCO review and assessment",
                "Obtain registration/import license",
                "Maintain annual compliance"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "Indian Authorized Agent required for foreign manufacturers",
                labTesting: ["BIS standards", "NABL-accredited laboratory testing", "IEC/ISO standards recognized"],
                clinicalData: "Clinical investigation may be required for Class C/D; foreign data considered",
                qualitySystem: "ISO 13485 certification required; Indian GMP compliance"
            },
            pathways: {
                classI: "Class A: Notification only; no license required",
                classII: "Class B: Registration with state licensing authority",
                classIII: "Class C/D: Import license from CDSCO; detailed technical review"
            },
            notes: "India MDR 2017 significantly reformed device regulation. Online registration system implemented. Price controls may apply to certain devices.",
            websiteUrl: "https://cdsco.gov.in/"
        }
    },
    {
        country: 'Singapore',
        code: 'SG',
        lat: 1.3521,
        lng: 103.8198,
        agency: 'HSA',
        complexity: 5,
        avgCost: 45000,
        avgTimeline: 6,
        color: '#22c55e',
        region: 'Asia-Pacific',
        gdpBillions: 500,
        populationMillions: 6,
        details: {
            costBreakdown: {
                registrationFee: { min: 4000, max: 15000 },
                authorizedRepFee: { min: 6000, max: 15000 },
                labTestingFee: { min: 12000, max: 40000 },
                clinicalCost: { min: 0, max: 200000 },
                otherFees: { min: 4000, max: 15000 }
            },
            costBasis: "Class B/C expedited route baseline",
            costDisclaimer: "Reference country approval (FDA, EU, TGA, Health Canada, Japan PMDA) enables expedited review and lower costs. Full evaluation route for novel devices costs more.",
            registrationSteps: [
                "Determine device classification (Class A/B/C/D)",
                "Appoint Singapore product registrant",
                "Prepare registration dossier",
                "Submit via MEDICS online system",
                "HSA evaluation",
                "Obtain product listing/registration",
                "Maintain dealer's license"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "Local product registrant required; dealer's license for importers",
                labTesting: ["IEC/ISO standards accepted", "Reference country approval may substitute for testing"],
                clinicalData: "Clinical evidence required; reference country approval streamlines process",
                qualitySystem: "ISO 13485 or recognized equivalent"
            },
            pathways: {
                classI: "Class A: Dealer's license only; no product registration",
                classII: "Class B/C: Product registration with HSA; expedited route available",
                classIII: "Class D: Full evaluation route; may leverage reference country approval"
            },
            notes: "HSA offers expedited review for devices approved by reference agencies (FDA, EU, TGA, Health Canada, Japan). ASEAN harmonization applies.",
            websiteUrl: "https://www.hsa.gov.sg/medical-devices"
        }
    },
    {
        country: 'Switzerland',
        code: 'CH',
        lat: 46.8182,
        lng: 8.2275,
        agency: 'Swissmedic',
        complexity: 7,
        avgCost: 120000,
        avgTimeline: 14,
        color: '#f59e0b',
        region: 'Europe',
        gdpBillions: 885,
        populationMillions: 9,
        details: {
            costBreakdown: {
                registrationFee: { min: 10000, max: 40000 },
                authorizedRepFee: { min: 10000, max: 25000 },
                labTestingFee: { min: 30000, max: 100000 },
                clinicalCost: { min: 20000, max: 1000000 },
                otherFees: { min: 10000, max: 40000 }
            },
            costBasis: "Class IIa/IIb MedDO baseline",
            costDisclaimer: "Switzerland aligned with EU MDR via MRA. CE marking from EU Notified Bodies recognized during transition. Separate Swiss AR still required.",
            registrationSteps: [
                "Determine device classification (matches EU MDR)",
                "Appoint Swiss Authorized Representative (if non-Swiss)",
                "Obtain conformity assessment from recognized body",
                "Prepare Swiss-specific labeling",
                "Notify Swissmedic and register in database",
                "Affix conformity marking",
                "Maintain market surveillance obligations"
            ],
            requirements: {
                authorizedRep: true,
                authorizedRepNotes: "Swiss Authorized Representative required for non-Swiss manufacturers",
                labTesting: ["EU harmonized standards accepted", "Swiss-designated conformity assessment bodies"],
                clinicalData: "Clinical evaluation per MedDO (aligned with EU MDR)",
                qualitySystem: "ISO 13485 certification required"
            },
            pathways: {
                classI: "Manufacturer declaration; notification to Swissmedic",
                classII: "Conformity assessment body involvement for IIa/IIb",
                classIII: "Full conformity assessment; detailed clinical evaluation"
            },
            notes: "Switzerland aligned with EU MDR through MRA. CE marking from EU Notified Bodies recognized during transition. Separate Swiss representative needed despite proximity to EU.",
            websiteUrl: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices.html"
        }
    }
];
