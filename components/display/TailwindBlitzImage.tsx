import Image from "next/image";

type TailwindBlitzImageProps = {
  alt: string;
  h: number;
  w: number;
  src: string;
  className?: string;
};

const TailwindBlitzImage = (tailwindImageProps: TailwindBlitzImageProps) => {
  let { className, alt, src, h, w } = tailwindImageProps;
  let imageProps = {
    height: Number(h),
    width: Number(w),
    src: src.toString(),
    className,
  };
  return <Image alt={alt} {...imageProps} />;
};
export default TailwindBlitzImage;
