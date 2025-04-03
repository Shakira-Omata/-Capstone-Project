const Footer = () => {
    return (
      <footer className="bg-purple-700 text-white text-center py-4 mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Recipe Finder. All Rights Reserved.
        </p>
        <p className="text-xs">
        Built by Omata – Happy Cooking!
        </p>
      </footer>
    );
  };
  
  export default Footer;
  