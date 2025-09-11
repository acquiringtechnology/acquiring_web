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
