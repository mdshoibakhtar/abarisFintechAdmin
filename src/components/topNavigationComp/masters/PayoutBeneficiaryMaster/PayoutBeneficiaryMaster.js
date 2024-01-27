import PayoutBeneficiaryMasterList from "./PayoutBeneficiaryMasterList/PayoutBeneficiaryMasterList"
import SearchStatus from "./searchStatus/SearchStatus"



function PayoutBeneficiaryMaster() {
    return (
        <>
            <section>
                <div className="container">
                    <SearchStatus />
                    <PayoutBeneficiaryMasterList />
                </div>
            </section>

        </>
    )
}
export default PayoutBeneficiaryMaster