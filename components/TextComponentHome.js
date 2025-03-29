function TextComponentHome({ children, className }) {
    return (
      <section className={`p-4 md:text-lg md:py-6 lg:py-10 lg:text-xl ${className}`}>
        {children}
      </section>
    );
  }
  
  export default TextComponentHome;
  