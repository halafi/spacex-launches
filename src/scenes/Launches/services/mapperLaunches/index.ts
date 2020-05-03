import { Launch, LaunchInput } from "../../../../records/Launch";

export default function mapperLaunches(input: LaunchInput[]): Launch[] {
  return input.map((launch) => ({
    number: launch.flight_number,
    missionName: launch.mission_name,
    rocketName: launch.rocket?.rocket_name,
    date: launch.launch_date_unix * 1000, // number
    year: launch.launch_year,
  }));
}
