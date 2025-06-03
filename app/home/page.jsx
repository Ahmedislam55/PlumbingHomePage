import FeedbackPage from "./Feedback/FeedbackPage";
import HaveQuestions from "./HaveQuestions/HaveQuestions";
import HomeImages from "./HomeImages/HomeImages";
import IconsHome from "./Icons/IconsHome";
import NumberPage from "./Number/NumberPage";
import Ourprojects from "./Ourprojects/Ourprojects";
import PipeRepair from "./PipeRepair/PipeRepair";
import PlumbingSolutions from "./PlumbingSolutions/PlumbingSolutions";
import SolvePlumbing from "./SolvePlumbing/SolvePlumbing";

export default function HomePage() {
  return (
    <section>
      <SolvePlumbing />
      <PlumbingSolutions />
      <PipeRepair />
      <Ourprojects />
      <IconsHome />
      <HaveQuestions />
      <FeedbackPage />
      <NumberPage /> 
      <HomeImages />
    </section>

  )
}
