import { BackendLogServerError } from "../exceptions/exception";

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr: string) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

// https://uibakery.io/regex-library/phone-number
export const isValidPhone = (str: string): boolean =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const prependZeroToString = (str: string, strLength: number) => {
  return str.padStart(strLength, "0");
};

export const getCurrentLocalISOString = (): string => {
  const now = new Date();
  const year = prependZeroToString(now.getFullYear().toString(), 4);
  const month = prependZeroToString((now.getMonth() + 1).toString(), 2);
  const day = prependZeroToString(now.getDate().toString(), 2);
  const hour = prependZeroToString(now.getHours().toString(), 2);
  const minute = prependZeroToString(now.getMinutes().toString(), 2);
  const second = prependZeroToString(now.getSeconds().toString(), 2);
  const milliseconds = prependZeroToString(now.getMilliseconds().toString(), 3);
  return `${year}-${month}-${day}T${hour}:${minute}:${second}.${milliseconds}Z`;
};

export const isBackendLogServerError = (
  error: unknown,
): error is BackendLogServerError => {
  return error instanceof BackendLogServerError;
};
