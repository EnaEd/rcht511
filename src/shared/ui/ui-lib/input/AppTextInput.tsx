import "./AppTextInput.css"

interface AppTextInputProps {
    inputData: string;
    onChangeText: (value: string) => void;
}

export const AppTextInput = ({inputData, onChangeText}: AppTextInputProps) => {
    return (
        <input  className={"textInput"} type={"text"}
               value={inputData}
               onChange={(e) => onChangeText(e.target.value)}/>
   );
}