import type { Metadata } from "next";
import Link from "next/link";
import { PCCConvenienceFunctions } from "@pantheon-systems/cpub-react-sdk/server";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Articles",
};

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  const { data: articles } = await PCCConvenienceFunctions.getPaginatedArticles({
    pageSize: 20,
  });

  return (
    <>
      <Hero title="Articles" subtitle="News and updates from Decoupled University." size="compact" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Latest Articles" />

          {articles.length === 0 ? (
            <p className="text-center text-brand-text-muted text-lg">
              No articles published yet. Publish content from Google Docs using the Content Publisher add-on.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.slug || article.id}`}
                  className="group bg-brand-surface rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="h-1 bg-brand-accent" />
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-brand-text-primary mb-2 group-hover:text-brand-accent transition-colors">
                      {article.title || "Untitled"}
                    </h3>
                    {article.updatedAt && (
                      <p className="text-brand-text-muted text-sm">
                        {new Date(article.updatedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    )}
                    {article.tags && article.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-brand-accent/10 text-brand-accent px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
