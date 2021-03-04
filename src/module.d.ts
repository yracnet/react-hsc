

type TValue = any
type TStore = any
type TAction = { type?: string }
type TStoreHandler = {}

type FReducer = (state: TValue, action: TAction) => TValue
type FInitial = (state?: TValue) => TValue
type FSelector = (store: TStore) => TValue;
type FAction = () => TAction;
type FDispatch = (v: TAction) => void;
type FDispatchAsync = (dispatch: FDispatch) => void;


type UseDispatchArgs = string | TAction | FAction | FDispatchAsync;
type CreateReducerArgs = [FReducer, TValue, FInitial?]
type CreateStoreArgs = { [key: string]: CreateReducerArgs } | CreateReducerArgs

const createStore: (value: CreateStoreArgs) => TStoreHandler;

const useSelector: (fn: FSelector) => TValue;
const useDispatch: () => (action: UseDispatchArgs) => void;

export default StoreContext;

export {
    createStore,
    useSelector,
    useDispatch,
}