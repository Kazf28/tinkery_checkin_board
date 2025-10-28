import { useRoute, Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const toolData: Record<string, {
  name: string;
  task: string;
  link: string;
  discussionQuestions: string[];
}> = {
  "khanmigo": {
    name: "Khanmigo",
    task: "There are 25 different tools you can experiment with, offering a wide range of functions—from generating discussion prompts and lesson plans to creating multiple-choice questions and even recommendation letters. Explore and try out any tools that spark your interest!",
    link: "https://www.khanacademy.org/teacher/khanmigo-tools",
    discussionQuestions: [
      "Option 1: Which tools did you find most useful, and which ones did you find less effective? Why? (Consider which teaching tasks should be done by teachers themselves rather than relying on AI.)",
      "Option 2: What potential risks or challenges might arise when teachers use these AI tools to generate materials for students?",
      "Option 3: This platform is specifically designed for educational use, unlike general-purpose AI tools. What differences do you notice between the teaching resources created by this platform and those produced by generic AI models?"
    ]
  },
  "magicschool": {
    name: "Magic School AI",
    task: "There are 87 tools available for you to explore, offering a wide range of features—from generating writing feedback, lesson plans, and multiple-choice questions to even creating recommendation letters. Try out any tools that interest or inspire you!",
    link: "https://app.magicschool.ai/tools",
    discussionQuestions: [
      "Option 1: Which tools did you find most useful, and which ones did you find less effective? Why? (Consider which teaching tasks should be done by teachers themselves rather than relying on AI.)",
      "Option 2: What potential risks or challenges might arise when teachers use these AI tools to generate materials for students?",
      "Option 3: This platform is specifically designed for educational use, unlike general-purpose AI tools. What differences do you notice between the teaching resources created by this platform and those produced by generic AI models?"
    ]
  },
  "diffit": {
    name: "Diffit",
    task: "Select the \"Literally Anything\" option and enter any topic you'd like to teach as your prompt. You can then choose the language and grade level from the dropdown menu. The tool will take a few minutes to generate all related materials. Once complete, you can import the worksheets into Google Docs or other platforms, and manually edit them as needed.",
    link: "https://app.diffit.me/#topic",
    discussionQuestions: [
      "Option 1: What potential risks or challenges might arise when teachers use these AI tools to generate materials for students?",
      "Option 2: This platform is specifically designed for educational use, unlike general-purpose AI tools. What differences do you notice between the teaching resources created by this platform and those produced by generic AI models?"
    ]
  }
};

export default function TeachTool() {
  const [, params] = useRoute("/teach-with-ai/:tool");
  const toolSlug = params?.tool || "";
  const tool = toolData[toolSlug];

  if (!tool) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <Link href="/activity/teach-with-ai">
            <Button data-testid="button-back-teach">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Teach with AI
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/activity/teach-with-ai">
          <Button 
            variant="ghost" 
            className="mb-8 hover-elevate"
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Teach with AI
          </Button>
        </Link>

        <div className="bg-card rounded-3xl border-4 border-border p-8 md:p-12 space-y-8">
          <div>
            <h1 
              className="text-4xl md:text-5xl font-bold font-playful mb-4"
              data-testid="text-tool-title"
            >
              {tool.name}
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-playful mb-3">Task</h2>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-task">
                {tool.task}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-playful mb-3">Link</h2>
              <a 
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg text-primary hover:underline"
                data-testid="link-external"
              >
                {tool.link}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-playful mb-4">Discussion Questions</h2>
              <ul className="space-y-4">
                {tool.discussionQuestions.map((question, index) => (
                  <li 
                    key={index}
                    className="text-lg text-muted-foreground leading-relaxed pl-6 relative"
                    data-testid={`text-question-${index + 1}`}
                  >
                    <span className="absolute left-0">•</span>
                    {question}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 flex gap-4 flex-wrap">
              <a 
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="hover-elevate active-elevate-2"
                  data-testid="button-try-tool"
                >
                  Try {tool.name}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <Link href="/activity/teach-with-ai">
                <Button 
                  size="lg"
                  variant="outline"
                  className="hover-elevate active-elevate-2"
                  data-testid="button-back-tools"
                >
                  Back to All Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
