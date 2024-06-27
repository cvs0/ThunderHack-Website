const Footer = () => {
    return (
      <footer className="flex flex-col sm:flex-row items-center justify-between py-6 px-4 md:px-6 border-t mt-10">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear().toString()} THUNDERHACK
        </p>
  
        <span className="text-xs text-muted-foreground self-end">
          Developed by <a className="text-emerald-500 font-extrabold" href="https://discord.com/users/1147380185893716068">cvs0</a>
        </span>
      </footer>
    );
  };
  
  export default Footer;
  