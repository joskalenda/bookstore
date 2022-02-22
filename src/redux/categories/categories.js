const Categories = () => {
  const arr = ['Math', 'Physics', 'Geography'].map((item) => <li key={item} id={item}>${item}</li>);
  
return ( 
    <ul>{arr}</ul> 
   );
}
 
export default Categories;