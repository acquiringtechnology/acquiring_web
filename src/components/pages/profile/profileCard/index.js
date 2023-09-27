import { useEffect } from "react";
import styles from "./profileCard.module.scss";

export const ProfileCard = ({userDetails}) => {
useEffect(()=>{
    
console.log('userDetails-----2',userDetails)
})

  return (
    <div className={styles.profileCardContiner}>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div
                className={`d-flex align-items-center ${styles.imgProfileCard}`}
              >
                <div className="flex-shrink-0">
                  <img
                    src="https://themicon.co/theme/angle/v4.8.1/material/assets/img/user/02.jpg"
                    alt="Contact"
                    className="img-fluid rounded-circle img-thumbnail thumb96"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className={`mb-0 ${styles.profileName}`}>{userDetails?.name?.fName  || '-'} {userDetails?.name?.lName  || '-'}</h4>
                  {/* <span className={styles.profileProfession}>
                    Working Professional
                  </span> */}
                  <span className={styles.profileLocation}>
                    {/* Thiruthani, Tamil Nadu, India */}
                    C{userDetails?.userCode || '-'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-12">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      Email ID{" "}
                      <i
                        className="fa-solid fa-circle-check text-success"
                        title="Verified"
                      />
                    </td>
                    <td>{userDetails?.email  || '-'}</td>
                  </tr>
                  <tr>
                    <td>
                      Mobile Number{" "}
                      <i
                        className="fa-solid fa-circle-xmark text-danger"
                        title="unverified"
                      />
                    </td>
                    <td>{userDetails?.phone || '-'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
