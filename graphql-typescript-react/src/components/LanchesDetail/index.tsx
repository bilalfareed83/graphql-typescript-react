import React, { Props } from "react";
import { useLaunchDetailQuery } from "../../generated/graphql";
import { MissionLaunch } from "./MissionLaunch";

const MissionContainer = () => {
  const { data, loading, error } = useLaunchDetailQuery();
  if (loading) return <p>loading...</p>;

  if (error || !data) return console.log(error);

  console.log(data);
  return <MissionLaunch data={data} />;
};

export default MissionContainer;
