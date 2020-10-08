import {IUser} from "../databases/models/user";
import {ILocalization} from "../databases/models/localization";
import {IMedia} from "../databases/models/media";
import {ISecurity} from "../databases/models/security";

export class FakeData {
    User: IUser;
    Localization: ILocalization;
    Media: IMedia;
    Security: ISecurity;

    /***
     *
     */
    constructor(){
        this.SetLocalization();
        this.SetMedia();
        this.SetUser();
        this.SetSecurity();
    }

    /***
     *
     * @constructor
     */
   private SetUser(): void{
        this.User = {
            Email: "danick.takam@datnek.be",
            Username: "stratege",
            Password: "password",
            Slug: "113",
            AddressId : null,
            BackgroundId : null,
            Birthdate : null,
            Civility : 1,
            Firstname : "Danick",
            Lastname : "Takam",
            Phone : "+32465806045",
            Sex : 1,
            PhotoId : 1,
            CreatedAt : null,
            UpdatedAt : null
        };
    }

    /***
     *
     * @constructor
     */
    private SetSecurity(): void{
        this.Security = {
            Slug: "7842",
            UserId: 1,
            Token: null,
            Policy: "ROLE1",
            Privatecode: "475G",
            Origin: "https://datnek.be",
            Expiretime: 365*5
        };
    }

    /***
     *
     * @constructor
     */
    private SetMedia(): void{
        this.Media = {
            Name: "file1.png",
            Slug: "4756",
            Hashname: "145fvcjdfjkfdrnf.png",
            Extension: "type/png",
            Size: 14200
        };
    }

    /***
     *
     * @constructor
     */
    private SetLocalization(): void{
        this.Localization = {
            Longitude: 0,
            Slug: "147",
            Latitude: 0,
            Country: "be",
            City: "Borgerhout",
            Region: "Anvers",
            Fullname: "Te boelaarlei 41 anvers 2140 anvers",
            Street: "Te boelaarlei",
            Streetnumber: "41",
            Postalcode: "2140",
            Ip: "191.147.1.1",
            Pcmacaddress: null,
            continent: "eu",
            Timezone: null
        };
    }
}
