import './Footer.scss';



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container footer-container">
          <p className="footer__left">&copy; {currentYear} Bookstore</p>
          <p className="footer__right">All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
