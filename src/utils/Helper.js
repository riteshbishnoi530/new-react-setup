import { BULB_ICON, BUNDLE_PACKAGES, GAS_PLAN, INTERNET_PLAN } from "./Icons";

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