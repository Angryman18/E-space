import User from "./User";
export default function SideBar() {
  return (
    <div
      className='bg-gray-200 dark:bg-black dark:text-white rounded-md m-2 py-2 px-4'
      style={{ height: "calc(100vh - 100px)" }}
    >
      <User />
    </div>
  );
}
