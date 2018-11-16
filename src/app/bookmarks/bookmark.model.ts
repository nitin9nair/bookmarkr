// bookmark model for the type of data object that contains bookmark description and url

export class BookmarkModel {

    public user_id: any;
    public bookmark_description: string;
    public bookmark_url: string;

    constructor( user_id: any, bookmark_description: string, bookmark_url: string) {
        this.user_id = user_id;
        this.bookmark_description = bookmark_description;
        this.bookmark_url = bookmark_url;
    }
}