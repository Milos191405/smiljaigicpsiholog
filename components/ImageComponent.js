import Image from "next/image";

const ImageComponent = ({
  src,
  alt,
  className = "",
  priority = false,
  width = 500,
  height = 400,
}) => (
  <div className={`flex justify-center ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-4xl shadow-lg object-cover"
      priority={priority} // za LCP slike, postavi priority={true}
    />
  </div>
);

export default ImageComponent;
