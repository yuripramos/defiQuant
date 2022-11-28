const QuantTable = ({ quantArray }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full mb-14">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th
                      scope="col"
                      colSpan={2}
                      className="text-sm font-large bg-blue-300 text-gray-900 px-6 py-4 text-center"
                    >
                      Estudo Quantitativo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      _ma_30_0
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {
                        quantArray?.find((item) => item.id.includes("_ma_30_0"))
                          .result.value
                      }
                    </td>
                  </tr>
                  <tr className="bg-gray-100 border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      obv_0
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {
                        quantArray?.find((item) => item.id.includes("obv_0"))
                          .result.value
                      }
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      atr_10_0
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {
                        quantArray?.find((item) => item.id.includes("atr_10_0"))
                          .result.value
                      }
                    </td>
                  </tr>
                  <tr className="bg-gray-100 border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Volume Período % (VOL10) - TODO
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Value
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Intervalo mínimo otimizado - TODO
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      value
                    </td>
                  </tr>
                  <tr className="bg-gray-100 border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Intervalo máximo otimizado - TODO
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      value
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantTable;
