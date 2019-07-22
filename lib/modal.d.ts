declare type Callback = (result?: boolean | string) => any;
declare type Options = {
    callback: Callback;
};
declare const modals: {
    closeModal: (callback?: Callback | undefined) => void;
    confirm: (message: any, options: Options) => void;
    alert: (message: any, options: Options) => void;
    input: (message: any, options: Options) => void;
    dialog: (child: any, options?: Options | undefined) => void;
};
export default modals;
//# sourceMappingURL=modal.d.ts.map