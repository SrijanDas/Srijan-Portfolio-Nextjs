import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:srijandas18.sd@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.
    ${formData.message} (${formData.email})`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-3xl mt-32 font-semibold text-center">
          I have got just what you need. <br className="md:hidden" />
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>
        <div className="flex items-center justify-center space-x-5">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p>+91 9836262393</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p>srijandas18.sd@gmail.com</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p>Kolkata, West Bengal, India</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-4 px-10 rounded-md text-black
          font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
