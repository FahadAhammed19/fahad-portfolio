import {defineConfig} from 'vite';
import {copyFileSync} from 'node:fs';
const assets=['Fahad-Ahammed-CV.pdf','fahad-profile.jpg','demos.html','demos.js','task.svg','expense.svg','palette.svg','quiz.svg'];
export default defineConfig({publicDir:false,plugins:[{name:'copy-assets',closeBundle(){for(const file of assets)copyFileSync(file,`dist/${file}`);}}]});
