# Process

## Pre-Election

1. A database of all eligible voters is created and copied to a physically secure offline system.  
3. For each eligible voter, the offline system creates a public/private key pair and a unique registration code. This information is saved in the offline system. The public key for each voter, as well as the registration code encrypted with the voter's public key, are copied to an online system.  
4. Each voter is mailed their registration code.

## Pre-Voting

### Voter Identity Verification

1. The voter follows the directions received with their registration code and visits a website where their identity is challenged using industry standard methods of identity verification (address/work history, SSN, etc.). Once they've authenticated, they will be asked to provide their registration code as well as create a secret. Once they provide the correct registration code, the system will push a Voter Identity Verification message on the blockchain. The system will then provide the Voter a chance to save their public/private key, registration public key, and secret.

2. The government uses the Voter Identity Verification message to confirm the eligibility of the Voter. If they are eligible, the government will push two messages on the blockchain, the Private Key Exchange message and the Public Key Validation message.

## Voting

1. The Voter visits a website and enters their private key (optionally, for added security, they should also enter their registration public key, secret, and registration code). Using this information the systems retrieves and decrypts the anonymous voter private key from the Private Key Exchange message. When the voter cast a ballot, the system will use the information to push a Ballot message onto the blockchain.

## Post-Election

### Voter Self Verification (Optional)

1. The voter visits a website and enters their private key, registration code, registration public key, and secret. Using this information the system can verify each ballot is being counted and was correctly recorded.

## Counting Ballots

Each Ballot message is considered valid and should be counted if, for it's public key, there is a corresponding Public Key Validation message. 
