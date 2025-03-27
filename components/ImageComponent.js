import Image from 'next/image'

const ImageSection = ({ src, alt, className }) => (
    <div className={`flex justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={3000}
        height={1000}
        className="object-contain bg-[#164e4e] p-5"
      />
    </div>
  );
  
  export default ImageSection;