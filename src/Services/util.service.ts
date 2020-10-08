import {injectable} from "inversify";
import "reflect-metadata";
import * as dotenv from "dotenv";
import fs from 'fs';
import * as path from "path";

export interface IUtilService {
    SaveFile(base64Image: string, fileName: string, subDir: string ): void;
}

@injectable()
export class UtilService implements IUtilService{
    private directory: string;
    constructor(){
        dotenv.config();
        this.directory = path.join(__dirname, '/../public/upload');
    }

    /***
     *
     * @param base64Image
     * @param fileName
     * @constructor
     */
    SaveFile(base64Image: string, fileName: string, subDir: string=null): void {
        const dir = subDir ? path.join(this.directory, subDir): this.directory;
       //create directory if not exist
        !fs.existsSync(dir) && fs.mkdirSync(dir);

        const pathFile = path.join(dir,fileName);
        fs.writeFileSync(pathFile, base64Image, {encoding: 'base64'});
    }

    /*
    let base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA'; // Not a real image
// Remove header
let base64Image = base64String.split(';base64,').pop();
     */
}
