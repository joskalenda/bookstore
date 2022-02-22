
const InputBook = () => {

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Book..."
          name="title"
          onChange={(e) => e.preventDefault()}
        />
        <button type="submit" className="input-submit" value="Add Book"/>
    </form>
  );
}
 
export default InputBook;