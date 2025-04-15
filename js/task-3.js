const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        typeof newName === "string" && newName.trim() !== "" ? this.username = newName : console.log("You write invalid name!"); // Перевіряємо чи вели строку, а не число чи ще щось, та перевіряємо на пусту строку
    },
    updatePlayTime(hours) {
        typeof hours === "number" ? this.playTime += hours : console.log("You write invalid number!"); // Перевіряємо чи вели число
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    },
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
