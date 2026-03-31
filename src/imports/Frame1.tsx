import imgCasset31 from "figma:asset/83060ca2ee4d5a079edf8a9d57a3ad60efff63d8.png";
import imgCasset11 from "figma:asset/7a015c877b6f8546033e8b9314c8427a6a15fc8c.png";
import imgCasset21 from "figma:asset/7f8d7ed936523d863d863f945090b1e46b9c6989.png";
import imgCasset41 from "figma:asset/2c578c4c7df81b17a1b3b0ba45510faaea7f9f6f.png";

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[834px] not-italic text-[50px] text-black top-[450px] tracking-[18.5px] whitespace-nowrap">CASSET</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[960.5px] not-italic text-[25px] text-black text-center top-[584px] whitespace-nowrap">SONGS</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[960px] not-italic text-[25px] text-black text-center top-[648px] whitespace-nowrap">DJ SETS</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[960px] not-italic text-[25px] text-black text-center top-[712px] whitespace-nowrap">SHOWS</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[960.5px] not-italic text-[25px] text-black text-center top-[774px] whitespace-nowrap">CONTACT</p>
      <div className="absolute h-[427px] left-[1501px] top-[172px] w-[324px]" data-name="Casset3 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCasset31} />
      </div>
      <div className="absolute h-[563px] left-[146px] top-[65px] w-[447px]" data-name="Casset1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCasset11} />
      </div>
      <div className="absolute h-[428px] left-[422px] top-[727px] w-[342px]" data-name="Casset2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCasset21} />
      </div>
      <div className="absolute h-[818px] left-[1216px] top-[727px] w-[672px]" data-name="Casset4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCasset41} />
      </div>
    </div>
  );
}