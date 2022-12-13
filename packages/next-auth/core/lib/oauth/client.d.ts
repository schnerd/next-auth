import type { Client } from "openid-client";
import type { InternalOptions } from "../../types";
export declare function openidClient(options: InternalOptions<"oauth">): Promise<Client>;
