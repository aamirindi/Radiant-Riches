import pc from "../assets/187db358671328189d3da83955a6ffe9.png";

export default function Deals() {
  const data = [
    {
      img: pc,
      offer1: "20% Off",
      offer2: "Limited time",
    },
    {
      img: pc,
      offer1: "20% Off",
      offer2: "Limited time",
    },
    {
      img: pc,
      offer1: "20% Off",
      offer2: "Limited time",
    },
  ];
  return (
    <div className="">
      <h1 className="text-3xl font-normal">Related deals you might like for</h1>
      <div className="flex gap-3 text-zinc-600 deal-container">
        {data.map((d, index) => (
          <div
            key={index}
            className=" flex flex-col  items-center w-[70%]  bg-white rounded-lg ">
            <img src={d.img} alt="" width="50%" className="p-5" />
            <div className="flex gap-2 my-3">
              <p className="text-[#0a56a2] bg-[#f2f4f7] px-2 py-1 rounded-md">
                {d.offer1}
              </p>
              <p className="text-[#0a56a2] bg-[#f2f4f7] px-2 py-1 rounded-md">
                {d.offer2}
              </p>
            </div>
            <p className="font-semibold text-zinc-600 text-xl">Webbuilder 1</p>
            <div className="w-full px-3 text-[14px]">
              <p className="text-zinc-600">
                Computer Modern clasic with wix support
              </p>
              <br />
              <p>
                $39.96{" "}
                <span className="text-[10px] px-2 text-zinc-500">$49.96</span>{" "}
                <span className="text-red-500 text-[10px]">(20% Off)</span>
              </p>
              <button className="w-full bg-blue-500 text-white py-2 my-5 px-10 rounded-lg">
                View Deal
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between my-10 deal-signup">
        <div>
          <p className="text-3xl text-zinc-600">
            Sign up and get exclusive
            <br /> special deals
          </p>
        </div>
        <div className="flex justify-center ">
          <input
            type="text"
            name=""
            id=""
            className="py-3  px-5 rounded-l-md"
          />
          <button className="bg-blue-500  text-white px-5 rounded-r-md">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
