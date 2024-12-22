import Head from "next/head";
//import { Inter } from "next/font/google";
import { Layout } from "@/layout";
//const inter = Inter({ subsets: ["latin"] });
import {
  Banner,
  Description,
  OurCoursesCard,
  LiveClassPricing,
  LiveClassesCard,
  LiveClassBanner,
} from "@/components/pages";
export default function Home() {
  return (
    <>
      <Head>
        <title>Acquiring | Live Classes</title>
        <meta name="title" content="Acquiring | Live Classes" />
        <meta
          name="description"
          content="Decide what you want to learn and join Live Class & Acquiring's IT Career Oriented Courses. From Full Stack Development to Data Science program."
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
     <main>
        <Layout>
          <div className="row">
            <div className="col-12">
              <LiveClassBanner
                title={
                  <span>Programmes for career advancement in technology</span>
                }
                description="Skills for your present (and your future). Get started with us."
                bannerImage="/img/liveClasses_banner_bg.svg"
                // bannerImage="/img/banner-img.png"
              />
              <Description
                title={"Description"}
                description=""
              subDescription=""
              />
              <LiveClassesCard />

              {/* <WhatOfferYou/>
            <OurCoursesCard isSwiper={false} />
           
            <HaveQue />
            <OurCustomer/> */}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
