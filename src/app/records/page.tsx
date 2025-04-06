"use client";

import { CalendarGrid } from "@/features/calander/components/calender-grid";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addMonths, format, subMonths, getDaysInMonth, getDay } from "date-fns";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

const AppPage = () => {
  const [date, setDate] = useState(new Date());

  const decMonth = () => {
    setDate(subMonths(date, 1));
  };

  const incMonth = () => {
    setDate(addMonths(date, 1));
  };

  const days = useMemo(() => getDaysInMonth(date), [date]);
  const firstDayOfWeek = useMemo(
    () => getDay(new Date(date.getFullYear(), date.getMonth(), 1)),
    [date],
  );

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="h-full">
      <div className="flex items-center gap-x-4 h-10 w-full dark:bg-zinc-900">
        <Button
          className="size-8 ml-2"
          variant="outline"
          size="icon"
          onClick={decMonth}
        >
          <ChevronLeft />
        </Button>
        <span className="min-w-40 text-center">{format(date, "MMMM, yyyy")}</span>
        <Button
          className="size-8"
          variant="outline"
          size="icon"
          onClick={incMonth}
        >
          <ChevronRight />
        </Button>
        <Button
          className="h-8"
          variant="outline"
          size="sm"
          onClick={() => setDate(new Date())}
        >
          Today
        </Button>
      </div>
      <div className="grid grid-cols-7">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={i} className="h-8" />
        ))}
        {Array.from({ length: days }).map((_, i) => (
          <CalendarGrid key={i} day={i + 1} date={date} />
        ))}
      </div>
    </div>
  );
};

export default AppPage;
