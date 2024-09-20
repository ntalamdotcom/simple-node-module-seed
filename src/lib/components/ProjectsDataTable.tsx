import React = require("react");
import { DataGrid } from "@mui/x-data-grid";
import { JiraProject } from "../types";
export default function ProjectsDataTable(params: { data: JiraProject[] | undefined }) {
    const { data } = params
    const columns = [
        { field: 'key', headerName: 'Key', width: 100 },
        { field: 'name', headerName: 'Name', width: 200 },
        {
            field: 'avatarUrls',
            headerName: 'Avatar',
            width: 80,
        },
    ];
    return <>
        <div className="data-grid">
            {data && <DataGrid
                rows={data}
                columns={columns}
                pageSizeOptions={[5]}
            />}
        </div>
    </>
}