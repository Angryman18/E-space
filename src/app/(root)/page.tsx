import TitleText from "@/components/Text/TitleText";
import Table from "@/components/Table/Table";
import dynamic from "next/dynamic";

const DynamicViewSwitch = dynamic(() => import("@/components/Switch/ViewSwitch"), {
  ssr: false,
});

const DynamicToggleButton = dynamic(() => import("@/components/DarkMode/Toggle"), { ssr: false });

export default function Home() {
  return (
    <main className='dark:bg-black dark:text-white'>
      <DynamicToggleButton />
      {/* <hr className='my-4' /> */}
      <div className='flex justify-between items-center pr-4'>
        <TitleText text='All Files' />
        <DynamicViewSwitch />
      </div>
      <Table />
    </main>
  );
}
