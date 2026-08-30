export interface ListItem {
    id: string;
    text: string;
    date: string;
}

// No date or id needed, only the text of the item is required for submission.
export interface ListItemSubmission {
    text: string;
}