export class Confirmacao {
    positive: string
    negative: string
    error: string

    constructor(positive: string, negative: string, error: string) {
        this.positive = positive
        this.negative = negative
        this.error = error
    }
}
