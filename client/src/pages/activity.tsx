import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import learnAboutImg from "@assets/LEARN ABOUT AI_1759436783293.png";
import learnWithImg from "@assets/LEARN WITH AI_1759436783294.png";
import createWithImg from "@assets/CREATE WITH AI_1759436788244.png";
import critiqueImg from "@assets/CRITIQUE AI_1759436788246.png";
import researchWithImg from "@assets/RESEARCH WITH AI_1759436798595.png";
import shapeImg from "@assets/SHAPE AI_1759436798603.png";
import teachWithImg from "@assets/TEACH ABOUT AI_1759436816856.png";
import teachAboutImg from "@assets/TEACH ABOUT AI_1759437022456.png";

const activityData: Record<string, { title: string; colorClass: string; imagePath: string; description: string }> = {
  "learn-about-ai": {
    title: "LEARN ABOUT AI",
    colorClass: "activity-learn-about",
    imagePath: learnAboutImg,
    description: "Explore the fundamentals of artificial intelligence and understand how it works.",
  },
  "learn-with-ai": {
    title: "LEARN WITH AI",
    colorClass: "activity-learn-with",
    imagePath: learnWithImg,
    description: "Use AI as your learning companion to enhance your educational journey.",
  },
  "teach-with-ai": {
    title: "TEACH WITH AI",
    colorClass: "activity-teach-with",
    imagePath: teachWithImg,
    description: "Leverage AI tools to create engaging lessons and support your teaching.",
  },
  "teach-about-ai": {
    title: "TEACH ABOUT AI",
    colorClass: "activity-teach-about",
    imagePath: teachAboutImg,
    description: "Educate others about artificial intelligence and its impact on society.",
  },
  "critique-ai": {
    title: "CRITIQUE AI",
    colorClass: "activity-critique",
    imagePath: critiqueImg,
    description: "Think critically about AI systems, their limitations, and ethical implications.",
  },
  "create-with-ai": {
    title: "CREATE WITH AI",
    colorClass: "activity-create",
    imagePath: createWithImg,
    description: "Use AI as a creative tool to bring your artistic visions to life.",
  },
  "shape-ai": {
    title: "SHAPE AI",
    colorClass: "activity-shape",
    imagePath: shapeImg,
    description: "Participate in shaping the future of AI through feedback and collaboration.",
  },
  "research-with-ai": {
    title: "RESEARCH WITH AI",
    colorClass: "activity-research",
    imagePath: researchWithImg,
    description: "Conduct research and analysis with AI-powered tools and insights.",
  },
};

export default function Activity() {
  const [, params] = useRoute("/activity/:slug");
  const slug = params?.slug || "";
  const activity = activityData[slug];

  if (!activity) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Activity Not Found</h1>
          <Link href="/">
            <Button data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Check-In
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button 
            variant="ghost" 
            className="mb-8 hover-elevate"
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Check-In
          </Button>
        </Link>

        <div 
          className={`rounded-3xl border-4 border-${activity.colorClass} bg-card p-8 md:p-12`}
          style={{
            borderColor: `hsl(var(--activity-${activity.colorClass}))`,
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 flex-shrink-0">
              <img 
                src={activity.imagePath} 
                alt={activity.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 
              className="text-4xl md:text-5xl font-bold font-playful"
              style={{ color: `hsl(var(--activity-${activity.colorClass}))` }}
              data-testid="text-activity-title"
            >
              {activity.title}
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-muted-foreground" data-testid="text-activity-description">
              {activity.description}
            </p>

            {slug === "research-with-ai" ? (
              <div className="mt-8 space-y-6">
                <div className="p-6 bg-background/50 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4 font-playful">General Idea</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      AI can support your research process in many ways. Below, we highlight three key applications that enhance your learning while maintaining academic integrity:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 pl-4">
                      <li>Identifying relevant research papers</li>
                      <li>Exploring networks and relationships among studies</li>
                      <li>Summarizing and understanding connections between papers</li>
                    </ol>
                    <p className="font-semibold pt-2">A typical AI-assisted research workflow might look like this:</p>
                    <p>
                      Start with a tool like Perplexity to identify a core research paper central to your topic. Then, use Research Rabbit to expand your network of related papers and visualize how they connect. Once you have a collection of papers that interest you, upload them as "reference documents" into NotebookLM, where you can ask questions and generate summaries through a conversational interface.
                    </p>
                    <p>
                      Alternatively, you can use Deep Research features available in some commercial LLMs to automatically find relevant research papers, extract their main ideas, and generate a structured report that highlights how these works interrelate.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/research-with-ai/research-rabbit">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-research-rabbit"
                    >
                      Research Rabbit
                    </Button>
                  </Link>

                  <Link href="/research-with-ai/commercial-ai-tools">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-commercial-ai"
                    >
                      Commercial AI Tools
                    </Button>
                  </Link>

                  <Link href="/research-with-ai/deep-research-tools">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-deep-research"
                    >
                      Deep Research Tools
                    </Button>
                  </Link>

                  <Link href="/research-with-ai/notebooklm">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-notebooklm-research"
                    >
                      NotebookLM
                    </Button>
                  </Link>
                </div>

                <div className="mt-8">
                  <Link href="/">
                    <Button 
                      size="lg"
                      style={{ 
                        backgroundColor: `hsl(var(--activity-${activity.colorClass}))`,
                        color: 'white',
                      }}
                      className="hover-elevate active-elevate-2"
                      data-testid="button-try-another"
                    >
                      Try Another Activity
                    </Button>
                  </Link>
                </div>
              </div>
            ) : slug === "teach-with-ai" ? (
              <div className="mt-8 space-y-6">
                <div className="p-6 bg-background/50 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4 font-playful">General Idea</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Khanmigo and Magic School AI both offer a wide range of free tools that teachers can use to generate lesson plans and other classroom materials. Khanmigo integrates directly with Khan Academy's educational resources, providing strong curriculum alignment, while Magic School AI offers over three times as many tools as Khanmigo, giving teachers more flexibility and creative options. In contrast, Diffit provides a more limited set of tools but stands out by generating comprehensive lesson guides—including terminology lists, summaries, quizzes, and activity worksheets—available in multiple languages.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/teach-with-ai/khanmigo">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-khanmigo"
                    >
                      Khanmigo
                    </Button>
                  </Link>

                  <Link href="/teach-with-ai/magicschool">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-magicschool"
                    >
                      Magic School AI
                    </Button>
                  </Link>

                  <Link href="/teach-with-ai/diffit">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-diffit"
                    >
                      Diffit
                    </Button>
                  </Link>
                </div>

                <div className="mt-8">
                  <Link href="/">
                    <Button 
                      size="lg"
                      style={{ 
                        backgroundColor: `hsl(var(--activity-${activity.colorClass}))`,
                        color: 'white',
                      }}
                      className="hover-elevate active-elevate-2"
                      data-testid="button-try-another"
                    >
                      Try Another Activity
                    </Button>
                  </Link>
                </div>
              </div>
            ) : slug === "learn-with-ai" ? (
              <div className="mt-8 space-y-6">
                <div className="p-6 bg-background/50 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4 font-playful">General Idea</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Explore different "study modes" across AI learning platforms to understand each tool's unique strengths and limitations.
                    </p>
                    <p>
                      Tools like ChatGPT, Gemini, Perplexity, and Claude offer interactive study modes that guide you through concepts step by step — helping you reflect, test understanding, and scaffold new knowledge. In contrast, NotebookLM focuses on resource-based learning: it can automatically generate complete study sets (e.g., summaries, key terms, and quizzes) from uploaded materials such as PDFs or Google Docs. Meanwhile, LearnAbout curates detailed explanations and summaries about any topic you want to explore.
                    </p>
                    <p>
                      To get the most out of these tools, try using the same prompts and learning topics across multiple platforms (including their regular chatbot modes). Compare how each tool structures explanations, handles examples, and engages you in the learning process - and reflect on which one best fits your personal learning style.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/learn-with-ai/chatgpt">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-chatgpt"
                    >
                      ChatGPT (Study and learn)
                    </Button>
                  </Link>

                  <Link href="/learn-with-ai/perplexity">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-perplexity"
                    >
                      Perplexity (Study)
                    </Button>
                  </Link>

                  <Link href="/learn-with-ai/gemini">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-gemini"
                    >
                      Gemini (Guided Learning)
                    </Button>
                  </Link>

                  <Link href="/learn-with-ai/claude">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-claude"
                    >
                      Claude (Learn)
                    </Button>
                  </Link>

                  <Link href="/learn-with-ai/notebooklm">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-notebooklm"
                    >
                      NotebookLM (Study Guide)
                    </Button>
                  </Link>

                  <Link href="/learn-with-ai/learnabout">
                    <Button 
                      size="lg"
                      className="w-full hover-elevate active-elevate-2"
                      variant="outline"
                      data-testid="button-google-learn"
                    >
                      Google Learn About
                    </Button>
                  </Link>
                </div>

                <div className="mt-8">
                  <Link href="/">
                    <Button 
                      size="lg"
                      style={{ 
                        backgroundColor: `hsl(var(--activity-${activity.colorClass}))`,
                        color: 'white',
                      }}
                      className="hover-elevate active-elevate-2"
                      data-testid="button-try-another"
                    >
                      Try Another Activity
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="mt-8 p-6 bg-background/50 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4 font-playful">Ready to Start?</h2>
                  <p className="text-muted-foreground">
                    This is your space to explore and tinker! The activity content and interactive elements will be added here.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/">
                    <Button 
                      size="lg"
                      style={{ 
                        backgroundColor: `hsl(var(--activity-${activity.colorClass}))`,
                        color: 'white',
                      }}
                      className="hover-elevate active-elevate-2"
                      data-testid="button-try-another"
                    >
                      Try Another Activity
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
