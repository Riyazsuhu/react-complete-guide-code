import { memo } from "react";

const MyParagraph = props => {
    return <p>{props.show ? "Dummy Paragraph": ''}</p>
}

export default memo(MyParagraph)