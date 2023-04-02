import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';

import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';

import Avatar from '../Avatar';

const PostItem = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  
  const goToUser = useCallback((ev: any) => {
    ev.stopPropagation();
    router.push('/users/123')
  }, [router]);

  const goToPost = useCallback(() => {
    router.push('/posts/123');
  }, [router]);

  const onLike = useCallback((ev: any) => {
    ev.stopPropagation();

    if (!currentUser) {
      loginModal.onOpen();
    }
  }, [loginModal, currentUser]);

  return (
    <div 
      onClick={goToPost} 
      className="
        border-b-[1px] 
        border-neutral-800 
        p-5 
        cursor-pointer 
        hover:bg-neutral-900 
        transition
      ">
      <div className="flex flex-row items-start gap-3">
        <Avatar href="/users/123" />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p 
              onClick={goToUser} 
              className="
                text-white 
                font-semibold 
                cursor-pointer 
                hover:underline
            ">
              Nombre de usuario
            </p>
            <span 
              onClick={goToUser} 
              className="
                text-neutral-500
                cursor-pointer
                hover:underline
            ">
              @nombredeusuario
            </span>
            <span className="text-neutral-500">
              2h
            </span>
          </div>
          <div className="text-white mt-1">
            Tweet de prueba
          </div>
          <div className="flex flex-row items-center mt-3 gap-10">
            <div 
              className="
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-sky-500
            ">
              <AiOutlineMessage size={20} />
              <p>
                300
              </p>
            </div>
            <div
              onClick={onLike}
              className="
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-red-500
            ">
              <AiOutlineHeart size={20} />
              <p>
                234
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem;
