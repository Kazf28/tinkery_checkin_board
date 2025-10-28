import ActivityBox from "@/components/ActivityBox";
import RandomButton from "@/components/RandomButton";
import learnAboutImg from "@assets/LEARN ABOUT AI_1759436783293.png";
import learnWithImg from "@assets/LEARN WITH AI_1759436783294.png";
import createWithImg from "@assets/CREATE WITH AI_1759436788244.png";
import critiqueImg from "@assets/CRITIQUE AI_1759436788246.png";
import researchWithImg from "@assets/RESEARCH WITH AI_1759436798595.png";
import shapeImg from "@assets/SHAPE AI_1759436798603.png";
import teachWithImg from "@assets/TEACH ABOUT AI_1759436816856.png";
import teachAboutImg from "@assets/TEACH ABOUT AI_1759437022456.png";

const activities = [
  {
    title: "LEARN ABOUT AI",
    slug: "learn-about-ai",
    imagePath: learnAboutImg,
  },
  {
    title: "LEARN WITH AI",
    slug: "learn-with-ai",
    imagePath: learnWithImg,
  },
  {
    title: "TEACH WITH AI",
    slug: "teach-with-ai",
    imagePath: teachWithImg,
  },
  {
    title: "TEACH ABOUT AI",
    slug: "teach-about-ai",
    imagePath: teachAboutImg,
  },
  {
    title: "CRITIQUE AI",
    slug: "critique-ai",
    imagePath: critiqueImg,
  },
  {
    title: "CREATE WITH AI",
    slug: "create-with-ai",
    imagePath: createWithImg,
  },
  {
    title: "SHAPE AI",
    slug: "shape-ai",
    imagePath: shapeImg,
  },
  {
    title: "RESEARCH WITH AI",
    slug: "research-with-ai",
    imagePath: researchWithImg,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Striped header */}
      <div 
        className="absolute top-0 left-0 right-0 h-12 md:h-16 z-0"
        style={{
          background: 'repeating-linear-gradient(45deg, #000 0px, #000 20px, #FDB813 20px, #FDB813 40px)',
        }}
      />
      
      {/* Orange background with radial sunburst */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 50% 30%, 
              rgba(255, 107, 67, 0.4) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 800px 400px at 50% 30%, 
              #ff6b43 0%, 
              #ff5733 40%,
              #e8491d 100%
            )
          `,
        }}
      />

      {/* Decorative dots */}
      <div className="absolute inset-0 -z-10 opacity-30">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-red-600"
            style={{
              width: Math.random() * 40 + 10 + 'px',
              height: Math.random() * 40 + 10 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 font-playful uppercase"
              data-testid="text-main-title"
              style={{
                color: 'white',
                textShadow: '4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 0px 4px 0px #000',
              }}
            >
              TINKERY CHECK-IN
            </h1>
            <p 
              className="text-3xl md:text-5xl font-bold font-playful leading-tight"
              data-testid="text-subtitle"
              style={{
                color: '#7B3FF2',
                textShadow: '3px 3px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff',
              }}
            >
              What will you PLAY &<br />TINKER with today?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {activities.map((activity) => (
              <ActivityBox
                key={activity.slug}
                title={activity.title}
                slug={activity.slug}
                imagePath={activity.imagePath}
              />
            ))}
          </div>
        </div>
      </div>

      <RandomButton />
    </div>
  );
}
