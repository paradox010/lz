var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { copyFileSync, readFileSync, statSync, writeFileSync } from 'fs';
import { dirname, relative, join } from 'path';
import { chalk, mkdirp, Mustache, glob } from './index';
class Generator {
    constructor({ cwd, args }) {
        this.cwd = cwd;
        this.args = args;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.writing();
        });
    }
    writing() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    copyTpl(opts) {
        const tpl = readFileSync(opts.templatePath, 'utf-8');
        const content = Mustache.render(tpl, opts.context);
        mkdirp.sync(dirname(opts.target));
        console.log(`${chalk.green('Write:')} ${relative(this.cwd, opts.target)}`);
        writeFileSync(opts.target, content, 'utf-8');
    }
    copyDirectory(opts) {
        const files = glob.sync('**/*', {
            cwd: opts.path,
            dot: true,
            ignore: ['**/node_modules/**'],
        });
        files.forEach((file) => {
            const absFile = join(opts.path, file);
            if (statSync(absFile).isDirectory())
                return;
            if (file.endsWith('.tpl')) {
                this.copyTpl({
                    templatePath: absFile,
                    target: join(opts.target, file.replace(/\.tpl$/, '')),
                    context: opts.context,
                });
            }
            else {
                console.log(`${chalk.green('Copy: ')} ${file}`);
                const absTarget = join(opts.target, file);
                mkdirp.sync(dirname(absTarget));
                copyFileSync(absFile, absTarget);
            }
        });
    }
}
export default Generator;
//# sourceMappingURL=Generator.js.map