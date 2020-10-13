import Link from "next/link";
const About = () => {
  const isClientRender = () =>
    ![typeof window, typeof document].includes("undefined");
  console.log(">>", isClientRender());
  return (
    <div>
      <h1>About Page!</h1>
      <Link href="/">
        <a>Kembali ke home page</a>
      </Link>
    </div>
  );
};

export default About;
