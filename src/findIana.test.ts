import { findIana } from './findIana';

it('returns a list of IANA time zones when passed just a Windows time zone name', () => {
  expect(findIana('Romance Standard Time')).toEqual([
    'Europe/Paris',
    'Europe/Brussels',
    'Europe/Copenhagen',
    'Europe/Madrid',
    'Africa/Ceuta',
  ]);
  expect(findIana('Romance Standard Time', 'ES')).toEqual(['Europe/Madrid', 'Africa/Ceuta']);
  expect(findIana('UTC-11')).toEqual([
    'Etc/GMT+11',
    'Pacific/Pago_Pago',
    'Pacific/Samoa',
    'US/Samoa',
    'Pacific/Niue',
    'Pacific/Midway',
  ]);
  expect(findIana('US Mountain Standard Time')).toEqual([
    'America/Phoenix',
    'US/Arizona',
    'America/Hermosillo',
    'Etc/GMT+7',
    'MST',
  ]);
  expect(findIana('Central Standard Time')).toEqual([
    'America/Chicago',
    'US/Central',
    'America/Winnipeg',
    'Canada/Central',
    'America/Rainy_River',
    'America/Rankin_Inlet',
    'America/Resolute',
    'America/Matamoros',
    'America/Indiana/Knox',
    'America/Knox_IN',
    'US/Indiana-Starke',
    'America/Indiana/Tell_City',
    'America/Menominee',
    'America/North_Dakota/Beulah',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'CST6CDT',
  ]);
  expect(findIana('W. Europe Standard Time')).toEqual([
    'Europe/Berlin',
    'Europe/Andorra',
    'Europe/Vienna',
    'Europe/Zurich',
    'Europe/Busingen',
    'Europe/Gibraltar',
    'Europe/Rome',
    'Europe/Vaduz',
    'Europe/Luxembourg',
    'Europe/Monaco',
    'Europe/Malta',
    'Europe/Amsterdam',
    'Europe/Oslo',
    'Europe/Stockholm',
    'Arctic/Longyearbyen',
    'Atlantic/Jan_Mayen',
    'Europe/San_Marino',
    'Europe/Vatican',
  ]);
  expect(findIana('China Standard Time')).toEqual([
    'Asia/Shanghai',
    'Asia/Chongqing',
    'Asia/Chungking',
    'Asia/Harbin',
    'PRC',
    'Asia/Hong_Kong',
    'Hongkong',
    'Asia/Macau',
    'Asia/Macao',
  ]);
});

it('returns a list of IANA time zones when passed a Windows time zone name  territory pair', () => {
  expect(findIana('Romance Standard Time', 'ES')).toEqual(['Europe/Madrid', 'Africa/Ceuta']);
});

it('returns empty array if the Windows time zone cannot be converted', () => {
  expect(findIana('fake time zone')).toEqual([]);
});

it('returns empty array if Windows time zone + territory pair cannot be converted', () => {
  expect(findIana('US Mountain Standard Time', 'fake')).toEqual([]);
});
