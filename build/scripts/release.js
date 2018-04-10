#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const execSync = require("child_process").execSync;

const pkg = require("../../package.json");

const rootPath = path.resolve(__dirname, "../..");
const releasePath = path.resolve(rootPath, "../trick-dist");

execSync("rm -rf lib/ && rm -rf bower.json && rm -rf *.md", {cwd: releasePath});
execSync("cp -R lib/ ../trick-dist/lib && cp bower.json ../trick-dist && cp *.md ../trick-dist", {cwd: rootPath});
execSync(`git add . && git commit -m "Built on ${new Date()}" && git tag -a v${pkg.version} -m "${pkg.version}" && git push --tags && git push --all`, {cwd: releasePath});
