const Search = ({ query }) => {
  function handleSubmit(e) {
    // Estä sivun uudelleenlataus
    e.preventDefault();

    // Lue lomakedata
    const form = e.target;
    const formData = new FormData(form);
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  return (
    // Tähän tulisi lomakkeen JSX, esimerkiksi:
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;