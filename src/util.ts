type Difference = {
    quantity: number
    unit: string
    date: string
    more30days: boolean
};

export const getDifferenceBetweenDates = (dateCompare: string) : Difference => {
    var dateCommit: Date = new Date(dateCompare);
    var actualDate: Date = new Date();

    var more30days:boolean = false;
    var maxUnit: boolean = false;
    var count: number = 0;
    var exactDay: string = "";

    var difference: number = 0;
    var differenceTime: number = actualDate.getTime() - dateCommit.getTime();

    var unitOfTime: string = "";
    var arrayUnitOfTime: string[] = ["second", "minute", "hour", "day"];
    var month_names_short: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    while(!maxUnit){
        if (count === 0) {
            difference = Math.trunc(differenceTime/(1000));
            maxUnit = (difference < 60);
        } else if (count === 1) {
            difference = Math.round(differenceTime/(1000 * 60));
            maxUnit = (difference < 60);
        } else if (count === 2) {
            difference = Math.round(differenceTime/(1000 * 60 * 60));
            maxUnit = (difference < 24);
        } else if (count === 3) {
            difference = Math.round(differenceTime/(1000 * 60 * 60 * 24));
            maxUnit = (difference < 30);
        } else {
            exactDay = `${dateCommit.getDay()} ${month_names_short[dateCommit.getMonth()]}`
            maxUnit = true;
            more30days = true;
        }
        count++;
    }

    if (count <= 4 ) unitOfTime = (difference > 1) ? arrayUnitOfTime[count - 1] + "s" : arrayUnitOfTime[count - 1];   

    return {quantity: difference, unit: unitOfTime, date: exactDay, more30days: more30days};
};