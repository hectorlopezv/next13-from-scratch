import getWikiResults from "@/lib/getWiki";
import Item from "../components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResult({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const results: Result[] | undefined = data.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result, index) => (
          <Item key={result.pageid} result={result} />
        ))
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm}`}</h2>
      )}
    </main>
  );
  return content;
}
export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replace("%20", " ");
  if (!data?.query?.pages) {
    return {
      title: `No results found for ${displayTerm}`,
    };
  }
  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}
