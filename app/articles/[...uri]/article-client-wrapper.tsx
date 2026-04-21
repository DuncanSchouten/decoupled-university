"use client";

import {
  PantheonProvider,
  PCCConvenienceFunctions,
  updateConfig,
  useArticle,
  type Article,
  type PublishingLevel,
} from "@pantheon-systems/cpub-react-sdk";
import { ArticleRenderer } from "@pantheon-systems/cpub-react-sdk/components";
import Link from "next/link";
import { useMemo } from "react";

updateConfig({
  pccHost: (process.env.PCC_HOST || process.env.NEXT_PUBLIC_PCC_HOST) as string,
  siteId: (process.env.PCC_SITE_ID ||
    process.env.NEXT_PUBLIC_PCC_SITE_ID) as string,
});

function ArticleView({
  article,
  publishingLevel,
}: {
  article: Article;
  publishingLevel: keyof typeof PublishingLevel;
}) {
  const { data } = useArticle(
    article.id,
    {
      publishingLevel,
      contentType: "TREE_PANTHEON_V2",
    },
    { skip: publishingLevel !== "REALTIME" },
  );

  const liveArticle = useMemo(
    () => data?.article ?? article,
    [data, article],
  );

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
        <ArticleRenderer article={liveArticle} />
      </article>

      {liveArticle.tags && liveArticle.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-brand-text-muted/20 flex flex-wrap gap-2">
          {liveArticle.tags.map((tag) => (
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

export default function ArticleClientWrapper({
  article,
  publishingLevel,
  pccGrant,
}: {
  article: Article;
  publishingLevel: keyof typeof PublishingLevel;
  pccGrant?: string;
}) {
  const client = PCCConvenienceFunctions.buildPantheonClient({
    isClientSide: true,
    pccGrant: pccGrant ?? undefined,
  });

  return (
    <PantheonProvider client={client}>
      <ArticleView article={article} publishingLevel={publishingLevel} />
    </PantheonProvider>
  );
}
