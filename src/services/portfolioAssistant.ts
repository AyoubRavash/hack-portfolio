import OpenAI from "openai";

type ChatMessage = {
    role: "assistant" | "user";
    content: string;
};

type AskPortfolioAssistantOptions = {
    context: string;
    language: string;
    messages: ChatMessage[];
};

const getConfigurationError = () => {
    if (!import.meta.env.OPEN_AI_API_KEY || !import.meta.env.OPEN_AI_MODEL) {
        return "The portfolio assistant is not configured yet. Please try again later or use the contact page to reach Ayoub.";
    }

    return null;
};

export const askPortfolioAssistant = async ({
    context,
    language,
    messages,
}: AskPortfolioAssistantOptions) => {
    const configurationError = getConfigurationError();

    if (configurationError) {
        return configurationError;
    }

    const client = new OpenAI({
        apiKey: import.meta.env.OPEN_AI_API_KEY,
        baseURL: import.meta.env.OPEN_AI_BASE_URL || undefined,
        dangerouslyAllowBrowser: true,
    });
    const conversation = messages.slice(-8).map((message) => (
        `${message.role === "user" ? "Visitor" : "Assistant"}: ${message.content}`
    )).join("\n");
    const response = await client.responses.create({
        model: import.meta.env.OPEN_AI_MODEL,
        instructions: `You are Ayoub Ravash's helpful portfolio guide. Reply in ${language === "fa" ? "Persian" : "English"}.
Use only the portfolio information below. Answer only about Ayoub, his work, skills, experience, projects, availability, or contact details.
If a question is unrelated, politely explain that you focus on Ayoub's portfolio and professional background.
Keep answers concise, friendly, professional, and factually grounded. When appropriate, encourage the visitor to contact Ayoub using the exact provided contact details. Do not invent information.
When a visitor asks what Ayoub can do, the quality of his work, his strengths, or whether he is a good fit, present his capabilities confidently and positively using only the portfolio facts. Highlight relevant strengths such as reliable and scalable systems, responsive and user-friendly web experiences, and full-stack development when supported by the context. Do not exaggerate or claim unlisted results.

Portfolio information:
${context}`,
        input: conversation,
    });

    return response.output_text.trim() || "I’m sorry, I couldn’t prepare an answer. Please try again.";
};
