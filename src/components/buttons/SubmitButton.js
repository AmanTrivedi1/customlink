import {useFormStatus} from 'react-dom';
import Loader from '../common/Loader';

export default function SubmitButton({children, className=''}) {
  const {pending} = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={"bg-black flex items-center gap-x-2 px-4 sm:text-base text-sm py-2  rounded-lg hover:opacity-90 text-white " + className}
    >
      {pending && (
       <div role="status">
         <Loader/>
     </div>
      )}
      {!pending && children}
    </button>
  );
}