/// <reference types="yargs" />
declare const _default: ({ cwd, args, }: {
    cwd: string;
    args: {
        [argName: string]: unknown;
        _: string[];
        $0: string;
    };
}) => Promise<void>;
export default _default;
