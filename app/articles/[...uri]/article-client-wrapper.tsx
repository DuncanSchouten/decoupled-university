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
import React, { useMemo } from "react";

const STYLES_TO_STRIP = [
  /fontSize/,
  /fontWeight/,
  /padding(Left|Right|Top|Bottom)*/,
  /margin(Left|Right|Top|Bottom)*/,
  /lineHeight/,
  /height/,
];

function stripInlineStyles<T extends keyof React.JSX.IntrinsicElements>(
  tag: T,
) {
  function StyledElement({
    children,
    id,
    style,
    ...attrs
  }: React.JSX.IntrinsicElements[T] & { node?: unknown }) {
    const cleaned = { ...style };
    STYLES_TO_STRIP.forEach((pattern) => {
      Object.keys(cleaned).forEach((key) => {
        if (pattern.test(key)) delete cleaned[key as keyof typeof cleaned];
      });
    });
    return React.createElement(tag, { id, style: cleaned, ...attrs }, children);
  }
  return StyledElement;
}

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
        <ArticleRenderer
          article={liveArticle}
          componentMap={{
            h1: stripInlineStyles("h1"),
            h2: stripInlineStyles("h2"),
            h3: stripInlineStyles("h3"),
            h4: stripInlineStyles("h4"),
            h5: stripInlineStyles("h5"),
            h6: stripInlineStyles("h6"),
            p: stripInlineStyles("p"),
            li: stripInlineStyles("li"),
            span: stripInlineStyles("span"),
          }}
          __experimentalFlags={{
            preserveImageStyles: true,
          }}
        />
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
