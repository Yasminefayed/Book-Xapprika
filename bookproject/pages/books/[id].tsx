// This page recieves the id that i clicked on from the previous page and get all the information related to this ID

import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Author {
  name: string;
  birth_year: number;
  death_year: number;
}

interface Formats {
  [key: string]: string;
}

interface Book1 {
  id: number;
  title: string;
  authors: Author[];
  translators: any[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Formats;
  download_count: number;
}

interface Book {
  id: number;
  title: string;
  author: { birth_year: number; name: string; death_year: number };
  subjects: string[];
  bookshelves: string[];
  languages: string[];
}

const Page = ({ book }: { book: Book1 | null }) => {
  // No need to fetch data here, it's already provided as props

  return (
    <div className="container ml-4 md:ml-0">
      <div style={{ background: 'url(/book.jfif) no-repeat center center fixed', backgroundSize: 'cover', height: '800px' }}>
        {book ? (
          <div style={{color:'#1565C0', paddingLeft:'10px',paddingTop:'20px'}}>
            <h1>{book.title}</h1>
            <p>ID: {book.id}</p>
            <h2>Authors:</h2>
            <ul>
              {book.authors.map((author, index) => (
                <li key={index}>
                  {author.name} (Born: {author.birth_year}, Died: {author.death_year})
                </li>
              ))}
            </ul>
            <h2>Subjects:</h2>
            <ul>
              {book.subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
            <h2>Bookshelves:</h2>
            <ul>
              {book.bookshelves.map((bookshelf, index) => (
                <li key={index}>{bookshelf}</li>
              ))}
            </ul>
            <p>Download Count: {book.download_count}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
  const { id } = context.query;

  try {
    const response = await fetch(`https://gutendex.com/books/${id}`);
    const bookData = await response.json();

    return {
      props: {
        book: bookData as Book1 | null,
      },
    };
  } catch (error) {
    console.error('Error fetching book:', error);
    return {
      props: {
        book: null,
      },
    };
  }
};

export default Page;
