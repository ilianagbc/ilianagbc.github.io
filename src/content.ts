export type Language = 'es' | 'en';

export interface LocalizedString {
  es: string;
  en: string;
}

export interface ClientProfile {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  benefits: {
    es: string[];
    en: string[];
  };
  ctaText: LocalizedString;
}

export const CLIENT_PROFILES: ClientProfile[] = [
  {
    id: 'arquitectura',
    title: {
      es: 'Estudios de Arquitectura',
      en: 'Architecture Studios'
    },
    subtitle: {
      es: 'Optimización bioclimática y evidencias para concursos y proyectos ejecutivos',
      en: 'Bioclimatic optimization and technical evidence for tenders and executive projects'
    },
    benefits: {
      es: [
        'Simulación paramétrica de envolventes y protecciones solares en anteproyecto.',
        'Estudios de iluminación natural (Radiance) y ventilación pasiva o CFD.',
        'Evidencias justificativas para cumplimiento de CTE y sellos ambientales.'
      ],
      en: [
        'Parametric envelope and solar shading simulation at conceptual design stage.',
        'Daylight studies (Radiance) and natural ventilation or CFD models.',
        'Substantiating technical evidence for building codes and environmental certifications.'
      ]
    },
    ctaText: {
      es: 'Arquitectura',
      en: 'Architecture'
    }
  },
  {
    id: 'promotoras',
    title: {
      es: 'Promotoras & Inversores',
      en: 'Developers & Investors'
    },
    subtitle: {
      es: 'Revalorización de activos, CEE A y certificaciones LEED, BREEAM y WELL',
      en: 'Asset value enhancement, EPC A ratings and LEED, BREEAM & WELL certifications'
    },
    benefits: {
      es: [
        'Máxima puntuación en sellos internacionales que atraen inquilinos premium.',
        'Alineamiento con taxonomía verde europea y criterios ESG corporativos.',
        'Minimización de costes operativos (OPEX) futuros y riesgo regulatorio.'
      ],
      en: [
        'Maximum score in international labels attracting tier-one tenants.',
        'Alignment with EU Green Taxonomy and corporate ESG criteria.',
        'Reduction of future operating costs (OPEX) and regulatory exposure.'
      ]
    },
    ctaText: {
      es: 'Promotoras',
      en: 'Developers'
    }
  },
  {
    id: 'ingenierias',
    title: {
      es: 'Ingenierías',
      en: 'Engineering Firms'
    },
    subtitle: {
      es: 'Dimensionamiento de renovables, cargas térmicas horarias y gemelos digitales',
      en: 'Renewables sizing, dynamic hourly thermal loads and building digital twins'
    },
    benefits: {
      es: [
        'Dimensionamiento técnico-económico de Solar FV, aerotermia y geotermia.',
        'Cálculo dinámico 8.760h de demandas térmicas para evitar sobredimensionamiento.',
        'Calibración de gemelos digitales para rehabilitación con amortización contrastada.'
      ],
      en: [
        'Technical-economic sizing of PV solar, aerothermal and geothermal systems.',
        'Dynamic 8,760h hourly simulation to prevent plant oversizing.',
        'Calibrated digital twins for deep retrofits with validated payback periods.'
      ]
    },
    ctaText: {
      es: 'Ingenierías',
      en: 'Engineering'
    }
  },
  {
    id: 'constructoras',
    title: {
      es: 'Constructoras',
      en: 'General Contractors'
    },
    subtitle: {
      es: 'Garantía de cumplimiento en obra, trazabilidad de calidades y desvíos cero',
      en: 'Site compliance assurance, quality traceability, and zero execution deviations'
    },
    benefits: {
      es: [
        'Optimización y validación técnica de materiales, espesores de aislamiento y carpinterías para evitar sobrecostes en obra.',
        'Análisis de Ciclo de Vida (ACV) y justificación rigurosa de DAPs de proveedores.',
        'Defensa técnica de soluciones constructivas ante auditorías y dirección facultativa.'
      ],
      en: [
        'Technical optimization and validation of building materials, insulation thicknesses, and glazing to prevent on-site cost overruns.',
        'Life Cycle Assessment (LCA) and strict supplier EPD compliance verification.',
        'Technical defense of construction detailing during site audits and supervision.'
      ]
    },
    ctaText: {
      es: 'Constructoras',
      en: 'Contractors'
    }
  }
];

export interface ServiceItem {
  id: string;
  category: LocalizedString;
  name: LocalizedString;
  badge: LocalizedString;
  description: LocalizedString;
  highlights: {
    es: string[];
    en: string[];
  };
  software: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'diseno-sostenible',
    category: {
      es: 'Diseño Pasivo & Confort',
      en: 'Passive Design & Comfort'
    },
    name: {
      es: 'Diseño Sostenible & Eficiencia',
      en: 'Sustainable Design & Efficiency'
    },
    badge: {
      es: 'Bioclimatismo · Passivhaus',
      en: 'Bioclimatic · Passivhaus'
    },
    description: {
      es: 'Consultoría de anteproyecto para optimizar forma, orientación, envolvente, huecos, protecciones solares, iluminación natural y ventilación natural, con criterios de diseño pasivo y Passivhaus.',
      en: 'Early-design consulting to optimise form, orientation, envelope, openings, solar shading, daylight and natural ventilation, using passive design and Passivhaus criteria.'
    },
    highlights: {
      es: [
        'Diseño paramétrico y bioclimático multivariable',
        'Luz natural (Radiance) y análisis de sombreamiento dinámico',
        'Ventilación natural, confort pasivo y estándares Passivhaus'
      ],
      en: [
        'Multivariable parametric and bioclimatic modeling',
        'Daylight (Radiance) and dynamic solar shading analysis',
        'Natural ventilation, passive comfort and Passivhaus standards'
      ]
    },
    software: 'DesignBuilder · EnergyPlus · Radiance'
  },
  {
    id: 'certificaciones-oficiales',
    category: {
      es: 'Sellos & Verificación',
      en: 'Labels & Compliance'
    },
    name: {
      es: 'Certificaciones Oficiales',
      en: 'Official Certifications'
    },
    badge: {
      es: 'LEED · BREEAM · WELL · ICAEN',
      en: 'LEED · BREEAM · WELL · ICAEN'
    },
    description: {
      es: 'Modelización energética, térmica, lumínica y de flujo de aire para certificación y verificación de desempeño, incluyendo CEE oficial para el registro en el ICAEN, y evidencias de simulación para BREEAM ES, LEED y WELL.',
      en: 'Energy, thermal, daylight and airflow modelling for certification and performance verification, including the official CEE for registration in ICAEN, plus simulation evidence for BREEAM ES, LEED and WELL.'
    },
    highlights: {
      es: [
        'CEE oficial para el registro en el ICAEN / autonómico',
        'Simulación validada EnergyPlus + Radiance para LEED v4/v5 y BREEAM ES',
        'Dinámica de Fluidos Computacional (CFD) y confort térmico WELL'
      ],
      en: [
        'Official EPC certification for registration in ICAEN / regional board',
        'Validated EnergyPlus + Radiance simulation for LEED v4/v5 & BREEAM ES',
        'Computational Fluid Dynamics (CFD) and WELL thermal comfort'
      ]
    },
    software: 'TeKton 3D · EnergyPlus · Radiance · CFD'
  },
  {
    id: 'rehabilitacion-energetica',
    category: {
      es: 'Descarbonización de Activos',
      en: 'Asset Decarbonization'
    },
    name: {
      es: 'Rehabilitación Energética',
      en: 'Energy Renovation'
    },
    badge: {
      es: 'Digital Twin · ROI',
      en: 'Digital Twin · Payback'
    },
    description: {
      es: 'Modelo del edificio existente calibrado con consumos reales cuando existan datos suficientes. Comparación paramétrica de mejoras de envolvente, instalaciones y control para priorizar paquetes de intervención.',
      en: 'A model of the existing building, calibrated with real energy use when enough data is available. Parametric comparison of envelope, systems and controls upgrades to prioritise intervention packages.'
    },
    highlights: {
      es: [
        'Digital Twin energético calibrado bajo estándares internacionales',
        'Simulación paramétrica de paquetes de medidas de mejora (MEEs)',
        'Cálculo riguroso de ahorro, inversión CAPEX/OPEX y periodo de retorno'
      ],
      en: [
        'Calibrated building energy digital twin under international standards',
        'Parametric testing of energy efficiency measure packages (EEMs)',
        'Detailed energy savings, CAPEX/OPEX budgets and payback periods'
      ]
    },
    software: 'EnergyPlus · DesignBuilder · Python'
  },
  {
    id: 'instalaciones-renovables',
    category: {
      es: 'Generación In Situ',
      en: 'Onsite Generation'
    },
    name: {
      es: 'Instalaciones Renovables',
      en: 'Renewable Installations'
    },
    badge: {
      es: 'Solar FV · Aerotermia · Geotermia',
      en: 'PV Solar · Aerothermal · Geothermal'
    },
    description: {
      es: 'Dimensionamiento técnico-económico a partir de demanda y perfiles horarios. Comparación de alternativas, autoconsumo, cobertura renovable, ahorro y desarrollo de proyecto cuando sea necesario.',
      en: 'Technical-economic sizing from demand and hourly profiles. Comparison of alternatives, self-consumption, renewable coverage, savings and project development when needed.'
    },
    highlights: {
      es: [
        'Sistemas Solar Fotovoltaica y bombas de calor aerotérmicas',
        'Geotermia profunda, biomasa e integración de almacenamiento',
        'Híbridos renovables, soluciones singulares e hidrógeno verde'
      ],
      en: [
        'Solar photovoltaic arrays and aerothermal heat pumps',
        'Deep geothermal systems, biomass and thermal storage integration',
        'Renewable hybrids, bespoke building solutions and green hydrogen'
      ]
    },
    software: 'Simulación horaria · Perfiles horarios · Autoconsumo'
  },
  {
    id: 'huella-de-carbono',
    category: {
      es: 'Sostenibilidad de Materiales',
      en: 'Materials & Lifecycle'
    },
    name: {
      es: 'Huella de Carbono',
      en: 'Carbon Footprint'
    },
    badge: {
      es: 'One Click LCA · Carbono Embebido',
      en: 'One Click LCA · Embodied Carbon'
    },
    description: {
      es: 'Modelo ACV del edificio mediante One Click LCA para cuantificar carbono embebido por etapas del ciclo de vida, localizar partidas críticas y comparar materiales y sistemas constructivos con menor impacto.',
      en: 'Building LCA modelling with One Click LCA to quantify embodied carbon by life-cycle stage, pinpoint critical items and compare lower-impact materials and construction systems.'
    },
    highlights: {
      es: [
        'ACV completo de edificio y cuantificación de carbono embebido (A1-A5, B, C)',
        'Trazabilidad mediante Declaraciones Ambientales de Producto (DAP / EPD)',
        'Análisis comparativo de soluciones constructivas de bajo impacto'
      ],
      en: [
        'Whole-building LCA and embodied carbon quantification (A1-A5, B, C)',
        'Full traceability through Environmental Product Declarations (EPD / DAP)',
        'Comparative benchmarking of low-carbon structural and envelope materials'
      ]
    },
    software: 'One Click LCA · Bases Ecoinvent / ITeC'
  }
];

export interface MethodologyStep {
  id: string;
  phase: LocalizedString;
  title: LocalizedString;
  badge: LocalizedString;
  description: LocalizedString;
  workflow: {
    reception: LocalizedString;
    tracking: LocalizedString;
    reviews: LocalizedString;
    delivery: LocalizedString;
  };
  logistics: LocalizedString;
  theme: {
    badgeBg: string;
    badgeText: string;
    borderActive: string;
    cardBg: string;
    accentGlow: string;
  };
  certEvidence?: {
    es: string[];
    en: string[];
  };
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    id: 'met-1',
    phase: {
      es: 'Área Técnica I: Diseño Sostenible & Eficiencia',
      en: 'Technical Area I: Sustainable Design & Efficiency'
    },
    title: {
      es: 'Simulación Paramétrica & Bioclimatismo',
      en: 'Parametric Simulation & Bioclimatic Design'
    },
    badge: {
      es: 'Diseño Pasivo & Envolvente',
      en: 'Passive Envelope & Comfort'
    },
    description: {
      es: 'Consultoría técnica especializada desde fases tempranas y anteproyecto para modelar y maximizar el comportamiento pasivo del edificio. Mediante herramientas de cálculo dinámico horario y análisis paramétrico de variables ambientales, estudio la geometría, orientación, compacidad, transmitancias de envolvente, protecciones solares fijas y móviles, puentes térmicos y ventilación natural cruzada. Estos cálculos exhaustivos reducen la demanda térmica bruta y pueden servir como base técnica para justificar y alcanzar la certificación Passivhaus cuando el proyecto así lo requiere.',
      en: 'Specialized technical consulting from concept and early design stages to model and maximize the passive performance of the building. Using hourly dynamic thermal modeling and parametric multi-variable analysis, I evaluate building massing, orientation, compactness, envelope U-values, fixed and operable solar shading, thermal bridging, and natural cross-ventilation. These in-depth calculations reduce raw thermal demand and can serve as the technical foundation to support and obtain Passivhaus certification when targeted by the project.'
    },
    workflow: {
      reception: {
        es: 'Recepción del modelo tridimensional o planos de arquitectura (IFC, DWG, PDF) junto con la localización exacta, orientación y las premisas arquitectónicas del proyecto.',
        en: 'Receipt of 3D models or architectural drawings (IFC, DWG, PDF) alongside site coordinates, orientation, and fundamental design premises.'
      },
      tracking: {
        es: 'Sesiones periódicas de seguimiento técnico telemático con el equipo de arquitectura para revisar hipótesis de partida, ganancias solares y alternativas bioclimáticas.',
        en: 'Regular technical follow-up meetings with the architectural team to review baseline assumptions, solar gains, and bioclimatic design options.'
      },
      reviews: {
        es: 'Rondas de revisión e iteración según el calendario acordado con el cliente, evaluando el impacto térmico de cada ajuste de huecos, aislamientos y protecciones solares.',
        en: 'Iterative review cycles scheduled with the client, evaluating the thermal impact of every adjustment to glazing, insulation, and solar shading.'
      },
      delivery: {
        es: 'Entrega de informe paramétrico ejecutivo con recomendaciones constructivas priorizadas y archivo nativo del modelo de cálculo térmico.',
        en: 'Delivery of an executive parametric report with prioritized construction recommendations and native thermal simulation model files.'
      }
    },
    logistics: {
      es: 'Coordinación directa y ágil con arquitectos mediante plataforma compartida de intercambio documental. Las sesiones de trabajo se programan en hitos clave de diseño para asegurar que las mejoras pasivas se integren sin demoras antes de congelar el proyecto básico.',
      en: 'Direct, agile coordination with architects via shared technical repository. Follow-up checkpoints are scheduled at key design milestones to ensure passive enhancements are integrated seamlessly before basic design freeze.'
    },
    theme: {
      badgeBg: 'bg-[#e8f5ed]',
      badgeText: 'text-[#1b4332]',
      borderActive: 'border-[#40916c]',
      cardBg: 'bg-[#f7faf8]',
      accentGlow: 'rgba(64, 145, 108, 0.12)'
    }
  },
  {
    id: 'met-2',
    phase: {
      es: 'Área Técnica II: Certificaciones Oficiales',
      en: 'Technical Area II: Official Certifications'
    },
    title: {
      es: 'Simulación, Confort & Evidencias Técnicas',
      en: 'Simulation, Comfort & Technical Evidence'
    },
    badge: {
      es: 'LEED · BREEAM · WELL · ICAEN',
      en: 'LEED · BREEAM · WELL · ICAEN'
    },
    description: {
      es: 'Modelización computacional avanzada tridimensional para la justificación rigurosa de sellos ambientales internacionales y exigencias normativas oficiales. Empleo EnergyPlus para la simulación energética y térmica horaria (8.760 h/año), Radiance para el cálculo óptico de luz natural útil (sDA y ASE) y herramientas CFD para dinámica de fluidos y velocidades de aire interior. Proporciono toda la documentación reglamentaria del CEE oficial para el registro en el ICAEN y registros autonómicos.',
      en: 'Advanced 3D computational modeling for the rigorous verification of international green building rating systems and mandatory code compliance. I deploy EnergyPlus for full-year hourly dynamic thermal modeling (8,760 h/yr), Radiance for spatial daylight autonomy and quality calculations (sDA and ASE), and CFD tools for internal airflow dynamics. I generate all mandatory EPC compliance documentation for registration in ICAEN and regional registries.'
    },
    workflow: {
      reception: {
        es: 'Recepción de memorias técnicas de arquitectura, especificaciones de carpinterías, vidrios, capas de cerramiento y especificaciones de instalaciones mecánicas y eléctricas.',
        en: 'Receipt of architectural specifications, window/glazing schedules, envelope layer build-ups, and mechanical/electrical system schedules.'
      },
      tracking: {
        es: 'Sesiones de coordinación técnica con el Asesor LEED/BREEAM o la dirección de proyecto para validar el encaje de créditos y parámetros de modelado.',
        en: 'Technical coordination meetings with the LEED/BREEAM Assessor or project managers to align credit achievement pathways and baseline assumptions.'
      },
      reviews: {
        es: 'Ajustes y validaciones previas de simulación según el protocolo oficial de cada estándar para blindar el expediente ante posibles auditorías.',
        en: 'Simulation adjustments and pre-validation loops following official standard protocols to eliminate audit review risks.'
      },
      delivery: {
        es: 'Memorias justificativas oficiales, tablas de créditos validadas, archivos nativos de simulación y documentación CEE para el registro en el ICAEN.',
        en: 'Official technical justifications, credit compliance tables, native simulation model files, and EPC documentation for ICAEN registration.'
      }
    },
    logistics: {
      es: 'Interlocución continua con el asesor evaluador externo o la entidad certificadora. Se sincronizan las entregas con el calendario de submission de cada fase (Design Phase y Construction Phase), garantizando trazabilidad completa de los parámetros introducidos en el modelo.',
      en: 'Continuous direct engagement with external certified assessors. Deliverables are synchronized with the submission calendar of each project phase (Design and Construction), providing complete parameter traceability.'
    },
    certEvidence: {
      es: [
        'BREEAM® · SyB1 Confort visual: Simulación de luz natural y comprobación del desempeño.',
        'BREEAM® · SyB2 Calidad del aire interior: Cálculos de ventilación y análisis del comportamiento del aire cuando el alcance lo requiera.',
        'BREEAM® · SyB3 Confort térmico: Simulación térmica, temperaturas operativas y evaluación de confort en espacios ocupados.',
        'BREEAM® · ENE1 Eficiencia Energética: Modelización energética dinámica y análisis de demanda, consumo y estrategias de mejora.',
        'LEED® · EQ Credit: Daylight: Simulación de luz natural útil, cálculo de autonomía espacial de luz natural (sDA) y exposición solar anual (ASE) para optimizar la iluminación diurna minimizando el deslumbramiento.',
        'LEED® · EQ Credit: Thermal Comfort: Evaluación cuantitativa de confort térmico dinámico y temperaturas operativas según los criterios del estándar ASHRAE 55.',
        'LEED® · EA Credit: Optimize Energy Performance: Modelización energética comparativa mediante ASHRAE 90.1 Appendix G (Performance Rating Method) frente al edificio de referencia para justificar la reducción de consumo y maximizar créditos.',
        'WELL v2: Verificación cuantitativa de confort térmico T01/T02 y cálculo de iluminación natural y acceso a la luz diurna L06.',
        'CEE Oficial: Archivos de cálculo oficiales y tramitación administrativa completa para el registro en el ICAEN y registros autonómicos.'
      ],
      en: [
        'BREEAM® · Hea 01 Visual comfort: Daylight simulation and performance verification.',
        'BREEAM® · Hea 02 Indoor air quality: Ventilation calculations and airflow analysis as required by scope.',
        'BREEAM® · Hea 04 Thermal comfort: Thermal simulation, operative temperatures, and occupied zone comfort assessment.',
        'BREEAM® · Ene 01 Energy efficiency: Dynamic energy modeling, demand/consumption analysis, and improvement strategies.',
        'LEED® · EQ Credit: Daylight: Spatial daylight autonomy (sDA) and annual sunlight exposure (ASE) simulation to maximize daylight while avoiding glare.',
        'LEED® · EQ Credit: Thermal Comfort: Quantitative thermal comfort modeling and operative temperatures following ASHRAE Standard 55.',
        'LEED® · EA Credit: Optimize Energy Performance: Comparative whole-building energy modeling using ASHRAE 90.1 Appendix G (Performance Rating Method) against the baseline building to prove energy savings and maximize points.',
        'WELL v2: Quantitative thermal comfort modeling T01/T02 and daylight access calculations L06.',
        'Official EPC: Mandatory regulatory calculation models and full documentation for registration in ICAEN and regional boards.'
      ]
    },
    theme: {
      badgeBg: 'bg-[#f1f3f2]',
      badgeText: 'text-[#2d3436]',
      borderActive: 'border-[#718096]',
      cardBg: 'bg-[#f8f9fa]',
      accentGlow: 'rgba(113, 128, 150, 0.12)'
    }
  },
  {
    id: 'met-3',
    phase: {
      es: 'Área Técnica III: Rehabilitación Energética',
      en: 'Technical Area III: Energy Renovation'
    },
    title: {
      es: 'Gemelo Digital Energético & Retrofit',
      en: 'Energy Digital Twin & Retrofit'
    },
    badge: {
      es: 'Descarbonización & CAE',
      en: 'Decarbonization & CAE'
    },
    description: {
      es: 'Creación y ajuste de gemelos digitales computacionales de edificios existentes para planificar intervenciones de rehabilitación con base empírica. Calibro el modelo térmico con las facturas energéticas reales según protocolos y estándares de calibración reconocidos. A partir de este modelo de referencia, evalúo el impacto real de mejorar aislamientos, carpinterías, protecciones solares y sistemas de climatización, cuantificando la reducción neta de kWh/año, el CAPEX estimado y el retorno de inversión (ROI). Este análisis riguroso puede servir para justificar y obtener Certificados de Ahorro Energético (CAE).',
      en: 'Creation and calibration of computational building digital twins for existing assets to plan deep energy retrofits with empirical accuracy. I calibrate the dynamic thermal model against actual utility consumption data under recognized international calibration protocols. From this calibrated baseline, I simulate envelope insulation upgrades, window replacements, solar control, and heat pump integrations, quantifying net annual kWh savings, estimated CAPEX, and return on investment (ROI). This rigorous assessment can serve to verify and obtain official Energy Savings Certificates (CAE).'
    },
    workflow: {
      reception: {
        es: 'Recopilación de planos del estado actual, inspección técnica documental y series históricas de facturación energética mensual/horaria.',
        en: 'Collection of existing building as-built drawings, technical site documentation, and historical utility billing data.'
      },
      tracking: {
        es: 'Sesiones de revisión del modelo base calibrado para cotejar perfiles de uso, ocupación real y pautas de consumo con la propiedad.',
        en: 'Review meetings on the calibrated baseline model to reconcile operational occupancy schedules and actual tenant patterns.'
      },
      reviews: {
        es: 'Simulación paramétrica de paquetes de medidas (envolvente, HVAC, renovables) acordadas con el cliente para priorizar inversiones.',
        en: 'Parametric simulation of energy conservation measure (ECM) packages agreed with the client to prioritize capital spending.'
      },
      delivery: {
        es: 'Informe técnico comparativo con matrices de ahorro, rentabilidad financiera, reducción de emisiones y memoria técnica para CAE.',
        en: 'Comparative technical report with savings matrices, financial payback periods, emissions reductions, and CAE documentation.'
      }
    },
    logistics: {
      es: 'Organización flexible de la toma de datos mediante cuestionarios técnicos estructurados y sesiones telemáticas con los gestores del inmueble. El cronograma prioriza la entrega de escenarios preliminares para la toma de decisiones de inversión presupuestaria de la propiedad o fondo de inversión.',
      en: 'Structured data collection via technical questionnaires and virtual workshops with facility managers. The timeline prioritizes early preliminary scenarios to assist immediate capital allocation decisions by asset owners.'
    },
    theme: {
      badgeBg: 'bg-[#e8f5ed]',
      badgeText: 'text-[#1b4332]',
      borderActive: 'border-[#40916c]',
      cardBg: 'bg-[#f7faf8]',
      accentGlow: 'rgba(64, 145, 108, 0.12)'
    }
  },
  {
    id: 'met-4',
    phase: {
      es: 'Área Técnica IV: Instalaciones Renovables',
      en: 'Technical Area IV: Renewable Installations'
    },
    title: {
      es: 'Instalaciones Renovables: Diseño & Proyecto',
      en: 'Renewable Systems: Design & Engineering'
    },
    badge: {
      es: 'Solar FV · Aerotermia · Geotermia · Biomasa',
      en: 'Solar PV · Heat Pumps · Geothermal · Biomass'
    },
    description: {
      es: 'Diseño, cálculo y dimensionamiento técnico-económico de sistemas de generación renovable de alta eficiencia, partiendo de la curva horaria real de demanda térmica y eléctrica del activo. Diseño todas estas tipologías de instalaciones: solar fotovoltaica en cubierta y fachada para autoconsumo individual o colectivo, aerotermia y bombas de calor de alta eficiencia, geotermia de baja entalpía con campo de captación cerrado, calderas y redes de biomasa, sistemas híbridos centralizados y almacenamiento electroquímico o térmico. Desarrollo los balances de cobertura horaria, esquemas de principio y memorias de dimensionamiento para proyecto.',
      en: 'Engineering design, calculation, and techno-economic sizing of high-performance renewable generation systems, based on actual 8,760-hour building thermal and electrical load profiles. I design all these installation typologies: rooftop and facade solar PV for individual or collective self-consumption, high-efficiency aerothermal heat pumps, low-enthalpy geothermal closed-loop borehole fields, biomass boiler systems, centralized hybrid systems, and thermal or battery energy storage. I develop full hourly balance charts, system schematics, and sizing calculations for tender.'
    },
    workflow: {
      reception: {
        es: 'Recepción de curvas de demanda horaria del edificio, superficies disponibles en cubierta o terreno y especificaciones de acometidas de red.',
        en: 'Receipt of calculated building load profiles, available roof/ground space, and electrical/utility connection specifications.'
      },
      tracking: {
        es: 'Sesiones técnicas con los ingenieros de instalaciones MEP y proyectistas para definir la configuración óptima y puntos de interconexión.',
        en: 'Technical design meetings with MEP engineers and lead designers to establish optimal system architectures and connection interfaces.'
      },
      reviews: {
        es: 'Contraste de esquemas hidráulicos y eléctricos, potencias nominales, acumulación y coeficientes de rendimiento estacional (SCOP/SEER).',
        en: 'Review of hydraulic and electrical schematics, nominal capacities, storage volumes, and seasonal performance factors (SCOP/SEER).'
      },
      delivery: {
        es: 'Memoria técnica de cálculo, balance anual horario de producción y consumo, esquemas de principio y especificaciones de equipos para proyecto.',
        en: 'Technical calculation report, annual hourly production/demand balance, single-line schematics, and equipment data sheets for project design.'
      }
    },
    logistics: {
      es: 'Integración fluida con el proyectista de instalaciones y el equipo de arquitectura. Facilito archivos de cálculo transparentes y esquemas de conexión claros para que puedan incorporarse directamente a la memoria y los planos del proyecto ejecutivo sin retrabajos.',
      en: 'Seamless collaboration with MEP consultants and architecture leads. I provide transparent calculation worksheets and clean schematics ready for direct integration into executive project specifications.'
    },
    theme: {
      badgeBg: 'bg-[#f1f3f2]',
      badgeText: 'text-[#2d3436]',
      borderActive: 'border-[#718096]',
      cardBg: 'bg-[#f8f9fa]',
      accentGlow: 'rgba(113, 128, 150, 0.12)'
    }
  },
  {
    id: 'met-5',
    phase: {
      es: 'Área Técnica V: Huella de Carbono',
      en: 'Technical Area V: Carbon Footprint'
    },
    title: {
      es: 'Huella de Carbono & Análisis de Ciclo de Vida',
      en: 'Carbon Footprint & Life Cycle Assessment'
    },
    badge: {
      es: 'One Click LCA · EN 15978',
      en: 'One Click LCA · EN 15978'
    },
    description: {
      es: 'Evaluación integral del ciclo de vida del edificio (Whole Building LCA) bajo normativa europea EN 15978 e ISO 14040/44 mediante software especializado One Click LCA. Cuantifico con exactitud matemática el carbono embebido en las fases de producto (A1-A3), construcción (A4-A5), uso y mantenimiento (B1-B5) y fin de vida (C1-C4). Identifico los elementos con mayor impacto de la estructura y la envolvente, prescribiendo alternativas de bajo carbono respaldadas por Declaraciones Ambientales de Producto (DAP / EPD) con trazabilidad verificable.',
      en: 'Comprehensive Whole Building Life Cycle Assessment (LCA) in compliance with European standards EN 15978 and ISO 14040/44 using certified One Click LCA tools. I calculate embodied carbon across the product manufacturing stage (A1-A3), construction process (A4-A5), building in-use maintenance and replacement (B1-B5), and end-of-life deconstruction (C1-C4). I pinpoint carbon-intensive structural and envelope elements, specifying low-carbon alternatives supported by verified Environmental Product Declarations (EPD / DAP).'
    },
    workflow: {
      reception: {
        es: 'Recepción del estado de mediciones del proyecto (BIM, Presto, Excel o presupuestos detallados) con cubicaciones y especificaciones de materiales.',
        en: 'Receipt of bill of quantities (BIM schedules, Excel spreadsheets, or detailed cost breakdowns) with material volumes and specifications.'
      },
      tracking: {
        es: 'Sesiones de trabajo con la dirección facultativa o la constructora para validar orígenes de materiales y distancias de transporte.',
        en: 'Working sessions with lead architects or general contractors to verify material sourcing and realistic transport distances.'
      },
      reviews: {
        es: 'Comparativa iterativa de variantes constructivas (hormigón de bajo carbono, maderas certificadas, aislamientos biobasados) según acuerdo con el cliente.',
        en: 'Iterative evaluation of alternative assemblies (low-carbon concrete, certified timber, bio-based insulations) as agreed with the client.'
      },
      delivery: {
        es: 'Informe oficial de ACV con desglose de kg CO₂e/m², gráficos de distribución por etapas, certificados de DAPs y resumen ejecutivo.',
        en: 'Official LCA report with kg CO₂e/m² breakdowns, stage distribution charts, certified EPD verifications, and executive summary.'
      }
    },
    logistics: {
      es: 'Proceso estructurado de mapeo de materiales asistido por bases de datos oficiales (Ecoinvent, ITeC y EPDs verificadas). Se realizan revisiones progresivas en paralelo con las actualizaciones de mediciones de obra para mantener la huella de carbono siempre actualizada.',
      en: 'Structured material mapping protocol backed by official databases (Ecoinvent, ITeC, verified EPD registries). Progressive reviews run parallel to bill-of-quantities updates, keeping embodied carbon accounts audit-ready.'
    },
    theme: {
      badgeBg: 'bg-[#e8f5ed]',
      badgeText: 'text-[#1b4332]',
      borderActive: 'border-[#40916c]',
      cardBg: 'bg-[#f7faf8]',
      accentGlow: 'rgba(64, 145, 108, 0.12)'
    }
  }
];

export interface ValueCard {
  id: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  detail: LocalizedString;
  highlight: LocalizedString;
}

export const VALUES: ValueCard[] = [
  {
    id: 'rapidez',
    title: {
      es: 'Entregas Rápidas',
      en: 'Fast Delivery'
    },
    shortDesc: {
      es: 'Agilidad en los plazos con máxima calidad asegurada mediante IA y automatización.',
      en: 'Agile turnaround times with guaranteed high quality through AI and automated workflows.'
    },
    detail: {
      es: 'Mi metodología integra herramientas de IA avanzada como Claude, Google AI Studio y NotebookLM, combinadas con la automatización de flujos técnicos y scripts propios, lo que permite optimizar y acelerar drásticamente los plazos de entrega garantizando el máximo rigor normativo y físico.',
      en: 'My methodology integrates advanced AI tools such as Claude, Google AI Studio, and NotebookLM, combined with technical workflow automation and custom scripts, drastically accelerating delivery times while ensuring maximum physical and regulatory rigor.'
    },
    highlight: {
      es: 'Automatizaciones IA · Claude & Google AI Studio · NotebookLM',
      en: 'AI Automations · Claude & Google AI Studio · NotebookLM'
    }
  },
  {
    id: 'experiencia',
    title: {
      es: 'Experiencia Técnica',
      en: 'Technical Experience'
    },
    shortDesc: {
      es: 'Trayectoria sólida en proyectos de éxito contrastado y modelos de alta complejidad.',
      en: 'Solid track record in proven, successful projects and high-complexity simulations.'
    },
    detail: {
      es: '4 años de experiencia técnica especializada en certificación energética de edificios, diseño avanzado de sistemas fotovoltaicos, dimensionamiento de infraestructura eléctrica y gestión integral de proyectos multidisciplinares.',
      en: '4 years of specialized technical experience in building energy certification, advanced photovoltaic system engineering, electrical infrastructure sizing, and multidisciplinary project management.'
    },
    highlight: {
      es: '4 años de experiencia · Residencial & Terciario · Modelos Validados',
      en: '4 years experience · Residential & Commercial · Validated Models'
    }
  },
  {
    id: 'confianza',
    title: {
      es: 'Confianza & Rigor',
      en: 'Trust & Rigour'
    },
    shortDesc: {
      es: 'Relación profesional basada en la transparencia absoluta de cada cálculo.',
      en: 'Professional partnership built on total transparency and auditable data.'
    },
    detail: {
      es: 'Transparencia absoluta en cada cálculo y modelización. Todos los resultados son verificables mediante informes técnicos detallados, modelos 3D abiertos y soporte técnico continuo durante todas las fases del proyecto.',
      en: 'Complete transparency in every calculation and simulation. All results are fully verifiable through detailed technical reports, open 3D model sources, and continuous engineering support across all project stages.'
    },
    highlight: {
      es: 'Resultados auditables · Informes ejecutivos · Soporte continuo',
      en: 'Auditable results · Executive reports · Continuous support'
    }
  }
];

export interface EducationItem {
  institution: string;
  institutionUrl: string;
  items: Array<{
    title: LocalizedString;
    url: string;
  }>;
}

export const EDUCATION_DATA: { upc: EducationItem; upcSchool: EducationItem } = {
  upc: {
    institution: 'Universitat Politècnica de Catalunya - ETSEIB',
    institutionUrl: 'https://www.upc.edu/es',
    items: [
      {
        title: {
          es: 'Máster en Ingeniería de la Energía',
          en: "Master's in Energy Engineering"
        },
        url: 'https://www.upc.edu/es/masteres/ingenieria-de-la-energia'
      },
      {
        title: {
          es: 'Grado en Ingeniería en Tecnologías Industriales (PARS ETSEIB)',
          en: "Bachelor's in Industrial Technologies Engineering"
        },
        url: 'https://www.upc.edu/es/grados/ingenieria-en-tecnologias-industriales-master-universitario-en-ingenieria-industrial-programa-academico-de-recorrido-sucesivo-pars-ingeniero-a-industrial-barcelona-etseib'
      }
    ]
  },
  upcSchool: {
    institution: 'UPC School',
    institutionUrl: 'https://www.talent.upc.edu/esp/',
    items: [
      {
        title: {
          es: 'Microcredencial en IA aplicada a la Construcción',
          en: 'Microcredential in AI Applied to Construction'
        },
        url: 'https://upcschool.upc.edu/esp/estudis/formacio/curs/713902/microcredencial-intelligencia-artificial-aplicada-construccio/'
      },
      {
        title: {
          es: 'Postgrado en Arquitectura Bioclimática y Regenerativa',
          en: 'Postgraduate in Bioclimatic and Regenerative Architecture'
        },
        url: 'https://upcschool.upc.edu/esp/estudis/formacio/curs/326800/postgrau-arquitectura-bioclimatica-regenerativa/?utm_source=6432_Arquitectura_Microsite&utm_medium=cpc&utm_campaign=arquitectura_bioclimatica&gad_source=1&gad_campaignid=23096268866&gbraid=0AAAAAD8l-eoESwPq_e6FaPB01POwUFqqo&gclid=Cj0KCQiAyP3KBhD9ARIsAAJLnnb8gjrc4NsXomlzTO3QhAK8vqxggwo9lnBJuHuIx9Hc5-bzKPzzE7caAibWEALw_wcB'
      }
    ]
  }
};

export interface HeroBenefit {
  id: string;
  title: LocalizedString;
  desc: LocalizedString;
  stat: string;
  statLabel: LocalizedString;
}

export const HERO_BENEFITS: HeroBenefit[] = [
  {
    id: 'datos',
    title: {
      es: 'Decisiones con datos, no con intuición',
      en: 'Data-driven decisions, not intuition'
    },
    desc: {
      es: 'Optimización paramétrica temprana de orientación, envolvente, huecos y protecciones solares.',
      en: 'Early parametric optimization of orientation, envelope, glazing, and solar shading.'
    },
    stat: '10x',
    statLabel: { es: 'Opciones evaluadas', en: 'Options evaluated' }
  },
  {
    id: 'certificaciones',
    title: {
      es: 'Certificaciones sin sorpresas',
      en: 'Certifications without surprises'
    },
    desc: {
      es: 'Máxima solvencia técnica y puntuación asegurada en créditos de energía y confort LEED, BREEAM y WELL.',
      en: 'Maximum technical solvency and points secured in LEED, BREEAM, and WELL energy credits.'
    },
    stat: 'Tier 1',
    statLabel: { es: 'Evidencias certificadas', en: 'Certified evidence' }
  },
  {
    id: 'ahorro',
    title: {
      es: 'Ahorro medido no prometido',
      en: 'Measured savings, not promised'
    },
    desc: {
      es: 'Hasta un 45% de reducción real en demandas térmicas y costes de explotación (OPEX).',
      en: 'Up to 45% verified reduction in thermal demands and operational costs (OPEX).'
    },
    stat: '-45%',
    statLabel: { es: 'Demanda energética', en: 'Energy demand' }
  },
  {
    id: 'normativa',
    title: {
      es: 'Cumplimiento normativo resuelto',
      en: 'Regulatory compliance resolved'
    },
    desc: {
      es: 'Cumplimiento matemático garantizado de CTE DB-HE y CEE para el registro en el ICAEN sin desvíos.',
      en: 'Guaranteed mathematical compliance with building codes and EPC for ICAEN registration.'
    },
    stat: '100%',
    statLabel: { es: 'Cumplimiento', en: 'Compliance' }
  },
  {
    id: 'carbono',
    title: {
      es: 'Huella de carbono bajo control',
      en: 'Carbon footprint under control'
    },
    desc: {
      es: 'Cálculo exhaustivo de carbono embebido (ACV) e integración óptima de generación renovable.',
      en: 'Thorough embodied carbon calculation (LCA) and optimal renewable integration.'
    },
    stat: 'Net-0',
    statLabel: { es: 'Ruta descarbonización', en: 'Decarbonization path' }
  }
];

export interface IndustryBadge {
  name: string;
  category: string;
  description: string;
}

export const INDUSTRY_BADGES: IndustryBadge[] = [
  { name: 'EnergyPlus', category: '', description: 'Motor de cálculo dinámico DOE' },
  { name: 'Radiance', category: '', description: 'Simulación de luz natural y sDA' },
  { name: 'DesignBuilder', category: '', description: 'Interfaz gráfica de simulación térmica' },
  { name: 'TeKton 3D', category: '', description: 'Cálculo y justificación CTE DB-HE' },
  { name: 'CYPETHERM HE Plus', category: '', description: 'Certificación oficial CTE y CEE' },
  { name: 'AutoCAD', category: '', description: 'Diseño arquitectónico y detalle BIM/CAD' }
];

export interface FaqItem {
  id: string;
  category: LocalizedString;
  question: LocalizedString;
  answer: LocalizedString;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'fase-anteproyecto',
    category: { es: 'Fases', en: 'Stages' },
    question: {
      es: '¿En qué fase del proyecto es más rentable la simulación energética?',
      en: 'At what stage is building energy simulation most cost-effective?'
    },
    answer: {
      es: 'En anteproyecto o concurso. Ajustar orientación, compacidad y huecos en fase inicial cuesta cero y reduce hasta un 40% la demanda térmica. También intervengo en proyecto básico, ejecutivo y rehabilitación.',
      en: 'At concept or tender stage. Adjusting massing, orientation, and glazing early costs nothing and saves up to 40% thermal demand. I also intervene during executive design and renovations.'
    }
  },
  {
    id: 'documentacion-necesaria',
    category: { es: 'Datos', en: 'Data' },
    question: {
      es: '¿Qué documentación técnica se necesita para arrancar?',
      en: 'What technical documentation is needed to start?'
    },
    answer: {
      es: 'Planos de arquitectura (DWG o PDF con plantas, alzados y secciones) y ubicación del solar. Si el proyecto está avanzado, sumo memoria de carpinterías, aislamiento e instalaciones.',
      en: 'Architectural drawings (DWG or PDF with plans, elevations, sections) and location. If design is advanced, I add envelope specs and HVAC schematics.'
    }
  },
  {
    id: 'coordinacion-sellos',
    category: { es: 'Sellos', en: 'Labels' },
    question: {
      es: '¿Cómo coordinas las evidencias con el Asesor BREEAM y LEED AP?',
      en: 'How do you coordinate simulation evidence with the BREEAM Assessor and LEED AP?'
    },
    answer: {
      es: 'Colaboro directamente con el Asesor BREEAM y LEED AP, entregando memorias justificativas oficiales, tablas de resultados y modelos nativos validados según estándares USGBC, BRE o IWBI sin fricciones.',
      en: 'I collaborate directly with the BREEAM Assessor and LEED AP, providing official compliance reports, summary tables, and native models compliant with USGBC, BRE, or IWBI standards without friction.'
    }
  },
  {
    id: 'diferencia-cte',
    category: { es: 'Valor', en: 'Value' },
    question: {
      es: '¿Por qué hacer simulación dinámica si ya cumplo el Código Técnico (CTE)?',
      en: 'Why dynamic simulation if the building already meets building codes?'
    },
    answer: {
      es: 'Las herramientas normativas usan promedios estáticos y no detectan sobrecalentamiento real en verano ni disconfort horario. La simulación horaria (8.760 h/año) evita sobredimensionar equipos y garantiza confort real.',
      en: 'Prescriptive tools use static averages and miss summer overheating and hourly discomfort. Dynamic hourly modeling (8,760 hrs/yr) prevents oversized equipment and ensures genuine comfort.'
    }
  },
  {
    id: 'plazos-entrega',
    category: { es: 'Plazos', en: 'Timelines' },
    question: {
      es: '¿Cuáles son los plazos habituales de entrega?',
      en: 'What are the typical delivery timelines?'
    },
    answer: {
      es: 'Las simulaciones energéticas tienen un plazo máximo de 18 días laborables, dependiendo siempre de la tipología, escala y complejidad del proyecto. Para estudios preliminares de anteproyecto o comparativas paramétricas ágiles, las entregas se realizan habitualmente en 5-7 días laborables gracias a mis flujos automatizados.',
      en: 'Energy simulations are completed within a maximum of 18 working days, depending on the project typology, scale, and complexity. For preliminary concept studies or agile parametric comparisons, deliveries typically take 5-7 working days thanks to my automated workflows.'
    }
  }
];

export interface FooterContent {
  customerCare: {
    title: LocalizedString;
    desc: LocalizedString;
    badge: LocalizedString;
    trustBullets: {
      es: string[];
      en: string[];
    };
  };
  ourStory: {
    title: LocalizedString;
    desc: LocalizedString;
  };
}

export const FOOTER_CONTENT: FooterContent = {
  customerCare: {
    title: {
      es: 'Atención al Cliente & Asesoría Técnica',
      en: 'Customer Care & Tech Support'
    },
    desc: {
      es: 'Soporte técnico directo y cercano para tu proyecto.',
      en: 'Direct technical support and guidance for your project.'
    },
    badge: {
      es: 'Asesoría Técnica',
      en: 'Technical Support'
    },
    trustBullets: {
      es: [
        'Trato directo conmigo',
        'Defensa técnica en auditorías',
        'Modelos nativos y abiertos'
      ],
      en: [
        'Direct contact with me',
        'Technical defense in audits',
        'Open and native models'
      ]
    }
  },
  ourStory: {
    title: {
      es: 'Nuestra Historia · IBNB',
      en: 'Our Story · IBNB'
    },
    desc: {
      es: 'IBNB nace de la confluencia entre la ingeniería industrial rigurosa, la arquitectura bioclimática y la analítica computacional avanzada. Con 4 años de experiencia técnica modelizando activos singulares, fundé IBNB para ofrecer una herramienta de precisión matemática: simular antes de construir para diseñar los edificios del mañana.',
      en: 'IBNB was founded at the crossroads of rigorous industrial engineering, bioclimatic architecture, and advanced computational analytics. With 4 years of specialized technical experience, I founded IBNB to equip teams with mathematical precision: simulate before you build to shape the cities of tomorrow.'
    }
  }
};
