import React from 'react';
import { CSVLink } from "react-csv";

export const ExportExcel = ({ header, data }) => {
    return (
        <div>
            <CSVLink
                headers={header}
                data={data}
                filename={"my-link.csv"}
                className="btn btn-primary"
                target="_blank"
            >
                Download me
            </CSVLink>
        </div>
    )
}
