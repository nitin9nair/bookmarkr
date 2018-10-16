export class BookmarkModel {

    public bookmark_name: string;
    public bookmark_url: string;

    constructor(bookmark_name: string, bookmark_url: string) {
        this.bookmark_name = bookmark_name;
        this.bookmark_url = bookmark_url;
    }
}