// CountryDropdown.js
// Component that represents a dropdown where the user selects a state.
// The options values are state codes used for queries. Currently only supports US and CA.

import { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

function StateDropdown({country, onStateSet}) {

    const [selectValue, setSelectValue] = useState("Choose State");
    useEffect(handleCountrySet, [country]);

    // Called when the country prop is changed. Resets the dropdown.
    function handleCountrySet() {
        resetState();
    }

    // Updates state when changed in dropdown. Sets the state value.
    function updateState(event) {
        setSelectValue(event.target.value);
        onStateSet(event.target.value);
    }

    // Resets the dropdown value to default (Choose State). Resets the state value to null.
    function resetState() {
        setSelectValue("Choose State");
        onStateSet(null);
    }

    // Load the state options into an array depending on the country.
    let stateOptions = [];
    if (country != null) {
        let countryStateList = stateList[country];
        for (let key in countryStateList) {
            stateOptions.push(<option key={key} value={key}>{countryStateList[key]}</option>);
        }
    }
    
    return (
        <div className="d-flex gap-3">
            <Form.Select value={selectValue} onChange={updateState}>
                <option value="Choose State" disabled>Choose State</option>
                {stateOptions}
            </Form.Select>
            <Button id="resetState" variant="secondary" onClick={resetState}>Reset</Button>
        </div>
        
    );
}

export default StateDropdown;

const stateListUS = {
    "AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming"
}

const stateListCA = {
    "AB":"Alberta","BC":"British Columbia","MB":"Manitoba","NB":"New Brunswick","NL":"Newfoundland and Labrador","NS":"Nova Scotia","NT":"Northwest Territories","NU":"Nunavut","ON":"Ontario","PE":"Prince Edward Island","QC":"Quebec","SK":"Saskatchewan","YT":"Yukon",
}

const stateList = {
    "US": stateListUS,
    "CA": stateListCA
}

