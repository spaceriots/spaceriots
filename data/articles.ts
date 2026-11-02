export type ArticleSource = {
  title: string;
  url: string;
};

export type ArticleBlock = {
  type: "heading" | "paragraph";
  text: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  publishedAt: string;
  author: string;
  sources?: ArticleSource[];
  content: ArticleBlock[];
};

export const articles = [
  {
    slug: "artemis-program-return-to-the-moon",
    title: "Artemis Program: NASA's Plan to Return Humans to the Moon",
    description:
      "Explore NASA's Artemis program, including its Moon missions, Space Launch System rocket, Orion spacecraft, lunar landing technology and plans for future human exploration.",
    category: "Space Missions",
    image: "/images/articles/artemis-program.webp",
    publishedAt: "2026-10-31",
    author: "Space Riots",
    sources: [
      {
        title: "NASA Artemis Program",
        url: "https://www.nasa.gov/humans-in-space/artemis/",
      },
      {
        title: "NASA Space Launch System",
        url: "https://www.nasa.gov/humans-in-space/space-launch-system/",
      },
      {
        title: "NASA Orion Spacecraft",
        url: "https://www.nasa.gov/humans-in-space/orion-spacecraft/",
      },
      {
        title: "NASA Human Landing System",
        url: "https://www.nasa.gov/humans-in-space/human-landing-system/",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Human exploration of the Moon is entering a new era through NASA's Artemis program. The initiative aims to return astronauts to the lunar surface, develop technologies for longer space missions and expand scientific research beyond Earth. Unlike the Apollo program, which focused on achieving the first human Moon landings, Artemis is designed as a broader exploration effort involving international partners and commercial space companies. Its objectives include studying the lunar environment, testing new transportation systems and developing experience that could support future human missions to Mars.",
      },
      {
        type: "heading",
        text: "What Is the Artemis Program?",
      },
      {
        type: "paragraph",
        text: "Artemis is NASA's program for human exploration of the Moon and the development of capabilities for future deep-space missions. It combines several major systems, including the Space Launch System (SLS) rocket, Orion spacecraft, lunar landing systems and supporting technologies. The program also involves international cooperation through contributions to lunar exploration infrastructure and scientific activities. One important objective is to explore regions near the lunar south pole, where permanently shadowed areas may contain water ice and other scientifically valuable materials.",
      },
      {
        type: "heading",
        text: "The Space Launch System Rocket",
      },
      {
        type: "paragraph",
        text: "The Space Launch System is NASA's heavy-lift rocket developed to transport astronauts and large payloads beyond low Earth orbit. Its design combines powerful core-stage engines, solid rocket boosters and an upper-stage system that helps send spacecraft toward their destinations. The rocket is designed for demanding missions that require substantial energy to travel beyond Earth. Its development also involves complex manufacturing, engine testing, launch infrastructure and safety requirements. The SLS provides the launch capability for Orion missions within the Artemis program.",
      },
      {
        type: "heading",
        text: "The Orion Spacecraft and Crew Safety",
      },
      {
        type: "paragraph",
        text: "Orion is the spacecraft designed to carry astronauts during missions beyond low Earth orbit. Its main components include the crew module, European Service Module and launch abort system. The crew module provides the environment in which astronauts live and work during their journey, while the service module supplies essential resources such as propulsion, electrical power and thermal control. The launch abort system is designed to move the crew module away from the rocket if a serious emergency occurs during launch. Orion must also withstand the intense heating experienced when returning through Earth's atmosphere.",
      },
      {
        type: "heading",
        text: "How the Artemis Missions Work",
      },
      {
        type: "paragraph",
        text: "Artemis missions are intended to demonstrate and gradually develop the systems required for human lunar exploration. Artemis I demonstrated the SLS and Orion systems through an uncrewed flight around the Moon. Subsequent missions are intended to build on that experience through crewed operations, spacecraft testing and preparations for lunar surface exploration. The wider mission architecture also involves commercial human landing systems, spacesuits, communications and other supporting technologies. Mission configurations and schedules can change as testing, engineering reviews and safety requirements develop, so NASA's official mission updates remain the best source for current plans.",
      },
      {
        type: "heading",
        text: "Lunar Landers and the Gateway",
      },
      {
        type: "paragraph",
        text: "Getting astronauts to the Moon requires more than a powerful launch vehicle and a crew spacecraft. NASA is working with commercial companies on human landing systems designed to transport astronauts between lunar orbit and the surface. SpaceX's Starship Human Landing System is one of the systems selected for Artemis lunar landing development. NASA and its international partners are also developing Gateway, a planned lunar-orbit outpost intended to support scientific research, technology demonstrations and future exploration activities. These systems form part of a larger transportation and infrastructure network for lunar missions.",
      },
      {
        type: "heading",
        text: "Why Is Returning to the Moon Important?",
      },
      {
        type: "paragraph",
        text: "The Moon provides an important environment for studying the formation and evolution of rocky worlds. Its surface preserves geological evidence from billions of years of Solar System history. Scientists are particularly interested in the lunar south pole because permanently shadowed craters may contain water ice. Studying these deposits could improve understanding of lunar resources and their potential uses in future exploration. The Moon also offers an opportunity to test life-support systems, surface equipment, power technologies and communication systems under conditions that are different from those on Earth.",
      },
      {
        type: "heading",
        text: "How Artemis Could Support Future Mars Missions",
      },
      {
        type: "paragraph",
        text: "Long-duration human missions to Mars will require reliable spacecraft, advanced life-support systems, radiation protection and the ability to operate far from Earth. Lunar exploration provides an opportunity to test some of these technologies and understand how astronauts respond to extended operations in a challenging environment. However, the Moon and Mars present different engineering and operational challenges. Artemis is not simply a direct rehearsal for a Mars landing; it is part of a broader effort to develop the knowledge, technology and international cooperation needed for future exploration beyond Earth.",
      },
      {
        type: "heading",
        text: "The Future of the Artemis Program",
      },
      {
        type: "paragraph",
        text: "The future of Artemis depends on the continued development and testing of its rockets, spacecraft, landing systems and supporting infrastructure. Funding, engineering progress, international cooperation and human-spaceflight safety all influence how the program develops. Each mission is intended to provide information and operational experience that can support later stages of lunar exploration. As new milestones are reached, the program could help establish a more sustained human presence beyond Earth while expanding scientific knowledge of the Moon and the wider Solar System.",
      },
    ],
  },
  {
    slug: "total-solar-eclipse-2027-guide",
    title: "Total Solar Eclipse 2027: Date, Path, Duration and Viewing Guide",
    description:
      "Discover the August 2, 2027 total solar eclipse, including its path of totality, expected duration, visibility, viewing locations and essential eye safety guidance.",
    category: "Space Events",
    image: "/images/articles/solar-eclipse.webp",
    publishedAt: "2026-10-31",
    author: "Space Riots",
    sources: [
      {
        title: "NASA: Future Eclipses",
        url: "https://science.nasa.gov/eclipses/future-eclipses/",
      },
      {
        title: "NASA: Solar and Lunar Eclipses",
        url: "https://science.nasa.gov/eclipses/",
      },
      {
        title: "American Astronomical Society: Solar Eclipse Safety",
        url: "https://eclipse.aas.org/eye-safety",
      },
      {
        title: "NASA: Eclipse Science",
        url: "https://science.nasa.gov/eclipse/",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "One of the most anticipated astronomical events of 2027 will take place on August 2, when the Moon passes directly between Earth and the Sun, producing a total solar eclipse along a narrow path across parts of the world. During totality, the Moon completely covers the Sun's bright photosphere, revealing the much fainter solar corona. This spectacular alignment will create an opportunity for millions of people to experience one of nature's most remarkable astronomical events. The exact appearance and duration will depend on the observer's location.",
      },
      {
        type: "heading",
        text: "When Will the 2027 Total Solar Eclipse Happen?",
      },
      {
        type: "paragraph",
        text: "The total solar eclipse will occur on August 2, 2027. It will happen when the Moon moves into alignment between Earth and the Sun during the new moon phase. The event will progress across different geographical regions as Earth's rotation and the Moon's orbital motion change the position of the lunar shadow. The beginning, maximum and ending times will therefore vary according to location. Anyone planning to observe the eclipse should use a detailed astronomical eclipse map to find the local circumstances, including the start of the partial phase and the timing of totality.",
      },
      {
        type: "heading",
        text: "Where Will the Eclipse Be Visible?",
      },
      {
        type: "paragraph",
        text: "The path of totality will cross parts of southern Europe, North Africa and the Middle East. Countries and regions along the path include parts of Spain, Morocco, Algeria, Tunisia, Libya, Egypt, Saudi Arabia and Yemen. Observers inside this relatively narrow path will experience a brief period when the Moon completely covers the Sun's bright disk. People outside the path may still see a partial eclipse, but they will not experience totality. The exact viewing conditions depend on the observer's distance from the centre line, geographical position and local horizon.",
      },
      {
        type: "heading",
        text: "How Long Will the 2027 Eclipse Last?",
      },
      {
        type: "paragraph",
        text: "The duration of a total solar eclipse is not the same everywhere along its path. Observers near the central line generally experience a longer period of totality than those closer to the edges. The duration is influenced by the apparent sizes and relative positions of the Sun and Moon, as well as the geometry of the lunar shadow. Some locations along the 2027 path are expected to experience more than six minutes of totality, making this an especially notable event. For accurate local timings and duration estimates, observers should consult detailed eclipse predictions rather than relying on a single global time.",
      },
      {
        type: "heading",
        text: "How Does a Total Solar Eclipse Happen?",
      },
      {
        type: "paragraph",
        text: "A solar eclipse occurs when the Moon passes between Earth and the Sun and blocks some or all of the sunlight reaching an observer. Although the Sun is much larger than the Moon, it is also much farther away. This distance difference allows the two objects to appear approximately the same size in Earth's sky. When their alignment is sufficiently precise, the Moon can completely cover the bright solar disk for observers inside the path of totality. The Moon's shadow creates two important regions: the darker umbra, where totality is visible, and the lighter penumbra, where observers experience a partial eclipse.",
      },
      {
        type: "heading",
        text: "What Can You See During Totality?",
      },
      {
        type: "paragraph",
        text: "During totality, the bright photosphere disappears behind the Moon, allowing the solar corona to become visible as a faint outer atmosphere surrounding the dark lunar disk. Depending on atmospheric conditions and the stage of the eclipse, observers may also notice changes in the surrounding landscape, unusual lighting and the appearance of bright stars or planets. The experience is very different from an ordinary partial eclipse because the complete disappearance of the Sun's bright surface creates a brief period of darkness. These features make totality particularly valuable for astronomical observation and photography.",
      },
      {
        type: "heading",
        text: "How to Watch the Eclipse Safely",
      },
      {
        type: "paragraph",
        text: "Looking directly at the Sun without suitable protection can cause serious and permanent eye damage. During all partial phases of a solar eclipse, observers must use certified solar viewers that meet the applicable ISO 12312-2 standard or use an appropriate indirect projection method. Ordinary sunglasses, even very dark ones, are not safe substitutes. Cameras, binoculars and telescopes require properly fitted solar filters designed for the front of the instrument. During the brief period of totality, direct viewing without a solar filter is safe only while the Moon completely covers the Sun's bright photosphere. Observers must put their solar protection back on immediately when any bright part of the Sun reappears.",
      },
      {
        type: "heading",
        text: "How to Choose a Viewing Location",
      },
      {
        type: "paragraph",
        text: "Choosing a good location requires more than finding a place inside the path of totality. Observers should consider local weather patterns, cloud cover, accessibility, transport and the position of the Sun during the eclipse. A location with an unobstructed view of the sky can make the experience easier to enjoy. Travellers should also check local regulations, accommodation availability and transport arrangements well before the event. Weather forecasts become more useful closer to August 2, 2027, so flexible travel plans may help observers respond to changing conditions.",
      },
      {
        type: "heading",
        text: "Why Is the 2027 Eclipse Special?",
      },
      {
        type: "paragraph",
        text: "The August 2027 eclipse is notable for its long predicted duration of totality in parts of its path. A longer period of darkness provides additional opportunities to observe the solar corona, study the surrounding environment and photograph different stages of the event. It is also expected to attract astronomy enthusiasts and visitors to regions where totality can be experienced. For scientists, eclipse observations can contribute to research into the solar atmosphere and the interaction between sunlight and Earth's environment. For the public, it offers a rare opportunity to experience a complete solar eclipse without specialist astronomical equipment beyond essential eye protection.",
      },
    ],
  },
  {
    slug: "spacex-starship-technology-future",
    title: "SpaceX Starship: Technology, Design and the Future of Spaceflight",
    description:
      "Explore SpaceX Starship's reusable rocket architecture, Super Heavy booster, Raptor engines, methane propulsion, orbital refuelling and potential role in future space exploration.",
    category: "Rockets & Technology",
    image: "/images/articles/spacex-starship.webp",
    publishedAt: "2026-10-31",
    author: "Space Riots",
    sources: [
      {
        title: "SpaceX Starship",
        url: "https://www.spacex.com/vehicles/starship/",
      },
      {
        title: "NASA Human Landing System",
        url: "https://www.nasa.gov/humans-in-space/human-landing-system/",
      },
      {
        title: "FAA Commercial Space Transportation",
        url: "https://www.faa.gov/space",
      },
      {
        title: "NASA: Moon to Mars",
        url: "https://www.nasa.gov/humans-in-space/",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Space transportation is undergoing a major technological transformation, and SpaceX Starship is one of the most ambitious launch systems currently under development. Designed around full reusability, Starship aims to transport people and cargo into Earth orbit and potentially support missions to the Moon and Mars. Its architecture combines a large first-stage booster with a reusable upper-stage spacecraft. If the system can achieve reliable recovery, refurbishment and frequent operations, it could change how large payloads are transported into space and influence the economics of future space exploration.",
      },
      {
        type: "heading",
        text: "What Is SpaceX Starship?",
      },
      {
        type: "paragraph",
        text: "Starship is a two-stage launch system developed by SpaceX. Its first stage is called Super Heavy, while the upper stage is known as Starship. Super Heavy provides the initial thrust needed to lift the complete vehicle away from Earth. Following stage separation, Starship continues its journey using its own engines and is designed to operate in space. The upper stage is intended to return to Earth for recovery and reuse, while the booster is also designed for recovery. Together, the two stages form a transportation system intended for a wide range of missions, including satellite deployment and deep-space exploration.",
      },
      {
        type: "heading",
        text: "How Does the Starship Launch System Work?",
      },
      {
        type: "paragraph",
        text: "During launch, the Super Heavy booster produces the thrust required to accelerate the vehicle through Earth's lower atmosphere. Once the vehicle reaches the appropriate flight conditions, the stages separate and Starship continues its journey. The upper stage uses its engines to reach the required trajectory or orbit, depending on the mission. After completing its planned operations, Starship is designed to re-enter Earth's atmosphere and perform a controlled return. Both stages involve complex guidance, navigation, thermal protection and recovery systems. Demonstrating these operations reliably is essential before the system can support demanding operational missions.",
      },
      {
        type: "heading",
        text: "The Raptor Engine and Methane Propulsion",
      },
      {
        type: "paragraph",
        text: "Starship uses SpaceX's Raptor engines, which burn liquid methane and liquid oxygen. These propellants are stored at extremely low temperatures and must be managed carefully throughout the vehicle's operation. Methane is an important part of the system's design because it offers useful performance characteristics and can support future concepts involving the production of fuel from resources available on Mars. The Raptor engine uses a full-flow staged-combustion cycle, a complex propulsion architecture designed to improve engine performance. Developing and operating engines of this type at the scale required for Starship presents substantial engineering challenges.",
      },
      {
        type: "heading",
        text: "Why Is Rocket Reusability Important?",
      },
      {
        type: "paragraph",
        text: "Many traditional orbital launch vehicles discard major components after completing a mission. Reusable rocket systems aim to recover important hardware and fly it again, potentially reducing the need to manufacture an entirely new vehicle for every launch. However, recovering a rocket does not automatically make it inexpensive to operate. Vehicles must be inspected, maintained, refurbished and tested before returning to service. Thermal protection, engine reliability, structural durability and recovery infrastructure all influence the overall cost. The economic value of reusability ultimately depends on how frequently a vehicle can fly and how much work is required between missions.",
      },
      {
        type: "heading",
        text: "Orbital Refuelling and Deep-Space Missions",
      },
      {
        type: "paragraph",
        text: "One of the major technologies associated with Starship's future lunar and deep-space ambitions is orbital refuelling. A spacecraft carrying a large quantity of fuel from Earth's surface faces significant mass and performance limitations. Refuelling in orbit could allow a vehicle to launch with an initial propellant load and receive additional fuel from another spacecraft before travelling farther into space. This approach requires reliable spacecraft docking, fluid transfer and cryogenic propellant storage in orbit. These operations are technically demanding and must be demonstrated before they can support routine lunar or Mars missions.",
      },
      {
        type: "heading",
        text: "Starship's Role in NASA's Artemis Program",
      },
      {
        type: "paragraph",
        text: "Starship has an important role in NASA's lunar exploration plans through the Human Landing System program. SpaceX has been selected to develop a Starship-based lunar lander for an Artemis mission. The lunar landing version is intended to transport astronauts between lunar orbit and the Moon's surface. It is part of a larger mission architecture that includes Orion, the Space Launch System and other supporting systems. The lunar lander requires additional development, including orbital refuelling, life-support capabilities and safe lunar landing and ascent operations. Selection for a NASA program does not mean that every planned capability has already been demonstrated.",
      },
      {
        type: "heading",
        text: "Potential Applications Beyond Lunar Exploration",
      },
      {
        type: "paragraph",
        text: "Starship is being developed for a variety of potential applications, including launching large satellite payloads, transporting cargo and supporting future human spaceflight. Its large payload volume could offer opportunities for spacecraft deployment and other missions that require substantial capacity. SpaceX has also described long-term ambitions involving Mars transportation. These applications depend on further development and successful demonstrations of the vehicle's capabilities. The actual commercial uses of Starship will depend on reliability, operational costs, launch frequency, regulatory approval and customer demand.",
      },
      {
        type: "heading",
        text: "The Engineering Challenges Ahead",
      },
      {
        type: "paragraph",
        text: "Developing a large reusable launch system involves challenges in propulsion, thermal protection, structural design, flight control and recovery operations. Orbital refuelling introduces additional requirements involving cryogenic fluid management and spacecraft coordination. Human transportation creates further demands for crew safety, life support and emergency systems. Test flights provide important engineering data, but individual successful demonstrations do not automatically establish that all planned capabilities are operational. Starship's long-term progress will depend on continued testing, design improvements and the ability to demonstrate reliable performance across different mission types.",
      },
      {
        type: "heading",
        text: "The Future of Starship and Space Transportation",
      },
      {
        type: "paragraph",
        text: "Starship represents an ambitious attempt to develop a reusable transportation system capable of supporting large-scale space activities. Its potential impact extends beyond rocket engineering to satellite operations, commercial launch services, lunar exploration and future deep-space missions. However, its ultimate influence will depend on whether it can achieve dependable operations and demonstrate the economic advantages of reusability. As development continues, Starship will remain an important project to follow when examining the future of commercial spaceflight and the technologies needed to make space transportation more capable.",
      },
    ],
  },
  {
    slug: "how-much-does-it-cost-to-launch-a-rocket",
    title: "How Much Does It Cost to Launch a Rocket Into Space?",
    description:
      "Discover how much rocket launches cost, what determines launch prices, how reusable rockets affect expenses and how the commercial space industry operates.",
    category: "Space Economy",
    image: "/images/articles/rocket-launch.webp",
    publishedAt: "2026-10-31",
    author: "Space Riots",
    sources: [
      {
        title: "SpaceX Rideshare Program",
        url: "https://www.spacex.com/rideshare/",
      },
      {
        title: "FAA Commercial Space Transportation",
        url: "https://www.faa.gov/space",
      },
      {
        title: "NASA Launch Services Program",
        url: "https://www.nasa.gov/kennedy/launch-services-program/",
      },
      {
        title: "NASA Launch Services",
        url: "https://www.nasa.gov/",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Launching a rocket into space is an expensive engineering operation involving specialised hardware, propulsion systems, launch facilities, testing and highly trained personnel. However, the price of reaching orbit varies considerably depending on the rocket, payload and mission requirements. Commercial launch companies have introduced new business models and reusable technologies that are changing the space transportation industry. Understanding launch costs helps explain why some space missions are more expensive than others and how businesses, governments and research organisations purchase access to space.",
      },
      {
        type: "heading",
        text: "How Much Does a Rocket Launch Cost?",
      },
      {
        type: "paragraph",
        text: "There is no single price for launching a rocket. A small dedicated launch vehicle, a medium-class orbital rocket and a heavy-lift system have different manufacturing, operating and infrastructure requirements. Even two missions using the same rocket can have different prices because they may require different orbits, payload arrangements, launch schedules or additional services. Some customers purchase an entire dedicated launch, while others share a rocket with multiple satellite operators. Published launch prices should therefore be understood as specific service prices rather than universal costs for every mission.",
      },
      {
        type: "heading",
        text: "What Determines the Cost of a Rocket Launch?",
      },
      {
        type: "paragraph",
        text: "Several factors influence the price of a launch service. Payload mass is important because heavier spacecraft generally require more energy and greater lifting capability. Destination orbit also matters: reaching a low Earth orbit is different from delivering a spacecraft into geostationary orbit or sending a probe toward another planet. Other considerations include payload dimensions, environmental testing, integration requirements, launch-site operations, mission assurance and schedule flexibility. Launch providers must also account for vehicle manufacturing, engineering, maintenance, workforce and the infrastructure needed to prepare each mission.",
      },
      {
        type: "heading",
        text: "Dedicated Launches Versus Shared Rides",
      },
      {
        type: "paragraph",
        text: "A dedicated launch allows a customer to purchase the launch vehicle's capacity for a particular mission. This can provide greater control over the launch schedule, payload deployment and target orbit. A rideshare mission combines payloads from several customers on one rocket, allowing the launch provider to distribute transportation costs among multiple satellite operators. This arrangement can make orbital access more affordable for smaller spacecraft, universities and research organisations. However, rideshare customers may have less flexibility over deployment timing and orbital requirements because the mission must accommodate several payloads.",
      },
      {
        type: "heading",
        text: "Why Different Rockets Have Different Prices",
      },
      {
        type: "paragraph",
        text: "Launch vehicles are designed around different payload capacities, destinations and operational requirements. Small launchers can provide dedicated access for relatively lightweight satellites, while larger rockets can carry heavier spacecraft or multiple payloads. A rocket's price is influenced by its design complexity, engine technology, manufacturing process and expected launch frequency. Mission requirements also matter: delivering a satellite into a particular orbit may require additional performance compared with placing the same payload into a lower-energy destination. Choosing a launch vehicle therefore involves balancing cost, reliability, capacity and mission needs.",
      },
      {
        type: "heading",
        text: "How Reusable Rockets Can Reduce Costs",
      },
      {
        type: "paragraph",
        text: "Reusable rockets are designed to recover and reuse major vehicle components instead of manufacturing an entirely new rocket for every flight. Recovering a first-stage booster can reduce the amount of hardware that must be replaced between launches. This approach can also help providers increase launch frequency if recovery and refurbishment operations become efficient. Nevertheless, reusability still involves inspection, maintenance, testing, recovery equipment and replacement of components that experience wear. The actual financial benefit depends on how many times a component can fly, how much refurbishment it requires and how reliably the launch system operates.",
      },
      {
        type: "heading",
        text: "Launch Price Versus the Total Cost of a Space Mission",
      },
      {
        type: "paragraph",
        text: "The price paid to a launch provider is only one part of a space mission's total budget. A satellite or spacecraft must also be designed, manufactured, tested and prepared for its operating environment. Organisations may need to pay for ground stations, communications, mission control, insurance, regulatory approvals and years of engineering work. Scientific missions can require specialised instruments and extensive testing, while commercial satellites need additional investment in their operational services. This means a relatively affordable rocket launch does not necessarily result in an inexpensive space mission.",
      },
      {
        type: "heading",
        text: "The Business Behind Commercial Space Launches",
      },
      {
        type: "paragraph",
        text: "Commercial launch providers serve a wide range of customers, including satellite operators, telecommunications companies, government agencies, scientific organisations and universities. Satellite networks create demand for regular launches, while Earth observation, navigation and communications services depend on spacecraft reaching suitable orbits. Launch companies compete through reliability, payload capacity, scheduling, mission flexibility and pricing. Some providers also develop reusable systems or offer integrated services that help customers prepare and deploy their spacecraft. The commercial launch market therefore combines advanced engineering with complex business and operational decisions.",
      },
      {
        type: "heading",
        text: "Why Launch Costs Matter for the Future of Space",
      },
      {
        type: "paragraph",
        text: "The cost and availability of launch services influence which space projects are financially practical. More accessible transportation can create opportunities for smaller satellite operators, universities and research institutions that previously faced significant barriers to reaching orbit. It may also support the development of larger satellite networks, commercial space stations and future lunar infrastructure. However, reducing launch prices alone cannot solve every challenge in the space economy. Spacecraft manufacturing, orbital operations, communications, maintenance and regulatory requirements remain important parts of the overall investment.",
      },
      {
        type: "heading",
        text: "How to Compare Rocket Launch Costs",
      },
      {
        type: "paragraph",
        text: "When comparing launch services, customers should look beyond the advertised price. Important considerations include the target orbit, payload mass, available payload volume, launch schedule, mission reliability and any additional integration or deployment services. Price per kilogram can be a useful comparison metric, but it does not always reflect the actual value of a launch. A cheaper shared ride may not meet the timing or orbital requirements of a particular spacecraft. The best launch option is the one that meets the mission's technical and operational requirements at an acceptable overall cost.",
      },
    ],
  },
  {
    slug: "meteor-showers-how-to-watch",
    title: "Meteor Showers: How They Form and When to See Them",
    description:
      "Learn how meteor showers form, why Earth passes through comet debris, when annual meteor showers occur and how to find the best conditions for observing shooting stars.",
    category: "Astronomy",
    image: "/images/articles/meteor-showers.webp",
    publishedAt: "2026-10-31",
    author: "Space Riots",
    sources: [
      {
        title: "NASA: Meteors and Meteorites",
        url: "https://science.nasa.gov/solar-system/meteors-meteorites/",
      },
      {
        title: "International Meteor Organization: Meteor Shower Calendar",
        url: "https://www.imo.net/resources/calendar/",
      },
      {
        title: "American Meteor Society: Meteor Shower Calendar",
        url: "https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/",
      },
      {
        title: "NASA Solar System Exploration",
        url: "https://science.nasa.gov/solar-system/",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Meteor showers are among the most accessible astronomical events to observe because they do not require a telescope or other specialist equipment. At certain times of the year, Earth travels through streams of dust and small particles left behind by comets and, in some cases, asteroids. When these particles enter Earth's atmosphere at high speed, they heat the surrounding air and produce bright streaks of light known as meteors. Under suitable observing conditions, several meteors may appear across the night sky within a short period.",
      },
      {
        type: "heading",
        text: "What Causes a Meteor Shower?",
      },
      {
        type: "paragraph",
        text: "Many comets release dust and small particles as they travel around the Sun. Solar heating causes material to escape from their surfaces, leaving debris along parts of their orbital paths. Over time, this material spreads into streams that can extend around the Sun. When Earth's orbit intersects one of these streams, particles enter the atmosphere at high speeds and produce visible meteors. Most of the particles are extremely small and disappear high above Earth's surface. The regular intersection of Earth with these debris streams explains why many meteor showers return around similar dates every year.",
      },
      {
        type: "heading",
        text: "What Is the Difference Between a Meteoroid, Meteor and Meteorite?",
      },
      {
        type: "paragraph",
        text: "These three terms describe different stages of material travelling through space and Earth's atmosphere. A meteoroid is a small rocky or metallic object moving through space. When it enters Earth's atmosphere and produces a visible streak of light, the phenomenon is called a meteor. If part of the object survives its passage through the atmosphere and reaches the ground, the remaining material is known as a meteorite. Understanding these differences helps explain why the bright streaks seen during meteor showers are generally atmospheric events rather than objects landing on Earth.",
      },
      {
        type: "heading",
        text: "Popular Annual Meteor Showers",
      },
      {
        type: "paragraph",
        text: "Several well-known meteor showers occur throughout the year. The Quadrantids are active around January, the Lyrids generally occur in April, and the Perseids are active during July and August. The Orionids usually appear in October, while the Geminids are among the major showers of December. Each shower has its own activity period, expected peak and radiant location. The number of visible meteors can vary significantly between years because of moonlight, atmospheric conditions and the position of Earth's passage through the debris stream. A current meteor shower calendar is useful for identifying the expected peak dates and observing conditions.",
      },
      {
        type: "heading",
        text: "What Is a Meteor Shower Radiant?",
      },
      {
        type: "paragraph",
        text: "A meteor shower is named after the constellation or nearby star region from which its meteors appear to originate. This apparent starting point is called the radiant. For example, Perseid meteors appear to radiate from the direction of the constellation Perseus. The meteors are actually travelling along nearly parallel paths through space, but perspective makes their trails appear to converge toward one region of the sky. Observers do not need to look directly at the radiant to see meteors. Looking across a wider area of the sky often provides a better chance of spotting longer and more noticeable trails.",
      },
      {
        type: "heading",
        text: "Where and When Should You Watch a Meteor Shower?",
      },
      {
        type: "paragraph",
        text: "A dark location away from city lights usually provides the best viewing conditions. Light pollution reduces the contrast between faint meteors and the surrounding sky, making them harder to see. Allow your eyes time to adapt to darkness, avoid bright phone screens and choose a location with a wide, unobstructed view. Many meteor showers are easier to observe after midnight and before dawn, although the best viewing period depends on the shower's radiant and the observer's location. Comfortable seating, suitable clothing and patience can make a long observing session more enjoyable.",
      },
      {
        type: "heading",
        text: "Does the Moon Affect Meteor Shower Visibility?",
      },
      {
        type: "paragraph",
        text: "Moonlight can make faint meteors harder to see by increasing the brightness of the night sky. A meteor shower occurring near a new moon may therefore offer better conditions than one taking place during a bright full moon. However, the Moon's position and the time it rises or sets also matter. If the Moon is below the horizon during the main observing period, its light will have less effect on visibility. Weather, cloud cover, atmospheric transparency and artificial lighting also influence the number of meteors an observer can see.",
      },
      {
        type: "heading",
        text: "What Is the Zenithal Hourly Rate?",
      },
      {
        type: "paragraph",
        text: "Astronomers use the Zenithal Hourly Rate, commonly called ZHR, to describe the theoretical number of meteors an ideal observer could see in one hour under specified conditions. These conditions include a dark sky, a radiant positioned directly overhead and an unobstructed view of the sky. The actual number seen by an individual observer is usually lower because real observing conditions are rarely perfect. Therefore, a published ZHR should not be interpreted as a guaranteed number of meteors visible from every location. Light pollution, moonlight, weather and the radiant's altitude all affect the real viewing rate.",
      },
      {
        type: "heading",
        text: "Do You Need a Telescope to Watch Meteor Showers?",
      },
      {
        type: "paragraph",
        text: "No telescope or binoculars are needed to enjoy a meteor shower. In fact, the unaided eye is generally better because it provides a much wider field of view. A telescope focuses on a small area of the sky and can make it easier to miss fast-moving meteors outside that region. A reclining chair, warm clothing and a comfortable observing location are often more useful than expensive equipment. Photography is possible with a camera capable of long exposures, but capturing meteors requires suitable settings, a stable tripod and patience.",
      },
      {
        type: "heading",
        text: "Why Meteor Showers Matter to Science",
      },
      {
        type: "paragraph",
        text: "Meteor showers provide scientists with opportunities to study material released by comets and asteroids. Observations can reveal information about the distribution, speed and behaviour of particles entering Earth's atmosphere. Researchers can also study the interaction between these particles and atmospheric gases, including the production of light and ionisation. Understanding meteor streams contributes to wider research into the history of the Solar System and the physical characteristics of small Solar System bodies. Although meteor showers are often enjoyed as visual events, they also provide valuable opportunities for scientific observation.",
      },
    ],
  },
  {
    slug: "how-rocket-engines-work",
    title: "How Rocket Engines Work: The Technology Behind Space Launches",
    description:
      "Discover how rocket engines generate thrust, how liquid and solid propellants differ, and why rockets can operate in the vacuum of space.",
    category: "Space Technology",
    image: "/images/articles/rocket-engines.webp",
    publishedAt: "2026-11-01",
    author: "Space Riots",
    sources: [
      {
        title: "NASA Glenn Research Center: Propulsion System",
        url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/propulsion-system/",
      },
      {
        title: "NASA Glenn Research Center: Liquid Rocket Engine",
        url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/liquid-rocket-engine/",
      },
      {
        title: "NASA: Gravity and Mechanics",
        url: "https://science.nasa.gov/learn/basics-of-space-flight/chapter3-2/",
      },
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Rocket engines are among the most powerful and technically demanding machines developed by engineers. They provide the force needed to lift launch vehicles away from Earth, accelerate spacecraft and place satellites into orbit. Although rockets come in many shapes and sizes, they all rely on a basic principle: expelling mass in one direction produces a force in the opposite direction.",
      },
      {
        type: "heading",
        text: "How Does a Rocket Engine Produce Thrust?",
      },
      {
        type: "paragraph",
        text:
          "A rocket engine generates thrust by accelerating exhaust gases out of a nozzle. In a typical chemical rocket, fuel and an oxidizer react inside a combustion chamber, producing extremely hot, high-pressure gas. The nozzle directs and accelerates this gas out of the engine, producing a force that pushes the rocket in the opposite direction.",
      },
      {
        type: "paragraph",
        text:
          "This behaviour is described by Newton's third law of motion: an action produces an equal and opposite reaction. The engine pushes exhaust backwards, while the rocket experiences thrust forwards. The amount of thrust depends on factors such as the mass flow rate of the exhaust, its exit velocity and the pressure conditions at the nozzle.",
      },
      {
        type: "heading",
        text: "Why Do Rockets Work in Space?",
      },
      {
        type: "paragraph",
        text:
          "Unlike an aircraft jet engine, a rocket does not need to draw oxygen from the surrounding atmosphere. It carries both the fuel and the oxidizer required for combustion. This allows it to generate thrust in the vacuum of space, where there is no atmospheric oxygen for an ordinary jet engine to use.",
      },
      {
        type: "paragraph",
        text:
          "A rocket also does not push against the air or need something behind it to move forward. Its motion comes from the momentum carried away by its exhaust gases. This is why the same basic propulsion principle works during launch through the atmosphere and later in the vacuum of space.",
      },
      {
        type: "heading",
        text: "Liquid Rocket Engines",
      },
      {
        type: "paragraph",
        text:
          "Liquid rocket engines store fuel and oxidizer in separate tanks. Pumps or pressurization systems feed the propellants into a combustion chamber, where they mix and react. The resulting hot gases pass through a nozzle to produce thrust.",
      },
      {
        type: "paragraph",
        text:
          "Liquid engines can offer precise control because propellant flow can be regulated and, in many designs, stopped and restarted. However, they require complex tanks, valves, pumps, cooling systems and plumbing. Their performance and reliability depend on the careful design of all these components.",
      },
      {
        type: "heading",
        text: "Solid Rocket Motors",
      },
      {
        type: "paragraph",
        text:
          "Solid rocket motors contain fuel and oxidizer mixed together in a solid propellant grain. Once ignited, the propellant burns and produces hot gases that escape through a nozzle. Solid motors have relatively simple designs and can be stored for extended periods, making them useful for certain launch vehicle applications.",
      },
      {
        type: "paragraph",
        text:
          "A major difference is that a conventional solid motor generally cannot be shut down simply by stopping propellant flow once it has ignited. Its thrust profile is determined largely by the propellant design and the geometry of the burning surface.",
      },
      {
        type: "heading",
        text: "What Is a Rocket Nozzle?",
      },
      {
        type: "paragraph",
        text:
          "The nozzle is a critical part of a rocket engine. It converts the high-pressure, high-temperature gas produced in the combustion chamber into a fast-moving exhaust stream. Many chemical rocket engines use a converging-diverging nozzle, often called a De Laval nozzle, to accelerate the gas to very high speeds.",
      },
      {
        type: "paragraph",
        text:
          "Nozzle design affects engine performance because the surrounding pressure changes as a rocket climbs through the atmosphere and eventually enters space. Engineers must account for these changing conditions when designing engines for different stages of flight.",
      },
      {
        type: "heading",
        text: "Why Rocket Engines Are Important for Modern Spaceflight",
      },
      {
        type: "paragraph",
        text:
          "Rocket propulsion technology continues to evolve through improvements in engine materials, cooling systems, combustion stability, manufacturing and reusability. Modern launch vehicles use different engine designs depending on their payload requirements, mission profiles and operating costs.",
      },
      {
        type: "paragraph",
        text:
          "Understanding rocket engines helps explain how satellites reach orbit, how spacecraft travel between planets and why launch vehicles require carefully coordinated stages. Behind every successful launch is a complex propulsion system designed to deliver the precise performance needed for its mission.",
      },
    ],
  },
  {
    slug: "space-economy-global-industry-business",
    title: "The Space Economy: How Space Is Becoming a Global Industry",
    description:
      "Explore the global space economy, including commercial satellites, rocket companies, space technology, private investment, telecommunications and the growing business opportunities beyond Earth.",
    category: "Space Economy",
    image: "/images/articles/space-economy.webp",
    publishedAt: "2026-11-01",
    author: "Space Riots",
    sources: [
      {
        title: "OECD: The Space Economy at a Glance 2026",
        url: "https://www.oecd.org/en/publications/the-space-economy-at-a-glance-2026_cbf9b240-en.html",
      },
      {
        title: "European Space Agency: 2026 Space Economy Report",
        url: "https://www.esa.int/About_Us/Business_with_ESA/ESA_releases_2026_Space_Economy_Report",
      },
      {
        title: "NASA Commercial Space",
        url: "https://www.nasa.gov/commercial-space/",
      },
      {
        title: "Federal Aviation Administration: Commercial Space Transportation",
        url: "https://www.faa.gov/space",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Space is no longer an industry dominated exclusively by government-funded exploration programmes. Private companies now develop rockets, manufacture satellites, provide launch services and operate technologies that support communications, navigation and Earth observation. These activities form part of the global space economy, a broad industry connecting aerospace engineering, telecommunications, scientific research, manufacturing and digital services. As access to space develops, commercial organisations are finding new ways to use satellite data and space-based infrastructure to support businesses and everyday activities on Earth.",
      },
      {
        type: "heading",
        text: "What Is the Space Economy?",
      },
      {
        type: "paragraph",
        text: "The space economy includes the activities, products and services associated with exploring, accessing and using space. It covers the development and manufacturing of spacecraft, rockets, satellites, ground infrastructure and supporting technologies. It also includes services that depend on space-based systems, such as satellite communications, navigation, weather monitoring and Earth observation. Some activities take place directly in space, while many others create economic value on Earth by using information collected from satellites. This makes the space economy much broader than rocket launches and astronaut missions alone.",
      },
      {
        type: "heading",
        text: "How Large Is the Global Space Economy?",
      },
      {
        type: "paragraph",
        text: "The economic footprint of space activities has expanded as satellite services, commercial launch operations and private investment have developed. The OECD's 2026 Space Economy at a Glance report estimates that global space-related revenues reached approximately 550 to 600 billion US dollars in 2025, depending on the scope of activities included. These estimates cover a broad range of space-related products and services rather than only spacecraft manufacturing or launch revenue. The figures illustrate how satellite communications, navigation, Earth observation and other space-enabled services have become significant parts of the wider global economy.",
      },
      {
        type: "heading",
        text: "The Commercial Satellite Industry",
      },
      {
        type: "paragraph",
        text: "Satellites are one of the most commercially important parts of the space economy. Businesses use them to provide broadband internet, television broadcasting, mobile communications, navigation and environmental monitoring. Large satellite constellations are being developed to provide wider coverage and connect users in areas where traditional communications infrastructure is limited. Earth observation companies also sell satellite imagery and data to organisations involved in agriculture, insurance, construction, transportation and environmental management. These businesses demonstrate how information collected from orbit can create commercial value across many different industries.",
      },
      {
        type: "heading",
        text: "Rocket Companies and Commercial Launch Services",
      },
      {
        type: "paragraph",
        text: "Commercial launch providers play an important role by transporting satellites and other payloads into orbit. Companies compete through launch reliability, payload capacity, mission scheduling, pricing and access to different orbital destinations. Reusable rocket technology is another important area of development because recovering and flying major rocket components again could change the economics of launch operations. However, recovery and refurbishment still require engineering work and operational investment. The long-term commercial advantage depends on how reliably launch vehicles can operate and how frequently their components can be reused.",
      },
      {
        type: "heading",
        text: "How Space Technology Supports Other Industries",
      },
      {
        type: "paragraph",
        text: "Space technology supports a wide range of economic activities beyond the aerospace sector. Satellite navigation helps transportation companies manage routes, track vehicles and coordinate deliveries. Earth observation data can help farmers monitor crops, estimate agricultural conditions and identify environmental changes. Insurance companies may use satellite imagery to assess damage after floods, storms and other natural disasters. Telecommunications providers rely on satellites to connect remote areas and support broadcasting services. These applications show that the economic value of space infrastructure often comes from services delivered to customers on Earth rather than activities performed in orbit.",
      },
      {
        type: "heading",
        text: "Government Space Agencies and Private Companies",
      },
      {
        type: "paragraph",
        text: "Government agencies and private companies have different but increasingly connected roles in the space economy. Public organisations fund scientific research, develop exploration programmes, establish regulations and purchase commercial services. Private companies manufacture spacecraft, operate launch systems, build satellite networks and provide specialised technologies. Government contracts can create demand for commercial services while allowing agencies to focus on scientific and exploration objectives. This relationship has become particularly important in areas such as cargo transportation, crewed spacecraft development, lunar landing systems and satellite communications.",
      },
      {
        type: "heading",
        text: "Investment and Business Opportunities in Space",
      },
      {
        type: "paragraph",
        text: "Investment opportunities in the space industry extend across several different business segments. These include rocket manufacturing, satellite production, ground equipment, propulsion systems, communications infrastructure, Earth observation services and software platforms that analyse satellite data. Companies may generate revenue by selling hardware, operating spacecraft, providing launch services or supplying data to commercial and government customers. However, space businesses can face high development costs, long project timelines, technical uncertainty and regulatory requirements. Commercial potential therefore depends on more than technological innovation; companies must also demonstrate sustainable demand and reliable operations.",
      },
      {
        type: "heading",
        text: "The Growing Role of Small Satellites",
      },
      {
        type: "paragraph",
        text: "Smaller satellites have helped expand participation in the space industry. CubeSats and other compact spacecraft can be developed for scientific research, technology demonstrations, Earth observation and communications experiments. Their smaller size can reduce some manufacturing and launch costs, making space projects more accessible to universities, research institutions and emerging businesses. Commercial rideshare programmes also allow several small spacecraft to share the capacity of a single rocket. Although small satellites have limitations in power, payload capacity and operational lifetime, they have created new opportunities for innovation and participation in space activities.",
      },
      {
        type: "heading",
        text: "Challenges Facing the Space Economy",
      },
      {
        type: "paragraph",
        text: "The expansion of commercial space activities creates several important challenges. Increasing numbers of satellites raise concerns about orbital congestion, collision risks and the long-term accumulation of space debris. Radio-frequency interference, cybersecurity, international regulations and access to critical space infrastructure also require attention. Businesses must manage the financial risks associated with expensive development programmes and uncertain market demand. As more industries depend on satellite services, disruptions to space infrastructure could affect communications, navigation, transportation and other important services. Responsible operations and international cooperation will therefore be essential for sustainable growth.",
      },
      {
        type: "heading",
        text: "What Is the Future of the Global Space Economy?",
      },
      {
        type: "paragraph",
        text: "The space economy is expected to continue developing through satellite networks, commercial launch services, Earth observation, scientific missions and new space-based infrastructure. Future opportunities may include more advanced communications systems, improved satellite data services, commercial space stations and technologies supporting lunar exploration. However, growth will depend on reliable hardware, sustainable business models, responsible orbital operations and continued demand from governments and commercial customers. The industry is moving beyond traditional government-led exploration toward a broader ecosystem in which private companies, research institutions and public agencies contribute to the development of space technology and services.",
      },
    ],
  },
] satisfies Article[];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
