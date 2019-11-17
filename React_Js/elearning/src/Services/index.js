import axios from "axios";
import { settings } from "../Config/Settings";

export const restConnector = axios.create({
  baseURL: settings.domain
});
