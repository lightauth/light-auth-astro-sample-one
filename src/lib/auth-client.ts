import { CreateLightAuthClient } from "@light-auth/astro/client";

export const { getSession, getUser, signIn, signOut } = CreateLightAuthClient();
