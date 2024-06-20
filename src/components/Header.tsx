import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-4">
        <div className="logo">{/* Logo here */}</div>
        <div className="hidden md:flex items-center">
          <Link href="/#" className="mr-4">
            Home
          </Link>
          <Link href="/#" className="mr-4">
            About Us
          </Link>
          <Link href="/contact-us" className="mr-4">
            Contact
          </Link>
          <Link href="/#" className="mr-4">
            Services
          </Link>
        </div>
        <div className="md:hidden">{/* <MenuBar /> */}</div>
      </div>
    </header>
  );
};

export default Header;
