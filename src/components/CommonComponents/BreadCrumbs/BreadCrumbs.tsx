import './BreadCrumbs.scss';
import { Link } from 'react-router-dom';



export default function BreadCrumbs({ children, breadcrumbsClass, url }: { breadcrumbsClass: string, url: string, children?: string }) {
  return (
    <>
      <div className='breadcrumbs'>
        <Link className={breadcrumbsClass} to={url}>{children}</Link>
      </div>
    </>
  );
}
