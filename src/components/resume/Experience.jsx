import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className='w-full'>
        <div className="py-6 lgl:pt-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">February, 2025 - Present</p>
          <h2 className="text-2xl md:text-4xl font-bold">Jr. Full Stack Developer</h2>
        </div>
        <div className="w-full mt-6 lgl:mt-5 h-auto">
          I’m a Junior Full Stack Developer at <a href="https://www.sparktech.agency" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-titleFont">Sparktech Agency</a> with hands-on experience in responsive web development and RESTful API development for both web and mobile applications. I’m passionate about building scalable, user-friendly, and high-performance applications while continuously improving my technical skills. I enjoy contributing to impactful projects that deliver real value and seamless user experiences.

        </div>
      </div>
    </motion.div>
  );
}

export default Experience