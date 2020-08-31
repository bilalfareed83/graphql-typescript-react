import gql from "graphql-tag";

export const LanchesDetail = gql`
  query LaunchDetail {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;
