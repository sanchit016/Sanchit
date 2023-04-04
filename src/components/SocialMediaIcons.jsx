const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/sanchit-chhabra-134160213/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/sanchit016"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a>
      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/sanchitchhabra16/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.codechef.com/users/miracle05/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="codechef-link" src="../assets/codechef.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://codeforces.com/profile/sanchit5449/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="codeforces-link" src="../assets/codeforces.png" />
      </a>

    </div>
  );
};

export default SocialMediaIcons;
