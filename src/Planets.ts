const planets = [
    {
        id: 0,
        name: "Mercury",
        description: [
            { overview: "The smallest and innermost planet in the Solar System, known for its extreme temperature variations.", image: "public/assets/planet-mercury.svg" },
            { geology: "Mercury has a heavily cratered surface, similar to Earth's Moon, indicating it has been geologically inactive for billions of years.", imageGeology: "public/assets/geology-mercury.png" },
            { surface: "Mercury’s surface is composed mainly of silicate rocks and metals, with vast plains and high cliffs formed by past tectonic activity.", imageInternal: "public/assets/planet-mercury-internal.svg" }
        ],
        data: [
            { rotationTime: "58.6 days" },
            { revolutionTime: "88 days" },
            { radius: "2,439.7 km" },
            { avgTemperature: "167°C" }
        ]
    },
    {
        id: 1,
        name: "Venus",
        description: [
            { overview: "The hottest planet in the Solar System with a thick, toxic atmosphere and runaway greenhouse effect.", image: "public/assets/planet-venus.svg" },
            { geology: "Venus has a volcanic surface covered in lava plains, with over 1,600 major volcanoes and evidence of recent geological activity.", imageGeology: "public/assets/geology-venus.png" },
            { surface: "Its surface is mostly basalt, with highland regions and deep valleys shaped by past volcanic and tectonic activity.", imageInternal: "public/assets/planet-venus-internal.svg" }
        ],
        data: [
            { rotationTime: "243 days" },
            { revolutionTime: "225 days" },
            { radius: "6,051.8 km" },
            { avgTemperature: "464°C" }
        ]
    },
    {
        id: 2,
        name: "Earth",
        description: [
            { overview: "The only planet known to support life, with a diverse climate and liquid water on its surface.", image: "public/assets/planet-earth.svg" },
            { geology: "Earth’s surface is dynamic, with plate tectonics shaping mountains, ocean basins, and earthquakes.", imageGeology: "public/assets/geology-earth.png" },
            { surface: "Earth is covered in 71% water, with landmasses consisting of continents and islands, featuring forests, deserts, and ice caps.", imageInternal: "public/assets/planet-earth-internal.svg" }
        ],
        data: [
            { rotationTime: "24 hours" },
            { revolutionTime: "365.25 days" },
            { radius: "6,371 km" },
            { avgTemperature: "15°C" }
        ]
    },
    {
        id: 3,
        name: "Mars",
        description: [
            { overview: "The Red Planet, known for its iron-rich soil, thin atmosphere, and potential for past microbial life.", image: "public/assets/planet-mars.svg" },
            { geology: "Mars has the largest volcano in the Solar System, Olympus Mons, and evidence of ancient river valleys and lake beds.", imageGeology: "public/assets/geology-mars.png" },
            { surface: "Mars’ surface is rocky and covered in iron oxide (rust), giving it a reddish appearance, with dust storms frequently reshaping it.", imageInternal: "public/assets/planet-mars-internal.svg" }
        ],
        data: [
            { rotationTime: "24.6 hours" },
            { revolutionTime: "687 days" },
            { radius: "3,389.5 km" },
            { avgTemperature: "-65°C" }
        ]
    },
    {
        id: 4,
        name: "Jupiter",
        description: [
            { overview: "The largest planet in the Solar System, a gas giant with a massive storm called the Great Red Spot.", image: "public/assets/planet-jupiter.svg" },
            { geology: "Jupiter lacks a solid surface, but its deep atmosphere is composed of hydrogen and helium, with extreme weather patterns.", imageGeology: "public/assets/geology-jupiter.png" },
            { surface: "The planet’s upper atmosphere consists of swirling clouds, bands, and giant storms, creating its distinctive appearance.", imageInternal: "public/assets/planet-jupiter-internal.svg" }
        ],
        data: [
            { rotationTime: "9.9 hours" },
            { revolutionTime: "11.86 years" },
            { radius: "69,911 km" },
            { avgTemperature: "-110°C" }
        ]
    }
]
export default planets