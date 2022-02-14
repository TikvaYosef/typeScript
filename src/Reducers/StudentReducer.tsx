import { Istudent } from "../Models/Istudent";



export const StudentReducer = (state: any, action: any) => {
    let arrayOfStudent: Istudent[] = [{ fname: "tikva", lname: "yosef", age: 26 }, { fname: "keren", lname: "hailu", age: 2 }]

    switch (action.type) {
        case "show":
            return arrayOfStudent;

        default:
            break;
    }
}
