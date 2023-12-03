import { useState } from "react";
import { Alert, Button, Card, CardBody, Collapse, Form } from "react-bootstrap";
import CountryDropdown from "./CountryDropdown";
import StateDropdown from "./StateDropdown";
import DateDropdown from "./DateDropdown";

function QueryFormPanel({onFormSubmit, unixTime, restrictRange}) {

    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [afterDate, setAfterDate] = useState(null);
    const [beforeDate, setBeforeDate] = useState(null);

    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function handleCountrySet(value) {
        setCountry(value);
        setState(null);
    }

    function handleStateSet(value) {
        setState(value);
    }

    function handleAfterDateSet(value) {
        setAfterDate(value);
    }

    function handleBeforeDateSet(value) {
        setBeforeDate(value);
    }

    function showError(msg) {
        setErrorMessage(msg);
        setErrorVisible(true);
        setTimeout(hideError, 5000);
    }

    function hideError() {
        setErrorVisible(false);
        setErrorMessage("");
    }

    function handleSubmit() {
        // Check if the country is set, if not then activate the error message.
        if (country == null) { 
            showError("Error: You must select a country before submitting query.");
            return;
        }

        // Convert dates to unix time if possible.
        let afterDateUnix = null;
        if (afterDate != null) {
            afterDateUnix = Math.floor(new Date(afterDate).getTime() / 1000);
        }
        let beforeDateUnix = null;
        if (beforeDate != null) {
            beforeDateUnix = Math.floor(new Date(beforeDate).getTime() / 1000);
        }

        // Check if the date range is in the correct order.
        if (restrictRange && beforeDateUnix != null && afterDateUnix != null && afterDateUnix > beforeDateUnix) {
            showError("Error: Before Date must be later than After Date.");
            return;
        }

        // Pass the data through the onFormSubmit function with adjusted date format.
        let afterDateV = unixTime ? afterDateUnix : afterDate; // Pass unix time if desired by parent component.
        let beforeDateV = unixTime ? beforeDateUnix : beforeDate; // Pass unix time if desired by parent component.
        onFormSubmit({"country":country, "state":state, "afterDate":afterDateV, "beforeDate":beforeDateV});
    }

    return (
        <Card className="h-100">
            <CardBody>
                <Form id="queryData" method="post">
                    <h3>Location</h3>
                    <p>Query tournaments by location. Choose a country and a territory if applicable. Country selection is required but territory can be omitted if desired.</p>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="country">Country:</Form.Label>
                        <CountryDropdown onCountrySet={handleCountrySet}/>
                    </Form.Group>
                    <Collapse id="stateCollapse" in={["US", "CA"].includes(country)}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="state">State:</Form.Label>
                            <StateDropdown country={country} onStateSet={handleStateSet} />
                        </Form.Group>
                    </Collapse>
                    <hr />
                    <h3>Date Range</h3>
                    <p>Query tournaments from one date to another. Optional.</p>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="afterDate">After Date:</Form.Label>
                        <DateDropdown onDateSet={handleAfterDateSet}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="beforeDate">Before Date:</Form.Label>
                        <DateDropdown onDateSet={handleBeforeDateSet}/>
                    </Form.Group>
                    <Button variant="primary" className="mb-3" onClick={handleSubmit}>Show Results</Button>
                    
                </Form>
                <Alert variant="danger" className="mb-3" show={errorVisible}>{errorMessage}</Alert>
            </CardBody>
        </Card>
    );
}

export default QueryFormPanel