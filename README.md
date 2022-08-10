## Endpoint Directory Manager

This is a tool where we are able to pass in a list of commands in order to CREATE, LIST, MOVE, or DELETE directories

## Commands and Assumptions

### CREATE

`CREATE target`
Target can be the name of the directory you want to create under the root directory, or it can be a path.

For example, we can create a multiple directories by passing a nested path
`CREATE a/b/c`

If a doesn't exist, it will create a, b, and c

If a exist and b doesn't, then it will go to a, and create b and c.

If we try to create a directory twice with the same name, it will output the command twice, but in reality only one directory will be created.

### LIST

`LIST`

List will list all the directories and subdirectories under root.

### MOVE

`LIST source destination`

Source and destinations can be names of directories, or it can be a path.

We will be moving the source directory into the destination directory. If source or destination is not found, then nothing happens.

### DELETE

`DELETE target`

Target can be the name of the directory you want to delete under the root directory, or it can be a path.

If the target does not exist, then an error will be added to the output.

For example: `Cannot delete fruits/apples - fruits does not exist`

## Instructions to run

`yarn install`

`yarn build`

`yarn start`

In order to automatically compile typescript on file changes, run `yarn watch` in another terminal.

## Further considerations

If we had unlimited time and considered scaling, then we can probably put the logic sides of things on the backend and call an api to get the output if that's all we're interested in.

Moving hard coded styles to its own stylesheets or scss files would be a nice to have.