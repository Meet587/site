import NavigationCard from "@/components/NavigationCard";
import OfferingDialog from "@/components/OfferingDialog";
// import Offering from "@/components/OfferingSheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Service = () => {
  const serviceType = [
    {
      title: "Accounting Outsourcing",
      link: "#",
      description: "Accounting Outsourcing",
    },
    {
      title: "Tax Outsourcing",
      link: "#",
      description: "Tax Outsourcing",
    },
    {
      title: "Payroll Outsourcing",
      link: "#",
      description: "Payroll Outsourcing",
    },
    {
      title: "FTE Model",
      link: "#",
      description: "FTE Model",
    },
    {
      title: "UK & EU Outsourcing",
      link: "#",
      description: "UK & EU Outsourcing",
    },
    {
      title: "CPA's & CA's Corner",
      link: "#",
      description: "CPA's & CA's Corner",
    },
  ];
  return (
    <>
      <title>Services</title>
      <main className="page-content">
        <h1 className="heading-2">Our Services</h1>

        {/* ============= What We Do? section ========= */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 my-6 py-4 pb-8 md:my-12 px-4 md:px-16">
          <aside>
            <Image
              alt="services"
              src="/service/services1.svg"
              width={700}
              height={700}
              className="object-cover hidden md:flex"
            />
          </aside>
          <section className="w-full">
            <article>
              <h3 className="text-4xl text-primary font-bold">What We Do?</h3>
              <Separator className="my-4" />
              <p className="tracking-widest leading-8 mt-8 md:mt-10 font-medium text-muted-foreground">
                Axon outsourcing provides wide range of services for accounting
                & bookkeeping, payroll processing, tax returns prep,and other
                back office outsourcing services. Our processing team has
                specialised skills in handling easy to messy jobs in various
                softwares. Moreover Axon team goes extra mile to help
                organisation to manage their accounting function eficiently.
              </p>
              <p className="tracking-widest leading-8 font-medium mt-8 md:mt-10 text-muted-foreground">
                Click to view our detailed offerings from the list of
                outsourcing services below.
              </p>
            </article>

            <div className="mt-8 md:mt-10">
              <NavigationCard arr={serviceType} />
            </div>
          </section>
        </section>

        {/* ============= OUR OFFERINGS section ========= */}
        <section className="my-6 pb-8 md:my-6 px-4 md:px-16 bg-background p-4 sm:p-10">
          <article>
            <h3 className="text-4xl text-primary font-bold">What We Do?</h3>
            <Separator className="my-4" />
            <p className="tracking-[.15em] leading-8 mt-8 md:mt-10 font-medium text-muted-foreground">
              With an unstable economy, formulating new strategies to save
              operational costs has become a critical concern for most
              accountants across the globe today. We help accountants in
              practice to reduce theiroperational costs by managing their
              back-office compliance and clerical functions.
            </p>
          </article>
          <div className="mt-10">
            {/* <Offering /> */}
            <OfferingDialog />
          </div>
        </section>
      </main>
    </>
  );
};

export default Service;
