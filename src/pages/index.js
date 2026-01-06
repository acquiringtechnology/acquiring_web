import Head from "next/head";
//import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { NormalButton } from "@/components/pages";
import { Layout } from "@/layout";
//const inter = Inter({ subsets: ["latin"] });
import {
  Banner,
  AboutCompany,
  StudentVideoReview,
  HaveQue,
  UpcommingWebinarsCards,
  WhatOfferYou,
  Faq,
  LiveClassesCard,
  OurCustomer,
  MeetCEO
} from "@/components/pages";
export default function Home() {
  return (
    <>
      <Head>
        <title>Acquiring | Learn to code in your native language</title>
        <meta
          name="title"
          content="Acquiring | Learn to code in your native language"
        />
        <meta
          name="description"
          content="Acquire online programming courses to advance your tech career. Get 100% Job Assistance Support while learning in native languages. Get started now!"
        />
        <meta
          name="keywords"
          content="online full stack developer course,React JS, Angular, Angular Js, full stack web developer,chennai software training institute, mern stack developer course, full stack web developer training,  mern stack training full stack  web with placements, web development training, Javascript"
        />
        
        <meta name="facebook-domain-verification" content="os1n81d80rjonzb3sadun1d75oz24t" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://www.acquiring.in/" />
        <meta name="robots" content="index, follow" />
      </Head>
     <main>
        <Layout>
          <div className="row">
            <div className="col-12">
              <div className="app-theme-bg">
              <Banner
                title={
                  <span>
                    Expand your career opportunities with{" "}
                    <span className="text-primary">Acquiring</span>
                  </span>
                }
                description="Acquire Skills for your present (and future). Get started with us"
                bannerImage="/img/banner_apge_right_side_world.png"
              />
              <LiveClassesCard/>
               <AboutCompany />
               <MeetCEO/>
                <OurCustomer />
                    <Faq />
              </div>
               
              {/* <UpcommingWebinarsCards /> */}
             
              {/* <WhatOfferYou /> */}
             
              {/* <OurCoursesCard isSwiper={false} /> */}
              {/* <StudentVideoReview/> */}
             
          
              <HaveQue />
              
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
