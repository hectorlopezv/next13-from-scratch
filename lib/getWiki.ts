type Props = {};

export default async function getWikiResults(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exhars: "100",
    exintro: "true",
    explainText: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });
  const response = await fetch(
    "https://en.wikipedia.org/w/api.php?" + searchParams.toString(),
    {
      cache: "no-cache",
    }
  );
  return response.json();
}
