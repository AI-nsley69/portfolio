import type { Library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons/faPersonDigging";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faGears } from "@fortawesome/free-solid-svg-icons/faGears";
import { faX } from "@fortawesome/free-solid-svg-icons";

export function addIcons(library: Library) {
  const icons = [
    faEnvelope,
    faGithub,
    faPersonDigging,
    faBriefcase,
    faGears,
    faX,
  ];
  library.add(icons);
}
