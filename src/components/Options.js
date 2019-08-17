import React from "react";

function Options(props) {
  return (
    <>
      {props.options.map((op, index) => {
        return (
          <React.Fragment key={`${op} - ${index}`}>
            <input
              type="radio"
              name={props.name + 1}
              id={index}
              value={op}
              onChange={e =>
                props.handleSelect(
                  //uplifting state
                  props.name,
                  e.target.value,
                  props.answer === e.target.value
                )
              }
            />
            <span>{op}</span>
            <br />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Options;
