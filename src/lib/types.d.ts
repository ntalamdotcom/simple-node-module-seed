export interface JiraProject {
    expand: string;
    self: string;
    id: string;
    key: string;
    name: string;
    avatarUrls: { [size: string]: string }; // Use an indexed export type for avatar URLs
    projectTypeKey: string;
    simplified: boolean;
    style: string;
    isPrivate: boolean;
    properties: { [key: string]: any }; // Use an object for unknown properties
    entityId: string;
    uuid: string;
}

// Define the root object export type
export interface JiraIssues {
    expand: string;
    startAt: number;
    maxResults: number;
    total: number;
    issues: Issue[];
}

// Define the Issue export type
export type Issue = {
    expand: string;
    id: string;
    self: string;
    key: string;
    fields: Fields;
};

// Define the Fields export type
export type Fields = {
    summary: string;
    assignee: Assignee | null;
    updated: string;
    status: Status;
};

// Define the Assignee export type (can be null, adjust based on your needs)
export type Assignee = {
    self: string;
    name: string;
    key: string;
    emailAddress: string;
    avatarUrls: AvatarUrls;
    displayName: string;
    active: boolean;
    timeZone: string;
    accountId: string;
};

// Define the Status export type
export type Status = {
    self: string;
    description: string;
    iconUrl: string;
    name: string;
    id: string;
    statusCategory: StatusCategory;
};

// Define the StatusCategory export type
export type StatusCategory = {
    self: string;
    id: number;
    key: string;
    colorName: string;
    name: string;
};

// Define the AvatarUrls export type (optional, can be detailed if needed)
export type AvatarUrls = {
    '48x48': string;
    '24x24': string;
    '16x16': string;
    '32x32': string;
};