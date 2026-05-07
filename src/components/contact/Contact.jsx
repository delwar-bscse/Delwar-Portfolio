import ContactLeft from './ContactLeft';
import Title from '../layouts/Title';
import ContactRight from './ContactRight';

const Contact = () => {

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Get In Touch" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-8">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
}

export default Contact