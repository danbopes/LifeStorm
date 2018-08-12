const url =
  "https://newsapi.org/v2/top-headlines?country=ch&apiKey=632a69ca288c49f8a600fa7774ed778f";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
