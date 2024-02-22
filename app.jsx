import pages from './pages.json';

const App = () => {
  return (
    <>
      {pages.map((page, index) => (
        <li key={index}>
          <a href={`/pages/${page}/`}>{page}</a>
        </li>
      ))}
    </>
  );
};

export default App;
