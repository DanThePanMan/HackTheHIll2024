import Toolbar from "react-big-calendar/lib/Toolbar";
import Button from "./Button.jsx";

class BasicToolbar extends Toolbar {
    constructor(props) {
        super(props);
    }

    handleDayChange = (event, mconte) => {
        mconte(event.target.value);
    };

    handleNavigate = (detail, elem) => {
        detail.navigate(elem);
    };

    render() {
        return (
            <>
                <div className="rounded-lg bg-mid">
                    <div className="h-16 p-4 m-0 bg-white rounded-lg flex flex-row justify-between items-center gap-4 ">
                        <div className="flex flex-row items-center gap-4">
                            <div className="rbc-btn-group">
                                <select
                                    className="form-control px-3 p-[0.35rem] border border-dark rounded-md text-dark hover:bg-main hover:shadow-[0_0_15px_1px_] hover:text-white hover:border-main hover:shadow-main/50 transition-all ease-in-out"
                                    onChange={(e) =>
                                        this.handleDayChange(e, this.view)
                                    }
                                    defaultValue={"week"}>
                                    <option className="optionbar" value="day">
                                        Day
                                    </option>
                                    <option className="optionbar" value="week">
                                        Week
                                    </option>
                                    <option className="optionbar" value="month">
                                        Month
                                    </option>
                                    <option
                                        className="optionbar"
                                        value="agenda">
                                        Agenda
                                    </option>
                                </select>
                            </div>

                            <Button
                                type="button"
                                className="nextp-btn"
                                onClick={() =>
                                    this.handleNavigate(this, "PREV")
                                }>
                                Prev
                            </Button>
                            <Button
                                type="button"
                                className="nextp-btn"
                                onClick={() =>
                                    this.handleNavigate(this, "NEXT")
                                }>
                                Next
                            </Button>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <div className="text-dark font-[550] text-xl">
                                {this.props.label}
                            </div>
                            <Button
                                type="button"
                                onClick={() =>
                                    this.handleNavigate(this, "TODAY")
                                }>
                                Today
                            </Button>
                        </div>
                    </div>
                    <div className="bg-mid h-2"></div>
                </div>
                <div className="rounded-lg bg-mid">
                    <div className="bg-mid h-2"></div>
                    <div className="bg-white h-3 p-4 rounded-t-lg"></div>
                </div>
            </>
        );
    }
}

export default function CalendarToolbar(props) {
    return <BasicToolbar {...props} />;
}
