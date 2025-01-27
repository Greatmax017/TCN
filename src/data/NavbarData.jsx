import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";
import { FaSpotify, FaYoutube } from "react-icons/fa6";

export const contactDetails = [
    {
        icon: FaMapMarkerAlt,
        content: "Shenley Road, Opposite Sainsbury's, Hemel-Hempstead, Hertfordshire HP2 7AS, United Kingdom ",
    },

    {
        icon: FaEnvelope,
        content: "support@mightyskyconcepts.co.uk  ",
    }
]


export const socialsLinks = [

    {
        display: "Facebook",
        icon: FaFacebook,
        link: "https://facebook.com/Torontochurch",
    },

    {
        display: "Instagram",
        icon: FaInstagram,
        link: "https://www.instagram.com/tcntoronto",
    },


    {
        display: "Youtube",
        icon: FaYoutube,
        link: "https://www.youtube.com/@tcntoronto",
    },

    {
        display: "Spotify",
        icon: FaSpotify,
        link: "https://open.spotify.com/show/6hu1FkK4mqIawZHtwSAstV",
    },

    {
        display: "Apple Podcasts",
        icon: SiApplepodcasts,
        link: "https://podcasts.apple.com/ng/podcast/insights-by-the-covenant-nation/id1684351542",
    },

]



export const NavbarData = [
    {
        id: "",
        display: "Home",
        path: "/",
    },

    {
        id: "about-us",
        display: "About",
        path: "/about-us",
    },

    {
        id: "sermons",
        display: "Sermons",
        path: "/sermons",
    },

    {
        id: "events",
        display: "Events",
        path: "/events",
    },

    {
        id: "gallery",
        display: "Gallery",
        path: "/gallery",
    },



    {
        id: "contact-us",
        display: "Contact Us",
        path: "/contact-us",
    },

]