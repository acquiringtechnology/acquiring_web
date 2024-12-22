import Head from "next/head";
// import { Inter } from "next/font/google";
import {
  OurCoursesCard,
} from "@/components/pages";

import { Layout } from "@/layout";

// const inter = Inter({ subsets: ["latin"] });
function CourseDetail({ getAllCoures }) {
  return (
    <>
      <Head>
        <title>Acquiring | courses</title>
        <meta name="title" content="Acquiring | courses" />

        <meta
          name="description"
          content="
          Get in-demand IT & software skills through self-paced online courses taught in your preferred native languages, such as Hindi, Tamil, Telugu, and Malayalam.
          "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.acquiring.in/courses/" />
        <meta name="robots" content="index, follow" />
      </Head>
      {/* <main className={`${inter.className}`}> */}
      <main >
        <Layout>
        <div className="row">
          <div className="col-12">
            <OurCoursesCard
              isSwiper={false}
              isViewAllBtn={false}
            />
            {/* <CourseDetailContent/> */}
          </div>
        </div>
        </Layout>
      </main>
    </>
  );
}

export default CourseDetail;
