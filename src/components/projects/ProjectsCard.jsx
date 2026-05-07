import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, type, imgSrc, webLink, githubLInk }) => {

  return (
    <div className="w-full h-auto p-4 xl:p-8 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-800 transition-colors duration-500">
      <div className="w-full h-[160px] overflow-hidden rounded-lg">
        <img
          className="w-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          src={imgSrc}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base uppercase text-designColor font-normal">
                {title}
              </h3>
              <p className="text-sm text-gray-400 capitalize">{type}</p>
            </div>
            <div className="flex gap-2">
              <a href={githubLInk} target='_blank' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </a>
              <a href={webLink} target='_blank' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard