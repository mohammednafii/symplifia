import type { NextPage } from "next";

const ServiceBlock: NextPage = () => {
  return (
    <div className="self-stretch rounded-xl bg-whitesmoke-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[237px] pb-[69px] pr-[52px] pl-12 box-border relative gap-[20.5px] max-w-full text-center text-7xl text-black font-ubuntu mq450:pt-[154px] mq450:pb-[45px] mq450:pr-[23px] mq450:pl-6 mq450:box-border">
      <div className="w-[455px] h-[448px] relative rounded-xl bg-whitesmoke-100 hidden max-w-full z-[0]" />
      <h2 className="m-0 w-[191.8px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block z-[1] mq450:text-2xl">
        Site sécurisée
      </h2>
      <div className="self-stretch h-[92px] relative text-xl tracking-[-0.02em] inline-block z-[1] mq450:text-base">
        Protégez vos données avec un système avancé et des accès sécurisés,
        assurant une gestion immobilière en toute confiance.
      </div>
      <img
        className="w-[258px] h-[258px] absolute my-0 mx-[!important] top-[-1.5px] right-[98px] object-cover z-[2]"
        loading="eager"
        alt=""
        src="/about_securise.png"
      />
    </div>
  );
};

export default ServiceBlock;
