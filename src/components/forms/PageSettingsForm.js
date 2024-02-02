'use client';
import {savePageSettings} from "@/actions/pageActions";
import "./PageSettings.css"
import SubmitButton from "@/components/buttons/SubmitButton";
import RadioTogglers from "@/components/formItems/radioTogglers";
import SectionBox from "@/components/layout/SectionBox";
import {faCloudArrowUp, faImage, faPalette, faSave, faUpload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {useState} from "react";
import { upload } from "@/app/libs/upload";
import toast from "react-hot-toast";

export default function PageSettingsForm({page,user}) {
  const [bgType, setBgType] = useState(page.bgType);
  const [bgColor, setBgColor] = useState(page.bgColor);
  const [bgImage, setBgImage] = useState(page.bgImage);
  const [avatar, setAvatar] = useState(user?.image);
  async function saveBaseSettings(formData) {
    const result = await savePageSettings(formData);
    if (result) {
      toast.success('Saved!');
    }
  }
  async function handleCoverImageChange(ev) {
    await upload(ev, link => {
      setBgImage(link);
    });
  }
  async function handleAvatarImageChange(ev) {
    await upload(ev, link => {
      setAvatar(link);
    });
  }
  return (
    <div className="backdrop-blur-3xl ">
    <SectionBox>
      <form action={saveBaseSettings}>
        <div
          className="py-4 -m-4 min-h-[300px] flex justify-center items-center bg-cover bg-center"
          style={
            bgType === 'color'
              ? {backgroundColor:bgColor}
              : {backgroundImage:`url(${bgImage})`}
          }
        >
          <div className="flex flex-col items-center justify-center">
            <RadioTogglers
              defaultValue={page.bgType}
              options={[
                {value:'color', icon: faPalette, label: 'Color'},
                {value:'image', icon: faImage, label: 'Image'},
              ]}
              onChange={val => setBgType(val)}
            />
            {bgType === 'color' && (
              <div className=" cursor-pointer rounded-full mt-2 p-3">
                <div className="flex gap-2 justify-center">
                  <input
                    type="color"
                    name="bgColor"
                    className="rounded-full"
                    onChange={ev => setBgColor(ev.target.value)}
                    defaultValue={page.bgColor} />
                </div>
              </div>
            )}
            {bgType === 'image' && (
              <div className="flex justify-center ">
                <label
                  className="bg-black text-white shadow rounded-full p-3 mt-2 flex gap-2"
                >
                  <input type="hidden" name="bgImage" value={bgImage}  className=""/>
                  <input 
                    type="file"
                    onChange={handleCoverImageChange}
                    className="hidden"/>
                  <div className="flex gap-2 items-center  cursor-pointer">
                    <FontAwesomeIcon
                      icon={faCloudArrowUp}/>
                  </div>
                </label>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center -mb-12">
          <div className="relative -top-8 w-[128px] h-[128px]">
            <div className="overflow-hidden h-full rounded-full    border-black/30 border">
              <Image
                className="w-full h-full object-cover"
                src={avatar}
                alt={'avatar'}
                width={128} height={128} />
            </div>
            <label
              htmlFor="avatarIn"
              className="absolute bottom-0 -right-2 bg-white p-2 rounded-full shadow shadow-black/50 aspect-square flex items-center cursor-pointer">
              <FontAwesomeIcon size={'xl'} icon={faCloudArrowUp} />
            </label>
            <input onChange={handleAvatarImageChange} id="avatarIn" type="file" className="hidden"/>
            <input type="hidden" name="avatar" value={avatar}/>
          </div>
        </div>
        <div className="p-0">
          <label className="input-label" htmlFor="nameIn">Display name</label>
          <input
            type="text"
            id="nameIn"
            className="focus:outline-black/20"
            name="displayName"
            defaultValue={page.displayName}
            placeholder="John Doe"/>
          <label className="input-label" htmlFor="locationIn">Where you live</label>
          <input
            type="text"
            id="locationIn"
            name="location"
            defaultValue={page.location}
            className="focus:outline-black/20"
            placeholder="Somewhere in the world"/>
          <label className="input-label" htmlFor="bioIn">Bio</label>
          <textarea
            className="focus:outline-black/20"
            name="bio"
            defaultValue={page.bio}
            id="bioIn"
            placeholder="Your bio goes here..." />
         
            <SubmitButton className="bg-bg-dark px-10 py-2 rounded-lg ">
              <FontAwesomeIcon icon={faSave} />
              <span>Save</span>
            </SubmitButton>
         
        </div>
      </form>
    </SectionBox>
  </div>
  );
}