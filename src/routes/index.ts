import { Request, Response, NextFunction, Router } from 'express';
import fp from 'lodash/fp';
const router = Router();
import getUser from "../middleware/utlis";
import data from "../storage/data.json"

/* Lend a Book  */
router.get('/', getUser, (req: Request, res: Response, next: NextFunction) => {
  // Grab username and verify if the user has a book
  getUser(req,res,next)
  
  //  If user exists
    // Check if the user has a book taken out


});

module.exports = router;
