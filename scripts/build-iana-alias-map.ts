import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';

const readFile = async () => {
  const map: Array<{ name: string; description: string; alias: string[] }> = [];
  const fileContent = fs.readFileSync(
    path.join(__dirname, '../src/data/ianaAliasMap.xml'),
    'utf-8',
  );

  let xmlObject = await new Promise<any>((resolve, reject) => {
    xml2js.parseString(fileContent, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

  xmlObject = await xmlObject.ldmlBCP47.keyword[0].key[0].type;
  xmlObject.forEach(({ $: entry }: any) => {
    if (entry.deprecated) return;
    map.push({ name: entry.name, description: entry.description, alias: entry.alias.split(' ') });
  });

  return map;
};

(async () => {
  const map = await readFile();
  fs.writeFileSync(
    path.join(__dirname, '../src/data/ianaAliasMap.json'),
    JSON.stringify(map, null, 2),
    {
      encoding: 'utf-8',
    },
  );
})();
