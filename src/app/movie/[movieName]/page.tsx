import Link from "next/link";

const OnlyName =() => {

  return (
    <div className='flex flex-col w-full items-center gap-5 p-5'>
      <div className='jaro text-8xl'> 250 Top Movies </div>
      <div className="text-2xl" > Year need it for the movies details :(</div>
      <Link href={"/"}>Go to home page</Link>
    </div>
  );
}

export default OnlyName;