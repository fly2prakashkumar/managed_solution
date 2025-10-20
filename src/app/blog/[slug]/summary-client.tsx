"use client";

import { useState } from "react";
import { summarizePost } from "@/app/blog/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

type Audience = "executives" | "developers" | "general users";

export default function SummaryClient({ content }: { content: string }) {
  const [audience, setAudience] = useState<Audience | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async (targetAudience: Audience) => {
    setAudience(targetAudience);
    setLoading(true);
    setError(null);
    setSummary(null);

    try {
      const result = await summarizePost({
        blogPostContent: content,
        targetAudience: targetAudience,
      });
      setSummary(result.summary);
    } catch (e) {
      setError("Failed to generate summary. Please try again.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const audiences: { id: Audience; label: string }[] = [
    { id: "executives", label: "For Executives" },
    { id: "developers", label: "For Developers" },
    { id: "general users", label: "For General Users" },
  ];

  return (
    <Card className="mt-12 border-accent bg-accent/5">
      <CardHeader>
        <CardTitle className="font-headline">Too Long; Didn't Read?</CardTitle>
        <CardDescription>
          Get a summary of this post tailored to your interests, powered by AI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-2">
          {audiences.map((aud) => (
            <Button
              key={aud.id}
              variant={audience === aud.id ? "default" : "outline"}
              onClick={() => handleSummarize(aud.id)}
              disabled={loading}
            >
              {aud.label}
            </Button>
          ))}
        </div>

        {loading && (
          <div className="space-y-2 pt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )}

        {error && (
          <Alert variant="destructive" className="mt-4">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {summary && (
          <div className="mt-4 rounded-md border bg-background p-4 text-sm">
            <p className="whitespace-pre-wrap">{summary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
