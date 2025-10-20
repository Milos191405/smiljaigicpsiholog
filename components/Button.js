import Link from "next/link";

const Button = ({ href, text, styleType, ariaLabel }) => {
  const baseStyles =
    "inline-block md:text-lg px-8 py-4 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-secondary";

  const styleVariants = {
    consultation:
      "bg-text-primary text-white hover:bg-text-secondary focus:ring-text-primary",
    message:
      "bg-text-secondary text-white hover:bg-background hover:text-text-primary focus:ring-text-secondary",
    blog:
      "bg-text-primary text-background hover:bg-text-secondary hover:text-white focus:ring-text-primary",
  };

  return (
    <Link href={href} passHref>
      <button
        aria-label={ariaLabel || text}
        className={`${baseStyles} ${styleVariants[styleType]}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;