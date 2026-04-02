import { Service2 } from "@/assets";
import { GoArrowUpRight } from "react-icons/go";
import Stats from "./Stats";
import { AboutImg } from "@/assets";
import Button from "../../components/ui/Button";

function AboutUs() {
  return (
    <section className="flex flex-col justify-center items-center max-w-350 m-auto p-20 ">
      <div className="flex  items-start justify-center max-w-full w-full mb-[40px] gap-x-[100px] gap-y-[25px]">
        {/* <!-- Section Title --> */}
        <div className="flex flex-col gap-4 items-start justify-center w-[45%]">
          {/* BADGE */}
          <div className="inline-flex items-center bg-blue-100 text-[#0078D4] px-4 py-1 rounded-full text-sm">
            ● About Us
          </div>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
            We make your
            <br />
            bussiness stand out
          </h2>
          <button className="flex items-center gap-2 border border-[#0078d4] text-[#0078d4] px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Get Started{" "}
            <i>
              <GoArrowUpRight />
            </i>
          </button>
          
        </div>
        <div className="flex items-start justify-center flex-col w-[45%]">
          <p className="mt-4 text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut vel
            aspernatur asperiores! Voluptatem officia minus aut unde molestias
            doloremque ex, nisi iure doloribus laborum, dignissimos esse saepe
            est harum sit recusandae quis. Commodi itaque id incidunt architecto
            sint voluptate iusto molestiae provident delectus modi explicabo
            laboriosam libero, at animi.
          </p>
        </div>
      </div>

      <div className="flex items-start justify-center max-w-full gap-x-[100px] gap-y-[25px]">
        <div className="w-[50%] h-auto">
          <img
            className="max-w-full w-full h-auto"
            src={AboutImg}
            loading="lazy"
            alt=""
          />
        </div>

        <div className="w-[50%] flex items-start justify-center flex-wrap gap-[80px]">
          <Stats />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
