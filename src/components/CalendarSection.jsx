import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import events from "../utils/dummyEvents";
import { useState } from "react";

import CalendarToolbar from "./CalendarToolbar";

const localizer = momentLocalizer(moment);

export default function CalendarSection() {
    const [calendarState, setCalendarState] = useState("week");

    return (
        <div className="calendarSink bg-mid rounded-xl col-span-6 col-start-3 flex flex-col gap-12 m-4 p-4 w-[70vw]">
            <CalendarToolbar stateHandler={setCalendarState} />
            <Calendar
                className="bg-white rounded-lg p-2 h-[42rem]"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                view={calendarState}
                toolbar={false}
            />
        </div>
    );
}
