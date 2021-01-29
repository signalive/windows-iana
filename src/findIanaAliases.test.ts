import { findIanaAliases } from './findIanaAliases';

it('returns a list of IANA aliases when passed an IANA time zone name', () => {
  expect(findIanaAliases('Pacific/Truk')).toEqual(['Pacific/Truk', 'Pacific/Chuuk', 'Pacific/Yap']);
  expect(findIanaAliases('America/New_York')).toEqual(['America/New_York', 'US/Eastern']);
  expect(findIanaAliases('Asia/Tashkent')).toEqual(['Asia/Tashkent']);
  expect(findIanaAliases('Asia/Saigon')).toEqual(['Asia/Saigon', 'Asia/Ho_Chi_Minh']);
  expect(findIanaAliases('Asia/Ho_Chi_Minh')).toEqual(['Asia/Saigon', 'Asia/Ho_Chi_Minh']);
});

it('returns array with just one item if passed an IANA time zone without aliases', () => {
  expect(findIanaAliases('Europe/Paris')).toEqual(['Europe/Paris']);
});

it('returns empty array if an invalid IANA time zone name is passed', () => {
  expect(findIanaAliases('fake time zone')).toEqual([]);
});
