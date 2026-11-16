import {readFileSync,writeFileSync} from 'node:fs';
const assets=JSON.parse(readFileSync(new URL('./media-data.json',import.meta.url),'utf8'));
for(const [name,data] of Object.entries(assets))writeFileSync(new URL(name,import.meta.url),Buffer.from(data,'base64'));
