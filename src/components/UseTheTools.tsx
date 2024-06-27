import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UseTheTools = () => {
  return (
    <>
      <Tabs defaultValue="ACCOUNTING" className="w-screen-1/2">
        <TabsList>
          <TabsTrigger value="ACCOUNTING">ACCOUNTING & BOOKKEEPING</TabsTrigger>
          <TabsTrigger value="DOCUMENTS">DOCUMENTS MANAGEMENT</TabsTrigger>
          <TabsTrigger value="TAX">TAX SOFTWARE</TabsTrigger>
          <TabsTrigger value="PAYROLL">PAYROLL</TabsTrigger>
        </TabsList>
        <TabsContent value="ACCOUNTING">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="DOCUMENTS">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
};

export default UseTheTools;
