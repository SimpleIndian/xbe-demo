import BookCard from "@/components/BookCard";
import { Doc, SearchRes } from "@/utils/api";
import { GetServerSideProps } from "next/types";
import { Book } from "@/utils/api";

type Props = {
  book: Book;
  doc: Doc;
  related: Doc[];
};

const Book = (props: Props) => {
  const { doc, book, related } = props;
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-4">
      <BookCard
        title={doc.title}
        query={""}
        id={doc.key}
        author={doc.author_name}
        coverID={doc.cover_i}
      />
      <h2 className="text-xl font-semibold">Summary</h2>
      <p>{book.description}</p>
      <h2 className="text-xl font-semibold">Published on :</h2>
      <p>{doc.publish_date.join(", ")}</p>
      <h2 className="text-xl font-semibold">ISBN</h2>
      <p>{doc.isbn.join(", ")}</p>

      <section className="grid grid-cols-1 gap-4">
        {related.length > 0 &&
          related.map((rbook) => (
            <BookCard
              key={rbook.key}
              query={""}
              id={""}
              title={rbook.title}
              author={rbook.author_name}
              coverID={rbook.cover_i}
            />
          ))}
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  const query = context.query.q;

  console.log(query);

  if (query === undefined) {
    return {
      notFound: true,
    };
  }

  const getSearchBook = await fetch(
    `https://openlibrary.org/search.json?q=${query}&fields=*,availability&limit=20`
  );
  const getBook = await fetch(`https://openlibrary.org/works/${id}.json`);
  const bookRes = await getBook.json();
  const docsRes = (await getSearchBook.json()) as SearchRes;
  const doc = docsRes.docs.find((doc) => doc.key === `/works/${id}`);

  const getRelated = await fetch(
    `https://openlibrary.org/search.json?author=${doc?.author_name[0]}&sort=new`
  );

  const relatedJson = (await getRelated.json()) as SearchRes;

  return {
    props: {
      book: bookRes,
      doc: doc,
      related: relatedJson.docs,
    },
  };
};

export default Book;
