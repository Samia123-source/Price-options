import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

const priceOptions =
    [
  {
    "id": 1,
    "name": "Basic Fitness",
    "price": 19.99,
    "duration": "Monthly",
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "Free fitness assessment",
      "1 group class per week"
    ]
  },
  {
    "id": 2,
    "name": "Standard Membership",
    "price": 39.99,
    "duration": "Monthly",
    "features": [
      "Unlimited gym access",
      "Access to all group classes",
      "Locker and shower access",
      "Free diet consultation",
      "2 guest passes per month"
    ]
  },
  {
    "id": 3,
    "name": "Premium Fitness Pro",
    "price": 69.99,
    "duration": "Monthly",
    "features": [
      "24/7 gym access",
      "Unlimited group classes",
      "Personal trainer session (2/month)",
      "Sauna and steam room access",
      "Custom workout plan",
      "Priority support"
    ]
  },
  {
    "id": 4,
    "name": "Couples Membership",
    "price": 109.99,
    "duration": "Monthly",
    "features": [
      "Membership for 2 people",
      "Unlimited gym access",
      "All premium facilities included",
      "4 personal training sessions/month",
      "Nutrition guidance",
      "Access to VIP lounge"
    ]
  },
  {
    "id": 5,
    "name": "Elite Annual Package",
    "price": 699.99,
    "duration": "Yearly",
    "features": [
      "Full premium access for 12 months",
      "Unlimited personal training",
      "Body composition analysis",
      "Exclusive fitness workshops",
      "Free gym merchandise",
      "Priority booking for classes"
    ]
  }
]
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
           <div className="grid grid-cols-3 gap-6">
             {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
            
        </div>
    );

}

export default PriceOptions;