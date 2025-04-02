import React from 'react';
import { motion } from 'framer-motion';

function FavoriteBooks() {
  const books = [
    { title: 'Atomic Habits', author: 'James Clear', review: 'A practical guide to building good habits and breaking bad ones.' },
    { title: 'Sapiens', author: 'Yuval Noah Harari', review: 'A fascinating exploration of human history and its impact on society.' },
    { title: 'Meditations', author: 'Marcus Aurelius', review: 'Timeless wisdom on stoicism and self-discipline.' },
  ];

  return (
    <section id="favorite-books">
      <h2>Favorite Books</h2>
      {books.map(book => (
        <motion.div
          key={book.title}
          className="book-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{book.title} by {book.author}</h3>
          <p>{book.review}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default FavoriteBooks;