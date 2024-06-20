import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import offeringsArray from "./offering.json";
import React from "react";
import { Separator } from "./ui/separator";

const OfferingDialog = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {offeringsArray.offering.map((el, i) => {
        return (
          <React.Fragment key={`off_${i}`}>
            <Dialog>
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
                    <DialogTrigger asChild>
                      <button>Read More</button>
                    </DialogTrigger>
                  </CardFooter>
                </CardContent>
              </Card>

              {/* <SheetContent className="w-[300px] sm:w-[540px] md:w-[640px] lg:w-[740px] xl:w-[840px] 2xl:w-[940px]"> */}
              <DialogContent className="w-[940px] overflow-y-auto">
                <DialogHeader className="mt-4">
                  <DialogTitle className="text-lx md:text-2xl font-bold">
                    {el.title}
                  </DialogTitle>
                </DialogHeader>
                <Separator className="my-2" />
                {el.discription.map((el, i) => {
                  return (
                    <DialogDescription
                      key={`desc_${i}`}
                      className="my-1 text-black tracking-wide text-justify"
                    >
                      {el}
                    </DialogDescription>
                  );
                })}
                {el.point.isPoints && (
                  <DialogDescription className="my-1 mt-2 text-black tracking-wide text-justify">
                    <ul className="list-disc list-outside ml-4">
                      {el.point.pointList?.map((el, i) => {
                        return (
                          <li key={`point_${i}`} className="my-2">
                            {el}
                          </li>
                        );
                      })}
                    </ul>
                  </DialogDescription>
                )}
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant={"outline"}>
                      close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OfferingDialog;
