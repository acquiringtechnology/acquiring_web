import Head from "next/head";
import { Inter } from "next/font/google";
import {
  CourseDetailBanner,
  CourseDetailContent,
  CourseVideoCard,
} from "@/components/pages";
import {NodataFound, NormalButton} from '@/components/common'
import { useEffect, useState } from "react";
import { EXIST_LOCAL_STORAGE } from "@/services/constants";
import { getStorage } from "@/services/helperFunctions";
import { Layout } from "@/layout";
import _ from 'lodash';
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
export default function CourseDetail() {
  const router = useRouter();
  const [courseDetails, setCourseDetails] = useState({});
  const [sendSelectedTopic, setSendSelectedTopic] = useState({});
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    handleGetCourseDetails();
    handleCheckIslogin()
  }, []);




  const handleGetCourseDetails=()=>{
    try {
      const courseDetails =
      getStorage(EXIST_LOCAL_STORAGE.COURSE_DETAIL)? JSON.parse(getStorage(EXIST_LOCAL_STORAGE.COURSE_DETAIL)):{};
      

        if(courseDetails?.syllabusList.length >0){
          if (courseDetails?.syllabusList[0]?.topics[0]) {
            const selectedTopic =
              courseDetails?.syllabusList[0].topics[0];
                setSendSelectedTopic(selectedTopic);
          }
        }

    

      setCourseDetails(courseDetails);
    } catch (e) {
      console.log(e)
    }
  };

  const handleCheckIslogin=()=>{
    try{
      const curentUserData =  getStorage(EXIST_LOCAL_STORAGE.CURRENT_USER)? JSON.parse(getStorage(EXIST_LOCAL_STORAGE.CURRENT_USER)):{};
      setUserDetails(curentUserData);
    }catch(e){

    }
  }
  

  return (
    <>
      <Head>
        <title>Acquiring | Coures</title>
        <meta name="title" content="Acquiring | Coures" />
        <meta
          name="description"
          content="
          Get in-demand IT & software skills through self-paced online courses taught in your preferred native languages, such as Hindi, Tamil, Telugu, and Malayalam.
          "
        />
         {/* <meta
          name="keywords"
          content="React JS, Angular, Angular Js,  web developer,chennai software training institute, mern stack developer course, full stack web developer training,  mern stack training full stack  web with placements, web development training, Javascript"
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`vh-100 ${inter.className}`}>
      <Layout>
        {courseDetails?.syllabusList?.length >0?
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-4">

              {!_.isEmpty(userDetails)? 
              <CourseVideoCard
                courseDetails={courseDetails}
                sendSelectedTopic={sendSelectedTopic}
              />: <LogOut/>}
            </div>
            <div className="col-md-4">
              <CourseDetailContent
                sendSelectedTopic={setSendSelectedTopic}
                courseDetails={courseDetails}
              />
            </div>
          </div>
        </div>: <NodataFound title="No syllabus yet"  subTitle="You can go to back by clicking below button"/>}
        </Layout>
      </main>
    </>
  );
}


const LogOut=()=>{
  const router = useRouter();
return(
  <div className="row justify-content-center align-items-center h-100">
    <div className="col-md-12 ">
      <div className="ratio ratio-16x9">
     <div className="bg-dark">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 text-center">
      <h4 className="text-white">To play this video</h4>
      <NormalButton title="Login Now" onClick={()=>router.push('/signIn')}  />
      </div>

    </div>
     </div>
      </div>
     

    </div>

  </div>
)

}
