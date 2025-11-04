import React from "react";
import type { Book } from "../../types/types";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../slice/BooksSlice";
import type { AppDispatch } from "../../store/store";
import BookAuthor from "./BookAuthor";

type Props = {
  selectedbook: Book;
  onEdit: (b: Book) => void;
};

const BookItem: React.FC<Props> = ({ selectedbook, onEdit }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="p-4 border rounded-md">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg font-semibold">{selectedbook.title}</h3>
          {selectedbook.userId && <BookAuthor userId={selectedbook.userId} />}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(selectedbook)}
            className="px-3 py-1 rounded border"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteBook(selectedbook.id)).unwrap()}
            className="px-3 py-1 rounded border text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      {selectedbook.description && (
        <p className="mt-2 text-sm">{selectedbook.description}</p>
      )}
      <div className="text-xs text-gray-400 mt-2">
        Added:{" "}
        {selectedbook.date
          ? new Date(selectedbook.date).toLocaleString()
          : "N/A"}
      </div>
    </div>
  );
};

export default BookItem;
