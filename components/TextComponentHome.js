function TextComponentHome({ children, className }) {
    return (
      <section className={`text-lg p-4 md:text-xl md:py-6 lg:py-10 ${className}`}>
        {children}
      </section>
    );
  }
  
  export default TextComponentHome;
  