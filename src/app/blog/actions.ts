"use server";

import { summarizeBlogPost, type SummarizeBlogPostInput } from "@/ai/flows/summarize-blog-posts-for-audience";

export async function summarizePost(input: SummarizeBlogPostInput) {
    try {
        const result = await summarizeBlogPost(input);
        return result;
    } catch (error) {
        console.error("Error summarizing post:", error);
        throw new Error("Failed to summarize the blog post.");
    }
}
