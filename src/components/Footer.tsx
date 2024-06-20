const Footer = () => {
  return (
    <footer className="px-16 py-12 bg-primary text-white ">
      <div className="flex gap-4 flex-col sm:flex-row text-center justify-between align-items-center">
        <p>Copyright &copy; 2024. All Rights Reserved.</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between align-items-center">
          <div>Termination Policy</div>
          <div>Refund Policy</div>
          <div>Privacy Policy</div>
          <div>Contact us</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
