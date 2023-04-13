import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => (
    <FaStar color={selected ? "#FF6060" : "#E3E3E3"} />
    );
export default Star