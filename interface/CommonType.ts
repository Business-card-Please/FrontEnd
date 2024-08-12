export interface AutoInputInterFace {
  value: string | number | object | any; // ? ant 쓸꺼면 왜 달아놨냐 파충류 새끼야
  setValue: Function;
  choiceData: string[];
  placeHolder: string;
}
