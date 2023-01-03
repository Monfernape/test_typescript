import express, { Request, Response, NextFunction, json } from "express";
import { UserData, locations } from "../models/types";
const app = express();
const port = 3000;

interface LocationWithTimezone {
  location: string;
  timezoneName: string;
  timezoneAbbr: string;
  utcOffset: number;
}

const getLocationsWithTimezones = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json(locations);
};

const getUserData = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(UserData);
};

app.get("/timezones", getLocationsWithTimezones);
app.get("/users", getUserData);

app.listen(port, () => {
  console.log(`backend application is running on port ${port}.`);
});
