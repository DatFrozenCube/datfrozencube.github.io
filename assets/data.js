/*
  Portfolio content.
  To add a project: copy one entry in PROJECTS, change the fields, and drop its
  images into /images. Set hidden: true to keep a project off the site.
  Fields left empty ("" or []) are simply not shown.
*/

window.SITE = {
  name: "Davis Mesmer",
  headline: "Davis Mesmer",
  intro:
    "I'm a producer in the Master of Entertainment Arts and Engineering program at the University of Utah, and before that I was a software engineer at CarMax. I'm seeking a production internship as part of my studies for Summer of 2027.",
  // Anything left empty is hidden.
  email: "gogreenmesmer@hotmail.com",
  linkedin: "https://www.linkedin.com/in/davis-mesmer/",
  resume: "resume.pdf", // replace resume.pdf in the site folder to update it
  github: "https://github.com/DatFrozenCube",
  itch: "https://datfrozencube.itch.io",
  // Badges shown in the header on every page.
  badges: [
    {
      img: "images/utah-games.webp",
      href: "https://games.utah.edu/",
      label: "Utah Games, University of Utah. Ranked a top 5 graduate game design program by The Princeton Review, 2026",
      tip: "Utah Games: top 5 graduate game design program (Princeton Review, 2026)",
      title: "Utah Games, University of Utah",
      caption: "Producer, Master of Entertainment Arts and Engineering. A top 5 graduate game design program (Princeton Review, 2026).",
    },
    {
      img: "images/unity-certified-programmer.webp",
      href: "https://www.credly.com/badges/93882382-6ee4-43ae-95ff-523e3c6ce599/public_url",
      label: "Unity Certified User: Programmer. View the credential on Credly",
      tip: "Unity Certified User: Programmer (verify on Credly)",
      title: "Unity Certified User: Programmer",
      caption: "Verified credential on Credly.",
    },
  ],
  // Shown on the résumé page next to the PDF.
  resumeHighlights: [
    "Master of Entertainment Arts and Engineering, University of Utah (Producer track, in progress)",
    "Teaching assistant, Utah Games",
    "Software Engineer, CarMax (Fortune 100)",
    "B.B.A. in Computer Information Systems, James Madison University, 2022. Cum laude, Honors College",
    "2nd place overall, Jackson-Rainey Business Plan Competition",
    "Unity Certified User: Programmer",
  ],
  skills: {
    production: [
      "Sprint planning and backlogs",
      "Kanban in Trello and Jira",
      "RACI charts",
      "Standups",
      "Team social contracts",
      "Scope management",
      "Remote teams across time zones",
      "Miro planning and retrospectives",
    ],
    development: [
      "Unity and C#",
      "Unreal Engine 5 Blueprints",
      "Boss AI with state machines",
      "Cinematics with Unity Timeline",
      "Procedural maze generation",
      "Player movement and camera systems",
      "Lighting, shaders and level design",
      "Audio integration",
      "GLSL shaders in WebGL",
      "C++ fundamentals",
    ],
  },
  // A one-line highlight under the skills, with a couple of photos.
  photography: {
    title: "Photographer",
    text: "I've been shooting landscapes since high school. That eye for framing and light is what I bring to camera systems and cutscenes, like the Spider Queen reveal in Terrarium.",
    photos: ["images/photo-1.webp", "images/photo-2.webp"],
  },
  // Small code samples shown under the game projects.
  code: [
    {
      title: "OpenGL Shader Designs",
      lang: "GLSL, WebGL",
      text: "A fragment shader written from scratch: signed distance shapes, cosine color palettes and animated polar patterns. Built while working through LearnOpenGL and The Book of Shaders.",
      demo: "https://datfrozencube.github.io/GLSLShaders/",
      code: "https://github.com/DatFrozenCube/GLSLShaders",
    },
    {
      title: "Monster Arena",
      lang: "C++",
      text: "A terminal battle simulator where goblins, trolls and orcs fight in teams. Uses inheritance, virtual overrides and dynamic casts so each monster type attacks, heals or blocks differently.",
      code: "https://github.com/DatFrozenCube/Monster-Arean",
      snippet: [
        "class Goblin : public Monster{",
        "  virtual string Attack(Monster& target) override{",
        "    for (int i = 0; i < this->attacks; i++){",
        "      target.health -= this->damage;",
      ],
    },
  ],
};

/*
  kind controls the color on the schedule chart:
  "production" = producing or directing, "development" = building, "both" = both.
*/
window.PROJECTS = [
  {
    slug: "oto",
    title: "Oto",
    featured: true,
    kind: "production",
    label: "Serious game for education",
    context: "University of Utah, MEAE",
    type: "Graduate project",
    role: "Producer",
    roleSummary:
      "A VR serious game that teaches Western audiences about the taiko drum.",
    start: "2026-09-10",
    end: "2026-10-08",
    engine: "Unreal Engine 5",
    language: "Blueprints",
    teamSize: 7,
    team: [
      ["MJ Nelson", "Tech art"],
      ["Wenji Pu", "Tech art"],
      ["Aryan Chaudhary", "Game design"],
      ["Phil Morgan", "Engineering"],
      ["Tanner Booth", "Game art"],
      ["Tengxiang Yang", "Game art"],
      ["Davis Mesmer", "Production"],
    ],
    pitch:
      "A traditional Japanese drum experience in VR. The world around you transforms as you learn the culture behind taiko.",
    cover: "images/oto-cover.webp",
    coverFit: "cover",
    coverPos: "center 20%",
    coverBg: "#efe6d6",
    shots: [
      "images/oto-1.webp",
      "images/oto-2.webp",
      "images/oto-3.webp",
      "images/oto-4.webp",
      "images/oto-5.webp",
    ],
    itch: "",
    playEmbed: null,
    github: "",
    video: "",
    awards: "",
    did: [
      "Built the Jira board that took the team to an MVP by lock date",
      "Created a RACI chart so everyone knew who owned what",
      "Ran standups every class session on progress and blockers",
      "Wrote a team social contract to set communication expectations",
      "Finalized the build and submitted it to the deliverable channels",
    ],
    goals: [
      ["Educate", "Teach Western audiences the tradition behind the taiko."],
      ["Stay faithful", "Translate playing taiko into VR respectfully and accurately."],
      ["Invite curiosity", "Encourage players to engage further with Japanese culture."],
    ],
    process:
      "Development centered on making the drums satisfying to play and accurate to their real-world counterparts, in service of an educational experience.",
    lessons: [
      "Decide early what counts as the minimum viable product",
      "Communicate clear responsibilities to the whole team",
      "Spell out appropriate AI use in the social contract",
      "For serious games, consult the experts",
    ],
    production: {
      tools: ["Jira", "RACI chart", "Social contract", "Standups"],
      approach: [
        "I ran the project in Jira with a target lock date and MVP requirements. Tickets were tagged by discipline and grouped under workflows such as Playable Demos and Final Deliverables.",
        "Standups were held every class meeting to keep team members up to date on what everyone was working on. The board was updated daily to keep the project timeline accurate.",
      ],
      lessons: [
        "Put ownership in writing. This increases accountability and encourages people to ask questions.",
        "Set AI rules up front. Specific AI controls prevents creative slop while simultaneously increasing efficiency",
      ],
      images: [
        ["images/oto-jira.webp", "The Jira board near lock date, with finished work grouped by week."],
      ],
      raci: {
        roles: ["Production", "Tech art", "Game design", "Game art", "Engineering"],
        groups: [
          ["VR project", [
            ["Gaussian splat rendering", "I", "R", "A", "C", "I"],
            ["Art style", "I", "A", "C", "R", "I"],
            ["Level design", "I", "C", "R", "I", "A"],
            ["Modeling", "I", "A", "C", "R", "I"],
            ["Blueprints", "I", "A", "I", "C", "R"],
            ["Version control", "I", "A", "I", "C", "R"],
          ]],
          ["Documentation", [
            ["Design documentation", "C", "I", "R", "I", "I"],
            ["RACI chart", "R", "I", "C", "I", "I"],
            ["Social contract", "R", "I", "C", "I", "I"],
            ["Jira", "R", "I", "C", "I", "I"],
            ["Playtest survey", "C", "I", "R", "I", "I"],
            ["One-sheet", "A", "R", "C", "I", "I"],
            ["Tech document", "A", "I", "I", "I", "R"],
            ["Iteration log", "R", "I", "C", "I", "I"],
            ["Project readme", "A", "", "C", "", "R"],
          ]],
          ["Playability", [
            ["Demo builds (playtest)", "I", "A", "C", "I", "R"],
            ["Wrap kit submission", "R", "A", "C", "I", "I"],
            ["Rapid pitch", "R", "I", "C", "I", "I"],
            ["Final build", "A", "I", "C", "I", "R"],
            ["Screenshots", "A", "I", "C", "R", "I"],
            ["Video of gameplay", "A", "I", "C", "R", "I"],
          ]],
        ],
      },
      contract: [
        ["Standups", "Tuesdays and Thursdays at 9:15 AM: what you did, what you're doing next, and what's blocking you. Be on time."],
        ["Workload", "About 15 hours a week for a 4-credit course, and stay through the end of class."],
        ["Jira", "Check the board every week for your work and its timeline. Questions go to me."],
        ["Respect", "Be respectful, take feedback without taking it personally, and be mindful of people's weekends."],
        ["Stay in your lane", "If you're not Responsible for a task on the RACI chart, it isn't yours to decide."],
        ["AI policy", "Use AI for tech art and for learning new topics. Don't use it for writing, code, Blueprints or game art."],
      ],
      trello: "",
      miro: [],
      plan: "",
    },
  },

  {
    slug: "crypt-dig",
    title: "Crypt-Dig",
    featured: true,
    kind: "production",
    label: "Rapid prototyping",
    context: "University of Utah, MEAE",
    type: "Graduate project",
    role: "Producer",
    roleSummary:
      "Ran schedules, meetings and workloads for a seven-person team building a classic arcade game in two weeks, and helped in Unity and C# where needed.",
    start: "2026-08-25",
    end: "2026-09-10",
    engine: "Unity",
    language: "C#",
    teamSize: 7,
    team: [
      ["Nicholas Gross", "Engineering"],
      ["Jinze Song", "Tech art"],
      ["Xunuo Zhong", "Tech art"],
      ["Xinyu Lu", "2D art"],
      ["Brandon Danens", "2D art"],
      ["Wenjie Fu", "Game design"],
      ["Davis Mesmer", "Production"],
    ],
    pitch:
      "Dig through ancient catacombs, grab treasure and diamonds, and reach the pyramid exit before the spiders find you. Inspired by Dig Dug.",
    cover: "images/crypt-dig-cover.webp",
    coverFit: "contain",
    coverBg: "#000000",
    shots: [
      "images/crypt-dig-2.webp",
      "images/crypt-dig-1.webp",
      "images/crypt-dig-3.webp",
      "images/crypt-dig-4.webp",
    ],
    itch: "https://datfrozencube.itch.io/cryptdig",
    playEmbed: { id: "19247070", width: 640, height: 380 },
    github: "",
    video: "",
    awards: "",
    did: [
      "Ran the Trello board with Kanban to prioritize tasks",
      "Led ideation and task breakdown on a physical whiteboard",
      "Kept the sprint backlog, iteration log and to-do list current",
      "Helped build in Unity when the team needed it",
    ],
    goals: [
      ["Every path has a purpose", "As you dig, spiders can change direction, creating tense moments."],
      ["Make the player feel vulnerable", "A dark environment you light up with torches."],
      ["Constant small wins", "Plenty of collectables to keep the score climbing."],
      ["Easy to play, hard to master", "Arcade rules in the spirit of Dig Dug."],
    ],
    process:
      "Tech art and 2D art were integrated from day one. Animation, movement and level design were all planned around getting as much art into the game as possible. With only one engineer, we pulled complex systems from free libraries to keep the engineering load realistic.",
    lessons: [
      "Set specific deadlines to avoid last-minute work",
      "Playtest often and act on the feedback",
      "Develop iteratively, and cut scope when in doubt",
      "Design for the target platform and its affordances",
      "Shape workloads around the team you actually have",
    ],
    production: {
      tools: ["Trello", "Physical whiteboard", "Discord"],
      challenges: "Few engineers, a team new to game development, and a tight timeline.",
      strengths: "Talented artists, a team comfortable in Unity, and high engagement.",
      approach: [
        "Communication was built for quick adaptation: effectively one agile sprint from idea to build.",
        "Disciplines talked to each other constantly. My job was to be the conduit between them.",
      ],
      lessons: [
        "Plan around the team's strengths and weaknesses. We cut engineering load for our single engineer.",
        "Help where you can, but keep production as the primary focus.",
      ],
      trello: "https://trello.com/b/2Uj1Kjcu",
      miro: [],
      plan: "https://docs.google.com/document/d/e/2PACX-1vR08JOukkna6EaWKytI4NjuKsrMiXCi6V_sLotLBtSyHKAAtdt_TbU24J54zd4pjQ8eo5OJRi28zYQ7/pub?embedded=true",
    },
  },

  {
    slug: "risk-it-raccoon",
    title: "Risk-it-Raccoon!",
    featured: false,
    kind: "production",
    label: "Team leadership",
    context: "Brackeys Game Jam 2025.2",
    type: "Game jam",
    role: "Project Lead",
    roleSummary:
      "Directed production across art, programming, music and sound, with a focus on presentation and polish.",
    start: "2025-08-25",
    end: "2025-09-01",
    engine: "Unity",
    language: "C#",
    teamSize: 4,
    team: [
      ["Garrett Priess", "Lead Unity developer"],
      ["Cecilia Cecchet", "Game art"],
      ["Nicholas Palmer", "Music"],
      ["Davis Mesmer", "Project Lead"],
    ],
    pitch:
      "Run, jump and dash to the biscuit, then get back to your dumpster. A Frogger-style arcade game that gets harder every day.",
    cover: "images/risk-it-raccoon-cover.webp",
    coverFit: "cover",
    coverBg: "#6a8f7a",
    shots: [
      "images/risk-it-raccoon-1.webp",
      "images/risk-it-raccoon-2.webp",
      "images/risk-it-raccoon-3.webp",
      "images/risk-it-raccoon-4.webp",
    ],
    itch: "https://datfrozencube.itch.io/risk-it-raccoon",
    playEmbed: { id: "14835387", width: 640, height: 380 },
    github: "",
    video: "fn1dQFVeLfE",
    awards: "Top 100 for theme and top 300 overall, out of 2,000+ entries",
    did: [
      "Recruited the team",
      "Learned each role well enough to use everyone's time well",
      "Managed workloads and kept scope realistic for seven days",
      "Coordinated across several time zones",
      "Encouraged creativity while protecting work-life balance",
    ],
    goals: [
      ["Reward risk", "Cross roads and dodge cars to reach the prize."],
      ["Timing", "Players plan their moves to make it across."],
      ["Rising difficulty", "The level grows with every completed run."],
      ["Lively and light", "A cheerful, lighthearted look and feel."],
    ],
    process:
      "Built in seven days. You play a raccoon literally risking it for the biscuit. The idea started as collecting biscuits as a raccoon, grew into a Frogger-like, and settled as an endless arcade game where each day is harder than the last.",
    lessons: [
      "Large jam teams are hard to manage. Cut scope and unnecessary roles.",
      "Art and sound workloads balloon even on small projects. Vet requests and set boundaries.",
    ],
    reflection:
      "An earlier jam taught me that big teams with loosely defined roles are hard to run. Here I pushed the team toward something small and polished, and built boundaries for our artist into the plan so the workload stayed reasonable.",
    production: {
      tools: ["Miro", "Trello", "Discord", "Google Drive"],
      challenges: "A small team, a short window, competing life demands, and several time zones.",
      strengths: "A team that had worked together before, skilled and committed members, and everyone working toward the group outcome.",
      approach: [
        "Communication focused on simple, concrete steps.",
        "I cut scope to something manageable so we could ship a polished game in the time we had, which made for a more fluid player experience.",
      ],
      lessons: [
        "Artists need extra time to produce high-quality work.",
        "Scope often decides team size.",
        "Going in with a communication plan reduces friction.",
      ],
      trello: "https://trello.com/b/UjnxqKEM",
      miro: [
        ["Planning board", "https://miro.com/app/live-embed/uXjVJQzd2jw=/?embedMode=view_only_without_ui&moveToViewport=656,-1479,4823,2461&embedId=63026357155"],
      ],
      plan: "https://docs.google.com/document/d/e/2PACX-1vT7W06gMRcsvQp9Ttb2BPiPbH7ld3FqlVgp4QClorDmMcO_Vou6Z7cL4hbXFRidvL7yqfJ-PnFOWDjc/pub?embedded=true",
    },
  },

  {
    slug: "terrarium",
    title: "Terrarium: Blossom's Valley",
    featured: false,
    kind: "development",
    label: "Indie project",
    context: "Independent expansion",
    type: "Independent",
    role: "Unity Developer",
    roleSummary:
      "Recruited to build a planned expansion: combat, bosses, camera and cinematics.",
    start: "2025-03-01",
    end: "2026-03-01",
    engine: "Unity",
    language: "C#",
    teamSize: 2,
    team: [
      ["Garrett Priess", "Game lead"],
      ["Davis Mesmer", "Unity developer"],
    ],
    pitch:
      "A cute farming adventure. Cultivate exotic flowers, tame creatures and explore biomes from snow to corruption.",
    cover: "images/terrarium-cover.webp",
    coverFit: "contain",
    coverBg: "#f7dc5c",
    shots: [
      "images/terrarium-1.webp",
      "images/terrarium-2.webp",
      "images/terrarium-3.webp",
      "images/terrarium-4.webp",
    ],
    itch: "https://g-ratta.itch.io/terrarium",
    playEmbed: null,
    github: "",
    video: "IIUXn7M47lc",
    awards: "",
    did: [
      "Designed the combat system and mechanics",
      "Built the Spider Queen boss's behavior and animation with a state machine that switches stages based on what the player does",
      "Built the boss's cavern and a cutscene shot with Unity Timeline, aiming for a Dark Souls level of menace",
      "Reworked the camera system and added an enemy lock-on",
    ],
    goals: [
      ["Freedom to explore", "Branching paths for different playthroughs."],
      ["Multiplayer", "Play with friends."],
      ["Wide appeal", "Combat for core players, farming for casual ones."],
      ["Progression", "Rewards that reinforce mastery."],
    ],
    process:
      "The current demo shows the game's early work. Most of my work belongs to the planned expansion, which adds characters, cameras, controls, bosses, farming and fishing. The video above is a first look at the expansion.",
    lessons: [
      "When scope is too big, tackle it in small pieces",
      "Give yourself more time than you think you need",
    ],
    reflection:
      "The scope here is ambitious. Building the first boss, the Spider Queen, taught me to start small and scale out. Large games with small teams take a long time.",
    production: {
      tools: ["Miro", "Discord"],
      challenges: "A small team, keeping the code organized, and limited art and music staff.",
      strengths: "A history of working together, a clear vision for scope, and set deadlines.",
      approach: [
        "Communication revolved around generating and implementing ideas.",
        "We documented what was in scope for the expansion and split the work between us.",
      ],
      lessons: [
        "Setting deadlines early reduces fatigue.",
        "Start with a small scope and expand later if needed.",
        "Small teams mean longer development, depending on the project.",
      ],
      trello: "",
      miro: [
        ["Development progress", "https://miro.com/app/live-embed/uXjVIW_OIhw=/?embedMode=view_only_without_ui&moveToViewport=-32170,-4356,23017,11745&embedId=489206972056"],
      ],
      plan: "",
    },
  },

  {
    slug: "mousetrap",
    title: "Mousetrap",
    featured: false,
    kind: "both",
    label: "Gameplay systems",
    context: "Open source",
    type: "Independent",
    role: "Project Lead and Unity Programmer",
    roleSummary:
      "A solo, open-source project I started to learn event-based programming. I wrote all the code and direct the art and audio.",
    start: "2025-08-01",
    end: "",
    engine: "Unity",
    language: "C#",
    teamSize: 1,
    team: [["Davis Mesmer", "Project lead and programmer"]],
    pitch:
      "Guide a mouse through procedurally generated mazes to the cheese. Every level is new. Controls: WASD and Space.",
    cover: "images/mousetrap-cover.webp",
    coverFit: "contain",
    coverBg: "#0d0b1e",
    shots: [
      "images/mousetrap-1.webp",
      "images/mousetrap-2.webp",
      "images/mousetrap-3.webp",
    ],
    itch: "https://datfrozencube.itch.io/mousetrap",
    playEmbed: { id: "16815305", width: 1000, height: 770 },
    github: "https://github.com/DatFrozenCube/Mousetrap",
    video: "",
    awards: "",
    did: [
      "Wrote all game code, including the procedural maze algorithm, menus, timer and scoring",
      "Built the lighting and camera system",
      "Coordinated with artists for tilesets and character art",
      "Implemented sound, particle effects and music",
    ],
    goals: [
      ["Open source", "The code is free and available to read."],
      ["Fast fun", "Timers and points push for high scores."],
      ["Arcade feel", "A chiptune, 8-bit soundtrack."],
      ["Atmosphere", "Dark crawl-space mazes create urgency."],
    ],
    process:
      "Built over several months to learn event-based programming in C#, using C# actions to keep systems decoupled.",
    lessons: [
      "Working solo: take extra time to plan and ask for advice",
      "Keeping it fresh: playtest with people in your network",
      "Writing concise code: lean on C# actions and events",
    ],
    reflection:
      "Understanding programming workload firsthand made me a better lead. On Risk-it-Raccoon! I pushed the developers toward simple, concise code because of what I learned here.",
    production: null,
  },

  {
    slug: "null-terminal",
    title: "Null Terminal",
    featured: false,
    kind: "development",
    label: "Shaders and level design",
    context: "Brackeys Game Jam 2025.1",
    type: "Game jam",
    role: "Unity Developer",
    roleSummary:
      "Technical designer on level design, atmosphere, movement and visuals. Co-directed the concept.",
    start: "2025-02-17",
    end: "2025-02-25",
    engine: "Unity",
    language: "C#",
    teamSize: 6,
    team: [
      ["Garrett Priess", "Lead Unity developer"],
      ["Davit Lobzhanidze", "Unity developer"],
      ["Davis Mesmer", "Unity developer"],
      ["Nicholas Palmer", "Music"],
      ["Alex Packham", "Game art"],
      ["Corey Craig", "Sound design"],
    ],
    pitch:
      "An asteroid has wrecked your ship. Loot parts, craft repairs and fix the distress beacon before everything falls apart.",
    cover: "images/null-terminal-cover.webp",
    coverFit: "cover",
    coverBg: "#3a2a1f",
    shots: [
      "images/null-terminal-1.webp",
      "images/null-terminal-2.webp",
      "images/null-terminal-3.webp",
    ],
    itch: "https://g-ratta.itch.io/null-terminal",
    playEmbed: { id: "12920725", width: 1000, height: 770 },
    github: "",
    video: "",
    awards: "Top 30%: rank 600 of 2,181 entries, and top 300 for theme",
    did: [
      "Implemented the player movement system",
      "Designed the levels for the ship environment",
      "Integrated sound and music into the atmosphere",
      "Designed lighting, shaders and textures",
      "Selected the assets used to build the game",
    ],
    goals: [
      ["Problem solving", "Players learn to craft the items that repair the ship."],
      ["Prioritization", "Several systems fail at once and compete for attention."],
      ["Time pressure", "Quick decisions or the ship is lost."],
      ["Mystery", "An eerie atmosphere that rewards exploring."],
    ],
    process:
      "Co-directed with Garrett Priess. The theme was \"Nothing can go wrong,\" which we flipped into a game where everything goes wrong. Players craft parts to repair their distress beacon and escape. Three developers, one artist and two audio designers.",
    lessons: [
      "New engine: dive in, explore, and ask for feedback",
      "Hard project, little time: give every teammate clear responsibilities",
    ],
    reflection:
      "My first game jam. I learned how Unity works, how to organize work with GitHub, and what programmers, artists and composers actually need during a jam. That understanding is what let me lead later jams.",
    production: {
      tools: ["Miro", "Trello", "Discord"],
      challenges: "First jam, a new team, new technology, multiple time zones, and fitting the theme.",
      strengths: "A clear direction, a motivated team, and talented programmers and artists.",
      approach: [
        "As my first jam, I took a supporting role and focused on understanding what my teammates could do, so I could plan better on future projects.",
      ],
      lessons: [
        "Getting to know your team is part of the development process.",
        "Creativity and team diversity seem to go together.",
      ],
      trello: "https://trello.com/b/5E4hoefm",
      miro: [
        ["Initial idea board", "https://miro.com/app/live-embed/uXjVIeC3tTU=/?embedMode=view_only_without_ui&moveToViewport=-1344,-872,2896,1478&embedId=626134721770"],
        ["Retrospective board", "https://miro.com/app/live-embed/uXjVIba6q0Y=/?embedMode=view_only_without_ui&moveToViewport=-8218,-2577,17898,9133&embedId=505429884787"],
      ],
      plan: "",
    },
  },

  {
    slug: "looper",
    title: "Looper",
    hidden: true, // Was a draft on Webflow and the jam build is broken. Set to false to show it.
    featured: false,
    kind: "development",
    label: "Combat and enemy AI",
    context: "GMTK Game Jam 2025",
    type: "Game jam",
    role: "Technical Designer",
    roleSummary: "Technical designer on player movement, combat and enemy AI.",
    start: "2025-07-30",
    end: "2025-08-03",
    engine: "Unity",
    language: "C#",
    teamSize: 7,
    team: [],
    pitch:
      "Loop through a never-ending maze to find all six cassette tapes in this 2D beat-'em-up inspired by Hotline Miami.",
    cover: "images/looper-cover.webp",
    coverFit: "cover",
    coverBg: "#3b2b2b",
    shots: [],
    itch: "https://g-ratta.itch.io/looper",
    playEmbed: null,
    github: "",
    video: "",
    awards: "",
    did: [],
    goals: [],
    process:
      "For the theme \"Loop,\" getting hit grants a rewind of up to ten seconds so you can replay the moment with better knowledge. Rewinds are limited, shown as a VHS tape that breaks when you run out. The level itself loops back on itself.",
    lessons: ["Time management under pressure"],
    production: null,
  },
];
