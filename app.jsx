const pages = ["react-template", "passgen"];

const App = () => {
  return (
    <>
      {pages.map((page, index) => (
        <li key={index}>
          <a href={`/${page}`}>{page}</a>
        </li>
      ))}
    </>
  );
};

export default App;
