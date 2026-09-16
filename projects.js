/* =====================================================================
   PROJECTS: this is the only file you need to edit to add or change projects.

   Each project in the list below is shown in two places:
     • as a card in "Selected work" on the homepage
     • on its own page:  project.html?p=<slug>

   TO ADD A PROJECT
     1. Copy the TEMPLATE at the very bottom of this file.
     2. Paste it inside the list, where you want it to appear (order = display order).
     3. Fill in the fields. Anything marked (optional) can be deleted.
     4. Put your photos in  images/<slug>/  and list them under `images`.

   TIPS
     • Text can use simple HTML, e.g. <strong>bold</strong> or <a href="...">a link</a>.
     • Keep a comma after every  }  that has another project after it.
     • colors: "teal", "blue", "sun", "coral", or "violet"
   ===================================================================== */

window.PROJECTS = [

  // ------------------------------------------------------------------
  {
    slug: "slugbot",
    title: "SLUGBOT V2: Aplysia-Inspired Robotic Grasper",
    label: "Current research · CMU",
    color: "teal",
    featured: true,                       // shows as the big card on the homepage
    role: "Research Assistant · Co-author",
    org: "Biohybrid & Organic Robotics Group (BORG), Carnegie Mellon University",
    dates: "Aug 2025 – Present",
    team: "Advisor: Dr. Victoria Webster-Wood · 11 co-authors across CMU, Case Western, Lincoln & Oxford",
    summary: "A soft robotic model of the feeding apparatus of the sea slug <em>Aplysia</em>, redesigned to match the animal's anatomy more closely so it can reproduce swallowing more faithfully.",
    cover: "images/slugbot/brain-conference.jpg",
    coverPosition: "30% 40%",             // which part of the cover photo to keep when cropped
    overview: [
      "The sea slug <em>Aplysia californica</em> is a well-studied model in neuroscience: its simple, accessible nervous system has allowed detailed study of its muscles and neural circuits. Its feeding apparatus, the <strong>buccal mass</strong>, is a model for adaptable control and multifunctional grasping.",
      "The first <strong>Slug-Like Uniaxial Grasping roBOT (SLUGBOT)</strong> mimicked the animal's feeding behavior qualitatively, but its shape wasn't biologically accurate, which left a large <strong>sim-to-real gap</strong>. <strong>SLUGBOT V2</strong> is smaller, uses actuators that better match <em>Aplysia</em>'s anatomy, and has a redesigned I2 grasper-protractor muscle.",
      "Driven by a <strong>Boolean neural controller</strong> modeled on the animal's feeding circuit, SLUGBOT V2 reproduces <em>Aplysia</em>-like ingestion during swallowing and matches key swallowing kinematics much more closely than V1."
    ],
    detailsTitle: "How SLUGBOT V2 mimics the animal",
    details: [
      { title: "I2 protractor muscle", text: "New high-contraction pouch actuators let the grasper protract like the animal's." },
      { title: "I3 muscles", text: "Reshaped toroidal McKibben rings match the muscle's length and taper." },
      { title: "Jaws", text: "Added linear McKibben actuators provide clamping force on food." },
      { title: "Hinge", text: "A combination of more biorealistic elastic elements." },
      { title: "Neural control", text: "Simulated interneurons and motor neurons set the phasing that drives the robot's pressure system." },
      { title: "Sensing", text: "A force-sensitive resistor measures grasper pressure, a BNO055 gyroscope tracks rotation, and a potentiometer monitors position." }
    ],
    contributions: [
      // ✏️ Edit these so they describe exactly what YOU did on SLUGBOT
      "Designed and iterated the robot, contributing to <strong>soft actuator fabrication</strong>, <strong>custom PCB design</strong>, and <strong>closed-loop control</strong>.",
      "Worked on the <strong>neural control</strong> that drives the robot's swallowing behavior.",
      "Prototyped and experimentally evaluated designs, contributing to submissions to <strong>IEEE/RSJ IROS</strong> and <strong>IEEE ICRA</strong>.",
      "Co-authored and presented the SLUGBOT V2 poster at the <strong>Midwest Robotics Workshop</strong> and the <strong>2026 NIH BRAIN Initiative Conference</strong>.",
      "Separately, built a <strong>computer-vision pipeline in OpenCV</strong> to automatically characterize the locomotion of the lab's snake robot."
    ],
    results: [
      { value: "6 → 30.5 mm", label: "grasper translation, V1 → V2" },
      { value: "15° → 35°", label: "grasper rotation, V1 → V2" },
      { value: "2", label: "conference posters in 2026" }
    ],
    skills: ["Soft pneumatic actuators", "McKibben & pouch actuators", "Bio-inspired design", "Neuromechanical modeling", "Closed-loop control", "Sensor integration", "Custom PCB design", "Computer vision", "Research communication"],
    tools: ["OpenCV"],                    // ✏️ add the other tools you used
    learnings: [
      "Why a robot's physical shape matters as much as its controller for closing the sim-to-real gap.",
      "Fabricating and tuning soft pneumatic actuators so they behave like biological muscle.",
      "Measuring biological accuracy by comparing robot kinematics against published animal data.",
      "Presenting interdisciplinary work to both robotics and neuroscience audiences."
    ],
    videos: [
      { src: "images/slugbot/slugbot-v2-video.mp4", poster: "images/slugbot/slugbot-v2-video-thumb.jpg",
        caption: "SLUGBOT V2 video: V1 vs. V2 anatomy, the actuators, and the neural controller driving swallowing (shown at 15× speed)." }
    ],
    posters: [
      { title: "SLUGBOT V2: An Aplysia-Inspired Robotic Grasper With Improved Anatomical Accuracy",
        venue: "2026 NIH BRAIN Initiative Conference",
        text: "Interactive iPoster with zoomable figures and supplementary videos.",
        interactive: "https://brainconference2026.ipostersessions.com/Default.aspx?s=20-E8-7A-97-B5-2B-BB-BF-85-8F-B6-3F-7D-9B-8A-F3",
        embed: true },                    // set to false if the poster won't load inside the page
      { title: "SLUGBOT V2: An Aplysia-Inspired Robotic Grasper With Improved Anatomical Accuracy",
        venue: "Midwest Robotics Workshop 2026",
        text: "G. Vega*, C. J. Fernandez*, <strong>M. Dixit</strong>, R. Sukhnandan, M. J. Bennington, K. Dai, S. M. Rogers, G. P. Sutton, H. J. Chiel, R. D. Quinn, V. A. Webster-Wood. <br><small>* equal contribution</small>",
        image: "images/slugbot/slugbot-v2-poster.jpg",
        pdf: "images/slugbot/slugbot-v2-poster.pdf" }
    ],
    images: [
      { src: "images/slugbot/brain-conference.jpg", caption: "Presenting at the 2026 NIH BRAIN Initiative Conference" },
      { src: "images/slugbot/midwest-robotics-workshop.jpg", caption: "Presenting SLUGBOT V2 at the Midwest Robotics Workshop" }
    ],
    links: [
      { label: "Interactive poster", url: "https://brainconference2026.ipostersessions.com/Default.aspx?s=20-E8-7A-97-B5-2B-BB-BF-85-8F-B6-3F-7D-9B-8A-F3" },
      { label: "Poster PDF", url: "images/slugbot/slugbot-v2-poster.pdf" }
    ]
  },

  // ------------------------------------------------------------------
  {
    slug: "manta-ray",
    title: "AquaMorph: Soft Robotic Manta Ray",
    label: "Senior Design · Technical Lead",
    color: "blue",
    role: "Technical Lead",
    org: "Mechanical Engineering Capstone, Purdue University",
    dates: "Jan – May 2025",
    team: "Kagan Sears, Grace Olden, Maitreyi Dixit, Somya Jain, Carissa Lukac, Daniel Chen",
    summary: "A manta ray–inspired underwater robot with soft silicone fin actuators, a sealed body and electronics box, and phone-app control, built for quiet, low-impact ocean observation.",
    thumb: "images/manta-ray/render.jpg",          // image on the homepage card
    cover: "images/manta-ray/showcase-team.jpg",  // big image at the top of the project page
    coverPosition: "50% 62%",
    overview: [
      "Oceans cover more than 70% of Earth's surface, yet much of them remains unexplored, and the tools used to study them are often rigid, loud, and bad at moving like the marine life they observe. For our senior capstone, our six-person team set out to build a robot that moves <em>with</em> the water instead of against it.",
      "<strong>AquaMorph</strong> takes its shape and motion from the manta ray. Soft silicone actuators drive the fins and tail for quiet, fin-based swimming. A fully enclosed, gasketed body protects the electronics, the onboard sensors and a low-light camera, and the robot is driven from a phone app over Bluetooth.",
      "We backed the design with FEA of the actuators, a simplified CFD study of the flow around the body, noise testing, and underwater tests. We also produced a full drawing package and step-by-step manufacturing plans for every custom part."
    ],
    detailSections: [
      { title: "Design requirements",
        items: [
          { title: "Biomimetic motion", text: "≥ 0.25 m/s; neutrally buoyant at 10 m" },
          { title: "Low disturbance", text: "< 70 dB; 80% visual similarity to marine life" },
          { title: "Underwater ready", text: "Waterproof to 20 m; 60-minute runtime" },
          { title: "User friendly", text: "≤ 5 kg; ≤ 2 operators; intuitive controls" },
          { title: "Data driven", text: "Photo/video, obstacle detection within 5 m, onboard sensors" },
          { title: "Built to last", text: "≥ 1.5-year lifespan; durable, portable design" }
        ] },
      { title: "How AquaMorph works",
        items: [
          { title: "Soft fin actuators", text: "Dragon Skin 10 silicone, cast in two-part 3D-printed molds and bonded to 50A silicone wings." },
          { title: "Sealed body", text: "A 3D-printed PLA body sealed with epoxy, with a neoprene gasket under an M3-screwed lid." },
          { title: "Electronics box", text: "An inner PLA box with a laser-cut acrylic lid houses the electronics." },
          { title: "Hydraulic gear pump", text: "A compact, 3D-printable motor-driven gear pump." },
          { title: "Camera & sensors", text: "A low-light camera under a clear dome port, plus onboard sensors for data collection." },
          { title: "App control", text: "Bluetooth phone app with forward, reverse and turning controls." }
        ] }
    ],
    contributions: [
      // ✏️ Edit these so they describe exactly what YOU did on AquaMorph
      "Served as <strong>technical lead</strong>, guiding the team's mechanical and electrical design and how the subsystems fit together.",
      "Created the <strong>main assembly drawing</strong> (with its parts list) and the drawing for the <strong>3D-printable hydraulic gear pump</strong>.",
      "Designed <strong>molds in CAD</strong> for casting the silicone actuators.",
      "Fabricated a <strong>PCB with an embedded microcontroller</strong> and integrated the onboard electronics.",
      "Validated pressure resistance, structural integrity, movement and electronics protection with <strong>component-level tests</strong>, followed by <strong>10–12 m pool trials</strong>."
    ],
    results: [
      { value: "20 m", label: "waterproofing target" },
      { value: "10–12 m", label: "pool trial depth" },
      { value: "10", label: "engineering drawings" },
      { value: "64", label: "manufacturing operations planned" }
    ],
    skills: ["Silicone casting & mold design", "Waterproof enclosure design", "Engineering drawings & GD&T", "Design for manufacturing", "FEA & CFD", "PCB fabrication", "Embedded systems", "Technical leadership"],
    tools: ["ANSYS", "Arduino", "Ultimaker S5 (FDM)", "Laser cutter", "Dragon Skin 10 silicone"],   // ✏️ add or remove
    learnings: [
      "Designing for waterproofing from day one: gaskets, sealed actuator caps and epoxy coatings can't be tacked on at the end.",
      "Testing each component before full underwater trials saves both time and hardware.",
      "Writing drawings and manufacturing plans clear enough that any teammate can build a part the same way.",
      "Leading a six-person team's technical direction while balancing schedule, budget and design goals."
    ],
    videos: [
      // ✏️ Add your video here once it's converted to MP4 and uploaded (see README), e.g.:
      // { src: "images/manta-ray/aquamorph-demo.mp4", caption: "AquaMorph swimming test" },
      // or, if it's on YouTube:
      // { youtube: "VIDEO_ID", caption: "AquaMorph swimming test" },
      youtube: "https://youtu.be/2LuZfrOG2Eo", caption: "AquaMorph swimming test"
    ],
    docs: {
      title: "Engineering documentation",
      intro: "The full drawing package and the manufacturing plan for every custom part. Click a drawing to enlarge it.",
      drawingSet: "images/manta-ray/aquamorph-drawing-set.pdf",
      drawings: [
        { id: "01-main-assembly", title: "Main assembly", note: "Parts list & section view", by: "Maitreyi Dixit", mine: true },
        { id: "02-body", title: "Body", by: "Carissa Lukac" },
        { id: "03-lid", title: "Lid", by: "Carissa Lukac" },
        { id: "04-gasket", title: "Gasket", note: "Rubber sheet", by: "Carissa Lukac" },
        { id: "05-wing", title: "Wing", note: "50A silicone", by: "Grace Olden" },
        { id: "06-wing-actuator", title: "Wing actuator", note: "Dragon Skin 10, two-part mold", by: "Grace Olden" },
        { id: "07-actuator-cap", title: "Actuator cap", note: "Acrylic", by: "Grace Olden" },
        { id: "08-electronics-box-body", title: "Electronics box: body", by: "Carissa Lukac" },
        { id: "09-electronics-box-lid", title: "Electronics box: lid", by: "Carissa Lukac" },
        { id: "10-gear-pump", title: "Hydraulic gear pump", note: "3D-printable", by: "Maitreyi Dixit", mine: true }
      ].map(d => Object.assign(d, {
        image: `images/manta-ray/drawings/${d.id}.png`,
        thumb: `images/manta-ray/drawings/thumbs/${d.id}.jpg`,
        pdf:   `images/manta-ray/drawings/${d.id}.pdf`
      })),
      manufacturing: {
        data: "images/manta-ray/manufacturing.js",
        download: "images/manta-ray/aquamorph-manufacturing-operation-sheets.xlsx",
        downloadLabel: "Excel"
      }
    },
    posters: [
      { title: "AquaMorph: Emulating Marine Animals with Soft Robotics",
        venue: "Capstone Senior Design · Spring 2025",
        text: "Kagan Sears, Grace Olden, <strong>Maitreyi Dixit</strong>, Somya Jain, Carissa Lukac, Daniel Chen",
        image: "images/manta-ray/aquamorph-poster.jpg",
        pdf: "images/manta-ray/aquamorph-poster.pdf" }
    ],
    images: [
      { group: "Prototype & build", src: "images/manta-ray/showcase-team.jpg", caption: "Presenting AquaMorph with the team (Spring 2025)" },
      { group: "Prototype & build", src: "images/manta-ray/prototype-underwater-test.jpg", caption: "Prototype during underwater testing" },
      { group: "Prototype & build", src: "images/manta-ray/printed-actuators.jpg", caption: "Silicone fin actuators", position: "50% 30%" },
      { group: "Prototype & build", src: "images/manta-ray/render.jpg", caption: "AquaMorph concept render" },
      { group: "Prototype & build", src: "images/manta-ray/exploded-view.jpg", caption: "Subsystem exploded view", fit: "contain" },
      { group: "Prototype & build", src: "images/manta-ray/sealing-assembly.jpg", caption: "Lid, gasket and camera dome sealing assembly", fit: "contain" },
      { group: "Prototype & build", src: "images/manta-ray/app-remote.jpg", caption: "Bluetooth remote-control app", fit: "contain" },
      { group: "Prototype & build", src: "images/manta-ray/team.jpg", caption: "The AquaMorph team" },
      { group: "Analysis & testing", src: "images/manta-ray/fea-actuator-deformation.jpg", caption: "FEA: static structural total deformation of an actuator" },
      { group: "Analysis & testing", src: "images/manta-ray/cfd-velocity-pressure.jpg", caption: "CFD: simplified top-down velocity and pressure field", fit: "contain" },
      { group: "Analysis & testing", src: "images/manta-ray/noise-testing.jpg", caption: "Noise validation testing: noise level vs. motor speed", fit: "contain" }
    ],
    links: [
      { label: "Drawing set (PDF)", url: "images/manta-ray/aquamorph-drawing-set.pdf" },
      { label: "Poster (PDF)", url: "images/manta-ray/aquamorph-poster.pdf" }
    ]
  },

  // ------------------------------------------------------------------
  {
    slug: "tracking-turret",
    title: "Autonomous Tracking Turret",
    label: "Founder · Fictional Projects of Purdue",
    color: "sun",
    role: "Founder & Project Lead",
    org: "Fictional Projects of Purdue (student organization)",
    dates: "Sep 2022 – Jan 2024",
    team: "Student team",
    summary: "An autonomous turret that detects and follows people in real time using computer vision and Arduino-based control, reaching ~80% targeting accuracy.",
    cover: "",
    overview: [
      "I founded <strong>Fictional Projects of Purdue</strong>, a student engineering organization, and led its build of an autonomous turret that detects and tracks people in real time.",
      "The project connected sensing, computer vision and motor control into a single real-time loop."
    ],
    contributions: [
      "<strong>Founded the organization</strong> and led the project team from concept to working prototype.",
      "Designed the <strong>Arduino-based circuitry</strong> for sensing and actuation.",
      "Implemented <strong>computer-vision algorithms</strong> for real-time target detection and tracking.",
      "Integrated sensing, vision and motion control to reach <strong>~80% targeting accuracy</strong>."
    ],
    results: [
      { value: "~80%", label: "targeting accuracy" }
    ],
    skills: ["Computer vision", "Real-time control", "Sensor integration", "Circuit design", "Leadership", "Building an organization"],
    tools: ["Arduino"],
    learnings: [
      "Closing the loop between perception and actuation, and the speed-vs-accuracy tradeoffs that come with it.",
      "Debugging systems where hardware and software problems look the same.",
      "What it takes to start an organization and keep a team motivated through a long build."
    ],
    images: [
      { src: "images/tracking-turret/1.jpg", caption: "Turret prototype" },
      { src: "images/tracking-turret/2.jpg", caption: "Electronics and wiring" }
    ],
    links: []
  },

  // ------------------------------------------------------------------
  {
    slug: "polymer-test-systems",
    title: "Polymer Degradation Test Systems",
    label: "Research · Purdue",
    color: "violet",
    role: "Undergraduate Research Assistant",
    org: "Chortos Laboratory, Purdue University",
    dates: "Jun 2023 – May 2024",
    team: "Advisor: Dr. Alex Chortos",
    summary: "Arduino-based test rigs and custom apparatus for studying how antioxidant-polymer-coated metals degrade, which raised the lab's testing throughput about 15×.",
    cover: "",
    overview: [
      "In the Chortos Lab, I worked on experiments studying how metals coated with antioxidant polymers degrade over time.",
      "My focus was the test hardware: building systems that let the team run more experiments, more reliably."
    ],
    contributions: [
      "Built <strong>Arduino-based test systems</strong> to characterize degradation of antioxidant-polymer-coated metals.",
      "Designed, fabricated and validated <strong>custom apparatus</strong> using SolidWorks, 3D printing and circuit assembly/soldering.",
      "<strong>Led an undergraduate team</strong> and coordinated with graduate researchers.",
      "Increased experimental testing throughput by <strong>~15×</strong>."
    ],
    results: [
      { value: "~15×", label: "increase in testing throughput" }
    ],
    skills: ["Test rig design", "Data acquisition", "Mechanical design", "3D printing", "Soldering & circuit assembly", "Team leadership"],
    tools: ["Arduino", "SolidWorks"],
    learnings: [
      "How to build test fixtures that produce repeatable, trustworthy data.",
      "How much good automation can multiply a lab's research output.",
      "Coordinating work between undergraduate and graduate researchers."
    ],
    images: [
      { src: "images/polymer-test-systems/1.jpg", caption: "Test apparatus" }
    ],
    links: []
  },

  // ------------------------------------------------------------------
  {
    slug: "msa-gas-detection",
    title: "MSA Safety: Connected Gas Detection",
    label: "Strategy · CMU Corporate Startup Lab",
    color: "coral",
    role: "Consultant",
    org: "CMU Corporate Startup Lab × MSA Safety",
    dates: "Jan – May 2026",
    team: "Student consulting team",
    summary: "A consulting project with MSA Safety's product team on connected gas-detection hardware: what it can do, what it's worth to customers, and what's slowing adoption.",
    cover: "",
    overview: [
      "Through CMU's Corporate Startup Lab, our team partnered with <strong>MSA Safety's product team</strong> to evaluate their connected gas-detection hardware.",
      "The goal was to understand the product's hardware and data capabilities, the value it offers customers, and the barriers to adoption compared with legacy solutions."
    ],
    contributions: [
      "Evaluated the <strong>hardware, data capabilities and product value</strong> of connected gas-detection devices.",
      "Conducted <strong>technical and customer research</strong> with MSA teams, distributors and industrial users.",
      "Identified <strong>barriers to adoption</strong> relative to legacy solutions.",
      "Developed <strong>product recommendations</strong> for the MSA product team."
    ],
    results: [
      { value: "3", label: "stakeholder groups researched" }
    ],
    skills: ["Customer research", "Product strategy", "Technical evaluation", "Stakeholder communication", "Business recommendations"],
    tools: [],
    learnings: [
      "Adoption depends on much more than technical capability: workflow, cost and trust matter just as much.",
      "Translating engineering detail into recommendations a product team can act on.",
      "Working with an industry partner on a real, open-ended product question."
    ],
    images: [],                           // no gallery for this one
    links: []
  }

];

/* ---------------------------------------------------------------------
   TEMPLATE: copy everything between the lines, paste it into the list above

  {
    slug: "my-new-project",               // short id, lowercase, no spaces (used in the URL + image folder)
    title: "My New Project",
    label: "Course Project · CMU",        // small tag above the title
    color: "blue",                        // teal | blue | sun | coral | violet
    role: "Your role",
    org: "Course / lab / company",
    dates: "Jan – May 2026",
    team: "Team of 4",                    // (optional)
    summary: "One or two sentences shown on the homepage card.",
    cover: "images/my-new-project/cover.jpg",   // main photo (optional)
    coverPosition: "50% 50%",             // (optional) which part of the photo to keep when cropped
    overview: [
      "Paragraph 1: what the project is and why it matters.",
      "Paragraph 2: the approach."
    ],
    contributions: [
      "What you did #1",
      "What you did #2"
    ],
    results: [                            // (optional) big numbers
      { value: "40%", label: "lighter than the baseline" }
    ],
    skills: ["Skill gained 1", "Skill gained 2"],
    tools: ["SolidWorks", "Python"],     // (optional)
    learnings: [
      "Something you learned",
      "Something else you learned"
    ],
    details: [                            // (optional) small "design highlights" cards
      { title: "Feature", text: "One sentence about it." }
    ],
    videos: [                             // (optional) big video near the top
      { src: "images/my-new-project/demo.mp4", poster: "images/my-new-project/demo-thumb.jpg", caption: "Demo" }
      // or: { youtube: "VIDEO_ID", caption: "Demo" }
    ],
    posters: [                            // (optional) posters / presentations
      { title: "Poster title", venue: "Conference 2026",
        image: "images/my-new-project/poster.jpg", pdf: "images/my-new-project/poster.pdf" }
      // interactive poster: { title: "...", venue: "...", interactive: "https://...", embed: true }
    ],
    thumb: "images/my-new-project/card.jpg",   // (optional) different image for the homepage card
    detailSections: [                     // (optional) more card sections, each with its own heading
      { title: "Design requirements", items: [ { title: "Speed", text: "≥ 0.25 m/s" } ] }
    ],
    docs: {                               // (optional) engineering drawings + manufacturing plan tabs
      drawingSet: "images/my-new-project/drawing-set.pdf",
      drawings: [
        { id: "part-a", title: "Part A", by: "Your Name", mine: true,
          image: "images/my-new-project/drawings/part-a.png",
          thumb: "images/my-new-project/drawings/part-a.png",
          pdf: "images/my-new-project/drawings/part-a.pdf" }
      ],
      manufacturing: { data: "images/my-new-project/manufacturing.js", download: "images/my-new-project/sheets.xlsx" }
    },
    images: [
      { src: "images/my-new-project/1.jpg", caption: "Caption", group: "Build" },   // group = optional sub-heading
      { youtube: "VIDEO_ID", caption: "Demo video" }    // (optional) YouTube video
    ],
    links: [                              // (optional) buttons
      { label: "Code on GitHub", url: "https://github.com/mddixit/..." },
      { label: "Report (PDF)", url: "files/report.pdf" }
    ]
  },

--------------------------------------------------------------------- */
