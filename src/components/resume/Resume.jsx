import  {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const handleSelection = (section) => {
    if (section === 'education') {
      setEducationData(true);
      setSkillData(false);
      setExperienceData(false);
    } else if (section === 'skills') {
      setEducationData(false);
      setSkillData(true);
      setExperienceData(false);
    } else if (section === 'experience') {
      setEducationData(false);
      setSkillData(false);
      setExperienceData(true);
    }
  }
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <li
            onClick={() => handleSelection('education')}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => handleSelection('skills')}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Skills
          </li>
          <li
            onClick={() => handleSelection('experience')}
            className={`${
              experienceData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
}

export default Resume