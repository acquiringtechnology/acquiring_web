import Head from "next/head";
//import { Inter } from "next/font/google";
import { Layout } from "@/layout";
import { connect } from "react-redux";
// import SimpleReactValidator from "simple-react-validator";
import { bindActionCreators } from "redux";
import * as candidateAction from "@/redux/action/candidate";
import { ProfileCard, ProfileFormCard } from "@/components/pages";
import { getStorage, setStorage } from "@/services/helperFunctions";
import { EXIST_LOCAL_STORAGE } from "@/services/constants";
import { useEffect, useState } from "react";
//const inter = Inter({ subsets: ["latin"] });

function Profile({ candidateUpdate }) {
  const [userDetails, setUserDetails] = useState({});
  const [isFormLoder, setIsFormLoder] = useState(false);
  useEffect(() => {
    try {
      // window.addEventListener("scroll", handleverticalScroll);
      const curentUserData = getStorage(EXIST_LOCAL_STORAGE.CURRENT_USER)
        ? JSON.parse(getStorage(EXIST_LOCAL_STORAGE.CURRENT_USER))
        : {};
      setUserDetails(curentUserData);
    } catch (e) {}
  }, []);

  const handleUpdateUserData = async (userDataBody) => {
    try {
      setIsFormLoder(true);
      let reqBody = { ...userDataBody };
      delete reqBody.userId;
      const candidateUpdateReq = await candidateUpdate(
        reqBody,
        userDataBody.userId
      );
      const {
        status,
        data: { userData },
      } = candidateUpdateReq;
      setIsFormLoder(false);
      setUserDetails(userData);
      userData.userId = userData.id;
      setStorage(EXIST_LOCAL_STORAGE.CURRENT_USER, JSON.stringify(userData));
    } catch (e) {
      setIsFormLoder(false);
    }
  };

  return (
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
     <main>
        <Layout>
          <div className="vh-100 container mt-4">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <ProfileCard userDetails={userDetails} />
              </div>
              <div className="col-md-8 col-sm-12">
                <ProfileFormCard
                  sendUserData={handleUpdateUserData}
                  userDetails={userDetails}
                  isFormLoder={isFormLoder}
                />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

const mapStatesToProps = ({
  candidate: { isCandidateCreateLoader = false },
}) => {
  return { isCandidateCreateLoader };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...candidateAction,
    },
    dispatch
  );
};
export default connect(mapStatesToProps, mapDispatchToProps)(Profile);
