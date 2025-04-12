import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const HomePage = async () => {
  const session = await auth();
  console.log("Session:", session); // Log the session object to see its contents
  return (
    <div className='flex flex-col items-center justify-center  py-2 bg-gray-100 mt-20 w-full'>
      <h1 className='text-4xl font-bold text-primary-500 font-space-grotesk'>Hello Kishan</h1>
    </div>
  );
};

export default HomePage;
