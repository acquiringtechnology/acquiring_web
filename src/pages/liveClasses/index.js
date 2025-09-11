// import Head from "next/head";
// //import { Inter } from "next/font/google";
// import { Layout } from "@/layout";
// //const inter = Inter({ subsets: ["latin"] });
// import {
//   Banner,
//   Description,
//   OurCoursesCard,
//   LiveClassPricing,
//   LiveClassesCard,
//   LiveClassBanner,
// } from "@/components/pages";
// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Acquiring | Live Classes</title>
//         <meta name="title" content="Acquiring | Live Classes" />
//         <meta
//           name="description"
//           content="Decide what you want to learn and join Live Class & Acquiring's IT Career Oriented Courses. From Full Stack Development to Data Science program."
//         />
//         <meta
//           name="keywords"
//           content="online full stack developer course,React JS, Angular, Angular Js, full stack web developer,chennai software training institute, mern stack developer course, full stack web developer training,  mern stack training full stack  web with placements, web development training, Javascript"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="canonical" href="https://www.acquiring.in/liveClasses/" />
//         <meta name="robots" content="index, follow" />
//       </Head>
//      <main>
//         <Layout>
//           <div className="row">
//             <div className="col-12">
//               <LiveClassBanner
//                 title={
//                   <span>Live Programmes for Future Tech Leaders</span>
//                 }
//                 description="Skills for your present (and your future). Get started with us."
//                 bannerImage="/img/liveClasses_banner_bg.svg"
//                 // bannerImage="/img/banner-img.png"
//               />
//               <Description
//                 title={"Description"}
//                 description=""
//               subDescription=""
//               />
//               <LiveClassesCard />

//               {/* <WhatOfferYou/>
//             <OurCoursesCard isSwiper={false} />
           
//             <HaveQue />
//             <OurCustomer/> */}
//             </div>
//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// }
import Head from "next/head";
//import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
//const inter = Inter({ subsets: ["latin"] });
import {
  Banner,
  Description,
  LiveClassPricing,
  TechnologiesCovered,
  LiveClassCourseContent,
  CourseDetailBanner,
  SyllabusAction,
  ProgramSupport,
  AboutBootcamp,
  SampleCertification,
  HowtheJourney
} from "@/components/pages";
import { useEffect } from "react";
import { liveClasssList } from "@/services/data/liveClasses";
import { useState } from "react";
import { Layout } from "@/layout";

export default function LiveClassDetail() {
  const router = useRouter();

  const [liveClassDetail, setIiveClassDetail] = useState(null);
  const liveClassId = 'd5eb2822-507c-11ee-be56-0242ac120002'

  useEffect(() => {
    try {
      if (liveClasssList?.length > 0) {
        const classData = liveClasssList?.find(({ id }) => id === liveClassId);
        setIiveClassDetail(classData);
      }
    } catch (e) {}
  }, [liveClassId]);

  return (
    <>
      <Head>
        <title>Acquiring | Live Classes</title>
        <meta name="description" content="Acquiring | Live Classes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main>
        <Layout>
          {/* app-theme-bg primary-banner-bg  */}
        <div className="row">
          <div className="col-12">
                  <div className="app-theme-bg">
            <CourseDetailBanner
              liveClassDetail={liveClassDetail}
              fromPage={"liveClass"}
            />
            <ProgramSupport liveClassDetail={liveClassDetail}/>
            <AboutBootcamp liveClassDetail={liveClassDetail}/>
            <LiveClassCourseContent liveClassDetail={liveClassDetail} />
                  <HowtheJourney/>
            <SyllabusAction  liveClassDetail={liveClassDetail}/>
      
            <TechnologiesCovered liveClassDetail={liveClassDetail} />
            <SampleCertification/>
            <LiveClassPricing liveClassDetail={liveClassDetail}/>
          </div>
          </div>
        </div>
        </Layout>
      </main>
    </>
  );
}

