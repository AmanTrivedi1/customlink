import {Page} from "@/models/Page";
import {User} from "@/models/User";
import {Event} from "@/models/Event";
import {
  faDiscord,
  faFacebook,
  faGithub, faInstagram, faTelegram,
  faLinkedinIn,
  faSnapchat,
  faQuora,
  faTwitter,
  faPinterest,
  faReddit,
  faStackOverflow,
  faSignalMessenger,
  faWhatsapp,
  faFlickr,
  faThreads,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLink, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import mongoose from "mongoose";
import {btoa} from "next/dist/compiled/@edge-runtime/primitives";
import Image from "next/image";
import Link from "next/link";

export const buttonsIcons = {
  email: faEnvelope,
  linkedin:faLinkedinIn,
  snapchat:faSnapchat,
  quora:faQuora,
  twitter:faTwitter,
  pintrist:faPinterest,
  redit:faReddit,
  stackoverflow:faStackOverflow,
  signal:faSignalMessenger,
  flicker:faFlickr,
  threads:faThreads,
  mobile: faPhone,
  instagram: faInstagram,
  facebook: faFacebook,
  discord: faDiscord,
  youtube: faYoutube,
  whatsapp: faWhatsapp,
  github: faGithub,
  telegram: faTelegram,
};

function buttonLink(key, value) {
  if (key === 'mobile') {
    return 'tel:'+value;
  }
  if (key === 'email') {
    return 'mailto:'+value;
  }
  return value;
}

export default async function UserPage({params}) {
  const uri = params.uri;
  mongoose.connect(process.env.MONGO_URI);
  const page = await Page.findOne({uri});
  const user = await User.findOne({email:page?.owner});
  await Event.create({uri:uri, page:uri, type:'view'});
  return (
    <div className="bg-normal-dark text-white  ">
    <div
      className="md:h-80 h-60 bg-gray-400 bg-cover bg-center"
      style={
        page.bgType === 'color'
          ? {backgroundColor:page.bgColor}
          : {backgroundImage:`url(${page.bgImage})`}
      }
    >
    </div>
    <div className=" w-36 h-36 mx-auto relative -top-16 -mb-12">
      <Image
        className="rounded-full w-full h-full object-cover"
        src={user.image}
        alt="avatar"
        width={256} height={256}
      />
    </div>
    <h2 className="text-2xl text-center mb-1">{page.displayName}</h2>
    <h3 className="text-md flex gap-2 justify-center items-center text-white/70">
      <FontAwesomeIcon className="h-4" icon={faLocationDot} />
      <span>
        {page.location}
      </span>
    </h3>
    <div className="md:max-w-2xl max-w-xs mx-auto p-2 text-gray-300 text-center my-2">
      <h1 className="text-start mb-3 text-white font-semibold text-2xl">About me</h1>
      <p className="text-start">{page.bio}</p>
    </div>
    <div className="flex gap-2 flex-wrap m-auto md:max-w-2xl items-center max-w-xs  justify-center mt-4 p-4">
      {Object.keys(page.buttons).map(buttonKey => (
        <a key={buttonKey} href={buttonLink(buttonKey, page.buttons[buttonKey])}
              className="rounded-full bg-white backdrop-blur-md backdrop-brightness-200 bg-white/10  h-10 w-10 p-2 flex items-center justify-center">
          <FontAwesomeIcon className="w-5 h-5" icon={buttonsIcons[buttonKey]} />
        </a>
      ))}
    </div>
    <div className="max-w-2xl mx-auto p-2 grid md:grid-cols-2 gap-6">
      {page.links.map(link => (
        <Link
          key={link.url}
          target="_blank"
          ping={process.env.URL+'api/click?url='+ btoa(link.url)+'&page='+page.uri}
          className="bg-bg-dark backdrop-blur-md  rounded-lg  block flex"
          href={link.url}>
          <div className=" ">
            <div className="w-16 h-16  backdrop-blur-md backdrop-brightness-200 bg-white/10  relative flex items-center justify-center ">
              {link.icon && (
                <Image
                  className="w-full h-full  object-cover"
                  src={link.icon}
                  alt={'icon'} width={64} height={64} />
              )}
              {!link.icon && (
                <FontAwesomeIcon icon={faLink} className="w-8 h-8" />
              )}
            </div>
          </div>
          <div className="flex items-center rounded-l-lg  ml-4 justify-center max-w-32 shrink grow-0 overflow-hidden">
            <div>
              <h3 className="line-clamp-1">{link.title}</h3>
              <p className="text-white/50 h-6  line-clamp-1">{link.subtitle}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <div className="flex items-center ">
      <div className="ml-2 text-xs mb-2">
       Make your own<Link className="ml-2 text-blue-700 opacity-100" href="https://github.com/AmanTrivedi1">Linkit</Link>
      </div>
      
    </div>
  
  </div>
);
}