import { ref, type Ref } from "vue";

export interface Experience {
  title: string;
  company: string;
  period: {
    start: number;
    end: number | null;
  };
}

export const workExperience: Ref<Experience[]> = ref([
    {
        "title": "Partner Success Manager (Formerly: Solutions Specialist)",
        "company": "Arrive (Formerly: Flowbird Group)",
        "period": {
            "start": 1714521600000,
            "end": null
        }
    },
    {
        "title": "Junior Fullstack Engineer",
        "company": "Customer First AB",
        "period": {
            "start": 1688169600000,
            "end": 1714089600000
        }
    },
]);

