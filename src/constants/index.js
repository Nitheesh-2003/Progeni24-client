import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  sql,
  postgresql,
  carrent,
  jobit,
  tripguide,
  mui,
  java,
  python,
  firebase,
  progeni,
  c,
  cpp,
} from "../assets";

export const navLinks = [
  {
    id: "/home",
    title: "Home",
  },
  {
    id: "/home/events",
    title: "Events",
  },
  {
    id: "/home/about",
    title: "About",
  },
  {
    id: "/home/register",
    title: "Register",
  },
  {
    id: "/auth",
    title: "Logout",
  },
];

const eventDetails = [
  {
    id: 1,
    details: {
      title: "Gnidoc.",
      description: "Embark on an exciting journey through the digital cosmos with our Reverse Coding Challenge. Your quest? Unravel the mystery behind code outputs and discover the hidden logic of code within and run all test cases successfully. Participants are like hackers delving into the Matrix, manipulating the digital world to uncover its underlying truths. Reverse coding is akin to being an archaeologist exploring ancient ruins. Participants dig through layers of code, deciphering the cryptic inscriptions left behind by previous developers.",
      rules : [
        "Maximum of 2 members per group (Individual allowed) and consists of 2 rounds",
        "Round one:",
        "Consists of 20 MCQs, based on find the output, syntax and gap filling",
        "Round two:",
        "Total number of questions 5. An executable file will be given and try to find out the logic and code out the problem.",
         "Permitted languages are C, C++ and Java. No inbuilt Data Structures can be used (Stack, HashMap etc.)."      
      ]
    },
  },
  {
    id: 2,
    details: {
      title: "QueryWhizz Event.",
      description: "Get ready to dive into the captivating world of databases at SQL Smash, where brains and bytes collide in an epic battle of data mastery!. Whether you're a seasoned pro or just starting out, all are welcome to showcase their skills and compete for the title of SQL champion. Just like in a cyberpunk thriller, participants must use their SQL skills to hack into the digital realm and emerge victorious. Mark your calendars and prepare for the ultimate data adventures.",
      rules : [
        "Querywhizz is an individual event.",
        "Duration: 30 minutes for each round. Bring your laptop(mandatory).",
        "Participants must use advanced queries, sub queries, joins, aggregate function and window functions.",
        "External libraries or tools are not allowed. Only SQL commands are permitted. The event will be conducted in 2 rounds.",
        "Plagiarism result will be disqualified.",
        "Round 1:",
        "MCQ type question with a count of 20. Each question is worth 10 points.",
        "Round 2:",
        "Number of questions is 5. Write a SQL statement for each problem statement. Participants must follow the given format for query submission.",
        "The participants with the highest score in the final round is ranked higher and declared the winner of this event."
      ]
    },
  },
  {
    id: 3,
    details: {
      title: "Project Expo.",
      description: "Experience the future at Project Expo 2024! Join us as the brightest minds showcase groundbreaking projects across various fields. Engage in discussions, network, and find inspiration for your next big idea. Mark your calendars and celebrate innovation with us!. Project Expo transforms into a vibrant innovation showcase, where participants present their projects in a lively, interactive environment. It's a bustling expo floor filled with cutting-edge technologies, creative solutions, and groundbreaking ideas, offering attendees a glimpse into the future of innovation.",
      rules : [
        "The presentation must be maximum duration of 7 mins. A team of minimum two and maximum four members is encouraged.",
        "Your project is an innovative solution to real-world problems in various fields which can be solved through technology.",
        "Any act of plagiarism is subject to rejection.",
        "Final product or prototype encouraged to accompany your presentation."
      ]
    },
  },
  {
    id: 4,
    details: {
      title: "Style Stack.",
      description: "Step into the captivating world of web design, where boundless creativity and innovation await! Participants will unleash their coding skills with HTML, CSS, and JavaScript, sculpting visually stunning web creations. Explore the ever-evolving digital landscape, breaking barriers and demonstrating technical mastery. Rise to the challenge, compete in thrilling contests, and connect with a vibrant network of web design aficionados!",
      rules : [
        "This is an individual event where participants are required to bring their own laptops.",
        "Participants must first complete a quiz consisting of 15 questions on HTML, CSS, and JavaScript in 10 minutes.",
        "Based on their quiz scores, they are then allowed to start designing.",
        "Design a sample webpage within a timeframe of 50 mins.",
        "Design specifications and assets will be provided to the participants.",
        "Only HTML, CSS, and JavaScript are permitted; usage of frameworks and libraries such as Bootstrap, Tailwind CSS, and React.js is strictly prohibited."
      ]
    },
  },
  {
    id: 5,
    details: {
      title: "Riddle Rally.",
      description: "A riddle rally event is a thrilling adventure where participants embark on a journey filled with riddles and puzzles. Teams receive a series of riddles or clues that guide them through various locations. As they solve each riddle, they uncover the next destination, ultimately leading them to the final goal. It's a fun and interactive way to test your problem-solving skills, teamwork, and creativity while exploring new places and enjoying the thrill of the hunt.",
      rules : [
        "This is a team-based event.",
        "Each team should have only 8 players.",
        "The teams need to find the riddles hidden on the college campus.",
        "There are a total of 6 common clues, and the 7th clue is the key to opening the treasure chest, which is in the department laboratory pc's.",
        "Only one team per college is allowed.",
        "Only 8 teams are allowed to play.",
        "Teams are registered based on a first-come, first-served basis"
      ]
    },
  },
  {
    id: 6,
    details: {
      title: "Snap Fiction.",
      description: "Enter a realm of spontaneous creativity where participants craft captivating tales in moments. Each story is a unique fusion of imagination and storytelling prowess, leaving audiences spellbound in this dynamic storytelling experience. Participants face the exhilarating challenge of weaving captivating tales within a limited time frame. It's a race against the clock, where storytellers must think on their feet, harnessing their creativity and ingenuity to craft engaging narratives in the blink of an eye.",
      rules : [
        "Team Composition: Each team should consist of 2 to 3 members.",
        "Word Selection: Every team must choose only five words from the given set of words.",
        "Discussion Time: Teams have a maximum of 5 minutes to discuss and develop their story using the chosen 5 words.",
        "Narrator Selection: One member from each team should be designated as the narrator.",
        "Stage Performance: The designated narrator will have 2 minutes to narrate the story on stage."

      ]
    },
  },
  {
    id: 7,
    details: {
      title: "CineMinds.",
      description: "Beyond mere trivia, the Quiz Event involves strategic gameplay dynamics that add an extra layer of excitement and challenge. Round 1 : Qui-z-illa :Candidates will attend the online quiz as a lone wolf or as an team(Max 3). Round 2: Cini-zilla : Shortlisted candidates from round 1 will attend the 'Cini-zilla' as a they participated in Qui-z-illa. About Cini-zilla candidates will be given a set of images to find the particular movie name or an actor name or a song.",
      rules : [
        "Candidates will participate either individually or as a team. If you participate as a team, your team must have a maximum of 3 members, including you.",
        "Results will be based on the score. If two teams have the same score, the shortlisting will be based on both the score and time taken.",
        "For Qui-z-illa, from a Team only one candidate is allowed to attend the quiz to represent their team.",
        "Candidates are not allowed to use Google or any other third-party resources."
      ]
    },
  },
  {
    id: 8,
    details: {
      title: "IPL Auction.",
      description: "Welcome to the Bidding wars, where teams of 2, 3, or 4 players come together to compete in a thrilling auction-style cricket extravaganza!. With a designated base price and a dazzling array of cricketing talent to choose from, each team navigates the intense excitement of strategic bidding wars to assemble their ultimate dream team. Get ready to immerse yourself in the competitive frenzy as alliances are formed, strategies devised, and cricketing legends sought after in this electrifying battle for supremacy on the pitch.",
      rules : [
        "Build the ultimate playing 11 from the available pool of talent while staying within your budgetary constraints.", 
        "But here's the catch – the success of your team hinges not only on your strategic bidding skills but also on the performance ratings of the players you select during the auction.",
        "On the day of the event, additional rules and guidelines will be provided to ensure fair play and maximum excitement.", 
        "So, assemble your squad, sharpen your bidding strategies, and get ready to experience the adrenaline rush of the Bidding wars!"
      ]
    },
  },
];

const services = [
  {
    title: "Technical & Fun Events",
    icon: web,
  },
  {
    title: "Free Lunch",
    icon: mobile,
  },
  {
    title: "Exciting Cash Prices",
    icon: backend,
  },
  {
    title: "Free Accomodation day before event",
    icon: creator,
  },
];

const collegeService = [
  {
    title: "Skilled Faculties",
    icon: web,
  },
  {
    title: "Advanced Lab Facilities",
    icon: mobile,
  },
  {
    title: "Fun events / club activities",
    icon: backend,
  },
  {
    title: "A good placement record",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "sql",
    icon: sql,
  }
];

const techeventDetails = [
  {
    id: 1,
    title: "Gnidoc.",
    company_name: "Programming",
    icon: progeni,
    iconBg: "#fff",
    date: "March 11 2024",
    points: [
      "Embark on an exciting journey through the digital cosmos with our Reverse Coding Challenge. ",
      "Your quest? Unravel the mystery behind code outputs and discover the hidden logic of code within and run all test cases successfully.",
      "Participants are like hackers delving into the Matrix, manipulating the digital world to uncover its underlying truths.",
      "Reverse coding is akin to being an archaeologist exploring ancient ruins. Participants dig through layers of code, deciphering the cryptic inscriptions left behind by previous developers."
   ,
    ],
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "pink-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      }
    ],
  },
  {
    id: 2,
    title: "QueryWhizz Event.",
    company_name: "Programming",
    icon: progeni,
    iconBg: "#fff",
    date: "March 11 2024",
    points: [
      "Get ready to dive into the captivating world of databases at SQL Smash, where brains and bytes collide in an epic battle of data mastery!.",
      "Whether you're a seasoned pro or just starting out, all are welcome to showcase their skills and compete for the title of SQL champion.",
      "Just like in a cyberpunk thriller, participants must use their SQL skills to hack into the digital realm and emerge victorious.",
      "Mark your calendars and prepare for the ultimate data adventures.",
    ],
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "Logical Thinking",
        color: "pink-text-gradient",
      }
    ],
  },
  {
    id: 3,
    title: "Project Expo.",
    company_name: "Presentation",
    icon: progeni,
    iconBg: "#fff",
    date: "March 11 2024",
    points: [
      "Experience the future at Project Expo 2024! Join us as the brightest minds showcase groundbreaking projects across various fields.",
      "Engage in discussions, network, and find inspiration for your next big idea. Mark your calendars and celebrate innovation with us!",
      "Project Expo transforms into a vibrant innovation showcase, where participants present their projects in a lively, interactive environment.",
      "It's a bustling expo floor filled with cutting-edge technologies, creative solutions, and groundbreaking ideas, offering attendees a glimpse into the future of innovation.",
    ],
    tags: [
      {
        name: "English fluency",
        color: "pink-text-gradient",
      },
      {
        name: "Presentation Skills",
        color: "green-text-gradient",
      }
    ],
  },
  {
    id: 4,
    title: "Style Stack.",
    company_name: "Web Design",
    icon: progeni,
    iconBg: "#fff",
    date: "March 11 2024",
    points: [
      "Step into the captivating world of web design, where boundless creativity and innovation await! Participants will unleash their coding skills with HTML, CSS, and JavaScript, sculpting visually stunning web creations.",
      "Explore the ever-evolving digital landscape, breaking barriers and demonstrating technical mastery.",
      "Rise to the challenge, compete in thrilling contests, and connect with a vibrant network of web design aficionados!",
    ],
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "creative design",
        color: "blue-text-gradient",
      },
    ],
  },
];
const nontecheventDetails = [
  {
    id: 5,
    title: "Riddle Rally.",
    company_name: "Puzzle",
    icon: progeni,
    iconBg: "#fff",
    date: "March 11, 2024",
    points: [
      "A riddle rally event is a thrilling adventure where participants embark on a journey filled with riddles and puzzles. ",
      "Teams receive a series of riddles or clues that guide them through various locations. ",
      "As they solve each riddle, they uncover the next destination, ultimately leading them to the final goal.",
      "It's a fun and interactive way to test your problem-solving skills, teamwork, and creativity while exploring new places and enjoying the thrill of the hunt.",
    ],
    tags: [
      {
        name: "fun event",
        color: "blue-text-gradient",
      }
    ],
  },
  {
    id: 6,
    title: "Snap Fiction.",
    company_name: "Story Narration",
    icon: progeni,
    iconBg: "#fff",
    date: "March 11 2024",
    points: [
      "Enter a realm of spontaneous creativity where participants craft captivating tales in moments. ",
      "Each story is a unique fusion of imagination and storytelling prowess, leaving audiences spellbound in this dynamic storytelling experience.",
      "Participants face the exhilarating challenge of weaving captivating tales within a limited time frame.",
      "It's a race against the clock, where storytellers must think on their feet, harnessing their creativity and ingenuity to craft engaging narratives in the blink of an eye.",
    ],
    tags: [
      {
        name: "Creative Thinking",
        color: "pink-text-gradient",
      }
    ],
  },
  {
    id: 7,
    title: "CineMinds.",
    company_name: "Quiz",
    icon: progeni,
    iconBg: "#fff",
    date: "March 11 2023",
    points: [
      "Beyond mere trivia, the Quiz Event involves strategic gameplay dynamics that add an extra layer of excitement and challenge.",
      "Round 1 : Qui-z-illa",
      "Candidates will attend the online quiz as a lone wolf or as an team(Max 3).",
      "Round 2: Cini-zilla",
      "Shortlisted candidates from round 1 will attend the 'Cini-zilla' as a they participated in Qui-z-illa. About Cini-zilla candidates will be given a set of images to find the particular movie name or an actor name or a song."
    ],
    tags: [
      {
        name: "general knowledge",
        color: "green-text-gradient",
      }
    ],
  },
  {
    id: 8,
    title: "IPL Auction.",
    company_name: "Quiz",
    icon: progeni,
    iconBg: "#fff",
    date: "March 11 2023",
    points: [
      "Welcome to the Bidding wars, where teams of 2, 3, or 4 players come together to compete in a thrilling auction-style cricket extravaganza!",
      "With a designated base price and a dazzling array of cricketing talent to choose from, each team navigates the intense excitement of strategic bidding wars to assemble their ultimate dream team.",
      "Get ready to immerse yourself in the competitive frenzy as alliances are formed, strategies devised, and cricketing legends sought after in this electrifying battle for supremacy on the pitch."
    ],
    tags: [
      {
        name: "cricket knowledge",
        color: "blue-text-gradient",
      }
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  collegeService,
  technologies,
  testimonials,
  projects,
  eventDetails,
  techeventDetails,
  nontecheventDetails
};
