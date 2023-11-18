import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";


const LandingPage =()=>{

    return (
<div className="flex justify-between mx-6 my-6">
    Landing Page (Unprotected)
    <div className="flex gap-5 ">
        <Link href="/sign-in" >
<Button>
        Login
    </Button>
    </Link>
    <Link href="/sign-up" >
<Button>
        Register
    </Button>
    </Link>
</div>
    
</div>


    );
}

export default LandingPage;