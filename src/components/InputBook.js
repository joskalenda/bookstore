const InputBook = () => {
  const form = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 auto',
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} style={form}>
      <input
        className="input-text"
        type="text"
        placeholder="Add Book..."
        name="title"
        onChange={(e) => e.preventDefault()}
      />
      <button type="submit" className="input-submit">Add Book</button>
    </form>

  );
};

export default InputBook;
