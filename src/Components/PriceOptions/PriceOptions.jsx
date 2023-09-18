import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "optionName": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to cardio and strength equipment",
                "Unlimited gym hours",
                "Locker room access",
                "Discounts on gym merchandise",
                "Fitness assessment and goal setting"
            ]
        },
        {
            "id": 2,
            "optionName": "Premium Membership",
            "price": 49.99,
            "features": [
                "Access to all gym equipment and classes",
                "Personal trainer sessions (2 per month)",
                "Locker room access",
                "Towel service",
                "Nutrition consultation",
                "Access to exclusive fitness events"
            ]
        },
        {
            "id": 3,
            "optionName": "Family Membership",
            "price": 79.99,
            "features": [
                "Access for up to 4 family members",
                "Access to all gym equipment and classes",
                "Personal trainer sessions (4 per month)",
                "Locker room access",
                "Childcare services",
                "Discounted family fitness classes"
            ]
        }
    ]

    return (
        <div className="mt-20">
            <h2 className="text-5xl font-bold text-center">Best Prices in The Town</h2>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 ">
                {
                    priceOptions.map((option, idx) => <PriceOption
                        key={idx}
                        option={option}>

                    </PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;