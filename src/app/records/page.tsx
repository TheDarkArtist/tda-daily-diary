import { getDaysInMonth } from "@/lib/utils";
import { CalendarGrid } from "@/features/calander/components/calender-grid";

const AppPage = async () => {
  const days = getDaysInMonth();

  return (
    <div className="h-full">
      <div className="grid grid-cols-6">
        {Array.from({ length: days }).map((_, i) => (
          <CalendarGrid key={i} day={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default AppPage;
