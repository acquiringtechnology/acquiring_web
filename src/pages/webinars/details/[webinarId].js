import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/layout";
const inter = Inter({ subsets: ["latin"] });
import {
  Banner,
  AboutWebinar,
  WebinarsBanners,
  UpcommingWebinarsCards,
} from "@/components/pages";
import {getStorage} from "@/services/helperFunctions";
import {EXIST_LOCAL_STORAGE} from "@/services/constants";
import { useEffect, useState } from "react";
export default function WebinarsDetails() {
  
const [webinarDetails,setWebinerDetails] =useState(null)


  useEffect(()=>{


    const details=  JSON.parse(getStorage(EXIST_LOCAL_STORAGE.WEBINAR_DETAIL)) || {}
    setWebinerDetails(details)

  },[])

  return (
    <>
      <Head>
        <title>Acquiring | Webinars</title>
        <meta name="title" content="Acquiring | Webinars" />
        <meta name="description" content="As a software engineer, acquiring technologies is crucial to building and advancing your career. Hackathons, debates, pair programming, workshops, and lots of first principles thinking are all part of our comprehensive program! An accelerated learning program that prepares you for a career in the hottest industry." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.acquiring.in/whyUs/" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className={`${inter.className}`}>
        <Layout>
          <div className="row">
            <div className="col-12">
              <WebinarsBanners
             
               
                bannerImage={webinarDetails?.banerImg || ''}
              />
              <AboutWebinar webinarDetails={webinarDetails}/>
              <UpcommingWebinarsCards/>
             
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}