const Footer = () => {
    return (
      <footer className="flex flex-col sm:flex-row items-center justify-between py-6 px-4 md:px-6 border-t mt-10">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear().toString()} THUNDERHACK
        </p>
  
        <span className="text-xs text-muted-foreground self-end">
          Developed by cvs0
        </span>
      </footer>
    );
  };
  
  export default Footer;
  