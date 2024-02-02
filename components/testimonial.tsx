import type { NextPage } from "next";
import Client from "./client";

const Testimonial: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center py-[140px] px-5 box-border gap-[60px] min-h-[1009px] max-w-full mt-[-56px] text-center text-51xl text-mediumslateblue-300 font-paragraph-p3-regular mq900:gap-[30px] mq900:pb-[59px] mq900:box-border mq1300:pt-[140px] mq1300:pb-[91px] mq1300:box-border">
      <h1 className="m-0 w-[1479px] h-[147px] relative text-inherit leading-[84px] font-bold font-inherit inline-block shrink-0 mq450:text-23xl mq450:leading-[50px] mq900:text-37xl mq900:leading-[67px]">
        Ce que les gents disent de nous
      </h1>
      <div className="w-[1519px] flex flex-row flex-wrap items-center justify-center gap-[32px] min-h-[464px] max-w-full text-left text-5xl text-black mq900:gap-[16px]">
        <Client
          commentPlaceholder={`Facile à utiliser, Symplifia a rendu notre gestion immobilière sans souci !`}
          avater="/avater@2x.png"
          malak="Malak"
          syndicDAppartement90AinDi="Syndic d’ appartement 90 Ain diab Casablanca"
          propBorderBottom="1px solid #212529"
          propColor="#000"
        />
        <Client
          commentPlaceholder="Interface claire, l'appli mobile est super pratique. Symplifia a simplifié notre quotidien"
          avater="/avater-1@2x.png"
          malak="Ahmed"
          syndicDAppartement90AinDi="Syndic d’appartement 130 Hay riyad Rabat"
          propBorderBottom="1px solid #000"
          propColor="#212529"
        />
        <Client
          commentPlaceholder="Avec Symplifia, la sécurité et la simplicité vont de pair dans la gestion immobilière."
          avater="/avater-2@2x.png"
          malak="Amine"
          syndicDAppartement90AinDi="Syndic d’appartement 120 Al amane"
          propBorderBottom="1px solid #000"
          propColor="#212529"
        />
       
     
          
        
      </div>
    </div>
  );
};

export default Testimonial;
