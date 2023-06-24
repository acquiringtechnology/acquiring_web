import styles from "./liveClassesCard.module.scss";
import { NormalButton } from "@/components/common";
import { useRouter } from "next/router";
export const LiveClassesCard = (props) => {
  const router = useRouter();
  return (
    <section>
      <div class="container mb-5">
        <div className={styles.liveClassesCardContiner}>
          <h4 className={`text-center ${styles.liveClassTitle}`}>
            We offer live classes with placement support as part of our program
            list
          </h4>

          {/*  */}
          <div className="row mt-5">
            <div className="col-md-3 col-sm-6">
              <div class={`card ${styles.liveClassCard}`}>
                <img
                  src="https://media.swipepages.com/2021/11/5fcde7acf64f9100108c719e/instagram-post---1-300.webp"
                  class="card-img-top"
                  alt="courseName"
                />
                <div class="card-body">
                  <h5 class={`card-title ${styles.liveClassCardTitle}`}>
                    Full Stack
                  </h5>
                  <p class={`card-text ${styles.liveClassCardDisc}`}>
                    Some quick example text to build on the card title and make
                    up the bulk of the {`card's`} content.
                  </p>
                  <div class="d-grid gap-2">
                    <NormalButton
                      title="KNOW MORE"
                      onClick={() => router.push("/liveClasses/detail")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
