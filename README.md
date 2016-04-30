# online-voting

Imagine we have three magical technologies, a stamp that only the owner of the stamp can use (**digital signatures**), envelopes that could only be opened by the right audience (**public/private key encryption**), and a public bulletin board that could never have anything taken down or modified, only things added (**blockchain**).

Now, how might we use these technologies to design a better way to vote? Let’s start first by stating some simple goals of this new way to vote. We definitely want it to be as transparent as possible, but we also want to protect the right of anonymity to a voter. We want an open system, but we also need a central authority to determine eligibility. Above all else, we must be able to verify the integrity of our own vote. So, here is my idea:

Each voter buys a new stamp and posts to the board a stamped envelope addressed to the government with information that can be used to identify them. The government can read this information to verify the voter is eligible and has not already registered a stamp. If everything looks good, the government posts a stamped envelope addressed to all that the stamp on the previous envelope was verified. Each voter then posts to the board a stamped envelope addressed to all with their vote. Once the election period is over, anyone can count up the number of votes in the envelopes that have stamps that were verified by the government. The voter can clearly see their vote on the board but without revealing their identity to anyone but the government.

We can do this...with technology!
