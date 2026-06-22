import { Project, MaterialSample, SkillCategory, CareerMilestone } from './types';

export const PERSONAL_INFO = {
  name: 'Mohammad Bawadi',
  nameAr: 'محمد بوادي',
  title: 'Senior Interior Designer & Technical Draftsman',
  titleAr: 'مصمم داخلي ومخطط تقني محترف',
  location: 'Amman, Jordan',
  locationAr: 'عمان، الأردن',
  email: 'bawadimohammad4@gmail.com',
  emailAlt: 'bawadimohammad70@gmail.com',
  phone: '+962 70092547',
  portfolioOwner: 'Mohammad Bawadi',
  experienceYears: 5,
  instagram: 'mohammadr.bawadi',
  bio: `I'm Mohammad Bawadi, a highly specialized interior designer and draftsperson with over five years of active expertise in turning bold spatial visions into executive reality. My work is defined by the fluid integration of jaw-dropping organic luxury (epitomized by the 'Red Inferno' mood) and uncompromising technical draft accuracy (including precise CAD shop drawings, banquette details, complex plumbing cross-sections, and radial space planning). I bridge the gap between high-concept visual artistry and on-site building execution.`,
  bioAr: `أنا محمد بوادي، مصمم داخلي ومخطط تقني أمتلك خبرة تتجاوز الخمس سنوات في تحويل الرؤى الفراغية الجريئة إلى واقع تنفيذي ملموس. يتميز عملي بالدمج الانسيابي بين الفخامة العضوية الساحرة (التي يجسدها طابع "Red Inferno") والدقة التقنية المتناهية للمخططات التنفيذية (بما في ذلك التفاصيل المعمارية الدقيقة CAD، المقاطع الإنشائية للأثاث، مخططات السباكة المعقدة، والتخطيط الفراغي الدائري). أنا هنا لأجسر الفجوة بين الفن التصوري المبهر والتنفيذ الواقعي الدقيق على أرض الموقع.`
};

export const PROJECTS: Project[] = [
  {
    id: 'red-inferno-reception',
    title: 'The Red Inferno Reception Lobby',
    titleAr: 'ردهة استقبال "ريد إنفيرنو" العضوية',
    category: 'visual',
    subcategory: 'Hospitality Design',
    description: 'A premium luxury hotel reception featuring a sweeping, layered fluid timber ceiling. Custom ambient LED ribbon curves trace the ceiling contours, reflecting on polished marble and a deep burgundy velvet circular banquette. Completed with bespoke organic columns and active greenery integration.',
    descriptionAr: 'ردهة استقبال لفندق فاخر تتميز بسقف خشبي تموجي انسيابي متعدد الطبقات. خطوط إضاءة LED مدمجة تتبع الانحناءات العضوية لتنعكس بجمالية على الأرضيات الرخامية اللامعة والكنب الدائري من القطيفة الفاخرة بلون البرغندي الداكن مع دمج عناصر الخضرة الطبيعية.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200', // Elegantly matches high-end hotel lobby
    tags: ['Fluid Wood', 'Ribbon Lighting', 'Hospitality', 'Organic Luxury'],
    dimensions: '180m²',
    materials: ['American Fluted Walnut', 'Red Inferno Velvet', 'Calacatta Violace Marble', 'Polished Brass'],
    features: ['Layered CNC-milled ceiling panels', 'Custom illuminated curve channels', 'Integrated plant bed system']
  },
  {
    id: 'radial-washstand',
    title: 'Radial Multi-Basin Washstand',
    titleAr: 'وحدة غسيل الأيدي الدائرية المتكاملة',
    category: 'technical',
    subcategory: 'Commercial Retail / Sanitary Shop Drawing',
    description: 'A masterpiece bathroom vanity layout featuring an octagonal design center. Clad in premium deep glazed vertical maroon tiles, brushed brass tall arch high-flow faucets, round bronze-tinted vanity mirrors, and radial multi-level floor marble paving.',
    descriptionAr: 'تصميم مبتكر ورائد لوحدة غسيل الأيدي والمرايا في فراغ تجاري فاخر يعتمد على توزيع ثماني متماثل. مكسوة بالكامل بالبلاط المصقول البرغندي الطولي، مع خلاطات قوسية مرتفعة من النحاس المصقول، مضافاً إليها مرايا برونزية دائرية وأرضية هندسية بنمط رخامي دائري.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
    tags: ['Radial Sinks', 'Deep Burgundy Tile', 'CNC Marble Paving', 'Brass Fixtures'],
    dimensions: '45m²',
    materials: ['Handmade Maroon Ceramic Tiles', 'Aura Brass Faucets', 'Red Circles Pattern Carpet/Marble', 'Frameless Octagon Mirror Core'],
    features: ['Central plumbing column distribution', '360-degree radial user flow', 'Hidden structural support anchors'],
    technicalDetails: {
      scale: '1:25 / 1:5',
      drawnBy: 'Mohammad Bawadi',
      sheetNo: 'SD-001',
      date: '2024-10-26',
      notes: [
        'Basin-to-support steel plate connections secured with double-locked M12 anchor bolts.',
        'Continuous hot/cold circulation pipelines run centrally within the concrete column core.',
        'Detail 5: Floor support structure must utilize absolute level calibration with polyurethane rubber dampeners.'
      ]
    }
  },
  {
    id: 'stepped-restaurant',
    title: 'The Skyview Stepped Restaurant',
    titleAr: 'مطعم الإطلالة المرتفعة الفاخر ذو المستويات',
    category: 'visual',
    subcategory: 'Hospitality Dinner Club',
    description: 'Luxury hospitality layout featuring descending circular marble booths partitioned by curved terrazzo and marble steps. Centered by a massive preserved bonsai pine tree and illuminated by ring pendant chandeliers, boasting glass facades with skyscraper views.',
    descriptionAr: 'تصميم مطعم فاخر بمستويات متدرجة يعتمد على كبائن جلوس دائرية معزولة بجدران من التيرازو الرخامي الفاخر. يتوسط الفراغ شجرة بونساي عملاقة محفوظة مع ثريات معلقة بأشكال حلقات سماوية وإطلالة زجاجية بانورامية ساحرة على ناطحات السحاب.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200',
    tags: ['Restaurant Design', 'Bonsai Island', 'Ring Lights', 'Terrazzo Steps'],
    dimensions: '350m²',
    materials: ['Nero Marquina Marble', 'Plush Wine-Red Velvet', 'Preserved Pine Bonsai', 'Warm Brushed Gold'],
    features: ['Tiered acoustic floor steps', 'Curved custom banquette seating', 'Integrated low-voltage step illumination']
  },
  {
    id: 'banquette-detail',
    title: 'Banquette Seat Executive Section',
    titleAr: 'المخطط التنفيذي التفصيلي لمقاعد البولمان',
    category: 'technical',
    subcategory: 'Execution Shop Drawing / Joinery',
    description: 'High-detail standard joinery drawing package specifying precise material build layers: wood framework blocking, foam density, upholstered luxury fabric, led strip channels concealed in the plywood substrate skirting, and plaster wall interface transition.',
    descriptionAr: 'مخطط تنفيذي تفصيلي عالي الدقة لقطاع الكنب المتصل (البولمان)، يحدد بدقة طبقات المواد: هيكل الخشب السويدي، كثافة الفوم الإسفنجي، أقمشة التنجيد المخملية الفاخرة، مجاري إضاءة LED المخفية والمدمجة بقاعدة الخشب الرقائقي، مع معالجة نقطة الالتقاء بحائط الجبس المائل.',
    imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200',
    tags: ['Joinery Detail', 'LED Skirting', 'Upholstered Layers', 'CAD Standard'],
    dimensions: 'N/A (Detail Scale 1:1")',
    materials: ['Solid Softwood blocking', 'High-Resiliency Polyurethane Foam', 'American Cherry Veneer Cladding', 'Extruded Aluminium LED channel'],
    features: ['Integrated magnetic drivers access panel', 'Breathing ventilation slots underneath', 'Custom hidden screw-binding joints'],
    technicalDetails: {
      scale: '1:10 / 1:2',
      drawnBy: 'Mohammad Bawadi',
      sheetNo: 'A-501',
      date: '2024-10-26',
      notes: [
        'Provide protective thermal isolation wrap around LED drivers.',
        'Foam layer must utilize layered density: 30kg/m³ back, 45kg/m³ seat core.',
        'Continuous plywood substrate must be marine-grade water resistant.'
      ]
    }
  },
  {
    id: 'watercolor-pavilion',
    title: 'Two-Story Pavilion Section & Watercolor Elevations',
    titleAr: 'مجسم المقطع والتصاميم المائية للسرادق ثنائي الطوابق',
    category: 'sketch',
    subcategory: 'Conceptual Architecture & Watercolor Elevations',
    description: 'Conceptual glass-and-timber structure cross-sections using a highly artistic sepia terracotta watercolor technique. Showing light penetration angles, interior spatial relationships across levels, and meticulously scaled human silhouettes.',
    descriptionAr: 'مجموعة رسومات ومقاطع معمارية مائية ملونة بتقنية السيبيا وتدرجات الألوان الطينية المعتقة لسرادق حديث من الزجاج والكتل الخشبية. يعرض زوايا تغلغل الإضاءة النهارية، والعلاقات الفراغية بين المستويين مع مقياس بشري مرسوم بدقة فائقة.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Watercolor Wash', 'Sepia Rendering', 'Pavilion Section', 'Scale Studies'],
    dimensions: '420m²',
    materials: ['Douglas Fir Timbers', 'Structural Low-E Glazing', 'Raw Concrete Plinth', 'Terracotta Tile Floor'],
    features: ['Double-height structural portals', 'Watercolor sky wash backdrop', 'Detailed louvre shading controls']
  },
  {
    id: 'classic-boutique',
    title: 'Arched Retail Boutique & Sweeping Columns',
    titleAr: 'بوتيك راقي بنمط الأقواس والأعمدة الانسيابية',
    category: 'visual',
    subcategory: 'Commercial Retail / Fashion Store',
    description: 'A luxurious retail environment blending grand classical arches, custom organic sweeping column transitions in coral pink tones, beautiful cherry blossom botanical installations, and fluted displays reflecting maximum visual branding impact.',
    descriptionAr: 'معرض ملابس وأزياء تجاري يجمع بشكل ساحر بين الأقواس المعمارية الكلاسيكية المهيبة والجسور والأعمدة المتكاملة المتموجة باللون المرجاني، مع زهرة الكرز الطبيعية وثريات كريستال معلقة تمنح تجربة تسوق راقية لا تُنسى.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    tags: ['Classical Arches', 'Coral Column', 'Custom Chandeliers', 'Retail Display'],
    dimensions: '145m²',
    materials: ['Fluted Plaster Columns', 'Terrazzo Flooring', 'Polished Brass Display Rods', 'High-CRI Spotlights'],
    features: ['Curved organic ceiling portals', 'Immersive cosmetic product cloches', 'Invisible back-of-house storage entry']
  }
];

export const MATERIAL_BOARD_SAMPLES: MaterialSample[] = [
  {
    id: 'pantone-crimson',
    name: 'Red Inferno (Pantone 4975C)',
    nameAr: 'أحمر الجحيم (بانتون 4975C)',
    type: 'Velvet Textile / Accent Theme Color',
    hex: '#4E000D',
    description: 'The defining visual weight of our portfolio. Rich, deep burgundy/wine velvet fabric that creates extreme luxury, absorption of lighting reflection, and warm acoustic damping in commercial spaces.',
    texturePattern: 'velvet'
  },
  {
    id: 'fluted-walnut',
    name: 'Ribbed Smoked Walnut',
    nameAr: 'خشب الجوز المضلّع داكن المدخن',
    type: 'Wall Panelling / Woodwork',
    hex: '#3E2E23',
    description: 'Vertically slatted custom wood casing that provides strong linear rhythms, hiding seamless access doors and integrating integrated background light pathways.',
    texturePattern: 'walnut'
  },
  {
    id: 'brushed-gold',
    name: 'Antique Brushed Brass',
    nameAr: 'نحاس عريق مطفأ مسترجع',
    type: 'Metallic Trim / Lighting Details',
    hex: '#C5A059',
    description: 'Slightly reflective, warm metallic details tracing the organic curves of the joinery and highlighting transitions between materials.',
    texturePattern: 'brass'
  },
  {
    id: 'red-circle-marble',
    name: 'Calacatta Violace & Rosa Marble',
    nameAr: 'رخام كالاكاتا البنفسجي والوردي الفاخر',
    type: 'Flooring / Custom Intarsia',
    hex: '#EADCD9',
    description: 'Stunning white arabescato marble featuring deep burgundy concentric geometric circles, custom cut with waterjet CNC for restroom and VIP suites.',
    texturePattern: 'marble'
  },
  {
    id: 'fluted-plaster',
    name: 'Smooth Terracotta Clay Plaster',
    nameAr: 'طلاء جصي مرجاني انسيابي ناعم',
    type: 'Wall Finish / Architectural Sculptures',
    hex: '#D7836D',
    description: 'A raw, earthen clay texture that curves directly into ceilings without sharp edges, reflecting light with perfect diffuse distribution.',
    texturePattern: 'fluted-plaster'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'digital',
    title: 'Advanced Professional Software',
    titleAr: 'البرمجيات والأنظمة الهندسية المتقدمة',
    skills: [
      { name: 'AutoCAD (Detailed Construction & Shop Drawings)', level: 98, type: 'software' },
      { name: '3ds Max & Corona Render', level: 95, type: 'software' },
      { name: 'SketchUp (Joinery & Cabinetry planning)', level: 92, type: 'software' },
      { name: 'V-Ray / D5 Render / Enscape', level: 90, type: 'software' },
      { name: 'Architectural Photoshop & Styling Boards', level: 88, type: 'software' },
      { name: 'Rayon & Modern 2D Cloud Tools', level: 85, type: 'software' },
      { name: 'Google AI & Parametric Design Tools', level: 80, type: 'software' }
    ]
  },
  {
    id: 'analogue',
    title: 'Analogue & Spatial Competencies',
    titleAr: 'المهارات اليدوية والقدرات الفراغية',
    skills: [
      { name: 'Detailed Technical Drafting & Sections', level: 98, type: 'analogue' },
      { name: '3D Volume & Joinery Modeling', level: 96, type: 'analogue' },
      { name: 'Execution, Site Monitoring & Quality Control', level: 94, type: 'analogue' },
      { name: 'Material Curation & Mood-board Design', level: 95, type: 'analogue' },
      { name: 'Fitted & Modular Furniture Carpentry Knowledge', level: 92, type: 'analogue' },
      { name: 'Space Planning & Circular Radial Circulation', level: 90, type: 'analogue' },
      { name: 'Watercolor Illustration & Architectural Sketching', level: 85, type: 'analogue' }
    ]
  }
];

export const TIMELINE: CareerMilestone[] = [
  {
    period: '2022 - Present',
    title: 'Freelance Lead Interior Designer & Site Architect',
    titleAr: 'مصمم داخلي حر ومشرف تنفيذ مواقع معتمد',
    institution: 'Amman, Jordan',
    institutionAr: 'عمان، الأردن',
    description: 'Design comprehensive customized concepts for high-end residential and commercial projects. Manage active on-site works, coordinating carpenters, metalworkers, and finishing crews with over 5 years of field oversight. Preparing detailed executive shop drawings and procurement estimations.',
    descriptionAr: 'تصميم مفاهيم متكاملة للمشاريع السكنية والتجارية الفاخرة. إدارة ومتابعة الأعمال التنفيذية في الموقع، تنسيق عمل النجارين والحدادين وفرق التشطيب بخبرة إشرافية تفوق الـ 5 سنوات. تقديم المخططات التنفيذية والرسومات التفصيلية المعتمدة والتكلفة التقريبية للمواد الجاهزة.',
    type: 'experience'
  },
  {
    period: '2022 - Present',
    title: 'Bachelor’s degree in Interior Design (Excellent Rating)',
    titleAr: 'بكالوريوس في التصميم الداخلي (بتقدير ممتاز)',
    institution: 'University of Jordan (Supervised by Dr. Haifa Bani Ismail)',
    institutionAr: 'الجامعة الأردنية (بإشراف د. هيفاء بني إسماعيل)',
    description: 'Spearheaded real renovation projects within the university facilities (classrooms, lecture theatres, VIP meeting offices). Guided client briefing sessions, executed space layout planning, drafted furniture placement blueprints on AutoCAD, and monitored physical execution stages.',
    descriptionAr: 'قيادة وتصميم مشاريع تجديد الفراغات التعليمية داخل الحرم الجامعي (قاعات التدريس، غرف الاجتماعات، ومكاتب كبار الزوار). تيسير ورش العمل التفاعلية والاجتماعات مع ممثلي الجهة المالكة لتحديد المتطلبات، وخطط الأثاث والمساقط بمراعاة تامة للمقاييس الهندسية.',
    type: 'education'
  },
  {
    period: '2023',
    title: 'Professional Perspective Drawing Certificate',
    titleAr: 'شهادة محترفة في المنظور والرسم الهندسي المنظوري',
    institution: 'Damascus University',
    institutionAr: 'جامعة دمشق',
    description: 'Intense specialization module covering manual perspective geometry, light casting calculations, high-precision manual ink cross-sections, and composite spatial watercolors.',
    descriptionAr: 'برنامج تدريبي متخصص ومحترف يغطي قواعد المنظور الهندسي الفراغي اليدوي، حسابات إسقاط الظلال والإضاءة، المقاطع اليدوية عالية الدقة، ورسم الفراغات الملونة بالوسائط المائية.',
    type: 'awards'
  },
  {
    period: '2021 - 2023',
    title: 'Master Certifications: Execution, Kitchens & Classic Styling',
    titleAr: 'شهادات تخصصية متقدمة: المخططات التنفيذية، المطابخ، والأنماط الكلاسيكية',
    institution: 'Numerous High-Level Egyptian Academies (Egypt)',
    institutionAr: 'أكاديميات ومراكز تدريب هندسية معتمدة (مصر)',
    description: 'Certified intensive courses addressing executive design detailing, kitchen ergonomic workflows, classic interior ornamentation molds, and bespoke furniture manufacturing techniques.',
    descriptionAr: 'الحصول على شهادات تخصصية في إعداد التفاصيل التنفيذية لتشطيبات المباني، المقاييس والهارموني لتصميم المطابخ، قوالب الطراز الكلاسيكي ونسب الأثاث، وتصنيع وتجميع الأثاث المفكك والمصمت في الورش.',
    type: 'awards'
  },
  {
    period: 'Ongoing',
    title: 'Visual Arts & Architectural Design Awards Winner',
    titleAr: 'الفوز بالعديد من الجوائز المحلية والدولية في الفنون البصرية والتصميم',
    institution: 'Local & Syrian Artistic Competitions',
    institutionAr: 'المسابقات والملتقيات الفنية الإقليمية والمحلية',
    description: 'Recipient of numerous certificates and awards in local & international design platforms for product aesthetics, physical visual arts, and innovative space planning.',
    descriptionAr: 'حائز على شهادات تميز وجوائز متعددة في ملتقيات فنية ومعمارية محلية وإقليمية لتصميم المنتجات، الفنون التشكيلية المعاصرة، وإعادة تدوير الفراغات المعمارية المهملة.',
    type: 'awards'
  }
];
