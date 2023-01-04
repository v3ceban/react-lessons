//Book list #2 component
function NewList() {
    return (
        <>
            <h1>Book List #2</h1>
            <ul className='bookList'>
                {/* You need to map the array in order for it to be displayed */}
                {books.map((book) => {
                    //Now you can return any mapped element from the array
                    // const { title, img, author, description } = element;
                    // return (
                    //     <li>
                    //         <h2>{title}</h2>
                    //         <p>{author}</p>
                    //     </li>
                    // )
                    //Or you can return the Book component with its properties set to the mapped elements
                    //A key property with a unique value is necessary for every element
                    return (<Book key={book.id} {...book} />);
                })}
            </ul>
        </>
    );
}


//Book component - passes its properties to the NewList's book element (img, title, author, description)
var Book = ({ title, img, author, description }) => {
    //Assigns each of the properties of the Book component to a single property element
    // let { title, img, author, description } = props.properties;
    return (
        <li className='book'>
            <h2>{title}</h2>
            <img src={img} alt="cover" />
            <p style={{ fontStyle: 'italic' }}>By: {author}</p>
            <p>{description}</p>
        </li>
    );
}

//Setting up the properties for the books in the array called books
var books = [
    {
        id: 1,
        img: 'https://placekitten.com/200/300',
        title: 'Super Ella',
        author: 'Ella the Cat',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, pariatur?',
    },
    {
        id: 2,
        img: 'https://placekitten.com/201/300',
        title: 'Giga Vlad',
        author: 'Vlad the Cow',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis.',
    },
    {
        id: 3,
        img: 'https://placekitten.com/199/300',
        title: 'Chad Logan',
        author: 'Logan the Wolverine',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam quos quae incidunt maxime quas.',
    },
    {
        id: 4,
        img: 'https://placekitten.com/201/299',
        title: 'Ultra Tony',
        author: 'Anton the Pee-Tooh',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam quos quae incidunt maxime quas.',
    },
    {
        id: 5,
        img: 'https://placekitten.com/199/299',
        title: 'Mega Dmitry',
        author: 'Dimka the Great',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam quos quae incidunt maxime quas.',
    },
    {
        id: 6,
        img: 'https://placekitten.com/201/301',
        title: 'Amazing Hagrid',
        author: 'Hagrid the Giant',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam quos quae incidunt maxime quas.',
    }
];

//Important to have the export statement to import the JS code in the index.js later
export { NewList }
