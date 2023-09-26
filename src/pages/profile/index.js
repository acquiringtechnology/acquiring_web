import Head from "next/head";
import { Inter } from "next/font/google";
import { Layout } from "@/layout";
const inter = Inter({ subsets: ["latin"] });

 export default function Profile() {


    return(
        <>
        <Head>
          <title>Acquiring | Profile</title>
          <meta name="title" content="Acquiring | Profile" />
          <meta
            name="description"
            content="Earn Geekoins as rewards, practice programming, & upskill on Acquiring to learn new skills in your native language."
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
        <main className={`${inter.className}`}>
        <Layout>
         <div className="vh-100 ">
         <div className="row">
            <div className="col-12">
             <h4>hgjgjh</h4>
            </div>
          </div>

         </div>
        </Layout>
      </main>
    </>
    )
}