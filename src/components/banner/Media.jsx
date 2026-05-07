import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNestjs } from "react-icons/si";

const Media = () => {
  return (
    <div className="hidden lg:flex flex-col lg:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Frontend
          </h2>
          <div className="flex gap-4">
            <a className="bannerIcon" href='https://tailwindcss.com/' target='_blank'>
              <SiTailwindcss />
            </a>
            <a className="bannerIcon" href='https://www.javascript.com/' target='_blank'>
              <IoLogoJavascript />
            </a>
            <a className="bannerIcon" href='https://react.dev/' target='_blank'>
              <FaReact />
            </a>
            <a className="bannerIcon" href='https://nextjs.org/' target='_blank'>
              <TbBrandNextjs />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Backend
          </h2>
          <div className="flex gap-4">
            <a className="bannerIcon" href='https://www.nodejs.org/en' target='_blank'>
              <FaNodeJs />
            </a>
            <a className="bannerIcon" href='https://www.expressjs.com/' target='_blank'>
              <SiExpress />
            </a>
            <a className="bannerIcon" href='https://www.mongodb.com/' target='_blank'>
              <SiMongodb />
            </a>
            <a className="bannerIcon" href='https://www.nestjs.com/' target='_blank'>
              <SiNestjs />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Media