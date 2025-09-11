import Head from "next/head";
//import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/layout";
//const inter = Inter({ subsets: ["latin"] });
import {
  Banner,
  AboutWebinar,
  TheStoryBehindOur,
  JoinAndTeamUpWithUs,
  WebinarsBanners,
  UpcommingWebinarsCards,
} from "@/components/pages";
 const WebinarsPage=()=>{

    return(
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
       <main>
          <Layout>
            <div className="row">
              <div className="col-12">
                 <div className="app-theme-bg">
                <UpcommingWebinarsCards isViewAll={true}/>
               </div>
              </div>
            </div>
          </Layout>
        </main>
      </>
    )

};

export default  WebinarsPage