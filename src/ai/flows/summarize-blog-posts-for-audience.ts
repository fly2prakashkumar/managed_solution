'use server';

/**
 * @fileOverview Summarizes blog posts tailored to specific audiences (executives, developers, general users).
 *
 * - summarizeBlogPost - A function that summarizes a blog post for a given audience.
 * - SummarizeBlogPostInput - The input type for the summarizeBlogPost function.
 * - SummarizeBlogPostOutput - The return type for the summarizeBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBlogPostInputSchema = z.object({
  blogPostContent: z.string().describe('The content of the blog post to summarize.'),
  targetAudience: z
    .enum(['executives', 'developers', 'general users'])
    .describe('The target audience for the summary.'),
});

export type SummarizeBlogPostInput = z.infer<typeof SummarizeBlogPostInputSchema>;

const SummarizeBlogPostOutputSchema = z.object({
  summary: z.string().describe('The summarized blog post tailored to the specified audience.'),
});

export type SummarizeBlogPostOutput = z.infer<typeof SummarizeBlogPostOutputSchema>;

export async function summarizeBlogPost(
  input: SummarizeBlogPostInput
): Promise<SummarizeBlogPostOutput> {
  return summarizeBlogPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBlogPostPrompt',
  input: {schema: SummarizeBlogPostInputSchema},
  output: {schema: SummarizeBlogPostOutputSchema},
  prompt: `You are an expert content summarizer, able to distill complex information into concise and relevant summaries for different audiences.

  Summarize the following blog post for the specified target audience. Focus on the aspects that would be most relevant and interesting to them. Use a tone and level of detail appropriate for the audience.

  Target Audience: {{{targetAudience}}}

  Blog Post Content: {{{blogPostContent}}}
  `,
});

const summarizeBlogPostFlow = ai.defineFlow(
  {
    name: 'summarizeBlogPostFlow',
    inputSchema: SummarizeBlogPostInputSchema,
    outputSchema: SummarizeBlogPostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
