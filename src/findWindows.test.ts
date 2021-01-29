import { findWindows } from './findWindows';

it('returns the Windows time zone for the passed Iana time zone', () => {
  expect(findWindows('America/New_York')).toEqual(['Eastern Standard Time']);
  expect(findWindows('Pacific/Easter')).toEqual(['Easter Island Standard Time']);
  expect(findWindows('CST6CDT')).toEqual(['Central Standard Time']);
  expect(findWindows('Asia/Omsk')).toEqual(['Omsk Standard Time']);
  expect(findWindows('Asia/Calcutta')).toEqual(['India Standard Time']);
  expect(findWindows('Asia/Kolkata')).toEqual(['India Standard Time']);
});

it('returns empty array if the Iana timezone cannot be converted', () => {
  expect(findWindows('fake time zone')).toEqual([]);
});
