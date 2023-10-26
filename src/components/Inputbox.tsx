import { ChangeEvent, useId } from 'react'


interface InputboxProps {
  label: string;
  amount: number;
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
  currencyOptions: string[];
  selectCurrency: string;
  amountDisable?: boolean;
  currencyDisable?: boolean;
}


function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
}: InputboxProps) {

  const amountInputId = useId();

  return (
    <>
      <div className="bg-white rounded-xl flex h-32 w-11/12 mt-5 ml-auto mr-auto shadow-inner">
        <div className="w-1/2">
          <label htmlFor={amountInputId} className="text-left text-2xl text-gray-400 p-2">{label}</label>
          <input
            id={amountInputId}
            className="bg-transparent w-full outline-none py-8 text-2xl p-3"
            type="number"
            disabled={amountDisable}
            value={amount.toString()}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            placeholder="Amount" />
        </div>

        <div className="w-1/2">
          <h1 className="text-right text-2xl text-gray-400 p-3">Currency Type</h1>
          <select
            className="rounded-lg h-12 w-1/2 bg-gray-200 cursor-pointer outline-none text-center text-2xl float-right mr-5 hover:shadow-2xl"
            value={selectCurrency}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}>

            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

    </>
  )
}

export default Inputbox