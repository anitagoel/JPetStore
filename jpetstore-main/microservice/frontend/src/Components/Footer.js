import { useSelector } from "react-redux";

const Footer = () => {
  const { bannerData, authenticated, profileDetails } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="container-fluid footer text-center pt-4 pb-4 mb-2">
      {profileDetails.bannerOption === true &&
        authenticated === true &&
        bannerData !== null && (
          <div
            dangerouslySetInnerHTML={{
              __html: bannerData.bannerName,
            }}
          />
        )}

      <hr />
      <div>
        <p>
          This webapp is a microservices based re-enactment of an existing
          monolithic jPetStore project.
        </p>
        <p>
          
        </p>
      </div>
    </div>
  );
};

export default Footer;
