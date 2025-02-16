import {createOrderedMap} from "@xy-form/ui-schema";
import {demoStepperSchema} from "../content/docs/widgets/StepperDemo";

const schemaStepper = createOrderedMap(demoStepperSchema);

const dataStepper = createOrderedMap({
    'step-1': {name: 'Max'}
});

export {schemaStepper, dataStepper}

