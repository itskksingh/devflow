import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import Navlinks from "./NavLinks";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='/icons/hamburger.svg'
          alt='hamburger'
          width={36}
          height={36}
          className='cursor-pointer invert-colors sm:hidden'
        />
      </SheetTrigger>
      <SheetContent className='background-light900_dark200 border-none p-5' side='left'>
        <SheetTitle className='hidden'>Navigation</SheetTitle>
        <Link href='/' className='flex items-center gap-1'>
          <Image src='/images/site-logo.svg' width={23} height={23} alt='DevFlow logo' />
          <p className='h2-bold font-space-grotesk text-dark-100 dark:text-light-900 '>
            Dev<span className='text-primary-500'>Flow</span>
          </p>
        </Link>
        <div className='no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto'>
          <SheetClose asChild>
            <section className='flex h-full flex-col gap-6 pt-16'>
              <Navlinks isMobileNav />
            </section>
          </SheetClose>
          <div className='flex flex-col gap-3'>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                  <span className='primary-text-gradient'>Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full border rounded-lg px-4 py-3 shadow-none'>
                  <span>Sign Up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
