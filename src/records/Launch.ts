export type Launch = {
  number: number;
  missionName: string;
  rocketName: string;
  date: number;
  year: string;
};

export type LaunchInput = {
  flight_number: number;
  launch_year: string;
  mission_name: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  rocket: Rocket;
};

type Rocket = {
  rocket_name: string;
};
