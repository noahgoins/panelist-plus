

import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function DateDropdown({onDateSet}) {

    const [dateValue, setDateValue] = useState("")

    function updateDate(event) {
        setDateValue(event.target.value);
        onDateSet(event.target.value);
    }

    function resetDate() {
        setDateValue("");
        onDateSet(null);
    }

    return (
        <div className="d-flex gap-3">
            <Form.Control type="date" value={dateValue} onChange={updateDate} />
            <Button id="resetState" variant="secondary" onClick={resetDate}>Reset</Button>
        </div>
    );
}

export default DateDropdown;