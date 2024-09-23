import { formatter } from "../util/investment";

export default function CalculatorTable({ results }) {
  console.log(results);
  return (
    <>
      {results && results.length > 0 && (
        <table id="result" className="center">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {results.map((line, index) => (
              <tr key={index}>
                <td>{formatter.format(line.year)}</td>
                <td>{formatter.format(line.valueEndOfYear)}</td>
                <td>{formatter.format(line.interest)}</td>
                <td>{formatter.format(line.totalInterest)}</td>
                <td>{formatter.format(line.totalInvestment)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {(!results || results.length < 1) && <p className="center">Please enter valid data</p>}
    </>
  );
}
