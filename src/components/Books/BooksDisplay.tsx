import BookList from "./BookList";
import BookForm from "./BookForm";
import type { Book } from "../../types/types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getBooksData } from "../../slice/BooksSlice";

function BooksDisplay() {
  const books = useSelector(getBooksData);
  const [editing, setEditing] = useState<Book | null>(null);

  if (!books?.length)
    return (
      <div className="text-center text-gray-500">No books yet. Add one!</div>
    );
  return (
    <div className="min-h-screen p-6 bg-fuchsia-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-white p-4 rounded shadow-sm">
              <h2 className="font-semibold mb-3">
                {editing ? "Edit Book" : "Add Book"}
              </h2>
              <BookForm editing={editing} onDone={() => setEditing(null)} />
            </div>

            <div className="md:col-span-2">
              <div className="bg-white p-4 rounded shadow-sm">
                <h2 className="font-semibold mb-3">Books</h2>
                <BookList onEdit={(b) => setEditing(b)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BooksDisplay;