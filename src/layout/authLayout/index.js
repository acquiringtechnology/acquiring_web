import styles from './authLayout.module.scss';
export const AuthLayout = ({children}) => {
  return (
    <div className={`container-fluid ${styles[`auth-layout`]}`}>
      <div className="row">
        <div className="col-lg-4 d-flex flex-column mt-5 px-5">
        {children}
        </div>
        <div
          className={`${styles[`auth-img`]} col-lg-8 d-sm-none d-md-none  d-lg-block d-flex flex-column justify-content-center align-items-center`}
        ></div>
      </div>
    </div>
  );
};
