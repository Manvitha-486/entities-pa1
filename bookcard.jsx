import React from 'react';

const BookCard = ({ books }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {books.map((book) => (
        <div key={book.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px', textAlign: 'center' }}>
          <img src={book.image} alt={book.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <h3>{book.name}</h3>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Author:</strong> {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookCard;