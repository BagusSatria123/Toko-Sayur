import Link from "next/link";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
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
      <Avatar
        alt="Remy Sharp"
        src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/86/86d9ae16a9b8f319157e0b615d4a75a8983eb859.jpg"
      />
      <Chip label="ini adalah Chip" />
    </div>
  );
};

export default About;
