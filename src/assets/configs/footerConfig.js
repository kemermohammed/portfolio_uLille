import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {BsMedium} from "react-icons/bs";
import React from "react";
import { Email, Phone } from "@mui/icons-material";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/kemermohammed",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/kemeriya-abdulkerim/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "mailto:kemmah5833@gmail.com",
            className: "social-icon",
            target: "_blank",
            icon: <Email size={50}/>
        },
         {
            id: "footer-2",
            url: "tel:+33 7 49 97 58 33",
            className: "social-icon",
            target: "_blank",
            icon: <Phone size={50}/>
        }
    ]
}

export default footerConfig
