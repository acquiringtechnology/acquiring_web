/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/layout";
// const inter = Inter({ subsets: ["latin"] });
import {
  Banner,
  AboutWebinar,
  WebinarsBanners,
  UpcommingWebinarsCards,
} from "@/components/pages";
import { getStorage } from "@/services/helperFunctions";
import { EXIST_LOCAL_STORAGE } from "@/services/constants";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as webinearAction from "@/redux/action/webinear";
import { useRouter } from 'next/router'
function WebinarsDetails({ createWebinearEnrolled ,webinearEnrolledOtpVerify,webinearEnrolledOtpResend ,webinearDetailById}) {
  const [webinarDetails, setWebinerDetails] = useState(null);
  const router = useRouter()



  const handleGetWebinearDetailById= async ()=>{
   try{
   
    if(!router.query.webinarId) return;
    const res = await webinearDetailById(router.query.webinarId)

    const {data ,status}= res;

    if(status){
      setWebinerDetails(data);
    }

   }catch(e){

    console.log('errrr',e)

   }
    
  }

  useEffect(() => {
 
  handleGetWebinearDetailById()
  }, [handleGetWebinearDetailById, router.query.webinarId]);

  return (
    <>
      <Head>
        <title>Acquiring | Webinars</title>
        <meta name="title" content="Acquiring | Webinars" />
        <meta
          name="description"
          content="As a software engineer, acquiring technologies is crucial to building and advancing your career. Hackathons, debates, pair programming, workshops, and lots of first principles thinking are all part of our comprehensive program! An accelerated learning program that prepares you for a career in the hottest industry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.acquiring.in/whyUs/" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <Layout>
          <div className="row">
            <div className="col-12">
              <WebinarsBanners bannerImage={webinarDetails?.banerImg || ""} />
              <AboutWebinar
                webinarDetails={webinarDetails}
                createWebinearEnrolled={createWebinearEnrolled}
                webinearEnrolledOtpVerify={webinearEnrolledOtpVerify}
                webinearEnrolledOtpResend={webinearEnrolledOtpResend}
              />
              <UpcommingWebinarsCards />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

const mapStatesToProps = ({ webinar: { isWebinarEnrolledLoader = false } }) => {
  return { isWebinarEnrolledLoader };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...webinearAction,
    },
    dispatch
  );
};
export default connect(mapStatesToProps, mapDispatchToProps)(WebinarsDetails);
