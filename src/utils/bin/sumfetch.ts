import config from '../../../config.json';

const sumfetch = (args: string[]): string => {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄          
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄       
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄     
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓   
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓
▐▓                                 ▐▓
▐▓      > P O R T A F O L I O      ▐▓
▐▓                                 ▐▓
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓   
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀     
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀        
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀           


   SOBRE MI
  ------------
   ${config.name}
   Full-Stack Developer
   <u><a href="${config.resume_url}" target="_blank">Curriculum</a></u>

  爵 PROYECTOS
  ------------

   CONTACTO
  ------------
   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   <u><a href="${config.social.github}" target="_blank">${config.social.github}</a></u>
   <u><a href="${config.social.linkedin}" target="_blank">${config.social.linkedin}</a></u>

Teclee 'help' o 'ayuda' para más información.
`;

};

export default sumfetch;
