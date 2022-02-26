import {
  FaDiscord,
  FaJira,
  FaGithub,
  FaSlack,
  FaMicrosoft,
  FaBitbucket,
  FaFigma,
  FaGoogle,
  FaTrello,
} from "react-icons/fa";

const platforms = {
  JIRA: {
    url: "https://unihack.atlassian.net/jira/software/c/projects/UNI/boards/2",
    inviteLink: false,
    icon: FaJira,
  },

  GITHUB: {
    url: "https://discord.gg/HvfguBsu",
    inviteLink: false,
    icon: FaGithub,
  },

  DISCORD: {
    url: "https://discord.gg/HvfguBsu",
    inviteLink: true,
    icon: FaDiscord,
  },

  SLACK: {
    url: "https://join.slack.com/t/slack-tgg5480/shared_invite/zt-14cx5m6ar-Rg~l9LxX~MJF7g5G8ZcBTA",
    inviteLink: true,
    icon: FaSlack,
  },

  MICROSOFT_TEAMS: {
    icon: FaMicrosoft,
  },

  BITBUCKET: {
    icon: FaBitbucket,
  },

  FIGMA: {
    icon: FaFigma,
  },

  GOOGLE: {
    icon: FaGoogle,
  },

  TRELLO: {
    icon: FaTrello,
  },
};

export default platforms;
