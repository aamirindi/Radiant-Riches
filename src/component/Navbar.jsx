import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-[#212731] flex justify-center items-center gap-12 navbar">
      <div className="flex justify-center h-full items-center relative navbar-container">
        <input type="text" name="search" className="rounded-lg pl-10 py-1" />
        <SearchIcon style={{ position: "absolute", left: 8, color: "gray" }} />
      </div>
      <div className="text-white flex gap-12 font-['Inter_Tight'] font-light">
        <a href="#">Categories</a>
        <a href="#">Website Builders</a>
        <a href="#">Today's deals</a>
      </div>
    </div>
  );
}
