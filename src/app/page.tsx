import Link from "next/link";
import "./styles.css";
import './globals.css';

export default function Home() {
  return (
    <body className={"body"}>
      <div className={"buttons"}>
        <div className={"button"}>
          <Link href={'/pages/login'} style={{textDecoration: 'none'}}>
            <p className={"p"}>            
                Login
            </p>
          </Link>
        </div>
        <div className={"button"}>
          <Link href={'/pages/register'} style={{textDecoration: 'none'}}>
            <p className={"p"}>
              Register
            </p>
          </Link>
        </div>
      </div>
    </body>
  );
}
