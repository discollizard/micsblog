export const pickRandomQuote = () => {
    const quotes = [
        'Now with zero sugar!',
        'I\'ll be back, baby.',
        "I've lost the money, lost the keys, but I'm still handcuffed to the briefcase.",
        "I'm sorry Dave, I'm afraid I can't let you do that.",
        "Dying, one day at a time.",
        "Sleep is the brother of death"
    ]

    return quotes[Math.floor(Math.random() * quotes.length)]
}