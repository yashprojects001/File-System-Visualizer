const fileSystem = {
    name: "root",
    type: "folder",
    children: [
        {
            name: "Documents",
            type: "folder",
            children: [
                { name: "Resume.pdf", type: "file", size: 120 },
                { name: "Notes.txt", type: "file", size: 30 }
            ]
        },
        {
            name: "Images",
            type: "folder",
            children: [
                { name: "photo1.jpg", type: "file", size: 200 },
                { name: "photo2.png", type: "file", size: 180 }
            ]
        },
        {
            name: "Music",
            type: "folder",
            children: [
                { name: "song.mp3", type: "file", size: 500 }
            ]
        }
    ]
};
