import {
  RiFacebookLine,
  RiGitBranchLine,
  RiLinkedinLine,
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
} from "react-icons/si";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";

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
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
