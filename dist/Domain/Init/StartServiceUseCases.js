"use strict";
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
const express_1 = __importDefault(require("express"));
const referenceEntryPoints_1 = __importDefault(require("../../EntryPoints/referenceEntryPoints"));
const config_json_1 = __importDefault(require("../../Infraestructure/config.json"));
const app = express_1.default();
var cors = require("cors");
app.use(cors({
    origin: "*",
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(referenceEntryPoints_1.default);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield app.listen(config_json_1.default.port);
        console.log("Server on port", config_json_1.default.port);
    });
}
init();
