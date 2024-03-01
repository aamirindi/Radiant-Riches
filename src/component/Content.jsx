import pcLogo from "../assets/187db358671328189d3da83955a6ffe9.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import DoneIcon from "@mui/icons-material/Done";

export default function Content() {
  const data = [
    {
      logo: <EmojiEventsOutlinedIcon />,
      logoText: "Best Choice",
      itemNo: "1",
      pc: "Builder 1",
      head: "WixPro 72-Inch Responsive Website Builder-",
      headp:
        "Comprehensive Digital Platform Creation Tool, Streamlined Desig Interface for Professional Websites and Online Stores(Black/Blue)",

      middlep:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.8",
      rate: "Exceptional",
    },
    {
      logo: <DiamondOutlinedIcon />,
      logoText: "Best Value",
      itemNo: "2",
      pc: "Builder",
      head: "SiteCraft 68-Inch Ultimate Web Design Studio-",
      headp:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      middlep:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: "9.5",
      rate: "Excellent",
    },
    {
      itemNo: "3",
      pc: "Builder 1",
      head: "WixPro 72-Inch Responsive Website Builder-",
      headp:
        "Comprehensive Digital Platform Creation Tool, Streamlined Desig Interface for Professional Websites and Online Stores(Black/Blue)",
      middlep:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.8",
      rate: "Exceptional",
    },
    {
      itemNo: "4",
      pc: "CDK",
      head: "CDK Resposive Builder:",
      headp:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      middlep: (
        <ul className="flex flex-col gap-2 p-3 bg-[#fff4ed] rounded-lg">
          <li className="text-zinc-600  flex gap-2 items-center">
            <span className="p-1 text-blue-500 rounded-md bg-white">9.9</span>
            <p>Building Responsive</p>
          </li>
          <li className="text-zinc-600  flex gap-2 items-center">
            <span className="p-1 text-blue-500 rounded-md bg-white">8.9</span>
            <p>Cool</p>
          </li>
          <li className="text-zinc-600  flex gap-2 items-center">
            <span className="p-1 text-blue-500 rounded-md bg-white">8.9</span>
            <p>Docs</p>
          </li>
        </ul>
      ),
      rating: "9.1",
      rate: "Very Good",
    },
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <StarOutlinedIcon
          key={i}
          style={{
            color: "#ffb80f",
            fontSize: "20px",
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      {data.map((d, index) => (
        <div
          key={index}
          className="w-full font-['Inter_Tight'] bg-white rounded-xl relative px-5 my-10 text-zinc-600 ">
          <div className="flex content-container">
            {index < 2 && (
              <p className="absolute flex gap-2 bg-orange-500 text-white left-[-5px] top-[-15px] rounded-r-lg px-5 py-1 ">
                {d.logo}
                {d.logoText}
              </p>
            )}
            <p className="absolute rounded-[50%]  text-xl w-12 h-12 p-2 bg-white top-[10%] left-[-25px] text-center border-2 border-solid">
              {d.itemNo}
            </p>
            <div className="flex flex-col justify-center items-center text-center gap-2 px-10 py-5">
              <img src={pcLogo} alt="" width="100%" />
              <p>{d.pc}</p>
            </div>
            <div className="px-10 pt-5">
              <p>
                <span className="font-semibold">{d.head} </span>
                {d.headp}
              </p>
              <br />
              <p className="font-semibold">Main Highlight</p>
              <br />
              <p className="pl-5">{d.middlep}</p>
              {index === 3 && (
                <div>
                  <br />
                  <p className="font-semibold">why we love it ?</p>
                  <ul className="mt-2">
                    <li className="flex gap-2  items-center">
                      <DoneIcon
                        style={{
                          color: "#0a56a2",
                          backgroundColor: "#ebf5ff",
                          borderRadius: "50%",
                          padding: "2px",
                          fontSize: "18px",
                        }}
                      />
                      <p>Documentation</p>
                    </li>
                    <li className="flex gap-2  items-center">
                      <DoneIcon
                        style={{
                          color: "#0a56a2",
                          backgroundColor: "#ebf5ff",
                          borderRadius: "50%",
                          padding: "2px",
                          fontSize: "18px",
                        }}
                      />
                      <p>Easy Use</p>
                    </li>
                    <li className="flex gap-2  items-center">
                      <DoneIcon
                        style={{
                          color: "#0a56a2",
                          backgroundColor: "#ebf5ff",
                          borderRadius: "50%",
                          padding: "2px",
                          fontSize: "18px",
                        }}
                      />
                      <p>Out of Box</p>
                    </li>
                  </ul>
                </div>
              )}
              <p className="text-blue-500 py-3">
                Show more{" "}
                <KeyboardArrowDownOutlinedIcon style={{ fontSize: "20px" }} />
              </p>
            </div>
            <div className="flex flex-col justify-between items-center content-rating">
              <div className="bg-blue-100 w-[150px] text-blue-900 flex flex-col justify-center items-center py-3 px-5 rounded-b-md relative gap-2 ">
                <InfoOutlinedIcon
                  style={{
                    position: "absolute",
                    top: "3px",
                    right: "20px",
                    color: "gray",
                    fontSize: "12px",
                  }}
                />
                <p className="text-3xl">{d.rating}</p>
                <p className="text-[14px]">{d.rate}</p>
                <div className="flex">{renderStars(5)}</div>
              </div>
              <button className="w-[250px] bg-blue-500 mb-10 px-10 py-2 text-white rounded-lg">
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
