import fs from 'fs';
import path from 'path';

import windowsToIanaMap from '../src/data/windowsToIanaMap.json';
import ianaAliasMap from '../src/data/ianaAliasMap.json';

const generateTypeCode = (name: string, values: Set<string>) =>
  `export type ${name} = ${Array.from(values)
    .map((value) => `'${value}'`)
    .join(' | ')};`;

const generateTypes = () => {
  const windowsNames = new Set<string>();
  const territories = new Set<string>();
  const ianaNames = new Set<string>();

  windowsToIanaMap.forEach((zone) => {
    windowsNames.add(zone.windowsName);
    territories.add(zone.territory);
    zone.iana.forEach((alias) => {
      ianaNames.add(alias);
    });
  });

  ianaAliasMap.forEach((territory) => {
    territory.alias.forEach((alias) => {
      ianaNames.add(alias);
    });
  });

  return [
    generateTypeCode('WindowsZoneName', windowsNames),
    generateTypeCode('Territory', territories),
    generateTypeCode('IanaName', ianaNames),
  ].join('\n\n\n');
};

fs.writeFileSync(path.join(__dirname, '../src/types.ts'), `${generateTypes()}\n`, {
  encoding: 'utf-8',
});
