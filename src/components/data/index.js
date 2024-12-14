// import { organization } from "../assets/SVG";
import Location from "../../assets/dashboard/profile/Location.svg";
import More from "../../assets/dashboard/profile/more.svg";
import environmentBg from "../../assets/new-landing/mdi_environment.svg";
import communityBg from "../../assets/new-landing/mdi_account-group.svg";
import orgBg from "../../assets/new-landing/fluent_organization-32-filled.svg";

export const ORGANIZATIONS = [
  {
    title: "Environment",
    bg: environmentBg,
    imgUrl: "src/assets/SVG/environment.svg",
    imgBgColor: "#EEFCF4",
    imgBg: "src/assets/SVG/organization-bg.svg",
    description:
      "Data on the natural environment (such as air and water quality, land use patterns, and biodiversity) can provide important information on the sustainability of an economy and the potential impacts of economic activities on the environment.EcHo problem and projects related to this in your community",
  },
  {
    title: "Community",
    bg: communityBg,
    imgUrl: "src/assets/SVG/community.svg",
    imgBgColor: "#F1FAFE",
    imgBg: "src/assets/SVG/community-bg.svg",
    description:
      " Data on the social and demographic characteristics of a country's population (such as age, education levels, and income) can help policymakers understand the needs and challenges facing different segments of the population and how these may be changing over time.EcHo problem and projects related to this in your community.",
  },
  {
    title: "Organization",
    bg: orgBg,
    imgUrl: "src/assets/SVG/organization.svg",
    imgBgColor: "#FFF3ED",
    imgBg: "src/assets/SVG/organization-bg.svg",
    description:
      "Data on the structures and functions of different organizations (such as businesses, government agencies, and civil society groups) can provide insights into the efficiency and effectiveness of these organizations and how they contribute to the overall economy. EcHo problem and projects related to this in your community ",
  },
];

export const SOCIALS = {
  links: [
    "src/assets/SVG/facebook.svg",
    "src/assets/SVG/twitter.svg",
    "src/assets/SVG/linkedin.svg",
  ],
};

export const FAQs = [
  {
    title: "What is Eco Tech all about?",
    content: [
      "Our platform connects individuals and organizations in Africa to drive sustainability, innovation, and technology through the iPALs portal and PALs app. ECO stands for Environment, Community, and Organization.",
    ],
  },
  {
    title: "Can I submit my own projects or ideas to the platform?",
    content: [
      "Yes! You can submit your own project if you have a leader profile on the ECO platform. Ideas are submitted on Problems therefore if you want to share an idea - you would have to share the problem and idea on it. If you do share idea on other problems on the platform then the idea is recorded as yours on your profile.",
    ],
  },
  {
    title:
      "Are there any specific requirements for submitting projects or problems?",
    content: [
      "Your project or problem must be Environmental, community, or organization-focused on a place, people, product, or service.",
      "Your project or problem has to be related to one of the United Nation Sustainability Goals.",
      "Projects must have skills attached to it, required number of people, and a timeline to complete.",
      "Only Leaders can post projects.",
      "Ambassadors can post problems and ideas and can work on projects.",
    ],
  },
  {
    title:
      "What resources or tools does Eco Tech provide for youth interested in the tech industry?",
    content: [
      "Job and Internship Opportunities: ECO connects youth with job and internship opportunities in the tech industry. Partnering with tech companies, startups, and organizations, the platform helps youth access employment and internship openings that align with their interests and skills.",
      "Tech Leadership Training: The ECO platform provides tech leadership training programs designed to equip youth with the necessary skills, knowledge, and mindset to excel in the tech industry. These programs cover topics such as coding, software development, data analytics, cybersecurity, and digital innovation.",
      "Project Collaboration: The ECO platform encourages youth to collaborate on tech projects, providing a space where they can form teams, share ideas, and work on innovative solutions. This collaborative environment fosters creativity, teamwork, and practical experience in executing tech projects.",
      "Funding and Investment Support: ECO facilitates access to funding and investment opportunities for youth-led tech ventures. Through partnerships with impact investors and venture capital firms, the platform helps connect young entrepreneurs with the financial resources needed to bring their tech ideas to life.",
      "Youths can report problems they face to engage other youth in tech to help and support.",
      "They can find projects to collaborate and create.",
      "ECO platform offers youths the opportunity to grow in tech companies and eventually become investors in other tech companies.",
      "Youths can find where their skills are most needed in Africa for free border employment in other African countries.",
    ],
  },
  {
    title:
      "How can I contact the team behind Eco Tech for further inquiries or support?",
    content: ["You can reach us through our email on ask@fortheECO.com."],
  },
  {
    title: "Why PALs?",
    content: [
      "PALs stands for Partners, Ambassadors, and Leaders for Sustainability.",
      "PALs play a crucial role in driving sustainability and innovation within the ECO platform. They are key contributors and active participants in the ecosystem, working together to address environmental, social, and economic challenges in Africa.",
      "PALs are at the heart of the ECO platform, serving as catalysts for collaboration, knowledge-sharing, and sustainable projects. They bring their expertise, resources, and passion for sustainability and innovation to create meaningful impact in their local communities and beyond.",
      "PALs act as change agents and champions for sustainability. They contribute their skills, knowledge, and resources to develop innovative solutions, promote sustainable practices, and drive positive environmental and social impact.",
    ],
  },
];

export const Community = [
  {
    state: "Ikeja,Lagos",
    imgUrl: Location,
    moreUrl: More,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit nostru. Exercitation veniam consequat sunt nostru.Velit officia mollit consequat duis enim velit mollit.",
    label: "Eco Category:",
    value: "Community",
    time: "11:34pm",
    date: "2nd Mar 2024 ",
    goal: "UNSdg Goal",
    goalLabel: "3: Good health and well being",
  },
  {
    state: "Ikeja,Lagos",
    imgUrl: Location,
    moreUrl: More,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit nostru. Exercitation veniam consequat sunt nostru.Velit officia mollit consequat duis enim velit mollit.",
    label: "Eco Category:",
    value: "Community",
    time: "11:34pm",
    date: "2nd Mar 2024 ",
    goal: "UNSdg Goal",
    goalLabel: "3: Good health and well being",
  },
  {
    state: "Ikeja,Lagos",
    imgUrl: Location,
    moreUrl: More,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit nostru. Exercitation veniam consequat sunt nostru.Velit officia mollit consequat duis enim velit mollit.",
    label: "Eco Category:",
    value: "Community",
    time: "11:34pm",
    date: "2nd Mar 2024 ",
    goal: "UNSdg Goal",
    goalLabel: "3: Good health and well being",
  },
];

export const SdgGoals = [
  { id: 1, name: "No Poverty" },
  { id: 2, name: "Zero Hunger" },
  { id: 3, name: "Good Health and Well-being" },
  { id: 4, name: "Quality Education" },
  { id: 5, name: "Gender Equality" },
  { id: 6, name: "Clean Water and Sanitation" },
  { id: 7, name: "Affordable and Clean Energy" },
  { id: 8, name: "Decent Work and Economic Growth" },
  { id: 9, name: "Industry, Innovation, and Infrastructure" },
  { id: 10, name: "Reduced Inequality" },
  { id: 11, name: "Sustainable Cities and Communities" },
  { id: 12, name: "Responsible Consumption and Production" },
  { id: 13, name: "Climate Action" },
  { id: 14, name: "Life Below Water" },
  { id: 15, name: "Life on Land" },
  { id: 16, name: "Peace, Justice, and Strong Institutions" },
  { id: 17, name: "Partnerships for the Goals" },
];

export const EcoCategory = [
  { id: 1, name: "Environment" },
  { id: 2, name: "Community" },
  { id: 3, name: "Organization" },
];

export const ORGANIZATIONS_EcoDataCenter = [
  {
    title: "Environment",
    bg: environmentBg,
    imgUrl: "src/assets/SVG/environment.svg",
    imgBgColor: "#EEFCF4",
    imgBg: "src/assets/SVG/organization-bg.svg",
    text1: "CO2 emission reduced by 30%",
    text2: "Fossil fuel dependency reduced by 20%",
  },
  {
    title: "Community",
    bg: communityBg,
    imgUrl: "src/assets/SVG/community.svg",
    imgBgColor: "#F1FAFE",
    imgBg: "src/assets/SVG/community-bg.svg",
    text1: "20,000 people transported in 1 week",
    text2: "Community relations improved by 22%",
  },
  {
    title: "Organization",
    bg: orgBg,
    imgUrl: "src/assets/SVG/organization.svg",
    imgBgColor: "#FFF3ED",
    imgBg: "src/assets/SVG/organization-bg.svg",
    text1: "10 organizations marketed",
    text2: "24% projected increase from expected marketing on the train ",
  },
];
export const TierMemeberships = [
  {
    title: "Freemium Tier",
    Price: "Free",
    head2_bg: "#FFFFFF",
    title_color: "",
    Access: "Limited access to data sets.",
    UploadCapability: "one data set for cleaning and basic analysis.",
    Bgcolor: "white",
    head2: "Get started for Free",
  },
  {
    title: "Basic Tier",
    Price: "#20,000/",
    head2_bg: "#FFFFFF",
    title_color: "",
    price_text: "monthly",
    Access: "Full access to data sets related to one sector.",
    UploadCapability: "up to 5 data set for cleaning and basic analysis.",
    Bgcolor: "#F3F5F9",
    head2: "Get started with Basic",
  },
  {
    title: "Premium Tier",
    Price: "#50,000/",
    head2_bg: "#FFFFFF",
    title_color: "",
    price_text: "monthly",
    Access: "Full access to all data sets across multiple sectors.",
    UploadCapability: "Unlimited data set for cleaning and basic analysis.",
    Bgcolor: "",
    head2: "Get started with Premium",
  },
  {
    title: "Enterprise Tier",
    Price: "---",
    head2_bg: "#1DB559",
    text_color: "#FFFFFF",
    price_text: "---",
    Access: "Full platform access with dedicated account management.",
    UploadCapability: "large-scale data processing.",
    Bgcolor: "#24272B",
    head2: "Contact us",
  },
];

export const TierMemeberships2 = [
  {
    title: "Freemium Tier",
    Price: "Free",
    head2_bg: "#FFFFFF",
    title_color: "",
    Access: "Limited access to data sets.",
    UploadCapability: "one data set for cleaning and basic analysis.",
    extratext1: "Basic search",
    extratext2: "Data Visualization",
    extratext3: "",
    extratext4: "",
    Bgcolor: "#FFFFFF",
    head2: "Get started for Free",
  },
  {
    title: "Basic Tier",
    Price: "#20,000/",
    head2_bg: "#FFFFFF",
    title_color: "",
    price_text: "monthly",
    Access: "Full access to data sets related to one sector.",
    UploadCapability: "up to 5 data set for cleaning and basic analysis.",
    extratext1: "Advanced search",
    extratext2: "Data Visualization",
    extratext3: "Basic AI tools for data analysis,and reports.",
    extratext4: "",
    Bgcolor: "#F3F5F9",
    head2: "Get started with Basic",
  },
  {
    title: "Premium Tier",
    Price: "#50,000/",
    head2_bg: "#FFFFFF",
    title_color: "",
    price_text: "monthly",
    Access: "Full access to all data sets across multiple sectors.",
    UploadCapability: "Unlimited data set for cleaning and basic analysis.",
    extratext1: "Advanced search",
    extratext2: "Data Visualization",
    extratext3: "Advanced AI tools for data science and engineering",
    extratext4: "Priority support.",
    Bgcolor: "",
    head2: "Get started with Premium",
  },
  {
    title: "Enterprise Tier",
    Price: "---",
    head2_bg: "#1DB559",
    text_color: "#FFFFFF",
    price_text: "---",
    Access: "Full platform access with dedicated account management.",
    UploadCapability: "large-scale data processing.",
    extratext1: "Advanced search",
    extratext2: "Data Visualization",
    extratext3: "Advanced AI and machine learning tools",
    extratext4: "Custom integration, and full API access for data integration.",
    Bgcolor: "#24272B",
    head2: "Contact us",
  },
];
