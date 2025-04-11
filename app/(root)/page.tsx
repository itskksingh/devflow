import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const HomePage = async () => {
  const session = await auth();
  console.log("Session:", session); // Log the session object to see its contents
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <h1 className='text-4xl font-bold text-primary-500 font-space-grotesk'>Hello Kishan</h1>

      <form
        className='px-10 bg-amber-300 cursor-pointer'
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}>
        <Button type='submit' className="text-amber-900 text-2xl ">Logout!</Button>
      </form>
    </div>
  );
};

export default HomePage;
