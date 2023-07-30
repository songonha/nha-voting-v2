import TokenContract from '../abi/TokenContract.json'
import VotingContract from '../abi/VotingContract.json'

export const tokenContractInstance = (web3) => {
    return new web3.eth.Contract(
        TokenContract.abi, // abi of SC voting token
        "0xbdAACD64F0E8011172BEe77eD98c3774801C0CFb" // address of Voting token
    )
}

export const votingContractInstance = web3 => {
    return new web3.eth.Contract(
        VotingContract.abi, // abi of SC governance contract
        "0xB2351d2744A10c0a2103f10c276bDB7ecfb46E6D"  // address of governance contract
    )
}