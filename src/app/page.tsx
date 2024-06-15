"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      imgPath: "/service/service-1.svg",
      title: "Single account",
      description:
        "Create a single login for your entire family & your business.",
    },
    {
      imgPath: "/service/service-2.svg",
      title: "Document folder",
      description:
        "Create , upload & download all your financial year related Documents securely & safely.",
    },
    {
      imgPath: "/service/service-3.svg",
      title: "Flexible pricing",
      description:
        "Simple and effective pricing to file your taxes as per your income.",
    },
    {
      imgPath: "/service/service-4.svg",
      title: "Dedicated RM",
      description:
        "Get insights into your tax filing with a Dedicated manager. Get a 2nd opinion on your tax filing.",
    },
  ];
  return (
    <main className="page-content">
      {/* ============= Hero section ========= */}
      <section className="flex flex-col pt-12 md:pt-0 items-center justify-between gap-12 md:flex-row md:items-start h-5/6">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">Welcome to our Landing Page!</h1>
            <p className="mt-4 text-lg">
              This is a hero section with an image and text.
            </p>
            <Button className="mt-2"> Click Me</Button>
            <p className="mt-4 text-lg">
              This is some additional content to make the hero section more
              attractive.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/hero-img.svg"
              alt="Hero Image"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============= Features section ========= */}
      <section className=" my-12 md:pt-0 items-center justify-between h-5/6">
        <h4 className="text-2xl font-bold text-center">Our Services</h4>
        <h2 className="text-2xl font-bold text-center mt-8">
          Meet exciting feature of app
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, i) => {
            return (
              <div className="max-w-[270px]">
                <div className="flex flex-col items-center justify-between gap-4">
                  <Image
                    src={item.imgPath}
                    alt={`Service ${i}`}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
