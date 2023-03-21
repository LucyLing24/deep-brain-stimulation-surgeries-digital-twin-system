import React, {useState} from "react";
import PageHeader from "../../Components/PageHeader";
import patientdetial from "../../Assets/PatientInfo/patientDetail.png";
import OperationPlan from "./operationPlan";
import OperationList from "./operationList";
import OperationSelect from "./operationSelect";


function OperationDesign() {

    const [create, setCreate] = useState(false)
    const [select, setSelect] = useState(false)
    return (
        <section className="model">
            <PageHeader/>
            <img
                src={patientdetial}
                style={{width: "100%"}}
            />
            {create === false ? <OperationList setCreate={setCreate}/> : null}
            {create === true && select === false ? <OperationSelect setSelect={setSelect}/> : null}
            {create === true && select === true ? <OperationPlan/> : null}

        </section>
    );
}

export default OperationDesign;
