import { WINDOWS_TO_IANA_MAP } from './data';

import type { IanaName, Territory, WindowsZoneName } from './types';
import { findIanaAliases } from './findIanaAliases';

export function findIana(windowsTimeZone: WindowsZoneName, territory?: Territory): IanaName[];
export function findIana(windowsTimeZone: string, territory?: string): IanaName[];
export function findIana(windowsTimeZone: WindowsZoneName, territory?: string): IanaName[];
export function findIana(windowsTimeZone: string, territory?: Territory): IanaName[];
export function findIana(
  windowsTimeZone: WindowsZoneName | string,
  territory?: Territory | string,
): IanaName[] {
  const set = new Set<IanaName>();

  WINDOWS_TO_IANA_MAP.filter((it) => {
    if (typeof territory === 'undefined') {
      return it.windowsName === windowsTimeZone;
    }

    return it.windowsName === windowsTimeZone && it.territory === territory;
  })
    .map((it) => it.iana)
    .flat()
    .map(findIanaAliases)
    .flat()
    .forEach((alias) => {
      set.add(alias);
    });

  return Array.from(set);
}
