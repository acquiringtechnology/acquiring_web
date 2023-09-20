import Head from "next/head";
import { Inter } from "next/font/google";
import {
  CourseDetailBanner,
  CourseDetailContent,
  OurCoursesCard,
} from "@/components/pages";

import { Layout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });
function CourseDetail({ getAllCoures }) {
  return (
    <>
      <Head>
        <title>Acquiring | courses</title>
        <meta name="description" content="Acquiring | courses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
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
