class Directory {
    files: File[];
    directories: Directory[];
    constructor(files: File[], directories: Directory[]){
        this.files = files;
        this.directories = directories;
    }

    addFile(file: File): void {
        this.files.push(file);
    }

    addDir(directory: Directory): void{
        this.directories.push(directory);
    }
}