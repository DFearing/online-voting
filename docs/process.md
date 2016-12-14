# Process

## Pre-Election Process

1. A database of all eligible voters is created and copied to a physically secure offline system.
3. For each eligible voter, the offline system creates a public/private key pair and a unique registration code. This information is saved in the offline system. The public key for each voter, as well as the registration code encrypted with the voter's public key, are copied to an online system.
4. Each voter is mailed their registration code.

## Voting Process

### Voter Verification

1. The voter follows the directions received with their registration code and visits a website where their identity is challenged using industry standard methods of identity verification (address/work history, SSN, etc.). Once they've authenticated, they will be asked to provide their registration code as well as create a secret. Once they provide the correct registration code, the system will push a Voter Identity Verification Message on the blockchain. The system will then provide the Voter a chance to save their public/private key, registration public key, and secret.

2. The government uses the Voter Identity Verification Message to confirm the eligibility of the Voter. If they are eligible, the government will push two messages on the blockchain, the Government Identity Verfied & Key Exchange message and the Government Public Key Validation message.

### Anonymous Voting

1. The Voter visits a website and enters their private key, using this information the systems retrieves and decrypts the anonymous voter private key from the Government Identity Verified & Key Exchange message. When the voter cast a ballot, the system will use the information to push a Voter Ballot message onto the blockchain.

## Post-Election Process

### Voter Self Verification (Optional)

1. The voter visits a website and enters their private key, registration code, registration public key, and secret. Using this information the system can verify each ballot is being counted and was correctly recorded.

### Counting Ballots

Each Voter Ballot Message is considered valid and should be counted if, for it's public key, there is a corresponding Government Public Key Validation Message. 