// pages/index.tsx
//This is the main page , where i used Server side render to fetch the data in the link you have given me
//I used getserverprops do so , and i mapped the book with whatever the infomration i wanna fetch
// i made it fetch title and author only and according to this or the ID of the title i clicked on
// it will redirect me to another page with the rest of the unformation regaurding this book
// the rest is in [id].tsx

import { GetServerSideProps } from 'next';
import axios from 'axios';
import Link from 'next/link';
import Searchbar from './search';
import Sidebar from '@/app/comp';


interface Book {
  id: number;
  title: string;
  author: { name: string };
}

const Homepage = ({ booksData }: { booksData: Book[] }) => {
  return (
    <div className="container py-8">
      
      <table>
        <tbody>
          <tr>
            <td style={{color:'#191970', paddingLeft:'20px',paddingBottom:'600px'}}>
              <Sidebar />
             
            </td>
            <td>
              <div className="ml-4 md:ml-0" style={{paddingLeft:'300px'}}>
                
                <Searchbar />
                <h1 className="text-3xl font-bold mb-4" style={{color:'#1565C0'}}>List of Books</h1>
                <div className="grid grid-cols-2 gap-4">
                  {booksData.map((book: Book) => (
                    <div key={book.id} className="mb-4">
                      <Link href={`/books/[id]/?id=${book.id}`}>
                        <div className="border border-gray-300 p-4 rounded cursor-pointer">
                          <h2 className="text-sm font-semibold mb-2">{book.title}</h2>
                          <p className="text-gray-600">Author: {book.author.name}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get('https://gutendex.com/books');
    const booksData: any[] = response.data.results;

    const formattedBooks: Book[] = booksData.map((book: any) => ({
      id: book.id,
      title: book.title,
      author: { name: book.authors[0]?.name || 'Unknown Author' },
    }));

    return {
      props: {
        booksData: formattedBooks,
      },
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    return {
      props: {
        booksData: [], // Return an empty array in case of error
      },
    };
  }
};

export default Homepage;
