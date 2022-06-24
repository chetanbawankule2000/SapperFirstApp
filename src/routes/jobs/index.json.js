import { jobs } from "./_data";
import { v4 as uuidv4 } from "uuid";

export function get(req, res, next) {
  res.end(JSON.stringify(jobs));
}

export function post(req, res, next) {
  let { title, salary, details } = req.body;

  let id = uuidv4();
  jobs.push({ id, title, salary, details });
  res.end(JSON.stringify(jobs));
}
