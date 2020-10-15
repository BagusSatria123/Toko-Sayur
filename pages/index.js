const HomePage = (props) => {
  console.log("props => ", props.products);
  return <h1></h1>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
export default HomePage;
