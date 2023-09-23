import { Client } from "fauna";

const client = new Client({ secret: import.meta.env.FAUNA_SECRET });
