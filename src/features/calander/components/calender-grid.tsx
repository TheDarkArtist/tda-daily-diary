import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { format, formatDistanceToNow, isToday } from "date-fns";
import { PlusIcon } from "lucide-react";

interface CalendarGridProps {
  day: number;
  date: Date;
}

const resetTime = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const isYesterday = (date: Date) => {
  const today = resetTime(new Date());
  today.setDate(today.getDate() - 1);
  return date.getTime() === today.getTime();
};

const isTomorrow = (date: Date) => {
  const today = resetTime(new Date());
  today.setDate(today.getDate() + 1);
  return date.getTime() === today.getTime();
};

const getFormattedDate = (date: Date) => {
  if (isToday(date)) return "Today";
  if (isYesterday(date)) return "Yesterday";
  if (isTomorrow(date)) return "Tomorrow";
  return format(date, "EEE, MMMM dd, yyyy");
};

export const CalendarGrid = ({ day, date }: CalendarGridProps) => {
  const currentDate = new Date(date.getFullYear(), date.getMonth(), day);
  const today = isToday(currentDate);

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={cn(
            "border relative size-full aspect-square hover:bg-zinc-900 transition-colors duration-300 ease-in-out cursor-pointer",
            today && "bg-blue-950/20",
          )}
        >
          <span className="absolute bottom-0 right-2 text-zinc-400 font-medium text-xs sm:text-base">
            {day}
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col max-w-full! w-[calc(100%-4rem)]! h-[calc(100%-4rem)]!">
        <div className="flex justify-between mr-10 pb-1">
          <div className="relative">
            <DialogTitle>{getFormattedDate(currentDate)}</DialogTitle>
            <DialogDescription className="pt-1">
              {formatDistanceToNow(currentDate, {
                addSuffix: true,
              })}
            </DialogDescription>
          </div>
          <Button
            className="absolute bottom-4 right-4 rounded-full"
            variant="outline"
            size="icon"
          >
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
