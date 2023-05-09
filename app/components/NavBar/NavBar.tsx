'use client';
import Link from 'next/link';
import './NavBar.css';

type Route = {
  name: string;
  href: string;
};

const routes: Route[] = [
  { name: 'Pose generator', href: '/poseGenerator' },
  { name: 'Flow generator', href: '/flowGenerator' },
  { name: 'All poses', href: '/poses' },
];

const NavBar = () => {
  return (
    <div id="Container">
      {routes.map((route) => (
        <Link id="Link" href={route.href}>
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
