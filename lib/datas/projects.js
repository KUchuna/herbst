import project1_1 from "../../public/assets/projects/project1_1.png"
import project1_2 from "../../public/assets/projects/project1_2.png"
import project1_3 from "../../public/assets/projects/project1_3.png"
import project2_1 from "../../public/assets/projects/project2_1.jpeg"
import project2_2 from "../../public/assets/projects/project2_2.jpeg"
import project3_1 from "../../public/assets/projects/project3_1.jpeg"
import project3_2 from "../../public/assets/projects/project3_2.jpeg"
import project3_3 from "../../public/assets/projects/project3_3.jpeg"
import project4_1 from "../../public/assets/projects/project4_1.jpeg"
import project4_2 from "../../public/assets/projects/project4_2.jpeg"
import project5_1 from "../../public/assets/projects/project5_1.jpeg"
import project5_2 from "../../public/assets/projects/project5_2.jpeg"
import project5_3 from "../../public/assets/projects/project5_3.jpeg"
import project6_1 from "../../public/assets/projects/project6_1.jpeg"
import project6_2 from "../../public/assets/projects/project6_2.jpeg"

const projects = [
    {   
        id: 1,
        title: "Kantonal Hospital Frauenfeld",
        description: "Das bestehende Spitalgebäude aus dem Jahr 1974 soll in mehreren Etappen in eine neue grosszügige Form umgebaut werden, die den betrieblichen Bedürfnissen des Spitals optimal entspricht. Das Projekt umfasst den Erweiterungsbau, den Bau eines neuen Bettenhauses sowie umfangreiche Sanierungen und Anpassungen im bestehenden Spitalgebäude. Ziel des Erweiterungskonzepts ist es, eine qualitativ hochstehende bauliche Infrastruktur zu schaffen, die es dem Kantonsspital Frauenfeld ermöglicht, seinen Versorgungsauftrag längerfristig zu erfüllen und für Patienten und Mitarbeitende attraktiv zu bleiben.",
        type: 1,
        client: "Thurmed Immobilien AG / Building Authority of the Canton of Thurgau",
        services: [
            "Projektmanagement",
            "Ausschreibung eines Generalunternehmers",
            "Generalunternehmervertrag",
            "Organisation Qualitätssicherung",
            "Kontrolle",
        ],
        period: "2011 - 2023",
        images: [
            project1_1,
            project1_2,
            project1_3,
        ]
    },
    {   
        id: 2,
        title: "University Medical Center Hamburg",
        description: "The new research wing will enhance the capabilities of the hospital’s ongoing medical research programs. The project involves state-of-the-art laboratory spaces, offices for research staff, and upgrades to existing medical facilities. The design ensures the hospital remains at the forefront of medical innovation.",
        type: 1,
        client: "UMC Hamburg / German Research Foundation",
        services: [
            "Design management",
            "Construction supervision",
            "Contract management",
            "Quality control",
        ],
        period: "2015 - 2022",
        images: [
            project2_1,
            project2_2,
        ]
    },
    {   
        id: 3,
        title: "Bern Central Railway Station",
        description: "The renovation and extension of Bern Central Station includes the development of additional platforms, improved passenger facilities, and a modern shopping area. The goal is to enhance the travel experience and cater to the increasing number of daily commuters.",
        type: 0,
        client: "Swiss Federal Railways (SBB)",
        services: [
            "Construction management",
            "Project coordination",
            "Safety and security planning",
            "Sustainability consultancy",
        ],
        period: "2018 - 2025",
        images: [
            project3_1,
            project3_2,
            project3_3,
        ]
    },
    {   
        id: 4,
        title: "Zürich International Airport Expansion",
        description: "The expansion project includes the construction of a new terminal, additional runways, and the improvement of air traffic control facilities. This will ensure the airport meets future demand and continues to serve as a major European air hub.",
        type: 1,
        client: "Flughafen Zürich AG",
        services: [
            "Project planning",
            "Airport operations consultancy",
            "Environmental impact assessment",
            "Construction management",
        ],
        period: "2020 - 2030",
        images: [
            project4_1,
            project4_2,
        ]
    },
    {   
        id: 5,
        title: "Geneva Financial District Redevelopment",
        description: "A large-scale redevelopment of Geneva's financial district, incorporating modern office buildings, public spaces, and improved infrastructure to accommodate the city's growing economic activity.",
        type: 1,
        client: "Geneva City Council / Private Investors",
        services: [
            "Urban planning",
            "Architectural design",
            "Construction supervision",
            "Public infrastructure planning",
        ],
        period: "2017 - 2024",
        images: [
            project5_1,
            project5_2,
            project5_3,
        ]
    },
    {   
        id: 6,
        title: "Basel Energy Park",
        description: "This project involves the construction of an energy park focusing on sustainable power generation using solar, wind, and geothermal technologies. The park will provide clean energy to the surrounding regions.",
        type: 0,
        client: "Basel Energy Authority",
        services: [
            "Environmental consultancy",
            "Project management",
            "Technical design and planning",
            "Sustainability assessment",
        ],
        period: "2019 - 2026",
        images: [
            project6_1,
            project6_2,
        ]
    },
    {   
        id: 7,
        title: "Kantonal Hospital Frauenfeld",
        description: "Das bestehende Spitalgebäude aus dem Jahr 1974 soll in mehreren Etappen in eine neue grosszügige Form umgebaut werden, die den betrieblichen Bedürfnissen des Spitals optimal entspricht. Das Projekt umfasst den Erweiterungsbau, den Bau eines neuen Bettenhauses sowie umfangreiche Sanierungen und Anpassungen im bestehenden Spitalgebäude. Ziel des Erweiterungskonzepts ist es, eine qualitativ hochstehende bauliche Infrastruktur zu schaffen, die es dem Kantonsspital Frauenfeld ermöglicht, seinen Versorgungsauftrag längerfristig zu erfüllen und für Patienten und Mitarbeitende attraktiv zu bleiben.",
        type: 1,
        client: "Thurmed Immobilien AG / Building Authority of the Canton of Thurgau",
        services: [
            "Projektmanagement",
            "Ausschreibung eines Generalunternehmers",
            "Generalunternehmervertrag",
            "Organisation Qualitätssicherung",
            "Kontrolle",
        ],
        period: "2011 - 2023",
        images: [
            project1_1,
            project1_2,
            project1_3,
        ]
    },
    {   
        id: 8,
        title: "University Medical Center Hamburg",
        description: "The new research wing will enhance the capabilities of the hospital’s ongoing medical research programs. The project involves state-of-the-art laboratory spaces, offices for research staff, and upgrades to existing medical facilities. The design ensures the hospital remains at the forefront of medical innovation.",
        type: 1,
        client: "UMC Hamburg / German Research Foundation",
        services: [
            "Design management",
            "Construction supervision",
            "Contract management",
            "Quality control",
        ],
        period: "2015 - 2022",
        images: [
            project2_1,
            project2_2,
        ]
    },
    {   
        id: 9,
        title: "Bern Central Railway Station",
        description: "The renovation and extension of Bern Central Station includes the development of additional platforms, improved passenger facilities, and a modern shopping area. The goal is to enhance the travel experience and cater to the increasing number of daily commuters.",
        type: 0,
        client: "Swiss Federal Railways (SBB)",
        services: [
            "Construction management",
            "Project coordination",
            "Safety and security planning",
            "Sustainability consultancy",
        ],
        period: "2018 - 2025",
        images: [
            project3_1,
            project3_2,
            project3_3,
        ]
    },
    {   
        id: 10,
        title: "Zürich International Airport Expansion",
        description: "The expansion project includes the construction of a new terminal, additional runways, and the improvement of air traffic control facilities. This will ensure the airport meets future demand and continues to serve as a major European air hub.",
        type: 1,
        client: "Flughafen Zürich AG",
        services: [
            "Project planning",
            "Airport operations consultancy",
            "Environmental impact assessment",
            "Construction management",
        ],
        period: "2020 - 2030",
        images: [
            project4_1,
            project4_2,
        ]
    },
    {   
        id: 11,
        title: "Geneva Financial District Redevelopment",
        description: "A large-scale redevelopment of Geneva's financial district, incorporating modern office buildings, public spaces, and improved infrastructure to accommodate the city's growing economic activity.",
        type: 1,
        client: "Geneva City Council / Private Investors",
        services: [
            "Urban planning",
            "Architectural design",
            "Construction supervision",
            "Public infrastructure planning",
        ],
        period: "2017 - 2024",
        images: [
            project5_1,
            project5_2,
            project5_3,
        ]
    },
    {   
        id: 12,
        title: "Basel Energy Park",
        description: "This project involves the construction of an energy park focusing on sustainable power generation using solar, wind, and geothermal technologies. The park will provide clean energy to the surrounding regions.",
        type: 0,
        client: "Basel Energy Authority",
        services: [
            "Environmental consultancy",
            "Project management",
            "Technical design and planning",
            "Sustainability assessment",
        ],
        period: "2019 - 2026",
        images: [
            project6_1,
            project6_2,
        ]
    },
]



export default projects