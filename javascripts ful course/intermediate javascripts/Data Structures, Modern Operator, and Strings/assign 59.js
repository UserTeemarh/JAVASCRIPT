'use strict';

const books = [
    {
      title: 'Algorithms',
      author: ['Robert Sedgewick', 'Kevin Wayne'],
      publisher: 'Addison-Wesley Professional',
      publicationDate: '2011-03-24',
      edition: 4,
      keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
      pages: 976,
      format: 'hardcover',
      ISBN: '9780321573513',
      language: 'English',
      programmingLanguage: 'Java',
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.41,
          ratingsCount: 1733,
          reviewsCount: 63,
          fiveStarRatingCount: 976,
          oneStarRatingCount: 13
        }
      },
      highlighted: true
    },
    {
      title: 'Structure and Interpretation of Computer Programs',
      author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
      publisher: 'The MIT Press',
      publicationDate: '2022-04-12',
      edition: 2,
      keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
      pages: 640,
      format: 'paperback',
      ISBN: '9780262543231',
      language: 'English',
      programmingLanguage: 'JavaScript',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.36,
          ratingsCount: 14,
          reviewsCount: 3,
          fiveStarRatingCount: 8,
          oneStarRatingCount: 0
        }
      },
      highlighted: true
    },
    {
      title: 'Computer Systems: A Programmer\'s Perspective',
      author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
      publisher: 'Prentice Hall',
      publicationDate: '2002-01-01',
      edition: 1,
      keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
      pages: 978,
      format: 'hardcover',
      ISBN: '9780130340740',
      language: 'English',
      programmingLanguage: 'C',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 1010,
          reviewsCount: 57,
          fiveStarRatingCount: 638,
          oneStarRatingCount: 16
        }
      },
      highlighted: true
    },
    {
      title: 'Operating System Concepts',
      author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
      publisher: 'John Wiley & Sons',
      publicationDate: '2004-12-14',
      edition: 10,
      keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
      pages: 921,
      format: 'hardcover',
      ISBN: '9780471694663',
      language: 'English',
      programmingLanguage: 'C, Java',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 3.9,
          ratingsCount: 2131,
          reviewsCount: 114,
          fiveStarRatingCount: 728,
          oneStarRatingCount: 65
        }
      }
    },
    {
      title: 'Engineering Mathematics',
      author: ['K.A. Stroud', 'Dexter J. Booth'],
      publisher: 'Palgrave',
      publicationDate: '2007-01-01',
      edition: 14,
      keywords: ['mathematics', 'engineering'],
      pages: 1288,
      format: 'paperback',
      ISBN: '9781403942463',
      language: 'English',
      programmingLanguage: null,
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.35,
          ratingsCount: 370,
          reviewsCount: 18,
          fiveStarRatingCount: 211,
          oneStarRatingCount: 6
        }
      },
      highlighted: true
    },
    {
      title: 'The Personal MBA: Master the Art of Business',
      author: 'Josh Kaufman',
      publisher: 'Portfolio',
      publicationDate: '2010-12-30',
      keywords: ['business'],
      pages: 416,
      format: 'hardcover',
      ISBN: '9781591843528',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.11,
          ratingsCount: 40119,
          reviewsCount: 1351,
          fiveStarRatingCount: 18033,
          oneStarRatingCount: 1090
        }
      }
    },
    {
      title: 'Crafting Interpreters',
      author: 'Robert Nystrom',
      publisher: 'Genever Benning',
      publicationDate: '2021-07-28',
      keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
      pages: 865,
      format: 'paperback',
      ISBN: '9780990582939',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.7,
          ratingsCount: 253,
          reviewsCount: 23,
          fiveStarRatingCount: 193,
          oneStarRatingCount: 0
        }
      }
    },
    {
      title: 'Deep Work: Rules for Focused Success in a Distracted World',
      author: 'Cal Newport',
      publisher: 'Grand Central Publishing',
      publicationDate: '2016-01-05',
      edition: 1,
      keywords: ['work', 'focus', 'personal development', 'business'],
      pages: 296,
      format: 'hardcover',
      ISBN: '9781455586691',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.19,
          ratingsCount: 144584,
          reviewsCount: 11598,
          fiveStarRatingCount: 63405,
          oneStarRatingCount: 1808
        }
      },
      highlighted: true
    }
  ];
//   '9780321573513'

  // console.log('__EXERCISE ONE__');

  // console.log(books[0].ISBN['4']);
  // console.log(books[0].ISBN['6']);
  // console.log(books[0].ISBN['9']);
  // console.log(books[0].ISBN['8']);

  // console.log('__EXERCISE TWO__');
  // const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';

  // console.log(quote.indexOf('chess'));


  // console.log('__EXERCISE THREE__');
  // console.log(quote.slice('boxing'));

  // console.log('__EXERCISE FOUR__');
  // function isContributor(authorName){
  //   return authorName.lastIndexOf('(Contributor)') !== -1;
  // }
  // console.log(isContributor('Julie Sussman (Contributor)'));

  // console.log(isContributor('Williams Shakesphere (Substitutor)'));

//   console.log('__EXERCISE ONE__');

//   function normalizeAuthorName(author){
//     author = author.trim();
//     const firstName = author.slice(0, author.indexOf(' '));

//     let lastName = '';
//     if(author.indexOf('') === author.lastIndexOf('')){
//       lastName = author.slice(author.indexOf('') + 1, author.length)
//     }else {
//       lastName = author.slice(author.indexOf('') + 1, author.lastIndexOf(' '));
//     }

//     const capitalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//     const capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

//     return capitalizedFirstName + ' ' + capitalizedLastName;
//   }
//   console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));


//   console.log('__EXERCISE TWO__');
// const newBookTitle = books[1].title.replace('Programs', 'Software').replace(',',',');
// console.log(newBookTitle);


// console.log('__EXERCISE THREE__');

// function logBookTheme (bookTitle) {
//   bookTitle = bookTitle.toLowerCase();

//   if (bookTitle.startsWith('algorithms')){
//     console.log('This book is about algorithms');
//   } else if(bookTitle.includes('structure') && bookTitle.includes('computer')){
//     console.log('This book is about algorithms and data structures');
//   } else if (bookTitle.endsWith('system') || bookTitle.endsWith('systems') && !bookTitle.includes('operating')){
//     console.log('This book is about some systems, but definitely not about operating systems');
//   }
//   return bookTitle;
// }

// console.log(logBookTheme(books[0].title));
// console.log(logBookTheme(books[1].title));
// console.log(logBookTheme(books[2].title));
// console.log(logBookTheme(books[3].title));


// const names = 'jonas';
// const lowername = ' JoNaS';
// const covertlowername = lowername.toLowerCase().trim();
// console.log(names.trim());
// console.log(names.slice(1, 4));

// console.log(names === covertlowername);


// console.log('__EXERCISE ONE___');

// const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

// function logBookCategories(categories){
//   const category = categories.split(';');

//   console.log(category);
//   for(const value of category){
//     console.log(value);
//   }
// }

// logBookCategories(bookCategories);

// console.log('__EXERCISE TWO__');

// function getKeywordAsString(book){
//   const keywords = [];

//   for(const book of books){
//     keywords.push(...book.keywords);
//   }
//   const uniqueKeywords = [...new Set(keywords)]

//   return uniqueKeywords.join('__');
// }

// console.log(getKeywordAsString(books));


// console.log('__EXERCISE THREE__');

// const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];

// function logBookChapters(chapter){
//   for(const [keys, values] of chapter){
//     console.log(keys + ' '.padEnd(20, '_') + ' ' + values);
//   }
// }
// console.log(logBookChapters(bookChapters));

// CODING CHALLENGE

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').textContent = 'Submit';
// document.querySelector('button').addEventListener('click', ()=>{
  
// const text = document.querySelector('textarea').value;
// const rows = text.split('\n');
// console.log(rows);

// for(const [i, row] of rows.entries()){
//   const [first, second] = row.toLowerCase().trim().split('_');
//   // console.log(row, first, second);
//   const output = `${first}${second.replace(second[0], 
//   second[0].toUpperCase())}`;
//   console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
// }
// })

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// STRING EXERCISE

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


  const getCode = str =>str.slice(0, 3).toUpperCase();
  console.log(flights.split('+'));

  for(const flight of flights.split('+')){
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '😒' : ' '}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(37);
    console.log(output)
   // console.log(flight.split(';'));
  }