'use client';
import {savePageSettings} from "@/actions/pageActions";
import "./PageSettings.css"
import SubmitButton from "@/components/buttons/SubmitButton";
import RadioTogglers from "@/components/formItems/radioTogglers";
import {faCloudArrowUp, faImage, faPalette, faSave, faUpload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {useState} from "react";
import { upload } from "@/libs/upload";
import toast from "react-hot-toast";

export default function PageSettingsForm({page,user}) {
  const [bgType, setBgType] = useState(page.bgType);
  const [bgColor, setBgColor] = useState(page.bgColor);
  const [bgImage, setBgImage] = useState(page.bgImage);
  const [avatar, setAvatar] = useState(user?.image);
  async function saveBaseSettings(formData) {
    const result = await savePageSettings(formData);
    if (result) {
      toast.success('Saved successfully✨');
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
      console.log(avatar);
    });
  }
  return (
    <div className="backdrop-blur-3xl  max-w-4xl m-auto ">
       <h1 className=" md:text-3xl sm:text-2xl text-xl font-semibold text-normal-dark">Hello,{page?.uri}</h1>
       <p className="">Add your bio</p>
      <form action={saveBaseSettings}>
        <div
          className="py-2 mt-4  min-h-[380px] w-full m-auto border-dashed border-2 border-bg-dark/50  rounded-lg  flex justify-center items-center bg-cover bg-center"
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
              <div className=" cursor-pointer  rounded-full mt-2 p-3">
                <div className="flex gap-2 justify-center">
                  <input
                    type="color"
                    name="bgColor"
                    className=" h-6 w-8 p-[] "
                    onChange={ev => setBgColor(ev.target.value)}
                    defaultValue={page.bgColor} />
                </div>
              </div>
            )}
            {bgType === 'image' && (
              <div className="flex  justify-center ">
                <label
                  className="bg-black text-white shadow rounded-full p-3 mt-2 flex gap-2"
                >
                  <input type="hidden" name="bgImage" value={bgImage}  className=""/>
                  <input 
                    type="file"
                    onChange={handleCoverImageChange}
                    accept=".jpg, .jpeg, .png" 
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
            <input onChange={handleAvatarImageChange}   accept=".jpg, .jpeg, .png"  id="avatarIn" type="file" className="hidden"/>
            <input type="hidden" name="avatar" value={avatar}/>
          </div>
        </div>
        <div className="">
          <label className="input-label" htmlFor="nameIn">Display name</label>
          <input
            type="text"
            id="nameIn"
            className="focus:outline-black/20 rounded-lg"
            name="displayName"
            defaultValue={page.displayName}
            placeholder="Aman Trivedi"/>
          <label className="input-label" htmlFor="locationIn">Where you live</label>
          <input
            type="text"
            id="locationIn"
            name="location"
            defaultValue={page.location}
            className="focus:outline-black/20 rounded-lg"
            placeholder="Somewhere in the world"/>
          <label className="input-label" htmlFor="bioIn">Bio</label>
          <textarea
            className="focus:outline-black/20 rounded-lg min-h-40"
            name="bio"
            defaultValue={page.bio}
            id="bioIn"
            placeholder="Your bio goes here..." />
            <SubmitButton className="bg-bg-dark flex items-start  rounded-lg ">
              <FontAwesomeIcon icon={faSave} />
              <span>Save</span>
            </SubmitButton>
        </div>
      </form>
  </div>
  );
}