import path from 'path';
import UserRecord from '../types/types';
import { writeFile, existsSync } from 'fs';


const data: UserRecord[] = [];

// Create File To Store Users if the file does not exist
const init = function () {
    const filePath: string = path.join(__dirname, 'data.json');
    
    if(!existsSync(filePath)){
        writeFile(filePath, JSON.stringify(data, null, 2), (error) => {
            if (error) {
              console.log('An error has occurred ', error);
              return;
            }
            console.log('Array Initalized');
          });
    }
}


export default init;