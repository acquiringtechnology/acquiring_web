export const WebinarsBanners = ({ bannerImage = "" }) => {
  return (
    <div className="row mb-5" >
      <div className="col-md-12">
        <div className="">
          <img  style={{maxHeight:'500px'}} src={bannerImage} className="img-fluid w-100" />
        </div>
      </div>
    </div>
  );
};
