# Messages

## Voter Identity Verification
Purpose: To allow a Voter to prove their identity to the Government and register a public key for secure communication
Definition: VtPubKey + GvPubKey(RrPubKey(Registration Code + Secret) + VtPrvKey(Registration Code + Secret))  

1. VtPubKey - The Voter's public key, created for this process, to identify the record
2. GvPubKey(...) - Contents encrypted with the Government's public key  
  1. RrPubKey(...) - Contents encrypted using the Voter's registration public key, which is provided to them when they prove their identity online
    1. Registration Code - Sent to the Voter in the mail by the Government
    2. Secret - Created by the Voter
  2. VtPrvKey(Registration Code + Secret) -  Contents signed by the Voter's private key, as proof of key ownership

## Private Key Exchange
Purpose: To allow the Government to notify the Voter they've been verified and to provide a secure exchange of a new private key to allow anonymous voting  
Definition: VtPubKey + VtPubKey(AvPrvKey) + GvPrvKey(VtPubKey + AvPrvKey)

1. VtPubKey - The Voter's public key, to identify the record
2. VtPubKey(...) - Contents encrypted with the Voter's public key
  1. AvPrvKey - An anonymous voter private key, used to cast a ballot
2. GvPrvKey(VtPubKey + AvPrvKey) - Contents signed by the Government's private key, as proof of key ownership

## Public Key Validation
Purpose: To allow the Government to authorize a public key for voting  
Definition: AvPubKey + GvPrvKey(AvPubKey)  

1. AvPubKey - An anonymous voter public key, to identify a valid key
2. GvPrvKey(AvPubKey) - Contents signed with the Government's private key, as proof of key ownership

## Ballot 
Purpose: To allow a Voter to anonymously cast their vote  
Definition: AvPubKey + Vote + AvPrvKey(Vote)  

1. AvPubKey - An anonymous voter public key
2. Vote - The Voter's preference
3. AvPrvKey(Vote) - Contents signed with an anonymous voter private key, as proof of key ownership
