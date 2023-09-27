import Head from "next/head";
import { Inter } from "next/font/google";
import { Layout } from "@/layout";
import { ProfileCard ,ProfileFormCard} from "@/components/pages";
import { getStorage} from "@/services/helperFunctions";
import { EXIST_LOCAL_STORAGE} from "@/services/constants";
import { useEffect,useState } from "react";
const inter = Inter({ subsets: ["latin"] });

 export default function Profile() {
  const [userDetails, setUserDetails] = useState({});

useEffect(()=>{
  try {
    // window.addEventListener("scroll", handleverticalScroll);
    const curentUserData =
      JSON.parse(getStorage(EXIST_LOCAL_STORAGE.CURRENT_USER)) || {};
      console.log('curentUserData--------->',curentUserData)
    setUserDetails(curentUserData);
  } catch (e) {   console.log('curentUserData-------e-->',e)}
},[])



    return(
        <>
        <Head>
          <title>Acquiring | Profile</title>
          <meta name="title" content="Acquiring | Profile" />
          <meta
            name="description"
            content="Earn Geekoins as rewards, practice programming, & upskill on Acquiring to learn new skills in your native language."
          />
          <meta
            name="keywords"
            content="online full stack developer course,React JS, Angular, Angular Js, full stack web developer,chennai software training institute, mern stack developer course, full stack web developer training,  mern stack training full stack  web with placements, web development training, Javascript"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.acquiring.in/liveClasses/" />
          <meta name="robots" content="index, follow" />
        </Head>
        <main className={`${inter.className}`}>
        <Layout>
         <div className="vh-100 container mt-4">
         <div className="row">
            <div className="col-md-4 col-sm-12">
             <ProfileCard userDetails={userDetails}/>
            </div>
            <div className="col-md-8 col-sm-12">
             <ProfileFormCard userDetails={userDetails}/>
            </div>
          </div>

         </div>
        </Layout>
      </main>
    </>
    )
}