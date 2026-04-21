"use client";

import {
  PantheonProvider,
  PCCConvenienceFunctions,
  useArticle,
} from "@pantheon-systems/cpub-react-sdk";
import { ArticleRenderer } from "@pantheon-systems/cpub-react-sdk/components";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

function ArticleContent() {
  const params = useParams<{ uri: string[] }>();
  const searchParams = useSearchParams();

  const slugOrId = params.uri[params.uri.length - 1];
  const publishingLevel =
    (searchParams.get("publishingLevel") as "PRODUCTION" | "REALTIME") ||
    "PRODUCTION";
  const versionId = searchParams.get("versionId");

  const { data, loading, error } = useArticle(slugOrId, {
    publishingLevel,
    versionId: versionId ?? undefined,
    contentType: "TREE_PANTHEON_V2",
  });

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-brand-text-muted/20 rounded w-3/4" />
          <div className="h-4 bg-brand-text-muted/20 rounded w-1/2" />
          <div className="h-4 bg-brand-text-muted/20 rounded w-full" />
          <div className="h-4 bg-brand-text-muted/20 rounded w-full" />
          <div className="h-4 bg-brand-text-muted/20 rounded w-2/3" />
        </div>
      </div>
    );
  }

  if (error || !data?.article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-brand-text-primary mb-4">
          Article Not Found
        </h1>
        <p className="text-brand-text-muted mb-8">
          The article you&apos;re looking for doesn&apos;t exist or hasn&apos;t
          been published yet.
        </p>
        <Link
          href="/articles"
          className="bg-brand-accent text-brand-primary px-6 py-2.5 rounded-md font-bold hover:opacity-90 transition-opacity"
        >
          Back to Articles
        </Link>
      </div>
    );
  }

  const article = data.article;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="mb-8">
        <Link
          href="/articles"
          className="text-brand-accent hover:text-brand-primary transition-colors font-medium text-sm"
        >
          &larr; Back to Articles
        </Link>
      </nav>

      <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-brand-text-primary prose-a:text-brand-accent">
        <ArticleRenderer article={article} />
      </article>

      {article.tags && article.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-brand-text-muted/20 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ArticlePage() {
  const searchParams = useSearchParams();
  const pccGrant = searchParams.get("pccGrant");

  const client = PCCConvenienceFunctions.buildPantheonClient({
    isClientSide: true,
    pccGrant: pccGrant ?? undefined,
  });

  return (
    <PantheonProvider client={client}>
      <ArticleContent />
    </PantheonProvider>
  );
}
