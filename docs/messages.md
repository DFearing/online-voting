# Messages

## Voter Identity Verification Message
Purpose: To allow a Voter to prove their identity to the Government and register a public key for secure communication
Definition: VtPubKey + GvPubKey(RrPubKey(Registration Code + Secret) + VtPrvKey(Registration Code + Secret))  
Explanation:

1. VtPubKey - The Voter's public key, to identify the record  
2. GvPubKey(...) - Contents encrypted with the Government's public key  
  1. RrPubKey(...) - Contents encrypted using the Voter's registration public key, which is provided to them when they prove their identity online
    1. Registration Code - Sent to the Voter in the mail by the Government
    2. Secret - Created by the Voter
  2. VtPrvKey(...) -  Contents signed by the Voter's private key, as proof of key ownership

## Government Identity Verified & Key Exchange Message
Purpose: To allow the Government to notify the Voter they've been verified and to provide their private key  
Definition: GvPubKey + VtPubKey + GvPrvKey(VtPubKey) + VtPubKey(VvPrvKey)  

## Government Public Key Validation Message
Purpose: To allow the Government to authorize a public key for voting  
Definition: GvPubKey + VvPubKey + GvPrvKey(VvPubKey)  

## Ballot Message
Purpose: To allow a Voter to anonymously cast their vote  
Definition: VvPubKey + Vote + VvPrvKey(Vote)  
