interface UserDataType {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

interface LocationWithTimezone {
  location: string;
  timezoneName: string;
  timezoneAbbr: string;
  utcOffset: number;
}

export const UserData: UserDataType[] = [
  {
    id: "1",
    email: "testing@gmail",
    password: "1234",
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    id: "2",
    email: "testing@gmail",
    password: "1234",
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    id: "3",
    email: "testing@gmail",
    password: "1234",
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    id: "1",
    email: "testing@gmail",
    password: "1234",
    firstName: "Jane",
    lastName: "Doe",
  },
];

export const locations: LocationWithTimezone[] = [
  {
    location: "Germany",
    timezoneName: "Central European Time",
    timezoneAbbr: "CET",
    utcOffset: 1,
  },
  {
    location: "China",
    timezoneName: "China Standard Time",
    timezoneAbbr: "CST",
    utcOffset: 8,
  },
  {
    location: "Argentina",
    timezoneName: "Argentina Time",
    timezoneAbbr: "ART",
    utcOffset: -3,
  },
  {
    location: "Japan",
    timezoneName: "Japan Standard Time",
    timezoneAbbr: "JST",
    utcOffset: 9,
  },
];
