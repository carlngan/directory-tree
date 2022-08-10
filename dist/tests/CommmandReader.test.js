"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandReader_1 = require("../classes/CommandReader");
const exampleCommands_1 = require("../components/exampleCommands");
describe("CommandReader", () => {
    test("default commanded to match expected output - happy path", () => {
        const expectedOutput = [
            "CREATE fruits",
            "CREATE vegetables",
            "CREATE grains",
            "CREATE fruits/apples",
            "CREATE fruits/apples/fuji",
            "LIST",
            "fruits",
            "  apples",
            "    fuji",
            "grains",
            "vegetables",
            "CREATE grains/squash",
            "MOVE grains/squash vegetables",
            "CREATE foods",
            "MOVE grains foods",
            "MOVE fruits foods",
            "MOVE vegetables foods",
            "LIST",
            "foods",
            "  fruits",
            "    apples",
            "      fuji",
            "  grains",
            "  vegetables",
            "    squash",
            "DELETE fruits/apples",
            "Cannot delete fruits/apples - fruits does not exist",
            "DELETE foods/fruits/apples",
            "LIST",
            "foods",
            "  fruits",
            "  grains",
            "  vegetables",
            "    squash"
        ];
        const cm = new CommandReader_1.CommandReader();
        cm.parseCommands(exampleCommands_1.defaultCommands);
        const output = cm.getOutput();
        output.forEach((o, i) => {
            expect(o).toBe(expectedOutput[i]);
        });
    });
    test("duplicate creates with the same name result in single directory", () => {
        const commands = ["CREATE fruits", "CREATE fruits", "CREATE fruits2", "CREATE fruits3", "LIST"];
        const expectedOutput = [
            "CREATE fruits",
            "CREATE fruits",
            "CREATE fruits2",
            "CREATE fruits3",
            "LIST",
            "fruits",
            "fruits2",
            "fruits3"
        ];
        const cm = new CommandReader_1.CommandReader();
        cm.parseCommands(commands);
        const output = cm.getOutput();
        output.forEach((o, i) => {
            expect(o).toBe(expectedOutput[i]);
        });
    });
});
