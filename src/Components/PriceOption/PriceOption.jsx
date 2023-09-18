import Features from "../Features/Features";


const PriceOption = ({ option }) => {

    const { price, optionName, features } = option;

    return (
        <div className="bg-[#1c9ec9] text-white p-10 rounded-lg text-center gap-y-5 flex flex-col">
            <h2 className="text-5xl font-bold">{price}<span className="text-xl font-medium">/mo</span></h2>
            <h3 className="text-2xl font-semibold">{optionName}</h3>
            <div className="mt-[50px] flex-grow">
                {
                    features.map((feature, idx) =>
                        <Features
                            key={idx}
                            feature={feature}>
                        </Features>
                    )
                }
            </div>
            <button className="bg-[#102b57] px-5 py-3 rounded-lg text-base font-medium duration-700 hover:bg-white hover:text-[#102b57]">Buy Membership</button>
        </div>
    );
};

export default PriceOption;