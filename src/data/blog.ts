export type BlogSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  title: string;
  // ISO date (YYYY-MM-DD) for stable sorting and formatting.
  date: string;
  // Used as the short byline on the blog landing page.
  excerpt: string;
  slug: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Pool Opening Checklist (New England Edition)",
    date: "2025-04-10",
    excerpt: "A practical, no-skipped-steps order of operations for clear water fast.",
    slug: "pool-opening-checklist-new-england",
    sections: [
      {
        title: "Start With Safety and Access",
        paragraphs: [
          "Openings go smoother when the area is clean and the equipment pad is accessible. Clear debris, confirm power to the pad is off, and check that valves can be turned without forcing anything.",
          "If you are removing a cover, keep dirty cover water out of the pool. Pump it off first, then lift and fold away from the waterline.",
        ],
        bullets: [
          "Kill power at the breaker before opening the pump basket",
          "Inspect covers, anchors, and straps for damage before storage",
          "Walk the deck and coping for winter heave or trip hazards",
        ],
      },
      {
        title: "Prime, Circulate, Then Balance",
        paragraphs: [
          "Get circulation running before you chase chemistry. A clean pump basket, lubricated lid O-ring, and a full strainer housing make priming much easier.",
          "Once water is moving and the filter is stable, test and adjust in a sane order: alkalinity first, then pH, then sanitizer, then stabilizer.",
        ],
        bullets: [
          "Alkalinity: set the buffer before fine-tuning pH",
          "pH: adjust into a swim-safe range before heavy chlorination",
          "Sanitizer: raise gradually, avoid overcorrecting",
        ],
      },
      {
        title: "When to Call for Help",
        paragraphs: [
          "If the pump will not prime, pressure spikes, or you see air in the returns after basic checks, it is usually faster (and cheaper) to diagnose early than to run the system struggling for days.",
        ],
      },
    ],
  },
  {
    title: "Cloudy Water: The 30-Minute Diagnosis",
    date: "2025-05-08",
    excerpt: "A quick triage to separate filtration issues from chemistry issues.",
    slug: "cloudy-water-30-minute-diagnosis",
    sections: [
      {
        title: "Look at the Clues",
        paragraphs: [
          "Cloudy water has patterns. A dull haze with normal chlorine often points to filtration or circulation. A sudden milkiness after a big pH swing can be calcium coming out of solution.",
          "Before you add anything, test with a good kit and write the numbers down. Most cloudy-water rabbit holes start with guessing.",
        ],
        bullets: [
          "Check filter pressure relative to your clean baseline",
          "Confirm returns have strong flow (not just bubbles)",
          "Brush a step: if it kicks up dust, you may be fighting dead algae",
        ],
      },
      {
        title: "Fix the Root Cause",
        paragraphs: [
          "If pressure is high, clean the filter. If pressure is low and flow is weak, check baskets, impeller, and suction-side air leaks. If chemistry is off, correct it in the right order and give the water 24 to 48 hours of continuous filtering.",
        ],
      },
      {
        title: "Avoid the Common Mistake",
        paragraphs: [
          "Floc and clarifiers can help in narrow cases, but they are not a substitute for proper filtration and balanced water. Use them only when you know why the water is cloudy.",
        ],
      },
    ],
  },
  {
    title: "Saltwater vs. Chlorine in New England",
    date: "2025-06-12",
    excerpt: "What changes (and what does not) when you switch systems up here.",
    slug: "saltwater-vs-chlorine-new-england",
    sections: [
      {
        title: "The Big Myth",
        paragraphs: [
          "A salt pool is still a chlorine pool. The difference is how the chlorine is generated: a salt cell produces it from dissolved salt while the pump is running.",
          "What owners notice most is consistency. With a well-sized cell and solid runtime, sanitizer levels can be steadier than manual dosing.",
        ],
      },
      {
        title: "Where Salt Wins",
        paragraphs: [
          "Salt systems can reduce the weekly juggling act, especially during travel. They shine when the pool has predictable pump runtime and the cell is kept clean.",
        ],
        bullets: [
          "More consistent daily chlorination during peak season",
          "Less handling and storing of chlorine products",
          "Often feels gentler on skin for some swimmers",
        ],
      },
      {
        title: "Where Chlorine Wins",
        paragraphs: [
          "A traditional setup can be simpler and cheaper up front. It is also easier to adapt quickly to big bather loads, storms, or an algae bloom with targeted dosing.",
        ],
      },
    ],
  },
  {
    title: "How Often to Clean Your Filter (Sand, Cartridge, DE)",
    date: "2025-07-17",
    excerpt: "Intervals are not calendar-based; they are performance-based. Here's how to tell.",
    slug: "filter-cleaning-intervals-sand-cartridge-de",
    sections: [
      {
        title: "Use Pressure as Your Schedule",
        paragraphs: [
          "Your filter has a clean baseline pressure. When pressure rises about 20 to 25% above that baseline, it is time to clean. That timing changes with weather, pollen, usage, and how much you brush.",
          "Cleaning too often can actually reduce performance on some filters. The goal is stable flow and good capture, not the lowest possible pressure.",
        ],
      },
      {
        title: "What Each Type Needs",
        paragraphs: ["The cleaning method depends on what you have on the pad."],
        bullets: [
          "Sand: backwash when pressure is up; deep clean sand occasionally if it channels or clumps",
          "Cartridge: rinse when pressure is up; do periodic soak/degrease depending on oils and metals",
          "DE: backwash and recharge; full teardown cleaning a few times per season",
        ],
      },
      {
        title: "After Cleaning",
        paragraphs: [
          "Record the new baseline pressure. If the baseline keeps drifting upward, the filter may not be fully clean, the media may be aging, or the circulation system could be restricted elsewhere.",
        ],
      },
    ],
  },
  {
    title: "Heat Waves and Chlorine Demand",
    date: "2025-08-14",
    excerpt: "Why pools burn through sanitizer in August and what to do about it.",
    slug: "heat-waves-and-chlorine-demand",
    sections: [
      {
        title: "Three Things Spike Demand",
        paragraphs: [
          "Heat accelerates reactions, sun burns off chlorine, and more swimmers bring in more organics. If stabilizer is too low, UV loss can be brutal.",
          "The right fix is usually a combination of maintaining target free chlorine for your stabilizer level, improving circulation, and being disciplined about brushing and filtration during hot stretches.",
        ],
      },
      {
        title: "A Simple Summer Routine",
        paragraphs: ["Keep it boring and consistent when the weather is intense."],
        bullets: [
          "Test more often (every 1 to 2 days) during peak heat",
          "Brush steps, corners, and benches where algae starts",
          "Run the pump longer during the hottest weeks",
        ],
      },
    ],
  },
  {
    title: "Pump Noises You Should Not Ignore",
    date: "2025-09-11",
    excerpt: "Grinding, whining, and rattling usually mean something is wearing out.",
    slug: "pump-noises-you-should-not-ignore",
    sections: [
      {
        title: "Match the Sound to the Likely Cause",
        paragraphs: [
          "A high-pitched whine often points to bearings. A rattle can be debris in the impeller or a loose fitting. Loud cavitation sounds usually involve suction restriction or air leaks.",
          "Catching the issue early can prevent a seal failure that drips into the motor or a pump that runs hot and trips breakers.",
        ],
        bullets: [
          "Whine: bearings aging, motor nearing replacement",
          "Rattle: impeller obstruction or loose mounting",
          "Growl: suction restriction, low water level, or air leak",
        ],
      },
      {
        title: "Quick Checks Before You Call",
        paragraphs: [
          "Make sure the water level is mid-skimmer, empty baskets, and confirm valves are open. If the sound persists, shut it down rather than letting it damage itself.",
        ],
      },
    ],
  },
  {
    title: "October Close-Down: Avoid the Two Biggest Mistakes",
    date: "2025-10-09",
    excerpt: "Winterization is mostly about water balance and removing trapped water.",
    slug: "october-close-down-avoid-two-mistakes",
    sections: [
      {
        title: "Mistake 1: Closing With Bad Chemistry",
        paragraphs: [
          "Closing a pool with high pH, high metals, or an active algae problem sets you up for stains and a rough spring. Balance before you winterize so the water is stable while it sits.",
        ],
      },
      {
        title: "Mistake 2: Leaving Water in Lines and Equipment",
        paragraphs: [
          "Freeze damage is expensive and preventable. The goal is to get water out of vulnerable plumbing and protect returns and skimmers appropriately for your setup.",
          "If you are not confident in your blowout and plug process, this is the moment to bring in a pro. One missed low spot can crack fittings.",
        ],
      },
      {
        title: "A Clean Close Saves Hours Later",
        paragraphs: [
          "Brush, vacuum, clean baskets, and clean the filter before you shut down. The cleaner the pool is when you close, the less time you spend fighting mess on opening day.",
        ],
      },
    ],
  },
  {
    title: "pH vs. Alkalinity: The Relationship That Trips Owners Up",
    date: "2024-03-28",
    excerpt: "Balance alkalinity first so pH stops bouncing around all season.",
    slug: "ph-vs-alkalinity-relationship",
    sections: [
      {
        title: "Think of Alkalinity as a Buffer",
        paragraphs: [
          "Total alkalinity helps resist rapid pH changes. If alkalinity is far out of range, you can adjust pH today and watch it drift right back tomorrow.",
          "In New England, heavy rain and frequent top-offs can push chemistry around. Stable alkalinity makes the rest easier.",
        ],
      },
      {
        title: "A Practical Adjustment Order",
        paragraphs: ["Avoid chasing numbers by changing one thing at a time."],
        bullets: [
          "Adjust total alkalinity toward your target first",
          "Then dial pH into range",
          "Only then fine-tune sanitizer and other parameters",
        ],
      },
    ],
  },
  {
    title: "Stabilizer (CYA): How to Stop Losing Chlorine to Sunlight",
    date: "2024-05-09",
    excerpt: "The right stabilizer level protects chlorine without making it ineffective.",
    slug: "stabilizer-cya-stop-losing-chlorine",
    sections: [
      {
        title: "What Stabilizer Actually Does",
        paragraphs: [
          "CYA reduces how quickly UV light destroys free chlorine. Too little and you burn through chlorine. Too much and chlorine becomes less effective, pushing you into higher required free chlorine targets.",
        ],
      },
      {
        title: "How to Avoid CYA Creep",
        paragraphs: [
          "Many chlorine products add stabilizer. If you use stabilized tabs all summer, CYA can climb without you noticing until problems show up.",
        ],
        bullets: [
          "Test CYA monthly during peak season",
          "Know which products add CYA and which do not",
          "If CYA gets too high, partial drain/refill is the real fix",
        ],
      },
    ],
  },
  {
    title: "Algae Prevention That Actually Works",
    date: "2024-06-13",
    excerpt: "Most algae is a circulation problem first and a chemistry problem second.",
    slug: "algae-prevention-that-actually-works",
    sections: [
      {
        title: "Stop Feeding the Problem",
        paragraphs: [
          "Algae loves dead zones: steps, benches, behind ladders, and low-flow corners. Brushing breaks the biofilm and puts it into circulation where chlorine and filtration can do their jobs.",
        ],
        bullets: [
          "Brush weekly, more during hot weather",
          "Run the pump long enough for full turnover during peak season",
          "Keep free chlorine at the right target for your CYA level",
        ],
      },
      {
        title: "If You See Green",
        paragraphs: [
          "Do not rely on a single shock and hope. You need sustained chlorine, aggressive brushing, and continuous filtration until the water is truly clear.",
        ],
      },
    ],
  },
  {
    title: "Skimmer and Return Bubbles: Finding the Air Leak",
    date: "2024-07-18",
    excerpt: "Air in the system can ruin circulation, prime, and filter performance.",
    slug: "skimmer-return-bubbles-finding-air-leak",
    sections: [
      {
        title: "Start With the Easy Stuff",
        paragraphs: [
          "Low water level, a cracked pump lid O-ring, or a loose union can introduce air. Fix the obvious before assuming underground plumbing.",
        ],
        bullets: [
          "Water level halfway up the skimmer opening",
          "Clean and lubricate the pump lid O-ring",
          "Tighten unions and check drain plugs for seepage",
        ],
      },
      {
        title: "When It Is Not the Pad",
        paragraphs: [
          "If you have persistent bubbles and weak prime, especially when a specific suction line is used, you may be looking at a suction-side leak. Diagnose systematically line by line.",
        ],
      },
    ],
  },
  {
    title: "Robot Cleaners: What They Do Well (and What They Don't)",
    date: "2024-08-15",
    excerpt: "Robots are great at dirt pickup, not great at replacing circulation and brushing.",
    slug: "robot-cleaners-what-they-do-well",
    sections: [
      {
        title: "Where Robots Shine",
        paragraphs: [
          "A good robot reduces daily debris load, keeps fine particles from re-suspending, and helps your filter by grabbing dirt before it breaks down.",
        ],
        bullets: ["Faster cleanup after storms and heavy use", "Less manual vacuuming", "Can improve clarity by reducing suspended debris"],
      },
      {
        title: "What Still Needs You",
        paragraphs: [
          "You still need balanced chemistry, enough circulation, and periodic brushing. Robots do not solve algae if sanitizer is consistently low or if dead zones are ignored.",
        ],
      },
    ],
  },
  {
    title: "Heater Not Heating? The Quick Troubleshooting Flow",
    date: "2024-09-12",
    excerpt: "Most heater calls come down to water flow, sensors, or simple lockouts.",
    slug: "heater-not-heating-quick-troubleshooting",
    sections: [
      {
        title: "Confirm the Basics",
        paragraphs: [
          "Heaters are picky about flow and safety conditions. If the filter is dirty or valves are set wrong, the heater may refuse to fire.",
        ],
        bullets: ["Check filter pressure and overall flow", "Confirm thermostat setpoint and mode", "Look for error codes and do not ignore them"],
      },
      {
        title: "When to Stop and Call",
        paragraphs: [
          "Gas smell, repeated ignition attempts, or persistent error codes are not DIY territory. Shut down and call for service to avoid damage or risk.",
        ],
      },
    ],
  },
  {
    title: "Late-Season Water Balance (Why September Feels Different)",
    date: "2024-10-10",
    excerpt: "Cool nights change how your pool behaves; adjust your routine before you close.",
    slug: "late-season-water-balance-september-october",
    sections: [
      {
        title: "Cooling Water Changes Demand",
        paragraphs: [
          "As water cools, chlorine demand often drops, but debris can increase. That combination can lead to overchlorination or underfiltration if you keep the exact same routine from July.",
        ],
      },
      {
        title: "The Late-Season Tune-Up",
        paragraphs: ["Aim for stability, not perfection."],
        bullets: ["Keep skimming and brushing as leaves begin to fall", "Watch pH drift and aeration effects from water features", "Clean the filter before close-down season begins"],
      },
    ],
  },
  {
    title: "Spring Startup After a Rough Winter",
    date: "2023-03-30",
    excerpt: "When you open to murky water, focus on circulation and filtration first.",
    slug: "spring-startup-after-rough-winter",
    sections: [
      {
        title: "Do Not Panic-Shock",
        paragraphs: [
          "If the pool is a swamp, your first job is to get debris out and get the system moving. A huge chemical dump into a dirty pool often wastes product and makes cleanup harder.",
        ],
      },
      {
        title: "The Recovery Sequence",
        paragraphs: ["Work from physical cleanup to chemical cleanup."],
        bullets: ["Remove leaves and sediment first (net, vacuum, brush)", "Clean baskets and keep circulation running", "Balance alkalinity and pH before sustained chlorination"],
      },
    ],
  },
  {
    title: "Waterline Rings and Stains: Prevention and Removal",
    date: "2023-04-27",
    excerpt: "Oils, pollen, and metals can mark your tile line fast. Here's how to stay ahead.",
    slug: "waterline-rings-and-stains-prevention-removal",
    sections: [
      {
        title: "Identify What You're Seeing",
        paragraphs: [
          "A greasy scum line behaves differently than metal staining. Oils smear, metals tend to discolor more uniformly, and organic stains often lighten with chlorine.",
        ],
      },
      {
        title: "Daily and Weekly Habits",
        paragraphs: ["Small routines beat big scrubbing sessions."],
        bullets: ["Skim and brush the waterline weekly", "Rinse swimsuits (detergent residue contributes)", "Keep pH stable to reduce scaling and stain risk"],
      },
    ],
  },
  {
    title: "Rainstorms and Pool Chemistry: What to Check After",
    date: "2023-07-20",
    excerpt: "Heavy rain changes pH, dilutes sanitizer, and dumps organics into the water.",
    slug: "rainstorms-and-pool-chemistry-what-to-check",
    sections: [
      {
        title: "Post-Storm Checklist",
        paragraphs: [
          "After a storm, test and clean before you treat. Leaves and soil consume chlorine and clog filtration.",
        ],
        bullets: ["Empty skimmer and pump baskets", "Brush walls and steps to knock off debris film", "Test pH and free chlorine and correct gradually"],
      },
      {
        title: "The One Thing People Miss",
        paragraphs: [
          "Run the filter longer for 24 hours after big debris events. Chemistry alone cannot fix a filter that is not capturing the fine stuff.",
        ],
      },
    ],
  },
  {
    title: "Backwashing 101: When, How, and How Long",
    date: "2023-08-17",
    excerpt: "Stop guessing. Use your clean pressure baseline and backwash with purpose.",
    slug: "backwashing-101-when-how-and-how-long",
    sections: [
      {
        title: "When to Backwash",
        paragraphs: [
          "Backwash when pressure is up about 20 to 25% from your clean baseline or when flow noticeably drops. Do not backwash every week by habit.",
        ],
      },
      {
        title: "How Long to Backwash",
        paragraphs: [
          "Backwash until the sight glass runs clear (if you have one) and then rinse to settle the bed. The goal is restoring flow without blowing out media.",
        ],
        bullets: ["Backwash: typically 2 to 3 minutes", "Rinse: typically 20 to 30 seconds"],
      },
    ],
  },
  {
    title: "Variable-Speed Pumps: The Setups That Save Money",
    date: "2023-09-14",
    excerpt: "A VS pump only saves money if it is programmed around your pool's real needs.",
    slug: "variable-speed-pumps-setups-that-save-money",
    sections: [
      {
        title: "Lower Speed, Longer Time",
        paragraphs: [
          "Variable-speed pumps save energy because power draw drops dramatically at lower speeds. The art is running low for everyday filtration, then scheduling higher speeds for tasks that need it.",
        ],
      },
      {
        title: "A Sensible Schedule Template",
        paragraphs: ["Use this as a starting point and adjust based on skimming and filter pressure."],
        bullets: ["Low speed: most of the day for filtration and chlorination", "Medium: a short block for skimming and turnover", "High: only when vacuuming, backwashing, or running features"],
      },
    ],
  },
  {
    title: "Pool Safety Basics That Don't Feel Overbearing",
    date: "2023-10-12",
    excerpt: "Barriers, alarms, and habits that reduce risk without ruining the fun.",
    slug: "pool-safety-basics-that-dont-feel-overbearing",
    sections: [
      {
        title: "Layer Safety",
        paragraphs: [
          "No single step is perfect. Real safety is layers: supervision, barriers, clear rules, and the right equipment.",
        ],
        bullets: ["Fence and self-latching gates where possible", "Door alarms or pool alarms if access is near the house", "Visible rescue gear and a clear plan for emergencies"],
      },
      {
        title: "Make It Routine",
        paragraphs: [
          "The easiest safety wins are habits: never swim alone, keep phones out of the hands of supervisors, and keep the pool area tidy to prevent slips.",
        ],
      },
    ],
  },
];
