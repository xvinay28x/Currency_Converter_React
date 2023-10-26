import React from 'react'

function Inputbox({

  // label: string,
  // amount,
  // onAmountChange,
  // onCurrencyChange,
  // currencyOptions: array = [],
  // selectCurrency: string = "usd",
  // amountDisable: boolean = false,
  // currencyDisable: boolean = false


}) {
  return (
    <>
    <div className="bg-white rounded-xl flex h-32 w-11/12 mt-5 ml-auto mr-auto shadow-inner">
      <div className="flex space-x-40">
          <label className="text-gray-400 text-2xl ml-5 mt-3">hello</label>
          <label className="text-gray-400 text-2xl mr-5 mt-3">Currency Type</label>
      </div>
    </div>
    </>
  )
}

export default Inputbox