"use client";

import { useEffect, useState } from "react";

const CATEGORIES = ["AI","Sports","Entertainment","Culture","Tech","Business","World","Finance"];

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then(res => res.json())
      .then(setNews)
      .catch(() => {
        setNews(
          CATEGORIES.map(c => ({
            id: c,
            title: `${c} Update`,
            summary: "Latest developments shaping the world.",
            category: c
          }))
        );
      });
  }, []);

  return (
    <main>
      <h1 style={{ fontSize: 48, textAlign: "center" }}>FOUR WEEKS</h1>

      {CATEGORIES.map(cat => (
        <section key={cat}>
          <h2>{cat}</h2>
          {news.filter(n => n.category === cat).map(n => (
            <p key={n.id}>{n.title}</p>
          ))}
        </section>
      ))}
    </main>
  );
}
