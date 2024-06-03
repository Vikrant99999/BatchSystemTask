"use client"

import React from 'react'
import { emailIcon, footerData, footerLastText, phoneCallIcon } from '../data'
import ButtonComp from './smallcomp/ButtonComp'
import LogoComp from './LogoComp'
import LinkComp from './smallcomp/LinkComp'
import Heading from './smallcomp/Heading'
import IconComp from './smallcomp/IconComp'
import Text from './smallcomp/Text'
import ListComp from './smallcomp/ListComp'




// val: {
//   id: string;
//   heading: string;
//   linksArray: (linksArrayType | undefined)[];
// }



export type linksArrayType = {
  id: string,
  linkName: string
} | undefined


type FooterListCompType = {
  val: {
    id: string;
    heading: string;
    linksArray: linksArrayType[];
  }
}


const Footer = () => {
  return (

    <section className={`pinkBorderClass border-blue-500 w-full h-auto xl:h-[500px] min-h-[500px] flex flex-col justify-between items-center gap-4 mt-[100px]`} >


      <div className={` w-full h-[80%] flex gap-4 justify-between items-start flex-wrap xl:flex-nowrap`} >
        {/* ------------------------------------------------------------------- */}
        <div className={`grow flex flex-col gap-6 w-[20%] min-w-[220px]`} >

          <LogoComp className={`w-[100px] scale-[1] xl:scale-[1.3] origin-left `} />
          <div className={`flex flex-col xl:flex-row gap-2  items-center`} >

            <IconComp className={` flex w-[20px] fill-iconColor`} >{emailIcon}</IconComp>
            <Text className={`text-lg lg:text-xl !text-btnColor`} >vivek@gmail.com</Text>

          </div>
          <div className={`flex flex-col xl:flex-row gap-2 items-center`} >

            <IconComp className={` flex w-[20px] fill-iconColor`} >{phoneCallIcon}</IconComp>
            <Text className={`text-lg lg:text-xl  !text-btnColor`} >01234567</Text>

          </div>

        </div>

        {/* ------------------------------------------------------------------- */}

        <div className={`grow w-[50%] h-full flex justify-between items-start min-w-[500px]`} >
          {
            footerData?.map((val) => {
              return <FooterListComp key={val.id} val={val} />
            })
          }
          {/* ------------------------------------------------------------------- */}

        </div>
        {/* ------------------------------------------------------------------- */}

        <div className={` grow flex flex-col w-[20%] justify-between h-[60%] min-w-[200px]`} >
        
          <Text className={`text-lg lg:text-2xl xl:text-3xl 2xl:text-3xl font-ClashDisplayMedium !text-btnColor `} >{"news letter"}</Text>

          <LinkComp href="#" className={`text-lg lg:text-2xl`}>{"stay up to date"}</LinkComp>

          <input type="text" placeholder='your email' className={`btnClass w-full h-[80px] text-background self-end text-xl font-ClashDisplayMedium`} />

        </div>

        {/* ------------------------------------------------------------------- */}
        <div className={`grow flex w-[200px]  h-[60%] min-w-[200px]`} >

          <ButtonComp className={`btnClass w-full h-[80px] bg-btnColor text-background self-end text-xl font-ClashDisplayMedium`} >

            Subscribe

          </ButtonComp>

        </div>
        {/* ------------------------------------------------------------------- */}
      </div>

      <div className={` w-[80%] mr-8 h-[0.5px] flex justify-center items-center bg-red-400`} ></div>
      <div className={` w-full h-[20%] flex justify-center items-center`} >{footerLastText}</div>

    </section>
  )
}

export default Footer



export const FooterListComp = ({ val }: FooterListCompType) => {

  return <div className={`flex flex-col gap-4 w-[30%]`} >

    <Text className={`text-lg lg:text-2xl xl:text-3xl 2xl:text-3xl font-ClashDisplayMedium !text-btnColor `} >{val.heading}</Text>
    <ListComp listItem={val.linksArray} />

  </div>
}