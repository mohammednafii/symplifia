import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
<section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[241px] box-border min-h-[300px] max-w-full text-left text-45xl text-black font-paragraph-p3-regular mq450:pl-5 mq450:box-border mq900:pl-[60px] mq900:box-border mq1300:pl-[120px] mq1300:box-border">
  <div className="w-[1775px] flex flex-row items-start justify-start gap-[52px] shrink-0 max-w-[106%] mq900:gap-[26px] mq1650:flex-wrap">
    <div className="w-[719px] flex flex-col items-start justify-start pt-[75px] px-0 pb-0 box-border min-w-[719px] max-w-full mq900:pt-[49px] mq900:box-border mq1300:min-w-full mq1650:flex-1">
      <div className="self-stretch flex flex-row items-start justify-start gap-[60px] mq900:gap-[30px]">
        <div className="mt-[30px]  h-[270px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block mq450:text-19xl mq900:text-32xl">
          <span>{`Gérez votre syndic en toute simplicité avec `}</span><br />
          <span>Symplifia</span>
          <span>.</span>
          <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[30px] [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)] pr-5">
       <p className="pt-5 pb-8"> Simplifiez votre quotidien immobilier</p>
      </div>
      <button className="cursor-pointer [border:none] py-5 pr-4 pl-5 bg-mediumslateblue-300 rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-royalblue-100">
        <div className="relative text-lg tracking-[-0.02em] leading-[23px] font-medium font-paragraph-p3-regular text-whitesmoke-200 text-left">
          Savoir Plus
        </div>
      </button>
        </div>
        <div className="h-[800px] w-[1500px]">
        <img
          className="h-[505px] relative max-w-full overflow-hidden  min-w-[800px] "
          loading="eager"
          alt=""
          src="/pc_and_phone.png"
        />
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Hero;
