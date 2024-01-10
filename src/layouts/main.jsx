import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "@/utils/helpers";
import wave from "@/assets/wave.svg";
import Navbar from "@/components/navbar";

//loader
export const mainLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="flex flex-col justify-between mx-auto h-full">
      <Navbar userName={userName} />
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
