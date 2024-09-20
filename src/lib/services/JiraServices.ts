import { JiraIssues, JiraProject } from "../types";

export const fetchJiraProjects = async (): Promise<JiraProject[]> => {
    const response = await fetch('http://localhost:3000/api/j/projects');
    if (response.ok) {
        console.log("ok fetchJiraProjects: ", response)
    } else {
        console.error(response)
        throw new Error("response.statusText");
    }
    return response.json();
};

export const fetchJiraIssues = async (): Promise<JiraIssues[]> => {
    const response = await fetch('http://localhost:3000/api/j/issues');
    if (response.ok) {
        console.log("ok: ", response)
    } else {
        console.error(response)
        throw new Error("response.statusText");
    }
    return response.json();
};