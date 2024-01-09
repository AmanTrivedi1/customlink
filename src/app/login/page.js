import LoginWithGoogle from "../components/buttons/LoginWithGoogle";


export default function LoginPage() {
  return (
 
    <div className=" bg-primmary h-screen">
        <div className="w-[450px]  top-0 fixed bg-center bg-cover  h-full md:block hidden bg-[url('https://res.cloudinary.com/dmlts9lbk/image/upload/v1704826910/pexels-cottonbro-studio-3585089_mlxluq.jpg')] "></div>
      <div className="p-4 max-w-md bg-primmary md:pt-0 pt-28 md:absolute md:top-1/3 md:left-1/2 flex flex-col items-center justify-center  mx-auto">
        <h1 className=" text-5xl text-secondry  font-bold text-center mb-2">
          Sign into your account
        </h1>
        <p className="text-center text-secondry  mb-6 ">
          Sign in to your account using google
        </p>
        <LoginWithGoogle/>
      </div>
    </div>
   
  );
}