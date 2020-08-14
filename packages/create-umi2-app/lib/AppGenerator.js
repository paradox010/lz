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
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@lzdata/utils");
const path_1 = require("path");
class AppGenerator extends utils_1.Generator {
    writing() {
        return __awaiter(this, void 0, void 0, function* () {
            this.copyDirectory({
                context: {
                    version: require('../package').version,
                    conventionRoutes: this.args.conventionRoutes,
                },
                path: path_1.join(__dirname, '../templates'),
                target: this.cwd,
            });
        });
    }
}
exports.default = AppGenerator;
