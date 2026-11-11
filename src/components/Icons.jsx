import {
  SiHtml5, SiCss, SiJavascript, SiTailwindcss, SiReact, SiNextdotjs, SiPhp, SiLaravel,
  SiMysql, SiFirebase, SiSqlite, SiNodedotjs, SiExpress, SiMongodb, SiKotlin,
  SiJetpackcompose, SiAndroid, SiAndroidstudio, SiPython, SiTensorflow, SiMediapipe,
  SiC, SiCplusplus, SiGit, SiGithub, SiApache, SiVercel,
} from "react-icons/si";
import { FaJava, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { FiMail, FiCode } from "react-icons/fi";

const skillIcons = {
  SiHtml5, SiCss, SiJavascript, SiTailwindcss, SiReact, SiNextdotjs, SiPhp, SiLaravel,
  SiMysql, SiFirebase, SiSqlite, SiNodedotjs, SiExpress, SiMongodb, SiKotlin,
  SiJetpackcompose, SiAndroid, SiAndroidstudio, SiPython, SiTensorflow, SiMediapipe,
  SiC, SiCplusplus, SiGit, SiGithub, SiApache, SiVercel, FaJava, VscVscode,
};

export function SkillIcon({ name, ...props }) {
  const Icon = skillIcons[name] || FiCode;
  return <Icon aria-hidden="true" {...props} />;
}

const socialIcons = { github: FaGithub, linkedin: FaLinkedinIn, whatsapp: FaWhatsapp, mail: FiMail };

export function SocialIcon({ name, ...props }) {
  const Icon = socialIcons[name];
  return <Icon aria-hidden="true" {...props} />;
}
