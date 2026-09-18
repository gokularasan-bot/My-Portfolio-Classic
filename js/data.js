// Gokularasan Portfolio Data — Single Source of Truth

export const portfolioData = {
  student: {
    name: "Gokularasan",
    title: "Electrical & Electronics Engineering Student",
    degree: "B.E. Electrical and Electronics Engineering",
    institution: "Kumaraguru College of Technology",
    location: "Coimbatore, Tamil Nadu",
    email: "gokularasan.28eee@gmail.com",
    tagline: "Engineering in Motion",
    heroHeadline: "Gokularasan",
    heroSubheading: "Electrical Engineering Student Exploring Energy, Embedded Systems & Intelligent Technologies",
    heroParagraph: "An Electrical and Electronics Engineering student interested in renewable energy, embedded systems, IoT, energy monitoring, and practical engineering applications. I enjoy connecting classroom concepts with real industrial systems through projects, technical exploration, and hands-on learning.",
    currentlyBuilding: "Real-Time Classroom Energy Monitoring System",
    statusBadge: "Currently Building",
    profileImage: "assets/gokul_portrait.jpg",
    resumeDocx: "assets/Gokularasan_Resume.docx",
    resumePreview: "assets/resume_preview.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/gokularasan183/",
      github: "https://github.com/gokularasan-bot",
      email: "mailto:gokularasan.28eee@gmail.com"
    }
  },

  focusAreas: [
    {
      id: "01",
      title: "RENEWABLE ENERGY",
      subtitle: "Solar Systems & EPC",
      description: "Solar PV architectures (On-Grid, Off-Grid, Hybrid), inverter technologies, and real-world EPC plant workflows.",
      tags: ["Solar PV", "On/Off-Grid", "Inverters", "EPC Workflows"],
      icon: "sun"
    },
    {
      id: "02",
      title: "EMBEDDED SYSTEMS",
      subtitle: "Microcontrollers & Hardware",
      description: "ESP32, Arduino, sensor interfacing, signal conditioning, and firmware integration for data acquisition.",
      tags: ["ESP32", "Arduino", "Data Acquisition", "Firmware"],
      icon: "cpu"
    },
    {
      id: "03",
      title: "SMART ENERGY",
      subtitle: "Power & Load Monitoring",
      description: "Real-time electrical current sensing, power-consumption tracking, peak-load analysis, and energy efficiency metrics.",
      tags: ["Energy Monitoring", "Current Sensing", "Peak Load", "Efficiency"],
      icon: "zap"
    },
    {
      id: "04",
      title: "INDUSTRIAL TECHNOLOGY",
      subtitle: "Motors & Automation",
      description: "Electrical machines, motor coil-winding techniques, VFDs, harmonics mitigation, ISO standards, and 5S/TQM systems.",
      tags: ["Electrical Motors", "VFDs & Harmonics", "5S & TQM", "ISO Standards"],
      icon: "settings"
    },
    {
      id: "05",
      title: "IoT & SENSOR SYSTEMS",
      subtitle: "Physical to Digital Bridges",
      description: "Bridging physical analog/digital measurements to cloud dashboards for live telemetry, analytics, and alerting.",
      tags: ["IoT Dashboards", "Telemetry", "Sensor Fusion", "Alerting"],
      icon: "activity"
    },
    {
      id: "06",
      title: "SUSTAINABILITY",
      subtitle: "Energy-Conscious Engineering",
      description: "Practical engineering solutions focused on climate action, resource optimization, and sustainable industrial operations.",
      tags: ["Climate Action", "Resource Efficiency", "Green Tech", "Waste Minimization"],
      icon: "globe"
    }
  ],

  skills: {
    categories: [
      {
        id: "electrical",
        name: "Electrical & Energy",
        icon: "zap",
        skills: [
          { name: "Electrical Machines", level: "Core" },
          { name: "Solar PV Systems", level: "Specialization" },
          { name: "On-Grid Solar Systems", level: "Specialization" },
          { name: "Off-Grid Solar Systems", level: "Specialization" },
          { name: "Hybrid Solar Systems", level: "Specialization" },
          { name: "Energy Monitoring", level: "Core" },
          { name: "VFD Fundamentals", level: "Applied" },
          { name: "Harmonics & Mitigation", level: "Applied" },
          { name: "Electrical Losses Analysis", level: "Applied" },
          { name: "Power Systems Fundamentals", level: "Core" }
        ]
      },
      {
        id: "embedded",
        name: "Embedded & IoT",
        icon: "cpu",
        skills: [
          { name: "ESP32", level: "Hands-on" },
          { name: "Arduino UNO", level: "Hands-on" },
          { name: "Sensors & Data Acquisition", level: "Hands-on" },
          { name: "IoT Monitoring", level: "Hands-on" },
          { name: "Embedded Systems", level: "Core" },
          { name: "Blynk IoT", level: "Applied" },
          { name: "Real-Time Telemetry", level: "Applied" }
        ]
      },
      {
        id: "tools",
        name: "Engineering Tools & Concepts",
        icon: "terminal",
        skills: [
          { name: "Arduino IDE", level: "Tool" },
          { name: "Blynk IoT", level: "Tool" },
          { name: "ISO Standards", level: "Industrial" },
          { name: "5S Practices", level: "Industrial" },
          { name: "Total Quality Management (TQM)", level: "Industrial" },
          { name: "Data Logging & Analysis", level: "Concept" }
        ]
      },
      {
        id: "analytical",
        name: "Engineering & Analytical",
        icon: "activity",
        skills: [
          { name: "Technical Research", level: "Methodology" },
          { name: "Comparative Analysis", level: "Methodology" },
          { name: "System Analysis", level: "Methodology" },
          { name: "Technical Documentation", level: "Methodology" },
          { name: "Sensor Integration", level: "Methodology" },
          { name: "Data Interpretation", level: "Methodology" },
          { name: "Problem Solving", level: "Core" }
        ]
      },
      {
        id: "professional",
        name: "Professional & Leadership",
        icon: "users",
        skills: [
          { name: "Team Coordination", level: "Practice" },
          { name: "Technical Communication", level: "Practice" },
          { name: "Event Management & Operations", level: "Practice" },
          { name: "Leadership", level: "Practice" },
          { name: "Time Management", level: "Practice" },
          { name: "Stakeholder Coordination", level: "Practice" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Real-Time Classroom Energy Monitoring System",
      status: "DEVELOPING",
      shortDescription: "An IoT-based system designed to monitor and analyse classroom electrical energy consumption in real time using current sensing and an ESP32 microcontroller.",
      image: "assets/project_classroom_energy.jpg",
      imageCaption: "Hardware setup showing Arduino UNO, ACS712 Current Sensor, ZMPT101B Voltage Sensor, breadboard interconnects, and test load",
      problem: "Classroom energy consumption can be difficult to monitor continuously, making it harder to identify peak usage, unnecessary consumption, and abnormal electrical loads.",
      solution: "Captures electrical load information through precision sensors and transforms it into understandable real-time and historical energy data displayed on an interactive dashboard.",
      keyFeatures: [
        "Real-time classroom current and voltage monitoring",
        "Power and energy consumption tracking over time",
        "Estimated electricity cost calculation",
        "Live data visualization via IoT dashboard",
        "Historical energy consumption analysis",
        "Peak-load identification and off-peak patterns",
        "Over-current and abnormal-consumption alerts",
        "Scalable architecture for multi-classroom monitoring"
      ],
      technologies: ["ESP32", "Arduino UNO", "ACS712 Current Sensor", "ZMPT101B Voltage Sensor", "IoT Dashboards", "Embedded Systems", "Data Monitoring"],
      projectFocus: ["Energy Monitoring", "Smart Campus", "IoT", "Electrical Systems", "Energy Efficiency"],
      contribution: "Built the hardware prototyping bench, configured current and voltage sensing modules, integrated microcontroller data acquisition routines, and designed the real-time telemetry dashboard.",
      outcome: "Currently in active benchtop development and calibration, proving real-time electrical load capture and data transmission.",
      disclaimer: null
    },
    {
      id: "project-02",
      number: "02",
      title: "Smart Cooking Oil Impurity Detection System",
      status: "DEVELOPING",
      shortDescription: "A low-cost sensor-based concept for preliminary screening of changes in cooking-oil condition by analysing measurable physical and chemical parameters.",
      image: "assets/project_oil_impurity.jpg",
      imageCaption: "Laboratory measurement array with HIOKI Impedance Analyzer, PC Interface, multi-compartment oil container, and sensor electrodes",
      problem: "Repeated use and improper storage of cooking oil causes chemical degradation and contamination that are invisible to the naked eye and costly to test in standard laboratories.",
      solution: "A multi-parameter sensor fusion concept that monitors moisture, pH, temperature, and electrical impedance to detect abnormal shifts between fresh, used, and contaminated oil samples.",
      keyFeatures: [
        "Water / moisture contamination detection",
        "pH monitoring for comparative acidity analysis",
        "Accurate oil temperature measurement",
        "Sensor-based quality parameter monitoring",
        "Detection of abnormal physical/chemical shifts",
        "Real-time readings through an IoT dashboard",
        "Data logging for fresh vs. used oil comparison",
        "Threshold-based warning system"
      ],
      advancedParameters: [
        "Turbidity / optical sensing for suspended particles",
        "Oil colour analysis using optical sensors",
        "Electrical impedance / conductivity comparison via HIOKI analyzer",
        "Temperature-dependent degradation curve analysis",
        "Total Polar Compounds (TPC) correlation",
        "Machine-learning classification based on multi-sensor dataset"
      ],
      technologies: ["ESP32", "Water/Moisture Sensor", "pH Sensor", "Temperature Sensor", "HIOKI Impedance Analyzer", "IoT", "Data Logging", "Sensor Data Analysis"],
      projectFocus: ["Food Safety Screening", "IoT", "Embedded Systems", "Sensor Fusion", "Quality Monitoring", "Data Analysis"],
      contribution: "Conducted preliminary parameter research, structured the multi-sensor measurement methodology, assisted with HIOKI impedance analysis data logging, and structured comparative metrics.",
      outcome: "Currently developing as an early-stage screening prototype exploring correlation between sensor responses and oil degradation stages.",
      disclaimer: "This system is intended as a preliminary research and screening concept. Sensor readings require calibration and validation against established laboratory methods before being used for actual food-safety decisions."
    }
  ],

  experience: [
    {
      id: "exp-02",
      year: "2026",
      organization: "MaRa Signex Solar Experts",
      role: "Solar Energy / EPC Intern",
      date: "June 1 – June 20, 2026",
      duration: "150 Working Hours",
      location: "Coimbatore, Tamil Nadu",
      mapsUrl: "https://maps.app.goo.gl/5QGkw4ouCRtxrr6R8",
      linkedinCompanyUrl: null,
      linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7506575308909658112/",
      description: "Completed a 150-hour internship focused on solar energy systems and EPC operations, gaining practical exposure to the renewable energy industry.",
      bullets: [
        "Gained practical exposure to solar EPC operations and renewable energy systems.",
        "Studied On-Grid, Off-Grid, and Hybrid solar systems and their real-world applications.",
        "Researched and compared solar inverters from Sungrow, Growatt, Deye, and ABB (FIMER).",
        "Studied VFDs, harmonics, energy losses, and methods for harmonic reduction in electrical systems.",
        "Prepared technical presentations and research material related to solar technologies and EPC operations.",
        "Developed skills in technical research, comparative analysis, documentation, and presentation.",
        "Connected electrical engineering concepts with their practical applications in solar energy projects."
      ],
      highlights: ["Solar EPC", "On/Off-Grid & Hybrid", "Sungrow/Growatt/Deye/ABB", "VFDs & Harmonics", "Live Plant Visits"]
    },
    {
      id: "exp-01",
      year: "2025",
      organization: "Electromotive Power Drives Private Ltd.",
      role: "Industrial Intern",
      date: "May 2025",
      duration: "7 Days | 45 Working Hours",
      location: "Coimbatore, Tamil Nadu",
      mapsUrl: "https://maps.app.goo.gl/kkbNx2hxR6go9wR28",
      linkedinCompanyUrl: "https://www.linkedin.com/company/electromotive-power-drives/home/",
      linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7351296976560316416/",
      description: "Completed a 7-day industrial internship at Electromotive Power Drives Pvt. Ltd., gaining firsthand exposure to electrical motor manufacturing and industrial practices.",
      bullets: [
        "Gained firsthand exposure to electrical motor manufacturing and industrial operations.",
        "Learned about ISO standards, 5S practices, and Total Quality Management (TQM) in an industrial environment.",
        "Developed an understanding of basic manufacturing cost concepts and quality practices.",
        "Observed and learned practical coil winding techniques used in electrical motors.",
        "Identified and studied the key components of electrical motors and their functions.",
        "Connected theoretical concepts from electrical machines with practical manufacturing processes.",
        "Gained insights into industrial workflow, quality control, teamwork, and workplace practices."
      ],
      highlights: ["Motor Manufacturing", "ISO Standards", "5S & TQM Practices", "Coil Winding", "Quality Control"]
    }
  ],

  industrialExposure: [
    {
      id: "expo-01",
      title: "INTEC 2026",
      subtitle: "International Machine Tools & Industrial Trade Fair",
      location: "CODISSIA Trade Fair Complex, Coimbatore",
      date: "June 4–8, 2026",
      linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7506590220268728320/",
      description: "Attended INTEC 2026 to gain firsthand exposure to the machine tools and industrial manufacturing ecosystem.",
      observations: [
        "Explored a wide range of industrial machines, components, and engineering systems.",
        "Interacted directly with engineers, technical representatives, industry managers, and HR professionals.",
        "Learned how classroom engineering concepts are applied in real industrial environments.",
        "Inquired into the working principles and practical applications of industrial machinery.",
        "Gained insights into industry expectations, engineering skills, and professional requirements."
      ],
      keyLearning: ["Technical Communication", "Professional Interaction", "System Observation", "Industry-Oriented Learning"]
    },
    {
      id: "expo-02",
      title: "Ambertex Universal Spinning Division",
      subtitle: "Industrial Visit",
      location: "Tamil Nadu, India",
      mapsUrl: "https://maps.app.goo.gl/5QGkw4ouCRtxrr6R8",
      date: "June 9, 2026",
      linkedinPostUrl: null,
      description: "Visited Ambertex Universal Spinning Division to understand the industrial-scale transformation of raw cotton into finished yarn and observe how machines, control systems, quality processes, manpower, and energy systems operate together within a large manufacturing facility.",
      solarObservation: "Observed a large-scale rooftop solar installation of approximately 1,500 panels and its integration with industrial operations.",
      processSteps: [
        { step: "01", name: "RAW COTTON BALE", desc: "High-density compressed cotton bales received from ginning mills for raw material grading." },
        { step: "02", name: "BALE OPENING", desc: "Automated bale plucking and initial loosening of compressed cotton tufts." },
        { step: "03", name: "CLEANING", desc: "Removal of heavy impurities, seed coats, and foreign particles via high-velocity air currents." },
        { step: "04", name: "CARDING", desc: "Fibre opening, cleaning, individualization, and conversion into a continuous untwisted sliver." },
        { step: "05", name: "DRAWING", desc: "Doubling and drafting multiple slivers to improve parallelization and unit weight uniformity." },
        { step: "06", name: "SIMPLEX", desc: "Speed frame drafting sliver into a finer roving strand and inserting slight protective twist." },
        { step: "07", name: "RING SPINNING", desc: "Final precision drafting to desired yarn count and insertion of full structural twist." },
        { step: "08", name: "AUTO-CONING", desc: "Electronic clearing of yarn faults, automatic splicing, and winding onto large commercial cones." },
        { step: "09", name: "FINISHED YARN", desc: "Inspection, conditioning, quality grading, and palletized packing for textile weavers." }
      ],
      highlights: [
        "Semi-combed & combed processes with lap formation",
        "Foreign-fibre optical detection & high-speed ejection",
        "Industrial waste collection, pneumatic compression & recycling",
        "Integration of ~1,500-panel rooftop solar power system"
      ]
    }
  ],

  education: [
    {
      id: "edu-03",
      stage: "Higher Education",
      institution: "Kumaraguru College of Technology",
      degree: "B.E. Electrical and Electronics Engineering",
      location: "Coimbatore, Tamil Nadu",
      mapsUrl: "https://maps.app.goo.gl/kjQR96LoxRraTisY9",
      linkedinUrl: "https://www.linkedin.com/school/kct/posts/",
      image: "assets/kct_campus.jpg",
      imageCaption: "Kumaraguru College of Technology campus, Coimbatore",
      description: "Undergraduate degree focusing on power systems, electrical machines, embedded controllers, IoT architectures, renewable energy, and industrial technology.",
      badge: "UNDERGRADUATE"
    },
    {
      id: "edu-02",
      stage: "Higher Secondary",
      institution: "Sree Gokulam Matric Higher Secondary School",
      grade: "9th to 12th Standard",
      location: "Tamil Nadu",
      mapsUrl: "https://maps.app.goo.gl/ScC3pwNEqmDDB3jo9",
      image: "assets/school_sree_gokulam.jpg",
      imageCaption: "Sree Gokulam Matric Higher Secondary School campus courtyard",
      academicResults: [
        { label: "10th Standard", score: "96.40%" },
        { label: "11th Standard", score: "90.60%" },
        { label: "12th Standard", score: "93.83%" }
      ],
      description: "Strong academic foundation with high distinction in higher secondary coursework and mathematics/sciences.",
      badge: "SECONDARY & HIGHER SECONDARY"
    },
    {
      id: "edu-01",
      stage: "School Foundation",
      institution: "Shalom Convent Matriculation Higher Secondary School",
      grade: "LKG to 8th Standard",
      location: "Tamil Nadu",
      mapsUrl: "https://maps.app.goo.gl/Kxp59Fgs5e44rKP77",
      image: "assets/school_shalom_convent.jpg",
      imageCaption: "Shalom Convent Matriculation Higher Secondary School building",
      academicResults: [],
      description: "Primary and middle school foundation nurturing early curiosity, discipline, and scientific inquiry.",
      badge: "FOUNDATIONAL EDUCATION"
    }
  ],

  achievements: [
    {
      id: "ach-01",
      title: "Kumaraguru Livestock Hackathon 2026",
      role: "Management Team",
      organization: "Kumaraguru Institutions",
      date: "January 29–31, 2026",
      linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7424879276308738048/",
      description: "Served as part of the organizing team for the Kumaraguru Livestock Hackathon 2026, contributing to the planning and execution of a three-day innovation-focused event.",
      bullets: [
        "Coordinated with teams and participants to support smooth event operations and communication.",
        "Managed people, time, resources, and on-ground requirements during the event.",
        "Assisted with planning, coordination, and execution across multiple stages of the hackathon.",
        "Handled time-sensitive situations and unexpected challenges while maintaining smooth operations."
      ],
      skills: ["Leadership", "Teamwork", "Decision Making", "Problem Solving", "Event Execution"]
    },
    {
      id: "ach-02",
      title: "U & Me Hackathon",
      role: "Participant",
      organization: "Coimbatore Institute of Technology",
      date: "August 23, 2025",
      linkedinPostUrl: null,
      description: "Participated in the U & Me Hackathon at CIT, where our team presented an IoT-based Water Quality Monitoring System.",
      bullets: [
        "Worked collaboratively on developing and presenting a solution for water quality monitoring.",
        "Applied concepts from IoT, sensors, and embedded systems to address a real-world problem.",
        "Contributed to problem identification, solution development, and technical project presentation.",
        "Gained practical experience in rapid development under time constraints."
      ],
      skills: ["IoT & Sensors", "Embedded Systems", "Technical Presentation", "Team Collaboration"]
    },
    {
      id: "ach-03",
      title: "IGBC Poster & Model Making Competition 2025",
      role: "Student Coordinator",
      organization: "Kumaraguru College of Technology",
      date: "October 7, 2025",
      linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7381297915174100993/",
      description: "Served as a Student Coordinator for the IGBC Poster & Model Making Competition 2025, contributing to the planning, creative promotion, and execution of the event.",
      bullets: [
        "Designed and prepared event posters and promotional materials.",
        "Created registration forms and managed participant registrations and related data.",
        "Coordinated with participants and team members to ensure smooth communication.",
        "Assisted in planning and managing the on-day event flow and activities."
      ],
      skills: ["Event Management", "Communication", "Design Coordination", "Teamwork", "Sustainability Focus"]
    },
    {
      id: "ach-04",
      title: "Student Conclave for Climate Action (SCCA'25)",
      role: "Organizer",
      organization: "Kumaraguru Yugam / Kumaraguru Microcosm",
      date: "2025",
      linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7305112478177218562/",
      description: "Served as an Organizer for the Student Conclave for Climate Action (SCCA'25) in Microcosm, a student-led initiative focused on climate action, sustainability, and sustainable development.",
      bullets: [
        "Contributed to the planning and execution of the student conclave.",
        "Coordinated with the organizing team to manage event activities and on-ground operations.",
        "Supported bringing together students, speakers, panelists, and sustainability-focused participants.",
        "Facilitated open forums for students to discuss ideas and solutions related to sustainability."
      ],
      skills: ["Leadership", "Stakeholder Management", "Event Planning", "Climate Action Initiatives"]
    }
  ]
};
