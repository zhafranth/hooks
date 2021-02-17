import React, { useState, useEffect } from "react";

const defaultNews = {
  status: "ok",
  totalResults: 0,
  articles: [],
};
const endPoint =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=acded96c4c6149b6b8906b5001992449";
const NewsFeed = () => {
  const [news, setNews] = useState(defaultNews);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isRefresh, setRefresh] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${endPoint}&page=${page}`);
        const result = await response.json();
        setNews((current) => {
          return {
            ...result,
            articles: [...current.articles, ...result.articles],
            status: result.status,
            totalResults: result.totalResults,
          };
        });
        if (result.status !== "ok") {
          throw new Error("error");
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchPage();
  }, [page, isRefresh]);
  const handleRefresh = () => {
    setNews(defaultNews);
    setPage(1);
    setLoading(false);
    setRefresh(false);
  };
  console.log(news);
  return (
    <div>
      <h3>Headline News</h3>
      {isLoading == 0 && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      <ol>
        {news.articles.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ol>
      {news.articles.length < parseInt(news.totalResults) ? (
        <button disabled={isLoading} onClick={() => setPage(page + 1)}>
          Load More
        </button>
      ) : null}{" "}
      <button disabled={isLoading} onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  );
};

export default NewsFeed;
