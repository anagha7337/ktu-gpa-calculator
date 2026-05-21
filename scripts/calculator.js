const gradeMap = {
  'S': 10.0, 'A+': 9.0, 'A': 8.5, 'B+': 8.0, 'B': 7.5,
  'C+': 7.0, 'C': 6.5, 'D': 6.0, 'P': 5.5, 'LP': 4.0, 'F': 0
};

const gradeOptions = ["", "S", "A+", "A", "B+", "B", "C+", "C", "D", "P", "LP", "F"];

const branchSemesters = {
  CSE: [
    {
      name: "Semester 1",
      subjects: [
        { name: "LINEAR ALGEBRA AND CALCULUS", credit: 4 },
        { name: "ENGINEERING PHYSICS A/B / ENGINEERING CHEMISTRY", credit: 4 },
        { name: "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { name: "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { name: "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { name: "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { name: "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      name: "Semester 2",
      subjects: [
        { name: "VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS", credit: 4 },
        { name: "ENGINEERING PHYSICS A/B / ENGINEERING CHEMISTRY", credit: 4 },
        { name: "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { name: "BASICS OF CIVIL & MECHANICAL ENGINEERING/ BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { name: "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { name: "PROGRAMMING IN C", credit: 4 },
        { name: "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { name: "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
    name: "Semester 3",
    subjects: [
      { name: "DISCRETE MATHEMATICAL STRUCTURES", credit: 4 },
      { name: "DATA STRUCTURES", credit: 4 },
      { name: "LOGIC SYSTEM DESIGN", credit: 4 },
      { name: "OBJECT ORIENTED PROGRAMMING USING JAVA", credit: 4 },
      { name: "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
      { name: "SUSTAINABLE ENGINEERING / CONSTITUTION OF INDIA", credit: 0 },
      { name: "DATA STRUCTURES LAB", credit: 2 },
      { name: "OBJECT ORIENTED PROGRAMMING LAB (IN JAVA)", credit: 2 }
    ]
  },
  {
    name: "Semester 4",
    subjects: [
      { name: "GRAPH THEORY", credit: 4 },
      { name: "COMPUTER ORGANIZATION AND ARCHITECTURE", credit: 4 },
      { name: "DATABASE MANAGEMENT SYSTEMS", credit: 4 },
      { name: "OPERATING SYSTEMS", credit: 4 },
      { name: "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
      { name: "SUSTAINABLE ENGINEERING / CONSTITUTION OF INDIA", credit: 0 },
      { name: "DIGITAL LAB", credit: 2 },
      { name: "OPERATING SYSTEMS LAB", credit: 2 }
    ]
  },
  {
    name: "Semester 5",
    subjects: [
      { name: "FORMAL LANGUAGES AND AUTOMATA THEORY", credit: 4 },
      { name: "COMPUTER NETWORKS", credit: 4 },
      { name: "SYSTEM SOFTWARE", credit: 4 },
      { name: "MICROPROCESSORS AND MICROCONTROLLERS", credit: 4 },
      { name: "MANAGEMENT OF SOFTWARE SYSTEMS", credit: 3 },
      { name: "DISASTER MANAGEMENT", credit: 0 },
      { name: "SYSTEM SOFTWARE AND MICROPROCESSORS LAB", credit: 2 },
      { name: "DATABASE MANAGEMENT SYSTEMS LAB", credit: 2 }
    ]
  },
  {
    name: "Semester 6",
    subjects: [
      { name: "COMPILER DESIGN", credit: 4 },
      { name: "COMPUTER GRAPHICS AND IMAGE PROCESSING", credit: 4 },
      { name: "ALGORITHM ANA LYSIS AND DESIGN", credit: 4 },
      { name: "PROGRAM ELECTIVE I", credit: 3 },
      { name: "INDUSTRIAL ECONOMICS & FOREIGN TRADE", credit: 3 },
      { name: "COMPREHENSIVE COURSE WORK", credit: 1 },
      { name: "NETWORKING LAB", credit: 2 },
      { name: "MINI PROJECT", credit: 2 }
    ]
  },
  {
    name: "Semester 7",
    subjects: [
      { name: "ARTIFICIAL INTELLIGENCE", credit: 3 },
      { name: "PROGRAM ELECTIVE II", credit: 3 },
      { name: "OPEN ELECTIVE", credit: 3 },
      { name: "INDUSTRIAL SAFETY ENGINEERING", credit: 0 },
      { name: "COMPILER LAB", credit: 2 },
      { name: "SEMINAR", credit: 2 },
      { name: "PROJECT PHASE I", credit: 2 }
    ]
  },
  {
    name: "Semester 8",
    subjects: [
      { name: "DISTRIBUTED COMPUTING", credit: 3 },
      { name: "PROGRAM ELECTIVE III", credit: 3 },
      { name: "PROGRAM ELECTIVE IV", credit: 3 },
      { name: "PROGRAM ELECTIVE V", credit: 3 },
      { name: "COMPREHENSIVE COURSE VIVA", credit: 1 },
      { name: "PROJECT PHASE II", credit: 4 }
    ]
  }
  ],
  ECE: [
    {
      name: "Semester 1",
      subjects: [
        { name: "LINEAR ALGEBRA AND CALCULUS", credit: 4 },
        { name: "ENGINEERING PHYSICS A/B / ENGINEERING CHEMISTRY", credit: 4 },
        { name: "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { name: "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { name: "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { name: "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { name: "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      name: "Semester 2",
      subjects: [
        { name: "VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS", credit: 4 },
        { name: "ENGINEERING PHYSICS A/B / ENGINEERING CHEMISTRY", credit: 4 },
        { name: "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { name: "BASICS OF CIVIL & MECHANICAL ENGINEERING/ BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { name: "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { name: "PROGRAMMING IN C", credit: 4 },
        { name: "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { name: "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
    name: "Semester 3",
    subjects: [
      { name: "PARTIAL DIFFERENTIAL EQUATION AND COMPLEX ANALYSIS", credit: 4 },
      { name: "SOLID STATE DEVICES", credit: 4 },
      { name: "LOGIC CIRCUIT DESIGN", credit: 4 },
      { name: "NETWORK THEORY", credit: 4 },
      { name: "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
      { name: "SUSTAINABLE ENGINEERING / CONSTITUTION OF INDIA", credit: 0 },
      { name: "SCIENTIFIC COMPUTING LAB", credit: 2 },
      { name: "LOGIC DESIGN LAB", credit: 2 }
    ]
  },
  {
    name: "Semester 4",
    subjects: [
      { name: "PROBABILITY, RANDOM PROCESS AND NUMERICAL METHODS", credit: 4 },
      { name: "ANALOG CIRCUITS", credit: 4 },
      { name: "SIGNALS AND SYSTEMS", credit: 4 },
      { name: "COMPUTER ARCHITECTURE AND MICROCONTROLLERS", credit: 4 },
      { name: "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
      { name: "SUSTAINABLE ENGINEERING / CONSTITUTION OF INDIA", credit: 0 },
      { name: "ANALOG CIRCUITS AND SIMULATION LAB", credit: 2 },
      { name: "MICROCONTROLLER LAB", credit: 2 }
    ]
  },
  {
    name: "Semester 5",
    subjects: [
      { name: "LINEAR INTEGRATED CIRCUITS", credit: 4 },
      { name: "DIGITAL SIGNAL PROCESSING", credit: 4 },
      { name: "ANALOG AND DIGITAL COMMUNICATION", credit: 4 },
      { name: "CONTROL SYSTEMS", credit: 4 },
      { name: "INDUSTRIAL ECONOMICS AND FOREIGN TRADE / MANAGEMENT FOR ENGINEERS", credit: 3 },
      { name: "DISASTER MANAGEMENT", credit: 0 },
      { name: "ANALOG INTEGRATED CIRCUITS AND SIMULATION LAB", credit: 2 },
      { name: "DIGITAL SIGNAL PROCESSING LAB", credit: 2 }
    ]
  },
  {
    name: "Semester 6",
    subjects: [
      { name: "ELECTROMAGNETICS", credit: 4 },
      { name: "VLSI CIRCUIT DESIGN", credit: 4 },
      { name: "INFORMATION THEORY AND CODING", credit: 4 },
      { name: "PROGRAM ELECTIVE I", credit: 3 },
      { name: "INDUSTRIAL ECONOMICS AND FOREIGN TRADE / MANAGEMENT FOR ENGINEERS", credit: 3 },
      { name: "COMPREHENSIVE COURSE WORK", credit: 1 },
      { name: "COMMUNICATION LAB", credit: 2 },
      { name: "MINI PROJECT", credit: 2 }
    ]
  },
  {
    name: "Semester 7",
    subjects: [
      { name: "MICROWAVES AND ANTENNAS", credit: 3 },
      { name: "PROGRAM ELECTIVE II", credit: 3 },
      { name: "OPEN ELECTIVE", credit: 3 },
      { name: "INDUSTRIAL SAFETY ENGINEERING", credit: 0 },
      { name: "ELECTROMAGNETICS LAB", credit: 2 },
      { name: "SEMINAR", credit: 2 },
      { name: "PROJECT PHASE I", credit: 2 }
    ]
  },
  {
    name: "Semester 8",
    subjects: [
      { name: "WIRELESS COMMUNICATION", credit: 3 },
      { name: "PROGRAM ELECTIVE III", credit: 3 },
      { name: "PROGRAM ELECTIVE IV", credit: 3 },
      { name: "PROGRAM ELECTIVE V", credit: 3 },
      { name: "COMPREHENSIVE COURSE VIVA", credit: 1 },
      { name: "PROJECT PHASE II", credit: 4 }
    ]
  }
  ],
  EEE: [
    {
      "name": "Semester 1",
      "subjects": [
        { "name": "LINEAR ALGEBRA AND CALCULUS", credit: 4 },
        { "name": "ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY", credit: 4 },
        { "name": "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { "name": "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { "name": "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { "name": "ENGINEERING PHYSICS LAB", credit: 1 },
        { "name": "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      "name": "Semester 2",
      "subjects": [
        { "name": "VECTOR CALCULUS , DIFFERENTIAL EQUATIONS AND TRANSFORMS", credit: 4 },
        { "name": "ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY", credit: 4 },
        { "name": "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { "name": "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { "name": "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { "name": "PROGRAMMING IN C", credit: 4 },
        { "name": "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { "name": "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      "name": "Semester 3",
      "subjects": [
        { "name": "PARTIAL DIFFERENTIAL EQUATION AND COMPLEX ANALYSIS", credit: 4 },
        { "name": "CIRCUITS AND NETWORKS", credit: 4 },
        { "name": "MEASUREMENTS AND INSTRUMENTATION", credit: 4 },
        { "name": "ANALOG ELECTRONICS", credit: 4 },
        { "name": "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
        { "name": "SUSTAINABLE ENGINEERING", credit: 0 },
        { "name": "CIRCUITS AND MEASUREMENTS LAB", credit: 2 },
        { "name": "ANALOG ELECTRONICS LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 4",
      "subjects": [
        { "name": "PROBABILITY, RANDOM PROCESSES AND NUMERICAL METHODS", credit: 4 },
        { "name": "DC MACHINES AND TRANSFORMERS", credit: 4 },
        { "name": "ELECTROMAGNETIC THEORY", credit: 4 },
        { "name": "DIGITAL ELECTRONICS", credit: 4 },
        { "name": "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
        { "name": "CONSTITUTION OF INDIA", credit: 0 },
        { "name": "ELECTRICAL MACHINES LAB I", credit: 2 },
        { "name": "DIGITAL ELECTRONICS LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 5",
      "subjects": [
        { "name": "MICROPROCESSORS AND MICROCONTROLLERS", credit: 4 },
        { "name": "POWER SYSTEMS I", credit: 4 },
        { "name": "SIGNALS AND SYSTEMS", credit: 4 },
        { "name": "SYNCHRONOUS AND INDUCTION MACHINES", credit: 4 },
        { "name": "INDUSTRIAL ECONOMICS & FOREIGN TRADE / MANAGEMENT FOR ENGINEERS", credit: 3 },
        { "name": "DISASTER MANAGEMENT", credit: 0 },
        { "name": "MICROPROCESSORS AND MICROCONTROLLERS LAB", credit: 2 },
        { "name": "ELECTRICAL MACHINES LAB II", credit: 2 }
      ]
    },
    {
      "name": "Semester 6",
      "subjects": [
        { "name": "LINEAR CONTROL SYSTEMSS", credit: 4 },
        { "name": "POWER SYSTEMS II", credit: 4 },
        { "name": "POWER ELECTRONICS", credit: 4 },
        { "name": "PROGRAM ELECTIVE I", credit: 3 },
        { "name": "INDUSTRIAL ECONOMICS & FOREIGN TRADE/ MANAGEMENT FOR ENGINEERS", credit: 3 },
        { "name": "COMPREHENSIVE COURSE WORK", credit: 1 },
        { "name": "POWER SYSTEMS LAB", credit: 2 },
        { "name": "POWER ELECTRONICS LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 7",
      "subjects": [
        { "name": "ADVANCED CONTROL SYSTEMS", credit: 3 },
        { "name": "PROGRAM ELECTIVE II", credit: 3 },
        { "name": "OPEN ELECTIVE", credit: 3 },
        { "name": "INDUSTRIAL SAFETY ENGINEERING", credit: 0 },
        { "name": "CONTROL SYSTEMS LAB", credit: 2 },
        { "name": "SEMINAR", credit: 2 },
        { "name": "PROJECT PHASE I", credit: 2 }
      ]
    },
    {
      "name": "Semester 8",
      "subjects": [
        { "name": "ELECTRICAL SYSTEM DESIGN AND ESTIMATION", credit: 3 },
        { "name": "PROGRAM ELECTIVE III", credit: 3 },
        { "name": "PROGRAM ELECTIVE IV", credit: 3 },
        { "name": "PROGRAM ELECTIVE V", credit: 3 },
        { "name": "COMPREHENSIVE COURSE VIVA", credit: 1 },
        { "name": "PROJECT PHASE II", credit: 4 }
      ]
    }
  ],
  MECH: [
    {
      "name": "Semester 1",
      "subjects": [
        { "name": "LINEAR ALGEBRA AND CALCULUS", credit: 4 },
        { "name": "ENGINEERING PHYSICS B / ENGINEERING CHEMISTRY", credit: 4 },
        { "name": "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { "name": "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { "name": "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { "name": "ENGINEERING PHYSICS LAB", credit: 1 },
        { "name": "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      "name": "Semester 2",
      "subjects": [
        { "name": "VECTOR CALCULUS , DIFFERENTIAL EQUATIONS AND TRANSFORMS", credit: 4 },
        { "name": "ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY", credit: 4 },
        { "name": "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { "name": "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { "name": "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { "name": "PROGRAMMING IN C", credit: 4 },
        { "name": "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { "name": "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      "name": "Semester 3",
      "subjects": [
        { "name": "PARTIAL DIFFERENTIAL EQUATION AND COMPLEX ANALYSIS", credit: 4 },
        { "name": "MECHANICS OF SOLIDS", credit: 4 },
        { "name": "MECHANICS OF FLUIDS", credit: 4 },
        { "name": "METALLURGY & MATERIAL SCIENCE", credit: 4 },
        { "name": "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
        { "name": "SUSTAINABLE ENGINEERING", credit: 0 },
        { "name": "COMPUTER AIDED MACHINE DRAWING", credit: 2 },
        { "name": "MATERIALS TESTING LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 4",
      "subjects": [
        { "name": "PROBABILITY, STATISTICS AND NUMERICAL METHODS", credit: 4 },
        { "name": "ENGINEERING THERMODYNAMICS 3-1", credit: 4 },
        { "name": "MANUFACTURING PROCESS", credit: 4 },
        { "name": "FLUID MACHINERY", credit: 4 },
        { "name": "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
        { "name": "CONSTITUTION OF INDIA", credit: 0 },
        { "name": "FM & HM LAB", credit: 2 },
        { "name": "MACHINE TOOLS LAB-I", credit: 2 }
      ]
    },
    {
      "name": "Semester 5",
      "subjects": [
        { "name": "MECHANICS OF MACHINERY", credit: 4 },
        { "name": "THERMAL ENGINEERING", credit: 4 },
        { "name": "INDUSTRIAL & SYSTEMS ENGINEERING", credit: 4 },
        { "name": "MACHINE TOOLS AND METROLOGY", credit: 4 },
        { "name": "INDUSTRIAL ECONOMICS AND FOREIGN TRADE / MANAGEMENT FOR ENGINEERS", credit: 3 },
        { "name": "DISASTER MANAGEMENT", credit: 0 },
        { "name": "MACHINE TOOLS LAB-II", credit: 2 },
        { "name": "THERMAL ENGINEERING LAB-I", credit: 2 }
      ]
    },
    {
      "name": "Semester 6",
      "subjects": [
        { "name": "HEAT & MASS TRANSFER", credit: 4 },
        { "name": "DYNAMICS AND DESIGN OF MACHINERY", credit: 4 },
        { "name": "ADVANCED MANUFACTURING ENGINEERING", credit: 4 },
        { "name": "PROGRAM ELECTIVE I", credit: 3 },
        { "name": "INDUSTRIAL ECONOMICS AND FOREIGN TRADE / MANAGEMENT FOR ENGINEERS", credit: 3 },
        { "name": "COMPREHENSIVE COURSE WORK", credit: 1 },
        { "name": "COMPUTER AIDED DESIGN & ANALYSIS LAB", credit: 2 },
        { "name": "THERMAL ENGINEERING LAB-II", credit: 2 }
      ]
    },
    {
      "name": "Semester 7",
      "subjects": [
        { "name": "DESIGN OF MACHINE ELEMENTS", credit: 3 },
        { "name": "PROGRAM ELECTIVE II", credit: 3 },
        { "name": "OPEN ELECTIVE", credit: 3 },
        { "name": "INDUSTRIAL SAFETY ENGINEERING", credit: 0 },
        { "name": "MECHANICAL ENGINEERING LAB", credit: 2 },
        { "name": "SEMINAR", credit: 2 },
        { "name": "PROJECT PHASE I", credit: 2 }
      ]
    },
    {
      "name": "Semester 8",
      "subjects": [
        { "name": "MECHATRONICS", credit: 3 },
        { "name": "PROGRAM ELECTIVE III", credit: 3 },
        { "name": "PROGRAM ELECTIVE IV", credit: 3 },
        { "name": "PROGRAM ELECTIVE V", credit: 3 },
        { "name": "COMPREHENSIVE COURSE VIVA", credit: 1 },
        { "name": "PROJECT PHASE II", credit: 4 }
      ]
    }
  ],
  CIVIL: [
    {
      "name": "Semester 1",
      "subjects": [
        { "name": "LINEAR ALGEBRA AND CALCULUS", credit: 4 },
        { "name": "ENGINEERING PHYSICS A/B / ENGINEERING CHEMISTRY", credit: 4 },
        { "name": "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { "name": "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { "name": "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { "name": "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { "name": "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      "name": "Semester 2",
      "subjects": [
        { "name": "VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS", credit: 4 },
        { "name": "ENGINEERING PHYSICS A/B / ENGINEERING CHEMISTRY", credit: 4 },
        { "name": "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { "name": "BASICS OF CIVIL & MECHANICAL ENGINEERING/ BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { "name": "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { "name": "PROGRAMMING IN C", credit: 4 },
        { "name": "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { "name": "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      "name": "Semester 3",
      "subjects": [
        { "name": "PARTIAL DIFFERENTIAL EQUATION AND COMPLEX ANALYSIS", credit: 4 },
        { "name": "MECHANICS OF SOLID", credit: 4 },
        { "name": "FLUID MECHANICS AND HYDRAULICS", credit: 4 },
        { "name": "SURVEYING & GEOMATICS", credit: 4 },
        { "name": "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
        { "name": "SUSTAINABLE ENGINEERING ",credit: 0 },
        { "name": "CIVIL ENGINEERING PLANNING & DRAFTING LAB", credit: 2 },
        { "name": "SURVEY LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 4",
      "subjects": [
        { "name": "PROBABILITY,STATISTICS AND NUMERICAL METHODS", credit: 4 },
        { "name": "ENGINEERING GEOLOGY", credit: 4 },
        { "name": "GEOTECHNICAL ENGINEERING-I", credit: 4 },
        { "name": "TRANSPORTATION ENGINEERING", credit: 4 },
        { "name": "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
        { "name": "CONSTITUTION OF INDIA", credit: 0 },
        { "name": "MATERIAL TESTING LAB-I", credit: 2 },
        { "name": "FLUID MECHANICS LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 5",
      "subjects": [
        { "name": "STRUCTURAL ANALYSIS-I", credit: 4 },
        { "name": "DESIGN OF CONCRETE STRUCTURES", credit: 4 },
        { "name": "GEOTECHNICAL ENGINEERING-II", credit: 4 },
        { "name": "HYDROLOGY AND WATER RESOURCES ENGINEERING", credit: 4 },
        { "name": "CONSTRUCTION TECHNOLOGY & MANAGEMENT", credit: 3 },     
        { "name": "DISASTER MANAGEMENT", credit: 0 },
        { "name": "MATERIAL TESTING LAB-II", credit: 2 },
        { "name": "GEOTECHNICAL ENGINEERING LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 6",
      "subjects": [
        { "name": "STRUCTURAL ANALYSIS-II", credit: 4 },
        { "name": "ENVIRONMENTAL ENGINEERING", credit: 4 },
        { "name": "DESIGN OF HYDRAULICS STRUCTURES", credit: 4 },
        { "name": "PROGRAM ELECTIVE I", credit: 3 },
        { "name": "INDUSTRIAL ECONOMICS AND FOREIGN TRADE", credit: 3 },
        { "name": "COMPREHENSIVE COURSE WORK", credit: 1 },
        { "name": "TRANSPORTATION ENGINEERING LAB", credit: 2 },
        { "name": "CIVIL ENGINEERING SOFTWARE LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 7",
      "subjects": [
        { "name": "DESIGN OF STEEL STRUCTURES", credit: 3 },
        { "name": "PROGRAM ELECTIVE II", credit: 3 },
        { "name": "OPEN ELECTIVE", credit: 3 },
        { "name": "INDUSTRIAL SAFETY ENGINEERING", credit: 0 },
        { "name": "ENVIRONMENTAL ENGG LAB", credit: 2 },
        { "name": "SEMINAR", credit: 2 },
        { "name": "PROJECT PHASE I", credit: 2 }
      ]
    },
    {
      "name": "Semester 8",
      "subjects": [
        { "name": "QUANTITY SURVEYING & VALUATION", credit: 3 },
        { "name": "PROGRAM ELECTIVE III", credit: 3 },
        { "name": "PROGRAM ELECTIVE IV", credit: 3 },
        { "name": "PROGRAM ELECTIVE V", credit: 3 },
        { "name": "COMPREHENSIVE VIVA VOCE", credit: 1 },
        { "name": "PROJECT PHASE II", credit: 4 }
      ]
    }
  ],
  AIDS: [
    {
      "name": "Semester 1",
      "subjects": [
        { "name": "LINEAR ALGEBRA AND CALCULUS", credit: 4 },
        { "name": "ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY", credit: 4 },
        { "name": "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { "name": "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { "name": "ENGINEERING PHYSICS LAB", credit: 1 },
        { "name": "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      "name": "Semester 2",
      "subjects": [
        { "name": "VECTOR CALCULUS , DIFFERENTIAL EQUATIONS AND TRANSFORMS", credit: 4 },
        { "name": "ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY", credit: 4 },
        { "name": "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { "name": "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { "name": "PROGRAMMING IN C", credit: 4 },
        { "name": "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { "name": "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      "name": "Semester 3",
      "subjects": [
        { "name": "DISCRETE MATHEMATICAL STRUCTURES", credit: 4 },
        { "name": "DATA STRUCTURES", credit: 4 },
        { "name": "LOGIC SYSTEM DESIGN", credit: 4 },
        { "name": "OBJECT ORIENTED PROGRAMMING USING JAVA", credit: 4 },
        { "name": "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
        { "name": "SUSTAINABLE ENGINEERING", credit: 0 },
        { "name": "DATA STRUCTURES LAB", credit: 2 },
        { "name": "OBJECT ORIENTED PROGRAMMING LAB (IN JAVA)", credit: 2 }
      ]
    },
    {
      "name": "Semester 4",
      "subjects": [
        { "name": "PROBABILITY AND STATISTICAL MODELING", credit: 4 },
        { "name": "COMPUTER ORGANISATION AND ARCHITECTURE", credit: 4 },
        { "name": "DATABASE MANAGEMENT SYSTEMS", credit: 4 },
        { "name": "OPERATING SYSTEMS", credit: 4 },
        { "name": "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
        { "name": "CONSTITUTION OF INDIA", credit: 0 },
        { "name": "PYTHON AND STATISTICAL MODELING LAB", credit: 2 },
        { "name": "OPERATING SYSTEMS LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 5",
      "subjects": [
        { "name": "FOUNDATIONS OF DATA SCIENCE", credit: 4 },
        { "name": "COMPUTER NETWORKS", credit: 4 },
        { "name": "INTRODUCTION TO MACHINE LEARNING", credit: 4 },
        { "name": "INTRODUCTION TO ARTIFICIAL INTELLIGENCE", credit: 4 },
        { "name": "MANAGEMENTOF SOFTWARE SYSTEMS", credit: 3 },
        { "name": "DISASTER MANAGEMENT", credit: 0 },
        { "name": "AI & DATA SCIENCE LAB", credit: 2 },
        { "name": "DATABASE MANAGEMENT SYSTEMS LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 6",
      "subjects": [
        { "name": "CONCEPTS IN BIG DATA ANALYTICS", credit: 4 },
        { "name": "ROBOTICS AND INTELLIGENT SYSTEM", credit: 4 },
        { "name": "ALGORITHM ANALYSIS AND DESIGN", credit: 4 },
        { "name": "PROGRAM ELECTIVE I", credit: 3 },
        { "name": "INDUSTRIAL ECONOMICS & FOREIGN TRADE", credit: 3 },
        { "name": "COMPREHENSIVE COURSE WORK", credit: 1 },
        { "name": "BIGDATA ANALYTICS LAB", credit: 2 },
        { "name": "MINIPROJECT", credit: 2 }
      ]
    },
    {
      "name": "Semester 7",
      "subjects": [
        { "name": "FOUNDATIONS OF DEEP LEARNING", credit: 3 },
        { "name": "PROGRAM ELECTIVE II", credit: 3 },
        { "name": "OPEN ELECTIVE", credit: 3 },
        { "name": "INDUSTRIAL SAFETY ENGINEERING", credit: 0 },
        { "name": "DEEP LEARNING LAB", credit: 2 },
        { "name": "SEMINAR", credit: 2 },
        { "name": "PROJECT PHASE I", credit: 2 }
      ]
    },
    {
      "name": "Semester 8",
      "subjects": [
        { "name": "BUSINESS ANALYTICS", credit: 3 },
        { "name": "PROGRAM ELECTIVE III", credit: 3 },
        { "name": "PROGRAM ELECTIVE IV", credit: 3 },
        { "name": "PROGRAM ELECTIVE V", credit: 3 },
        { "name": "COMPREHENSIVE COURSE VIVA", credit: 1 },
        { "name": "PROJECT PHASE II", credit: 4 }
      ]
    }
  ],
  ICE: [
    {
      "name": "Semester 1",
      "subjects": [
        { "name": "LINEAR ALGEBRA AND CALCULUS", credit: 4 },
        { "name": "ENGINEERING PHYSICS A/B / ENGINEERING CHEMISTRY", credit: 4 },
        { "name": "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { "name": "BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { "name": "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { "name": "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { "name": "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      "name": "Semester 2",
      "subjects": [
        { "name": "VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS", credit: 4 },
        { "name": "ENGINEERING PHYSICS A/B / ENGINEERING CHEMISTRY", credit: 4 },
        { "name": "ENGINEERING MECHANICS / ENGINEERING GRAPHICS", credit: 3 },
        { "name": "BASICS OF CIVIL & MECHANICAL ENGINEERING/ BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING", credit: 4 },
        { "name": "LIFE SKILLS / PROFESSIONAL COMMUNICATION", credit: 0 },
        { "name": "PROGRAMMING IN C", credit: 4 },
        { "name": "ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB", credit: 1 },
        { "name": "CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP", credit: 1 }
      ]
    },
    {
      "name": "Semester 3",
      "subjects": [
        { "name": "PARTIAL DIFFERENTIAL EQUATION AND COMPLEX ANALYSIS", credit: 4 },
        { "name": "BASICS OF INSTRUMENTATION ENGINEERING & TRANSDUCER", credit: 4 },
        { "name": "DESIGN OF LOGIC CIRCUITS", credit: 4 },
        { "name": "ELECTRONIC CIRCUITS AND NETWORKS", credit: 4 },
        { "name": "DESIGN & ENGINEERING / PROFESSIONAL ETHICS", credit: 2 },
        { "name": "SUSTAINABLE ENGINEERING ",credit: 0 },
        { "name": "LOGIC CIRCUITS LAB", credit: 2 },
        { "name": "ELECTRONIC DEVICES AND CIRCUITS LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 4",
      "subjects": [
        { "name": "PROBABILITY,STATISTICS AND NUMERICAL METHODS", credit: 4 },
        { "name": "MEASUREMENTS AND INSTRUMENTATION", credit: 4 },
        { "name": "INTEGRATED CIRCUITS AND SYSTEMS", credit: 4 },
        { "name": "CONTROL ENGINEERING I", credit: 4 },
        { "name": "DESIGN & ENGINEERING/PROFESSIONAL ETHICS", credit: 2 },
        { "name": "CONSTITUTION OF INDIA", credit: 0 },
        { "name": "TRANSDUCERS AND MEASUREMENTS LAB", credit: 2 },
        { "name": "ANALOG CIRCUITS LAB", credit: 2 }
      ]
    },
    {
      "name": "Semester 5",
      "subjects": [
        { "name": "INDUSTRIAL INSTRUMENTATION-I", credit: 4 },
        { "name": "CONTROL ENGINEERING II", credit: 4 },
        { "name": "MICROCONTROLLERS", credit: 4 },
        { "name": "SIGNALS AND SYSTEMS", credit: 4 },
        { "name": "INDUSTRIAL ECONOMICS AND FOREIGN TRADE/MANAGEMENT FOR ENGINEERS", credit: 3 },     
        { "name": " DISASTER MANAGEMENT", credit: 0 },
        { "name": "SYSTEM SIMULATION LAB ",credit: 2 },
        { "name": "MICROCONTROLLERS LAB", credit: 2}
      ]
    },
    {
      "name": "Semester 6",
      "subjects": [
        { "name": "INDUSTRIAL INSTRUMENTATION-II", credit: 4 },
        { "name": "PROCESS CONTROL", credit: 4 },
        { "name": "DISCRETE TIME SIGNAL PROCESSING ", credit: 4 },
        { "name": "PROGRAM ELECTIVE I", credit: 3 },
        { "name": "INDUSTRIAL ECONOMICS AND FOREIGN TRADE/MANAGEMENT FOR ENGINEERS", credit: 3 },
        { "name": "COMPREHENSIVE COURSE WORK", credit: 1 },
        { "name": "INDUSTRIAL INSTRUMENTATION LAB", credit: 2 },
        { "name": "MINIPROJECT", credit: 2 }
      ]
    },
    {
      "name": "Semester 7",
      "subjects": [
        { "name": "PLC AND DCS", credit: 3 },
        { "name": "PROGRAM ELECTIVE II", credit: 3 },
        { "name": "OPEN ELECTIVE", credit: 3 },
        { "name": "INDUSTRIAL SAFETY ENGINEERING", credit: 0 },
        { "name": "PROCESS CONTROL LAB", credit: 2 },
        { "name": "SEMINAR", credit: 2 },
        { "name": "PROJECT PHASE I", credit: 2 }
      ]
    },
    {
      "name": "Semester 8",
      "subjects": [
        { "name": "INSTRUMENTATION SYSTEM DESIGN", credit: 3 },
        { "name": "PROGRAM ELECTIVE III", credit: 3 },
        { "name": "PROGRAM ELECTIVE IV", credit: 3 },
        { "name": "PROGRAM ELECTIVE V", credit: 3 },
        { "name": "COMPREHENSIVE VIVA VOCE", credit: 1 },
        { "name": "PROJECT PHASE II", credit: 4 }
      ]
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("semesters-container");
  const cgpaValue = document.getElementById("cgpa");
  const totalCreditsValue = document.getElementById("total-credits");

  const branch = new URLSearchParams(window.location.search).get("branch") || "CSE";
  const semesters = branchSemesters[branch];

  if (!semesters) {
    container.innerHTML = `<p>No data available for branch "${branch}".</p>`;
    return;
  }

  semesters.forEach((sem, semIndex) => {
    const semDiv = document.createElement("div");
    semDiv.classList.add("semester");

    const tableRows = sem.subjects.map((subj, subjIndex) => `
      <tr>
        <td>${subjIndex + 1}</td>
        <td>${subj.name}</td>
        <td><input type="number" value="${subj.credit}" class="credit-input" data-sem="${semIndex}"></td>
        <td>
          <select class="grade-input" data-sem="${semIndex}">
            ${gradeOptions.map(opt => `<option value="${opt}" ${opt === "F" ? "selected" : ""}>${opt || "--"}</option>`).join("")}
          </select>
        </td>
      </tr>
    `).join("");

    semDiv.innerHTML = `
      <p class="sem-head">${sem.name}</p>
      <table>
        <thead>
          <tr>
            <th>SNo</th><th>Subject</th><th>Credit</th><th>Grade</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>

      <div class="actions">
        <a href="#" class="link clear-btn" data-sem="${semIndex}">Clear</a>
        <button class="calculate-btn" data-sem="${semIndex}">Calculate</button>
      </div>

      <div class="results-wrapper">
        <div class="results-box">
          <p><strong>SGPA:</strong> <span id="sgpa-${semIndex}">0.00</span></p>
        </div>
        <div class="results-box">
          <p><strong>Total Credits Earned:</strong> <span id="credits-earned-${semIndex}">0.00</span></p>
        </div>
      </div>
    `;

    container.appendChild(semDiv);
  });

  document.querySelectorAll(".calculate-btn").forEach(button => {
    button.addEventListener("click", () => {
      const semIndex = button.getAttribute("data-sem");
      const gradeInputs = document.querySelectorAll(`.grade-input[data-sem="${semIndex}"]`);
      const creditInputs = document.querySelectorAll(`.credit-input[data-sem="${semIndex}"]`);

      let totalCredits = 0, totalPoints = 0, earnedCredits = 0;

      for (let i = 0; i < gradeInputs.length; i++) {
        const grade = gradeInputs[i].value;
        const credit = parseFloat(creditInputs[i].value);

        if (!grade || isNaN(credit)) continue;

        const point = gradeMap[grade];
        totalPoints += point * credit;
        totalCredits += credit;
        if (point > 0) earnedCredits += credit;
      }

      const sgpa = totalCredits ? totalPoints / totalCredits : 0;
      document.getElementById(`sgpa-${semIndex}`).textContent = sgpa.toFixed(2);
      document.getElementById(`credits-earned-${semIndex}`).textContent = earnedCredits.toFixed(2);
    });
  });

  document.querySelectorAll(".clear-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const semIndex = button.getAttribute("data-sem");

      document.querySelectorAll(`.grade-input[data-sem="${semIndex}"]`).forEach(sel => sel.value = "F");
      document.querySelectorAll(`.credit-input[data-sem="${semIndex}"]`).forEach(inp => inp.value = "");
      document.getElementById(`sgpa-${semIndex}`).textContent = "0.00";
      document.getElementById(`credits-earned-${semIndex}`).textContent = "0.00";
    });
  });

  const cgpaBtn = document.getElementById("calculate-cgpa-btn");
  if (cgpaBtn) {
    cgpaBtn.addEventListener("click", () => {
      const gradeInputs = document.querySelectorAll(".grade-input");
      const creditInputs = document.querySelectorAll(".credit-input");

      let totalPoints = 0, totalEarnedCredits = 0;

      gradeInputs.forEach((gradeInput, i) => {
        const grade = gradeInput.value;
        const credit = parseFloat(creditInputs[i].value);
        const point = gradeMap[grade];

        if (!grade || isNaN(credit)) return;
        if (point > 0) {
          totalPoints += point * credit;
          totalEarnedCredits += credit;
        }
      });

      if (totalEarnedCredits === 0) {
        cgpaValue.textContent = "0.00";
        totalCreditsValue.textContent = "0.00";
        alert("Please enter valid grades to calculate CGPA.");
        return;
      }

      const cgpa = totalPoints / totalEarnedCredits;
      cgpaValue.textContent = cgpa.toFixed(2);
      totalCreditsValue.textContent = totalEarnedCredits.toFixed(2);
    });
  }
});
