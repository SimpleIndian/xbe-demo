/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

type Props = {
  isLink?: boolean;
  query: string;
  id: string;
  title: string;
  author: string[];
  coverID: number;
};

const BookCard = ({ query, id, title, author, coverID, isLink = true }: Props) => {
  return (
    <Link
      href={isLink ? `${id}?q=${query}` : "!#"}
      className="flex bg-gray-50 p-4 rounded-md gap-4"
    >
      <img
        className="rounded-lg "
        src={
          coverID === undefined
            ? "	https://openlibrary.org/images/icons/avatar_book-sm.png"
            : `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`
        }
        alt={title}
      />
      <div>
        <h1 className="font-bold text-xl mb-2 ">{title}</h1>
        <p className="text-gray-500 font-medium">
          {author === undefined ? "No author" : author.join(",")}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
