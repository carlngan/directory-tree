"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandReader = void 0;
const Directory_1 = require("./Directory");
/***
 * CommandReader is in charge or reading a list of commands and producing a list of outputs
 */
class CommandReader {
    constructor() {
        this.root = new Directory_1.Directory("");
        this.output = [];
    }
    /***
     * Take a list of commands and parses it
     * @param {string[]} commands list of commands to parse
     */
    parseCommands(commands) {
        commands.forEach(c => {
            this.parseCommand(c);
        });
    }
    /***
     * Parse a single line of command
     * @param {string} commandStr the line of command to parse
     */
    parseCommand(commandStr) {
        const parts = commandStr.split(" ");
        const command = parts[0];
        switch (command) {
            case "CREATE":
                const path = parts[1];
                this.root.createDirectory(path);
                this.output.push(commandStr);
                break;
            case "LIST":
                this.output.push(commandStr);
                const list = this.root.listDirectories(0);
                this.output.push(...list);
                break;
            case "MOVE":
                this.output.push(commandStr);
                this.root.moveDirectory(parts[1], parts[2]);
                break;
            case "DELETE":
                this.output.push(commandStr);
                const err = this.root.removeDirectory(parts[1]);
                if (err) {
                    this.output.push(`Cannot delete ${parts[1]} - ${err}`);
                }
                break;
            default:
                this.output.push(`Invalid command: ${commandStr}`);
        }
    }
    /***
     * Get output as a list
     */
    getOutput() {
        return this.output;
    }
    /***
     * Get the root directory
     */
    getRoot() {
        return this.root;
    }
}
exports.CommandReader = CommandReader;
