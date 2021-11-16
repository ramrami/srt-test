import _ from "lodash";

const PaymentOptonCard = ({ paymentOption }) => {
  let { slidingScale, settingType, minRate, maxRate, category } = paymentOption;
  let borderColor = () => {
    switch (settingType.toLowerCase()) {
      case "online":
        return "border-indigo-200";

      case "in-person":
        return "border-pink-200";

      case "group":
        return "border-blue-200";

      case "group online":
        return "border-green-200";

      default:
        return "border-grey-100";
    }
  };
  return (
    <div
      className={`grid grid-cols-1 p-5 border-2 rounded-md ${borderColor()} gap-y-3`}
    >
      <p className="font-bold">{_.capitalize(category)} Session</p>
      <p>
        <b>Setting:</b> {settingType}
      </p>
      <p>
        <b>Sliding Scale?:</b> {slidingScale ? " Yes" : "No"}
      </p>
      <p>
        <b>Price Per Session:</b> ${minRate} {maxRate ? ` - $${maxRate}` : ""}
      </p>
    </div>
  );
};

export const PaymentOptionsDisplay = ({ paymentOptions }) => {
  return (
    <div className="flex space-x-4 flex-rows">
      {paymentOptions.map((option) => {
        return <PaymentOptonCard key={option.id} paymentOption={option} />;
      })}
    </div>
  );
};
