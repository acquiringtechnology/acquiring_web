import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });
import {
  Banner,
  Description,
  LiveClassPricing,
  TechnologiesCovered,
  LiveClassCourseContent,
  CourseDetailBanner,
  SyllabusAction
} from "@/components/pages";
import { useEffect } from "react";
import { liveClasssList } from "@/services/data/liveClasses";
import { useState } from "react";
export default function LiveClassDetail() {
  const router = useRouter();
  const { liveClassId } = router.query;
  const [liveClassDetail, setIiveClassDetail] = useState(null);

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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div className="row">
          <div className="col-12">
            <CourseDetailBanner
              liveClassDetail={liveClassDetail}
              fromPage={"liveClass"}
            />
            <LiveClassCourseContent liveClassDetail={liveClassDetail} />
            <SyllabusAction/>
            <TechnologiesCovered liveClassDetail={liveClassDetail} />
            <LiveClassPricing liveClassDetail={liveClassDetail}/>
          </div>
        </div>
      </main>
    </>
  );
}