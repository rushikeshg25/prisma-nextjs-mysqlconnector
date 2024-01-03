import Loginbutton from "@/components/Login/login-button";


export default function Home() {

  const isLoggedIn=false;

  return <div>
    <div className="flex justify-center">{isLoggedIn?<>Logged In</>:<>Not Logged In</>}</div>
    <div><Loginbutton/></div>
  </div>;
}
