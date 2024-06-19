import { Button } from "@/components/ui/button";
import FAQs from "@/sections/FAQs";
import Image from "next/image";
import Link from "next/link";

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

  const why = [
    {
      imgPath: "/service/service-1.svg",
      title: "Curated Funds",
      description:
        "Investifyd empowers you to find the ‘right fund’ for you to invest. We have meticulously curated a list of funds from around 8000+ funds after assessing them on various parameters.",
    },
    {
      imgPath: "/service/service-2.svg",
      title: "Asset Allocation",
      description:
        "Investifyd guides you on asset allocation to diversify your investment across different investment options strategically to minimize risk and rebalance your investments to maximize returns.",
    },
    {
      imgPath: "/service/service-3.svg",
      title: "Family Account",
      description:
        "Investifyd allows you to seamlessly and securely manage all your family accounts at one place. We believe in dreaming, investing, and growing together.",
    },
    {
      imgPath: "/service/service-4.svg",
      title: "Multi Asset Investing",
      description:
        "Investifyd account will have all your investing options at one place. Stay tuned as we bring to you more investing options for you to create a nimble and diversified portfolio.",
    },
  ];
  return (
    <main className="page-content">
      {/* ============= Hero section ========= */}
      <section className="flex flex-col pt-12 md:pt-0 items-center justify-between gap-12 md:flex-row md:items-start h-5/6 p-4 md:p-24">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">Welcome to our Landing Page!</h1>
            <p className="mt-4 text-lg">
              This is a hero section with an image and text.
            </p>
            <Link
              className="py-2 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring"
              href={"#"}
            >
              {" "}
              click me
            </Link>

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
      <section className="my-12 items-center justify-between h-3/4 p-4 md:p-24">
        <h2 className="heading-2">Our Services</h2>
        <h4 className="text-lg text-center mt-8">
          Meet exciting feature of app
        </h4>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, i) => {
            return (
              // <Card className="px-4 py-6">
              <>
                <div className="max-w-[270px] d-flex">
                  <div className="flex flex-col items-center justify-between gap-4 text-center">
                    <Image
                      src={item.imgPath}
                      alt={`Service ${i}`}
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-center">{item.description}</p>
                  </div>
                </div>
              </>
              // </Card>
            );
          })}
        </div>
      </section>

      {/* ============= WHY US section ========= */}
      <section className="my-12 items-center justify-between p-4 sm:p-16 md:p-24 bg-blue-100">
        <h2 className="heading-2">Why Investifyd?</h2>
        <h4 className="text-lg text-center mt-8">
          Our goal is to make online investments simpler, secure, and seamless
          for you to help you build wealth.
        </h4>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {why.map((item, i) => {
            return (
              <>
                <div className="">
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4">
                    <Image
                      src={item.imgPath}
                      alt={`Service ${i}`}
                      width={50}
                      height={50}
                      className="object-cover md:mt-4"
                    />
                    <div className="flex flex-col text-center md:text-left">
                      <h3 className="text-lg font-bold h-9">{item.title}</h3>
                      <p className="text-sm leading-[26px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      {/* ============= WHY US section ========= */}
      <FAQs />
    </main>
  );
}
