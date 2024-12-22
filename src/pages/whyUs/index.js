import Head from "next/head";
//import { Inter } from "next/font/google";
import { Layout } from "@/layout";
//const inter = Inter({ subsets: ["latin"] });
import {
  Banner,
  OueMissionAndVission,
  TheStoryBehindOur,
  JoinAndTeamUpWithUs,
  OurCoursesCard,
  Leadership,
} from "@/components/pages";
export default function Home() {
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
        <title>Acquiring | why-us</title>
        <meta name="title" content="Acquiring | why-us" />
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
              <Banner
                isBannerBtn={false}
                title={
                  <span>
                    Our mission is to empower the next generation of IT experts,
                  </span>
                }
                description="As a software engineer, acquiring technologies is crucial to building and advancing your career. Hackathons, debates, pair programming, workshops, and lots of first principles thinking are all part of our comprehensive program! An accelerated learning program that prepares you for a career in the hottest industry."
                bannerImage="/img/why-us.png"
              />
              <OueMissionAndVission />
              <TheStoryBehindOur />
              {/* <Leadership /> */}
              <JoinAndTeamUpWithUs />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
