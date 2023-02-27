import BookCard from "@/components/BookCard";
import { Doc, SearchRes } from "@/utils/api";
import { FormEvent, useState } from "react";

export default function Home() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const onBookSearch = async (event: FormEvent<HTMLFormElement>) => {
    if (query === "") {
      return;
    }
    event.preventDefault();
    setLoading(true);
    const modifiedQuery = query.toLowerCase().split(" ").join("+");
    try {
      const getSearchBook = await fetch(`https://openlibrary.org/search.json?q=${modifiedQuery}`);
      if (getSearchBook.ok) {
        const booksRes = (await getSearchBook.json()) as SearchRes;
        setLoading(false);
        setDocs(booksRes.docs);
        setQuery("");
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 ">
      <h1 className="text-3xl font-semibold ">Book-o-pedia</h1>
      <form className="relative my-6" onSubmit={(e) => onBookSearch(e)}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          id="book-search"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 font-medium outline-none"
          placeholder="Search for books"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700  focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </form>

      {isLoading && <p>We are getting your search results 😎</p>}
      {isError && <p>Something went wrong 😥</p>}
      <section className="space-y-4">
        {docs.length > 0 &&
          docs.map((doc) => (
            <BookCard
              key={doc.key}
              title={doc.title}
              author={doc.author_name}
              coverID={doc.cover_i}
            />
          ))}
      </section>
    </main>
  );
}
