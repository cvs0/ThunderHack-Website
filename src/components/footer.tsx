const Footer = () => {
  return (
      <footer className="flex flex-col items-center justify-between py-4 px-3 sm:px-4 md:px-6 border-t mt-10 space-y-2 sm:space-y-0 sm:flex-row">
          <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear().toString()} THUNDERHACK
          </p>
  
          <span className="text-xs text-muted-foreground sm:self-end">
              Developed by <a className="text-emerald-500 font-extrabold" href="https://discord.com/users/1147380185893716068">cvs0</a>
          </span>
      </footer>
  );
};

export default Footer;
