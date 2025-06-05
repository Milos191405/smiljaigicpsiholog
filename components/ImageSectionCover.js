import Image from "next/image";

const ImageSectionCover = ({ src, alt, className }) => (
  <div className={`relative w-full h-full overflow-hidden ${className}`}>
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: "cover" }}
      className="rounded-4xl shadow-lg"
      priority // ako želiš da se slika brzo učitava na stranici
    />
  </div>
);

export default ImageSectionCover;
