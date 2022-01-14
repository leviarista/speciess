export const getDangerLevelName = (dangerLevel) => {
    if (!dangerLevel) return "";
    switch (dangerLevel.toLowerCase()) {
        case "extinct":
            return "EX";
        case "extinct in the wild":
            return "EW";
        case "regionally extinct":
            return "RE";
        case "critically endangered":
            return "CR";
        case "endangered":
            return "EN";
        case "vulnerable":
            return "VU";
        case "conservation dependent":
            return "CD";
        case "lower risk/conservation dependent":
            return "CD";
        case "near threatened":
            return "NT";
        case "lower risk/near threatened":
            return "NT";
        case "least concern":
            return "LC";
        case "lower risk/least concern":
            return "LC";
        case "data deficient":
            return "DD";
        case "not applicable":
            return "NA";
        case "not evaluated":
            return "NE";
        default:
            return "NONE";
    }
}
