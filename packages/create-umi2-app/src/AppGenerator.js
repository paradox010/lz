var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Generator } from '@lzdata/utils';
import { join } from 'path';
export default class AppGenerator extends Generator {
    writing() {
        return __awaiter(this, void 0, void 0, function* () {
            this.copyDirectory({
                context: {
                    version: require('../package').version,
                    conventionRoutes: this.args.conventionRoutes,
                },
                path: join(__dirname, '../templates'),
                target: this.cwd,
            });
        });
    }
}
//# sourceMappingURL=AppGenerator.js.map