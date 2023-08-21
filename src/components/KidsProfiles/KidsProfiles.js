import MiddleSection from "../MiddleSection/MiddleSection";
import kidsProfiles from "./kidsProfiles.png";

const KidsProfiles = () => {
  return (
    <MiddleSection
      title="Create profiles for kids"
      paragraph="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      sectionImage={kidsProfiles}
      reverse={true}
    />
  );
};

export default KidsProfiles