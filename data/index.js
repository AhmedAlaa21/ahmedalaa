import {
  RiFacebookLine,
  RiGitBranchLine,
  RiLinkedinLine,
  RiSeoFill,
} from "react-icons/ri";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiJavascript,
} from "react-icons/si";

import { TiSocialFacebook } from "react-icons/ti";

import { RxMobile } from "react-icons/rx";

export const SocialData = [
  {
    id: 0,
    path: "https://www.facebook.com/ahmed.mohamed.alaa2016/",
    icon: <RiFacebookLine />,
  },
  {
    id: 1,
    path: "https://www.github.com/AhmedAlaa21",
    icon: <RiGitBranchLine />,
  },
  {
    id: 2,
    path: "https://www.linkedin.com/in/ahmed-alaa-52b51518a/",
    icon: <RiLinkedinLine />,
  },
];

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Google Mobile Launchpad",
        stage: "2016 - 2017",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer - Badgewell Company",
        stage: "2023 - 2023",
      },
      {
        title: "Flutter Developer - Freelance",
        stage: "2020 - 2022",
      },
      {
        title: "Ecommerce Manager - Easy Control",
        stage: "2020 - 2023",
      },
      {
        title: "Social Media Specialist - Mindev",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "React Native - EDX", stage: "2023 - 2023" },
      {
        title: "React & Next js Diploma - Mahara tech",
        stage: "2022-2023",
      },
      {
        title: "Computer Science Bachelor - Faculty of Science",
        stage: "2019",
      },
      {
        title: "Android Native Development - Google Mobile Launchpad",
        stage: "2016",
      },
      {
        title: "Social Media Marketing Diploma",
        stage: "2020",
      },
    ],
  },
];

// data
export const serviceData = [
  {
    icon: <SiJavascript />,
    title: "Web Development",
    description:
      "Crafting immersive online experiences through coding, design, and functionality.",
  },
  {
    icon: <RxMobile />,
    title: "Mobile Applications",
    description:
      "Building seamless and engaging cross-platform applications for both iOS and Android ecosystems.",
  },
  {
    icon: <RiSeoFill />,
    title: "SEO",
    description:
      "Optimizing digital presence to enhance visibility and drive organic growth in search engine rankings.",
  },
  {
    icon: <FaFigma />,
    title: "Solid ui to Real-World Applications",
    description:
      "Transforming design concepts into functional, user-friendly applications from visual prototypes.",
  },
  {
    icon: <TiSocialFacebook />,
    title: "Social Media Management",
    description:
      "Strategically amplifying brand identity and engagement across diverse social platforms.",
  },
];
