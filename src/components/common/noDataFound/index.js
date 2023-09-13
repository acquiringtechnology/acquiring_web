/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
export const NodataFound = ({
  img = "/img/noDataFound.svg",
  title = "No Data Found",
  subTitle = "",
}) => {
    const router = useRouter()

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        {/* <h1 className="display-1 fw-bold">500</h1> */}
        <img className={`img-fluid mb-2`} alt="nodataFOund" src={img} />
        <p className="fs-3">
          {" "}
          <span className="text-danger">Oops!</span> {title}
        </p>
        {subTitle && <p className="lead">{subTitle}</p>}
        <button onClick={() => router.back()}  className="btn btn-primary">
        Back to page
        </button>
      </div>
    </div>
  );
};
