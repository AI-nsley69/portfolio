import { ref, type Ref } from "vue";

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

const programming: Skill[] = [
  {
    name: "JavaScript",
    icon: "/skills/javascript.svg",
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
  },
  {
    name: "CSS",
    icon: "/skills/css.svg",
  },
  {
    name: "HTML",
    icon: "/skills/html.svg",
  },
  {
    name: "C#",
    icon: "/skills/c-sharp.svg",
  },
  {
    name: "Java",
    icon: "/skills/java.svg",
  },
  {
    name: "Zig",
    icon: "/skills/zig.svg",
  },
  {
    name: "Python",
    icon: "/skills/python.svg",
  },
  {
    name: "Bash",
    icon: "/skills/bash.svg",
  },
];

const toolsFrameworks: Skill[] = [
  {
    name: "Node.js",
    icon: "/skills/nodejs.svg",
  },
  {
    name: "ESLint",
    icon: "/skills/eslint.svg",
  },
  {
    name: "Vue.js",
    icon: "/skills/vue-js.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/skills/tailwind-css.svg",
  },
  {
    name: "Cypress",
    icon: "/skills/cypress.svg",
  },
  {
    name: "Express.js",
    icon: "/skills/express-js.svg",
  },
  {
    name: "Discord.js",
    icon: "/skills/discord-js.svg",
  },
  {
    name: "Git",
    icon: "/skills/git.svg",
  },
  {
    name: "Bitbucket",
    icon: "/skills/bitbucket.svg",
  },
  {
    name: "GitHub",
    icon: "/skills/github.svg",
  },
  {
    name: "Jira",
    icon: "/skills/jira.svg",
  },
  {
    name: "MySQL",
    icon: "/skills/mysql.svg",
  },
  {
    name: "SQlite",
    icon: "/skills/sqlite.svg",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.svg",
  },
  {
    name: "Redis",
    icon: "/skills/redis.svg",
  },
  {
    name: "VS Code",
    icon: "/skills/vscode.svg",
  },
];

const hosting: Skill[] = [
  {
    name: "Docker",
    icon: "/skills/docker.svg",
  },
  {
    name: "Kubernetes",
    icon: "/skills/kubernetes.svg",
  },
  {
    name: "ArgoCD",
    icon: "/skills/argocd.svg",
  },
  {
    name: "Helm",
    icon: "/skills/helm.svg",
  },
  {
    name: "Cloudflare",
    icon: "/skills/cloudflare.svg",
  },
  {
    name: "Linux",
    icon: "/skills/linux.svg",
  },
  {
    name: "Debian",
    icon: "/skills/debian.svg",
  },
  {
    name: "Windows",
    icon: "/skills/windows.svg",
  },
  {
    name: "Grafana",
    icon: "/skills/grafana.svg",
  },
  {
    name: "Jenkins",
    icon: "/skills/jenkins.svg",
  },
  {
    name: "pfSense",
    icon: "/skills/pfsense.svg",
  },
  {
    name: "openSSH",
    icon: "/skills/ssh.svg",
  },
  {
    name: "nginx",
    icon: "/skills/nginx.svg",
  },
];

// const misc: Skill[] = [];

export const skills = ref([
  {
    name: "Programming",
    skills: programming,
  },
  {
    name: "Tools & Frameworks",
    skills: toolsFrameworks,
  },
  {
    name: "Hosting & DevOps",
    skills: hosting,
  },
  //   {
  //     name: "Miscellaneous",
  //     skills: misc,
  //   },
]);
