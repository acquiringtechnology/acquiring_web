import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/layout";
const inter = Inter({ subsets: ["latin"] });
import {
  Banner,
  AboutWebinar,
  TheStoryBehindOur,
  JoinAndTeamUpWithUs,
  WebinarsBanners,
  UpcommingWebinarsCards,
} from "@/components/pages";
export default function WebinarsDetails() {
  const ourPromisList = [
    {
      title: "Our Vision",
      description:
        "To be a customer-centric organization that simplifies solutions for everyday business challenges.",
      img: "https://certontech.com/assets/images/element/create-account.svg",
    },
    {
      title: "Our Promise",
      description:
        "To provide unsurpassed services to our clients by extending competent, custom-fit and cost-effective...",
      img: "https://certontech.com/assets/images/element/add-course.svg",
    },
    {
      title: "Our Vibe",
      description:
        "We believe that it takes people with different ideas, strengths, interests, and cultural backgrounds to...",
      img: "https://certontech.com/assets/images/third.png",
    },
  ];

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
             
                description="As a software engineer, acquiring technologies is crucial to building and advancing your career. Hackathons, debates, pair programming, workshops, and lots of first principles thinking are all part of our comprehensive program! An accelerated learning program that prepares you for a career in the hottest industry."
                bannerImage="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/052/064/original/LP_%2810%29.webp?1696317763"
              />
              <AboutWebinar />
              <UpcommingWebinarsCards/>
             
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
