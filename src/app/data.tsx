import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BsPlayCircle } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiStarFour } from "react-icons/pi";
import { BsApple } from "react-icons/bs";

import { FaHome } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { IoPricetag } from "react-icons/io5";
import { MdFeaturedPlayList } from "react-icons/md";



import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import BudgetingIntervalsIcon1 from "./components/svgcomp/BudgetingIntervalsIcon1";
import BudgetingIntervalsIcon2 from "./components/svgcomp/BudgetingIntervalsIcon2";

export const emailIcon = <MdEmail />
export const phoneCallIcon = <IoCall />
export const watchVideoIcon = <BsPlayCircle />
export const rightArrowIcon = <BsArrowRight />
export const notificationIcon = <IoNotificationsOutline />
export const fourStarIcon = <PiStarFour />
export const lightModeIcon = <MdOutlineLightMode />
export const darkModeIcon = <MdOutlineDarkMode />
export const appleIcon = <BsApple />

export const homeIcon = <FaHome />
export const aboutIcon = <BsPersonFill />
export const pricingIcon = <IoPricetag />
export const featuresIcon = <MdFeaturedPlayList />

const BudgetingIntervalsIconFirst = <BudgetingIntervalsIcon1 />
const BudgetingIntervalsIconSec = <BudgetingIntervalsIcon2 />

export const navData = [
    {
        id: "01",
        navLinkName: "home",
        navLinkHref: "#home",
        menuIcon: homeIcon
    },
    {
        id: "02",
        navLinkName: "about",
        navLinkHref: "#about",
        menuIcon: aboutIcon
    },
    {
        id: "03",
        navLinkName: "pricing",
        navLinkHref: "#pricing",
        menuIcon: pricingIcon
    },
    {
        id: "04",
        navLinkName: "features",
        navLinkHref: "#features",
        menuIcon: featuresIcon
    }
]



export const heroSecData =
{
    id: "01",
    heading: "make the best financial decisions",
    para: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    btnLink: {
        firstBtn: "get started",
        secBtn: "watch video"
    }
}

export const secSectionData = {
    id: "01",
    heading: "uifry premium",
    para1: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    para2: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    para13: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    btnLink: null
}



export const BudgeIntervalsCompData = [{
    id: "01",
    heading: "Budgeting Intervals",
    icon: fourStarIcon,
    para: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
},
{
    id: "02",
    heading: "Budgeting Intervals",
    icon: BudgetingIntervalsIconFirst,
    para: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
},
{
    id: "03",
    heading: "Budgeting Intervals",
    icon: BudgetingIntervalsIconSec,
    para: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
}]



export const thirdSectionData = {
    id: "01",
    heading: "why choose Uifry?",
    para1: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
    para2: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
    btnLink: null
}

export const fourthSectionData = {
    id: "01",
    heading: "what our users say about us?",
    heading2: "the best financial accounting app ever!",
    para: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
    para2: "nick jonas",
    btnLink: null
}

export const fifthSectionData = {
    id: "01",
    heading: "Frequently asked questions",
    heading2: "the best financial accounting app ever!",
    para: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    para2: null,
    btnLink: null
}

export const sixthSectionData = {
    id: "01",
    heading: "what our users say about us?",
    heading2: "the best financial accounting app ever!",
    para: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
    para2: "nick jonas",
    btnLink: {
        firstBtn: "",
        secBtn: ""
    }
}



export const seventhSectionData = {
    id: "01",
    heading: "ready to get started?",
    para: "resus habitant leo egestas mauris diam eget morbi tempus vulputate",

}




export const footerData = [
    {
        id: "01",
        heading: "links",
        linksArray: [
            {
                id: "01",
                linkName: "home"
            }, {
                id: "02",
                linkName: "about us"
            }, {
                id: "03",
                linkName: "bookings"
            }, {
                id: "04",
                linkName: "blog"
            },
        ]
    },
    {
        id: "02",
        heading: "legal",
        linksArray: [
            {
                id: "01",
                linkName: "terms of use"
            }, {
                id: "03",
                linkName: "privacy polic"
            }, {
                id: "04",
                linkName: "cookie policy"
            },
        ]

    },
    {
        id: "03",
        heading: "product",
        linksArray: [
            {
                id: "01",
                linkName: "take tour"
            }, , {
                id: "03",
                linkName: "live chat"
            }, {
                id: "04",
                linkName: "reveiws"
            },
        ]

    },
]


export const footerLastText = "Copyright 2022 uifry.com all rights reserved"





export const budgetingIntervalsIcon1 = ""
export const budgetingIntervalsIcon2 = ""



export const logoImg = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FFrame.png?alt=media&token=673495bd-a102-46d6-aa94-3f401d339c6b"

export const heroRightImg1 = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2F1iPhone13ProFront.png?alt=media&token=3c63d787-7c47-4537-bdb0-415f329af1f8"

export const heroRightImg2 = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FiPhone13ProFront.png?alt=media&token=fe25a64f-8f77-46f5-91e2-f8b26828ad34"

export const heroRing = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FEllipse.png?alt=media&token=25fb6f0f-8782-4bb4-a355-99b441680bcd"
export const heroRingGroup = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FringGroup.png?alt=media&token=c470b04c-f116-4f5e-b69c-56aa8cb15dc5"

export const heroLeftImg = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FGroup35924.png?alt=media&token=900efdba-92e8-4fd7-81ed-880f85a6369f"

export const creditCardImg = 'https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FGroup.png?alt=media&token=622a3d25-ac54-4acf-97b0-fadd7a4e9e24'

export const thirdSecPrice = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FOnHold.png?alt=media&token=bb6a05d5-054b-475b-a5ba-f744628376d8"

export const starImg = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FStar.png?alt=media&token=f2a395a7-aada-4cb7-b0ca-2b77ccf7c97b"

export const fifthSecLeftImg = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FGroup331.png?alt=media&token=70a0c749-ee97-42ae-8622-14d7ad48c80a"

export const fifthSecUserImg = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FGroup35917.png?alt=media&token=6f7de808-5f86-416a-851d-85f7efa193a2"

export const seventhSecUserImg = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FFrame%20(1).png?alt=media&token=2c8a0738-d554-4ec3-b28d-7fdd131c8458"





// ----------------------------------------------------------------------



export const softLightBackImg = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FforBack%2FsoftLightBack.png?alt=media&token=8332c707-9a62-4eb8-badd-21226ef30162";

export const backWithImg = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FforBack%2FbackWithImg.png?alt=media&token=58695d9b-c018-4e62-ab8d-0607a38f595f";

export const backWithOutImg = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FforBack%2FbackWithOutImg.png?alt=media&token=f09be5da-44eb-4f9e-a740-82b49baa5451";

export const forHeroLeftBlur = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FforBack%2FforHeroLeftBlur.png?alt=media&token=6cdacf8f-d6a4-44e5-911e-4fa0dc05eba8";

export const forHeroRightBlur = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FforBack%2FforHeroRightBlur.png?alt=media&token=6bcc8764-c75c-4a8e-868c-e0c1b4e4e902";

export const forSecLeftBlur = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FforBack%2FforSecLeftBlur.png?alt=media&token=2e82cc56-fff0-4803-99d9-ae4aa20e7b3f";

export const forSecoRightBlur = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FforBack%2FforSecoRightBlur.png?alt=media&token=4c4cd7cb-a4b2-4dfe-a7be-4be90e93e84a";

export const forThirdRightBlur = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FforBack%2FforThirdRightBlur.png?alt=media&token=830efe43-f3e4-45e3-8e1b-4ee04969d723";

export const forForthLeftBlur = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FforBack%2FforForthLeftBlur.png?alt=media&token=704e8280-1924-4e52-ba59-9733e9704fea";


// ----------------------------------------------------------------------


export const secSecFullImgWithRing = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FimagesWithRing%2FGroup%2035934.png?alt=media&token=58fc8961-01e2-46dd-9961-c052a9da8e4b";


export const thirdSecFullImgWithRing = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FimagesWithRing%2FGroup%2035936.png?alt=media&token=7a1979fc-326c-4015-ae90-0be8b711faf6";


export const forthSecFullImgWithRing = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FimagesWithRing%2FGroup%201000002335.png?alt=media&token=756fc235-111d-4fd6-8c08-ad26d74ae27a";


export const fifthSecFullImgWithRing = "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/010624_BatchSystem_SanFranciscoUS%2FimagesWithRing%2FGroup%201000002334.png?alt=media&token=56539b73-d882-4084-8e35-fdc6b0729b1f";

// ----------------------------------------------------------------------












/*

Subscribe

help@frybix.com

+1 234 456 678 89

faq
testimonial
advatnages
features

budgeting intervals

*/