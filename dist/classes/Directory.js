"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
/***
 * Directory is in charge of a single directory and its subdirectories
 */
class Directory {
    /***
     * @constructor
     * @param {string} name name of this directory
     */
    constructor(name) {
        this.name = name;
        this.directories = [];
    }
    /***
     * Add a directory as a subdirectory
     * @param {Directory} d directory object
     */
    addDirectory(d) {
        this.directories.push(d);
        this.reorder();
    }
    /***
     * Create a directory is one doesn't already exist
     * @param {string} path can be the name of a direct subdirectory or a path
     */
    createDirectory(path) {
        const parts = path.split("/");
        const directory = this.getDirectory(parts[0]);
        // if directory doesn't exist, create it
        if (!directory) {
            this.directories.push(new Directory(parts[0]));
            this.reorder();
        }
        // if there are subpaths to create
        if (parts.length > 1 && directory) {
            parts.shift();
            directory.createDirectory(parts.join("/"));
        }
    }
    /***
     * Remove a directory if it exists
     * @param {string} path can be the name of a direct subdirectory or a path
     * @return {string | null} returns null if remove was successfully, error message otherwise
     */
    removeDirectory(path) {
        const parts = path.split("/");
        let d = null;
        for (let i = 0; i < this.directories.length; i++) {
            if (this.directories[i].getName() === parts[0]) {
                d = this.directories[i];
            }
        }
        if (!d) {
            return `${parts[0]} does not exist`;
        }
        // if this is end of the path
        if (parts.length === 1) {
            this.directories = this.directories.filter(d => {
                return d.getName() !== parts[0];
            });
        }
        else if (d) {
            parts.shift();
            d.removeDirectory(parts.join("/"));
        }
        return null;
    }
    /***
     * Moves a directory from a source to a destination
     * @param {string} sourcePath can be the name of a direct subdirectory or a path
     * @param {string} destinationPath can be the name of a direct subdirectory or a path
     */
    moveDirectory(sourcePath, destinationPath) {
        const sourceDirectory = this.getDirectory(sourcePath);
        const destinationDirectory = this.getDirectory(destinationPath);
        // if directory exist, move it to dest and remove it
        if (sourceDirectory) {
            destinationDirectory === null || destinationDirectory === void 0 ? void 0 : destinationDirectory.addDirectory(sourceDirectory);
            this.removeDirectory(sourcePath);
        }
    }
    /***
     * Return the name of this directory
     */
    getName() {
        return this.name;
    }
    /***
     * Find and return a directory in the list of subdirectories
     * @param {string} path can be the name of a direct subdirectory or a path
     */
    getDirectory(path) {
        const parts = path.split("/");
        let d = null;
        for (let i = 0; i < this.directories.length; i++) {
            if (this.directories[i].getName() === parts[0]) {
                d = this.directories[i];
            }
        }
        // if this is end of the path
        if (parts.length === 1) {
            return d;
        }
        else if (d) {
            parts.shift();
            return d.getDirectory(parts.join("/"));
        }
        return null;
    }
    /***
     * List all the directories and subdirectories under this directory
     */
    listDirectories(level) {
        const list = [];
        this.directories.forEach(d => {
            list.push(`${this.getSpaces(level)}${d.getName()}`);
            const childDirectories = d.listDirectories(level + 1);
            list.push(...childDirectories);
        });
        return list;
    }
    /***
     * Get leading spaces as a string. The number of spaces is determined by the level times 2.
     */
    getSpaces(level) {
        let spaces = "";
        for (let i = 0; i < level * 2; i++) {
            spaces += " ";
        }
        return spaces;
    }
    /***
     * Reorders the list of subdirectories in A->Z order ASC
     */
    reorder() {
        this.directories.sort((a, b) => a.getName().localeCompare(b.getName()));
    }
}
exports.Directory = Directory;
