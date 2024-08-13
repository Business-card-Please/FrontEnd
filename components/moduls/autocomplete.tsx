import { AutoInputInterFace } from "@type/CommonType";
import {
  useState,
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  useEffect
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
  const [search, setSearch] = useState("");
  const [key, setKey] = useState("");

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
    setSearch(textContent as string);
    props.setValue(key, textContent as string);
    setIsHidden(true);
  };

  useEffect(() => {
    setSearch(props.value);
    if (props.type === 1) setKey("uniName");
    else if (props.type === 2) setKey("major");
    else "";
    return () => {};
  }, []);

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
            hidden={!name.includes(search)}
          >
            {name}
          </AutoInputContent>
        ))}
      </AutoInputHiddenBox>
    </AutoInputBox>
  );
}
