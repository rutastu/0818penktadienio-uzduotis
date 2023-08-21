import MiddleSection from "../MiddleSection/MiddleSection";
import mobile from "./mobile.jpg";

const DownloadSection = () => {
  return (
    <MiddleSection
      title="Download your shows to watch offlineWatch everywhere"
      paragraph="Save your favorites easily and always have something to watch."
      sectionImage={mobile}
      reverse={true}
    />
  );
};

export default DownloadSection