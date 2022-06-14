import { getProfile } from "../utility/auth";
import { getUserDataString } from "./actionString";

export const getUserDataAction = (token) => ({
    type: getUserDataString,
    payload: getProfile(token)
})