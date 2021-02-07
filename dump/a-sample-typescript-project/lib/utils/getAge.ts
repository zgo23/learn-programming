import * as moment from "moment";

export default (date: Date): number => {
    return moment().diff(date, "years");
};
