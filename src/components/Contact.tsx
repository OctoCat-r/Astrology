import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
export function DialogDemo({ value = 0 }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {value === 0 ? (
          <Button className="text-lg hover:text-orange-400 font-semibold">
            Contact
          </Button>
        ) : value === 1 ? (
          <Button
            variant="outline"
            className="bg-orange-300 font-semibold border-black hover:border-white hover:border-2 mr-96"
          >
            Contact Now
          </Button>
        ) : (
          <Button
            variant="outline"
            className="hover:bg-orange-300 border-orange-300 p-1"
          >
            Contact Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-r from-slate-400 to-slate-500">
        <DialogHeader>
          <DialogTitle>Contact us</DialogTitle>
          <DialogDescription>
            Reach out to us if you want to change your life completely
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right font-bold">
              Phone No.
            </Label>
            {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
            <Label className="col-span-3">+91-9415257805</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right font-bold">
              Chat with us
            </Label>
            {/* <Input id="username" value="@peduarte" className="col-span-3" /> */}
            <Link
              href="https://wa.me/9415257805"
              className="col-span-3  underline hover:text-orange-300"
            >
              On whatsApp
            </Link>
          </div>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
