export type CountryData = {
  alpha2: string;
  alpha3: string;
  name: string;
  countryCallingCodes: string[];
};

export const countries: CountryData[] = [
  {
    alpha2: "US",
    alpha3: "USA",
    name: "United States",
    countryCallingCodes: ["+1"],
  },
  {
    alpha2: "GB",
    alpha3: "GBR",
    name: "United Kingdom",
    countryCallingCodes: ["+44"],
  },
  { alpha2: "CA", alpha3: "CAN", name: "Canada", countryCallingCodes: ["+1"] },
  {
    alpha2: "AU",
    alpha3: "AUS",
    name: "Australia",
    countryCallingCodes: ["+61"],
  },
  { alpha2: "IN", alpha3: "IND", name: "India", countryCallingCodes: ["+91"] },
  {
    alpha2: "ID",
    alpha3: "IDN",
    name: "Indonesia",
    countryCallingCodes: ["+62"],
  },
  {
    alpha2: "DE",
    alpha3: "DEU",
    name: "Germany",
    countryCallingCodes: ["+49"],
  },
  { alpha2: "FR", alpha3: "FRA", name: "France", countryCallingCodes: ["+33"] },
  { alpha2: "JP", alpha3: "JPN", name: "Japan", countryCallingCodes: ["+81"] },
  {
    alpha2: "KR",
    alpha3: "KOR",
    name: "South Korea",
    countryCallingCodes: ["+82"],
  },
  {
    alpha2: "SG",
    alpha3: "SGP",
    name: "Singapore",
    countryCallingCodes: ["+65"],
  },
  { alpha2: "BR", alpha3: "BRA", name: "Brazil", countryCallingCodes: ["+55"] },
  {
    alpha2: "ZA",
    alpha3: "ZAF",
    name: "South Africa",
    countryCallingCodes: ["+27"],
  },
  { alpha2: "MX", alpha3: "MEX", name: "Mexico", countryCallingCodes: ["+52"] },
  { alpha2: "CN", alpha3: "CHN", name: "China", countryCallingCodes: ["+86"] },
  { alpha2: "RU", alpha3: "RUS", name: "Russia", countryCallingCodes: ["+7"] },
  { alpha2: "ES", alpha3: "ESP", name: "Spain", countryCallingCodes: ["+34"] },
  { alpha2: "IT", alpha3: "ITA", name: "Italy", countryCallingCodes: ["+39"] },
];
