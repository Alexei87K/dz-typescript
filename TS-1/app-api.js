'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'https://dummyjson.com/users';
function getUser(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.get(url);
            // console.log('data ' + JSON.stringify(data));
            const users = JSON.stringify(data.users);
            console.log('users ' + users);
        }
        catch (error) {
            console.log();
        }
    });
}
getUser(url);
// const url: string = 'https://dummyjson.com/users';
// function errorHandler(error: unknown) {
//     if (error instanceof Error) {
//         return error.message;
//     }
//     return 'this error not instanceof Error\nerror: ' + error;
// }
// function isSuccessResponse(res: Res): res is IResponseSuccess {
//     if (res.status === 200) {
//         return true;
//     }
//     return false;
// }
// function getUsersFromData(res: Res): IUser[] {
//     if (isSuccessResponse(res)) {
//         assertUsers(res.data);
//         return res.data.users;
//     } else {
//         throw new Error(res.data.statusText);
//     }
// }
// function assertUsers(data: unknown): asserts data is IDataSuccess {
//     if (typeof data === 'object' && !!data && 'users' in data) {
//         return;
//     }
//     throw new Error('users not found');
// }
// function getAddressFromUser(user: IUser): IAddress | never {
//     if (user.address) {
//         return user.address;
//     }
//     throw new Error('address from user not found');
// }
// async function requestToDummy(): Promise<IUser[] | undefined> {
//     try {
//         const response: IResponseSuccess = await axios(url);
//         const users = getUsersFromData(response);
//         return users;
//     } catch (error) {
//         throw new Error(errorHandler(error));
//     }
// }
// async function main(): Promise<void> {
//     try {
//         const users = await requestToDummy();
//         console.log(users);
//     } catch (error) {
//         console.log(errorHandler(error));
//     }
// }
// main();
function logId(id) {
    if (typeof id === "string") {
        console.log(id);
    }
    else if (typeof id === "number") {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
