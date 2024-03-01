import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function Footer() {
  return (
    <div className="w-full bg-[#212731] flex justify-evenly text-zinc-400 pt-10 pb-20 flex-wrap gap-3">
      <div className="flex flex-col gap-2">
        <p className="uppercase text-xl text-white">Categories</p>
        <ul className="text-[14px] flex flex-col gap-2">
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <p className="uppercase text-xl text-white">Contact</p>
        <ul className="text-[14px] flex flex-col gap-2">
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Term Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div>
        <p>
          United States <KeyboardArrowDownOutlinedIcon />
        </p>
      </div>
    </div>
  );
}
