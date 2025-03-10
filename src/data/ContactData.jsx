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
    content: (
      <>
        Sunday Service - 10am ET
        <br />
        Weekly Prayers: Tuesday and Friday - (8pm ET)
        <br />
        via{" "}
        <a 
          href="https://bit.ly/TCNTORONTOPRAYS" target="_blank" rel="noopener noreferrer"
          style={{
            color: "blue",
            textDecoration: "underline",
          }}
        >
          ZOOM
        </a>
      </>
    ),
    path: "/",
    icon: IoTimeSharp,
  },
  {
    display: "Address",
    content: "1465 Leda Avenue Mississauga, ON L5G 4B8",
    path: "/",
    icon: FaMapMarkerAlt,
  },
];
