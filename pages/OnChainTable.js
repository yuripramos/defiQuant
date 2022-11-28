const OnChainTable = ({ onChainArray }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      colSpan={5}
                      className="text-sm bg-yellow-400 font-large bg-rose-800 text-gray-900 px-6 py-4 text-center"
                    >
                      Estudo On-chain
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-large text-gray-900 px-6 py-4 text-left"
                    >
                      Top 3 Pools de Liquidez
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-large text-gray-900 px-6 py-4 text-left"
                    >
                      Fee Tier
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-large text-gray-900 px-6 py-4 text-left"
                    >
                      TVL
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-large text-gray-900 px-6 py-4 text-left"
                    >
                      Vol 24 hrs
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-large text-gray-900 px-6 py-4 text-left"
                    >
                      Fees
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {onChainArray?.pools.slice(0, 3).map((item) => (
                    <tr className="bg-gray-100 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.token0.symbol}/{item.token1.symbol}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {Number(item.feeTier).toFixed(3)}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {Number(item.totalValueLockedUSD).toFixed(3)}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {Number(item.volumeUSD).toFixed(3)}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {Number(item.feesUSD).toFixed(3)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnChainTable;
