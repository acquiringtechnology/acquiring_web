/* eslint-disable @next/next/no-img-element */
import styles from "./liveClassesCard.module.scss";
import { NormalButton } from "@/components/common";
import { useRouter } from "next/router";
import { liveClasssList } from "@/services/data/liveClasses";
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
          <div className="row mt-5 justify-content-center">
            {liveClasssList.map((data, i) => (
              <div className="col-md-3 col-sm-6 mb-4" key={i}>
                <div class={`card ${styles.liveClassCard}`}>
                  <img
                    src="https://media.swipepages.com/2021/11/5fcde7acf64f9100108c719e/instagram-post---1-300.webp"
                    class="card-img-top"
                    alt="courseName"
                  />
                  <div class="card-body">
                    <h5
                      title={data.name}
                      class={`card-title w-100 text-truncate ${styles.liveClassCardTitle}`}
                    >
                      {data.name}
                    </h5>
                    <p class={`card-text ${styles.liveClassCardDisc}`}>
                      {data.dis}
                    </p>
                    <div class="d-grid gap-2">
                      <NormalButton
                        title="KNOW MORE"
                        onClick={() =>
                          router.push(`/liveClasses/detail/${data.id}`)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
