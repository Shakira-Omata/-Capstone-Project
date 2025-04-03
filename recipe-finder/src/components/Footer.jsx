const Footer = () => {
    return (
      <footer className="bg-purple-700 text-black text-center py-4 mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Recipe Finder. All Rights Reserved.
        </p>
        <p className="text-xs">
        Recipe magic by Shakira Omata. Happy cooking!
        </p>
      </footer>
    );
  };
  
  export default Footer;
  