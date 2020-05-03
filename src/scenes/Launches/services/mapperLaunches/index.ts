import { Launch, LaunchInput } from "../../../../records/Launch";

export default function mapperLaunches(input: LaunchInput[]): Launch[] {
  return input.map((launch) => ({
    number: launch.flight_number,
    missionName: launch.mission_name,
    rocketName: launch.rocket?.rocket_name,
    launchDate: launch.launch_date_unix, // number
  }));
}
