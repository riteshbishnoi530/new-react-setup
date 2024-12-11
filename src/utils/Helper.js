import { BULB_ICON, BUNDLE_PACKAGES, COMPARISON, GAS_PLAN, INTERNET_PLAN, NO_SERVICE, REVIEW_ARROW, SAVE_TIME_MONEY, STAR_ICON, SUPPORT } from "./Icons";

export const NAV_LIST = [
    {
      name: "About",
      id: "#about",
    },
    {
      name: "How It Works",
      id: "#how",
    },
    {
      name: "Services",
      id: "#service",
    },
    {
      name: "Testimonials",
      id: "#testimonials",
    },
    {
      name: "Why Us",
      id: "#why",
    },
    {
      name: "FAQ",
      id: "#faq",
    },
  ];

  export const SWITCHING_ENERGY = [
    {
      list: 'Save money by finding cheaper deals.'
    },
    {
      list: 'Get better customer service.'
    },
    {
      list: 'Explore greener, more sustainable energy options.'
    }
  ];

  export const SWITCH_STEPS = [
    {
        stepsImage: './assets/webp/switch-easily.webp',
        alt: 'Enter Location',
        imageContent: './assets/webp/preferences.webp',
        hoverHeading: '1. Your Location',
        hoverContent: 'Enter your location and preferences to find the best energy, gas, and internet plans for you.'
    },

    {
        stepsImage: './assets/webp/switch-easily.webp',
        alt: 'Enter Location',
        imageContent: './assets/webp/providers.webp',
        hoverHeading: '2. Compare Providers',
        hoverContent: 'Enter your location and preferences to find the best energy, gas, and internet plans for you.'
    },

    {
        stepsImage: './assets/webp/switch-easily.webp',
        alt: 'Enter Location',
        imageContent: './assets/webp/switch-easily-blur.webp',
        hoverHeading: '3. Switch Easily',
        hoverContent: 'Enter your location and preferences to find the best energy, gas, and internet plans for you.'
    },

    {
        stepsImage: './assets/webp/switch-easily.webp',
        alt: 'Enter Location',
        imageContent: './assets/webp/best-plan.webp',
        hoverHeading: '4. Best plan',
        hoverContent: 'Enter your location and preferences to find the best energy, gas, and internet plans for you.'
    },

];

export  const ACCORDION_DATA = [
  {
    icon: <BULB_ICON />,
    title: "Electricity Plan Comparisons",
    description:
      "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.",
  },
  {
    icon: <GAS_PLAN/>,
    title: "Gas Plan Comparisons",
    description:
      "Compare water providers to find the best rates and services for your needs.",
  },
  {
    icon: <INTERNET_PLAN />,
    title: "Internet Plan Comparisons",
    description:
      "Get the best internet plans with high speed and affordable pricing.",
  },
  {
    icon: <BUNDLE_PACKAGES/>,
    title: "Bundle Packages",
    description:
      "Find the best gas plans with flexible contracts and cost-efficient options.",
  },
];

export const REVIEW = [
  {
    icon: <STAR_ICON/>,
    heading: 'Tailored Recommendations',
    description: 'Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.',
    arrow: <REVIEW_ARROW/>
  }
];

export const UTILITIES = [
  {
    icon: <COMPARISON/>,
    alter: 'comparison',
    heading: 'Simplified Comparison Process',
    description: 'Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision.',
  },
  {
    icon: <SAVE_TIME_MONEY/>,alter: 'comparison',
    heading: 'Save Time and Money',
    description: 'With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available.',
  },
  {
    icon: <NO_SERVICE/>,
    alter: 'comparison',
    heading: 'No Service Interruptions',
    description: 'We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime.',
  },
  {
    icon: <SUPPORT/>,
    alter: 'comparison',
    heading: 'Comprehensive Support',
    description: 'Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way.',
  }
];

export const TESTIMONIALS = [
  {
    icon: './assets/webp/cameron.webp',
    name: 'Cameron',
    id: '@cameron',
    stars: './assets/webp/green-star.webp',
    description: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.'
  },
  {
    icon: './assets/webp/ronald.webp',
    name: 'Ronald',
    id: '@ronald',
    stars: './assets/webp/green-star.webp',
    description: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.'
  },
  {
    icon: './assets/webp/jay-shah.webp',
    name: 'Jay Shah',
    id: '@jayshah',
    stars: './assets/webp/green-star.webp',
    description: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.'
  },
  {
    icon: './assets/webp/cameron.webp',
    name: 'Cameron',
    id: '@cameron',
    stars: './assets/webp/green-star.webp',
    description: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.'
  },
  {
    icon: './assets/webp/ronald.webp',
    name: 'Ronald',
    id: '@ronald',
    stars: './assets/webp/green-star.webp',
    description: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.'
  },
  {
    icon: './assets/webp/jay-shah.webp',
    name: 'Jay Shah',
    id: '@jayshah',
    stars: './assets/webp/green-star.webp',
    description: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.'
  }
]