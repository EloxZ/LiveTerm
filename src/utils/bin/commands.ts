// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import { sumfetch } from './index';

// Help
export const ayuda = async (args: string[]): Promise<string> => help(args)
export const help = async (args: string[]): Promise<string> => {
  return `Estos son los comandos disponibles:

[tab]: auto-completa el comando.
[ctrl+l]/clear/limpiar: limpia la terminal.

info: muestra un resumen de lo importante.
about/sobremi: pequeña información sobre mi perfil.
projects/proyectos: muestra proyectos en los que he trabajado.
contact/contacto: muestra mi información de contacto.
`;
};

export const clear = (args: string[]): string => ""
export const limpiar = (args: string[]): string => ""

// About
export const sobremi = (args: string[]): string => about(args)
export const about = (args: string[]): string => {
  return `¡Bienvenido a mi términal personal!
Soy Eloy, Graduado en Ingeniería del Software con 6 meses de experiencia en Desarrollo Web.
Entusiasmado por despegar en mi carrera y aprender de profesionales experimentados.

Puede ver más detalles sobre mis habilidades en mi <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.resume_url}" target="_blank">Curriculum</a></u>
`;
};

// Contact
export const contacto = (args: string[]): string => contact(args)
export const contact = (args: string[]): string => {
  return `Correo electrónico: <u><a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email}" target="_blank">${config.email}</a></u>
Eche un vistazo a mis repositorios en Github: <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.github}" target="_blank">/EloxZ</a></u>
Puede contactarme a través de LinkedIn: <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.linkedin}" target="_blank">/eloybj</a></u>`;
};

// Contact
export const proyectos = (args: string[]): string => projects(args)
export const projects = (args: string[]): string => {
  return `Zona en construcción, pronto agregaré mis proyectos.`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `Vaya... de momento está vacío.`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `No hay otros directorios :(.`;
};

export const fecha = async (args: string[]): Promise<string> => date(args)
export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Info
export const info = (args?: string[]): string => {
  return sumfetch(args)
};
