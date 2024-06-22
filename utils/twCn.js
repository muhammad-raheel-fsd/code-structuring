import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const Cn = (...inputs) => twMerge(clsx(...inputs));

export default Cn;
