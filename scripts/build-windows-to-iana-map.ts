import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';

const readFile = async () => {
  const map: Array<{ windowsName: string; territory: string; iana: string[] }> = [];
  const fileContent = fs.readFileSync(
    path.join(__dirname, '../src/data/windowsToIanaMap.xml'),
    'utf-8',
  );

  let xmlObject = await new Promise<any>((resolve, reject) => {
    xml2js.parseString(fileContent, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

  xmlObject = await xmlObject.supplementalData.windowsZones[0].mapTimezones[0].mapZone;

  xmlObject.forEach(({ $: entry }: any) => {
    map.push({ windowsName: entry.other, territory: entry.territory, iana: entry.type.split(' ') });
  });

  return map;
};

(async () => {
  const map = await readFile();
  fs.writeFileSync(
    path.join(__dirname, '../src/data/windowsToIanaMap.json'),
    JSON.stringify(map, null, 2),
    { encoding: 'utf-8' },
  );
})();
