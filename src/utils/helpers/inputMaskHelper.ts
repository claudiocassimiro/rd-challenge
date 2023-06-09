import { KeyboardEvent } from "react";

export const phoneMask = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");

  if (value.length === 10) {
    value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else if (value.length === 11) {
    value = value.replace(/(\d{2})(\d)(\d{4})(\d{4})/, "($1) $2 $3-$4");
  }

  return value;
};

export const handleInputMask = (e: KeyboardEvent<HTMLInputElement>) => {
  const { target } = e;

  if (target) {
    return phoneMask((target as HTMLButtonElement).value);
  }

  return "";
};
