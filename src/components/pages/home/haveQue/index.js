/* eslint-disable react/no-unescaped-entities */
import styles from "./haveQue.module.scss";
import { NormalButton } from "@/components/common";
import { useRouter } from "next/router";
const HaveQue = () => {
  const router = useRouter();
  return (
    <section className={`${styles.haveQueContiner}`}>
      <div className="container ">
        <div className="row justify-content-center align-items-center ">
          <div className="col-lg-12 text-center">
            <h3 className={`text-white mb-0 ${styles.haveQueTitle}`}>
              Still have questions?
            </h3>
            <p className={`text-white`}>
              Can't find the answers you're looking for? Please feel free to
              chat with our team
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <NormalButton
              onClick={() => router.push("/contactUs")}
              className={` px-4 ${styles["join-team-btn"]}`}
              title="Contact Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveQue;
