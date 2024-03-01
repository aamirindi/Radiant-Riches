import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Content from "./Content";
import Deals from "./Deals";

export default function Home() {
  return (
    <div className="my-10 w-full flex flex-col justify-center items-center font-['Inter_Tight']">
      <div className="w-[70%]  home-container">
        <div className=" pb-3 border-b-2 border-solid">
          <h1 className="text-4xl tracking-wider font-normal">
            Best Website builders in the US
          </h1>
        </div>
        <div className="flex w-full gap-2 text-[14px] py-3 border-b-2 border-solid text-zinc-700 flex-wrap justify-between">
          <div className="flex gap-2">
            <CheckCircleOutlineIcon
              style={{ color: "gray", fontSize: "20px" }}
            />
            <p>Last Updated - February 22, 2020 </p>
            <InfoOutlinedIcon style={{ color: "gray", fontSize: "20px" }} />
            <p>Advertising Disclosure </p>
          </div>
          <p className="">
            Top Relevant{" "}
            <KeyboardArrowDownOutlinedIcon
              style={{ color: "gray", fontSize: "20px" }}
            />
          </p>
        </div>
        <div className=" py-2 flex gap-5 text-[14px] text-zinc-700 flex-wrap">
          <p className="py-2 px-4 pr-12 bg-white rounded-xl">Tools</p>
          <p className="py-2 px-4 pr-12 bg-white rounded-xl">AWS Builder</p>
          <p className="py-2 px-4 pr-12 bg-white rounded-xl">Start Build</p>
          <p className="py-2 px-4 pr-12 bg-white rounded-xl">Build Supplies</p>
          <p className="py-2 px-4 pr-12 bg-white rounded-xl">Tooling</p>
          <p className="py-2 px-4 pr-12 bg-white rounded-xl">BlueHosting</p>
        </div>
        <div className="w-full text-[14px] py-2 flex items-center text-zinc-700 flex-wrap">
          <p className="pr-2">Home</p>
          <ArrowForwardIosOutlinedIcon
            style={{
              color: "gray",
              fontSize: "14px",
            }}
          />
          <p className="px-2 ">Hosting for all</p>
          <ArrowForwardIosOutlinedIcon
            style={{ color: "gray", fontSize: "14px" }}
          />
          <p className="px-2">Hosting</p>
          <ArrowForwardIosOutlinedIcon
            style={{ color: "gray", fontSize: "14px" }}
          />
          <p className="px-2">Hosting6</p>
          <ArrowForwardIosOutlinedIcon
            style={{ color: "gray", fontSize: "14px" }}
          />
          <p className="px-2">Hosting5</p>
        </div>
        <div className="w-full text-[14px]">
          <Content />
        </div>
        <div className="w-full text-[14px]">
          <Deals />
        </div>
      </div>
    </div>
  );
}
