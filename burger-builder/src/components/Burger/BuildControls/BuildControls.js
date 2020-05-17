import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
    <div className="BuildControls">
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                disabledInfo={props.disabledInfo[ctrl.type]}
                add={() => {
                    props.ingredientAdded(ctrl.type);
                }}
                remove={() => {
                    props.ingredientRemove(ctrl.type);
                }} />
        ))}
    </div>
);

export default buildControls;