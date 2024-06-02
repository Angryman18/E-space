import React from "react";
import SideBar from "../Sidebar/Sidebar";
import SearchBar from "../TopBar/SearchBar";
import TitleText from "../Text/TitleText";
import Recent from "../RecentSection/Recent";
import useCtx from "@/hooks/useContext";
import useCreateProfile from "@/hooks/useCreateProfile";

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {

  const { userCtx } = useCtx();
  const {loading} = useCreateProfile(userCtx.user.profile, userCtx.fetchAndSaveUserInfo)

  if (loading) return <div>CREATING USER PROFILE PLEASE WAIT...</div>
  return (
    <div className='flex'>
      <div className='w-[18%]'>
        <SideBar />
      </div>
      <div className='w-[82%]'>
        <SearchBar />
        <hr className='my-4' />
        <TitleText text='Folders' />
        <Recent />
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
