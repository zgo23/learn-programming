interface Action<T = any> {
    type: T;
}

interface AnyAction extends Action {
    [extraProps: string]: any;
}

interface AnyAction2 extends Action<string> {
    [extraProps: string]: any;
}

interface Dispatch<A extends Action = AnyAction> {
    <T extends A>(action: T, ...extraArgs: any[]): T;
}

interface MiddlewareAPI<D extends Dispatch = Dispatch, S = any> {
    dispatch: D;
    getState(): S;
}

interface Middleware<
    _DispatchExt = {},
    S = any,
    D extends Dispatch = Dispatch
> {
    (api: Middleware<D, S>): (
        next: D
    ) => (action: D extends Dispatch<infer A> ? A : never) => any;
}

const dispatch: Dispatch = (action: any) => action;
