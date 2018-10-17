export class BookmarkModel {

    public bookmark_description: string;
    public bookmark_url: string;

    constructor(bookmark_description: string, bookmark_url: string) {
        this.bookmark_description = bookmark_description;
        this.bookmark_url = bookmark_url;
    }
}