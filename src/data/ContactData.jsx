import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

export const contactLinks = [
  {
    display: "Email",
    content: "toronto@thecovenantnation.ca",
    path: "/",
    icon: FaEnvelope,
  },

  {
    display: "Phone No.",
    content: "+44 (0) 123-456-78901",
    path: "/",
    icon: MdOutlinePhoneInTalk,
  },

  {
    display: "Service Hours",
    content: `Sunday Service - 8 AM \n\n Weekly Prayers: Tuesday and Friday - (08:00 PM) via ZOOM`,
    path: "/",
    icon: IoTimeSharp,
  },

  {
    display: "Address",
    content: "1464 Leda Ave, Mississauga, ON L5G 4B7, Canada",
    path: "/",
    icon: FaMapMarkerAlt,
  },
];
