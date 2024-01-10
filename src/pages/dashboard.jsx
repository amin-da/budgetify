import { fetchData } from "@/utils/helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "@/components/intro";

//loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>{userName ? <p>{userName}</p> : <Intro />}</div>;
};

export default Dashboard;
