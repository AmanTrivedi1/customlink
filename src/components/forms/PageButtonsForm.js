'use client';

import {savePageButtons} from "@/actions/pageActions";
import SubmitButton from "@/components/buttons/SubmitButton";
import { ReactSortable } from "react-sortablejs";
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
import {faEnvelope, faGripLines, faMobile, faPlus, faSave, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import { Toaster, toast } from 'sonner';

export const allButtons = [
  {key: 'email', 'label': 'e-mail', icon: faEnvelope, placeholder: 'amantrivedi598@gmail.com'},
  {key: 'signal', 'label': 'signal', icon: faSignalMessenger, placeholder: '@profileurl'},
  {key: 'flicker', 'label': 'flicker', icon: faFlickr, placeholder: '@profileurl'},
  {key: 'threads', 'label': 'threads', icon: faThreads, placeholder: '@profileurl'},
  {key: 'pintrist', 'label': 'pintrist', icon: faPinterest, placeholder: '@profileurl'},
  {key: 'quora', 'label': 'quora', icon: faQuora, placeholder: '@profileurl'},
  {key: 'redit', 'label': 'redit', icon: faReddit, placeholder: '@profileurl'},
  {key: 'twitter', 'label': 'twitter', icon: faTwitter, placeholder: '@profileurl'},
  {key: 'linkedin', 'label': 'linkedin', icon: faLinkedinIn, placeholder: '@profileurl'},
  {key: 'stackoverflow', 'label': 'stackoverflow', icon: faStackOverflow, placeholder: '@profileurl'},
  {key: 'snapchat', 'label': 'snapchat', icon: faSnapchat, placeholder: '@profileurl'},
  {key: 'mobile', 'label': 'mobile', icon: faMobile, placeholder: '6392****68'},
  {key: 'instagram', 'label': 'instagram', icon: faInstagram, placeholder: '@profileurl'},
  {key: 'facebook', 'label': 'facebook', icon: faFacebook},
  {key: 'discord', 'label': 'discord', icon: faDiscord},
  {key: 'youtube', 'label': 'youtube', icon: faYoutube},
  {key: 'whatsapp', 'label': 'whatsapp', icon: faWhatsapp},
  {key: 'github', 'label': 'github', icon: faGithub , placeholder:"https://github.com/AmanTrivedi1"},
  {key: 'telegram', 'label': 'telegram', icon: faTelegram},
];

function upperFirst(str) {
  return str.slice(0,1).toUpperCase() + str.slice(1);
}

export default function PageButtonsForm({user,page}) {

  const pageSavedButtonsKeys = Object.keys(page.buttons || {});
  const pageSavedButtonsInfo = pageSavedButtonsKeys
    .map(k => allButtons.find(b => b.key === k));
  const [activeButtons, setActiveButtons] = useState(pageSavedButtonsInfo);

  function addButtonToProfile(button) {
    setActiveButtons(prevButtons => {
      return [...prevButtons, button];
    });
  }

  async function saveButtons(formData) {
    await savePageButtons(formData);
    toast.success('Link saved successfully ');
  }

  function removeButton({key:keyToRemove}) {
    setActiveButtons(prevButtons => {
      return prevButtons
        .filter(button => button.key !== keyToRemove);
    });
  }

  const availableButtons = allButtons.filter(b1 => !activeButtons.find(b2 => b1.key === b2.key));

  return (
   <div className="mt-8 max-w-4xl m-auto ">
    <Toaster/>
      <form action={saveButtons}>
        <div className="flex items-center ">
          <h2 className="text-2xl font-bold mb-4">Additional Info</h2>
        </div>
        <ReactSortable
          handle=".handle"
          list={activeButtons}
          setList={setActiveButtons}>
          {activeButtons.map(b => (
            <div key={b.key} className="mb-4 md:flex items-center">
              <div className=" flex items-center gap-x-2  text-white bg-gradient-to-r from-normal-dark via-dark to-normal-dark hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-normal-dark/30  shadow-lg shadow-normal-dark/30  font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2">
                <FontAwesomeIcon
                  icon={faGripLines}
                  className="cursor-pointer text-gray-400 handle p-2" />
                <FontAwesomeIcon icon={b.icon} />
                <span>{upperFirst(b.label)}:</span>
              </div>
              <div className="grow flex">
                <input
                  placeholder={b.placeholder}
                  name={b.key}
                  className="rounded-lg px-2 focus:outline-normal-dark/30"
                  defaultValue={page?.buttons && page.buttons[b.key]}
                  type="text" style={{marginBottom:'0'}} />
                <button
                  onClick={() => removeButton(b)}
                  type="button"
                  className="py-2 px-4  rounded-lg ml-2 hover:opacity-90 bg-red-500 text-white ">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </ReactSortable>
        <div className="flex flex-wrap gap-2 mt-4 border-y py-4">
          {availableButtons.map(b => (
            <button
              key={b.key}
              type="button"
              onClick={() => addButtonToProfile(b)}
              className="flex items-center gap-1 text-white bg-gradient-to-r from-normal-dark via-dark to-normal-dark hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-normal-dark/30  shadow-lg shadow-normal-dark  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <FontAwesomeIcon icon={b.icon} />
              <span className="">
                {upperFirst(b.label)}
              </span>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          ))}
        </div>
        <div className=" mt-8">
          <SubmitButton className="flex items-start">
            <FontAwesomeIcon icon={faSave} />
            <span className="">Save</span>
          </SubmitButton>
        </div>
      </form>
  </div>
  );
}