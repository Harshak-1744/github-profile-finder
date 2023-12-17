const footerYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div>
        <footer className="footer p-10 bg-gray-700 text-gray  footer-center">
            <p>Copyright &copy; {footerYear}</p>
        </footer>
    </div>
  )
}
