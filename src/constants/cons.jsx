// imported for items array for our success numbers section
import icon_1 from '../assets/home-imgs/our-success-imgs/icon-1.png'
import icon_2 from '../assets/home-imgs/our-success-imgs/icon-2.png'
import icon_3 from '../assets/home-imgs/our-success-imgs/icon-3.png'
import icon_4 from '../assets/home-imgs/our-success-imgs/icon-4.png'
// imorted for partners logos section
import it_partner_img from '../assets/home-imgs/it-partner-img.png'
import logo_1 from '../assets/home-imgs/logo-1.png'
import logo_2 from '../assets/home-imgs/logo-2.png'
import logo_3 from '../assets/home-imgs/logo-3.png'
import logo_4 from '../assets/home-imgs/logo-4.png'

// imorted for form section
import { IoCall } from "react-icons/io5";//phone
import { MdOutlineMailOutline } from "react-icons/md";//email
import { FaLocationDot } from "react-icons/fa6";//location
import { FaFacebookF } from "react-icons/fa";//facebook
import { FaInstagram } from "react-icons/fa";//insta
import { FaTwitter } from "react-icons/fa6";//twitter

// imported for footer array
import { FaYoutube } from "react-icons/fa";//youtube
import { FaXTwitter } from "react-icons/fa6";//twitter

export const darkBlue = '#1b1076'

// links for navbar
export const links = [
    {
        text: "Home",
        path: "heroSection"
    }, {
        text: "Service",
        dropdown: {
            status: true,
            dataa: [
                {
                    miniLink: "link 1"
                }, {
                    miniLink: "link 2"
                }
            ]
        },
        path: "services"
    }, {
        text: "Goverments",
        dropdown: {
            status: true,
            dataa: [
                {
                    miniLink: "link 1"
                }, {
                    miniLink: "link 2"
                }, {
                    miniLink: "link 3"
                }
            ]
        },
        path: "seccessNumbers"
    }, {
        text: "Case stadies",
        dropdown: {
            status: true,
            dataa: [
                {
                    miniLink: "link 1"
                }, {
                    miniLink: "link 2"
                }, {
                    miniLink: "link 3"
                }, {
                    miniLink: "link 4"
                }
            ]
        },
        path: "itPartners"
    }, {
        text: "About 360s",
        dropdown: {
            status: true,
            dataa: [
                {
                    miniLink: "link 1"
                }
            ]
        },
        path: "advanceSolutions"
    }
]

// items array for our success numbers

export const items = [
    {
        icon: icon_1,
        numbers: "$1000,000,000",
        text: `5 Year Financial Budget Models Developed`
    }, {
        icon: icon_2,
        numbers: "2",
        text: `IPO Listings NYSE & NASDAQ!`
    }, {
        icon: icon_3,
        numbers: "$600,000,000",
        text: `Digital Transformation Projects Delivered In 1% of Budget`
    }, {
        icon: icon_4,
        numbers: "7+",
        text: `U.S. Patents`
    }
]

// image for it partner

export const it_partner__img = it_partner_img

// items_array for service section

export const items_array = [
    {
        icon: "",
        text: "DIGITAL TRANSFORMATION"
    }, {
        icon: "",
        text: "STRATEGIC PLANNING"
    }, {
        icon: "",
        text: "TECH FINANCIAL MODELING"
    }, {
        icon: "",
        text: "VENDOR MANAGEMENT"
    }, {
        icon: "",
        text: "TRANSFORMATION ACCELERATOR"
    }, {
        icon: "",
        text: "GOVERNMENT SERVICES"
    }
]

// partners logos array

export const logos = [
    {
        logo: logo_1
    }, {
        logo: logo_2
    }, {
        logo: logo_3
    }, {
        logo: logo_4
    }
]


// form information array
export const form_info = [
    {
        icon: <MdOutlineMailOutline className='text-[23px] text-[#ececec] ' />,
        text: "info@a360s.com"
    }, {
        icon: <IoCall className='text-[23px] text-[#ececec] ' />,
        text: "+1 (703) 644-8000 "
    }, {
        icon: <FaLocationDot className='text-[23px] text-[#ececec] ' />,
        text: "46164 Westlake Dr. #650422 Sterling, VA 20165-9998"
    }
]

// forn icons array
export const icons_array = [
    {
        icon: <FaFacebookF className='text-[18px] laptop:text-[25px] text-[#ececec] ' />
    }, {
        icon: <FaInstagram className='text-[18px] laptop:text-[25px] text-primry_color ' />
    }, {
        icon: <FaTwitter className='text-[18px] laptop:text-[25px] text-[#ececec] ' />
    }
]

// footer array
const clas = "h-6 w-6 rounded-full flex justify-center items-center bg-primry_color "
export const footer_array = [
    {
        title: "Quick Links",
        text_array: [
            {
                text: "Home",
            }, {
                text: "About Us",
            }, {
                text: "Services",
            }, {
                text: "Government",
            }, {
                text: "Case Studies",
            }
        ]
    }, {
        title: "Support",
        text_array: [
            {
                text: "Terms & Conditions",
            }, {
                text: "FAQ's",
            }, {
                text: "Privacy & Policy",
            }, {
                text: "Contact Us",
            }
        ]
    }, {
        title: "Get In Touch",
        text_array: [
            {
                icon: <FaLocationDot className='text-[20px] text-primry_color ' />,//mail
                text: "46164 Westlake Dr. #650422 Sterling, VA 20165-9998",
            }, {
                icon: <MdOutlineMailOutline className='text-[20px] text-primry_color ' />,
                text: "info@a360s.com",
            }, {
                icon: <IoCall className='text-[20px] text-primry_color ' />,
                text: "+1 (703) 644-8000 ",
            }
        ],
        icons_array: [
            { icon: <div className={clas}><FaFacebookF className='text-[13px] text-white ' /></div> },
            { icon: <div className={clas}><FaYoutube className='text-[13px] text-white ' /></div> },
            { icon: <div className={clas}><FaXTwitter className='text-[13px] text-white ' /></div> },
        ]
    }
]
