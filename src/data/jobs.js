import AppleLogo from "../assets/AppleLogo.png";
import AmazonLogo from "../assets/AmazonLogo.jpeg";
import WayhomeLogo from "../assets/WayhomeImg.jpg";

const jobs = [
  {
    company: "Amazon",
    role: "Software Engineering Intern",
    startDate: "September 2026",
    endDate: "November 2026 (Upcoming)",
    description: [
      "Incoming Software Engineering Intern at Amazon for Fall 2026",
    ],
    shortDescription: ["Incoming SWE Intern at Amazon, Fall 2026"],
    imagePath: AmazonLogo,
    scale: 110,
  },
  {
    company: "Apple",
    role: "Software Engineering Intern (Webkit Media)",
    startDate: "May 2026",
    endDate: "August 2026 (Present)",
    description: [
      "Developing Safari's cmd+F find functionality to search video captions, subtitles, and descriptions across macOS and iOS devices using C++, targeting a new cross-browser accessibility standard to expose caption tracks on 1B+ Apple devices",
      "Achieved 100% WPT compliance for MediaSession setActionHandler by implementing 4 missing actions in WebCore's IDL layer and mapped MediaSession actions to OS-level platform commands across 5 Apple platforms",
      "Authored JavaScript layout tests and Objective-C API tests validating cue matching, timestamp accuracy, edge case handling, action handler behavior, and Safari's find-in-page text matching through IDL bindings bridging JavaScript and C++",
      "Collaborated with multiple teams and organizations regarding the finalization of the new find functionality, presenting to the Senior VP of SWE",
    ],
    shortDescription: [
      "Building Safari's cmd+F support for video captions in C++, reaching 1B+ Apple devices",
      "Hit 100% WPT compliance for MediaSession across 5 Apple platforms",
      "Wrote JS and Objective-C tests covering caption matching and find-in-page behavior",
      "Presented the new find functionality to Senior VPs of SWE",
    ],
    imagePath: AppleLogo,
    scale: 70,
  },
  {
    company: "Wayhome",
    role: "Fullstack Software Engineering Intern",
    startDate: "August 2025",
    endDate: "December 2025",
    description: [
      "Cleaned and standardized 50,000+ property location records by building Python/Pandas pipeline to cross-reference Zillow, Census, and Nominatim geospatial data, then migrated validated data from standalone repository into Rails app with PostGIS, eliminating import failures in staging and production",
      "Improved response times by 35% by identifying N+1 queries, adding database indexes, implementing Redis caching, and refactoring high-traffic endpoints serving 100+ daily active users",
      "Built Stripe subscription billing system with idempotency keys and webhook retry logic to prevent duplicate charges, supporting tiered pricing for property owners and renters",
      "Reduced support tickets by 25% by developing AI chatbot using MCP and WebSockets to answer real-time property availability questions, processing 500+ inquiries in first month of deployment",
    ],
    shortDescription: [
      "Cleaned and migrated 50,000+ property records into a Rails app with PostGIS",
      "Improved response times by 35% via caching and query optimization",
      "Built Stripe billing with idempotency keys and webhook retry logic",
      "Cut support tickets by 25% with an AI chatbot handling 500+ inquiries",
    ],
    imagePath: WayhomeLogo,
    scale: 100,
  },
];

export default jobs;
