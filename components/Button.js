import Link from 'next/link';

const Button = ({ href, text, styleType }) => {
  // Osnovne stilove za dugme
  const baseStyles = 'inline-block md:text-lg px-8 py-4 rounded-full shadow-lg transition';

  // Specifični stilovi za različite tipove dugmadi
  const styleVariants = {
    consultation: 'bg-text-primary text-white hover:bg-text-secondary',
    message: ' text-white bg-text-secondary hover:bg-background hover:text-text-primary',
    blog:" text-background bg-text-primary hover:bg-text-secondary hover:text-white",
  };

  return (
    <Link href={href} className={`${baseStyles} ${styleVariants[styleType]}`}>
      {text}
    </Link>
  );
};

export default Button;
