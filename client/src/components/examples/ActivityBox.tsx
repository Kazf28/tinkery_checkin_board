import ActivityBox from '../ActivityBox';
import learnAboutImg from "@assets/LEARN ABOUT AI_1759436783293.png";

export default function ActivityBoxExample() {
  return (
    <div className="w-64">
      <ActivityBox 
        title="LEARN ABOUT AI" 
        slug="learn-about-ai" 
        imagePath={learnAboutImg}
      />
    </div>
  );
}
