import { HiMiniCheckCircle } from 'react-icons/hi2';

const Features = ({feature}) => {
    return (
        <div>
            <p className="text-left text-[15px] mt-3 flex justify-start gap-x-3 items-center"><HiMiniCheckCircle className='text-xl text-[#35c928]'></HiMiniCheckCircle> {feature}</p>
        </div>
    );
};

export default Features;