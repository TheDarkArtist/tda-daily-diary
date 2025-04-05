import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { format, formatDistanceToNow } from "date-fns";
import { PlusIcon } from "lucide-react";

interface CalendarGridProps {
  day: number;
}

export const CalendarGrid = ({ day }: CalendarGridProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="border relative size-full aspect-square hover:bg-zinc-900 transition-colors duration-300 ease-in-out cursor-pointer">
          <span className="absolute bottom-0 right-2 text-zinc-400 font-medium text-xs sm:text-base">
            {day}
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col max-w-full! w-[calc(100%-4rem)]! h-[calc(100%-4rem)]!">
        <div className="flex justify-between mr-10 border-b pb-1">
          <div>
            <DialogTitle>
              {format(new Date().setDate(day), "EEE, dd MMMM, yyyy")}
            </DialogTitle>
            <DialogDescription className="pt-1">
              {formatDistanceToNow(new Date().setDate(day), {
                addSuffix: true,
              })}
            </DialogDescription>
          </div>
          <Button variant="outline" size="sm">
            <PlusIcon />
          </Button>
        </div>
        <div className="overflow-y-auto">
          <div>something</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
