'use client';
import {savePageLinks} from "@/actions/pageActions";
import SubmitButton from "@/components/buttons/SubmitButton";
import {upload} from "@/libs/upload";
import {faCloudArrowUp, faGripLines, faLink, faPlus, faSave, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {useState} from "react";
import { Toaster, toast } from 'sonner';
import {ReactSortable} from "react-sortablejs";

export default function PageLinksForm({page,user}) {
  const [links,setLinks] = useState(page.links || []);
  async function save() {
    await savePageLinks(links);
    toast.success('Link saved successfully');
  }
  function addNewLink() {
    setLinks(prev => {
      return [...prev, {
        key: Date.now().toString(),
        title:'',
        subtitle:'',
        icon:'',
        url:'',
      }];
    });
  }
  function handleUpload(ev, linkKeyForUpload) {
    upload(ev, uploadedImageUrl => {
      setLinks(prevLinks => {
        const newLinks = [...prevLinks];
        newLinks.forEach((link,index) => {
          if (link.key === linkKeyForUpload) {
            link.icon = uploadedImageUrl;
          }
        });
        return newLinks;
      });
    });
  }
  function handleLinkChange(keyOfLinkToChange, prop, ev) {
    setLinks(prev => {
      const newLinks = [...prev];
      newLinks.forEach((link) => {
        if (link.key === keyOfLinkToChange) {
          link[prop] = ev.target.value;
        }
      });
      return [...prev];
    })
  }
  function removeLink(linkKeyToRemove) {
    setLinks(prevLinks =>
      [...prevLinks].filter(l => l.key !== linkKeyToRemove)
    );
  }
  return (
<div className="mt-8 max-w-4xl m-auto ">
  <Toaster/>
      <form action={save}>
        <h2 className="text-2xl font-bold mb-4">Additional Links</h2>
        <button
          onClick={addNewLink}
          type="button"
          className="text-white  flex items-center gap-x-2 bg-gradient-to-r from-normal-dark via-dark to-normal-dark hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-normal-dark/30  shadow-lg shadow-normal-dark/30  font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
          <FontAwesomeIcon className=" text-white p-1 rounded-full aspect-square" icon={faPlus} />
          <span>Add new</span>
        </button>
        <div className="">
          <ReactSortable
            handle={'.handle'}
            list={links} setList={setLinks}>
            {links.map(l => (
              <div key={l.key} className=" md:flex gap-6 mb-8 border-normal-dark/20 border-b pb-8 items-center">
                <div className="handle">
                  <FontAwesomeIcon
                    className="text-normal-dark  mr-2 cursor-poin"
                    icon={faGripLines} />
                </div>
                <div className="">
                  <div className=" border-normal-dark/30 border-[3px] rounded-full   relative aspect-square overflow-hidden w-16 h-16 inline-flex justify-center items-center ">
                    {l.icon && (
                      <Image
                        className="w-full   p-[2px] rounded-full h-full object-cover"
                        src={l.icon}
                        alt={'icon'}
                        width={64} height={64} />
                    )}
                    {!l.icon && (
                      <FontAwesomeIcon size="xl" icon={faLink} />
                    )}
                  </div>
                  <div  className="flex items-center gap-x-2">
                    <input
                      onChange={ev => handleUpload(ev,l.key)}
                      id={'icon'+l.key}
                      accept=".jpg, .jpeg, .png" 
                      type="file"
                      className="hidden"/>
                    <label htmlFor={'icon'+l.key} className="border bg-normal-dark text-white rounded-lg  mt-2 py-2 px-3 flex items-center gap-1  cursor-pointer mb-2 justify-center">
                      <FontAwesomeIcon icon={faCloudArrowUp} />
                    </label>
                    <button
                      onClick={() => removeLink(l.key)}
                      type="button" className="w-full bg-red-500 text-white rounded-lg max-w-12  py-2 px-4  h-full flex gap-2 items-center justify-center">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
                <div className="grow">
                  <label className="input-label">Title:</label>
                  <input
                    value={l.title}
                    className="rounded-lg focus:outline-normal-dark/30"
                    onChange={ev => handleLinkChange(l.key, 'title', ev)}
                    type="text" placeholder="title"/>
                  <label className="input-label">Subtitle:</label>
                  <input
                    value={l.subtitle}
                    className="rounded-lg focus:outline-normal-dark/30"
                    onChange={ev => handleLinkChange(l.key, 'subtitle', ev)}
                    type="text" placeholder="subtitle (optional)"/>
                  <label className="input-label">URL:</label>
                  <input
                    className="rounded-lg focus:outline-normal-dark/30"
                    value={l.url}
                    onChange={ev => handleLinkChange(l.key, 'url', ev)}
                    type="text" placeholder="url"/>
                </div>
              </div>
            ))}
          </ReactSortable>
        </div>
        <div className="border-t pt-4 mt-4">
          <SubmitButton className="">
            <FontAwesomeIcon icon={faSave} />
            <span>Save</span>
          </SubmitButton>
        </div>
      </form>
 </div>
  );
}