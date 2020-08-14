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
const fs_1 = require("fs");
const path_1 = require("path");
const index_1 = require("./index");
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
        const tpl = fs_1.readFileSync(opts.templatePath, 'utf-8');
        const content = index_1.Mustache.render(tpl, opts.context);
        index_1.mkdirp.sync(path_1.dirname(opts.target));
        console.log(`${index_1.chalk.green('Write:')} ${path_1.relative(this.cwd, opts.target)}`);
        fs_1.writeFileSync(opts.target, content, 'utf-8');
    }
    copyDirectory(opts) {
        const files = index_1.glob.sync('**/*', {
            cwd: opts.path,
            dot: true,
            ignore: ['**/node_modules/**'],
        });
        files.forEach((file) => {
            const absFile = path_1.join(opts.path, file);
            if (fs_1.statSync(absFile).isDirectory())
                return;
            if (file.endsWith('.tpl')) {
                this.copyTpl({
                    templatePath: absFile,
                    target: path_1.join(opts.target, file.replace(/\.tpl$/, '')),
                    context: opts.context,
                });
            }
            else {
                console.log(`${index_1.chalk.green('Copy: ')} ${file}`);
                const absTarget = path_1.join(opts.target, file);
                index_1.mkdirp.sync(path_1.dirname(absTarget));
                fs_1.copyFileSync(absFile, absTarget);
            }
        });
    }
}
exports.default = Generator;
