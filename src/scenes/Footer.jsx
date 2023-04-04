import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-mono font-semibold text-2xl text-yellow">
            SANCHIT CHHABRA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
