import { text } from 'stream/consumers';
import './Title.scss';




export default function Title({ children, titleClass }: { titleClass: string, children?: string }) {
  return (
    <>
      <h1 className={titleClass}>{children}</h1>
    </>
  );
}
