import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import type { Book } from "../../types/types";
import { getBooksData } from "../../slice/BooksSlice";

type Props = {
  onEdit: (b: Book) => void;
};

function BookList({ onEdit }: Props) {
  const books = useSelector(getBooksData);
  if (!books?.length)
    return (
      <div className="text-center text-gray-500">No books yet. Add one!</div>
    );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-3">
        {books.map((b: Book) => (
          <BookItem key={b.id} selectedbook={b} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default BookList;