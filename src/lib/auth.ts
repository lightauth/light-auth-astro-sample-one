import { Google } from "arctic";
import { type LightAuthProvider } from "@light-auth/core";
import { CreateLightAuth } from "@light-auth/astro";

const googleProvider: LightAuthProvider = {
  providerName: "google",
  arctic: new Google(import.meta.env.GOOGLE_CLIENT_ID, import.meta.env.GOOGLE_CLIENT_SECRET, import.meta.env.REDIRECT_URI),
  searchParams: new Map([["access_type", "offline"]]),
};

export const { providers, handlers, getSession, getUser, signIn, signOut } = CreateLightAuth({ providers: [googleProvider] });
