import Image from 'next/image'

const ImageSection = ({ src, alt, className }) => (
    <div className={`flex justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={3000}
        height={1000}
        className="rounded-4xl shadow-lg"
      />
    </div>
  );
  
  export default ImageSection