import { ref, type Ref } from "vue";

export interface Experience {
  title: string;
  company: string;
  work: string[];
  period: {
    start: number;
    end: number | null;
  };
}

export const workExperience: Ref<Experience[]> = ref([
    {
        "title": "Partner Success Manager (Formerly: Solutions Specialist)",
        "company": "Arrive (Formerly: Flowbird Group)",
        "work": [
            "Customizing parking solutions to customers needs, such as:",
            "Parking Metres, MPP, ANPR, Permit solutions, Enforcement, BackOffice and Integrations (REST/SOAP)",
            "Diagnosing issues & escalating to L2/L3",
            "Developing internal tools for local teams",
            "Automated workload through scripting"
        ],
        "period": {
            "start": 1714521600000,
            "end": null
        }
    },
    {
        "title": "Junior Fullstack Engineer",
        "company": "Customer First AB",
        "work": [
            "Primary role as a developer",
            "Managed pipelines and development workflow",
            "Containerized the application",
            "Moved production to Linux",
            "Server management with Linux & Windows",
            "Physical server management, racking & wiring",
            "Managed network setup for production & office",
            "Entra & Active Directory management",
            "Experimented with k8s & argocd",
        ],
        "period": {
            "start": 1688169600000,
            "end": 1714089600000
        }
    },
]);

