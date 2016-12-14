Let’s do a thought experiment and work through some of the problems with an online voting system and see if we might be able to design an acceptable system. If we succeed, we could change the course of human history. If we fail, we’ll learn something new. Seems worth the risk!

If we start with just the minimal functionality to even call ourselves a voting system, I think we need to be able to record a voter’s preference and protect against duplicate votes. That sounds like a reasonable minimum.

For recording the votes, there is a technology known as the blockchain that allows information to be stored in a way that prevents it from being changed. You can read more about the blockchain on Wikipedia. How it works is beyond the scope of this design, but, it works as a public and permanent storage location immune to tampering, at least as secure as paper records, although I would argue considerably more secure.

Now that storage is figured out, what do we want to store? Obviously the voter’s preference, but what can we do to avoid duplicate votes? The easiest solution would be to record the vote and a unique identifier, like a social security number. That’s not a great design, but let’s go with it.

Now we have votes being recorded on the blockchain with the voter’s social security number. But what prevents me from voting as you if I know your social security number? At this point, trust, which is something we don’t want to rely on in our voting system, so let’s fix that problem next.

But first, we need to take a brief detour to talk about the difference between online and offline systems. Basically, if a computer is connected to the internet (online), it is infinitely more likely to be compromised (hacked) than a computer that is not connected to the internet (offline). So, for any sensitive data we want to prefer to keep it on offline systems and only store less sensitive data in online systems.

What if we sent each eligible voter a unique code in the mail, a registration code, to their registered address that they could include with their vote? That would be as secure as the vote by mail systems that are currently in use. Because the registration code links the record back to a voter, we want this data protected, so it’s kept in an offline system. We'll store each eligable voter's information along with their new registration code in our new offline system.

Ok, time to define the record we want to record on the blockchain as M, with the following definition:

`M = Vote + Social Security Number + Registration Code`

Looking pretty good, but since the blockchain is public, that means we’ve just leaked our social security number to the whole world. Oops! Let’s fix that. Ideally we’d like way to encrypt the social security number so that only the government could see it. We can do that easily with another technology known as public/private key pairs. Again, Wikipedia is your friend, but the property we are currently interested is that you can encrypt a message with a public key and only the private key can decrypt it. So, let’s have the government create a public and private key, we’ll refer to them as GvPubKey and GvPrvKey. When we want to encrypt a message with the public key, we’ll write GvPubKey(message). For the time being, let’s encrypt the entire message with the government’s public key, so now M becomes:

`M = GvPubKey(Vote + Social Security Number + Registration Code)`

One problem that’s been bugging me, if you know my social security number and you intercept my registration code in the mail, you can vote as me. I think online voting should be more secure than any other form of voting, so let’s add an additional bit of authentication into our scheme. 

Most states have an online system of voter records. I know this because you can go online to the state’s website and lookup your voter registration information and even make changes. So somewhere there is an online database with a record for each eligible voter. What if we created another unique code, a digital registration code (vs. our previous physical one), and associated it with each voter record? Each state could choose how best to authenticate a visitor to their site before providing them with their online registration code. As technology advanced, this authentication method can even be improved. It can also be tailored to each state’s voting laws. Thus, M becomes:

`M = GvPubKey(Vote + Social Security Number + Physical Registration Code + Digital Registration Code)`

But, looking at our message, we can see that if the government’s private key is ever compromised, we’ll have every voter’s social security number connected to their vote in plain text. Let’s see if we can make our votes a bit more anonymous. Let's start by removing the social security number, that was never a very good idea to begin with. Now we have two registration codes, one physical and one digital that let the government connect a vote to a voter. While the physical registration code is fairly secure in the offline system, the digital code is still an issue if the government's private key is compromised. 

We need something that can be stored in the online database, so we can give it to authenticated voters, but when used by the voter, does not directly link them to a particular message on the blockchain, yet allows a link in the offline system. What if we leverage encryption again? If we store a public key for each voter in our online system, with the private key in the offline system, we can encrypt the physical registration code, the encrypted message will not resemble the public key, thereby providing no connection from the online database of voter information to the public message on the blockchain with our vote. However, the government can use this information to verify that the message contained the correct physical registration code, thereby achieving our goals! So, let's call these new public and private keys RrPubKey and RrPrvKey. Let's look at M again:

`M = GvPubKey(Vote + RrPubKey(Registration Code))`

We can see that our digital registration code is replaced with RrPubKey and our physical registration code is now our only registration code, so we will once again refer to it as a registration code. RrPubKey(Registration Code) has become our digital and physical registration code rolled into one. The astute observer will now note that even if the government's private key is compromised, there is no longer a connection to the online voter record. Don't believe me? Let's hack this design with the goal to reveal the identity of every voter for each vote on the blockchain. Assume the online database has been leaked and the government's private key has been revealed. So we can see all the voters information, including the registration public key each was given. But without the registration code for each voter, there is no way to associate a public key to a vote. Our only option is to guess and check. That means every possible registration code value encrypted with each public key to try to find a matching RrPubKey(Registraton Code). If done correctly, this will take on order of decades.

I like the progress we've made so far, but wouldn't it be really great if we could actually "see" our vote and know that it was being counted? The blockchain is public, so all the messages can be seen by anyone who cares to look. So, what if we added a digital signature to identify which message is our vote? We should also let the vote be recorded in plain text so that other people can see how everyone voted and verify the vote count themselves. So now we can define M as:

`M = Digital Signature + Vote + GvPubKey(Vote + RrPubKey(Registration Code))`

Another neat property of public/private keys is their ability to act as a digital signature. Just like you can encrypt a message with a public key, you can sign a message with a private key. If you provide the public key and message, anyone can verify that the signature is valid. This signature proves that you control the private key. So, let's use public/private key pairs for our digital signature too. Let's let each voter generate them, we'll call them VtPubKey and VtPrvKey. Now let's define our message again as:

`M = VtPubKey + Vote + VtPrvKey(Vote) + GvPubKey(Vote + RrPubKey(Registration Code) + VtPrvKey(Registration Code))`

Let's go through the message. First we have VtPubKey, the voter's public key. This is to allow signature verification. Next we have the vote, then we have VtPrvKey(Vote) which is a digital signature of our vote. On the very far right we can see we've also signed our registration code, that along with our vote and the results of encrypting our registration code with our registration public key is all encrypted with the government's public key.

But what is this message without a corresponding message from the government verifying the authenticity of the vote? Let's define that as V:

`V = GvPubKey + VtPubKey + GvPrvKey(VtPubKey)`

In order to tally the vote, all Ms with matching Vs are counted, everything else is ignored. If a voter wants to verify their vote on a trusted/semi-trusted system, which they absolutely should, they don't even need to worry about voting on a compromised system. Let's examine why. 

Look at M again, but this time from the perspective of a hacker looking to change the results of the election. Say you vote A, but they change your vote to B, when you verify your vote, it won't match. Even if they feed you false data and point you to an actual record on the blockchain with a vote for A, the values won't match because of the registration code. With voter verification, even a compromised voting system isn't a problem.

But, what if the government can't be trusted? If the government is providing the voting software, that could be a problem. The government could fix the election by sending all voters the same registration code. It would then create two verified records, one a vote for A, one for B. Depending on the voter's preference, it points them to the verified record. Each individual voter has what they believe to be a unique record on the blockchain, so the government would be free to rig the election.

Of course, if everyone votes on trusted third party software, the problem is eliminated, but the less trust required in a voting system, I think the better, so let's see if we can eliminate that problem. We need a way to prevent the voting software from feeding us someone else's vote, assuming the registration codes have been compromised. What if the voter provided a secret, like a password, that we could include in each vote. That way, with proper verification, voters can never be given the same blockchain message. So now M can be:

`M = VtPubKey + Vote + VtPrvKey(Vote) + GvPubKey(Vote + RrPubKey(Secret) + VtPrvKey(Registration Code + Secret))`

Now even if all registration codes are the same, the secret prevents the government from rigging the election by feeding voters existing votes on the blockchain. This also provides us another opportunity to make the system even more idiot proof. We know we are sending the registration code by physical mail, which means most voters will have to type the code into a computer. This is incredibly error prone, but we have no online method of verifying the code, yet. Remember our online voter database that stores our RrPubKey? What if we also stored RrPubKey(Registration Code)? This information can be stored online because it doesn't identify the blockchain message, that's now identified by RrPubKey(Secret). Now, when a voter enters their registration code, the online system can validate it against the voter record's RrPubKey(Registration Code) and let them make corrections before voting.

We've made tremendous progress, but we've also introduced a big problem. It's now possible for the government to know exactly how you've voted, which is never a good thing. This would largely be mitigated by procedures and not exactly the exact method of voting. But, let's see if we can do better. We want to separate our proof of identity from our vote. In order to achieve this, let's break the vote into two phases, an identity registration phase, consisting of three messages, R and V1 and V2, and a voting phase, consisting of one message M. Let's show the messages, then I'll explain the new additions

`R = VtPubKey + GvPubKey(RrPubKey(Secret) + VtPrvKey(Registration Code + Secret))`

`V1 = GvPubKey + VtPubKey + GvPrvKey(VtPubKey) + VtPubKey(VvPrvKey)`

`V2 = GvPubKey + VvPubKey + GvPrvKey(VvPubKey)`

`M = VvPubKey + Vote + VvPrivKey(Vote)`

R represents all the registration data. We start with the voter's public key, then we have our secret encrypted with our registration public key, along with a signature of our registration code and secret, all encrypted with the government's private key. We've seen this all before, nothing new here. V1 is similar to V from before, we are just letting the world know R is valid, the one key difference, we are using the Voter's public key to encrypt a new private key, VvPrvKey, Verified Voter Private Key. V2 is another public declaration stating that VvPubKey is eligible to vote. M is now using our new Verified Voter public/private key pairs. We start with the public key, followed by the vote, followed by a signature of the vote.

I think we've achieved all our goals. So, why don't we have online voting again?
