export {Retrieve} from "./Retrieve";
export {Save} from "./Save";
export {StorageID} from "./StorageID";
export {
    generateKeyFromPrefixAndSuffix,
    generateKeySuffix,
    setItemIntoSessionStorage,
    getItemFromSessionStorage,
    removeItemFromSessionStorage,
    getItemOrDefault,
    setItemIntoLocalStorage,
    getItemFromLocalStorage,
    removeItemFromLocalStorage,
} from "./storage-service"
export type {
    KeySuffix,
    StorageItem,
    StorageItems,
    TransferKey,
    TransferKeys,
    GeneralPrefixes,
} from "./TypesAndInterfaces"