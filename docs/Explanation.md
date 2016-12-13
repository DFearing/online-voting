Let’s do a thought experiment and work through some of the problems with an online voting system and see if we might be able to design an acceptable system. If we succeed, we could change the course of human history. If we fail, we’ll learn something new. Seems worth the risk!

If we start with just the minimal functionality to even call ourselves a voting system, I think we need to be able to record a voter’s preference and protect against duplicate votes. That sounds like a reasonable minimum.

For recording the votes, there is a technology known as the blockchain that allows information to be stored in a way that prevents it from being changed. You can read more about the blockchain on Wikipedia. How it works is beyond the scope of this design, but, it works as a public and permanent storage location immune to tampering, at least as secure as paper records, although I would argue considerably more secure.

Now that storage is figured out, what do we want to store? Obviously the voter’s preference, but what can we do to avoid duplicate votes? The easiest solution would be to record the vote and a unique identifier, like a social security number. That’s not a great design, but let’s go with it.

Now we have votes being recorded on the blockchain with the voter’s social security number. But what prevents me from voting as you if I know your social security number? At this point, trust, which is something we don’t want to rely on in our voting system, so let’s fix that problem first.

But first, we need to take a brief detour to talk about the difference between online and offline systems. Basically, if a computer is connected to the internet (online), it is infinitely more likely to be compromised than a computer that is not connected to the internet (offline) with all communication to and from the computer is tightly controlled via a physical access medium, like a thumb drive. So, for any sensitive data we want to prefer to keep it on offline systems and only store less sensitive data in online systems.

What if we sent each eligible voter a unique code in the mail, a registration code, to their registered address that they could include with their vote? That would be as secure as the vote by mail systems that are currently in use. Because the registration code links the vote back to a voter, we want this data protected, so it’s kept in an offline system.

Let’s define the record we want to record on the blockchain as M, with the following definition:

`M = Vote + Social Security Number + Registration Code`

Looking pretty good, but since the blockchain is public, that means we’ve just leaked our social security number to the whole world. Oops! Let’s fix that. Ideally we’d like way to encrypt the social security number so that only the government could see it. We can do that easily with another technology known as public/private key pairs. Again, Wikipedia is your friend, but the property we are currently interested is that you can encrypt a message with a public key and only the private key can decrypt it. So, let’s have the government create a public and private key, we’ll refer to them as GvPubKey and GvPrvKey. When we want to encrypt a message with the public key, we’ll write GvPubKey(message). For the time being, let’s encrypt the entire message with the government’s public key, so now M becomes:

`M = GvPubKey(Vote + Social Security Number + Registration Code)`

One problem that’s been bugging me, if you know my social security number and you intercept my registration code in the mail, you can vote as me. I think online voting should be more secure than any other form of voting, so let’s add an additional bit of authentication into our scheme.

Most states have an online system of voter records. I know this because you can go online to the state’s website and lookup your voter registration information and even make changes. So somewhere there is an online database of each eligible voter. What if we created another unique code, a digital registration code (vs. our previous physical one), and associated it with each voter record. Each state could choose how best to authenticate a visitor to their site before providing them with their online registration code. As technology advanced, this authentication method can even be improved. It can also be tailored to each state’s voting laws. Thus, M becomes:

`M = GvPubKey(Vote + Social Security Number + Physical Registration Code + Digital Registration Code)`

But, looking at our message, we can see that if the government’s private key is ever compromised, we’ll have every voter’s social security number connected to their vote in plain text. Let’s see if we can make our voters a bit more anonymous.
