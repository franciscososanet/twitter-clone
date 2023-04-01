import { signOut, useSession } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaHashtag, FaUser } from 'react-icons/fa';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton';

const items = [
  {
    icon: BsHouseFill,
    label: 'Inicio',
    href: '/',
  },
  {
    icon: FaHashtag,
    label: 'Explorar',
    href: '/explorar',
  },
  {
    icon: BsBellFill,
    label: 'Notificaciones',
    href: '/notificaciones',
    auth: true,
  },
  {
    icon: FaUser,
    label: 'Perfil',
    href: '/perfiles/123',
    auth: true,
  },
]

const Sidebar = () => {
  const session = useSession();

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
            <SidebarLogo />
            {items.map((item) => (
              <SidebarItem
                key={item.href} 
                auth={item.auth}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}
            {session.data && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Cerrar sesión" />}
            <SidebarTweetButton />
          </div>
        </div>
      </div>
  )
};

export default Sidebar;