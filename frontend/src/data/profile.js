export const profile = {
  name: "Willy Bresee",
  title: "Senior Software Engineer II",
  location: "Golden, Colorado",
  github: "https://github.com/wsbresee",
  linkedin: "https://www.linkedin.com/in/william-s-bresee",
  email: "wsbresee@gmail.com",
  tagline: "Software engineer and music geek — pragmatic perspective, creative instincts.",
  about: `I am both a software developer and a music geek, so my perspective is pragmatic, yet creative. I love solving interesting technical and musical puzzles. I'm happiest while contributing to innovative systems, inventing tools people will use, and learning constantly.

Right now I'm a tech lead at Aledade, building the clinical data pipelines that power value-based care for thousands of independent physician practices. Day to day that means Python, PySpark, and Databricks — designing systems that are accurate and reliable enough to directly affect patient care and healthcare outcomes at scale.

I enjoy functional programming and I'm excited by projects that utilize that skillset — I spent two years writing Haskell and Lua algorithms at an AI music startup before pivoting fully into data engineering. I also have strong roots in JavaScript/React and full-stack web development.

Effective communication is a forte of mine, and I'm all about supporting the people I work with. I know how to challenge ideas productively, and I've found success working with distributed as well as in-person teams.`,

  experience: [
    {
      company: "Aledade, Inc.",
      tagline: "Value-based primary care — partnering with 1,900+ independent practices serving 2M+ patients across 45 states.",
      location: "Denver, CO · Remote",
      total: "5 yrs 5 mos",
      roles: [
        {
          title: "Senior Software Engineer II",
          start: "Sep 2025",
          end: null,
          description:
            "Tech lead for clinical data ingestion across Aledade's network. Designed and led development of PySpark/Databricks pipelines processing EHR data at scale. Architected Aledade's system for eCQM and MIPS CQM quality measure submission through a CMS-certified registry — infrastructure that directly drives value-based care performance and shared savings. Mentoring engineers across the data platform team.",
          skills: ["PySpark", "Databricks", "eCQM", "MIPS CQM"],
        },
        {
          title: "Senior Software Engineer I",
          start: "Apr 2022",
          end: "Oct 2025",
          description:
            "Built clinical mapping and ingestion software using PySpark/Databricks, migrating legacy PostgreSQL pipelines to Spark at scale. Collaborated with clinical informatics and business stakeholders to architect major pipeline changes while preserving the data continuity that downstream quality reporting and care gap analytics depend on.",
          skills: ["Apache Airflow", "Kubernetes", "PySpark", "PostgreSQL"],
        },
        {
          title: "Software Engineer",
          start: "Jan 2021",
          end: "Apr 2022",
          description:
            "Built Python/PostgreSQL clinical data ingestion pipelines normalizing EHR data from dozens of source systems and formats. Deployed and operated services on AWS using Kubernetes, Docker, and Airflow. Partnered with clinical informatics teams to translate care quality requirements into scalable data infrastructure.",
          skills: ["Apache Airflow", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
        },
      ],
    },
    {
      company: "Amper Music, Inc.",
      tagline: "AI music composition platform that let anyone generate professional, royalty-free music by selecting mood, style, and duration. Acquired by Shutterstock in 2020.",
      location: "New York City Metropolitan Area",
      total: "2 yrs 1 mo",
      roles: [
        {
          title: "Asset Developer",
          start: "Jul 2019",
          end: "Jul 2020",
          description:
            "Led teams through major development projects on the AI composition platform. Developed music generation algorithms and curated the musical datasets that trained and fed the platform's AI engine. Wrote Lua, Haskell, and Python software on distributed teams using Agile/Scrum.",
          skills: ["Lua", "Haskell", "Python", "Agile/Scrum"],
        },
        {
          title: "Asset Creator",
          start: "Jul 2018",
          end: "Jul 2019",
          description:
            "Built and curated musical datasets for the AI composition engine. Developed voice leading algorithms in Haskell and Lua that power the platform's orchestral arrangement logic. Wrote workflow automation software to streamline the dataset production pipeline.",
          skills: ["Lua", "Haskell", "Python", "Algorithms"],
        },
      ],
    },
    {
      company: "Bluehouse Group",
      tagline: "Vermont-based digital agency specializing in web applications and design for nonprofits, healthcare, and education.",
      location: "Greater Burlington Area",
      total: "3 mos",
      roles: [
        {
          title: "Software Development Intern",
          start: "Jun 2017",
          end: "Aug 2017",
          description:
            "Built and shipped features across the full stack — React/jQuery frontend and PHP/MySQL backend. Worked closely with engineers at every level to design, implement, test, and deploy improvements.",
          skills: ["React", "JavaScript", "jQuery", "PHP", "MySQL"],
        },
      ],
    },
  ],

  education: [
    {
      school: "New York University",
      degree: "Master of Science",
      field: "Computer Science",
      start: "2019",
      end: "2020",
      notes: "Machine Learning · Algorithms · Big Data · Data Visualization · Networking",
    },
    {
      school: "Skidmore College",
      degree: "Bachelor of Arts",
      field: "Music, Religious Studies, Computer Science",
      start: "2014",
      end: "2018",
      notes: "Graduated with Latin Honors · Departmental Honors in Music",
    },
  ],

  projects: [
    {
      name: "WillyBeat",
      repo: "willy-beat",
      description:
        "MIDI drum machine VST3/AU plugin built with JUCE. Ships 30 built-in patterns across Rock, Hip-Hop, Funk, Electronic, Jazz, and Latin — each stored as a human-readable .beat text file users can edit or share. Features algorithmic variation generation, MIDI file import, in-plugin pattern editor (clickable step grid), and playback controls for swing, timing feel, velocity humanization, and gate length.",
      tech: ["C++", "JUCE", "VST3", "CMake", "MIDI", "Audio Plugin"],
      github: "https://github.com/wsbresee/willy-beat",
    },
    {
      name: "WillyArp",
      repo: "willy-arp",
      description:
        "Chord-latching MIDI arpeggiator VST3/AU plugin built with JUCE. Hold or latch a chord and it arpeggios through it in configurable patterns (up, down, up-down, random) at a selectable note rate synced to host BPM. Demonstrates PPQ-based step sequencing and the JUCE 8 playhead API.",
      tech: ["C++", "JUCE", "VST3", "CMake", "MIDI", "Audio Plugin"],
      github: "https://github.com/wsbresee/willy-arp",
    },
    {
      name: "WillyGain",
      repo: "cubase-plugin",
      description:
        "Simple gain-staging VST3/AU plugin — the first of three JUCE audio plugins built to learn Cubase plugin development. Exposes a single −60 to +12 dB gain knob with a rotary UI and dark Palenight theme.",
      tech: ["C++", "JUCE", "VST3", "CMake", "Audio Plugin"],
      github: "https://github.com/wsbresee/cubase-plugin",
    },
    {
      name: "PCA Audio Compression App",
      repo: "pca-compression-app-final",
      description:
        "Full-stack ML app applying Principal Component Analysis to compress audio files. React frontend, Node/Express API, Python PCA module, and Jupyter notebooks for analysis and visualization.",
      tech: ["React", "Node.js", "Python", "Jupyter", "PCA", "Machine Learning"],
      github: "https://github.com/wsbresee/pca-compression-app-final",
    },
    {
      name: "Sokoban AI Solver",
      repo: "sokoban",
      description:
        "AI agent that solves Sokoban puzzles using BFS, DFS, A*, and other search algorithms. Supports 489 levels, configurable iteration limits, and a human-playable mode. Built for NYU's AI course.",
      tech: ["Python", "BFS", "DFS", "A*", "AI Search", "Heuristics"],
      github: "https://github.com/wsbresee/sokoban",
    },
    {
      name: "dotfiles",
      repo: "dotfiles",
      description:
        "One-command Mac dev environment setup. Installs Homebrew, iTerm2 with Palenight theme, tmux with custom keybindings, vim with plugins, and zsh + oh-my-zsh. Actively maintained.",
      tech: ["Shell", "Bash", "zsh", "vim", "tmux", "macOS"],
      github: "https://github.com/wsbresee/dotfiles",
    },
    {
      name: "Haskell Practice",
      repo: "haskell_fun",
      description:
        "Functional programming exercises including Project Euler solutions (problems 1–69) and interview problems implemented in Haskell.",
      tech: ["Haskell", "Functional Programming", "Project Euler", "Algorithms"],
      github: "https://github.com/wsbresee/haskell_fun",
    },
  ],

  skills: [
    { category: "Languages", items: ["Python", "JavaScript", "C++", "Lua", "Haskell", "Java", "PHP", "Shell/Bash"] },
    { category: "Frontend", items: ["React", "Vite", "Tailwind CSS", "jQuery", "HTML/CSS"] },
    { category: "Backend", items: ["Flask", "Node.js", "Express", "PostgreSQL", "MySQL", "REST APIs"] },
    { category: "Data & ML", items: ["PySpark", "Databricks", "Apache Spark", "Machine Learning", "Apache Airflow", "NumPy", "pandas"] },
    { category: "Audio & DSP", items: ["JUCE", "VST3", "CMake", "MIDI", "Audio Plugin Development"] },
    { category: "Cloud & DevOps", items: ["AWS", "Kubernetes", "Docker", "Git", "Linux/macOS"] },
  ],

  certifications: [
    { name: "LNT Trainer", issuer: "NOLS", issued: "Aug 2012" },
  ],
}
