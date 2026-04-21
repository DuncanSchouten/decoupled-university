import { PCCConvenienceFunctions } from "@pantheon-systems/cpub-react-sdk/server";
import Link from "next/link";
import ArticleClientWrapper from "./article-client-wrapper";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ uri: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ArticlePage({ params, searchParams }: Props) {
  const { uri } = await params;
  const query = await searchParams;
  const slugOrId = uri[uri.length - 1];
  const publishingLevel = ((query.publishingLevel as string) || "PRODUCTION") as
    | "PRODUCTION"
    | "REALTIME";
  const pccGrant = query.pccGrant as string | undefined;

  const article = await PCCConvenienceFunctions.getArticleBySlugOrId(slugOrId, {
    publishingLevel,
    ...(pccGrant ? { pccGrant } : {}),
  }).catch(() => null);

  if (!article) {
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

  return (
    <ArticleClientWrapper
      article={JSON.parse(JSON.stringify(article))}
      publishingLevel={publishingLevel}
      pccGrant={pccGrant}
    />
  );
}
