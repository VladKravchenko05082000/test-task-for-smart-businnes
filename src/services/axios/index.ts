import axios from "axios";
import { AxiosInstanceType } from "./types";

const baseURL = "https://jsonplaceholder.typicode.com";

export function getInstance({ timeout }: AxiosInstanceType) {
  const instance = axios.create({
    timeout: timeout ?? 60000,
    baseURL,
  });

  return instance;
}
