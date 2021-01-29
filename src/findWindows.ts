import { WINDOWS_TO_IANA_MAP } from './data';

import type { IanaName, WindowsZoneName } from './types';
import { findIanaAliases } from './findIanaAliases';

export function findWindows(ianaTimeZone: IanaName): WindowsZoneName[];
export function findWindows(ianaTimeZone: string): WindowsZoneName[];
export function findWindows(ianaTimeZone: IanaName | string): WindowsZoneName[] {
  const aliases = findIanaAliases(ianaTimeZone);
  const result = new Set<WindowsZoneName>();

  WINDOWS_TO_IANA_MAP.filter((it) =>
    it.iana.find((it) => aliases.includes(it as IanaName)),
  ).forEach((entry) => {
    result.add(entry.windowsName as WindowsZoneName);
  });

  return Array.from(result);
}
