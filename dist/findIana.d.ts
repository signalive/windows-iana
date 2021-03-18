import type { IanaName, Territory, WindowsZoneName } from './types';
export declare function findIana(windowsTimeZone: WindowsZoneName, territory?: Territory): IanaName[];
export declare function findIana(windowsTimeZone: string, territory?: string): IanaName[];
export declare function findIana(windowsTimeZone: WindowsZoneName, territory?: string): IanaName[];
export declare function findIana(windowsTimeZone: string, territory?: Territory): IanaName[];
