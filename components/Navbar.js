import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import AuthContext from '../store/authContext';

export default function Navbar() {
  const { login, user } = useContext(AuthContext);
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Guides</a></Link></li>
          <li onClick={login} className="btn">login/signup</li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  );
}
