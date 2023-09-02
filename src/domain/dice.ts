export class Dice {
    private lastRollValue: number = 0;

    roll(): Dice {
        this.lastRollValue = Math.floor(Math.random() * 6) + 1;
        return this;
    }

    get value() {
        return this.lastRollValue;
    }
}