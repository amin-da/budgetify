import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "@/utils/helpers";
import wave from "@/assets/wave.svg";
import Navbar from "@/components/navbar";

//loader
export const mainLayoutLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const MainLayout = () => {
  const { userName } = useLoaderData();

  return (
    <div className="flex flex-col justify-between items-center h-full overflow-hidden">
      <Navbar userName={userName} />
      <main className="w-[1280px] mx-auto">
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default MainLayout;
