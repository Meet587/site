import ConatctForm from "@/components/ConatctForm";
import Image from "next/image";

const Contact = () => {
  return (
    <main className="page-content">
      <h1 className="heading-2">Contact Us</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 my-6 p-6 pb-8 md:my-12">
        <ConatctForm />
        <Image
          src={"/contact_us.svg"}
          alt="contact us"
          width={500}
          height={500}
          className="object-cover hidden md:flex "
        />
      </section>
    </main>
  );
};

export default Contact;
