import { useRouter } from "next/router";
import { useCallback } from "react";
import Image from 'next/image'

interface AvatarProps {
  src?: string;
  href: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, href, isLarge, hasBorder }) => {
  const router = useRouter();

  const onClick = useCallback((event: any) => {
    event.stopPropagation();
    router.push(href);
  }, [router, href]);

  return ( 
    <img
      onClick={onClick}
      className={`
        ${hasBorder ? 'border-4 border-black' : ''}
        rounded-full 
        ${isLarge ? 'w-32' : 'w-12'}
        ${isLarge ? 'h-32' : 'h-12'}
        hover:opacity-90 
        transition 
        cursor-pointer
      `}
      src="https://pbs.twimg.com/media/C6wGX5zWcAQp0ix?format=jpg&name=360x360" alt="Imagen de perfil"
    />
   );
}
 
export default Avatar;