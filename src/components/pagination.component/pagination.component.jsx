import React from "react";
import './pagination.style.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Pagination(props) {
    return (
        <Stack direction="row" spacing={2} className="pagination">
            <Button variant="contained" onClick={() => props.handlePagination(0)}>prev</Button>
                <h2>{props.pageNumber}</h2>
            <Button variant="contained" onClick={() => props.handlePagination(1)}>next</Button>
        </Stack>
    );
}

export default Pagination;