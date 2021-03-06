import { Route, RequestParameters } from "@octokit/types";
import { RestEndpointMethods } from "./generated/method-types";
export declare type Api = {
    rest: RestEndpointMethods;
};
export declare type EndpointDecorations = {
    mapToData?: string;
    deprecated?: string;
    renamed?: [string, string];
    renamedParameters?: {
        [name: string]: string;
    };
};
export declare type EndpointsDefaultsAndDecorations = {
    [scope: string]: {
        [methodName: string]: [Route, RequestParameters?, EndpointDecorations?];
    };
};
