import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import pageInfo from "@/sanity/schemas/pageInfo";
import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:noah.team@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col  text-center md:text-left md:flex-row max-w-7xl px- justify-evenly mx-auto items-center">
      <h3 className="absolute top-[95px] uppercase tracking-[10px] text-gray-500 text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-3 mt-[50px]">
        <h4 className="text-[15px] font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#205fb1]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#205fb1] h-4 w-4 animate-pulse" />
            <p className="text-1xl">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#205fb1] h-4 w-4 animate-pulse" />
            <p className="text-1xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#205fb1] h-4 w-4 animate-pulse" />
            <p className="text-1xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-[350px] mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-[140px]"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-[200px]"
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
          <button className="bg-[#205fb1] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
        <div>
          <h3>© 2023 Noah Beshah. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
