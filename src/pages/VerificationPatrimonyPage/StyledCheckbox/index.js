import { MdOutlineCheck } from "react-icons/md";
import "./style.css";

export default function StyledCheckbox({checked=false}){
    return(
        <div className={ !checked ? "checkBtn" : "checkBtn checkBtn-active" }>
            {checked && <MdOutlineCheck size={25}/>}
        </div>
    );
}