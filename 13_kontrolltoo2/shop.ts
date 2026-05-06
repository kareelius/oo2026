class Shop {
    schedule: any

    currentDay: string
    currentTime: number

    constructor(schedule: any, day: string, time: number) {
        this.schedule = schedule

        this.currentDay = day
        this.currentTime = time
    }

    isOpen(): boolean {
        const open = this.schedule[this.currentDay].open
        const closed = this.schedule[this.currentDay].closed

        return this.currentTime >= open && this.currentTime < closed
    }

    advanceHour() {
        this.currentTime = this.currentTime + 1

        if (this.currentTime >= 24) {
            this.currentTime = 0

            this.advanceDay()
        }
    }

    checkStatus(): string {
        const open = this.schedule[this.currentDay].open
        const closed = this.schedule[this.currentDay].closed

        if (this.currentTime == open) {
            return "opening"
        }

        else if (this.currentTime == closed) {
            return "closing"
        }

        else if (this.currentTime > open && this.currentTime < closed) {
            return "still open"
        }

        else {
            return "still closed"
        }
    }

    advanceDay() {
        if (this.currentDay == "monday") {
            this.currentDay = "tuesday"
        }

        else if (this.currentDay == "tuesday") {
            this.currentDay = "wednesday"
        }

        else if (this.currentDay == "wednesday") {
            this.currentDay = "thursday"
        }

        else if (this.currentDay == "thursday") {
            this.currentDay = "friday"
        }

        else if (this.currentDay == "friday") {
            this.currentDay = "saturday"
        }

        else if (this.currentDay == "saturday") {
            this.currentDay = "sunday"
        }

        else if (this.currentDay == "sunday") {
            this.currentDay = "monday"
        }
    }
}

const shop = new Shop(
    {
        monday: {
            open: 9,
            closed: 22
        },

        tuesday: {
            open: 9,
            closed: 22
        },

        wednesday: {
            open: 9,
            closed: 22
        },

        thursday: {
            open: 9,
            closed: 22
        },

        friday: {
            open: 9,
            closed: 22
        },

        saturday: {
            open: 10,
            closed: 19
        },

        sunday: {
            open: 0,
            closed: 0
        }
    },

    "sunday",
    23
)

function checkShop(){
    const daySelect = document.getElementById("day") as HTMLSelectElement
    const timeSelect = document.getElementById("time") as HTMLSelectElement
    const statusText = document.getElementById("status")

    shop.currentDay = daySelect.value
    shop.currentTime = Number(timeSelect.value)

    statusText!.innerText = "The shop is " + shop.checkStatus()
}

console.log(shop.isOpen())
console.log(shop.checkStatus())
shop.advanceHour()
console.log(shop.currentTime)
shop.advanceDay()
console.log(shop.currentDay)