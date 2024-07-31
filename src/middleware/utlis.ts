import { Request, Response, NextFunction } from 'express';
import UserRecord from '../types/types';
import { writeFile, readFile } from 'fs';
import { __ } from 'lodash/fp';
import path from 'path';
import { isNull } from 'lodash';

const getUser = function (req: Request, res:Response, next:NextFunction) {
    const filePath = path.join(__dirname, "../storage", "data.json")
    // const username  = req.body.username;
    // const currentDate = req.body.currentDate;

    readFile(filePath, "utf8", (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        const userData:UserRecord[] = JSON.parse(data);

        if(userData.length < 1){
            console.log("Username Not In DataBase!")
            return false;
        } else {
            const findUser = (data: UserRecord[]): UserRecord | null => {

                return null
            }
    
            return findUser(userData);
        }
    });

}
export default getUser;