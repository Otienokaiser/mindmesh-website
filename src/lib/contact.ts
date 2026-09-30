import { budgets, projectTypes } from "./content";

export interface ContactPayload {
  name: string;
  email: string;
  organization: string;
  phone: string;
  need: string;
  budget: string;
  message: string;
}

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the client form and the API route so both enforce the same rules. */
export function validateContact(input: Record<string, unknown>): { data: ContactPayload; errors: FieldErrors } {
  const s = (k: string, max: number) => (typeof input[k] === "string" ? (input[k] as string).trim().slice(0, max) : "");
  const data: ContactPayload = {
    name: s("name", 120),
    email: s("email", 160),
    organization: s("organization", 160),
    phone: s("phone", 40),
    need: s("need", 60),
    budget: s("budget", 60),
    message: s("message", 4000),
  };
  const errors: FieldErrors = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!(projectTypes as readonly string[]).includes(data.need)) errors.need = "Please choose what you need help with.";
  if (data.budget && !(budgets as readonly string[]).includes(data.budget)) errors.budget = "Please choose a valid option.";
  if (data.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  return { data, errors };
}
