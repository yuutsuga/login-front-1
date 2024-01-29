import Link from "next/link";
import "./styles.css";
import './globals.css';

export default function Home() {
  return (
    <body className={"body"}>
        <div className={"button"}>
          <Link href={'/pages/login'} style={{textDecoration: 'none'}}>
            <p className={"p"}>            
                Sign In
            </p>
          </Link>
        </div>
        <div className={"button"}>
          <Link href={'/pages/register'} style={{textDecoration: 'none'}}>
            <p className={"p"}>
              Sign Up
            </p>
          </Link>
      </div>
    </body>
  );
}
