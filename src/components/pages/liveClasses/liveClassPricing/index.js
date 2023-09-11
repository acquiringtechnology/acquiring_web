import styles from "./liveClassPricing.module.scss";
import { NormalButton } from "@/components/common";
import { useRouter } from "next/router";
export const LiveClassPricing = ({liveClassDetail}) => {
  const router = useRouter();
  return (
    <section>
      <div className="container mb-5">
        <div className={styles.liveClassPricingContiner}>
          {/* <h4 className={`text-center ${styles.liveClassTitle}`}>Pricing</h4> */}

          {/*  */}
          <div className="row mt-5 justify-content-center">
            <div className="col-md-8 col-sm-6">
              <div className={`card  ${styles.liveClassPricingCard}`}>
                <div className="card-body">
                  <h5
                    className={`card-title text-center mb-4 ${styles.liveClassPricingTitle}`}
                  >
                    Program Fee
                  </h5>
                  <p>
                    {" "}
                    <span className="h5">₹ {liveClassDetail?.fees}</span> / Program Fee (incl.
                    taxes)
                  </p>
                  <div className="d-grid gap-2">
                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item border-0 ps-0">
                        <i className="fa-regular text-primary fa-square-check me-2"></i>{" "}
                        EMI options available.
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        <i className="fa-regular text-primary fa-square-check me-2"></i>{" "}
                        2 Free classes
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        <i className="fa-regular text-primary fa-square-check me-2"></i>{" "}
                        Learn at your own pace with maximum flexibility.
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        <i className="fa-regular text-primary fa-square-check me-2"></i>{" "}
                        The refund option is available for seven days.
                      </li>
                    </ul>
                    <NormalButton
                      title="Book Now"
                      className="btn-outline-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 col-sm-6">
              <div className={`card  ${styles.liveClassPricingCard}`}>
                <div className="card-body">
                  <h5
                    className={`card-title text-center mb-4 ${styles.liveClassPricingTitle}`}
                  >
                    Personal
                  </h5>
                  <p>
                    {" "}
                    <span className="h5">₹ 20,000</span> / Program Fee (incl.
                    taxes)
                  </p>
                  <div className="d-grid gap-2">
                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item border-0 ps-0">
                        <i className="fa-regular text-primary fa-square-check me-2"></i>{" "}
                        An item
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        <i className="fa-regular text-primary fa-square-check me-2"></i>{" "}
                        A second item
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        <i className="fa-regular text-primary fa-square-check me-2"></i>{" "}
                        A third item
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        <i className="fa-regular text-primary fa-square-check me-2"></i>{" "}
                        A fourth item
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        <i className="fa-regular text-primary fa-square-check me-2"></i>{" "}
                        And a fifth one
                      </li>
                    </ul>
                    <NormalButton
                      title="Book Now"
                      className="btn-outline-primary"
                      onClick={() => router.push("/liveClasses/detail")}
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
