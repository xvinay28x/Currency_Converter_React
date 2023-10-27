import Inputbox from './components/Inputbox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from 'react';


function App() {
  const [amount, setAmount] = useState<number>(0)
  const [from, setFrom] = useState<string>("usd")
  const [to, setTo] = useState<string>("inr")


  const [convertedAmount, setConvertedAmount] = useState<number>(0)

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)

  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }



  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 w-full h-screen flex-col justify-center">
        <div className="flex justify-center bg-gradient-to-r from-rose-600 to-purple-600">
          <h1 className="text-4xl font-mono p-3 text-white">Currency Converter</h1>
        </div>
        <div className="flex justify-center mt-32 relative">
          <div className="flex-col h-96 w-2/6 rounded-xl hover:shadow-2xl bg-black/30 backdrop-blur-sm border" >
            <form onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}>
              <Inputbox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)} />



              <Inputbox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable />

              <div className="flex justify-center">
                <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-14 w-11/12 rounded-xl mt-4 flex items-center justify-center text-2xl text-white">Convert</button>
              </div>
            </form>
          </div>
          <div className="flex absolute cursor-pointer mt-32">
            <img src="3.png" className="h-16 w-16" onClick={swap} />
          </div>
        </div>
        <h2 className="flex justify-center mt-24">&#169; 2023 Copywrite by Vinay Garg</h2>
      </div>
    </>
  )
}

export default App
