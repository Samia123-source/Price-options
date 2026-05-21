import PropTypes from 'prop-types';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <p><IoCheckmarkCircleSharp className='text-green-500'></IoCheckmarkCircleSharp>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;
