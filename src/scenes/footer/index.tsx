import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />

          <p>© EduKid All Rights Reserved.</p>
          <p>Katya But, 2023</p>
        </div>
        
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Join us to grow together</p>
          <p>(+972)53-xxx-xxxx</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
