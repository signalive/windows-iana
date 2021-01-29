[![Build Status](https://travis-ci.org/rubenillodo/windows-iana.svg?branch=master)](https://travis-ci.org/rubenillodo/windows-iana)
[![Coverage Status](https://coveralls.io/repos/github/rubenillodo/windows-iana/badge.svg)](https://coveralls.io/github/rubenillodo/windows-iana)

This library exports two functions to help convert from Windows time zones to IANA time zones (based
on
[this mapping definition](https://github.com/unicode-org/cldr/blob/master/common/supplemental/windowsZones.xml)
and
[this list of IANA aliases](https://github.com/unicode-org/cldr/blob/master/common/bcp47/timezone.xml)).

# Installation

Add the dependency to your project with `npm install --save windows-iana` or
`yarn add windows-iana`.

# Usage

The library exports:

- [`findIana()`](#findIana): returns an array of possible IANA time zones (including all their
  aliases) for a given Windows zone.
- [`findWindows()`](#findWindows): returns an array of possible Windows time zones for a given IANA
  zone and all its aliases.
- [`findIanaAliases()`](#findIanaAliases): returns an array of IANA aliases for a given IANA zone
  name, including the one passed as a parameter.
- `IANA_ALIAS_MAP`: the IANA alias map used by the library.
- `WINDOWS_TO_IANA_MAP`: the Windows to IANA map used by the library.

## `findIana()`

```ts
import { findIana } from 'windows-iana';

const result = findIana('Romance Standard Time');
console.log(result); // ['Europe/Paris', 'Europe/Brussels', 'Europe/Copenhagen', 'Europe/Madrid', 'Africa/Ceuta']
```

You may also pass the territory code as a second parameter (have a look at the
[mapping by unicode.org](https://unicode.org/repos/cldr/trunk/common/supplemental/windowsZones.xml)
for more details).

```ts
import { findOneIana } from 'windows-iana';

const result = findIana('Romance Standard Time', 'ES');
console.log(result); // ['Europe/Madrid', 'Africa/Ceuta']
```

## `findWindows()`

```ts
import { findWindows } from 'windows-iana';

const result = findWindows('America/New_York');
console.log(result); // ['Eastern Standard Time']
```

## `findIanaAliases()`

```ts
import { findIanaAliases } from 'windows-iana';

const result = findIanaAliases('Asia/Ho_Chi_Minh');
console.log(result); // ['Asia/Saigon', 'Asia/Ho_Chi_Minh']
```
