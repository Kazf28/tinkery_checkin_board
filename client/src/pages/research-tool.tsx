import { useRoute, Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const toolData: Record<string, {
  name: string;
  task: string;
  links: { url: string; label: string }[];
  discussionQuestions: string[];
}> = {
  "research-rabbit": {
    name: "Research Rabbit",
    task: "Click \"New Collection\" at the top left corner and name the collection. Click \"Add Papers\" to add any paper you are using as your base reference literature for your study. Once you select the uploaded paper, click \"Similar Work\" to see a network graph illustrating how the paper is related to another paper, both through the content and through its citations (digging down the rabbit hole). Once you find a paper that interests you, you can add it to the collection and it will update the network graph based on the common theme in your collection.",
    links: [
      { url: "https://www.researchrabbit.ai/", label: "Research Rabbit" }
    ],
    discussionQuestions: [
      "Option 1: Comparing with other ways of finding research papers (e.g. Google Scholar), what is the advantage of using this tool? Is there any noticeable limitation?",
      "Option 2: What kind of AI algorithm is used behind this tool? (It is not a GenAI tools like other ones)"
    ]
  },
  "commercial-ai-tools": {
    name: "Commercial AI Tools",
    task: "Input prompt as \"I am doing research on [YOUR RESEARCH TOPIC]. Provide me with 3 well-cited research papers that are relevant to my research [you can also include your focus, such as methodology or theories]\" You can try this with different tools and see which model provides you with papers that align well with your study.",
    links: [
      { url: "https://chatgpt.com/", label: "ChatGPT" },
      { url: "https://gemini.google.com/", label: "Gemini" },
      { url: "https://www.perplexity.ai/", label: "Perplexity" },
      { url: "https://claude.ai/", label: "Claude" }
    ],
    discussionQuestions: [
      "Option 1: How reliable are the sources provided by each model? Is there a trend? (e.g. relevant concepts but has limited citations)",
      "Option 2: Is it a good starting point to use AI for the initial paper search, or should you find the first paper manually?"
    ]
  },
  "deep-research-tools": {
    name: "Deep Research Tools",
    task: "Type the following prompt to guide the AI: \"I am doing research on [YOUR RESEARCH TOPIC]. First, identify several research papers that closely align with this topic. Then, provide a comprehensive summary explaining the key ideas discussed in each paper, how they connect to one another, and how they relate to my overall research topic.\" You can try using this prompt across different AI tools to compare which one provides the most comprehensive and coherent summary of your topic of interest.",
    links: [
      { url: "https://chatgpt.com/", label: "ChatGPT" },
      { url: "https://gemini.google.com/", label: "Gemini" },
      { url: "https://www.perplexity.ai/", label: "Perplexity" }
    ],
    discussionQuestions: [
      "Option 1: What are your thoughts on using a deep research–generated report as the related work section of an academic paper? What potential issues or limitations might arise from doing so (beyond concerns about academic integrity)?",
      "Option 2: How does the output from deep research mode compare to that of a regular chat mode? In what ways is it better, worse, or simply different in terms of depth, accuracy, or usefulness?"
    ]
  },
  "notebooklm": {
    name: "NotebookLM",
    task: "Upload the research papers you've collected as resources into your notebook. From there, you can generate Reports by clicking the button on the right-hand side and selecting the type of report you'd like the AI to create. You can either enter your own prompt or choose from the provided templates, which will automatically summarize the key ideas discussed across your papers. You can also generate an Audio Overview or Video Overview, which provide spoken or visual summaries of your paper collection. The video overview presents a slideshow-style summary with narration that walks you through each slide. Finally, selecting Mind Map will generate a concept map connecting the main ideas from your uploaded papers—helping you visualize relationships and themes across your research sources.",
    links: [
      { url: "https://notebooklm.google.com/", label: "NotebookLM" }
    ],
    discussionQuestions: [
      "Option 1: Which feature (Reports, Audio Overview, Video Overview, or Mind Map) did you find most useful for understanding your topic, and why?",
      "Option 2: NotebookLM is designed to respond only based on the resources you provide. How did this constraint influence the quality or scope of its responses? Were there any noticeable limitations or gaps that resulted from this approach?"
    ]
  }
};

export default function ResearchTool() {
  const [, params] = useRoute("/research-with-ai/:tool");
  const toolSlug = params?.tool || "";
  const tool = toolData[toolSlug];

  if (!tool) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <Link href="/activity/research-with-ai">
            <Button data-testid="button-back-research">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Research with AI
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/activity/research-with-ai">
          <Button 
            variant="ghost" 
            className="mb-8 hover-elevate"
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Research with AI
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
              <h2 className="text-2xl font-bold font-playful mb-3">
                {tool.links.length > 1 ? "Links" : "Link"}
              </h2>
              <div className="space-y-2">
                {tool.links.map((link, index) => (
                  <div key={index}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg text-primary hover:underline"
                      data-testid={`link-external-${index + 1}`}
                    >
                      {link.label}: {link.url}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
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
              {tool.links.length === 1 ? (
                <a 
                  href={tool.links[0].url}
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
              ) : (
                <div className="w-full">
                  <p className="text-sm text-muted-foreground mb-3">Try any of these tools:</p>
                  <div className="flex gap-3 flex-wrap">
                    {tool.links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          size="lg"
                          className="hover-elevate active-elevate-2"
                          data-testid={`button-try-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {link.label}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <Link href="/activity/research-with-ai">
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
