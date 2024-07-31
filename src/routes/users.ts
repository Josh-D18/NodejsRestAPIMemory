import express, { Express, NextFunction, Request, Response } from "express";
const router = express.Router();


/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

module.exports = router;