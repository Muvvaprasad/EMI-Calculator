import { useState } from "react"

export function EMI() {
    const [amount, setAmount] = useState(100000)
    const [year, setYear] = useState(1)
    const [rate, setRate] = useState(10)
    const [emi, setEmi] = useState(0)
    const [total, setTotal] = useState(0)
    const [interest, setInterest] = useState(0)
    const [toggle, setToggle] = useState('d-none')

    function handleAmount(e) {
        setAmount(e.target.value)
    }
    function handleYear(e) {
        setYear(e.target.value)
    }
    function handleRate(e) {
        setRate(e.target.value)
    }
    function calculate() {


        let P = amount;

        let N = year * 12;

        let R = rate / 12 / 100;

        let EMI = P * R * (Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

        let total_amount = EMI * N;
        let total_interest = total_amount-P

        setEmi(EMI)
        setToggle('d-block')
        setTotal(total_amount)
        setInterest(total_interest)

    }
    return (
        <div className="container-fluid mt-3 p-2 bg-secondary">
            <div className="bg-light m-2 m-md-4 p-4 p-md-3">
                <h1 style={{ textAlign: 'center'}} className=" fw-bold">Personal Loan EMI Calculator</h1>
                <div className="row mt-3 g-3">
                    <div className=" col-12 col-md-4">
                        <label className="fw-bold">Amount</label>
                        <input type="text" onChange={handleAmount} value={amount} className=" form-control my-1" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className=" fw-bold">Years</label>
                        <input type="text" onChange={handleYear} value={year} className=" form-control my-1" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className=" fw-bold">interest rate%</label>
                        <input type="text" onChange={handleRate} value={rate} className=" form-control my-1" />
                    </div>
                </div>
                <div className="row  my-4">
                    <div className="col-12 col-md-4">
                        <input type="range" className=" form-range" step={5000} min={100000} max={1000000} value={amount} onChange={handleAmount} />
                        <div className=" d-flex justify-content-between">
                            <span className=" fw-bold">&#8377;1,00,000</span>
                            <span className="  fw-bold">&#8377;10,00,000</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <input type="range" className=" form-range" step={1} min={1} max={5} value={year} onChange={handleYear} />
                        <div className=" d-flex justify-content-between">
                            <span className=" fw-bold">1 Year</span>
                            <span className="  fw-bold">5 Years</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <input type="range" className=" form-range" step={1} min={10} max={20} value={rate} onChange={handleRate} />
                        <div className=" d-flex justify-content-between">
                            <span className=" fw-bold">10%</span>
                            <span className="  fw-bold">20%</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-3 col-md-auto">
                        <button onClick={calculate} className=" btn btn-secondary w-100">Calculate</button>
                    </div>
                </div>
                {/* <div className={`mt-4 fs-3 text-center ${toggle}`} style={{ background: 'white' }}>
                    Your monthly installment is <span className=" fw-bold text-success">{emi.toLocaleString('en', { 'style': 'currency', 'currency': 'INR', 'maximumFractionDigits': 0 })}</span> for next {year * 12} months
                </div> */}
                <div className={`mt-4 ${toggle}`}>
                    <div className="row text-center fs-4 bg-white p-3 rounded">

                        <div className="col-12 col-md-4">
                            <div className="fw-bold">Monthly EMI</div>
                            <span className="text-success">
                                {emi.toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                    maximumFractionDigits: 0,
                                })}
                            </span>
                            <div className=" mb-3">For {year*12} months</div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="fw-bold">Total Interest</div>
                            <span className="text-danger">
                                {interest.toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                    maximumFractionDigits: 0,
                                })}
                            </span>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="fw-bold">Total Amount</div>
                            <span className="text-primary">
                                {total.toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                    maximumFractionDigits: 0,
                                })}
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}