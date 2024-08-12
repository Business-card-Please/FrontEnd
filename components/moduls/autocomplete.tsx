import { AutoInputInterFace } from "@type/CommonType";
import { SchoolNames } from "@type/UniversityType";
import {
  useState,
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler
} from "react";
import {
  AutoInputBox,
  AutoInputContent,
  AutoInputHiddenBox
} from "styles/CommonStyle";
import { SignUpInput } from "styles/SignUpStyle";

export default function AutoCompleteInput(props: AutoInputInterFace) {
  const [isHidden, setIsHidden] = useState(true);
  const [liOver, setLiOver] = useState(false);
  // const [result, setResult] = useState("");
  const [search, setSearch] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setSearch(value);
  };
  const onFocusIn: FocusEventHandler<HTMLInputElement> = (e) => {
    setIsHidden(false);
  };
  const onFocusOut: FocusEventHandler<HTMLInputElement> = (e) => {
    if (liOver) return;
    setIsHidden(true);
  };
  const onMouseOver: MouseEventHandler<HTMLLIElement> = (e) => {
    setLiOver(true);
    e.currentTarget.style.background = "#d8f3dc";
  };
  const onMouseLeave: MouseEventHandler<HTMLLIElement> = (e) => {
    setLiOver(false);
    e.currentTarget.style.background = "none";
  };
  const onAddResultClick: MouseEventHandler<HTMLLIElement> = (e) => {
    const { textContent } = e.currentTarget;
    // setResult(textContent as string);
    setSearch(textContent as string);
    props.setValue(textContent as string);
    setIsHidden(true);
  };
  return (
    <AutoInputBox width="100%">
      <SignUpInput
        onFocus={onFocusIn}
        onBlur={onFocusOut}
        onChange={onChange}
        placeholder={props.placeHolder}
        value={search}
      />
      <AutoInputHiddenBox hidden={isHidden}>
        {props.choiceData.map((name, idx) => (
          <AutoInputContent
            key={idx}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            onClick={onAddResultClick}
            // style={{ cursor: "pointer" }}
            hidden={!name.includes(search)}
          >
            {name}
          </AutoInputContent>
        ))}
      </AutoInputHiddenBox>
    </AutoInputBox>
  );
}
