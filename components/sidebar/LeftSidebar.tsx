import React from "react";
import NavLinks from "../navigation/navbar/NavLinks";
import Link from "next/link";
import { Button } from "../ui/button";
import ROUTES from "@/constants/routes";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className='background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-hidden border-r p-6 pt-30 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'>
      <div className='flex flex-col gap-4'>
        <NavLinks />
      </div>

      <div className='flex flex-col gap-3'>
        <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none' asChild>
          <Link href={ROUTES.SIGN_IN}>
            <Image src='icons/account.svg' width={20} height={20} alt='account' className='invert-colors lg:hidden' />
            <span className='primary-text-gradient max-lg:hidden'>Log In</span>
          </Link>
        </Button>
        <Button
          className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full border rounded-lg px-4 py-3 shadow-none '
          asChild>
          <Link href={ROUTES.SIGN_UP} className='flex items-center'>
            <Image src='icons/sign-up.svg' width={20} height={20} alt='account' className=' invert-colors lg:hidden' />
            <span className='max-lg:hidden'>Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
