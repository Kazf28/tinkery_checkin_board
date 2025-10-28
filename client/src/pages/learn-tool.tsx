import { useRoute, Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const toolData: Record<string, {
  name: string;
  task: string;
  link: string;
  discussionQuestions: string[];
}> = {
  "chatgpt": {
    name: "ChatGPT (Study and Learn)",
    task: "Click the '+' button next to the chat box and select \"Study and Learn\" from the \"More\" dropdown menu. Then, type in any topic or concept you want to learn about—just as you would in the regular chat mode. You can also upload PDFs or other documents to give the AI additional context and help it tailor explanations and study materials to your content.",
    link: "https://chatgpt.com/",
    discussionQuestions: [
      "Option 1: What specific features or design elements make this tool a learning tool? How does its study mode differ from a regular chatbot experience?",
      "Option 2: Do you think this tool could replace or replicate a teacher's role in explaining academic concepts? Why or why not?",
      "Option 3: From a learning science perspective, what key elements are missing that prevent this AI model from serving as an ideal tutor?"
    ]
  },
  "gemini": {
    name: "Gemini (Guided Learning)",
    task: "Click the \"Tools\" button and select \"Guided Learning.\" Then, enter any topic or concept you'd like to learn about—just as you would in the regular chat mode. You can also upload PDFs or other supporting documents to give the AI additional context, allowing it to tailor its explanations and learning pathway to your materials.",
    link: "https://gemini.google.com/",
    discussionQuestions: [
      "Option 1: What specific features or design elements make this tool a learning tool? How does its study mode differ from a regular chatbot experience?",
      "Option 2: Do you think this tool could replace or replicate a teacher's role in explaining academic concepts? Why or why not?",
      "Option 3: From a learning science perspective, what key elements are missing that prevent this AI model from serving as an ideal tutor?"
    ]
  },
  "perplexity": {
    name: "Perplexity (Study)",
    task: "Click the \"Study\" button (the book icon located below the prompt text box). Then, enter any topic or concept you'd like to learn about—just as you would in the regular chat mode. You can also upload PDFs or other documents to give the AI more context, helping it generate explanations and study materials tailored to your content.",
    link: "https://www.perplexity.ai/",
    discussionQuestions: [
      "Option 1: What specific features or design elements make this tool a learning tool? How does its study mode differ from a regular chatbot experience?",
      "Option 2: Do you think this tool could replace or replicate a teacher's role in explaining academic concepts? Why or why not?",
      "Option 3: From a learning science perspective, what key elements are missing that prevent this AI model from serving as an ideal tutor?"
    ]
  },
  "claude": {
    name: "Claude (Learn)",
    task: "Click the \"Search and tools\" button next to the \"+\" icon, choose \"Use style,\" and then select \"Learn.\" Type in any topic or concept you'd like to study—just as you would in the regular chat mode. You can also upload PDFs or other documents to provide additional context, allowing the AI to personalize its explanations and study materials based on your content.",
    link: "https://claude.ai/",
    discussionQuestions: [
      "Option 1: What specific features or design elements make this tool a learning tool? How does its study mode differ from a regular chatbot experience?",
      "Option 2: Do you think this tool could replace or replicate a teacher's role in explaining academic concepts? Why or why not?",
      "Option 3: From a learning science perspective, what key elements are missing that prevent this AI model from serving as an ideal tutor?"
    ]
  },
  "notebooklm": {
    name: "NotebookLM (Study Guide)",
    task: "Click \"Create new\" and upload any learning material (such as a PDF, Google Doc, or other file) you'd like to study. On the right-hand side, open the \"Studio\" section, select \"Reports,\" and then click \"Study Guide.\" The system will typically take 2–3 minutes to generate your guide, depending on the size and complexity of the uploaded document(s).",
    link: "https://notebooklm.google.com/",
    discussionQuestions: [
      "Option 1: What specific features or design elements make this tool a learning tool? How does its study mode differ from a regular chatbot experience?",
      "Option 2: How does this system compare to a regular chatbot in terms of information reliability? Is it more reliable, or are there ways in which it might still be unreliable or limited when providing information?"
    ]
  },
  "learnabout": {
    name: "LearnAbout (Google)",
    task: "Type any topic or concept you'd like to learn about—just as you would in the regular chat mode. You can also upload PDFs or other documents to give the AI additional context, helping it generate explanations, examples, and study materials tailored to your content.",
    link: "https://learning.google.com/experiments/learn-about?src=signup",
    discussionQuestions: [
      "Option 1: What specific features or design elements make this tool a learning tool? How does its study mode differ from a regular chatbot experience?",
      "Option 2: How does this system compare to a regular chatbot in terms of information reliability? Is it more reliable, or are there ways in which it might still be unreliable or limited when providing information?",
      "Option 3: From a learning science perspective, what key elements are missing that prevent this AI model from serving as an ideal tutor?"
    ]
  }
};

export default function LearnTool() {
  const [, params] = useRoute("/learn-with-ai/:tool");
  const toolSlug = params?.tool || "";
  const tool = toolData[toolSlug];

  if (!tool) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <Link href="/activity/learn-with-ai">
            <Button data-testid="button-back-learn">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Learn with AI
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/activity/learn-with-ai">
          <Button 
            variant="ghost" 
            className="mb-8 hover-elevate"
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Learn with AI
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
                  Try {tool.name.split(' ')[0]}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <Link href="/activity/learn-with-ai">
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
