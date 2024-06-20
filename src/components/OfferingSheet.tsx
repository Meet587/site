import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import offeringsArray from "./offering.json";
import React from "react";
import { Separator } from "./ui/separator";

const Offering = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {offeringsArray.offering.map((el, i) => {
        return (
          <React.Fragment key={`off_${i}`}>
            <Sheet>
              <Card className="rounded-sm p-4 flex flex-col items-center text-center shadow-xl shadow-black/30">
                <Image
                  src={"/service/service-4.svg"}
                  alt={`Service`}
                  width={50}
                  height={50}
                  className="object-cover items-center mt-4"
                />
                <CardHeader>
                  <h4 className="text-ld md:text-2xl font-bold text-primary">
                    {el.title}
                  </h4>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center tracking-[.1em] text-lg leading-8 mt-3 md:mt-4 text-muted-foreground">
                    {el.shortDisc}
                  </CardDescription>
                  <CardFooter className="text-center tracking-[.05em] text-lg justify-center mt-3 md:mt-4 text-primary font-medium">
                    <SheetTrigger asChild>
                      <button>Read More</button>
                    </SheetTrigger>
                  </CardFooter>
                </CardContent>
              </Card>

              {/* <SheetContent className="w-[300px] sm:w-[540px] md:w-[640px] lg:w-[740px] xl:w-[840px] 2xl:w-[940px]"> */}
              <SheetContent className="w-[640px] overflow-y-auto">
                <SheetHeader className="mt-4">
                  <SheetTitle className="text-lx md:text-2xl font-bold">
                    {el.title}
                  </SheetTitle>
                  {/* <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription> */}
                </SheetHeader>
                <Separator className="my-2 md:my-5" />
                {el.discription.map((el, i) => {
                  return (
                    <SheetDescription
                      key={`desc_${i}`}
                      className="my-3 text-black tracking-wide text-justify"
                    >
                      {el}
                    </SheetDescription>
                  );
                })}
                {el.point.isPoints && (
                  <SheetDescription className="my-3 mt-5 text-black tracking-wide text-justify">
                    <ul className="list-disc list-outside ml-4">
                      {el.point.pointList?.map((el, i) => {
                        return (
                          <li key={`point_${i}`} className="my-2">
                            {el}
                          </li>
                        );
                      })}
                    </ul>
                  </SheetDescription>
                )}
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="button" variant={"outline"}>
                      close
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Offering;
