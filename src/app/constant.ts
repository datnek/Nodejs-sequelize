import {injectable} from "inversify";

export  interface IConstant {
    // @ts-ignore
    GetRoles();
}

@injectable()
export class Constant {
    /***
     *
     * @constructor
     */
    GetRoles(): {Title:string, Id: number }[] {
        return [
            {
                Title: "Access1",
                Id : 1
            },
            {
                Title: "Access2",
                Id : 2
            },
            {
                Title: "Access3",
                Id : 3
            },
            {
                Title: "Access4",
                Id : 4
            },
            {
                Title: "Access5",
                Id : 5
            }
        ];
    }
}
